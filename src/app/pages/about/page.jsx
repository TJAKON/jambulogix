"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import KeySolutions from "@/components/sections/KeySolutons";
import TestimonialCarousel from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";

export default function page() {
  return (
    <>
      <TestimonialCarousel />
      <ContactSection />
    </>
  );
}
