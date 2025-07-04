import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-8 bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
        <Image
          // className="dark:invert"
          src="/logo.png" // Replace with your actual logo: e.g., "/jambulogix-logo.svg"
          alt="Jambulogix Logo"
          width={300}
          height={40}
          priority
        />

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center uppercase">
          Jambulogix
        </h1>

        <p className="text-base sm:text-lg text-center max-w-md text-muted-foreground">
          An innovative logistics platform — launching soon.
        </p>

        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.15] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-5 w-full sm:w-auto md:w-[200px]"
          href="mailto:info@jambulogix.com"
        >
          Contact Us
        </a>

        <button className="bg-[#24577F] text-white md:bg-[#FF7F06] md:text-[#24577F] px-4 py-2 rounded-full font-bold text-md md:text-xl border-2 border-white md:border-[#24577F] hover:border-white hover:bg-[#24577F] hover:text-white transition-colors duration-300">
          <a href="/pages/home">Get in Touch</a>
        </button>

        <footer className="mt-16 text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Jambulogix. All rights reserved.
        </footer>
      </div>
    </>
  );
}
