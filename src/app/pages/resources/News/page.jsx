import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { news } from "./data";

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0A0F2D] text-white py-32 sm:py-28 md:py-40 text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/news.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 px-4 sm:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-snug">
            Latest{" "}
            <span className="text-[#FF7F06] text-8xl font-extrabold">News</span>{" "}
            &{" "}
            <span className="text-[#FF7F06] text-8xl font-extrabold">
              Insights
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-5xl mx-auto mb-10">
            Discover breaking stories, industry insights, and expert opinions in
            technology, logistics, and business. Stay ahead with knowledge that
            empowers you.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-[#070B2A] text-white py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto px-6 md:px-20">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-300 mb-3">
                  <Calendar className="w-4 h-4 mr-2 text-[#FF7F06]" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{item.excerpt}</p>
                <Link
                  href={`/pages/resources/News/${item.slug}`}
                  className="flex items-center text-[#FF7F06] hover:underline font-medium"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
