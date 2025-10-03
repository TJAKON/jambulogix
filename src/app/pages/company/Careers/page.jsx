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
    icon: "🏆",
    label: "Excellence in execution",
    desc: "We set the bar high and keep raising it.",
  },
  {
    icon: "🤝",
    label: "Collaboration Wins",
    desc: "We grow stronger by working together — across teams, across geographies.",
  },
  {
    icon: "👥",
    label: "People First",
    desc: "We create a safe, inclusive, and empowering workplace.",
  },

  {
    icon: "🫡",
    label: "Respect for All",
    desc: "We value diversity, inclusion, and fairness—treating every individual with dignity.",
  },
  {
    icon: "🏫",
    label: "Learning Culture",
    desc: "We encourage curiosity, knowledge sharing, and constant skill development.",
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

        <div className="relative z-10 h-full flex flex-col text-center justify-center items-center px-6 sm:px-16 max-w-7xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold mb-6 text-[#FF7F06] leading-tight drop-shadow-lg"
          >
            Your Ideas{" "}
            <span className="text-white text-8xl font-extrabold ">
              {" "}
              Your Move
            </span>
            <br /> Our{" "}
            <span className="text-white text-8xl font-extrabold ">Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-lg text-white/90 max-w-5xl text-start"
          >
            With us people don’t just follow plans —
            <span className="font-bold uppercase">they make them.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-lg text-white/90 max-w-5xl capitalize mt-4 "
          >
            speed meets strategy, tech meets teamwork — and every voice shapes
            the journey. If you believe in solving real-world challenges and
            building what’s next, you belong here.
          </motion.p>
        </div>
      </section>

      {/* add one section here unity in diversity the jambulogix way */}

      {/* Why Join Us */}
      <section className="py-24 px-6 sm:px-20 bg-gradient-to-b from-white to-[#F9FAFB] text-[#0A1A2F]">
        <div className="max-w-8xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Text Block */}
          <div>
            <h2 className="text-4xl sm:text-4xl font-extrabold mb-6 text-[#24577F] leading-tight">
              Grow with{" "}
              <span className="text-[#FF7F06] text-6xl">Jambulogix..</span>
            </h2>

            <p className="text-gray-600 text-md mb-6 leading-relaxed capitalize">
              we’re not just moving parcels—we're moving possibilities. We are
              reshaping the logistics ecosystem with technology, empathy, and
              agility at our core. At Jambulogix, we’re building more than a
              logistics network — we’re creating an ecosystem of opportunities,
              growth, and innovation. Here you'll build for scale, solve
              real-world bottlenecks, and grow in a culture that values
              ownership and innovation.
            </p>

            <ul className="text-gray-700 text-md space-y-2 list-disc pl-6 capitalize">
              cards style with flip
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
              src="/110.jpg"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-3xl w-full h-[600px] object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 sm:px-20 bg-gradient-to-b from-white to-[#F9FAFB] text-[#0A1A2F]">
        <div className="max-w-8xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Image Block */}
          <div>
            <Image
              src="/109.jpg"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-3xl w-full h-[600px] object-cover"
            />
          </div>

          {/* Text Block */}
          <div>
            <h2 className="text-4xl sm:text-4xl font-extrabold mb-6 text-[#24577F] leading-tight">
              Unity in Diversity{" "}
              <span className="text-[#FF7F06] text-6xl">
                The Jambulogix Way..
              </span>
            </h2>

            <p className="text-gray-600 text-md mb-6 leading-relaxed capitalize">
              diversity isn’t just a policy — it’s our strength. We believe that
              different perspectives spark innovation, and that inclusion fuels
              growth. Our diversity strategy — with a strong focus on empowering
              women, supporting the specially abled, and welcoming transgender
              and underrepresented communities — brings intelligence,
              creativity, and fresh ideas into every part of our business.
            </p>
            <p className="text-gray-600 text-md mb-6 leading-relaxed capitalize">
              We are committed to creating a workplace where everyone feels
              valued, respected, and empowered — regardless of gender, ability,
              race, age, culture, education, or background. Our teams thrive on
              collaboration, shared purpose, and the freedom to express unique
              viewpoints. By embedding diversity into our culture, we not only
              harness the full potential of our people — we shape the future of
              logistics with passion, purpose, and innovation. This inclusive
              mindset strengthens every organizational unit and powers our
              long-term growth.
            </p>
            <p className="text-[#24577F] text-lg mb-6 text-center font-semibold leading-relaxed capitalize">
              Join us — where differences are celebrated, voices are heard, &
              opportunities are equal for all.
            </p>
          </div>
        </div>
      </section>

      {/* Life at Jambulogix */}
      <section className="py-20 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-white">
            Life at <span className="text-[#FF7F06] text-6xl">Jambulogix</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 max-w-8xl mx-auto gap-6">
          {["l1.jpg", "l3.jpg", "l2.jpg", "l5.jpg", "l6.jpg", "l4.jpg"].map(
            (img, i) => (
              <Image
                key={i}
                src={`/${img}`}
                alt="Culture"
                width={400}
                height={300}
                className="rounded-2xl object-cover w-full h-72 border-2 border-white shadow-lg"
              />
            )
          )}
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 px-6 sm:px-20 bg-white text-[#0A1A2F]">
        <div className="max-w-6xl mx-auto text-center">
          {/* <h2 className="text-4xl sm:text-6xl font-extrabold mb-12 text-[#24577F]">
            Open Positions
          </h2> */}
          <h2 className="text-4xl sm:text-4xl font-extrabold text-[#24577F] mb-12">
            Open <span className="text-[#FF7F06] text-6xl">Positions</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 text-left">
            {openings.map((role, idx) => (
              <motion.div
                key={idx}
                className="p-6 border-2 border-[#24577F] rounded-2xl shadow-md hover:shadow-xl transition"
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

      <section className="py-20 px-6 sm:px-20 bg-[#24577F] text-white text-center">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl sm:text-4xl font-extrabold mb-6 text-white leading-tight">
            Our Culture{" "}
            <span className="text-[#FF7F06] text-6xl">& Values</span>
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Our team thrives on autonomy, accountability, and obsession with
            customer success.
          </p>

          {/* Swiper Carousel */}
          {/* <Swiper
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
                <div className="bg-white p-16 rounded-2xl shadow-md h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4 text-[#FF7F06]">{val.icon}</div>
                  <h3 className="text-2xl font-semibold text-[#24577F]">
                    {val.label}
                  </h3>
                  <p className="text-[#24577F] mt-2 text-lg">{val.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}

          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 max-w-8xl mx-auto gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-white border-2 border-[#FF7F06] p-4 rounded-2xl shadow-md capitalize h-full flex flex-col justify-center"
              >
                <div className="text-5xl mb-4 text-[#FF7F06]">{val.icon}</div>
                <h3 className="text-2xl font-semibold text-[#24577F]">
                  {val.label}
                </h3>
                <p className="text-[#24577F] mt-2 text-lg ">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-20 bg-white text-gray-700 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-4xl font-extrabold mb-6 text-[#24577F] leading-tight">
            Ready to take the{" "}
            <span className="text-[#FF7F06] text-6xl uppercase ">leap!</span>
          </h2>
          <p className="text-gray-700 mb-8 text-md">
            We’re always seeking individuals who think differently, act boldly,
            and build with purpose.
          </p>
          <button className="bg-[#FF7F06] text-white px-6 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition">
            Send Your Resume
          </button>
        </div>
      </section>
    </>
  );
}
