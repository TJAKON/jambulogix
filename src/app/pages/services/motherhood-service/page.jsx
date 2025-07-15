"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCarousel from "@/components/sections/TestimonialSection";

const services = [
  {
    title: "Student Parcel",
    description:
      "Essential items, textbooks, and comfort packages delivered to campus.",
    points: [
      "Same-day delivery available",
      "Fragile item protection",
      "Live tracking updates",
    ],
    image: "/73.jpg", // Replace with actual image
  },
  {
    title: "Air Baggage",
    description:
      "Hassle-free excess baggage and valuable item shipping for travelers.",
    points: [
      "Airport pickup/delivery",
      "No weight restrictions",
      "Insured shipping",
    ],
    image: "/74.jpg", // Replace with actual image
  },
  {
    title: "Personalized Care",
    description:
      "Custom packages with special handling for your most precious items.",
    points: [
      "Custom packaging",
      "Personal notes included",
      "Special occasion delivery",
    ],
    image: "/75.jpg", // Replace with actual image
  },
];

export default function MotherHood() {
  const [quote, setQuote] = useState("₹299");
  const [weight, setWeight] = useState(1);
  const [destination, setDestination] = useState("");

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden">
        {/* 🔹 Blurred background image layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/53.jpg" // 👉 Replace with your background image
            alt="Background blur"
            fill
            className="object-cover blur-xs opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-white/10" />{" "}
          {/* Optional tint overlay */}
        </div>

        {/* 🔹 Text & buttons */}
        <div className="max-w-xl text-center md:text-left z-10">
          <h1 className="text-4xl md:text-8xl font-extrabold mb-4 text-white">
            Logistics with <span className="text-[#FF7F06]">Heart</span>
          </h1>
          <p className="text-lg text-white mb-6">
            MotherHood Service by Jambulogix – Where every package is treated
            like family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1F2937] text-white px-6 py-3 rounded-lg hover:bg-[#111827] transition-all">
              🧡 Ship with Care
            </button>
            <button className="border border-gray-400 bg-[#FF7F06] px-6 py-3 rounded-lg hover:bg-gray-100 transition-all">
              Get Instant Quote
            </button>
          </div>
        </div>

        {/* 🔹 Foreground main image */}
        <div className="w-full md:w-[50%] h-64 md:h-[420px] rounded-xl relative overflow-hidden shadow-md z-10">
          <Image
            src="/70.jpg"
            alt="Mother packing care package with love"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-extrabold text-[#1F2937] mb-12">
              Why Choose <span className="text-[#FF7F06]">MotherHood</span>{" "}
              Service?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Safe for Students",
                desc: "Secure delivery of essentials, books, and care packages to students anywhere.",
                icon: "🎓",
              },
              {
                title: "Smart for Air Travel",
                desc: "Handle excess baggage and valuable items with airport-grade security.",
                icon: "✈️",
              },
              {
                title: "Thoughtful for Families",
                desc: "Send love across distances with personalized care and attention.",
                icon: "💌",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0A1A2F] rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 flex items-center justify-center text-3xl bg-[#FFE8D6] rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A1A2F] text-white py-16 px-6 sm:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-bold mb-4"
          >
            Driving Efficiency at Unmatched Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Our smart supply chain operates with precision and scale, ensuring
            speed, coverage, and reliability across the nation.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { label: "Orders Processed Daily", value: "1 Billion+" },
            { label: "Global Offices", value: "2,200+" },
            { label: "PIN Codes Covered", value: "14,300+" },
            { label: "Fleet Strength", value: "2,500+" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="rounded-2xl text-center bg-[#112233] p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className=" text-xl md:text-3xl font-extrabold mb-2 text-[#FF7F06]">
                {item.value}
              </h3>
              <p className="text-xs md:text-sm text-white/80 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6 md:px-10 bg-[#F4F6F8]">
        <h2 className="text-8xl font-extrabold text-center mb-12">
          Our Core <span className="text-[#FF7F06]">Services</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={40}
          slidesPerView={2}
          navigation
          // pagination={{ clickable: true }}
          loop={true} // <-- Enables infinite loop
          className="max-w-8xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col md:flex-row gap-3 items-center">
                <div className="w-full md:w-3/5 h-[500px] relative overflow-hidden rounded-xl shadow object-cover">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-[500px]"
                  />
                </div>

                <div className="w-full md:w-2/5 text-left">
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <button className="bg-[#1F2937] text-white px-6 py-3 rounded-lg hover:bg-[#FF7F06] transition-all">
                    Start Booking
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#FFF] to-[#F9FAFB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-8xl font-extrabold text-[#1F2937] mb-16">
            How <span className="text-[#FF7F06]">It Works</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              {
                title: "Schedule Pickup",
                desc: "Choose your convenient time and location",
                icon: "📅",
              },
              {
                title: "We Pack Securely",
                desc: "Professional packaging with care and attention",
                icon: "📦",
              },
              {
                title: "Track Real-Time",
                desc: "Monitor your package every step of the way",
                icon: "📍",
              },
              {
                title: "Delivered with Care",
                desc: "Safe delivery to your loved ones",
                icon: "💝",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4 bg-[#FFFAF0] w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                  {step.icon}
                </div>
                <div className="text-sm text-gray-500 mb-2 tracking-wide">
                  Step {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFEDD5] rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#DBEAFE] rounded-full blur-3xl opacity-30 -z-10" />
      </section>

      {/* Trust & Safety */}
      <section className="py-24 px-6 md:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16">
              Trust & <span className="text-[#FF7F06]">Safety</span> Guarantees
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Tamper-Proof Packaging",
                desc: "Advanced security seals and protective materials to ensure items remain untouched and secure.",
                icon: "🛡️",
              },
              {
                title: "Live Tracking",
                desc: "Track your shipment in real time with GPS and instant status updates for full peace of mind.",
                icon: "📡",
              },
              {
                title: "Trained Partners",
                desc: "Only verified and trained logistics professionals handle your packages with care.",
                icon: "🎓",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-5 flex items-center justify-center text-3xl rounded-full bg-[#FFFAF0] text-[#FF7F06] shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#FFF8F1] to-[#FDFDFD] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-extrabold text-[#1F2937] mb-12">
              Stories from Our{" "}
              <span className="text-[#FF7F06]">Extended Family</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Hear from loving parents, doting grandparents, and globe-trotting
            professionals who made someone’s day special through MotherHood.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Suman Sharma",
                tag: "Mother from Jaipur",
                quote:
                  "My son studying in Delhi was missing home-cooked food. Jambulogix delivered my homemade laddoos fresh and fast — he was so emotional!",
                emoji: "🍛",
              },
              {
                name: "Rakesh Patel",
                tag: "Businessman from Ahmedabad",
                quote:
                  "I travel frequently and always struggle with excess baggage. This time, my luggage reached Bangalore safely — stress-free!",
                emoji: "🧳",
              },
              {
                name: "Lalita Devi",
                tag: "Grandmother from Lucknow",
                quote:
                  "Thanks to MotherHood, my granddaughter received her Diwali gifts on time. Felt like I was there myself!",
                emoji: "🎁",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="text-4xl mb-4">{t.emoji}</div>
                <p className="italic text-gray-700 mb-4 leading-relaxed">
                  “{t.quote}”
                </p>
                <hr className="my-4 border-t border-gray-200" />
                <p className="font-bold text-[#1F2937] text-lg">{t.name}</p>
                <p className="text-sm text-gray-500">{t.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side Background with Parallax */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center transform md:translate-y-0 translate-y-[-20%] transition-transform duration-1000 ease-in-out"
              style={{
                backgroundImage: "url('/truck.png')",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-4xl font-extrabold px-4 text-center drop-shadow-xl">
                Fast, Safe, and Hassle-Free Shipping
              </h2>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-16 bg-[#0A1A2F]">
            <div className="w-full max-w-md bg-[#FAFAFA] p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
                Get Instant Quote
              </h3>

              <form className="space-y-4">
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Up to 5kg</option>
                  <option>5kg - 10kg</option>
                  <option>10kg - 20kg</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter destination city"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />

                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Standard (3–5 days)</option>
                  <option>Express (1–2 days)</option>
                </select>

                <div className="text-right text-sm text-gray-600">
                  Estimated Cost: <span className="font-bold">{quote}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1F2937] text-white py-3 rounded-lg hover:bg-[#111827] transition-all"
                >
                  🚀 Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#111827] text-white py-20 px-6 md:px-20 text-center relative overflow-hidden">
        {/* Subtle Background Shape (Optional) */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready to Ship with <span className="text-[#FF7F06]">Heart</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of Indian families who trust{" "}
            <span className="text-white font-semibold">MotherHood Service</span>
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#FF7F06] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e66900] transition-all shadow-md">
              🚚 Start Your First Shipment
            </button>
            <button className="border border-white px-6 py-3 rounded-lg text-white font-medium hover:bg-white hover:text-[#1F2937] transition-all shadow-sm">
              📞 Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
