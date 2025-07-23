"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import InnerNumbers from "@/components/sections/InnerNumbers";
import InstantQuote from "@/components/sections/InstantQuote";

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
      <section className="relative px-4 sm:px-6 md:px-16 h-[90vh] sm:h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden py-12 md:py-0">
        {/* 🔹 Background Image Layer */}
        <div className=" absolute inset-0 -z-10">
          <Image
            src="/53.jpg"
            alt="Background blur"
            fill
            className="object-cover blur-sm opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* 🔹 Text & Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white leading-tight">
            Logistics with <span className="text-[#FF7F06]">Heart</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 max-w-xl mx-auto md:mx-0">
            MotherHood Service by Jambulogix – Where every package is treated
            like family.
          </p>
          <div className="flex flex-col sm:flex-col xl:flex-row gap-4 justify-center md:justify-start">
            <Link href="/pages/contact-us" passHref>
              <button
                type="button"
                className="bg-[#1F2937] text-white w-full px-6 py-3 rounded-lg hover:bg-[#111827] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF7F06] focus:ring-offset-2"
              >
                🧡 Ship with Care
              </button>
            </Link>

            <Link href="#quote" passHref>
              <button
                type="button"
                className="border border-gray-400 w-full bg-[#FF7F06] px-6 py-3 rounded-lg hover:bg-gray-100 transition-all text-black focus:outline-none focus:ring-2 focus:ring-[#1F2937] focus:ring-offset-2"
              >
                Get Instant Quote
              </button>
            </Link>
          </div>
        </div>

        {/* 🔹 Foreground Image */}
        <div className="hidden sm:block w-full md:w-1/2 h-64 sm:h-80 md:h-[420px] rounded-xl relative overflow-hidden shadow-lg z-10">
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
      <section className="py-16 px-4 sm:px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold md:font-extrabold text-[#1F2937] leading-tight">
              Why Choose <span className="text-[#FF7F06]">MotherHood</span>{" "}
              Service?
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
                className="bg-[#0A1A2F] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-2xl sm:text-3xl bg-[#FFE8D6] rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <InnerNumbers />

      <section className="py-16 px-4 sm:px-6 md:px-10 bg-[#F4F6F8]">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold md:font-extrabold text-center mb-10">
          Our Core <span className="text-[#FF7F06]">Services</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.1 },
            1024: { slidesPerView: 2 },
          }}
          navigation
          loop={true}
          className="max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-start">
                {/* Image */}
                <div className="w-full md:w-3/5 h-[280px] sm:h-[400px] md:h-[460px] relative overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/5 text-left mt-4 md:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {service.desc}
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6 text-sm sm:text-base">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <button className="bg-[#1F2937] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#FF7F06] transition-all">
                    Start Booking
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔸 HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-[#FFF] to-[#F9FAFB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold md:font-extrabold text-[#1F2937] mb-14">
            How <span className="text-[#FF7F06]">It Works</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10 relative z-10">
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="text-3xl sm:text-4xl mb-4 bg-[#FFFAF0] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-md">
                  {step.icon}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mb-1 tracking-wide uppercase">
                  Step {i + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-0 left-0 w-60 h-60 sm:w-72 sm:h-72 bg-[#FFEDD5] rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72 bg-[#DBEAFE] rounded-full blur-3xl opacity-30 -z-10" />
      </section>

      {/* Trust & Safety */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold md:font-extrabold text-white mb-12 sm:mb-16">
              Trust & <span className="text-[#FF7F06]">Safety</span> Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-10">
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
                className="bg-black/30 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-5 flex items-center justify-center text-2xl sm:text-3xl rounded-full bg-[#FFFAF0] text-[#FF7F06] shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-[#FFF8F1] to-[#FDFDFD] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold md:font-extrabold text-[#1F2937] mb-6 sm:mb-12">
              Stories from Our{" "}
              <span className="text-[#FF7F06]">Extended Family</span>
            </h2>
          </div>

          <p className="text-gray-600 max-w-xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg">
            Hear from loving parents, doting grandparents, and globe-trotting
            professionals who made someone’s day special through MotherHood.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-10">
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
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="text-3xl sm:text-4xl mb-4">{t.emoji}</div>
                <p className="italic text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                  “{t.quote}”
                </p>
                <hr className="my-3 sm:my-4 border-t border-gray-200" />
                <p className="font-bold text-[#1F2937] text-base sm:text-lg">
                  {t.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">{t.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}

      <section id="quote">
        <InstantQuote />
      </section>

      {/* Final CTA */}
      <section className="bg-[#111827] text-white py-20 px-6 md:px-20 text-center relative overflow-hidden">
        {/* Subtle Background Shape (Optional) */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-normal md:font-extrabold mb-4">
            Ready to Ship with <span className="text-[#FF7F06]">Heart</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of Indian families who trust{" "}
            <span className="text-white font-semibold">MotherHood Service</span>
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="#quote" passHref>
              <button className="bg-[#FF7F06] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e66900] transition-all shadow-md">
                🚚 Start Your First Shipment
              </button>
            </Link>

            <Link href="/pages/contact-us" passHref>
              <button className="border border-white px-6 py-3 rounded-lg text-white font-medium hover:bg-white hover:text-[#1F2937] transition-all shadow-sm">
                📞 Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
