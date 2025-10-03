"use client";

import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/sections/TestimonialSection";

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

const leaders = [
  {
    name: "Pankaj Deole",
    role: "Founder & CEO",
    desc: "Visionary leader driving innovation across supply chain solutions.",
    img: "/ceo.jpg",
  },
  {
    name: "Rahul Sinha",
    role: "COO",
    desc: "Operational excellence expert ensuring scalable logistics operations.",
    img: "/ceo.jpg",
  },
  {
    name: "Neha Rathi",
    role: "Chief Strategy Officer",
    desc: "Crafts growth strategies and data-driven decisions for expansion.",
    img: "/ceo.jpg",
  },
  {
    name: "Amit Joshi",
    role: "Tech Head",
    desc: "Leads our digital transformation and intelligent logistics systems.",
    img: "/ceo.jpg",
  },
];

// Partner categories and their respective logos
const partnerCategories = [
  {
    label: "Warehousing Partners",
    heading: "Smart Space, Seamless Service.",
    logos: ["/Clientlogo/22.png", "/Clientlogo/23.png", "/Clientlogo/24.png"],
    description:
      "From storage to fulfillment, our warehousing partners help us stay agile and closer to the customer — wherever demand goes.",
  },
  {
    label: "Staffing  Partners",
    heading: "People Who Power Progress.",

    logos: ["/Clientlogo/1.png", "/Clientlogo/2.png", "/Clientlogo/3.png"],
    description:
      "From ground staff to skilled operators, our staffing partners ensure we have the right people in the right place — every single day.",
  },
  {
    label: "Logistics Partners",
    heading: "Seamless Links in Every Lane.",

    logos: ["/Clientlogo/22.png", "/Clientlogo/23.png", "/Clientlogo/24.png"],
    description:
      "Our logistics partners help us connect the dots — from first mile to last. With their support, we ensure smoother routes, faster turnarounds, and a supply chain that never stops moving.",
  },
  {
    label: "Delivery Partners",
    heading: "Miles Made Meaningful.",

    logos: ["/Clientlogo/13.png", "/Clientlogo/14.png", "/Clientlogo/12.png"],
    description:
      "Our delivery network is stronger because of our partner fleets. Together, we reach more pin codes, reduce delays, and deliver brand trust at the doorstep.",
  },
  {
    label: "Technology Partners",
    heading: "Tech That Moves With Us.",

    logos: ["/Clientlogo/5.png", "/Clientlogo/6.png", "/Clientlogo/7.png"],
    description:
      "From visibility tools to integration engines, our tech allies help us streamline operations, scale faster, and stay ahead of the curve.",
  },
];

export default function OurPartnersPage() {
  const [activeCategory, setActiveCategory] = useState(partnerCategories[0]);

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/56.jpg')" }}
      >
        <div className="bg-opacity-50 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 px-6">
          <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
            Built on Partnerships. Powered by Purpose.
          </h1>
          <p className="text-white text-lg sm:text-lg max-w-6xl mx-auto">
            At Jambulogix, we don’t work alone — we grow together. building for
            speed, scale, or sustainability — you’ll fit right in.
          </p>
          <p className="text-white text-lg sm:text-lg max-w-6xl mx-auto">
            Our ecosystem thrives on smart collaborations with those who move
            fast, think bold, and build for scale. Whether it's driving freight
            across the country or powering the tech behind our operations, our
            partners help us deliver impact at every mile.
          </p>
          <p className="text-white text-lg sm:text-lg max-w-7xl mx-auto mb-5">
            From funding innovation to enabling faster deliveries, from smart
            warehouses to people on the ground — every partner brings value that
            moves us forward.
          </p>
          <p className="text-white text-lg sm:text-lg max-w-6xl mx-auto">
            If you’re building for speed, scale, or sustainability — you’ll fit
            right in.
          </p>
        </div>
      </section>

      {/* <section className="py-24 px-6 sm:px-20 bg-black/60">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#FF7F06] mb-3">
            Our Investers
          </h2>
          <h2 className="text-4xl sm:text-3xl font-bold text-center text-[#FF7F06] mb-3">
            Fueling Ambition. Backing Scale.
          </h2>

          <p className="text-white text-lg sm:text-lg max-w-4xl mx-auto mb-16 text-center">
            Our investors don’t just fund logistics — they believe in building
            the future of it. With their support, we’re scaling faster and
            smarter across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden h-120 shadow-lg"
              >
            
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

        
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition duration-500 z-10"></div>

     
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-2xl font-bold">{leader.name}</p>
                </div>

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
      </section> */}

      {/* Partners Grid */}

      <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#F4F6F8]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#24577F] mb-4">
            Trusted by
            <span className=" text-6xl text-[#FF7F06]"> Our Partners</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We collaborate with industry leaders across sectors. Choose a
            category to view our partners.
          </p>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {partnerCategories.map((category, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`px-5 py-3 rounded-2xl border-4 font-semibold text-sm sm:text-base shadow-sm transition ${
                activeCategory.label === category.label
                  ? "bg-[#FF7F06] text-black border-[#FF7F06]"
                  : "bg-white text-gray-600 border-gray-300 hover:text-[#FF7F06] hover:border-[#24577F]"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center max-w-6xl mx-auto">
          {activeCategory.logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 w-full flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner ${idx}`}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="bg-[#24577F] py-20 px-4 sm:px-10 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Making a
            <span className=" text-6xl text-[#FF7F06]">
              {" "}
              Social Impact Together
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-16 max-w-4xl mx-auto">
            Our partnerships go beyond business. We empower MSMEs, improve rural
            delivery networks, and contribute to a greener, more inclusive
            logistics ecosystem.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-8">
            {[
              {
                title: "15K+ MSMEs",
                description:
                  "Enabled to sell nationwide via our fulfillment network.",
              },
              {
                title: "90% Faster",
                description: "Delivery time in Tier-2 and Tier-3 cities.",
              },
              {
                title: "Sustainable Logistics",
                description:
                  "Optimized routes & reduced carbon footprint through shared warehousing.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out"
              >
                <h3 className="text-3xl font-semibold text-[#FF7F06] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optional decorative background gradient blob */}
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl z-0" />
      </section>

      <section className="py-20 px-4 sm:px-10 md:px-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl font-extrabold capitalize text-[#24577F] mb-4 max-w-5xl mx-auto">
              Partner with{"  "}
              <span className=" text-[#FF7F06] text-6xl font-extrabold">
                Jambulogix
              </span>
            </h2>
            <h2 className="text-4xl font-extrabold capitalize text-[#24577F] mb-4 max-w-7xl mx-auto">
              where logistics meets{"  "}
              <span className=" text-[#FF7F06] font-extrabold text-4xl">
                {" "}
                opportunity, efficiency, {"  "}
              </span>
              <span className=" text-[#24577F] font-extrabold capitalize">
                &
              </span>
              <span className=" text-[#FF7F06] font-extrabold text-4xl">
                {" "}
                impact
              </span>
            </h2>
            <p className="text-gray-600 text-md max-w-7xl mx-auto">
              Jambulogix, partnership means progress — not just for us, but for
              every stakeholder in the logistics chain. We don’t just move
              goods, we move opportunities, scale, and impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-10">
            {[
              {
                emoji: "🌐",
                title: "Business Growth at Scale",
                description:
                  "Access a fast-expanding network of MSMEs, enterprises, and eCommerce players across India — and tap into steady demand, new markets, and consistent load volumes.",
              },
              {
                emoji: "⚙️",
                title: "Efficiency-Driven Collaboration",
                description:
                  "We integrate your services into a tech-driven, optimized logistics system — ensuring faster turnaround, reduced idle time, and maximum resource utilization.",
              },
              {
                emoji: "🏆",
                title: "Long-Term, Transparent Relationships",
                description:
                  "We believe in fairness, real-time visibility, timely payments, and shared success — building trust at every touchpoint.",
              },
              {
                emoji: "🏆",
                title: "Innovation & Co-Creation",
                description:
                  "From pilot projects to process improvements, we work closely with our partners to build future-ready logistics solutions.",
              },
              {
                emoji: "🏆",
                title: "Reliability and Complience",
                description:
                  "we ensure reliability through a skilled workforce, strict compliance with all regulations, and proactive risk management to keep operations smooth and dependable.",
              },
              {
                emoji: "🏆",
                title: "Social & Sustainable Impact",
                description:
                  "Be part of a logistics movement that supports MSMEs, improves rural connectivity, and reduces environmental footprint through smarter operations.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#24577F] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4"
              >
                <div className="text-3xl p-3 rounded-full bg-[#FF7F06]/10 text-[#FF7F06]">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-semibold text-[#24577F]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* CTA */}
      <section className="bg-[#24577F] text-white py-16 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Grow?
          <span className=" text-6xl text-[#FF7F06]"> Let’s Partner</span>
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          From first mile to last, we grow together. Ready to partner with
          India’s most inclusive Organisation?
        </p>
        <a
          href="/pages/contact-us"
          className="inline-block bg-[#FF7F06] hover:bg-[#e26f00] text-white font-medium px-6 py-3 rounded-xl transition shadow-md"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
