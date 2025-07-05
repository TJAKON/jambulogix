"use client";

import React from "react";

export default function Numbers() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 sm:p-20 text-center">
      <div>
        <p className="text-2xl md:text-5xl font-bold">1 Billion+</p>
        <p className="text-sm md:text-xl text-white/60">Parcels Delivered</p>
      </div>
      <div>
        <p className="text-2xl md:text-5xl font-bold">2.5 Million+</p>
        <p className="text-sm md:text-xl text-white/60">
          Sq. Ft. of Sort Centres
        </p>
      </div>
      <div>
        <p className="text-2xl md:text-5xl font-bold">14,300+</p>
        <p className="text-sm md:text-xl text-white/60">Pin Codes</p>
      </div>
      <div>
        <p className="text-2xl md:text-5xl font-bold">2,500+</p>
        <p className="text-sm md:text-xl text-white/60">Truck Fleet</p>
      </div>
    </section>
  );
}
