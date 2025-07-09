"use client";

import React from "react";
import Image from "next/image";
import { Target, Rocket } from "lucide-react"; // or use Heroicons or custom SVGs
import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialCarousel from "@/components/sections/TestimonialSection";

const leaders = [
  {
    name: "Pankaj Deole",
    role: "Founder & CEO",
    desc: "Visionary leader driving innovation across supply chain solutions.",
    img: "/test.jpeg",
  },
  {
    name: "Rahul Sinha",
    role: "COO",
    desc: "Operational excellence expert ensuring scalable logistics operations.",
    img: "/test.jpeg",
  },
  {
    name: "Neha Rathi",
    role: "Chief Strategy Officer",
    desc: "Crafts growth strategies and data-driven decisions for expansion.",
    img: "/test.jpeg",
  },
  {
    name: "Amit Joshi",
    role: "Tech Head",
    desc: "Leads our digital transformation and intelligent logistics systems.",
    img: "/test.jpeg",
  },
];

export default function AboutUsPage() {
  return (
    <div className="">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <Image
            src="/warehousing.jpg"
          alt="About Jambulogix"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Empowering Global Logistics
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
              Delivering scalable, tech-enabled supply chain solutions to modern
              businesses across India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Summary */}
      <section className="py-20 px-6 sm:px-20 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white">
        {/* Left: Image Grid + Stats */}
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

          {/* Sub Stats */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">80L+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">2,200+</h3>
              <p className="text-sm text-gray-600">Business Connections</p>
            </div>
          </div>
        </div>

        {/* Right: Text + Stats */}
        <div>
          <h2 className="text-4xl font-bold text-[#FF7F06] mb-6">
            About Jambulogix
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Jambulogix revolutionizing the Indian logistics ecosystem by
            offering responsive, tech-enabled, and customer-centric supply chain
            solutions. Jambulogix, brings together decades of industry
            expertise with innovation at its core.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            Our services span B2B, B2C, D2C, eCommerce, and Express Logistics,
            offering end-to-end solutions — from smart warehousing and
            multimodal transportation to last-mile delivery and tech-driven
            supply chain management. With operations across 10,000+ PIN codes
            and a wide network of sorting centers, cross docks, dark stores, and
            distribution hubs, we are uniquely positioned to serve businesses of
            all scales with speed, reliability, and precision.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#24577F]">3.5M+</h3>
              <p className="text-sm text-gray-600">Shipments per Month</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#24577F]">10,000+</h3>
              <p className="text-sm text-gray-600">PIN Codes Covered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#24577F]">1,400+</h3>
              <p className="text-sm text-gray-600">Employees</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#24577F]">50+</h3>
              <p className="text-sm text-gray-600">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {/* <section className="py-16 bg-white/95 px-6 sm:px-20 grid sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Smarter Warehousing",
            image: "/test.jpeg",
          },
          {
            title: "Nationwide Transport",
            image: "/test.jpeg",
          },
          {
            title: "Tech-enabled Fulfilment",
            image: "/test.jpeg",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-60 object-cover"
            />
            <p className="p-4 font-semibold text-center text-[#24577F] group-hover:text-[#FF7F06]">
              {item.title}
            </p>
          </motion.div>
        ))}
      </section> */}

      <section className="relative bg-[#24577F] text-white py-24 px-6 sm:px-20 overflow-hidden">
        {/* Decorative Gradient Blobs */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#FF7F06]/40 rounded-full blur-3xl opacity-60 z-0" />
        <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-[#FF7F06]/30 rounded-full blur-2xl opacity-50 z-0" /> */}

        <div className="max-w-6xl mx-auto relative z-10 grid sm:grid-cols-2 gap-16 items-start">
          {/* Vision */}
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/20 transition">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-10 h-10 text-[#FF7F06]" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-md text-white/90 leading-relaxed">
              To be a passionate service catalyst that simplifies and
              strengthens the flow of commerce across India's supply chain
              ecosystem. Our aim is to create a focused and collaborative
              logistics footprint across all Indian geographies, enabling
              businesses to scale seamlessly.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/20 transition">
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="w-10 h-10 text-[#FF7F06]" />
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-md text-white/90 leading-relaxed">
              To be a dynamic and progressive logistics partner, driven by a
              culture of customer obsession, operational excellence, and
              continuous innovation. We strive to create a safe and supportive
              workplace, aiming to be recognized as the best employer in
              logistics and the most trusted name in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-20 bg-black/60">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#FF7F06] mb-16">
            Our Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden h-90 shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500 z-10"></div>

                {/* Name (always visible) */}
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-lg font-bold">{leader.name}</p>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <p className="text-[#FF7F06] font-semibold text-md mb-1">
                    {leader.role}
                  </p>
                  <p className="text-sm">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 sm:px-20 mx-auto bg-white/95">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Right Side: Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#FF7F06] mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At Jambulogix, our values drive everything — from decision-making
              to daily operations.
            </p>
            <ul className="space-y-4">
              {[
                "Innovation – We evolve with technology to stay ahead.",
                "Empathy – We value people and relationships.",
                "Transparency – We communicate with clarity and honesty.",
                "Reliability – We deliver what we promise, always.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group hover:pl-2 transition-all"
                >
                  <span className="text-[#24577F] font-bold">•</span>
                  <p className="text-gray-800 group-hover:text-[#24577F] transition duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* Left Side: Image */}
          <div className="grid grid-cols-2 gap-4">
            {["/test4.jpg", "/test3.jpg", "/test3.jpg", "/test4.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-200"
                >
                  <Image
                    src={src}
                    alt={`Core Value ${idx + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2 text-sm font-semibold backdrop-blur-sm">
                    {
                      ["Innovation", "Empathy", "Transparency", "Reliability"][
                        idx
                      ]
                    }
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Awards & Clients */}
      <section className="bg-[#F9FAFB] py-20 px-6 sm:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#24577F]">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-600 mt-3 text-md">
              We’re proud to be the preferred logistics partner for top
              companies across India.
            </p>
            <div className="mt-6 w-24 h-1 mx-auto bg-[#FF7F06] rounded-full" />
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
            {Array(18)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 w-full flex items-center justify-center"
                >
                  <Image
                    src={`/ClientLogo/${idx + 1}.png`}
                    alt={`Client ${idx + 1}`}
                    width={100}
                    height={40}
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* Footer CTA */}
      <section className="bg-[#24577F] text-white py-16 px-6 sm:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Logistics?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Let Jambulogix be your partner in building scalable, tech-driven, and
          efficient supply chains.
        </p>
        <button className="bg-[#FF7F06] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e86e00] transition">
          Contact Us
        </button>
      </section>

      <ContactSection />
    </div>
  );
}
