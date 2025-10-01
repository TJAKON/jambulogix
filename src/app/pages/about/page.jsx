"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Rocket, Globe2, Zap, Users, Network } from "lucide-react";
import { Heart, Lightbulb, Leaf } from "lucide-react";
import { Target } from "lucide-react"; // or use Heroicons or custom SVGs
import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import { FaLeaf, FaRecycle } from "react-icons/fa";
import { ThumbsUp, Layers, Truck, Factory } from "lucide-react";

import { ShieldCheck, Video, Map, Package, Lock, Eye } from "lucide-react";

const sustainabilityData = [
  "Reduction In Transit Damages",
  "Direct/Indirect Savings",
  "Improved Handling & Packaging",
  "Carbon Neutral Delivery Solution",
  "Increase Efficiency",
  "Reduced Carbon Footprint",
  "Green Logistics & Transportation Solution",
  "Customized Design",
];

const sustainabilityPoints = [
  "Reduction in Transit Damages",
  "Direct & Indirect Savings",
  "Improved Handling & Packaging",
  "Carbon Neutral Delivery",
  "Increased Operational Efficiency",
  "Reduced Carbon Footprint",
  "Green Transportation Solutions",
  "Customized Packaging Design",
];

const leaders = [
  {
    name: "Nikhilendu Shekhar",
    role: "Founder & CEO",
    desc: "Visionary leader driving innovation across supply chain solutions.",
    img: "/n5.png",
  },
  {
    name: "Satish kumar",
    role: "Co-Founder & COO",
    desc: "Leading operations with precision, innovation, and customer-focused logistics solutions.",
    img: "/p6.png",
  },

  {
    name: "Priyanshi singh",
    role: "Co-Founder & CCOE",
    desc: "Leading with commitment to excellence, precision, and operational integrity.",
    img: "/p1.jpg",
  },

  {
    name: "Amarendra Pratap Singh",
    role: "CO-Founder & CSO",
    desc: "Shaping strategic vision, driving smarter, faster, and innovative logistics solutions",
    img: "/p2.jpg",
  },
];

const partners = [
  { name: "Motherson", logo: "/Clientlogo/1.png" },
  { name: "Schaeffler", logo: "/Clientlogo/2.png" },
  { name: "STUDDS", logo: "/Clientlogo/3.png" },
  { name: "Carrier", logo: "/Clientlogo/4.png" },
  { name: "Reliance Digital", logo: "/Clientlogo/5.png" },
  { name: "Croma", logo: "/Clientlogo/6.png" },
  { name: "Johnson Controls", logo: "/Clientlogo/30.jpg" },
  { name: "Hitchi", logo: "/Clientlogo/29.png" },
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
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
        <Image
          src="/95.jpg"
          alt="About Jambulogix"
          fill
          className="object-cover object-right xl:object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold">
              Empowering Global Logistics
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-[#1a4261]">
              Delivering scalable, tech-enabled supply chain solutions to modern
              businesses across India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Summary */}
      <section className="py-20 px-6 sm:px-20 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-12 items-center bg-white">
        {/* Left: Image Grid + Stats */}
        <div className="space-y-10 hidden sm:block">
          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full aspect-square overflow-hidden rounded-xl shadow">
              <Image
                src="/aboutBanner1.jpg"
                alt="Team 1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            {/* <div className="w-full aspect-square overflow-hidden rounded-xl shadow">
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
            </div> */}
          </div>

          {/* Sub Stats */}
          {/* <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">80L+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">2,200+</h3>
              <p className="text-sm text-gray-600">Business Connections</p>
            </div>
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
          </div> */}
        </div>

        {/* Right: Text + Stats */}
        <div>
          <h2 className="text-3xl text-center xl:text-start font-bold text-[#24577F] mb-3">
            About <span className="text-[#FF7F06] text-3xl"> Jambulogix</span>
          </h2>
          {/* <p className="text-gray-700 text-md leading-relaxed mb-6">
            Jambulogix (JLX) is building India’s next-generation flexi-logistics
            network — designed for brands, retailers, and businesses that demand
            <span className=" font-semibold underline">
              speed, scale, and reliability
            </span>
            . Agile by design and yours by choice, we combine the expertise of
            industry veterans with a people-first culture, advanced technology,
            and tailored solutions to meet diverse logistics needs. Our services
            cover the full spectrum — from smart warehousing, sort centers,
            cross-docks, and dark stores to multimodal transport, FTL/LTL, and
            first-mile/last-mile delivery. Serving B2B, B2C, D2C, eCommerce, and
            express logistics, we operate across 10,000+ PIN codes with a robust
            network built for precision and scale.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            What sets us apart is our relentless focus on customer obsession,
            transparency, and innovation. Our growing tech stack ensures
            real-time visibility, control, and efficiency in every shipment,
            while our inclusive culture empowers teams to think big, take
            ownership, and deliver impact. We are also committed to building a
            greener supply chain — optimizing routes, reducing empty miles, and
            adopting energy-efficient practices to lower our carbon footprint
            without compromising speed or service.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Whether you’re a fast-growing D2C brand, a large enterprise
            optimizing supply chains, or a B2B player navigating India’s
            geography, JLX brings you the reach, reliability, and agility to
            move possibilities — not just parcels.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-10">
            We’re on a mission to make logistics smarter, faster, greener, and
            more human — shaping the future of commerce, one delivery at a time.
          </p> */}
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Jambulogix (JLX) is building India’s next-gen flexi-logistics
            network — crafted for brands, retailers, and businesses that demand
            speed, scale, and reliability.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            With industry expertise, a people-first culture, and advanced tech
            and unique opreating models, we deliver end-to-end solutions smart
            warehousing, sort centers, cross-docks, dark stores, FTL/LTL, and
            distribution services(FM/LM) — covering 10,000+ PIN codes.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            A relentless focus on customer obsession, transparency, and
            innovation. Our tech stack powers real-time visibility, efficiency,
            and control — while our teams drive impact with ownership and
            agility.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            We’re also committed to a greener supply chain — cutting empty
            miles, optimizing routes, and using energy-efficient practices.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mb-6">
            Whether you’re a fast-scaling D2C brand, a B2B player, or an
            enterprise optimizing supply chains, JLX moves possibilities, not
            just parcels.
          </p>
          <p className=" font-semibold text-center text-xl leading-relaxed mb-6 text-[#24577F]">
            Smarter. Faster. Greener. More Human.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">80L+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">2,200+</h3>
              <p className="text-sm text-gray-600">Business Connections</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">3.5M+</h3>
              <p className="text-sm text-gray-600">Shipments per Month</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">10,000+</h3>
              <p className="text-sm text-gray-600">PIN Codes Covered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">1,400+</h3>
              <p className="text-sm text-gray-600">Employees</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#24577F]">50+</h3>
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

      {/* our vision and mission section */}
      <section className="relative bg-[#24577F] text-white py-12 md:py-24 px-6 sm:px-20 overflow-hidden">
        {/* Decorative Gradient Blobs */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#FF7F06]/40 rounded-full blur-3xl opacity-60 z-0" />
        <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-[#FF7F06]/30 rounded-full blur-2xl opacity-50 z-0" /> */}

        <div className="max-w-8xl mx-auto px-6 sm:px-0 relative z-10 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Vision */}
          <div className="bg-white/10 rounded-2xl p-8 h-[40vh] flex flex-col justify-center shadow-lg border border-white/20 hover:bg-white/20 transition">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-10 h-10 text-[#FF7F06]" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              To be a passionate service catalyst that simplifies and
              strengthens the flow of commerce across India's supply chain
              ecosystem. Our aim is to create a focused and collaborative
              logistics footprint across all Indian geographies, enabling
              businesses to scale seamlessly.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/10 rounded-2xl p-8 h-[40vh] flex flex-col justify-center shadow-lg border border-white/20 hover:bg-white/20 transition">
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="w-10 h-10 text-[#FF7F06]" />
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              To be India’s most agile and progressive logistics partner —
              powered by a culture of customer obsession, operational
              excellence, and constant innovation. We’re committed to create a
              safe, inclusive, and empowering workplace, earning recognition as
              the most trusted name in logistics and the employer of choice for
              top talent.
            </p>
          </div>
        </div>
      </section>

      {/* our leadership */}
      <section className=" py-12 md:py-24 px-6 sm:px-20 bg-white">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-4xl font-semibold text-center text-[#24577F] mb-8 md:mb-16">
            Our <span className="text-[#FF7F06] text-4xl">Leadership </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden h-100 shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition duration-500 z-10"></div>

                {/* Name (always visible) */}
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-2xl font-semibold">
                    {leader.name}
                  </p>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <p className="text-[#FF7F06] font-semibold text-2xl mb-1">
                    {leader.role}
                  </p>
                  <p className="text-sm">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-8xl mx-auto px-6 sm:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Text Block */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-[#24577F] mb-6">
              Sustainability at
              <span className="text-[#FF7F06] text-4xl"> Jambulogix</span>
            </h2>
            <p className="text-md text-[#24577F]  mb-8">
              We are building a greener logistics network that is at the heart
              of everything we do. From optimizing routes to reduce empty miles,
              to adopting energy-efficient vehicles and sustainable warehousing
              practices, we strive to lower our carbon footprint without
              compromising speed or reliability. Our commitment extends across
              every touchpoint — leveraging technology, smarter operations, and
              innovative solutions to make logistics cleaner, smarter, and more
              responsible for the planet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Energy-efficient warehousing practices",
                "Carbon-neutral transportation solutions",
                "Recycling, reusing, and rethinking resources",
                "Eco-optimized packaging & delivery",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-green-600 items-center justify-center rounded-lg p-4 shadow-sm hover:shadow-xl transition"
                >
                  <p className="text-md text-center text-gray-800 font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Orbit Diagram */}
          <div className="relative lg:w-1/2 h-[500px] flex items-center justify-center">
            {/* Center Circle */}
            <div className="z-10 w-60 h-60 bg-green-100 border-2 border-[#FF7F06] rounded-full flex flex-col items-center justify-center text-center shadow-lg">
              <FaLeaf size={42} className="text-green-600 mb-2" />
              <h3 className="text-xl font-bold text-green-900">Jambulogix</h3>
              <p className="text-sm text-green-700 mt-1">
                Reduce • Reuse • Recycle
              </p>
            </div>

            {/* Orbit Points */}
            {sustainabilityPoints.map((text, idx) => {
              const angle = (360 / sustainabilityPoints.length) * idx;
              const radius = 195;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={idx}
                  className="absolute w-44 h-44 bg-green-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-center px-6 hover:shadow-lg shadow-green-400 transition"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <p className="text-sm font-medium text-white">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-6 sm:px-0 bg-gradient-to-br from-gray-900 via-[#0f172a] to-black text-white overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF7F06]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-8xl mx-auto px-6 sm:px-20 grid xl:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Our <span className="text-[#FF7F06] text-4xl">Core Values</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Our values drive everything — from decision-making to daily
              operations.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              We put our customers at the heart of everything we do — solving
              their challenges with speed, empathy, and precision.
            </p>

            <div className="grid gap-4">
              {[
                {
                  text: "People First: Empowering with trust, freedom & growth.",
                  icon: Heart,
                },
                {
                  text: "Agility in Action: Adapting fast & executing with urgency.",
                  icon: Zap,
                },
                {
                  text: "Innovation Everyday: Driving sustainable solutions.",
                  icon: Lightbulb,
                },
                {
                  text: "Transparency & Simplicity: Clear, honest, and simple.",
                  icon: ShieldCheck,
                },
                {
                  text: "Sustainable Impact: Reducing footprint, creating value.",
                  icon: Leaf,
                },
                {
                  text: "Ownership & Accountability: Celebrating wins, learning from setbacks.",
                  icon: Target,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF7F06]/40 hover:translate-x-2 hover:scale-[1.02] transition-all duration-500 backdrop-blur-lg"
                >
                  <item.icon className="w-7 h-7 text-[#FF7F06]" />
                  <p className="text-gray-200 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Floating Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["/test4.jpg", "/test3.jpg", "/test3.jpg", "/test4.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#FF7F06]/50 hover:scale-105 transform transition-all duration-500 backdrop-blur-xl bg-white/5"
                >
                  <Image
                    src={src}
                    alt={`Core Value ${idx + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-84"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
                    <span className="text-white text-md font-semibold mb-3 tracking-wide">
                      {
                        [
                          "Innovation",
                          "Empathy",
                          "Transparency",
                          "Reliability",
                        ][idx]
                      }
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-6 sm:px-12 md:px-10 bg-white">
        <div className="text-center mb-12">
          <h2 className=" text-4xl md:text-4xl font-extrabold text-[#24577F] mb-4">
            Trusted by{" "}
            <span className="text-[#FF7F06] text-4xl"> Leading Brands </span>
          </h2>
          <p className="text-black max-w-3xl text-md mx-auto">
            We collaborate with industry leaders across sectors. Choose a
            category to view our partners.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-10 justify-items-center max-w-8xl mx-auto ouverflow-hidden">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              className="flex justify-center justify-items-center items-center h-24 w-36 bg-transparent rounded-xl shadow-sm   md:p-4 hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-cover h-20 w-24 md:h-24 md:w-28"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Frictionless experiences  */}
      <section className="bg-[#24577F] text-white py-16 px-6 md:px-0">
        <div className="max-w-8xl mx-auto px-6 sm:px-20 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text text- mb-4">
            The Jambulogix{" "}
            <span className="text-[#FF7F06] text-4xl">Experience</span>
          </h2>

          {/* Description */}
          <p className="text-white/80 max-w-7xl mx-auto mb-14 text-base md:text-md leading-relaxed">
            we create frictionless experiences for everyone we work with —
            customers, partners, shop floors, and our own people. Our approach
            blends deep operational expertise, industry-leading efficiency, and
            a commitment to safety, security, and reliability
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {/* Left side - Customers + Partners */}
            <div className="space-y-10 ">
              {/* Customers */}
              <div>
                <h3 className="text-2xl font-bold text-[#FF7F06] mb-3">
                  Customers
                </h3>
                <ul className="space-y-2 list-disc list-inside text-white">
                  <li>Seamless WH operations management</li>
                  <li>SOP base management</li>
                  <li>Seamless Transport & distribution management</li>
                  <li>Value added services</li>
                  <li>Transparent billing and reconciliation</li>
                </ul>
              </div>

              {/* Partners */}
              <div>
                <h3 className="text-2xl font-bold text-[#FF7F06] mb-3">
                  Partners
                </h3>
                <ul className="space-y-2 list-disc list-inside text-white">
                  <li>Partners with high integrity</li>
                  <li>Automated Partner module</li>
                  <li>Industry experienced Partners</li>
                </ul>
              </div>
            </div>

            {/* Middle red icon block */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 ">
              <div className="bg-[#FF7F06] p-4 flex flex-col items-center justify-center rounded-xl shadow-md">
                <ThumbsUp className="w-20 h-20 mb-3" />
                <p className="font-medium text-white">Customers</p>
              </div>
              <div className="bg-[#FF7F06] p-4 flex flex-col items-center justify-center rounded-xl shadow-md">
                <Layers className="w-20 h-20  mb-3" />
                <p className="font-medium text-white">Shop Floor</p>
              </div>
              <div className="bg-[#FF7F06] p-4 flex flex-col items-center justify-center rounded-xl shadow-md">
                <Truck className="w-20 h-20 mb-3" />
                <p className="font-medium text-white">Partners</p>
              </div>
              <div className="bg-[#FF7F06] p-4 flex flex-col items-center justify-center rounded-xl shadow-md">
                <Factory className="w-20 h-20  mb-3" />
                <p className="font-medium text-white">People</p>
              </div>
            </div>

            {/* Right side - Shop floor + People */}
            <div className="space-y-10">
              {/* Shop floor */}
              <div>
                <h3 className="text-2xl font-bold text-[#FF7F06] mb-3">
                  Shop Floor
                </h3>
                <ul className="space-y-2 list-disc list-inside text-white">
                  <li>Smart Shopfloor operations</li>
                  <li>Superior task management</li>
                  <li>Quality assurance</li>
                  <li>Scalable flexiblility</li>
                  <li>Intuitive access to real-time information</li>
                </ul>
              </div>

              {/* People */}
              <div>
                <h3 className="text-2xl font-bold text-[#FF7F06] mb-3">
                  People
                </h3>
                <ul className="space-y-2 list-disc list-inside text-white">
                  <li>High calibre Team</li>
                  <li>
                    Highly compliant Team on Discipline, compliance & Quality
                  </li>
                  <li>Acknowledged & Accountable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Icons */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-md mt-14">
            <span className="px-4 py-2 bg-gray-100 rounded-full">
              Deep Understanding of operations
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">
              Industry leading commercial efficiency
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">
              Safe, Secure & Reliable
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">
              Seamless customer collaboration
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">
              Scalable solution
            </span>
          </div>
        </div>
      </section>

      {/* Growth strategis Section */}
      <section className="relative py-24 px-6 sm:px-0 bg-gradient-to-br from-gray-900 via-[#0f172a] to-black text-white overflow-hidden">
        {/* Futuristic glowing background */}
        {/* <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF7F06]/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        </div> */}

        <div className="relative max-w-8xl mx-auto px-6 md:px-20 grid xl:grid-cols-2 gap-16 items-center">
          {/* Left Side: Floating Images */}
          <div className="hidden xl:grid grid-cols-2 gap-6">
            {["/test4.jpg", "/test3.jpg", "/test3.jpg", "/test4.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#FF7F06]/50 hover:scale-105 transform transition-all duration-500 backdrop-blur-xl bg-white/5"
                >
                  <Image
                    src={src}
                    alt={`Core Value ${idx + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-84"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center">
                    <span className="text-white text-md font-semibold mb-3 tracking-wide">
                      {
                        [
                          "Innovation",
                          "Empathy",
                          "Transparency",
                          "Reliability",
                        ][idx]
                      }
                    </span>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right Side: Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
              Our{" "}
              <span className="text-[#FF7F06] text-4xl">Growth Strategy</span>
            </h2>
            <p className="text-gray-300 text-md mb-8 max-w-xl">
              More than expansion — we are building an{" "}
              <span className="text-white font-semibold">
                unreal ecosystem{" "}
              </span>
              that scales beyond geography, fueled by technology, vision, and
              unstoppable ambition.
            </p>

            {/* Unrealistic Features */}
            <div className="grid gap-4">
              {[
                {
                  text: "Scaling our physical infrastructure across India",
                  icon: Globe2,
                },
                {
                  text: "Extending reach to over 10,000 PIN codes",
                  icon: Network,
                },
                {
                  text: "Innovating daily to raise efficiency benchmarks",
                  icon: Zap,
                },
                {
                  text: "Targeting the entire Total Addressable Market (TAM)",
                  icon: Rocket,
                },
                {
                  text: "Targeting the entire Total Addressable Market (TAM)",
                  icon: Rocket,
                },
                { text: "Forging next-gen strategic alliances", icon: Users },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF7F06]/40 hover:translate-x-2 hover:scale-[1.02] transition-all duration-500 backdrop-blur-lg"
                >
                  <item.icon className="w-7 h-7 text-[#FF7F06]" />
                  <p className="text-gray-200 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Images */}
          <div className="grid xl:hidden grid-cols-2 gap-4">
            {["/test4.jpg", "/test3.jpg", "/test3.jpg", "/test4.jpg"].map(
              (src, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden border border-white/10 shadow-md backdrop-blur-lg bg-white/5"
                >
                  <Image
                    src={src}
                    alt={`Core Value ${idx + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
                    <span className="text-white text-sm font-semibold mb-3">
                      {
                        [
                          "🚀 Innovation",
                          "💡 Empathy",
                          "🔍 Transparency",
                          "🛡 Reliability",
                        ][idx]
                      }
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* loss previntion section */}
      <section className="bg-black/50 py-24 ">
        <div className="max-w-8xl mx-auto px-6 md:px-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Safety and{" "}
              <span className="text-green-600 text-4xl">Loss Prevention</span>
            </h2>
            <p className="text-white/80 mt-4 max-w-5xl text-md mx-auto">
              We ensure complete protection with 24/7 monitoring, advanced
              tracking, secure packing, and access-controlled systems — keeping
              your operations safe and reliable.
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Feature list */}
            <div className="space-y-6">
              {[
                { text: "24/7 Active Cameras", icon: Video },
                { text: "Control Tower", icon: Eye },
                { text: "Vehicle Tracking System", icon: Map },
                { text: "High Value Check Under CCTV", icon: ShieldCheck },
                { text: "Secure Packing", icon: Package },
                { text: "Digital Locks", icon: Lock },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white shadow-sm border border-gray-100 rounded-xl px-5 py-4 hover:shadow-md shadow-green-400 transition"
                >
                  <item.icon className="w-8 h-8 text-red-600" />
                  <span className="text-gray-800 font-medium text-md">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right - Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/lp.jpg"
                alt="Tracking System"
                className="rounded-xl shadow-md object-cover object-top  h-40 md:h-60 w-full"
              />
              <img
                src="/lp1.jpg"
                alt="Digital Lock"
                className="rounded-xl shadow-md object-cover object-top h-40 md:h-60 w-full"
              />
              <img
                src="/lp2.jpg"
                alt="CCTV Camera"
                className="rounded-xl shadow-md object-cover object-bottom h-40 md:h-60 w-full col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The jambulogix exprience */}
      <section className="bg-[#24577F] text-white py-16 px-6 sm:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Gain Leverage for Your
          <span className="text-[#FF7F06] text-4xl">
            {" "}
            Business with Jambulogix
          </span>
        </h2>
        <p className="mb-6 max-w-7xl text-md mx-auto">
          We’d love to hear from you! Whether you’re a business looking for
          scalable logistics solutions, a partner exploring collaboration, or a
          candidate interested in joining our journey — we’re just a message
          away.
        </p>
        {/* <button className="bg-[#FF7F06] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e86e00] transition">
          Contact Us
        </button> */}
      </section>

      <TestimonialCarousel />

      {/* Footer CTA */}
      <section className="bg-[#24577F] text-white py-16 px-6 sm:px-20 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Logistics?
        </h2> */}

        <h2 className="text-4xl font-extrabold mb-4">
          Ready to
          <span className="text-[#FF7F06] text-4xl">
            {" "}
            Simplify Your Logistics?
          </span>
        </h2>
        <p className="mb-6 max-w-7xl text-md mx-auto">
          Let Jambulogix be your partner in building scalable, tech-driven, and
          efficient supply chains.
        </p>
        <button className="bg-[#FF7F06] text-white px-6 py-3 rounded-xl font-bold text-xl hover:bg-[#e86e00] transition">
          Contact Us
        </button>
      </section>

      <ContactSection />
    </div>
  );
}
