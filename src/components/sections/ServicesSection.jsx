"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Warehousing",
    description:
      "Hassle-free shipping with expert handling, customs clearance, and optimized routes.",
    image: "/test1.jpg",
    color: "#4F46E5", // Indigo
  },
  {
    title: "Distribution",
    description:
      "Secure storage and efficient distribution to keep your supply chain running smoothly.",
    image: "/test2.jpg",
    color: "#F97316", // Orange
  },
  {
    title: "Transportation",
    description:
      "Safe, reliable, and timely cargo movement across local and global routes.",
    image: "/test3.jpg",
    color: "#4F46E5", // Indigo
  },
  {
    title: "Supply Chain",
    description: "Streamlining logistics for seamless and efficient operations from start to finish.",
    image: "/test4.jpg",
    color: "#4F46E5", // Indigo
  },
];

export default function ServicesSection() {
  return (
    <section className="p-8 sm:p-20 min-h-screen flex flex-col justify-center items-center bg-white/95 text-black relative">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#FF7F06]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-4xl sm:text-2xl font-bold mb-12 text-[#24577F] max-w-3xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevate Your Supply chain with Our Comprehensive Logistics Solutions
      </motion.p>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-5 rounded-3xl border border-white/30 bg-black/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
            }}
          >
            {/* <div
              className="flex justify-center items-center mb-6 rounded-full p-5"
              style={{
                background: `${service.color}15`,
                border: `1px solid ${service.color}33`,
              }}
            >
            </div> */}
              <Image
                src={service.image}
                alt={service.title}
                width={350}
                height={100}
                className="rounded-xl mb-6 h-80 object-cover mx-auto shadow-lg"
              />
            <h3
              className="font-bold text-4xl mb-4 text-[#24577F] text-center"
            //   style={{ color: service.color }}
            >
              {service.title}
            </h3>
            <p className="text-xl text-white text-center leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
