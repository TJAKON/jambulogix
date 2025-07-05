import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 flex items-center bg-black/40 justify-between p-4 sm:p-6 shadow">
      <Link href="/" className="flex items-center">
        <Image
          src="/jlxx.png"
          className="z-60"
          alt="Jambulogix Logo"
          width={180}
          height={40}
        />
      </Link>
      <nav className="hidden sm:flex gap-6 text-2xl text-white">
        <a className="hover:text-[#FF7F06]" href="#">
          Company
        </a>
        <a className="hover:text-[#FF7F06]" href="#">
          Services
        </a>
        <a className="hover:text-[#FF7F06]" href="#">
          Resources
        </a>
        <a className="hover:text-[#FF7F06]" href="/pages/about">
          About Us
        </a>
        <a className="hover:text-[#FF7F06]" href="#">
          Contact Us
        </a>
      </nav>
      <button className="bg-[#24577F] text-white md:bg-[#FF7F06] md:text-[#24577F] px-4 py-2 rounded-2xl font-bold text-md md:text-xl border-2 border-white md:border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
        Get in Touch
      </button>
    </header>
  );
}
