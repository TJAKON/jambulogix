"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "./data";

export default function BlogPage() {
  return (
    <>
      {/* 🔹 Hero Section */}
      <section
        className=" text-white h-[650px] py-32 sm:py-28 md:py-40 text-center bg-cover bg-bottom relative"
        style={{ backgroundImage: "url('/images/blogsbanner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10" />
        {/* <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
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
            Explore the latest blogs, insights, and expert articles in
            technology, logistics, and business trends. Stay updated with
            stories that matter to you.
          </p>
        </div> */}
      </section>

      {/* 🔹 Blog Grid */}
      <section className="bg-gradient-to-b from-[#f7f8fc] to-[#eef2f7] px-6 md:px-20 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
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

                <Link href={`/pages/resources/blogs/${post.slug}`}>
                  <button className="mt-5 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition">
                    Read More <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
