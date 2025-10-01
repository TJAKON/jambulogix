"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse sm:flex-row items-center sm:justify-start gap-6 sm:gap-12 px-4 sm:px-10 md:px-20 py-12 sm:py-20 h-[90vh] sm:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/83.png"
        alt="Banner"
        fill
        className="object-cover z-0 object-bottom"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Left Content */}
      <div className="z-20 w-full sm:w-3/5 text-[#FF7F06]">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Experience the Future of <span className="text-white">Logistics</span>
        </h1>

        <p className="text-white/80 mb-6 text-lg sm:text-2xl capitalize">
          Agile by Design{" "}
          <span className="text-[#FF7F06]">Yours by Choice</span>
        </p>

        {/* Tracking Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl w-full max-w-xl">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
            Track Your Shipment -  <span className="text-[#FF7F06]"> Comming soon!</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Tracking ID ( CIN )"
              className="flex-1 px-4 py-3 rounded-xl border border-white bg-transparent text-sm sm:text-base outline-none text-white placeholder:text-white/60"
            />
            <button className="bg-[#FF7F06] text-black font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition">
              Track
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 sm:right-30 bottom-0 sm:bottom-0 z-0  md:z-10 w-full sm:w-auto flex justify-center sm:justify-end">
        <Image
          src="/JLXXM.png"
          alt="Hero"
          width={460}
          height={200}
          className="w-[400px] sm:w-[320px] md:w-[420px] h-auto "
        />
      </div>
    </section>
  );
}
