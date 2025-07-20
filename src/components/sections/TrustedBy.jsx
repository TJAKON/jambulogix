import React from "react";
import Image from "next/image";

export default function TrustedBy() {
  const brands = [

    "/ClientLogo/1.png",
    "/ClientLogo/2.png",  
    "/ClientLogo/3.png",
    "/ClientLogo/4.png",
    "/ClientLogo/5.png",
    "/ClientLogo/6.png",
    "/ClientLogo/7.png",
    "/ClientLogo/8.png",
    "/ClientLogo/9.png",
    "/ClientLogo/10.png",
    "/ClientLogo/11.png",
    "/ClientLogo/12.png",
    "/ClientLogo/13.png",
    "/ClientLogo/14.png",
    "/ClientLogo/15.png",
    "/ClientLogo/16.png",
    "/ClientLogo/17.png",
    "/ClientLogo/18.png",
    "/ClientLogo/19.png",
    "/ClientLogo/20.png",
    "/ClientLogo/21.png",
    "/ClientLogo/22.png",
    "/ClientLogo/23.png",
    "/ClientLogo/24.png",
    "/ClientLogo/25.png", 
    "/ClientLogo/26.png",
    "/ClientLogo/27.png",
    "/ClientLogo/1.png",
    "/ClientLogo/2.png",  
    "/ClientLogo/3.png",
    "/ClientLogo/4.png",
    "/ClientLogo/5.png",
    "/ClientLogo/6.png",
    "/ClientLogo/7.png",
    "/ClientLogo/8.png",
    "/ClientLogo/9.png",
    "/ClientLogo/10.png",
    "/ClientLogo/11.png",
    "/ClientLogo/12.png",
    "/ClientLogo/13.png",
    "/ClientLogo/14.png",
    "/ClientLogo/15.png",
    "/ClientLogo/16.png",
    "/ClientLogo/17.png",
    "/ClientLogo/18.png",
    "/ClientLogo/19.png",
    "/ClientLogo/20.png",
    "/ClientLogo/21.png",
    "/ClientLogo/22.png",
    "/ClientLogo/23.png",
    "/ClientLogo/24.png",
    "/ClientLogo/25.png", 
    "/ClientLogo/26.png",
    "/ClientLogo/27.png",
    "/ClientLogo/1.png",
    "/ClientLogo/2.png",  
    "/ClientLogo/3.png",
    "/ClientLogo/4.png",
    "/ClientLogo/5.png",
    "/ClientLogo/6.png",
    "/ClientLogo/7.png",
    "/ClientLogo/8.png",
    "/ClientLogo/9.png",
    "/ClientLogo/10.png",
    "/ClientLogo/11.png",
    "/ClientLogo/12.png",
    "/ClientLogo/13.png",
    "/ClientLogo/14.png",
    "/ClientLogo/15.png",
    "/ClientLogo/16.png",
    "/ClientLogo/17.png",
    "/ClientLogo/18.png",
    "/ClientLogo/19.png",
    "/ClientLogo/20.png",
    "/ClientLogo/21.png",
    "/ClientLogo/22.png",
    "/ClientLogo/23.png",
    "/ClientLogo/24.png",
    "/ClientLogo/25.png", 
    "/ClientLogo/26.png",
    "/ClientLogo/27.png",
  ];

  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="py-6 sm:py-12 bg-white/80 text-center overflow-hidden">
      <h2 className="text-4xl sm:text-5xl font-bold md:font-extrabold mb-1 md:mb-10 text-[#FF7F06]">
        Trusted By
      </h2>

      <div className="relative overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee gap-10">
          {repeatedBrands.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              width={120}
              height={40}
              className=" w-48 h-48 inline-block object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
