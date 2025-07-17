import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import InstantQuote from "@/components/sections/InstantQuote";
import KeySolutons from "@/components/sections/KeySolutons";
import Key_Solutons from "@/components/sections/KeySolutons";
import Numbers from "@/components/sections/Numbers";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TrustedBy from "@/components/sections/TrustedBy";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <Header /> */}
      <Hero />
      <AboutSection />
      <Numbers />
      <ServicesSection />
      <TrustedBy />
      <KeySolutons />
      <InstantQuote />
      <CompetitiveEdge />
      <TestimonialSection />
      <ContactSection />

      {/* <Footer /> */}
    </>
  );
}
