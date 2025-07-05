"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-white text-center text-black">
      <div className="mb-8 max-w-sm w-full">
        <Image
          src="/404-graphic.png" // Replace with actual image path if different
          alt="404 Graphic"
          width={400}
          height={300}
          className="mx-auto"
        />
      </div>

      <h1 className="text-6xl font-extrabold text-[#FF7F06] mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Page not found.</p>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link href="/">
        <button className="bg-[#24577F] text-white md:bg-[#FF7F06] md:text-white px-4 py-2 rounded-2xl font-bold text-md md:text-xl border-2 border-white md:border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
          Back to Home
        </button>
      </Link>
    </section>
  );
}
