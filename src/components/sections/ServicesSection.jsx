"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Warehousing",
    description:
      "Hassle-free shipping with expert handling, customs clearance, and optimized routes.",
    image: "/102.jpg",
    color: "#4F46E5",
    to: "/pages/services/smart-warehousing-solution",
  },
  {
    title: "Distribution",
    description:
      "Secure storage and efficient distribution to keep your supply chain running smoothly.",
    image: "/96.jpg",
    color: "#F97316",
    to: "/pages/services/smart-distribution-solution",
  },
  {
    title: "Transportation",
    description:
      "Safe, reliable, and timely cargo movement across local and global routes.",
    image: "/100.jpg",
    color: "#4F46E5",
    to: "/pages/services/transportation-service",
  },
  // {
  //   title: "Supply Chain Solution ",
  //   description:
  //     "Streamlining logistics for seamless and efficient and effective operations from start to finish.",
  //   image: "/101.jpg",
  //   color: "#4F46E5",
  //   to: "/pages/services/supply-chain-solution",
  // },
];

export default function ServicesSection() {
  return (
    <section className=" relative px-4 sm:px-8 lg:px-20 py-12 sm:py-20 bg-white/95 text-black">
      <div className=" hidden md:block absolute inset-0 opacity-40 pointer-events-none">
        <Image
          src="/graphics.png"
          alt="Background Graphic"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <motion.h2
        className="text-4xl sm:text-5xl font-bold md:font-extrabold mb-3 text-[#FF7F06] text-center md:text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="text-xl sm:text-3xl font-normal md:font-bold mb-6 md:mb-12 text-[#24577F] max-w-3xl text-center md:text-center mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Elevate Your Supply Chain with Our Comprehensive Logistics Solutions
      </motion.p>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <Link href={service.to} key={index}>
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
                <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-[#24577F] text-left md:text-center">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-white text-left md:text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
