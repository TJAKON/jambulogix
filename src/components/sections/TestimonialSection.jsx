"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";

const testimonials = [
  {
    name: "Ankur Mehta",
    role: "Head of Operations, FreshMart",
    message:
      "Jambulogix transformed our logistics efficiency. Deliveries are faster, tracking is seamless, and their team is always on-point.",
  },
  {
    name: "Sonal Verma",
    role: "Founder, Ziva D2C",
    message:
      "As a growing brand, we needed a reliable partner. Jambulogix gave us scale, visibility, and peace of mind.",
  },
  {
    name: "Rajiv Singh",
    role: "Logistics Lead, WareConnect",
    message:
      "Their tech-first approach and pan-India coverage helped us optimize costs and streamline our supply chain operations.",
  },
  {
    name: "Priya Malhotra",
    role: "COO, QuickMart",
    message:
      "Their scalable infrastructure helped us expand into new markets without a hitch.",
  },
  {
    name: "Amit Desai",
    role: "CTO, TranzitHub",
    message:
      "Real-time tracking and dedicated support makes them an invaluable logistics partner.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-white/95 py-20 px-6 sm:px-20 text-black">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-[#FF7F06] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 text-lg">
          Hear from our partners who trust Jambulogix to deliver excellence
          across every mile.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={2.5}
        spaceBetween={30}
        loop
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
        className="max-w-6xl"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-full p-3">
              <div className="bg-white/40 group border border-gray-200 hover:bg-[#24577F] shadow-xl rounded-xl p-8 h-full flex flex-col justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Quote className="text-[#24577F] group-hover:text-white w-6 h-6 mb-4 mx-auto transition-colors" />

                <p className="text-gray-800 group-hover:text-white text-base leading-relaxed mb-6 transition-colors">
                  "{item.message}"
                </p>

                <div>
                  <p className="text-[#24577F] group-hover:text-[#FF7F06] font-bold transition-colors">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-white transition-colors">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
