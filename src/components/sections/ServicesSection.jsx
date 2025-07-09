"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Warehousing",
    description:
      "Hassle-free shipping with expert handling, customs clearance, and optimized routes.",
    image: "/test1.jpg",
    color: "#4F46E5",
  },
  {
    title: "Distribution",
    description:
      "Secure storage and efficient distribution to keep your supply chain running smoothly.",
    image: "/test2.jpg",
    color: "#F97316",
  },
  {
    title: "Transportation",
    description:
      "Safe, reliable, and timely cargo movement across local and global routes.",
    image: "/test3.jpg",
    color: "#4F46E5",
  },
  {
    title: "Supply Chain",
    description:
      "Streamlining logistics for seamless and efficient operations from start to finish.",
    image: "/test4.jpg",
    color: "#4F46E5",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-12 sm:py-20 bg-white/95 text-black">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#FF7F06] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="text-2xl sm:text-3xl font-bold mb-12 text-[#24577F] max-w-3xl text-center mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevate Your Supply Chain with Our Comprehensive Logistics Solutions
      </motion.p>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-3xl border border-white/30 bg-black/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-xl mb-6 w-full h-48 sm:h-60 object-cover mx-auto shadow-lg"
              />
              <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-[#24577F] text-center">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-white text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
