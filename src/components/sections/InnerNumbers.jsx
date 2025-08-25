"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.replace(/[^0-9]/g, ""));
      if (isNaN(end)) return;

      const duration = 5000;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animate();
    }
  }, [inView, target]);

  return (
    <h3
      ref={ref}
      className="text-xl md:text-3xl font-extrabold mb-2 text-[#FF7F06]"
    >
      {count.toLocaleString()}
      {target.includes("Billion") ? "+" : ""}
    </h3>
  );
}

export default function InnerNumbers() {
  const stats = [
    {
      label: "SQFT Warehouse Space",
      value: "200000",
      suffix: "+",
    },
    { label: "Shipments Processing Daily", value: "400000", suffix: " +" },
    { label: "Livelihood Daily ", value: "1000", suffix: "+" },
    { label: "Live Warehousing", value: "5", suffix: "states +" },
  ];

  return (
    <section className="bg-[#0A1A2F] text-white py-16 px-6 sm:px-20">
      <div className="max-w-8xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl font-bold mb-4"
        >
          Powering Growth at Scale — With Speed, Precision & Purpose
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-white/70 max-w-3xl mx-auto"
        >
          At Jambulogix, we don’t just move products — we move industries
          forward. With a rapidly growing footprint and future-ready
          infrastructure, we’re redefining what warehousing efficiency looks
          like
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-10 max-w-6xl mx-auto text-nowrap">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="rounded-2xl text-center bg-[#112233] p-6 shadow-lg hover:scale-105 transition-transform text-nowrap"
          >
            <Counter target={stat.value + stat.suffix} />
            <p className="text-xs md:text-sm text-white/80 tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
