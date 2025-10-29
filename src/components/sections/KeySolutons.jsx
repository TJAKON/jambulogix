"use client";

import React from "react";
import Image from "next/image";
import { icons } from "lucide-react";

const solutions = [
  {
    title: "Sort Centre",
    icon: "/icons/online-store.png",
    description:
      "Standerdized and stratigically located, high-volume sort centres optimized for regional and last-mile distribution.",
  },
  {
    title: "Fulfilment Centre",
    icon: "/icons/fulfillment.png",
    description:
      "Accurate pick-pack-ship operations integrated with your OMS for both B2B and D2C models.",
  },
  {
    title: "Dark Store",
    icon: "/icons/dark.png",
    description:
      "Urban micro-fulfilment hubs built for 2–4 hour delivery across FMCG, pharma, fashion, and more.",
  },
  {
    title: "Cross Dock",
    icon: "/icons/cross-docking.png",

    description:
      "Minimize storage and maximize speed with inbound-to-outbound flow for perishables and high-turnover goods.",
  },

  {
    title: "Hub In Hub",
    icon: "/icons/warehousehub.png",

    description:
      "Deeper rural coverage with embedded micro-warehouses and real-time tracking at regional hubs.",
  },

  {
    title: "Quickrack",
    icon: "/icons/warehouse.png",

    description:
      "Urban micro-fulfilment hubs built for 2–4 hour delivery across FMCG, pharma, fashion, and more.",
  },
  {
    title: "First Mile Service",
    icon: "/icons/shipped.png",

    description:
      "Swift pickups with barcode validation and seamless routing from seller to hub.",
  },
  {
    title: "Last Mile Service",
    icon: "/icons/truck.png",

    description:
      "Reliable, real-time deliveries across 10,000+ pin codes with ePOD and customer feedback loop.",
  },
  {
    title: "FTL (Full Truck Load)",
    icon: "/icons/delivery.png",

    description:
      "Dedicated truckloads with optimized routing, secure handling, and pan-India coverage.",
  },

  {
    title: "Surface Express",
    icon: "/icons/delivery-truck.png",
    description:
      "Priority road transport that’s faster than standard freight for high-frequency routes.",
  },
  {
    title: "Air Express",
    icon: "/icons/air-plane.png",

    description:
      "Same-day and next-day air deliveries with temperature control for critical cargo.",
  },
  {
    title: "Rail Parcel",
    icon: "/icons/train-cargo.png",

    description:
      "Eco-efficient bulk shipping via Indian Railways with seamless last-mile integration.",
  },

  {
    title: "Student Parcel",
    icon: "/icons/bag.png",

    description:
      "Books, laptops, clothes, and essentials delivered to colleges or hostels with tamper-proof tracking and affordable plans.",
  },

  {
    title: "Air Baggage",
    icon: "/icons/flight-attendant.png",

    description:
      "Skip airline fees—securely send your excess luggage via domestic air freight with real-time tracking.",
  },
];

export default function KeySolutions() {
  return (
    <section className="bg-white/95 text-black px-4 sm:px-5 lg:px-20 pt-28 pb-16 min-h-screen relative">
      <div className="flex flex-col lg:flex-col xl:flex-row gap-10">
        {/* Sticky Title */}
        <div className="lg:w-5/5 xl:w-2/5 flex flex-col items-center sm:items-start space-y-6">
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
            <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FF7F06] text-center sm:text-left">
              Smart.
            </p>
            <p className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#FF7F06] text-center sm:text-left">
              Scalable.
            </p>
            <p className="text-3xl sm:text-4xl md:text-8xl font-bold text-[#FF7F06] text-center sm:text-left">
              Solutions.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-md font-medium text-gray-700 text-center sm:text-left mt-4">
              We deliver fast, flexible, and tech-driven logistics solutions for
              businesses of all sizes. From storage to delivery, our
              custom-built services ensure visibility, speed, and reliability
              across your supply chain.
            </p>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="lg:w-5/5 xl:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#24577F] hover:bg-black/60 cursor-pointer backdrop-blur-3xl p-12 rounded-3xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 ease-in-out"
              >
                <div className="flex flex-col h-full items-start">
                  <Image
                    src={item.icon} // <-- Replace with your actual icon
                    alt="Icon"
                    width={32}
                    height={32}
                    className="mb-4 w-24 text-white"
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
