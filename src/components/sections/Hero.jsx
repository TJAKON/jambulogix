"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse sm:flex-row items-center h-lvh justify-between gap-8 p-8 sm:p-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/83.png"
        alt="Banner"
        fill
        className="object-cover z-0 object-bottom"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Content */}
      <div className="z-20 max-w-4xl text-[#FF7F06] p-0 md:pt-40">
        <h1 className="text-3xl sm:text-7xl font-bold mb-4 leading-tight">
          Experience the Future of
          <span className=" text-white"> Logistics</span>
        </h1>
        <p className="text-white/80 mb-6 text-3xl capitalize">
          Agile by Design{" "}
          <span className="text-[#FF7F06]">Yours by Choice</span>
        </p>

        {/* Tracking Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl w-full max-w-xl">
          <h3 className="text-white text-xl font-semibold mb-3">
            Track Your Shipment
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Tracking ID ( CIN )"
              className="flex-1 px-4 py-3 rounded-xl border border-white text-sm sm:text-base outline-none text-white"
            />
            <button className="bg-[#FF7F06] text-black  font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition">
              Track
            </button>
          </div>
        </div>
      </div>

      {/* Delivery Image */}
      <Image
        src="/JLXXM.png"
        alt="Hero"
        width={460}
        height={200}
        className="absolute z-10 w-lvh md:w-[460px] h-lvh  md:h-[200px] right-0 md:right-40 -bottom-20 md:bottom-0"
      />
    </section>
  );
}

// <section className="relative flex flex-col-reverse sm:flex-row items-center h-lvh justify-between gap-8 p-8 sm:p-20 overflow-hidden">

//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="absolute top-0 left-0 w-full h-full object-cover z-0"
//     >
//       <source src="/Video-Showreel.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>

//     <Image
//       src="/test.jpeg"
//       alt="Team 1"
//       width={500}
//       height={500}
//       className="object-cover w-full h-full"
//     />

//     <div
//       className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
//       style={{ backgroundImage: "url('/banner1.png')" }}
//     ></div>

//     <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-center z-10"></div>

//     <div className="z-20 max-w-4xl text-[#FF7F06] p-0 md:pt-40">
//       <h1 className="text-3xl sm:text-7xl font-bold mb-4 leading-tight">
//         Experience the Future of
//         <span className=" text-white"> Logistics</span>
//       </h1>
//       <p className="text-white/80 mb-6 text-3xl">
//         Efficient. Reliable. <span className="text-[#FF7F06]">On Time</span>{" "}
//       </p>
//       <p className="text-white/80 mb-6 text-3xl capitalize">
//         Agile by Design{" "}
//         <span className="text-[#FF7F06]">Yours by Choice</span>{" "}
//       </p>
//     </div>

//     <Image
//       src="/delivery_boy.webp"
//       className=" absolute z-0 md:z-10 right-0 -bottom-10"
//       alt="Hero"
//       width={650}
//       height={400}
//     />
//   </section>
