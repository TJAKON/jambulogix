"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const pathname = usePathname();

  const menuGroups = [
    {
      title: "Services",
      children: [
        {
          label: "Smart Warehousing",
          link: "/pages/services/smart-warehousing-solution",
        },
        {
          label: "Distribution Solutions",
          link: "/pages/services/smart-distribution-solution",
        },
        {
          label: "Transportation Services",
          link: "/pages/services/transportation-service",
        },
        // {
        //   label: "Reverse Logistics Solutions",
        //   link: "/pages/services/supply-chain-solution",
        // },
      ],
    },
    {
      title: "Company",
      children: [
        { label: "Our Partners", link: "/pages/company/OurPartners" },
        { label: "Our Team", link: "/pages/company/OurTeam" },
        { label: "Careers", link: "/pages/company/Careers" },
      ],
    },
    {
      title: "Resources",
      children: [
        { label: "Our Blogs", link: "/pages/resources/blogs" },
        { label: "Our News", link: "/pages/resources/News" },
      ],
    },
  ];

  // Function to check if link is active
  const isActive = (href) =>
    pathname === href
      ? "text-white underline underline-offset-4 decoration-2"
      : "hover:text-[#FF7F06] text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/40 shadow p-4 sm:p-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/jlxx.png"
          alt="Jambulogix Logo"
          width={180}
          height={40}
          className="z-10"
        />
      </Link>

      {/* Desktop Nav */}
      <PopoverGroup className="hidden xl:flex gap-6  text-white text-xl font-medium items-center">
        {/* Services */}
        <Popover className="relative group">
          <PopoverButton className="flex items-center gap-1 hover:text-[#FF7F06] transition duration-200 focus:outline-none">
            Services <ChevronDownIcon className="h-5 w-5" />
          </PopoverButton>
          <PopoverPanel className="absolute top-15 left-0 mt-2 w-90 font-bold bg-black/40 backdrop-blur-md p-4 space-y-2 z-50 text-white shadow-xl">
            <Link
              href="/pages/services/smart-warehousing-solution"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Smart Warehousing Services
            </Link>
            <Link
              href="/pages/services/smart-distribution-solution"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Smart Distribution Services
            </Link>
            <Link
              href="/pages/services/transportation-service"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Smart Transportation Services
            </Link>
            {/* <Link
              href="/pages/services/supply-chain-solution"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Reverse Logistics Solutions
            </Link> */}
          </PopoverPanel>
        </Popover>

        {/* Company */}
        <Popover className="relative group">
          <PopoverButton className="flex items-center gap-1 hover:text-[#FF7F06] transition duration-200 focus:outline-none">
            Company <ChevronDownIcon className="h-5 w-5" />
          </PopoverButton>
          <PopoverPanel className="absolute top-15 left-0 mt-2 w-90 font-bold bg-black/40 backdrop-blur-md p-4 space-y-2 z-50 text-white shadow-xl">
            <Link
              href="/pages/company/OurPartners"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Our Partners
            </Link>
            <Link
              href="/pages/company/OurTeam"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Our Team
            </Link>
            <Link
              href="/pages/company/People"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Our People
            </Link>
            <Link
              href="/pages/company/Careers"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Careers
            </Link>
          </PopoverPanel>
        </Popover>
        {/* Company */}

        {/* Static Links with Active Highlight */}
        {/* <Link
          href="/pages/services/motherhood-service"
          className={`transition duration-200 font-bold text-center ${isActive(
            "/pages/services/motherhood-service"
          )}`}
        >
          Motherhood
        </Link> */}

        <Link
          href="/pages/about"
          className={`transition duration-200 ${isActive("/pages/about")}`}
        >
          About Us
        </Link>
        <Popover className="relative group">
          <PopoverButton className="flex items-center gap-1 hover:text-[#FF7F06] transition duration-200 focus:outline-none">
            Resources <ChevronDownIcon className="h-5 w-5" />
          </PopoverButton>
          <PopoverPanel className="absolute top-15 left-0 mt-2 w-90 font-bold bg-black/40 backdrop-blur-md p-4 space-y-2 z-50 text-white shadow-xl">
            <Link
              href="/pages/resources/blogs"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              Blogs
            </Link>
            {/* <Link
              href="/pages/resources/News"
              className="block hover:text-white hover:bg-[#FF7F06] border-2 bg-[#24577F] p-2 rounded-lg"
            >
              News
            </Link> */}
          </PopoverPanel>
        </Popover>
        <Link
          href="/pages/contact-us"
          className={`transition duration-200 ${isActive("/pages/contact-us")}`}
        >
          Contact Us
        </Link>
      </PopoverGroup>

      {/* CTA Button (Desktop Only) */}
      <Link href="/pages/contact-us">
        <div className="hidden xl:block ml-4 bg-[#FF7F06] text-white px-4 py-2 rounded-2xl font-bold text-md md:text-xl border-2 border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
          Get in Touch
        </div>
      </Link>

      {/* Mobile Hamburger */}
      <button onClick={() => setSidebarOpen(true)} className="xl:hidden">
        <Bars3Icon className="h-7 w-7 text-white" />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-svw h-screen bg-black/95 z-10 text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 p-6 space-y-6`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/jlxx.png"
            alt="Jambulogix Logo"
            width={180}
            height={40}
          />
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Collapsible Dropdown Menus */}
          {menuGroups.map((group) => (
            <div key={group.title}>
              <button
                onClick={() =>
                  setMobileDropdown((prev) =>
                    prev === group.title ? "" : group.title
                  )
                }
                className="flex justify-between items-center w-full text-lg font-semibold hover:text-[#FF7F06] transition"
              >
                {group.title}
                <ChevronRightIcon
                  className={`h-5 w-5 transform transition-transform ${
                    mobileDropdown === group.title ? "rotate-90" : ""
                  }`}
                />
              </button>

              {mobileDropdown === group.title && (
                <div className="ml-4 mt-4 space-y-4 text-md text-white">
                  {group.children.map((child) => (
                    <Link
                      href={child.link}
                      key={child.label}
                      className="block hover:text-[#FF7F06]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Static Links */}
          <div className="space-y-6 mt-4 text-white font-bold">
            {/* <Link
              href="/pages/services/motherhood-service"
              className="block hover:text-[#FF7F06]"
              onClick={() => setSidebarOpen(false)}
            >
              Motherhood
            </Link> */}
            <Link
              href="/pages/about"
              className="block hover:text-[#FF7F06]"
              onClick={() => setSidebarOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/pages/contact-us"
              className="block hover:text-[#FF7F06]"
              onClick={() => setSidebarOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="mt-6 w-full bg-[#FF7F06] text-white px-4 py-2 rounded-2xl font-bold border-2 border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}
