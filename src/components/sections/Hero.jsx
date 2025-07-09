"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse sm:flex-row items-center h-lvh justify-between gap-8 p-8 sm:p-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Video-Showreel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image Overlay on top of video */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div> */}
      {/* Image Overlay on top of video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-center z-10"></div>

      {/* Content on top of both */}
      <div className="z-20 max-w-4xl text-[#FF7F06] p-0 md:pt-40">
        <h1 className="text-3xl sm:text-7xl font-bold mb-4 leading-tight">
          Experience the Future of
          <span className=" text-white"> Logistics</span>
        </h1>
        {/* <p className="text-white/80 mb-6 text-3xl">
          Efficient. Reliable. <span className="text-[#FF7F06]">On Time</span>{" "}
        </p> */}
        <p className="text-white/80 mb-6 text-3xl capitalize">
          Agile by Design{" "}
          <span className="text-[#FF7F06]">Yours by Choice</span>{" "}
        </p>
      </div>

      <Image
        src="/delivery_boy.webp"
        className=" absolute z-0 md:z-10 right-0 -bottom-10"
        alt="Hero"
        width={650}
        height={400}
      />
    </section>
  );
}
