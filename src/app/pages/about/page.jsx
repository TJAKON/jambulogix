"use client";

import React, { useState } from "react";
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

const partners = [
  { name: "Motherson", logo: "/Clientlogo/1.png" },
  { name: "Schaeffler", logo: "/Clientlogo/2.png" },
  { name: "STUDDS", logo: "/Clientlogo/3.png" },
  { name: "Carrier", logo: "/Clientlogo/4.png" },
  { name: "Reliance Digital", logo: "/Clientlogo/5.png" },
  { name: "Croma", logo: "/Clientlogo/6.png" },
  { name: "Johnson Controls", logo: "/Clientlogo/7.png" },
  { name: "Indian Terrain", logo: "/Clientlogo/8.png" },
  { name: "Uppercase", logo: "/Clientlogo/9.png" },
  { name: "Mankind", logo: "/Clientlogo/10.png" },
  { name: "Johnson & Johnson", logo: "/Clientlogo/11.png" },
  { name: "Meesho", logo: "/Clientlogo/12.png" },
  { name: "Flipkart", logo: "/Clientlogo/13.png" },
  { name: "Amazon", logo: "/Clientlogo/14.png" },
  { name: "Domino's", logo: "/Clientlogo/15.png" },
  { name: "Reliance", logo: "/Clientlogo/16.png" },
  { name: "Zomato", logo: "/Clientlogo/17.png" },
  { name: "Dorset", logo: "/Clientlogo/18.png" },
  { name: "Inalco", logo: "/Clientlogo/19.png" },
  { name: "Fenesta", logo: "/Clientlogo/20.png" },
  { name: "Aishwaryam", logo: "/Clientlogo/21.png" },
  { name: "XpressBees", logo: "/Clientlogo/22.png" },
  { name: "Shadowfax", logo: "/Clientlogo/23.png" },
  { name: "DHL", logo: "/Clientlogo/24.png" },
  { name: "DISHA Publication", logo: "/Clientlogo/25.png" },
  { name: "SKB", logo: "/Clientlogo/26.png" },
  { name: "Del Mario", logo: "/Clientlogo/27.png" },
  { name: "Jubilant FoodWorks", logo: "/Clientlogo/28.png" },
];

// Partner categories and their respective logos
const partnerCategories = [
  {
    label: "Support Partners",
    logos: ["/Clientlogo/1.png", "/Clientlogo/2.png", "/Clientlogo/3.png"],
  },
  {
    label: "Logistics Partners",
    logos: ["/Clientlogo/22.png", "/Clientlogo/23.png", "/Clientlogo/24.png"],
  },
  {
    label: "Retail Partners",
    logos: ["/Clientlogo/13.png", "/Clientlogo/14.png", "/Clientlogo/12.png"],
  },
  {
    label: "Technology Partners",
    logos: ["/Clientlogo/5.png", "/Clientlogo/6.png", "/Clientlogo/7.png"],
  },
];

export default function AboutUsPage() {
  const [activeCategory, setActiveCategory] = useState(partnerCategories[0]);
  return (
    <div className="">
      {/* Hero Banner */}
      <section className="relative w-full h-[100vh] md:h-screen overflow-hidden">
        <Image
          src="/95.jpg"
          alt="About Jambulogix"
          fill
          className="object-cover object-right md:object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold">
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
        <div className="space-y-10 hidden sm:block">
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
            solutions. Jambulogix, brings together decades of industry expertise
            with innovation at its core.
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

        <div className="space-y-10 block sm:hidden">
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

      <section className="relative bg-[#24577F] text-white py-12 md:py-24 px-6 sm:px-20 overflow-hidden">
        {/* Decorative Gradient Blobs */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#FF7F06]/40 rounded-full blur-3xl opacity-60 z-0" />
        <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-[#FF7F06]/30 rounded-full blur-2xl opacity-50 z-0" /> */}

        <div className="max-w-6xl mx-auto relative z-10 grid sm:grid-cols-2 gap-8 md:gap-16 items-start">
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

      <section className=" py-12 md:py-24 px-6 sm:px-20 bg-black/60">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#FF7F06] mb-8 md:mb-16">
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
      <section className=" py-10 md:py-20 px-6 sm:px-20 mx-auto bg-white/95">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Right Side: Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl text-center  font-bold text-[#FF7F06] mb-6">
              Our Core Values
            </h2>
            <p className="text-black text-md md:text-lg mb-6">
              At Jambulogix, our values drive everything — from decision-making
              to daily operations.
            </p>
            <ul className="space-y-4">
              {[
                "Customer Centricity: At the heart of all we do",
                "People First: A great place to work and grow",
                "Purpose-led Commerce: Business with sustainability and social accountability",
                "Transparency & Simplicity: We keep it honest and efficient",
                "Integrity & Governance: Committed to ethical operations and eco-conscious decisions",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group hover:pl-2 transition-all"
                >
                  <span className="text-black font-bold">•</span>
                  <p className="text-black group-hover:text-[#24577F] transition duration-300">
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

      {/* Partners Grid */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className=" text-4xl md:text-5xl font-bold text-[#24577F] mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            We collaborate with industry leaders across sectors. Choose a
            category to view our partners.
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 gap-10 items-center max-w-8xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              className="flex justify-center items-center w-fit h-fit bg-transparent rounded-xl shadow-sm p-1  md:p-4 hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-cover h-12 md:12 md:h-24 md:w-28"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className=" py-10 md:py-20 px-6 sm:px-20 mx-auto bg-white/95">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="hidden sm:flex">
            <div className="grid grid-cols-2 gap-4 ">
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
                        [
                          "Innovation",
                          "Empathy",
                          "Transparency",
                          "Reliability",
                        ][idx]
                      }
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Side: Content */}
          <div>
            <h2 className=" text-4xl md:text-5xl font-bold text-[#FF7F06] mb-6">
              Our Growth Strategy
            </h2>
            <p className="text-black text-md md:text-lg mb-6">
              Our expansion blueprint is simple yet powerful — Grow by Square
              Feet & Pin Codes.
            </p>
            <ul className="space-y-4">
              {[
                "Scaling our physical infrastructure across India",
                "Extending reach to over 10,000 PIN codes",
                "Innovating daily to raise the bar on package delivery efficiency",
                "Acquiring new customers by targeting Total Addressable Market (TAM)",
                "Forming strategic partnerships and alliances to increase coverage, capability, and capacity",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group hover:pl-2 transition-all"
                >
                  <span className="text-black font-bold">•</span>
                  <p className="text-black group-hover:text-[#24577F] transition duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-4 ">
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
                        [
                          "Innovation",
                          "Empathy",
                          "Transparency",
                          "Reliability",
                        ][idx]
                      }
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Left Side: Image */}
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
