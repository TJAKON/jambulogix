import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      {/* Trusted By */}
      <section className="p-8 sm:p-20 bg-white text-center">
        <h2 className="text-lg font-semibold mb-8">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/brand1.svg" alt="Brand 1" width={100} height={40} />
          <Image src="/brand2.svg" alt="Brand 2" width={100} height={40} />
          <Image src="/brand3.svg" alt="Brand 3" width={100} height={40} />
          <Image src="/brand4.svg" alt="Brand 4" width={100} height={40} />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-8 sm:p-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Ecommerce & D2C</h3>
            <p className="text-sm text-gray-600">
              Efficient delivery solutions for ecommerce brands.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Hyperlocal & Quick Commerce</h3>
            <p className="text-sm text-gray-600">
              Fast delivery within hours using our local hubs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">SMB & Personal Courier</h3>
            <p className="text-sm text-gray-600">
              Affordable courier services for small businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="p-8 sm:p-20 bg-white">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Our Key Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Express Parcel</h4>
            <p className="text-sm text-gray-600">
              Fast, reliable delivery for businesses of any size.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Reverse Parcel</h4>
            <p className="text-sm text-gray-600">
              Simplified return logistics and reverse supply chain solutions.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Quick Commerce</h4>
            <p className="text-sm text-gray-600">
              Rapid on-demand delivery for Q-commerce businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="p-8 sm:p-20 bg-gray-50">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Unmatched Competitive Edge
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded overflow-hidden shadow-lg">
            <Image src="/map.jpg" alt="Maps" width={400} height={200} />
            <p className="p-4 font-semibold">Shadowfax Maps</p>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <Image src="/shield.jpg" alt="Security" width={400} height={200} />
            <p className="p-4 font-semibold">Shadowfax Shield</p>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <Image src="/gigs.jpg" alt="Gigs" width={400} height={200} />
            <p className="p-4 font-semibold">Shadowfax Gigs</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 sm:p-20 text-center bg-white">
        <h2 className="text-2xl font-bold mb-6">
          Gain Leverage For Your Business
        </h2>
        <form className="max-w-lg mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="border p-3 rounded w-full"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Your phone"
            className="border p-3 rounded w-full"
          />
          <textarea
            placeholder="Your message"
            className="border p-3 rounded w-full h-24"
          />
          <button className="bg-yellow-500 text-white py-3 rounded">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
