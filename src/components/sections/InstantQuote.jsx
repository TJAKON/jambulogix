"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function InstantQuote() {
  const [formData, setFormData] = useState({
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupPincode: "",
    destinationAddress: "",
    destinationCity: "",
    destinationState: "",
    destinationPincode: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    packageType: "General",
    speed: "Standard (3–5 days)",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [price, setPrice] = useState(null);

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      "pickupAddress",
      "pickupCity",
      "pickupState",
      "pickupPincode",
      "destinationAddress",
      "destinationCity",
      "destinationState",
      "destinationPincode",
      "weight",
      "length",
      "width",
      "height",
      "phone",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePrice = () => {
    const baseRate = 50;
    const weight = parseFloat(formData.weight) || 0;
    const l = parseFloat(formData.length) || 0;
    const w = parseFloat(formData.width) || 0;
    const h = parseFloat(formData.height) || 0;

    const volumetricWeight = (l * w * h) / 5000;
    const chargeableWeight = Math.max(weight, volumetricWeight);

    let speedMultiplier = 1;
    if (formData.speed.includes("Express")) speedMultiplier = 1.5;
    if (formData.speed.includes("Overnight")) speedMultiplier = 2;
    if (formData.speed.includes("Same Day")) speedMultiplier = 2.5;

    return Math.round(baseRate + chargeableWeight * 10 * speedMultiplier);
  };

  useEffect(() => {
    const livePrice = calculatePrice();
    setPrice(livePrice);
  }, [
    formData.weight,
    formData.length,
    formData.width,
    formData.height,
    formData.speed,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors.");
      return;
    }

    const estimatedPrice = calculatePrice();
    setPrice(estimatedPrice);
    toast.loading("Sending quote...", { id: "quote-toast" });

    try {
      const res = await fetch("/api/instant_quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, estimatedPrice }),
      });

      if (res.ok) {
        toast.success("Quote sent successfully!", { id: "quote-toast" });
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      toast.error("Failed to send quote.", { id: "quote-toast" });
    }
  };

  const inputBase =
    "w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F06]";
  const errorStyle = "border-red-500";

  const renderInput = (name, placeholder, type = "text") => (
    <input
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      className={`${inputBase} ${errors[name] ? errorStyle : ""}`}
    />
  );

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Visual */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-screen relative">
          <div
            className="inset-0 h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/truck.png')" }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 rotate-270 flex flex-col items-center justify-start text-white text-center px-6 pt-24 sm:pt-36 lg:pt-48">
            <h2 className="text-3xl md:text-5xl text-[#FF7F06] font-extrabold">
              Fast, Safe, Hassle-Free
            </h2>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:px-16 bg-[#0A1A2F]">
          <div className="w-full max-w-2xl bg-white p-5 md:p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Get an Instant Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Pickup & Destination */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
                <div className="gap-2 md:gap-4">
                  <p className="font-medium text-gray-700">Pickup</p>
                  <div className="mb-1 md:mb-3">
                    {" "}
                    {renderInput("pickupAddress", "Address")}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
                    <div className="mb-1 md:mb-3">
                      {renderInput("pickupCity", "City")}
                    </div>
                    <div className="mb-1 md:mb-3">
                      {renderInput("pickupState", "State")}
                    </div>
                  </div>
                  <div className="mb-1 md:mb-3">
                    {renderInput("pickupPincode", "Pincode")}
                  </div>
                </div>

                <div className="gap-2 md:gap-4">
                  <p className="font-medium text-gray-700">Destination</p>

                  <div className="mb-1 md:mb-3">
                    {" "}
                    {renderInput("destinationAddress", "Address")}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
                    <div className="mb-1 md:mb-3">
                      {" "}
                      {renderInput("destinationCity", "City")}
                    </div>
                    <div className="mb-1 md:mb-3">
                      {renderInput("destinationState", "State")}
                    </div>
                  </div>
                  <div className="mb-1 md:mb-3">
                    {renderInput("destinationPincode", "Pincode")}
                  </div>
                </div>
              </div>

              {/* Package */}
              <div>
                <p className="font-medium text-gray-700">Package Details</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
                  {renderInput("weight", "Wt (kg)")}
                  {renderInput("length", "L (cm)")}
                  {renderInput("width", "W (cm)")}
                  {renderInput("height", "H (cm)")}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3">
                <select
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  className={inputBase}
                >
                  <option>General</option>
                  <option>Fragile</option>
                  <option>Perishable</option>
                  <option>Heavy</option>
                  <option>Electronic</option>
                  <option>Document</option>
                  <option>Furniture</option>
                </select>
                <select
                  name="speed"
                  value={formData.speed}
                  onChange={handleChange}
                  className={inputBase}
                >
                  <option>Standard (3–5 days)</option>
                  <option>Express (1–2 days)</option>
                  <option>Overnight</option>
                  <option>Same Day</option>
                </select>
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-3">
                {renderInput("email", "Email (optional)", "email")}
                <div>
                  {renderInput("phone", "Phone Number", "tel")}
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Price & Submit */}
              {price !== null && (
                <div className="text-center text-green-600 font-semibold text-lg">
                  Estimated Price: ₹{price}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#FF7F06] hover:bg-orange-500 text-white py-3 rounded-lg font-bold transition"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
