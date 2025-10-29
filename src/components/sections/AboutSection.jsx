"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative px-6 sm:px-20 py-20 bg-white/95 text-black overflow-hidden">
      {/* Decorative Background Image */}
      <div className="hidden sm:block absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Image
          src="/graphics.png"
          alt="Background Graphic"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image Grid */}
        <div className="space-y-10 hidden sm:block">
          <div className="">
            {/* {["/images/a3.png", "/images/a1.jpg", "/images/a2.png", "/images/a4.png"].map((src, index) => (
              <div
                key={index}
                className="w-full aspect-square overflow-hidden rounded-xl shadow"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            ))} */}

            <div
              // key={index}
              className="w-full h-full aspect-square overflow-hidden rounded-xl shadow"
            >
              <Image
                src="/images/aboutus.jpg"
                alt={`about`}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Animated Text */}
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

          <p className="text-gray-700 text-sm md:text-lg ">
            Our services span B2B, B2C, D2C, eCommerce, and Express Logistics,
            offering end-to-end solutions — from smart warehousing and
            multimodal transportation to last-mile delivery and tech-driven
            supply chain management. With operations across 10,000+ PIN codes
            and a wide network of sorting centers, cross docks, dark stores, and
            distribution hubs, we are uniquely positioned to serve businesses of
            all scales with <span className=" font-bold uppercase">speed, reliability, and precision.</span>
          </p>

          <ul className="space-y-2 text-sm md:text-lg text-gray-800 font-medium list-disc pl-5">
            <li>Tailor-made logistics for your supply chain</li>
            <li>Pan-India reach with real-time visibility</li>
            <li>Scalable solutions with dedicated support</li>
          </ul>

          <Link href="/pages/services/smart-warehousing-solution" passHref>
            <button className="bg-[#24577F] text-white md:bg-[#FF7F06] md:text-[#24577F] px-4 py-2 rounded-2xl font-bold text-md md:text-xl border-2 border-white md:border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
              Explore Our Solutions
            </button>
          </Link>
        </motion.div>

        <div className="space-y-10 block sm:hidden">
          <div className="grid grid-cols-2 gap-4">
            {["/8.jpg", "/4.jpg", "/12.jpg", "/13.jpg"].map((src, index) => (
              <div
                key={index}
                className="w-full aspect-square overflow-hidden rounded-xl shadow"
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
