"use client";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Logistics",
    customService: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Logistics",
    "Warehousing",
    "First/Last Mile Delivery",
    "Transport (FTL/Air/Rail)",
    "Supply Chain Solutioning",
    "Other",
  ];

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{6,14}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.company.trim()) newErrors.company = "Company is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!phoneRegex.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Invalid phone number.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (formData.service === "Other" && !formData.customService.trim())
      newErrors.customService = "Please specify your requirement.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix errors in the form.");
      return;
    }

    toast.loading("Sending...", { id: "contact-toast" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Message sent!", { id: "contact-toast" });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Logistics",
        customService: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      toast.error("Send failed.", { id: "contact-toast" });
    }
  };

  return (
    <>
      <section
        className="bg-[#070B2A] text-white py-48 sm:py-40 md:py-44 text-center bg-cover bg-bottom relative"
        style={{ backgroundImage: "url('/88.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />

        <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Driving <span className="text-[#FF7F06]">Logistics Excellence</span>{" "}
            for Your Business
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
            From first mile to last mile, we deliver seamless, reliable, and
            efficient logistics solutions tailored to your business needs. Let
            us move your world—faster, smarter, and better.
          </p>
        </div>
      </section>

      <ContactSection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        services={services}
      />

      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3333.022690252245!2d76.9968427!3d28.4939235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d178e20272161%3A0x7df47ed6b7a2bab5!2sPlot%20no%2013%2C%20Daulatabad%20Main%20Rd%2C%20near%20Dwarka%20Expressway%2C%20Industrial%20Area%2C%20Sector%20106%2C%20Gurugram%2C%20Haryana%20122006!5e1!3m2!1sen!2sin!4v1761815346337!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3333.022690252245!2d76.9968427!3d28.4939235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d178e20272161%3A0x7df47ed6b7a2bab5!2sPlot%20no%2013%2C%20Daulatabad%20Main%20Rd%2C%20near%20Dwarka%20Expressway%2C%20Industrial%20Area%2C%20Sector%20106%2C%20Gurugram%2C%20Haryana%20122006!5e1!3m2!1sen!2sin!4v1761815346337!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */
}
