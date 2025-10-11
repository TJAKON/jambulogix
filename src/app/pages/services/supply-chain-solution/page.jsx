"use client";

import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import InnerNumbers from "@/components/sections/InnerNumbers";

const subServices = [
  {
    title: "Recall Management",
    description:
      "Every business has unique distribution challenges — and our Distribution Solutioning service is built to address them. Whether you’re an eCommerce brand scaling across India or a manufacturer needing better market reach, we craft customized distribution strategies based on your geography, product type, and customer base.",
    image: "/81.jpg",
  },
  {
    title: "Refurbishment & Restocking",
    description:
      "Every business has unique distribution challenges — and our Distribution Solutioning service is built to address them. Whether you’re an eCommerce brand scaling across India or a manufacturer needing better market reach, we craft customized distribution strategies based on your geography, product type, and customer base.",
    image: "/81.jpg",
  },
  {
    title: "Recycling & Disposal",
    description:
      "Our Hub Care service is designed to streamline and optimize high-throughput logistics hubs. Whether it’s managing inventory flow, reducing dwell time, or enabling quick dispatch turnaround, we ensure your central operations run with clockwork precision.",
    image: "/82.jpg",
  },
];

const steps = [
  {
    label: "Step 01:",
    title: "Order",
    description:
      "A request is initiated via our API, assigning a pickup rider within one hour for orders placed before 5 PM. The rider then collects the parcel from the customer’s doorstep.",
    image: "/test.jpeg",
  },
  {
    label: "Step 02:",
    title: "Smart Dispatch",
    description:
      "The parcel reaches our sorting or fulfilment centre, where it is scanned, quality-checked, and securely processed for return or further dispatch.",
    image: "/test.jpeg",
  },
  {
    label: "Step 03:",
    title: "On-Time Delivery",
    description:
      "The parcel is either returned to the seller, refurbished, or delivered to the next customer via optimized last-mile logistics.",
    image: "/test.jpeg",
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
            src="/79.jpg"
            alt="Smart Warehousing"
            fill
            className="object-cover brightness-60"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 sm:px-16 max-w-7xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-8xl font-extrabold mb-5 leading-tight drop-shadow-lg"
          >
            Smart <span className="text-[#FF7F06]"> Returns </span>
            <br />
            Sustainable{" "}
            <span className="text-[#FF7F06] hover:bg-white hover:text-[#24577F] border-2 md:border-4 border-white px-3">
              Impact
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white/90 max-w-5xl mb-8 text-left"
          >
            Smart, seamless, and sustainable reverse logistics that help
            businesses recover value, reduce waste, and delight customers.
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
          {/* Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#24577F] mb-6 ">
              Reverse <span className="text-[#FF7F06]">Logistics</span>
            </h2>

            <p className="text-black text-base sm:text-md leading-relaxed mb-4">
              Reverse logistics is the process of moving goods from customers
              back to sellers or manufacturers for return, repair, reuse, or
              recycling. In India, with the rapid growth of e-commerce and
              increasing consumer expectations, reverse logistics has become a
              critical component of the supply chain. Efficient reverse flows
              not only reduce operational costs but also enhance customer
              satisfaction, support sustainable practices, and enable businesses
              to recover value from returned or unused products. By treating
              returns as an opportunity rather than a burden, companies can
              strengthen brand trust, optimize resources, and contribute to a
              circular economy, turning a traditionally neglected process into a
              strategic advantage.
            </p>
            <p className="text-black font-bold text-base sm:text-md leading-relaxed mb-4">
              Challenges that Businesses Face:
            </p>

            <motion.div
              className="grid sm:grid-cols-3 gap-6 md:gap-2 max-w-5xl mx-auto text-center mb-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[
                { label: "High cost and delays in processing returns" },
                { label: "Poor visibility and tracking" },
                { label: "High rate of fraudulent or false returns" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#24577F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm text-white">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 gap-6 md:gap-2 max-w-lg mx-auto text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[
                { label: "Inefficient reinventory and restocking" },
                { label: "Environmental impact of waste and disposal" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#24577F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm text-white">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Image Section */}
          <div>
            <Image
              src="/61.jpg"
              alt="Warehouse"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-[320px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <InnerNumbers />

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
                className="rounded-2xl w-full h-[250px] sm:h-[350px] md:h-[520px] object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-[#FF7F06] mb-4 leading-tight">
                {activeTab.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-md leading-relaxed">
                {activeTab.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights + Benefits */}
      <section className="py-16 px-6 sm:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto  text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">
            Key <span className="text-[#FF7F06]"> Highlights</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 mb-6 md:mb-20 text-center"
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
                className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:bg-black/30 hover:text-white hover:shadow-xl transition duration-300 cursor-pointer group"
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

      <section className="py-16 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-8xl mx-auto  text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12">
            Key <span className="text-[#FF7F06] text-6xl"> Highlights</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3  max-w-7xl mx-auto gap-6 md:gap-10 mb-6  text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🚚",
                text: "Pan-India Reach",
                desc: "Serve more markets, faster",
              },
              {
                icon: "📦",
                text: "Real-Time Visibility ",
                desc: "Know where your cargo is — always",
              },
              {
                icon: "🔗",
                text: "Cost-Optimized Movement",
                desc: "Lower spend, smarter routes. ",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white  p-5 md:p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:bg-black/30 hover:text-white hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="font-semibold uppercase text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.text}
                </p>
                <p className=" text-md text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-6 md:gap-10  text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔗",
                text: "Flexible Modal Mix ",
                desc: "Road, Rail, or Air — We move what fits best.",
              },
              {
                icon: "🔗",
                text: "Low Carbon Logistics ",
                desc: "Ship smarter. Grow greener.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white  p-5 md:p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:bg-black/30 hover:text-white hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="font-semibold uppercase text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.text}
                </p>
                <p className=" text-md text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 px-6 sm:px-20 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#24577F] mb-3 md:mb-6">
            Who is it for?
          </h2>
          <p className="text-black text-md md:text-lg mb-8 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Our solutions are designed for businesses of all scales—whether
            you’re an ambitious start-up, a growing SME, or a large enterprise.
            We enable efficient returns, better customer satisfaction, and
            seamless supply chain support.
          </p>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10"
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
      <section className="py-16 md:py-24 px-6 sm:px-20 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#24577F] mb-12 text-center">
            Key Benefits
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 text-center"
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

      <section className="py-16 md:py-24 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12">
            Values We <span className="text-[#FF7F06] text-6xl"> Deliver</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 text-center mb-10 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Expanded Reach Pan-India Network",
                desc: "Deliver anywhere with our extensive network covering 10,000+ PIN codes across India.",
              },

              {
                icon: "🔐",
                text: "Total Transparency",
                desc: "Live Shipment Tracking Stay informed at every step with real-time cargo visibility and proactive updates.",
              },
              {
                icon: "🔐",
                text: "Smarter Operations, Optimized Routing",
                desc: "Save time and cost with intelligent route planning and modal flexibility (road, rail, air)",
              },
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
                <p className="font-semibold text-lg text-gray-700 leading-relaxed uppercase">
                  {benefit.text}
                </p>
                <p className=" text-sm text-gray-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 gap-6 md:gap-10  max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Green Operations, Low Carbon Footprint",
                desc: "Ship with sustainability in mind — through greener modes and consolidated movement.",
              },
              {
                icon: "🔐",
                text: "Scalable Movement Asset-Light Model",
                desc: "Grow fast without logistical baggage — pay only for what you use, when you need it.",
              },
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
                <p className="font-semibold text-lg text-gray-700 leading-relaxed uppercase">
                  {benefit.text}
                </p>
                <p className=" text-sm text-gray-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Does It Work */}
      {/* <section className="py-16 px-6 sm:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 text-center">
            How does it <span className=" text-[#FF7F06]">work...?</span>
          </h2>


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

       
          <motion.div
            key={activeStep.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid sm:grid-cols-2 gap-6 md:gap-12 items-center bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-4 border-white hover:border-[#FF7F06] transition"
          >
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              width={550}
              height={350}
              className="rounded-2xl w-full h-[220px] md:h-[420px] object-cover shadow-lg transform hover:scale-[1.02] transition"
            />
            <div className="text-left">
              <h4 className="text-2xl sm:text-6xl font-semibold text-[#FF7F06] mb-1 md:mb-4">
                {activeStep.title}
              </h4>
              <p className="text-black text-base sm:text-lg leading-relaxed">
                {activeStep.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <TestimonialCarousel />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
