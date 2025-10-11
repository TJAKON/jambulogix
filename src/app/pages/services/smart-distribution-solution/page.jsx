"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import InnerNumbers from "@/components/sections/InnerNumbers";

const subServices = [
  {
    title: "First Mile ",
    subtitle: "Reliable Start Sustainable Moves.",

    description:
      "We know every great delivery begins with a smooth first move. Our First Mile services are built to swiftly move your shipments from your pickup point to the next destination — with precision, care, and efficiency. Powered by a tech-enabled fleet, deep regional reach, and a commitment to low-carbon operations, we ensure your supply chain starts right — and sustainably — every time.",
    image: "/112.jpeg",
  },
  {
    title: " Last Mile",
    subtitle: "Right Time. Right Door. Every Time.",

    description:
      "The final step matters most — and we make it count. Our Last Mile services ensure your products reach customers on time, intact, and with care, creating a seamless delivery experience that reflects your brand promise. With a tech-enabled delivery network, trained fleet, and a focus on eco-efficient routing, we help you achieve faster drop-offs while reducing your carbon footprint — making every delivery better for your customers and the planet.",
    image: "/29.jpg",
  },
];

const steps = [
  {
    label: "Step 01:",
    title: "Order",
    description:
      "A request is initiated via our API, assigning a pickup rider within one hour for orders placed before 5 PM. The rider then collects the parcel from the customer’s doorstep.",
    image: "/31.jpg",
  },
  {
    label: "Step 02:",
    title: "Smart Dispatch",
    description:
      "The parcel reaches our sorting or fulfilment centre, where it is scanned, quality-checked, and securely processed for return or further dispatch.",
    image: "/34.jpg",
  },
  {
    label: "Step 03:",
    title: "On-Time Delivery",
    description:
      "The parcel is either returned to the seller, refurbished, or delivered to the next customer via optimized last-mile logistics.",
    image: "/36.jpg",
  },
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.replace(/[^0-9]/g, ""));
      if (isNaN(end)) return;

      const duration = 5000;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animate();
    }
  }, [inView, target]);

  return (
    <h3
      ref={ref}
      className="text-xl md:text-3xl font-extrabold mb-2 text-[#FF7F06]"
    >
      {count.toLocaleString()}
      {target.includes("Billion") ? "+" : ""}
    </h3>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState(subServices[0]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const stats = [
    {
      label: "Pincodes Covered",
      value: "15000",
      suffix: "+",
    },
    { label: "States Served", value: "25", suffix: " +" },
    { label: "Low Carbon Operations", value: "50", suffix: "+" },
    { label: "Tech-Enabled Control", value: "5", suffix: " +" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/29.jpg"
            alt="Smart Warehousing"
            fill
            className="object-cover brightness-70 "
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
            Smart <span className="text-[#FF7F06]"> Distribution</span>
            <br /> Smarter{" "}
            <span className="text-[#FF7F06] hover:bg-white hover:text-[#24577F] border-2 md:border-4 border-white px-3">
              Coverage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white max-w-2xl mb-8"
          >
            Distribution services built to help you reach more customers —
            faster and smarter. With intelligent route planning, real-time
            visibility, and a focus on reducing carbon impact, we make your
            distribution efficient, scalable, and sustainable.
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
          {/* Image Section */}
          <div>
            <Image
              src="/32.jpg"
              alt="Warehouse"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-[320px] md:h-[600px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-[#24577F] mb-6">
              Distribution, Reimagined <br />
              <span className="text-[#FF7F06] text-6xl ">Reach, Speed & </span>
              <span className="text-[#FF7F06] text-6xl  ">Control</span>
            </h2>

            <p className="text-black text-md sm:text-md leading-relaxed mb-4 ">
              Distribution isn’t just a step in the supply chain — it’s the
              heartbeat of customer experience. Our tech-enabled, data-driven
              network is built for speed, precision, and scalability,
              transforming how goods move across India. From First Mile to Last
              Mile, every shipment flows through a digitally optimized
              ecosystem, ensuring real-time visibility, seamless coordination,
              and on-time reliability. By combining smart infrastructure with
              digital intelligence, we help brands streamline deliveries, reduce
              inefficiencies, and enhance operational performance.
            </p>
            <p className="text-black text-md sm:text-md leading-relaxed mb-4 ">
              Our network is designed to handle high volumes while maintaining
              consistent service quality and customer satisfaction. With a
              relentless focus on agility, transparency, and accountability.{" "}
              <span className="text-black font-bold">
                We ensures every delivery moves efficiently, reliably, and with
                full visibility — redefining the way businesses reach their
                customers across India.
              </span>
            </p>

            {/* <p className="text-black text-md sm:text-md leading-relaxed">
              By combining physical infrastructure with digital intelligence, we
              help brands across sectors streamline their movement of goods —
              from origin to doorstep.
            </p> */}
          </div>
        </div>
      </section>
      {/* Stats Section */}

      <section className="bg-[#0A1A2F] text-white py-16 px-6 sm:px-20">
        <div className="max-w-8xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Distribution Without{" "}
            <span className="text-[#FF7F06] text-6xl ">Limits</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 max-w-6xl mx-auto"
          >
            Our distribution engine is built for performance — combining
            precision, reach, and reliability to deliver at scale. From
            thousands of shipments to growing coverage across regions, we’re
            driving measurable impact every single day — helping brands move
            smarter and grow faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-10 max-w-6xl mx-auto text-nowrap">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="rounded-2xl text-center bg-[#112233] p-6 shadow-lg hover:scale-105 transition-transform text-nowrap"
            >
              <Counter target={stat.value + stat.suffix} />
              <p className="text-xs md:text-sm text-white/80 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sub Services Section */}
      <section className="bg-[#F9FAFB] py-10 md:py-20 px-3 mx-auto sm:px-20 border-t border-gray-200">
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
              <h3 className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-[#FF7F06] mb-4 leading-tight">
                {activeTab.subtitle}
              </h3>
              <p className="text-black text-base sm:text-md leading-relaxed">
                {activeTab.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights + Benefits */}

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
                text: "On-Time Pickup ",
                desc: "Reliable and punctual always",
              },
              {
                icon: "🚚",
                text: "Brand Experience ",
                desc: "Final-mile service that reflects you.",
              },
              {
                icon: "🚚",
                text: "Trained Fleet ",
                desc: "Professionally managed delivery teams.",
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
                <p className="font-semibold text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
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
                icon: "🚚",
                text: "Eco Routing ",
                desc: "Lower emissions. Smarter movement.",
              },
              {
                icon: "🚚",
                text: "Live Tracking ",
                desc: "Real-time delivery visibility.",
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
                <p className="font-semibold text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
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
          <h2 className="text-4xl sm:text-6xl font-extrabold capitalize text-[#24577F] mb-3 md:mb-6">
            For Businesses of <span className=" text-[#FF7F06]">Every Scale</span>
          </h2>
          <p className="text-black text-md md:text-lg mb-8 md:mb-16 max-w-7xl mx-auto leading-relaxed">
            Our Distribution Services are built for businesses that value speed,
            visibility, and sustainable scale. Whether you're a growing SME, a
            D2C brand, or a regional distributor, Jambulogix offers the right
            balance of reach, reliability, and real-time control — making us the
            perfect partner for brands that want to deliver smarter without
            investing in heavy infrastructure.
          </p>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { img: "/19.jpg", label: "Startups & Growing Brands" },
              { img: "/18.jpg", label: "SMEs Across Sectors" },
              { img: "/10.jpg", label: "Regional & Local Distributors" },
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
          <motion.div
            className="grid sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { img: "/10.jpg", label: "E-commerce & D2C Sellers" },
              { img: "/10.jpg", label: "Sustainable & Conscious Businesses" },
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
      <section className="py-16 md:py-24 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12 text-center">
            Key <span className="text-[#FF7F06] text-6xl"> Benefits</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Flexible Service Options",
                desc: "Customizable delivery windows and options to meet diverse customer needs.",
              },

              {
                icon: "🔐",
                text: "Lower Operational Burden",
                desc: "We handle fleet, routing, and delivery — you focus on growth.",
              },
              {
                icon: "🔐",
                text: "Improved Customer Satisfaction",
                desc: "Reliable, on-time deliveries that build trust.",
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
                <p className=" text-md text-gray-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Better Cost Control",
                desc: "Shared resources and optimized routing reduce logistics costs.",
              },
              {
                icon: "🔐",
                text: "Scalable Solutions",
                desc: "Easily handle seasonal peaks or business growth without extra infrastructure.",
              },
              {
                icon: "🔐",
                text: "Sustainable Brand Value",
                desc: "Eco-efficient deliveries align with your environmental goals.",
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
                <p className=" text-md text-gray-700 leading-relaxed">
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
