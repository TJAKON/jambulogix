"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TestimonialCarousel from "@/components/sections/TestimonialSection";

const posts = [
  {
    title: "The Future of Technology",
    description: "Exploring AI, Blockchain, and the next wave of innovation.",
    image: "/logistics.jpg",
    date: "Aug 20, 2025",
    read: "5 min read",
  },
  {
    title: "Designing Calm Experiences",
    description: "How minimal design creates focus & better usability.",
    image: "/logistics.jpg",
    date: "Aug 18, 2025",
    read: "3 min read",
  },
  {
    title: "Web3 for Businesses",
    description: "Decentralized apps and why companies should care.",
    image: "/logistics.jpg",
    date: "Aug 15, 2025",
    read: "7 min read",
  },
  {
    title: "The Future of Technology",
    description: "Exploring AI, Blockchain, and the next wave of innovation.",
    image: "/logistics.jpg",
    date: "Aug 20, 2025",
    read: "5 min read",
  },
  {
    title: "Designing Calm Experiences",
    description: "How minimal design creates focus & better usability.",
    image: "/logistics.jpg",
    date: "Aug 18, 2025",
    read: "3 min read",
  },
  {
    title: "Web3 for Businesses",
    description: "Decentralized apps and why companies should care.",
    image: "/logistics.jpg",
    date: "Aug 15, 2025",
    read: "7 min read",
  },
  {
    title: "The Future of Technology",
    description: "Exploring AI, Blockchain, and the next wave of innovation.",
    image: "/logistics.jpg",
    date: "Aug 20, 2025",
    read: "5 min read",
  },
  {
    title: "Designing Calm Experiences",
    description: "How minimal design creates focus & better usability.",
    image: "/logistics.jpg",
    date: "Aug 18, 2025",
    read: "3 min read",
  },
  {
    title: "Web3 for Businesses",
    description: "Decentralized apps and why companies should care.",
    image: "/logistics.jpg",
    date: "Aug 15, 2025",
    read: "7 min read",
  },
  {
    title: "The Future of Technology",
    description: "Exploring AI, Blockchain, and the next wave of innovation.",
    image: "/logistics.jpg",
    date: "Aug 20, 2025",
    read: "5 min read",
  },
  {
    title: "Designing Calm Experiences",
    description: "How minimal design creates focus & better usability.",
    image: "/logistics.jpg",
    date: "Aug 18, 2025",
    read: "3 min read",
  },
  {
    title: "Web3 for Businesses",
    description: "Decentralized apps and why companies should care.",
    image: "/logistics.jpg",
    date: "Aug 15, 2025",
    read: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section
        className="bg-[#0A0F2D] text-white py-32 sm:py-28 md:py-40 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/logistics.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-snug">
            Stay{" "}
            <span className="text-[#FF7F06] font-extrabold text-8xl">
              Informed
            </span>
            , Stay{" "}
            <span className="text-[#FF7F06] text-8xl font-extrabold">
              Ahead
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-5xl mx-auto mb-8">
            Explore the latest news, insights, and expert articles in
            technology, logistics, and business trends. Stay updated with
            stories that matter to you.
          </p>

          {/* Search bar */}
          {/* <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search articles, news, or topics..."
              className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded-l-2xl text-black border focus:outline-none"
            />
            <button className="bg-[#FF7F06] px-6 py-3 rounded-r-2xl font-semibold hover:bg-[#e96e00] transition">
              Search
            </button>
          </div> */}
        </div>
      </section>

      <div className="relative min-h-screen bg-gradient-to-b from-[#f7f8fc] to-[#eef2f7] px-6 md:px-20 py-20">
        {/* Header Section */}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {post.date} • {post.read}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-3">{post.description}</p>
                <button className="mt-5 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <TestimonialCarousel /> */}
    </>
  );
}
