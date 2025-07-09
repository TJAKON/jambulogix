import React from "react";
import Image from "next/image";

export default function TrustedBy() {
  const brands = [
    "/facebook.svg",
    "/instagram.svg",
    "/Linkedin.svg",
    "/facebook.svg",
    "/instagram.svg",
    "/Linkedin.svg",
    "/facebook.svg",
    "/instagram.svg",
    "/Linkedin.svg",
  ];

  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="p-6 sm:p-16 bg-black/60 text-center overflow-hidden">
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-10 text-[#FF7F06]">
        Trusted By
      </h2>

      <div className="relative overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee gap-10">
          {repeatedBrands.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              width={80}
              height={40}
              className="inline-block object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
