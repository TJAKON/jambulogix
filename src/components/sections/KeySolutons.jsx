"use client";

import React from "react";
import Image from "next/image";

const solutions = [
  {
    title: "Student Parcel",
    description:
      "Books, laptops, clothes, and essentials delivered to colleges or hostels with tamper-proof tracking and affordable plans.",
  },
  {
    title: "Air Baggage",
    description:
      "Skip airline fees—securely send your excess luggage via domestic air freight with real-time tracking.",
  },
  {
    title: "More Personalised Services",
    description:
      "Care packages, gifting logistics, and emergency deliveries for students, families, and loved ones.",
  },
  {
    title: "Sorting Centre",
    description:
      "Automated, high-volume sorting centers optimized for regional and last-mile distribution.",
  },
  {
    title: "Fulfilment Centre",
    description:
      "Accurate pick-pack-ship operations integrated with your OMS for both B2B and D2C models.",
  },
  {
    title: "Dark Store",
    description:
      "Urban micro-fulfilment hubs built for 2–4 hour delivery across FMCG, pharma, fashion, and more.",
  },
  {
    title: "Cross Dock",
    description:
      "Minimize storage and maximize speed with inbound-to-outbound flow for perishables and high-turnover goods.",
  },
  {
    title: "Hub In Hub",
    description:
      "Deeper rural coverage with embedded micro-warehouses and real-time tracking at regional hubs.",
  },
  {
    title: "First Mile Service",
    description:
      "Swift pickups with barcode validation and seamless routing from seller to hub.",
  },
  {
    title: "Last Mile Service",
    description:
      "Reliable, real-time deliveries across 10,000+ pin codes with ePOD and customer feedback loop.",
  },
  {
    title: "FTL (Full Truck Load)",
    description:
      "Dedicated truckloads with optimized routing, secure handling, and pan-India coverage.",
  },
  {
    title: "Surface Express",
    description:
      "Priority road transport that’s faster than standard freight for high-frequency routes.",
  },
  {
    title: "Air Express",
    description:
      "Same-day and next-day air deliveries with temperature control for critical cargo.",
  },
  {
    title: "Rail Parcel",
    description:
      "Eco-efficient bulk shipping via Indian Railways with seamless last-mile integration.",
  },
  {
    title: "Hub Operations & Optimization (Hub Care)",
    description:
      "SOP-driven hub management with load scheduling, tracking, and resource planning tools.",
  },
  {
    title: "Distribution Solutioning",
    description:
      "Custom strategies for inventory placement, route planning, and multi-tier distribution.",
  },
];

export default function KeySolutions() {
  return (
    <section className="bg-white/95 text-black px-4 sm:px-20 pt-28 pb-16 min-h-screen relative">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Sticky Title */}
        <div className="sm:w-2/5 flex flex-col items-center sm:items-start space-y-6">
          <div className="w-full md:sticky md:top-28 z-10">
            {/* Logo */}
            <Image
              src="/jlxx.png"
              alt="Jambulogix Logo"
              width={180}
              height={40}
              className="mx-auto sm:mx-0 mb-4"
            />

            {/* Title */}
            <p className="text-3xl sm:text-4xl md:text-8xl font-bold text-[#FF7F06] text-center sm:text-left">
              Smart. Scalable. Solutions.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center sm:text-left mt-4">
              We deliver fast, flexible, and tech-driven logistics solutions for
              businesses of all sizes. From storage to delivery, our
              custom-built services ensure visibility, speed, and reliability
              across your supply chain.
            </p>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="sm:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#24577F] hover:bg-black/90 cursor-pointer backdrop-blur-3xl p-12 rounded-3xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 ease-in-out"
              >
                <div className="flex flex-col h-full items-start">
                  <Image
                    src="/delivery.png" // <-- Replace with your actual icon
                    alt="Icon"
                    width={32}
                    height={32}
                    className="mb-4 w-24"
                  />
                  <h4 className=" text-2xl md:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
