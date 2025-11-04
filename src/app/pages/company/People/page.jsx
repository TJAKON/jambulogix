"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronsDown, Share } from "lucide-react";

const sustainabilityItems = [
  {
    title: "Our Strategy",
    text: "We focus on long-term sustainability by integrating eco-friendly practices across all operations and supply chains.",
    link: "#",
  },
  {
    title: "Our Stories",
    text: "Explore real impact stories from communities and partners benefiting from our sustainable initiatives.",
    link: "#",
  },
  {
    title: "Climate",
    text: "Our commitment to reducing emissions and supporting clean energy solutions globally.",
    link: "#",
  },
  {
    title: "Safety",
    text: "Ensuring the safety and well-being of workers, communities, and the environment.",
    link: "#",
  },
  {
    title: "Ethics",
    text: "We uphold transparency, fairness, and responsible practices in everything we do.",
    link: "#",
  },
];

const accordionData = [
  {
    title: "Safety",
    content:
      "We prioritise the health, safety and wellbeing of our workforce and the surrounding communities of our operations. Our goal: zero harm, robust safety culture, preventive approach in every warehouse, yard and delivery route.",
  },
  {
    title: "Security",
    content:
      "We protect our people, operations and assets through strict controls, risk management, and a culture of awareness. Our logistics network in warehousing, FTL and distribution is supported by secure systems and compliance standards.",
  },
  {
    title: "Wellbeing",
    content:
      "A thriving workforce requires more than just a job — it demands respect, support, development. We foster a culture where everyone feels valued and empowered. From talent development in our warehousing and FTL operations to growth opportunities in the logistics industry — we’re committed.",
  },
  {
    title: "Ethics",
    content:
      "Diversity, inclusion and ethical conduct are central. Whether in our own workforce, our supply-chain partners or the communities we work in — respect for rights, fair opportunities and ethical behaviour guide our every action.",
  },
  {
    title: "Community Engagement",
    content:
      "Wherever JLX operates, we engage. Our efforts span education, skills training, health initiatives, clean-water access, emergency relief and more. We believe logistics can be a force for good — not just for business but for society.",
  },
  {
    title: "People Development",
    content:
      "Our business grows as our people grow. We invest continuously in training, up-skilling and career pathways. From warehouse floor to leadership, we ensure the talent of tomorrow is sourced, developed and deployed today.",
  },
];

// --- ICONS ---
// We'll use simple SVG icons as placeholders since lucide-react isn't available
// in this single-file environment.

const ChevronDown = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Share2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.5" y2="17.5" />
    <line x1="15.41" x2="8.59" y1="6.5" y2="10.5" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" x2="19" y1="12" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Plus = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" x2="12" y1="5" y2="19" />
    <line x1="5" x2="19" y1="12" y2="12" />
  </svg>
);

const Minus = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" x2="19" y1="12" y2="12" />
  </svg>
);

// --- 1. HERO SECTION ---

const Hero = () => (
  <div className="w-full bg-white pb-12  md:pb-20">
    <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
      {/* Left Text */}
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          PEOPLE AND
          <br />
          COMMUNITIES
        </h1>

        <p className="text-gray-600 mt-4 md:text-lg">
          we believe logistics isn’t just about moving goods — it’s about
          empowering people, strengthening communities, and building a
          supply-chain ecosystem that stands for reliability, transparency and
          growth. We are committed to investing in our team members, our
          partners and the local communities we serve — because when people
          thrive, our business thrives too.
        </p>
      </div>

      {/* Right Image — full half */}
      <div className="relative w-full h-[300px] md:h-screen overflow-hidden shadow-xl">
        <Image
          src="/images/b2.jpeg"
          alt="People & Community"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
);

// --- 2. OUR WORLD, OUR FUTURE ---
const OurWorld = () => (
  <div className="w-full bg-[#24577F] py-16 md:py-24">
    <div className="container px-4 max-w-6xl mx-auto text-center">
      <h5 className="text-lg uppercase font-bold text-white tracking-wider">
        OUR mission
      </h5>
      <h2 className="text-6xl uppercase font-bold text-white tracking-wider">
        Investing in People & Communities
      </h2>
      <p className="max-w-3xl mx-auto text-xl md:text-lg text-white/80 mt-4 leading-relaxed">
        Our mission is simple: to honour the human element in logistics. From
        our sort-centres and FTL (Full Truck Load) operations, to distribution
        hubs and last-mile delivery, every step is underpinned by the commitment
        to people-first practice. We invest in training, development and
        leadership. We partner with communities to create lasting value. We
        believe logistics done right means communities uplifted.
      </p>
    </div>
  </div>
);

const SupportingPeople = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* LEFT — Title */}
        <div>
          <p className="text-xs font-semibold text-gray-800 tracking-widest mb-4">
            OUR STRATEGY
          </p>

          <div className="flex flex-col space-y-0 leading-none">
            <span className="font-extrabold text-6xl md:text-7xl px-2 py-1">
              SUPPORTING
            </span>
            <span className="font-extrabold text-6xl md:text-7xl px-2 py-1">
              PEOPLE
            </span>
          </div>
        </div>

        {/* RIGHT — Accordion */}
        <div className="space-y-8">
          {accordionData.map((item, idx) => (
            <div key={idx} className="border-b border-gray-300 pb-4">
              <button
                className="w-full flex justify-between items-center text-xl font-semibold text-black"
                onClick={() => toggleAccordion(idx)}
              >
                {item.title}
                <ChevronsDown
                  className={`transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GenderEquality = () => (
  <div className="container bg-[#24577F]   px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-8 items-center">
      <div className="flex flex-col rounded-lg overflow-hidden group">
        <img
          src="/images/sub7.jpg"
          alt="Community Support"
          className="w-full h-[600px] object-cover"
        />
      </div>
      {/* Card 1 */}
      <div className="flex flex-col rounded-lg overflow-hidden group">
        <div className="pt-6">
          <h3 className="text-6xl uppercase font-bold text-white  transition-colors">
            GENDER EQUALITY
          </h3>
          <p className="text-white/80 mt-2 capitalize line-clamp-3">
            We recognise that logistics is historically male-dominated — we’re
            changing that. Through targeted programmes, partnerships and
            pathways, JLX is opening doors for women in warehousing, FTL,
            distribution and leadership. We support gender equality in
            operations and community outreach to build a more inclusive supply
            chain ecosystem.
          </p>
        </div>
      </div>

      {/* Card 2 */}
    </div>
  </div>
);

// --- 4. CONTENT GRID 1 ---

const Impact = () => (
  <div className="container max-w-7xl mx-auto  px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Card 1 */}
      <div className="flex flex-col rounded-lg overflow-hidden group">
        <div className="pt-6">
          <h3 className="text-6xl uppercase font-bold text-gray-900  transition-colors">
            Jambulogix Impact
          </h3>
          <p className="text-gray-600 capitalize mt-2 line-clamp-3">
            our logistics operations and community engagements go hand-in-hand.
            At our warehouses, FTL routes and distribution networks, we measure
            success not just by shipments but by lives improved. We partner with
            NGOs, leverage talent development, support education, promote clean
            resources and respond to emergencies. Together, we are building
            resilient logistics communities — ready for tomorrow.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col rounded-lg overflow-hidden group">
        <img
        src="/images/v1.jpeg"
          alt="Community Support"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  </div>
);

// const Impact = () => (
//   <div className="container mx-auto px-4 py-8">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//       {/* Card 1 */}
//       <div className="flex flex-col rounded-lg overflow-hidden group">
//         <img
//           src="https://placehold.co/600x400/e2e8f0/4a5568?text=Gender+Equality"
//           alt="Gender Equality"
//           className="w-full h-64 object-cover"
//         />
//         <div className="pt-6">
//           <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//             GENDER EQUALITY
//           </h3>
//           <p className="text-gray-600 mt-2 line-clamp-3">
//             DP World is committed to increasing female representation across all
//             levels of the business.
//           </p>
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div className="flex flex-col">

//         <img
//           src="https://placehold.co/600x400/e2e8f0/4a5568?text=Community+Support"
//           alt="Community Support"
//           className="w-full h-64 object-cover rounded-lg"
//         />
//       </div>

//     </div>
//   </div>
// );

// --- 5. OUR IMPACT ---
const ImpactCard = ({ img, title, text }) => (
  <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
    <div className="relative w-full h-52">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>

    <div className="p-4">
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
    </div>
  </div>
);

const OurImpact = () => (
  <div className="w-full  bg-gray-100 py-16 md:py-24 mt-12">
    <div className="container max-w-7xl mx-auto px-4">
      {/* Heading + Nav */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-7xl max-w-7xl font-bold text-gray-900">
          OUR IMPACT
        </h2>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            id="prevImpact"
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50"
          >
            &larr;
          </button>
          <button
            id="nextImpact"
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50"
          >
            &rarr;
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: "#prevImpact",
          nextEl: "#nextImpact",
        }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <ImpactCard
            img="/images/education.jpg"
            title="EDUCATION"
            text="Our global education programme has reached over 1 million students..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImpactCard
            img="/images/health.jpg"
            title="HEALTH"
            text="Supporting community health initiatives and providing medical supplies."
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImpactCard
            img="/images/water.jpg"
            title="WATER"
            text="Providing access to clean and safe drinking water for communities..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <ImpactCard
            img="/images/social.jpg"
            title="SOCIAL"
            text="Engaging in social projects to uplift and empower local populations."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);

// --- 6. THOUGHT LEADERSHIP ---
const ThoughtLeadershipCard = ({ img, title, text }) => (
  <div className="bg-white rounded-lg overflow-hidden group">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{text}</p>
    </div>
  </div>
);

const ThoughtLeadership = () => (
  <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">
      THOUGHT LEADERSHIP
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ThoughtLeadershipCard
        img="https://placehold.co/400x300/e2e8f0/4a5568?text=Leadership+1"
        title="The Future of Work in Logistics"
        text="Exploring the evolving landscape of skills and talent in the supply chain industry."
      />
      <ThoughtLeadershipCard
        img="https://placehold.co/400x300/e2e8f0/4a5568?text=Leadership+2"
        title="Community Investment as a Business Imperative"
        text="Why investing in local communities is no longer optional for global businesses."
      />
      <ThoughtLeadershipCard
        img="https://placehold.co/400x300/e2e8f0/4a5568?text=Leadership+3"
        title="Empowering Women in Maritime"
        text="Breaking barriers and fostering inclusion for women in a traditionally male-dominated field."
      />
    </div>
  </div>
);

// --- 7. PARTNERSHIPS ---
const PartnershipCard = ({ img, title, text }) => (
  <div className="flex flex-col md:flex-col items-start md:items-center p-6 bg-gray-50 rounded-lg">
    <img
      src={img}
      alt={title}
      className="w-full h-full object-contain flex-shrink-0"
    />
    <div className="mt-4 md:mt-0 md:ml-6">
      <h3 className="font-bold text-lg text-black">{title}</h3>
      <p className="text-white/80 text-sm mt-1">{text}</p>
    </div>
  </div>
);

const Partnerships = () => (
  <div className="container bg-[#24577F]  px-4 pb-16 md:pb-24">
    <div className="  mx-auto max-w-7xl  px-4 pb-16 md:py-24">
      <h2 className="text-7xl max-w-2xl  font-bold text-white mb-8">
        OUR PEOPLE AND COMMUNITY PARTNERSHIPS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PartnershipCard
          img="https://placehold.co/200x100/e2e8f0/4a5568?text=Partner+Logo+1"
          title="Dubai Cares"
          text="Partnering to enhance access to quality education for children in developing countries."
        />
        <PartnershipCard
          img="https://placehold.co/200x100/e2e8f0/4a5568?text=Partner+Logo+2"
          title="Earthshot Prize"
          text="Supporting innovative solutions to the world's greatest environmental challenges."
        />
      </div>
    </div>
  </div>
);

// --- 8. SUSTAINABILITY PAGES ---
const SustainabilityPages = () => (
  <div className="w-full  bg-gray-100 py-16 md:py-24">
    <div className="container max-w-7xl mx-auto px-4">
      <h2 className="text-7xl max-w-5xl font-bold text-gray-900 mb-8 text-center md:text-left">
        SUSTAINABILITY POLICIES
      </h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
      >
        {sustainabilityItems.map((item) => (
          <SwiperSlide key={item.title}>
            <a
              href={item.link}
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow h-full"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-gray-900">
                  {item.title}
                </h3>
                <Share className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

// --- 9. A BETTER FUTURE ---
const FutureCard = ({ img, title }) => (
  <div className="relative rounded-lg overflow-hidden group h-80">
    <Image
      src={img}
      alt={title}
      width={500}
      height={500}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/40 bg-opacity-40"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-white text-2xl font-bold">{title}</h3>
      {/* <div className="flex items-center text-white font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <ArrowRight className="w-5 h-5 ml-1" />
      </div> */}
    </div>
    <a
      href="#"
      className="absolute inset-0"
      aria-label={`Learn more about ${title}`}
    ></a>
  </div>
);

const BetterFuture = () => (
  <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-6xl max-w-7xl font-bold text-gray-900">
        A BETTER FUTURE
      </h2>
      {/* <a
        href="#"
        className="flex items-center font-medium text-blue-600 hover:underline"
      >
        View all <ArrowRight className="w-5 h-5 ml-1" />
      </a> */}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FutureCard img="/images/b2.jpg" title="CLIMATE" />
      <FutureCard img="/images/b1.jpg" title="SAFETY" />
      <FutureCard img="/images/b3.jpg" title="ETHICS" />
    </div>
  </div>
);

// --- 10. FAQs ---
const FaqItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-medium text-gray-900">{q}</h3>
        {isOpen ? (
          <Minus className="w-6 h-6 text-gray-600" />
        ) : (
          <Plus className="w-6 h-6 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => (
  <div className="w-full bg-gray-50 py-16 md:py-24">
    <div className="container max-w-7xl mx-auto px-4 ">
      <h2 className="text-6xl  max-w-7xl mx-auto font-bold text-gray-900 mb-8">
        PEOPLE AND COMMUNITIES FAQS
      </h2>
      <div className="space-y-4">
        <FaqItem
          q="What does “People & Communities” mean at Jambulogix?"
          a="At Jambulogix, “People & Communities” reflects our belief that logistics success depends on people — our employees, partners, and the local communities we serve. We focus on empowering individuals through training, inclusion, and safety, while creating a positive impact in every region where we operate."
        />
        <FaqItem
          q="How does Jambulogix support community development?"
          a="We engage with local communities through initiatives that promote education, skill development, health awareness, and employment opportunities. JLX’s logistics operations — from warehouses to distribution hubs — are designed to generate economic growth and uplift surrounding communities."
        />
        <FaqItem
          q="What initiatives does Jambulogix take for employee wellbeing?"
          a="JLX ensures a safe, inclusive, and growth-oriented workplace. We emphasize regular training, fair pay, mental and physical wellness programs, and equal opportunities for all employees. Our “People-First Logistics” culture encourages teamwork, safety, and continuous learning."
        />
        <FaqItem
          q="How does Jambulogix promote diversity and gender inclusion?"
          a="We actively encourage women in logistics and promote diversity across roles — from warehouse operations to leadership. JLX is committed to breaking industry stereotypes by fostering an environment of equality, respect, and empowerment for everyone."
        />
        <FaqItem
          q="How does Jambulogix ensure safety and compliance in its logistics operations?"
          a="Safety is non-negotiable at JLX. We implement industry-standard safety practices across warehouses, FTL operations, and distribution centers. Regular audits, training, and preventive measures ensure compliance and a “zero-incident” culture."
        />
        <FaqItem
          q="How does Jambulogix contribute to sustainability and social responsibility?"
          a="Our community initiatives extend beyond business — focusing on sustainable logistics practices, efficient resource utilization, and eco-friendly operations. We also participate in social programs that reduce carbon footprint and support green warehousing."
        />
        <FaqItem
          q="What opportunities does Jambulogix offer for career growth?"
          a="JLX provides structured training, mentorship, and leadership programs to help team members grow professionally. From warehouse operations to management roles, employees are encouraged to develop skills that align with India’s evolving logistics landscape."
        />
        <FaqItem
          q="How can businesses collaborate with Jambulogix on community initiatives?"
          a="We welcome partnerships with organizations, NGOs, and educational institutions to co-create impactful community programs. Businesses can reach out to our CSR or People Development team to explore collaboration opportunities that benefit both logistics and society."
        />
        <FaqItem
          q="How is Jambulogix different from other logistics companies in India?"
          a="Unlike traditional logistics firms, JLX combines operational excellence with a people-centric approach. We don’t just move products — we empower people, build trust, and strengthen communities through technology-driven, sustainable logistics solutions."
        />
        <FaqItem
          q="How can someone join the Jambulogix team?"
          a="Interested candidates can visit our Careers page or follow us on LinkedIn (@Jambulogix Private Limited) to stay updated on job openings. We offer opportunities in warehousing, distribution, and full-truckload (FTL) logistics operations across India."
        />
      </div>
    </div>
  </div>
);

// --- 11. HEADER (Simplified) ---
const Header = () => (
  <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow-sm z-50">
    <div className="container mx-auto px-4 h-full flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-700">
        <img
          src="https://placehold.co/150x40/003a91/ffffff?text=DP+WORLD"
          alt="DP World Logo"
          className="h-10"
        />
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Solutions
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Sustainability
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Investors
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Careers
        </a>
      </nav>
      <button className="md:hidden p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </header>
);

// --- 12. FOOTER (Simplified) ---
const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-white mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-3">Sustainability</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Our Strategy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                People
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Climate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Safety
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-3">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-3">Connect</h5>
          {/* Social icons placeholder */}
          <div className="flex space-x-4 mt-2">
            <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
              f
            </span>
            <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
              in
            </span>
            <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
              X
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} DP World. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---
export default function Page() {
  return (
    <div className="font-sans bg-white">
      <main>
        <Hero />
        <OurWorld />
        <SupportingPeople />
        <GenderEquality />
        <Impact />
        {/* <ContentGrid1 /> */}
        {/* <OurImpact /> */}
        {/* <ThoughtLeadership /> */}
        {/* <Partnerships /> */}
        {/* <SustainabilityPages /> */}
        <BetterFuture />
        <FAQs />
      </main>
    </div>
  );
}
