"use client";

import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";

const subServices = [
  {
    title: "FTL (Full Truck Load)",
    description:
      "Our FTL services offer dedicated truck capacity for clients with bulk shipments or high-volume movement needs. Ideal for B2B and enterprise clients, we ensure on-time dispatches, real-time tracking, and complete consignment visibility.",
    image: "/16.jpg",
  },
  {
    title: "Surface Express",
    description:
      "Speed meets scale with our Surface Express service — designed for businesses that need faster-than-standard transit times without the cost of air. This solution leverages our extensive road network and strategic hub placement to ensure timely delivery with high operational efficiency.",
    image: "/22.jpg",
  },
  {
    title: "Air Express",
    description:
      "When every minute counts, our Air Express logistics ensures swift movement of high-value or urgent consignments across India. Backed by alliances with leading domestic air carriers, we provide dependable coverage and assured timelines.",
    image: "/21.jpg",
  },
  {
    title: "Rail Parcel",
    description:
      "Sustainable, secure, and scalable — our Rail Parcel service leverages Indian Railways' vast network to offer cost-efficient cargo movement for clients shipping intercity and bulk volumes.",
    image: "/3.jpg",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "You Schedule a Pickup",
    image: "/24.jpg",
    description:
      "Use our web dashboard or API to schedule a pickup from your warehouse or store—anywhere in India.",
  },
  {
    label: "Step 2",
    title: "We Collect & Sort",
    image: "/23.jpg",
    description:
      "Our logistics team collects your parcel, sorts it at the nearest hub, and prepares it for the fastest route.",
  },
  {
    label: "Step 3",
    title: "Real-Time Delivery & Updates",
    image: "/asset.png",
    description:
      "From dispatch to doorstep, we provide real-time tracking, delivery confirmation, and customer feedback collection.",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(subServices[0]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg"
            alt="Smart Warehousing"
            fill
            className="object-cover brightness-60"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-16 max-w-7xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-8xl font-extrabold mb-5 leading-tight drop-shadow-lg"
          >
            Smarter <span className="text-[#FF7F06]"> Transportation</span>
            <br />
            Faster{" "}
            <span className="text-[#FF7F06] hover:bg-white hover:text-[#24577F] border-2 md:border-4 border-white px-3">
              Deliveries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white/90 max-w-xl mb-8"
          >
            Pan-India coverage with reliable, tech-enabled cargo movement—built
            to optimize cost, speed, and service across every route.
          </motion.p>

          {/* <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-[#FF7F06] px-8 py-4 rounded-full font-semibold hover:bg-[#d96800] shadow-lg transition"
                >
                  Explore Warehousing
                </motion.button> */}
        </div>
      </section>

      {/* What is Smart Warehousing */}
      <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div>
            <Image
              src="/3.jpg"
              alt="Warehouse"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl  w-full h-[580px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#24577F] mb-6 leading-tight">
              Why Smart <span className="text-[#FF7F06]">Transportation</span>?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-3">
              At Jambulogix, transportation is the backbone of our supply chain
              solutions. With a robust and agile network, we provide pan-India
              freight movement through road, air, and rail — all managed under a
              single, tech-enabled platform. From full truckload operations to
              time-sensitive air express, our multimodal approach ensures fast,
              safe, and cost-effective deliveries.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-3">
              We operate an asset-light model, allowing flexibility,
              scalability, and seamless connectivity across all major transport
              corridors in India.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our transportation vertical ensures consistent performance across
              diverse industries — from retail and FMCG to engineering and
              electronics — by blending flexibility, affordability, and
              real-time visibility into every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A1A2F] text-white py-16 px-6 sm:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Driving Efficiency at Unmatched Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Our smart supply chain operates with precision and scale, ensuring
            speed, coverage, and reliability across the nation.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { label: "Orders Processed Daily", value: "1 Billion+" },
            { label: "Global Offices", value: "2,200+" },
            { label: "PIN Codes Covered", value: "14,300+" },
            { label: "Fleet Strength", value: "2,500+" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="rounded-2xl bg-[#112233] p-6 shadow-lg hover:scale-105 transition-transform text-center"
            >
              <h3 className=" text-xl md:text-3xl font-extrabold mb-2 text-[#FF7F06]">
                {item.value}
              </h3>
              <p className="text-xs md:text-sm text-white/80 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sub Services Section */}
      <section className="bg-[#F9FAFB] py-20 px-6 sm:px-20 border-t border-gray-200">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-0 md:gap-6 border-b border-[#24577F] mb-6 justify-center">
            {subServices.map((service) => (
              <button
                key={service.title}
                onClick={() => setActiveTab(service)}
                className={`text-md md:text-4xl p-3 font-semibold transition duration-100 ${
                  activeTab.title === service.title
                    ? "text-white border-[#FF7F06] bg-[#24577F] rounded-2xl shadow-2xl mb-5"
                    : "text-[#24577F] hover:text-[#FF7F06]"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          {/* Content Area */}
          <motion.div
            key={activeTab.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Image */}
            <div className="w-full md:w-2/3">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                width={600}
                height={400}
                className="rounded-2xl w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#FF7F06] mb-4 leading-tight">
                {activeTab.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {activeTab.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights + Benefits */}
      <section className="py-16 px-6 sm:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">
            Key <span className="text-[#FF7F06]"> Features</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-10 mb-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { icon: "🚚", text: "AI-Powered Routing" },
              { icon: "📦", text: "Real-Time Tracking" },
              { icon: "🔗", text: "Seamless Integration" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:bg-black/30 hover:text-white hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="font-semibold text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-6 sm:px-20 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#24577F] mb-6">
            Who is it for?
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
            Our solutions are designed for businesses of all scales—whether
            you’re an ambitious start-up, a growing SME, or a large enterprise.
            We enable efficient returns, better customer satisfaction, and
            seamless supply chain support.
          </p>

          <motion.div
            className="grid sm:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { img: "/19.jpg", label: "E-commerce Enterprises" },
              { img: "/18.jpg", label: "Online Sellers & SMEs" },
              { img: "/10.jpg", label: "Brands & D2C Companies" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={320}
                  height={200}
                  className="rounded-xl h-60 bg-cover object-cover mx-auto mb-6 group-hover:scale-105 transition"
                />
                <p className="font-semibold text-lg text-gray-700">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights + Benefits */}
      <section className="py-24 px-6 sm:px-20 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#24577F] mb-12 text-center">
            Key Benefits
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { icon: "🔐", text: "50% Reduction in Fraudulent Returns" },
              { icon: "⏱️", text: "Same-Day Pickup Till 5 PM" },
              { icon: "💰", text: "100% Doorstep Refund Guarantee" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-lg text-gray-700 leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-6 sm:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 text-center">
            How does it <span className=" text-[#FF7F06]">work...?</span>
          </h2>

          {/* Step Navigation */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {steps.map((step, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveStep(step)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-5 py-3 w-3/10 rounded-2xl border-4 border-white font-semibold text-sm sm:text-xl shadow-sm transition ${
                  activeStep.label === step.label
                    ? "bg-[#FF7F06] text-black border-[#FF7F06]"
                    : "bg-white text-gray-500 border-gray-300 hover:text-[#FF7F06] hover:border-[#24577F]"
                }`}
              >
                {step.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Step Content */}
          <motion.div
            key={activeStep.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid sm:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl p-10 border-b-4 border-white hover:border-[#FF7F06] transition"
          >
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              width={550}
              height={350}
              className="rounded-2xl w-full h-[560px] object-cover shadow-lg transform hover:scale-[1.02] transition"
            />
            <div className="text-left">
              <h4 className="text-lg sm:text-6xl font-semibold text-[#24577F] mb-4">
                {activeStep.title}
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {activeStep.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
