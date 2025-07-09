"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="px-6 sm:px-20 py-20 bg-white/95 text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Overlapping Animated Images */}

        <div className="space-y-10">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full aspect-square overflow-hidden rounded-xl shadow">
              <Image
                src="/warehousing.jpg"
                alt="Team 1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full aspect-square overflow-hidden rounded-xl shadow">
              <Image
                src="/test1.jpg"
                alt="Warehouse 1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full aspect-square overflow-hidden rounded-xl shadow">
              <Image
                src="/test2.jpg"
                alt="Transport 1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full aspect-square overflow-hidden rounded-xl shadow">
              <Image
                src="/test3.jpg"
                alt="Delivery 1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Vertical Animation for Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-bold text-[#24577F] max-w-xl">
            About Jambulogix
          </h5>
          <h2 className="text-3xl md:text-6xl font-extrabold text-[#FF7F06] max-w-2xl">
            Transforming Your{" "}
            <span className="text-[#24577F]">Cargo & Logistic</span> Experience
          </h2>

          <p className="text-gray-700 text-sm md:text-lg capitalize">
            Our services span B2B, B2C, D2C, eCommerce, and Express Logistics,
            offering end-to-end solutions — from smart warehousing and
            multimodal transportation to last-mile delivery and tech-driven
            supply chain management. With operations across 10,000+ PIN codes
            and a wide network of sorting centers, cross docks, dark stores, and
            distribution hubs, we are uniquely positioned to serve businesses of
            all scales with speed, reliability, and precision.
          </p>

          <ul className="space-y-2 text-sm md:text-lg  text-gray-800 font-medium list-disc pl-5">
            <li>Tailor-made logistics for your supply chain</li>
            <li>Pan-India reach with real-time visibility</li>
            <li>Scalable solutions with dedicated support</li>
          </ul>

          <button className="bg-[#24577F] text-white md:bg-[#FF7F06] md:text-[#24577F] px-4 py-2 rounded-2xl font-bold text-md md:text-xl border-2 border-white md:border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
            Explore Our Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
