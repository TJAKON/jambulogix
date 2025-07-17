"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ""));
    const duration = 5000;
    const step = Math.ceil(end / (duration / 30));

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {value.includes("Million") ? " Million+" : value.includes("Billion") ? " Billion+" : "+"}
    </span>
  );
}

export default function Numbers() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 sm:p-20 text-center bg-black text-white">
      <div>
        <p className="text-2xl md:text-5xl font-bold">
          <AnimatedCounter value="10000000" />
        </p>
        <p className="text-sm md:text-xl text-white/60">Parcels Delivered</p>
      </div>
      <div>
        <p className="text-2xl md:text-5xl font-bold">
          <AnimatedCounter value="2500000" />
        </p>
        <p className="text-sm md:text-xl text-white/60">
          Sq. Ft. of Sort Centres
        </p>
      </div>
      <div>
        <p className="text-2xl md:text-5xl font-bold">
          <AnimatedCounter value="14300" />
        </p>
        <p className="text-sm md:text-xl text-white/60">Pin Codes</p>
      </div>
      <div>
        <p className="text-2xl md:text-5xl font-bold">
          <AnimatedCounter value="2500" />
        </p>
        <p className="text-sm md:text-xl text-white/60">Truck Fleet</p>
      </div>
    </section>
  );
}
