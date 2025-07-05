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

  // Repeat the array to ensure enough width for infinite scroll
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="p-8 sm:p-20 bg-black/60 text-center text-black overflow-hidden">
      <h2 className="text-5xl font-extrabold mb-12 text-[#FF7F06]">
        Trusted By
      </h2>

      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {repeatedBrands.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              width={100}
              height={40}
              className="mx-8 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
