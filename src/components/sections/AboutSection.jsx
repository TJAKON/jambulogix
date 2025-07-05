"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="px-6 sm:px-20 py-20 bg-white/95 text-black">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Overlapping Animated Images */}
        <div className="relative w-full h-[420px]">
          {/* Decorative Blurred Circle */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF7F06]/80 blur-3xl rounded-full z-0"></div>
          <div className="absolute bottom-10 -right-10 w-32 h-32 bg-[#24577F]/60 blur-2xl rounded-full z-0"></div>

          {/* Top Front Image */}
          <motion.div
            className="absolute -top-20 -left-10 w-2/3 h-3/5 z-10 rounded-xl overflow-hidden ring-4 ring-white shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/test3.jpg"
              alt="About 1"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Lower Mid Image */}
          <motion.div
            className="absolute -bottom-30 left-15 w-2/3 h-2/3 z-30 rounded-xl overflow-hidden ring-4 ring-white shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/test1.jpg"
              alt="About 2"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Back Image */}
          <motion.div
            className="absolute top-10 -right-5 w-3/5 h-2/3 z-20 rounded-xl overflow-hidden ring-4 ring-white shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/test4.jpg"
              alt="About 3"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Optional Gradient Overlay Background */}
          <div className="absolute inset-0 -top-10 left-30 border-4 max-w-xl border-[#24577F] pointer-events-none z-0 rounded-2xl"></div>
        </div>

        {/* Right Side: Animated Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-bold text-[#24577F] max-w-xl">
            About Jambulogix
          </h5>
          <h2 className="text-6xl font-extrabold text-[#FF7F06] max-w-2xl">
            Transforming Your
            <span className="text-[#24577F]"> Cargo & Logistic </span>{" "}
            Experience
          </h2>
          {/* <p className="text-gray-700 text-lg capitalize">
            we are revolutionizing the Indian logistics ecosystem by offering
            responsive, tech-enabled, and customer-centric supply chain
            solutions. Born from the legacy of Synergetic Supply Chain, our
            rebranded identity, Jambulogix, brings together decades of industry
            expertise with innovation at its core.
          </p> */}
          <p className="text-gray-700 text-lg capitalize">
            Our services span B2B, B2C, D2C, eCommerce, and Express Logistics,
            offering end-to-end solutions — from smart warehousing and
            multimodal transportation to last-mile delivery and tech-driven
            supply chain management. With operations across 10,000+ PIN codes
            and a wide network of sorting centers, cross docks, dark stores, and
            distribution hubs, we are uniquely positioned to serve businesses of
            all scales with speed, reliability, and precision.
          </p>
          <ul className="space-y-2 text-lg text-gray-800 font-medium list-disc pl-5">
            <li>Tailor-made logistics for your supply chain</li>
            <li>Pan-India reach with real-time visibility</li>
            <li>Scalable solutions with dedicated support</li>
          </ul>
          {/* <button className="bg-[#FF7F06] hover:bg-[#e86e00] text-xl text-white px-6 py-3 rounded-md font-semibold transition">
            Explore Our Solutions
          </button> */}

          <button className="bg-[#24577F] text-white md:bg-[#FF7F06] md:text-[#24577F] px-4 py-2 rounded-2xl font-bold text-md md:text-xl border-2 border-white md:border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
            Explore Our Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
