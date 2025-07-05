"use client";

import React from "react";
import Image from "next/image";

export default function CompetitiveEdge() {
  const features = [
    { title: "Healthcare & Pharma", image: "/test1.jpg" },
    { title: "eCommerce", image: "/test2.jpg" },
    { title: "Engineering & Industrial Goods", image: "/test3.jpg" },
    { title: "Perishable Goods", image: "/test4.jpg" },
  ];

  return (
    <section className="p-8 sm:p-20 bg-white/95 text-black">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-3 text-[#FF7F06]">
          Diversity & Inclusion
        </h2>
        <p className="mt-4 text-md text-gray-700">
          we understand that every industry has its own logistics challenges.
          That’s why we deliver sector-specific supply chain solutions built
          around speed, visibility, and flexibility. From high-value goods to
          time-sensitive deliveries, our network and infrastructure are equipped
          to support diverse industries across India with customized, end-to-end
          logistics services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 auto-rows-[350px]">
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
              className={`relative rounded-2xl overflow-hidden shadow group hover:shadow-lg transition-all h-[350px] ${colSpan}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full brightness-90 group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-white text-lg font-semibold backdrop-blur-sm">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
