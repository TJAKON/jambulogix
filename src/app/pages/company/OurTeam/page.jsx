"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Anita Sharma",
    role: "Founder & CEO",
    image: "/test.jpeg",
    quote: "Passion drives logistics, people bring it to life.",
  },
  {
    name: "Ravi Mehra",
    role: "Head of Operations",
    image: "/test.jpeg",
    quote: "Efficiency and empathy—our dual strengths.",
  },
  {
    name: "Sonal Kapoor",
    role: "Customer Success Lead",
    image: "/test.jpeg",
    quote: "Every parcel is a promise—we make sure it’s kept.",
  },
  {
    name: "Arjun Patel",
    role: "Technology Director",
    image: "/test.jpeg",
    quote: "We scale fulfillment with scalable code.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-[75vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/76.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 px-6">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Meet the Visionary Minds
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
            Our heart-led team is committed to delivering care, comfort, and
            connection—across every shipment.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#F9FAFB]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24577F] mb-4">
            Core Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Behind every successful delivery is a team of passionate innovators,
            logistics experts, and customer-first champions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl text-center transition-all"
            >
              <div className="w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#24577F]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="italic text-gray-600 text-sm">“{member.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#24577F] text-white py-20 px-6 sm:px-12 md:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Belief. Fueled by People.
          </h2>
          <p className="text-lg text-white/80">
            At MotherHood Service, we believe that logistics isn’t just about
            moving boxes—it's about moving hearts. That’s why our team is made
            of people who care.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#24577F]">
          Want to Join Our Mission?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          We’re always looking for dreamers, doers, and disruptors to join our
          team.
        </p>
        <a
          href="/pages/company/Careers"
          className="inline-block bg-[#FF7F06] hover:bg-[#e26f00] text-white font-medium px-6 py-3 rounded-xl transition shadow-md"
        >
          View Careers
        </a>
      </section>
    </main>
  );
}
