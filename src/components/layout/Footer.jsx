import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-3xl text-white pt-12 pb-8 px-6 sm:px-16 relative text-center sm:text-left overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 z-20">

        {/* Logo & Address */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Shadowfax Logo"
              width={160}
              height={40}
              className="mb-4"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            1st Floor,
            <br />
            Daulatabad Industrial Area,
            <br />
            Dwarka Expressway,
            <br />
            Gurugram, Haryana - 122006
          </p>
          <a
            href="mailto:corporate@jambulogix.com"
            className="block mt-4 text-sm text-yellow-400 hover:underline"
          >
            corporate@jambulogix.com
          </a>
          <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
            <a href="#">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={30}
                height={20}
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Book a Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Smart Warehousing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Smart Distribution
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Smart Transportation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Smart Supply Chain
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Motherhood Service
              </a>
            </li>
          </ul>
        </div>

        {/* Partners */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <h3 className="font-semibold mb-3">Partners</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Delivery Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Client Partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Franchise Partner
              </a>
            </li>
          </ul>
        </div>

        {/* Company & Legal */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Careers
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-yellow-400">
                Blogs
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="hover:text-yellow-400">
                Innovation
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="hover:text-yellow-400">
                Social Impact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Our Customers
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Apps & Image Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto relative -z-10 md:z-10">
        {/* App Download */}
        <div className="flex items-center gap-8 mb-8 md:mb-0">
          <div className="text-sm text-center md:text-left">
            <p className="mb-2">Delivery Partner App</p>
            <Image
              src="/googleplay.svg"
              alt="Google Play"
              width={100}
              height={30}
            />
          </div>
        </div>

        {/* Footer Rider Image */}
        <div className=" hidden xl:block absolute -right-70 -bottom-50 w-[800px] md:w-[1000px] md:-right-205 md:-bottom-20 pointer-events-none">
          <Image
            src="/footer_img.png"
            alt="Rider"
            width={360}
            height={250}
              // className="-scale-x-100"
          />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center md:text-center text-xs text-white md:text-white/60 ">
        © {new Date().getFullYear()} All rights reserved. Jambulogix Technologies
        Limited.
      </div>
    </footer>
  );
}
