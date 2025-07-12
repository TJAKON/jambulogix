"use client";

import React from "react";
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

export default function OurPartnersPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/56.jpg')" }}
      >
        <div className="bg-opacity-50 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 px-6">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Strategic Partnerships That Drive Success
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
            We collaborate with leading platforms and retailers to empower
            seamless logistics and eCommerce fulfillment across India.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-6 sm:px-12 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24577F] mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partnering with top brands allows us to deliver value at scale and
            create frictionless customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 gap-10 items-center max-w-8xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
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

      {/* Social Impact Section */}
      <section className="bg-[#24577F] py-20 px-4 sm:px-10 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Making a Social Impact Together
          </h2>
          <p className="text-white/70 text-lg mb-16 max-w-2xl mx-auto">
            Our partnerships go beyond business. We empower MSMEs, improve rural
            delivery networks, and contribute to a greener, more inclusive
            logistics ecosystem.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-[#FF7F06] mb-3">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#24577F] mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our scalable infrastructure and intelligent technology empower
              businesses to deliver better, faster, and farther — with
              precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {[
              {
                emoji: "🌐",
                title: "Pan-India Coverage",
                description:
                  "Serve customers across 29 states with our extensive logistics footprint.",
              },
              {
                emoji: "⚙️",
                title: "Tech-Enabled Fulfillment",
                description:
                  "Seamless system integration with real-time visibility and smart automation.",
              },
              {
                emoji: "🏆",
                title: "Trusted by Leaders",
                description:
                  "Backed by India’s leading brands and fastest-growing marketplaces.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4"
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Become a Growth Partner
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Ready to join hands with India’s fastest-growing fulfillment network?
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
