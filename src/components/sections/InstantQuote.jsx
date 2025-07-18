"use client";

import { React, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InstantQuote() {
  const [quote, setQuote] = useState("₹299");
  const [weight, setWeight] = useState(1);
  const [destination, setDestination] = useState("");
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Side Background with Parallax */}
        <div className="w-full md:w-1/2 h-full md:h-full relative">
          <div
            className="absolute inset-0 rotate-270 bg-cover bg-center transform md:translate-y-0 translate-y-[0%] transition-transform duration-1000 ease-in-out"
            style={{
              backgroundImage: "url('/truck.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="hidden sm:flex">
            <div className="absolute inset-0 flex rotate-270 flex-col items-center md:items-start justify-top text-white px-6 md:px-20 py-10 md:py-0">
              {/* {["Fast", "Safe", "Hassle-Free"].map((line, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 1, duration: 0.8 }}
                  className="text-2xl md:text-5xl text-[#FF7F06] font-extrabold mb-2 drop-shadow-xl"
                >
                  {line}
                </motion.h2>
              ))} */}

              <motion.h2
                // key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                // transition={{ delay: i * 1, duration: 0.8 }}
                className="text-2xl md:text-5xl text-[#FF7F06] font-extrabold mb-2 drop-shadow-xl"
              >
                Fast, Safe, Hassle-Free
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6 md:px-16 bg-[#0A1A2F]">
          <div className="w-full max-w-md bg-[#FAFAFA] p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
              Get Instant Quote
            </h3>

            <form className="space-y-4">
              <select className="w-full p-3 border border-black text-black rounded-lg">
                <option>Up to 5kg</option>
                <option>5kg - 10kg</option>
                <option>10kg - 20kg</option>
              </select>

              <input
                type="text"
                placeholder="Enter destination city"
                className="w-full p-3 border border-black text-black  rounded-lg"
              />

              <select className="w-full p-3 border border-black text-black  rounded-lg">
                <option>Standard (3–5 days)</option>
                <option>Express (1–2 days)</option>
              </select>

              <div className="text-right text-sm text-black ">
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
  );
}
