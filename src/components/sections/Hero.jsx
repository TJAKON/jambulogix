"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (

    <section className="relative flex flex-col-reverse sm:flex-row items-center h-lvh justify-between gap-8 p-8 sm:p-20 overflow-hidden">
  {/* Background Image */}
  <Image
    src="/warehousing.jpg" // Replace with your banner image path
    alt="Banner"
    fill
    className="object-cover z-0"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

  {/* Content */}
  <div className="z-20 max-w-4xl text-[#FF7F06] p-0 md:pt-40">
    <h1 className="text-3xl sm:text-7xl font-bold mb-4 leading-tight">
      Experience the Future of
      <span className=" text-white"> Logistics</span>
    </h1>
    <p className="text-white/80 mb-6 text-3xl capitalize">
      Agile by Design <span className="text-[#FF7F06]">Yours by Choice</span>
    </p>
  </div>

  {/* Delivery Image */}
  <Image
    src="/delivery_boy.webp"
    alt="Hero"
    width={650}
    height={400}
    className="absolute z-10 right-0 -bottom-10"
  />
</section>

  );
}
