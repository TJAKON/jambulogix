"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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

const values = [
  {
    icon: "🚀",
    label: "Customer Obsession",
    desc: "We put our customers at the heart of every move.",
  },
  {
    icon: "🤝",
    label: "Ownership Mindset",
    desc: "We take charge, act with purpose, and deliver results.",
  },
  {
    icon: "💡",
    label: "Innovation Every Day",
    desc: "We challenge the norm to build smarter, faster solutions.",
  },
  {
    icon: "⚡",
    label: "Speed with Integrity",
    desc: "We move fast but never compromise on ethics.",
  },
  {
    icon: "👥",
    label: "People First",
    desc: "We create a safe, inclusive, and empowering workplace.",
  },
  {
    icon: "🤝",
    label: "Collaboration Wins",
    desc: "We grow stronger by working together — across teams, across geographies.",
  },
  {
    icon: "🏆",
    label: "Excellence as Standard",
    desc: "We set the bar high and keep raising it.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/91.jpg"
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
            className="text-5xl sm:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            Your Ideas <span className="text-[#24577F] text-9xl font-extrabold "> Your Move</span>
            <br /> Our <span className="text-[#24577F] text-9xl font-extrabold ">Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-lg text-white/90 max-w-5xl"
          >
            At Jambulogix, speed meets strategy, tech meets teamwork — and every
            voice shapes the journey. If you believe in solving real-world
            challenges and building what’s next, you belong here.
          </motion.p>
        </div>
      </section>

      {/* add one section here unity in diversity the jambulogix way */}

      {/* Why Join Us */}
      <section className="py-24 px-6 sm:px-20 bg-gradient-to-b from-white to-[#F9FAFB] text-[#0A1A2F]">
        <div className="max-w-8xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Text Block */}
          <div>
            <h2 className="text-4xl sm:text-3xl font-extrabold mb-6 text-[#24577F] leading-tight">
              Why Work at{" "}
              <span className="text-[#FF7F06] text-7xl">Jambulogix..?</span>
            </h2>

            <p className="text-gray-600 text-md mb-6 leading-relaxed">
              we’re not just moving parcels—we're moving possibilities. We are
              reshaping the logistics ecosystem with technology, empathy, and
              agility at our core. At Jambulogix, we’re building more than a
              logistics network — we’re creating an ecosystem of opportunities,
              growth, and innovation. Here you'll build for scale, solve
              real-world bottlenecks, and grow in a culture that values
              ownership and innovation.
            </p>

            <ul className="text-gray-700 text-md space-y-4 list-disc pl-6">
              <li>
                Grow Fast – Accelerate your career in a high-growth
                logistics-tech environment
              </li>
              <li>
                Keep Learning – Gain hands-on exposure to operations,
                technology, and supply chain innovation
              </li>
              <li>
                Own Your Work – Freedom to take initiative and see your ideas
                come to life
              </li>
              <li>
                Make an Impact – Contribute directly to building India’s
                next-gen logistics network
              </li>
              <li>
                Be Recognized – Performance incentives, awards, and
                opportunities to shine
              </li>
              <li>
                Work Your Way – Flexible approach, supportive managers, and a
                people-first culture
              </li>
              <li>
                Enjoy the Journey – Collaborative teams, bonding activities, and
                an energizing workplace.
              </li>
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
            Life at <span className="text-[#FF7F06] text-8xl">Jambulogix</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6">
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
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Our Culture & Values
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Our team thrives on autonomy, accountability, and obsession with
            customer success.
          </p>

          {/* Swiper Carousel */}
          <Swiper
              modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // mobile
              768: { slidesPerView: 2 }, // tablet
              1024: { slidesPerView: 3 }, // desktop
            }}
          >
            {values.map((val, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#112233] p-16 rounded-2xl shadow-md h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4 text-[#FF7F06]">{val.icon}</div>
                  <h3 className="text-2xl font-semibold">{val.label}</h3>
                  <p className="text-white/70 mt-2 text-lg">{val.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-20 bg-[#FF7F06] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Ready to take the leap?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            We’re always seeking individuals who think differently, act boldly,
            and build with purpose.
          </p>
          <button className="bg-white text-[#FF7F06] px-6 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition">
            Send Your Resume
          </button>
        </div>
      </section>
    </>
  );
}
