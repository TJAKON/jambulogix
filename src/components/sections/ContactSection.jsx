"use client";
import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactSection() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix errors in the form.");
      return;
    }

    toast.loading("Sending...", { id: "contact-toast" });

    emailjs
      .send(
        // "service_mbu89yq",
        // "template_uyjes9m",
        { ...formData }
        // "dS08Hy3gaFiNSD_du"
      )
      .then(() => {
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
      })
      .catch(() => {
        toast.error("Send failed.", { id: "contact-toast" });
      });
  };

  const inputBase =
    "w-full px-4 py-3 border border-gray-300 bg-transparent text-white placeholder-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F06]";
  const errorStyle = "border-red-500";

  return (
    <div className="bg-[#24577F]/60 backdrop-blur-3xl text-white">
      <section className="py-20 px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative w-full h-fit overflow-hidden rounded-md">
            <div className=" max-w-3xl">
              <h3 className="max-w-xl text-7xl font-extrabold uppercase mb-3 text-[#FF7F06]">
                Gain Leverage For <span className=" text-white">Your</span> Business With <span className=" text-white">jambulogix</span>
              </h3>
              <p className=" max-w-2xl text-lg mb-6 text-white/80 text-center sm:text-left">
                We’d love to hear from you! Whether you’re a business looking
                for scalable logistics solutions, a partner exploring
                collaboration, or a candidate interested in joining our journey
                — we’re just a message away.
              </p>
            </div>
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full rounded-md"
            >
              <source src="/Video-Showreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`${inputBase} ${errors.name ? errorStyle : ""}`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className={`${inputBase} ${errors.company ? errorStyle : ""}`}
              />
              {errors.company && (
                <p className="text-red-400 text-sm">{errors.company}</p>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`${inputBase} ${errors.email ? errorStyle : ""}`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}

              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(phone) =>
                  setFormData((prev) => ({ ...prev, phone }))
                }
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerClass="!w-full !bg-[#070B2A] !rounded-md !border !border-gray-300 focus-within:!ring-2 focus-within:!ring-[#FF7F06]"
                inputClass="!w-full !h-[52px] !bg-[#070B2A] !text-white !pl-16 !pr-4 !border-none placeholder-white/50"
                buttonClass="!border-r !border-gray-600 !px-3"
                dropdownClass="text-black"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-[#070B2A] text-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F06]"
              >
                {services.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {formData.service === "Other" && (
                <>
                  <input
                    type="text"
                    name="customService"
                    value={formData.customService}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className={`${inputBase} ${
                      errors.customService ? errorStyle : ""
                    }`}
                  />
                  {errors.customService && (
                    <p className="text-red-400 text-sm">
                      {errors.customService}
                    </p>
                  )}
                </>
              )}

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`${inputBase} ${errors.message ? errorStyle : ""}`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-[#FF7F06] text-[#070B2A] px-6 py-3 rounded-md hover:bg-orange-500 transition font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* 
        <div className="grid lg:grid-cols-3 bg-[#2244f8] text-white p-8 mt-16 space-y-6 lg:space-y-0">
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="w-5 h-5" /> Call Us
            </h4>
            <p className="ml-7 text-xl font-bold mt-1">+91 9109416188</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <Mail className="w-5 h-5" /> Contact Emails
            </h4>
            <p className="ml-7 mt-1 font-medium">t.jaiprakash20@gmail.com</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <MapPin className="w-5 h-5" /> Location
            </h4>
            <p className="ml-7 mt-1 font-medium">
              Raipur, Chhattisgarh, India
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
