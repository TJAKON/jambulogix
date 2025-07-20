"use client";

import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import InnerNumbers from "@/components/sections/InnerNumbers";

const subServices = [
  {
    title: "Sorting Centre",
    description:
      "Our strategically located sorting centres ensure faster and more accurate parcel classification, optimized for regional and last-mile distribution. Using process automation and trained manpower, we reduce delays and enable real-time tracking across shipment flows.",
    image: "/46.jpg",
  },
  {
    title: "Fulfilment Centre",
    description:
      "Our fulfilment centres are designed to handle picking, packing, and shipping for both B2B and D2C customers. Whether it's eCommerce orders or bulk shipments, we ensure precision handling, inventory accuracy, and minimal lead time.",
    image: "/45.jpg",
  },
  {
    title: "Dark Store",
    description:
      "To meet the growing need for quick commerce and hyperlocal delivery, our dark stores are designed to act as micro-fulfilment hubs that bring inventory closer to your end customers.",
    image: "/42.jpg",
  },
  {
    title: "Cross Dock",
    description:
      "Our cross-docking facilities reduce storage time and speed up freight movement by enabling direct inbound-to-outbound transfers. It’s the ideal solution for businesses seeking to reduce warehousing costs and increase flow-through efficiency.",
    image: "/44.jpg",
  },
  {
    title: "Hub In Hub",
    description:
      "With our Hub-in-Hub model, we extend warehousing capabilities deep into Tier II/III cities by embedding micro-warehouses within major regional hubs — increasing service coverage and cutting down delivery times.",
    image: "/41.jpg",
  },
];

const steps = [
  {
    label: "Step 01:",
    title: "Pick-Up",
    description:
      "A request is initiated via our API, assigning a pickup rider within one hour for orders placed before 5 PM. The rider then collects the parcel from the customer’s doorstep.",
    image: "/63.png",
  },
  {
    label: "Step 02:",
    title: "Processing",
    description:
      "The parcel reaches our sorting or fulfilment centre, where it is scanned, quality-checked, and securely processed for return or further dispatch.",
    image: "/65.png",
  },
  {
    label: "Step 03:",
    title: "Return or Delivery",
    description:
      "The parcel is either returned to the seller, refurbished, or delivered to the next customer via optimized last-mile logistics.",
    image: "/64.png",
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
            src="/warehousing.jpg"
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
            Smarter <span className="text-[#FF7F06]"> Warehousing</span>
            <br /> Faster{" "}
            <span className="text-[#FF7F06] hover:bg-white hover:text-[#24577F] border-2 md:border-4 border-white px-3">
              Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white/90 max-w-xl mb-8"
          >
            Speed, accuracy, and flexibility—built into every step of your
            supply chain.
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#24577F] mb-6 leading-tight">
              What is Smart{" "}
              <span className="text-[#FF7F06]">Warehousing..</span>?
            </h2>

            <p className="text-black text-md md:text-lg leading-relaxed mb-4">
              In today’s competitive landscape, warehousing is not just about
              storage — it’s about enabling faster fulfilment, accurate
              deliveries, and seamless inventory flow. At Jambulogix, our Smart
              Warehousing infrastructure combines modern facilities with
              intelligent operations to give your supply chain the edge it
              needs.
            </p>

            <p className="text-black text-md sm:text-lg leading-relaxed">
              From sorting and fulfillment to last-mile prep and cross-docking,
              we offer comprehensive warehousing solutions that reduce
              turnaround time, minimize errors, and improve customer
              satisfaction.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/38.jpg"
              alt="Warehouse"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-[320px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      <InnerNumbers />

      {/* Sub Services Section */}
      <section className="bg-[#F9FAFB] py-10 md:py-20 px-3 mx-auto sm:px-20 border-t border-gray-200 ">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-0 md:gap-6 border-b border-[#24577F] mb-3 md:mb-6 justify-center">
            {subServices.map((service) => (
              <button
                key={service.title}
                onClick={() => setActiveTab(service)}
                className={`text-md md:text-4xl p-3 font-semibold transition duration-100 ${
                  activeTab.title === service.title
                    ? "text-white border-[#FF7F06] bg-[#24577F] rounded-2xl shadow-2xl mb-1 md:mb-5"
                    : "text-[#24577F] hover:text-[#FF7F06]"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 "
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
              <p className="text-black text-base sm:text-lg leading-relaxed">
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
              { icon: "🚀", text: "Accelerated Re-Inventory Management" },
              { icon: "✈️", text: "Flexible Returns via Air or Surface" },
              { icon: "🔗", text: "Seamless API & Tech Integration" },
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
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
