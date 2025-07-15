"use client";

import React from "react";
import Image from "next/image";

export default function CompetitiveEdge() {
  const features = [
    { title: "Healthcare & Pharma", image: "/47.jpg" },
    { title: "eCommerce", image: "/50.jpg" },
    { title: "Engineering & Industrial Goods", image: "/48.jpg" },
    { title: "Perishable Goods", image: "/54.jpg" },
  ];

  return (
    <>
      <section className="p-6 sm:p-20 bg-white/95 text-black">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#FF7F06]">
            Diversity & Inclusion
          </h2>
          <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
            We understand that every industry has its own logistics challenges.
            That’s why we deliver sector-specific supply chain solutions built
            around speed, visibility, and flexibility. From high-value goods to
            time-sensitive deliveries, our network and infrastructure are
            equipped to support diverse industries across India with customized,
            end-to-end logistics services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 md:gap-6 auto-rows-[350px]">
          {features.map((item, i) => {
            const isEvenRow = Math.floor(i / 2) % 2 === 0;
            const isFirstInPair = i % 2 === 0;
            const colSpan = isEvenRow
              ? isFirstInPair
                ? "sm:col-span-8"
                : "sm:col-span-4"
              : isFirstInPair
              ? "sm:col-span-4"
              : "sm:col-span-8";

            return (
              <div
                key={item.title}
                className={`relative rounded-2xl overflow-hidden shadow group hover:shadow-lg transition-all h-[300px] sm:h-[350px] w-full ${colSpan}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full brightness-90 group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-white text-md sm:text-lg font-semibold backdrop-blur-sm">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section className="relative w-full h-20 md:h-64">
        <Image
          src="/49.jpg"
          alt="test"
          fill
          className="object-cover h-20 md:h-64"
        />
      </section> */}
    </>
  );
}
