"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Satish kumar",
    role: "Founder & CEO",
    image: "/p4.jpg",
    quote: "Passion drives logistics, people bring it to life.",
  },
  {
    name: "Ishita basu",
    role: "Head of Operations",
    image: "/p5.jpg",
    quote: "Efficiency and empathy—our dual strengths.",
  },
  {
    name: "Sandeep Parmar",
    role: "Customer Success Lead",
    image: "/test.jpeg",
    quote: "Every parcel is a promise—we make sure it’s kept.",
  },
  {
    name: "Mahesh kumar",
    role: "Technology Director",
    image: "/p4.jpg",
    quote: "We scale fulfillment with scalable code.",
  },
  {
    name: "Sanjeev kumar",
    role: "Technology Director",
    image: "/p4.jpg",
    quote: "We scale fulfillment with scalable code.",
  },
];
const catalysts = [
  {
    name: "Akash Singh",
    role: "Founder & CEO",
    image: "/p4.jpg",
    quote: "Passion drives logistics, people bring it to life.",
  },
  {
    name: "Sourabh Singh",
    role: "Head of Operations",
    image: "/p5.jpg",
    quote: "Efficiency and empathy—our dual strengths.",
  },
  {
    name: "Dinesh kumar",
    role: "Customer Success Lead",
    image: "/test.jpeg",
    quote: "Every parcel is a promise—we make sure it’s kept.",
  },
  {
    name: "Neeraj kumar",
    role: "Technology Director",
    image: "/p4.jpg",
    quote: "We scale fulfillment with scalable code.",
  },
  {
    name: "Mandeep Singh",
    role: "Technology Director",
    image: "/p4.jpg",
    quote: "We scale fulfillment with scalable code.",
  },
  {
    name: "Rakhi",
    role: "Technology Director",
    image: "/p4.jpg",
    quote: "We scale fulfillment with scalable code.",
  },
];

const leaders = [
  {
    name: "Nikhilendu Shekhar",
    role: "Founder & CEO",
    desc: "Business Performance",
    img: "/n5.png",
  },
  {
    name: "Satish kumar",
    role: "Co-Founder & COO",
    desc: "Business Operations",
    img: "/p6.png",
  },

  {
    name: "Priyanci singh",
    role: "Co-Founder & CCOE",
    desc: "Business Excellence   ",
    img: "/p1.jpg",
  },

  {
    name: "Amarendra Pratap Singh",
    role: "CO-Founder & CSO",
    desc: "Business Strategy",
    img: "/p2.jpg",
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
          <h1 className="text-white text-4xl sm:text-5xl max-w-6xl font-bold mb-4">
            "Alone we can do so little - together we can do so much”.....
            <span className=" text-3xl"> Helen Keller</span>
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-6xl mx-auto">
            This belief moves us every day. Meet the people powering India’s
            most inclusive logistics network. Our heart-led team is committed to
            delivering care, comfort, and connection—across every shipment.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-20 bg-gradient-to-b from-white to-[#F9FAFB] text-[#0A1A2F]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/n5.png"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover object-center"
            />
          </div>

          {/* Text Block */}
          <div>
            <h2 className="text-4xl sm:text-4xl font-extrabold text-[#24577F] leading-tight mb-5">
              Vision Behind{" "}
              <span className="text-[#FF7F06] sm:text-6xl">
                Jambulogix {"  "}
              </span>
            </h2>
            {/* <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#24577F] leading-tight">
              <span className="text-[#24577F]"> A Note from {"  "}</span>
              <span className="text-[#FF7F06]">Our Founder </span>
            </h2> */}

            <p className="text-gray-600 text-md mb-6 leading-relaxed text-clip">
              In an increasingly connected world, logistics is no longer just
              about moving goods from Point A to Point B — it’s about enabling
              businesses to grow, customers to trust, and experiences to be
              delivered seamlessly. Jambulogix was founded with a clear purpose
              to redefine fulfillment by combining operational excellence with a
              deep commitment to people — our team, our partners, and our
              clients. Our journey has been built on agility, accountability,
              and a relentless pursuit of improvement. Whether it’s the last
              mile or the first step, we believe in creating value through
              precision, transparency, and care. As we continue to grow, our
              focus remains the same — building a robust logistics ecosystem
              that empowers every stakeholder involved. Because at Jambulogix,
              we don’t just deliver products — we deliver reliability.
            </p>
            <p className="text-black text-xl font-bold mb-6 leading-relaxed">
              Nikhilendu Shekhar, Founder & CEO, Jambulogix
            </p>
          </div>

          {/* Image Block */}
        </div>
      </section>

      <section className="py-24 px-6 sm:px-20 bg-white/20">
        <div className="max-w-8xl mx-auto">
          {/* <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#FF7F06] mb-4">
            Our Board - Guiding the Vision
          </h2> */}

          <h2 className="text-4xl font-extrabold text-[#24577F] mx-auto text-center max-w-7xl mb-6 leading-tight drop-shadow-lg">
            Our Board
            <span className=" text-6xl text-[#FF7F06]">
              {" "}
              Guiding the Vision
            </span>
          </h2>

          <h5 className="text-black text-4xl sm:text-2xl max-w-7xl text-center mx-auto font-bold mb-4">
            "Anchoring our purpose with experience and foresight" Behind every
            bold move is a foundation of insight.
          </h5>
          <h3 className=" flex">
            <p className="text-black text-lg sm:text-md max-w-6xl mx-auto text-center mb-16">
              Our Board brings the depth of experience, strategic clarity, and
              long-term perspective that keeps Jambulogix grounded in purpose
              and geared for progress. With eyes on the horizon and hands steady
              on the wheel, our Board help ensure every leap forward is backed
              by
              <span className=" text-[#24577F] uppercase font-extrabold">
                {" "}
                wisdom, integrity,{" "}
                <span className=" text-black lowercase font-normal">
                  {" "}
                  and
                </span>{" "}
                intent.
              </span>
            </p>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4  gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden h-90 shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500 z-10"></div>

                {/* Name (always visible) */}
                <div className="absolute bottom-4 left-4 z-20 capitalize">
                  <p className="text-white text-lg font-bold">{leader.name}</p>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <p className="text-[#FF7F06] font-semibold text-md mb-1">
                    {leader.role}
                  </p>
                  <p className="text-sm">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#F9FAFB]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl max-w-5xl mx-auto capitalize font-extrabold text-[#24577F] mb-4">
            <span className="text-[#FF7F06] sm:text-6xl">
              The Navigators{"  "}
            </span>
            Charting the course for what’s next
          </h2>
          <p className="text-gray-600 text-lg max-w-7xl mx-auto">
            At the intersection of vision and execution, The Navigators are the
            minds that steer Jambulogix toward its future. We decode complexity,
            identify opportunity, and design strategies that keep us ahead of
            the curve in a rapidly evolving logistics landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-10 max-w-8xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border-2 border-[#24577F] p-6 shadow-lg hover:shadow-xl text-center transition-all"
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

      <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#F9FAFB]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24577F] mb-4"></h2>

          <h2 className="text-3xl sm:text-4xl max-w-5xl mx-auto capitalize font-extrabold text-[#24577F] mb-4">
            <span className="text-[#FF7F06] sm:text-6xl">
              The Catalysts{"  "}
            </span>
            - Fueling momentum, driving change
          </h2>
          <p className="text-gray-600 text-lg max-w-7xl mx-auto">
            When vision turns into action, that’s where we come in. We bring
            clarity, speed, and precision to every step of execution. With a
            deep understanding of strategy and a bias for progress, we drive
            outcomes that matter — consistently, intelligently, and together.
            We’re not just moving fast — we’re moving with intent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {catalysts.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border-2 border-[#24577F] rounded-2xl p-6 shadow-lg hover:shadow-xl text-center transition-all"
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
      <section
        className=" relative bg-[#24577F] h-[80vh] bg-cover bg-center text-white py-20 px-6 sm:px-12 md:px-20"
        style={{ backgroundImage: "url('/images/group2.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="text-center items-start justify-start z-10 relative max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl max-w-6xl mx-auto capitalize font-extrabold text-white mb-4">
            <span className="text-[#FF7F06] sm:text-6xl">
              Built on Belief.{"  "}
            </span>
            Fueled by People.
          </h2>
          <h5 className="text-3xl md:text-3xl font-bold mb-4 capitalize">
            Our people. Our strength. Our story.
          </h5>
          <p className="text-lg text-white max-w-7xl mx-auto capitalize">
            our people are the backbone of everything we do. From the ground to
            the grid, every role matters — and every voice is valued. We’re
            building a logistics ecosystem that’s not just fast, but fair,
            inclusive, and deeply human. Because when people thrive, systems
            grow. And that’s the future we believe in — together
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl max-w-6xl mx-auto capitalize font-extrabold text-[#24577F] mb-4">
          Want to Join
          <span className="text-[#FF7F06] sm:text-6xl">
            {" "}
            Our Mission!{"  "}
          </span>
        </h2>
        <p className="text-md text-gray-600 max-w-2xl mx-auto mb-6">
          We’re always looking for dreamers, doers, and disruptors —
          people-first thinkers who want to build something meaningful
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
