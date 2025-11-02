"use client";

import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import InnerNumbers from "@/components/sections/InnerNumbers";

const subServices = [
  {
    title: "Sort Centre",
    subtitle: "Faster Turnarounds. Smarter Deliveries.",
    description:
      "Our strategically located Sort Centres are the nerve centers of speed and accuracy. Designed for high-volume efficiency and built for regional and last-mile optimization, they ensure your shipments are in the right place — at the right time. With a blend of process automation, data-driven workflows, and skilled manpower, we minimize touchpoints, eliminate delays, and enable real-time visibility across every shipment. Less lag. More precision. Seamless flow. That’s the Jambulogix sort advantage.",
    image: "/46.jpg",
  },
  {
    title: "Fulfilment Centre",
    subtitle: "Engineered for Fast. Built for Scale. — Coming Soon",
    description:
      "At Jambulogix, we're building the next generation of tech-enabled Fulfilment Centres — designed to power high-speed order processing, precision pick-pack-ship, and seamless inventory flow across channels. Our upcoming facilities will leverage automation, data intelligence, and scalable design to reduce turnaround times, eliminate errors, and deliver unmatched efficiency — from warehouse to doorstep. Built for tomorrow. Ready for scale. Engineered to deliver.",
    image: "/services/4.jpg",
  },
  {
    title: "Dark Store",
    subtitle: "Delivering Fast, From Closer Than Ever – Coming Soon",
    description:
      "Jambulogix is gearing up to launch a network of smart Dark Stores — hyperlocal fulfilment hubs built to serve the rising demand for ultra-fast, last-mile deliveries. Strategically placed in high-demand zones, our Dark Stores will enable real-time inventory access, rapid order picking, and seamless dispatch — redefining how urban logistics operates. Fast. Flexible. Hyperlocal. Our Dark Stores will bring the future of fulfilment even closer to your customers.",
    image: "/services/7.jpg",
  },
  {
    title: "Cross Dock",
    subtitle: "We Move, So You Don’t Wait – Coming Soon",
    description:
      "At Jambulogix, our Cross-Dock model is built for speed — not storage. Shipments flow in, get sorted, and head right back out — saving you time, space, and cost. With smart coordination and a customer-first mindset, we keep your supply chain in motion — just the way it should be. Less idle. More action. That’s the Jambulogix promise..",
     image: "/services/3.jpg",
  },
  {
    title: "Hub In Hub",
    subtitle: "Everything Connected. Everything Moving– Coming Soon",
    description:
      "At Jambulogix, our upcoming Hub-in-Hub model brings everything under one roof — sorting, fulfilment, cross-dock, and last-mile prep — enabling a smarter, faster, and more agile supply chain. It’s not just a hub — it’s an ecosystem, built to reduce handovers, cut delays, and put your cargo on the move with precision. One hub. Infinite flow. Powered by Jambulogix.",
    image: "/41.jpg",
  },
  {
    title: "QuickRack",
    subtitle: "Safe Shelves, Smarter Retail. Coming Soon",
    description:
      "QuickRack (Retail Warehousing) is designed to give retailers a competitive edge through smarter, greener, and more scalable storage solutions. Our facilities are strategically located, digitally enabled, and built with efficiency in mind—ensuring products move from shelf to shopper with speed and reliability. From inventory optimization to last-mile readiness, we provide seamless support for retailers to grow, adapt, and thrive in a fast-changing market",
    image: "/services/5.jpg",
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
            Warehousing Reimagined for the New-Age Supply Chain Speed, accuracy,
            and flexibility—built into every step of your supply chain
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
            <h2 className="  text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-[#24577F] ">
              Smart Sustainable
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-[#FF7F06] ">
              Customer - First
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-[#FF7F06] mb-3 ">
              Warehousing...
            </h2>

            {/* <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-4">
              In today’s competitive landscape, warehousing is not just about
              storage — it’s about enabling faster fulfilment, accurate
              deliveries, and seamless inventory flow. At Jambulogix, our Smart
              Warehousing infrastructure combines modern facilities with
              intelligent operations to give your supply chain the edge it
              needs.
            </p>
            <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
              From sorting and fulfillment to last-mile prep and cross-docking,
              we offer comprehensive warehousing solutions that reduce
              turnaround time, minimize errors, and improve customer
              satisfaction.
            </p> */}
            <p className="text-gray-700 text-md sm:text-md leading-relaxed mb-3">
              Modern warehousing is more than storage — it’s about speed,
              accuracy, and intelligent flow. At Jambulogix, our Smart
              Warehousing combines advanced infrastructure with data-driven
              operations to give your supply chain the agility it needs.
            </p>
            <p className="text-gray-700 text-md sm:text-md leading-relaxed mb-3">
              From fast sorting and fulfillment to last-mile prep and
              cross-docking, we streamline every step to reduce turnaround time,
              cut errors, and boost customer satisfaction.
            </p>
            <p className="text-gray-700 text-md sm:text-md leading-relaxed mb-3">
              With our focus on Green Warehousing, we integrate energy-efficient
              and sustainable practices across our facilities — helping you grow
              responsibly.
            </p>
            <p className="text-gray-700 text-md sm:text-md leading-relaxed mb-3">
              Most importantly, we put you first. At Jambulogix, you’re not just
              a client — you’re a partner. Our collaboration is built on trust,
              transparency, and a shared goal of success.
            </p>
            <p className="text-black font-bold text-md sm:text-lg">
              With Jambulogix, expect more than logistics. Expect a
              <span className=" uppercase font-bold text-[#24577F]">
                {" "}
                RELATIONSHIP{" "}
              </span>
              that delivers.
            </p>
            <p className="text-black font-bold text-md sm:text-lg text-end leading-relaxed">
              box with jlx logo change
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
                className={`text-md md:text-3xl p-3 font-semibold transition duration-100 ${
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
              <h3 className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-[#FF7F06] mb-4 leading-tight">
                {activeTab.subtitle}
              </h3>
              <p className="text-gray-700 text-base sm:text-md leading-relaxed">
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
              { icon: "🚀", text: "Faster Turnarounds" },
              { icon: "✈️", text: "Real-Time Visibility" },
              { icon: "🔗", text: "Error-Free Operations" },
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
              { icon: "🔗", text: "Lesser Carbon Footprints" },
              { icon: "🔗", text: "Built for Scale" },
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 px-6 sm:px-20 bg-[#F0F4F8]">
        <div className="max-w-8xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#24577F] mb-3 md:mb-6">
            Designed For{" "}
            <span className=" text-[#FF7F06]">Mordern Commerce</span>
          </h2>
          <p className="text-gray-700 text-md md:text-lg mb-8 md:mb-16 max-w-7xl mx-auto leading-relaxed">
            Our warehousing solutions are built to grow with you — whether
            you're a ambitious start-up, a scaling SME, or a large enterprise.
            At Jambulogix, we offer tech-enabled infrastructure, fast turnaround
            times, real-time inventory visibility, and strategically located
            facilities — all backed by our commitment to a low carbon footprint
            through sustainable operations.
          </p>

          <motion.div
            className="grid sm:grid-cols-4 gap-6 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { img: "/19.jpg", label: "E-commerce Enterprises" },
              { img: "/18.jpg", label: "Online Sellers & SMEs" },
              { img: "/10.jpg", label: "Brands & D2C Companies" },
              { img: "/10.jpg", label: "Budding Startup" },
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
                text: "Scalable Support",
                desc: "Grow without infrastructure burden",
              },

              {
                icon: "🔐",
                text: "Faster Turnarounds",
                desc: "Speed that meets market demands",
              },
              {
                icon: "🔐",
                text: "Smart Visibility",
                desc: "Real-time Inventory & movement tracking",
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
            className="grid sm:grid-cols-2 gap-6 md:gap-10  max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Green Operations",
                desc: "Lower Carbon Footprint Future-ready",
              },
              {
                icon: "🔐",
                text: "Reliable Partnership",
                desc: "Customer first, always-on support",
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
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 text-center">
            How does it <span className=" text-[#FF7F06]">work...?</span>
          </h2>

        
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-4"
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
