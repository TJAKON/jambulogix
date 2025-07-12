"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const openings = [
  {
    title: "Fleet Operations Manager",
    location: "Hyderabad, India",
    type: "Full-Time",
    desc: "Lead and optimize our ground operations. Monitor driver performance, route efficiency, and ensure SLA compliance across first and last mile deliveries.",
  },
  {
    title: "Warehouse Supervisor",
    location: "Raipur, India",
    type: "Full-Time",
    desc: "Oversee daily warehousing activities, inventory management, team supervision, and safety protocol enforcement within fulfillment or sorting centers.",
  },
  {
    title: "Logistics Solutions Analyst",
    location: "Remote",
    type: "Full-Time",
    desc: "Design, analyze, and improve supply chain solutions for clients using data insights, forecasting tools, and industry best practices.",
  },
  {
    title: "Last Mile Delivery Associate",
    location: "Delhi NCR, India",
    type: "Contract",
    desc: "Handle timely and secure deliveries directly to customers. Maintain high delivery accuracy, route efficiency, and customer communication.",
  },
  {
    title: "Client Success Executive – Logistics",
    location: "Bangalore, India",
    type: "Full-Time",
    desc: "Build long-term relationships with enterprise logistics clients. Oversee onboarding, performance tracking, and issue resolution.",
  },
  {
    title: "Product Manager – Supply Chain",
    location: "Mumbai, India",
    type: "Full-Time",
    desc: "Own and scale key logistics tech products. Translate ground-level problems into scalable digital solutions and manage product roadmap.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/careers-bg.jpg"
            alt="Careers at Jambulogix"
            fill
            className="object-cover brightness-60"
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-16 max-w-7xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-8xl font-extrabold mb-6 leading-tight drop-shadow-lg"
          >
            Join the <span className="text-[#FF7F06]"> Movement</span>
            <br /> Build <span className="text-[#FF7F06]">Tomorrow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white/90 max-w-2xl"
          >
            We’re transforming supply chain with speed, tech, and scale—join a
            team that thrives on solving real-world problems.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-6 sm:px-20 bg-gradient-to-b from-white to-[#F9FAFB] text-[#0A1A2F]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Block */}
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 text-[#24577F] leading-tight">
              Why Work at <span className="text-[#FF7F06]">Jambulogix?</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Jambulogix, we’re not just moving parcels—we're moving
              possibilities. We are reshaping the logistics ecosystem with
              technology, empathy, and agility at our core. Whether you're an
              engineer, analyst, or operations enthusiast, you'll build for
              scale, solve real-world bottlenecks, and grow in a culture that
              values ownership and innovation.
            </p>

            <ul className="text-gray-700 text-lg space-y-4 list-disc pl-6">
              <li>Be part of a fast-scaling logistics-tech movement</li>
              <li>Work with people solving high-impact real-world problems</li>
              <li>Grow fast in a flat, performance-first environment</li>
              <li>Enjoy hybrid flexibility & modern team culture</li>
            </ul>
          </div>

          {/* Image Block */}
          <div>
            <Image
              src="/57.jpg"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Life at Jambulogix */}
      <section className="py-20 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Life at <span className="text-[#FF7F06]">Jambulogix</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {["60.jpg", "58.jpg", "59.jpg"].map((img, i) => (
            <Image
              key={i}
              src={`/${img}`}
              alt="Culture"
              width={400}
              height={300}
              className="rounded-2xl object-cover w-full h-72"
            />
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 px-6 sm:px-20 bg-white text-[#0A1A2F]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#24577F]">
            Open Positions
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 text-left">
            {openings.map((role, idx) => (
              <motion.div
                key={idx}
                className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  {role.location} · {role.type}
                </p>
                <p className="text-gray-700 mb-4">{role.desc}</p>
                <button className="bg-[#FF7F06] hover:bg-[#e56f00] text-white font-semibold px-5 py-2 rounded-full transition">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 sm:px-20 bg-[#0A1A2F] text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Our Culture & Values
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Our team thrives on autonomy, accountability, and obsession with
            customer success.
          </p>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { icon: "🚀", label: "Speed Matters" },
              { icon: "🤝", label: "Earn Trust" },
              { icon: "🔍", label: "Think Deep" },
            ].map((val, i) => (
              <div key={i} className="bg-[#112233] p-8 rounded-2xl shadow-md">
                <div className="text-5xl mb-4 text-[#FF7F06]">{val.icon}</div>
                <h3 className="text-xl font-semibold">{val.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-20 bg-[#FF7F06] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Ready to take the leap?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            We’re always on the lookout for people who dare to think different
            and build big.
          </p>
          <button className="bg-white text-[#FF7F06] px-6 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition">
            Send Your Resume
          </button>
        </div>
      </section>
    </>
  );
}
