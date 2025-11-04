"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Image from "next/image";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import InnerNumbers from "@/components/sections/InnerNumbers";

const subServices = [
  {
    title: "FTL",
    subtitile: "One Truck is All You Need",
    description:
      "Our FTL services are designed for businesses that need exclusive, high-volume cargo movement with maximum speed and control. Whether it’s a long-haul delivery or regional route, we provide end-to-end truckload solutions with optimized routing, real-time tracking, and minimal transit delays. With a pan-India network and an asset-light model, we offer the flexibility to scale without compromising on reliability — making us the preferred FTL partner for MSMEs, startups, and enterprise clients across industries.",
    image: "/services/12.png",
  },
  {
    title: "Surface Express",
    subtitile: "When Time Matters, We Move Faster",

    description:
      "Our Surface Express services are built for time-sensitive cargo that needs to move fast — without the cost of air freight. With a dedicated network, priority routing, and day-definite delivery options, we ensure speed, safety, and service across every surface mile. Whether you’re an MSME, a scaling D2C brand, or an enterprise with frequent dispatches, our Surface Express is designed to keep your shipments on track and your customers impressed — all while minimizing your carbon footprint.",
    image: "/services/11.png",
  },
  {
    title: "Air Express",
    subtitile: "Faster Than Ground. Smarter Than Rush - (Comming soon)",

    description:
      "When speed is non-negotiable, Jambulogix Air Express delivers. Designed for time-critical and high-value shipments, our air freight solutions ensure priority uplift, secure handling, and nationwide reach — all managed through a single tech-enabled platform. Whether you're an emerging brand, an MSME with urgent B2B dispatches, or an enterprise shipping across zones, our Air Express gets your cargo off the ground and on time, with full visibility and reduced operational stress",
     image: "/services/15.png",
  },
  {
    title: "Rail Parcel",
    subtitile: "Greener Way to Go Long Haul - (Comming soon)",

    description:
      "Reliable, cost-effective, and built for bulk — Jambulogix Rail Parcel services are perfect for moving shipments efficiently across long distances. With access to major railway routes, scheduled departures, and door-to-door handling, we combine the power of rail with our tech-enabled visibility and coordination. Ideal for MSMEs, regional distributors, and growing brands, our rail parcel solutions reduce logistics costs, support low-emission movement, and ensure dependable service across India's backbone network.",
    image: "/services/2.jpg",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "You Schedule a Pickup",
    image: "/24.jpg",
    description:
      "Use our web dashboard or API to schedule a pickup from your warehouse or store—anywhere in India.",
  },
  {
    label: "Step 2",
    title: "We Collect & Sort",
    image: "/23.jpg",
    description:
      "Our logistics team collects your parcel, sorts it at the nearest hub, and prepares it for the fastest route.",
  },
  {
    label: "Step 3",
    title: "Real-Time Delivery & Updates",
    image: "/asset.png",
    description:
      "From dispatch to doorstep, we provide real-time tracking, delivery confirmation, and customer feedback collection.",
  },
];

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

export default function Page() {
  const [activeTab, setActiveTab] = useState(subServices[0]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const stats = [
    {
      label: "Monthly FTL’s",
      value: "950",
      suffix: "+",
    },
    { label: "Unique Customer Onboarded", value: "60", suffix: " +" },
    // { label: "Support ", value: "24 * 7", suffix: "+" },
    // { label: "Real Time Tracking", value: "24 * 7", suffix: "+" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/100.jpg"
            alt="Smart Warehousing"
            fill
            className="object-cover brightness-60"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-16 max-w-7xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-8xl font-extrabold mb-5 leading-tight drop-shadow-lg"
          >
            Smarter <span className="text-[#FF7F06]"> Transportation</span>
            <br />
            Faster{" "}
            <span className="text-[#FF7F06] hover:bg-white hover:text-[#24577F] border-2 md:border-4 border-white px-3">
              Deliveries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-2xl text-white/90 max-w-3xl mb-8"
          >
            Tech-enabled routing and optimized loads help cut costs, reduce
            delays, and lower your carbon footprint —{" "}
            <span className=" uppercase">all in one move.</span>
          </motion.p>

          {/* <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-[#FF7F06] px-8 py-4 rounded-full font-semibold hover:bg-[#d96800] shadow-lg transition"
                >
                  Explore Warehousing
                </motion.button> */}
        </div>
      </section>

      {/* What is Smart Warehousing */}
      <section className="py-16 px-6 sm:px-12 md:px-20 bg-white">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div>
            <Image
              src="/3.jpg"
              alt="Warehouse"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-[320px] md:h-[600px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-[#24577F] mb-6 leading-tight">
              Tansportation{" "}
              <span className="text-[#FF7F06]">Moves With You</span>
            </h2>

            <p className="text-black text-base sm:text-md leading-relaxed mb-3">
              We don’t just move cargo — we move possibilities. At Jambulogix,
              our transportation network is designed to keep your supply chain
              fast, flexible, and future-ready. With pan-India reach,
              tech-enabled coordination, and a multimodal approach (road, rail,
              air), we manage your cargo with precision — no matter the distance
              or urgency.
            </p>
            <p className="text-black text-base sm:text-md leading-relaxed mb-3">
              Whether you're an MSME, a high-growth startup, or an enterprise
              dealing in FMCG, retail, consumer electronics, industrial
              components, agri-inputs, or engineering goods — we deliver the
              reach, reliability, and responsiveness you need. And while we move
              fast, we don’t lose sight of the future.
            </p>
            <p className="text-black text-base sm:text-md leading-relaxed mb-3">
              With our asset-light model, tech-driven systems, and
              carbon-conscious operations, we help you in — reducing costs,
              improving efficiency, and growth.
            </p>
            <p className="text-black font-bold sm:text-md leading-relaxed mb-3">
              We help you deliver better — for your business and the planet.
            </p>

            {/* <p className="text-black text-base sm:text-lg leading-relaxed mb-3">
              We operate an asset-light model, allowing flexibility,
              scalability, and seamless connectivity across all major transport
              corridors in India.
            </p>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Our transportation vertical ensures consistent performance across
              diverse industries — from retail and FMCG to engineering and
              electronics — by blending flexibility, affordability, and
              real-time visibility into every shipment.
            </p> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <InnerNumbers /> */}

      <section className="bg-[#24577F] text-white py-16 px-6 sm:px-20">
        <div className="max-w-8xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Powering Growth at Scale
            <span className="text-[#FF7F06] font-extrabold text-6xl">
              {" "}
              With Speed, Precision &
            </span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-end mb-4 max-w-3xl mx-auto"
          >
            <span className="text-[#FF7F06] font-extrabold text-6xl">
              {" "}
              Purpose
            </span>
          </motion.h2>

          {/* <h2 className="text-3xl md:text-4xl font-extrabold text-[#24577F]">
                    Safety and{" "}
                    <span className="text-[#FF7F06] text-6xl">Loss Prevention</span>
                  </h2> */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 max-w-5xl mx-auto capitalize"
          >
            we don’t just move products — we move industries forward. With a
            rapidly growing footprint and future-ready infrastructure, we’re
            redefining what warehousing efficiency looks like
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-10 max-w-6xl mx-auto text-nowrap">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="rounded-2xl text-center bg-white p-6 shadow-lg hover:scale-105 transition-transform text-nowrap"
            >
              <Counter target={stat.value + stat.suffix} />
              <p className="text-xs md:text-sm text-[#24577F] tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-2xl text-center bg-white p-6 shadow-lg hover:scale-105 transition-transform text-nowrap"
          >
            <h3 className="text-xl md:text-3xl font-extrabold mb-2 text-[#FF7F06]">
              24 x 7
            </h3>
            <p className="text-xs md:text-sm text-[#24577F] tracking-wide">
              Support & Quick Respones Team
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-2xl text-center bg-white p-6 shadow-lg hover:scale-105 transition-transform text-nowrap"
          >
            <h3 className="text-xl md:text-3xl font-extrabold mb-2 text-[#FF7F06]">
              24 x 7
            </h3>
            <p className="text-xs md:text-sm text-[#24577F] tracking-wide">
              Real Time Tracking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub Services Section */}
      <section className="bg-[#F9FAFB] py-20 px-6 sm:px-20 border-t border-gray-200">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap gap-0 md:gap-6 border-b border-[#24577F] mb-6 justify-center">
            {subServices.map((service) => (
              <button
                key={service.title}
                onClick={() => setActiveTab(service)}
                className={`text-md md:text-4xl p-3 font-semibold transition duration-100 ${
                  activeTab.title === service.title
                    ? "text-white border-[#FF7F06] bg-[#24577F] rounded-2xl shadow-2xl mb-5"
                    : "text-[#24577F] hover:text-[#FF7F06]"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          {/* Content Area */}
          <motion.div
            key={activeTab.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Image */}
            <div className="w-full md:w-2/3">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                width={600}
                height={400}
                className="rounded-2xl w-full h-[250px] sm:h-[350px] md:h-[600px] object-fit"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-[#FF7F06] mb-4 leading-tight">
                {activeTab.subtitile}
              </h3>
              <p className="text-gray-600 text-base sm:text-md leading-relaxed">
                {activeTab.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights + Benefits */}

      <section className="py-16 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-8xl mx-auto  text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12">
            Key <span className="text-[#FF7F06] text-6xl"> Highlights</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3  max-w-7xl mx-auto gap-6 md:gap-10 mb-6  text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🚚",
                text: "Pan-India Reach",
                desc: "Serve more markets, faster",
              },
              {
                icon: "📦",
                text: "Real-Time Visibility ",
                desc: "Know where your cargo is — always",
              },
              {
                icon: "🔗",
                text: "Cost-Optimized Movement",
                desc: "Lower spend, smarter routes. ",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white  p-5 md:p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:bg-black/30 hover:text-white hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="font-semibold uppercase text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.text}
                </p>
                <p className=" text-md text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-6 md:gap-10  text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔗",
                text: "Flexible Modal Mix ",
                desc: "Road, Rail, or Air — We move what fits best.",
              },
              {
                icon: "🔗",
                text: "Low Carbon Logistics ",
                desc: "Ship smarter. Grow greener.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white  p-5 md:p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:bg-black/30 hover:text-white hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="font-semibold uppercase text-lg text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.text}
                </p>
                <p className=" text-md text-[#0A1A2F] group-hover:text-white leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 px-6 sm:px-20 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold capitalize text-[#24577F] mb-3 md:mb-6">
            For Companies that{" "}
            <span className=" text-[#FF7F06]">Moves fast</span>
          </h2>
          <p className="text-black text-md md:text-lg mb-8 md:mb-16 max-w-7xl mx-auto leading-relaxed">
            Whether you're an MSME scaling up, a startup with time-critical
            dispatches, or a growing enterprise with pan-India cargo needs,
            Jambulogix Transportation is built for you. We serve businesses
            across FMCG, retail, electronics, agri-inputs, industrial goods, and
            more — providing the speed, flexibility, and reliability needed to
            move smarter and grow faster, without the cost of building logistics
            infrastructure.
          </p>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { img: "/images/sub2.jpg", label: "Startups & Growing Brands" },
              { img: "/images/sub4.jpg", label: "SMEs Across Sectors" },
              { img: "/images/sub11.jpg", label: "Regional & Local Distributors" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={320}
                  height={200}
                  className="rounded-xl h-60 bg-cover object-cover mx-auto mb-6 group-hover:scale-105 transition"
                />
                <p className="font-semibold text-lg text-gray-700">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { img: "/images/sub6.jpg", label: "Brands & D2C Companies" },
              { img: "/images/sub10.jpg", label: "Sustainable & Conscious Businesses" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={320}
                  height={200}
                  className="rounded-xl h-60 bg-cover object-cover mx-auto mb-6 group-hover:scale-105 transition"
                />
                <p className="font-semibold text-lg text-gray-700">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights + Benefits */}
      <section className="py-16 md:py-24 px-6 sm:px-20 bg-[#24577F]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-12">
            Values We <span className="text-[#FF7F06] text-6xl"> Deliver</span>
          </h2>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 md:gap-10 text-center mb-10 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Expanded Reach Pan-India Network",
                desc: "Deliver anywhere with our extensive network covering 10,000+ PIN codes across India.",
              },

              {
                icon: "🔐",
                text: "Total Transparency",
                desc: "Live Shipment Tracking Stay informed at every step with real-time cargo visibility and proactive updates.",
              },
              {
                icon: "🔐",
                text: "Smarter Operations, Optimized Routing",
                desc: "Save time and cost with intelligent route planning and modal flexibility (road, rail, air)",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-lg text-gray-700 leading-relaxed uppercase">
                  {benefit.text}
                </p>
                <p className=" text-sm text-gray-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 gap-6 md:gap-10  max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                icon: "🔐",
                text: "Green Operations, Low Carbon Footprint",
                desc: "Ship with sustainability in mind — through greener modes and consolidated movement.",
              },
              {
                icon: "🔐",
                text: "Scalable Movement Asset-Light Model",
                desc: "Grow fast without logistical baggage — pay only for what you use, when you need it.",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:border-[#FF7F06] hover:shadow-xl transition duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#FF7F06] group-hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-lg text-gray-700 leading-relaxed uppercase">
                  {benefit.text}
                </p>
                <p className=" text-sm text-gray-700 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Does It Work */}
      {/* <section className="py-16 px-6 sm:px-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 text-center">
            How does it <span className=" text-[#FF7F06]">work...?</span>
          </h2>

     
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {steps.map((step, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveStep(step)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-5 py-3 w-3/10 rounded-2xl border-4 border-white font-semibold text-sm sm:text-xl shadow-sm transition ${
                  activeStep.label === step.label
                    ? "bg-[#FF7F06] text-black border-[#FF7F06]"
                    : "bg-white text-gray-500 border-gray-300 hover:text-[#FF7F06] hover:border-[#24577F]"
                }`}
              >
                {step.label}
              </motion.button>
            ))}
          </motion.div>

       
          <motion.div
            key={activeStep.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid sm:grid-cols-2 gap-6 md:gap-12 items-center bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-4 border-white hover:border-[#FF7F06] transition"
          >
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              width={550}
              height={350}
              className="rounded-2xl w-full h-[220px] md:h-[420px] object-cover shadow-lg transform hover:scale-[1.02] transition"
            />
            <div className="text-left">
              <h4 className="text-2xl sm:text-6xl font-semibold text-[#FF7F06] mb-1 md:mb-4">
                {activeStep.title}
              </h4>
              <p className="text-black text-base sm:text-lg leading-relaxed">
                {activeStep.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <TestimonialCarousel />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
