// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-black/60 backdrop-blur-3xl text-white pt-12 pb-8 px-6 sm:px-16 relative text-center sm:text-left overflow-hidden">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 z-20">

//         {/* Logo & Address */}
//         <div className="flex flex-col items-center sm:items-center md:items-start">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/logo.png"
//               alt="Shadowfax Logo"
//               width={160}
//               height={40}
//               className="mb-4"
//             />
//           </Link>
//           <p className="text-sm leading-relaxed">
//             1st Floor,
//             <br />
//             Daulatabad Industrial Area,
//             <br />
//             Dwarka Expressway,
//             <br />
//             Gurugram, Haryana - 122006
//           </p>
//           <a
//             href="mailto:corporate@jambulogix.com"
//             className="block mt-4 text-sm text-yellow-400 hover:underline"
//           >
//             corporate@jambulogix.com
//           </a>
//           <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
//             <a href="#">
//               <Image
//                 src="/linkedin.svg"
//                 alt="LinkedIn"
//                 width={30}
//                 height={20}
//               />
//             </a>
//             <a href="#">
//               <Image
//                 src="/facebook.svg"
//                 alt="Facebook"
//                 width={30}
//                 height={20}
//               />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="flex flex-col items-center sm:items-center md:items-start">
//           <h3 className="font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Book a Delivery
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Support
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div className="flex flex-col items-center sm:items-center md:items-start">
//           <h3 className="font-semibold mb-3">Services</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Smart Warehousing
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Smart Distribution
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Smart Transportation
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Smart Supply Chain
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Motherhood Service
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Partners */}
//         <div className="flex flex-col items-center sm:items-center md:items-start">
//           <h3 className="font-semibold mb-3">Partners</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Delivery Partner
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Client Partner
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Franchise Partner
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Company & Legal */}
//         <div className="flex flex-col items-center sm:items-center md:items-start">
//           <h3 className="font-semibold mb-3">Company</h3>
//           <ul className="space-y-2 text-sm mb-6">
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Careers
//               </a>
//             </li>
//             {/* <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Blogs
//               </a>
//             </li> */}
//             {/* <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Innovation
//               </a>
//             </li> */}
//             {/* <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Social Impact
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Our Customers
//               </a>
//             </li> */}
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//           <h3 className="font-semibold mb-3">Legal</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-yellow-400">
//                 Terms of Service
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Apps & Image Section */}
//       <div className="mt-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto relative -z-10 md:z-10">
//         {/* App Download */}
//         <div className="flex items-center gap-8 mb-8 md:mb-0">
//           <div className="text-sm text-center md:text-left">
//             <p className="mb-2">Delivery Partner App</p>
//             <Image
//               src="/googleplay.svg"
//               alt="Google Play"
//               width={100}
//               height={30}
//             />
//           </div>
//         </div>

//         {/* Footer Rider Image */}
//         <div className=" hidden xl:block absolute -right-70 -bottom-50 w-[800px] md:w-[1000px] md:-right-205 md:-bottom-20 pointer-events-none">
//           <Image
//             src="/footer_img.png"
//             alt="Rider"
//             width={360}
//             height={250}
//               // className="-scale-x-100"
//           />
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="mt-8 text-center md:text-center text-xs text-white md:text-white/60 ">
//         © {new Date().getFullYear()} All rights reserved. Jambulogix Logistics
//         Private Limited. Jambulogix is a registered trademark of Jambulogix
//         Limited.
//       </div>
//     </footer>
//   );
// }

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-16 px-6 sm:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Brand & Contact */}
//         <div>
//           <Link href="/" className="flex items-center mb-4">
//             <Image src="/logo.png" alt="Logo" width={160} height={40} />
//           </Link>
//           <p className="text-sm mb-2">
//             1st Floor, Daulatabad Industrial Area, Dwarka Expressway, Gurugram, Haryana - 122006
//           </p>
//           <a href="mailto:corporate@jambulogix.com" className="text-yellow-400 hover:underline text-sm">
//             corporate@jambulogix.com
//           </a>
//           <div className="flex gap-4 mt-4">
//             <a href="#"><Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} /></a>
//             <a href="#"><Image src="/facebook.svg" alt="Facebook" width={30} height={30} /></a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link href="#" className="hover:text-yellow-400">Book a Delivery</Link></li>
//             <li><Link href="#" className="hover:text-yellow-400">Support</Link></li>
//             <li><Link href="#" className="hover:text-yellow-400">Contact Us</Link></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="font-semibold mb-4">Stay Updated</h3>
//           <p className="text-sm mb-4">Subscribe to get the latest news and updates directly in your inbox.</p>
//           <div className="flex gap-2">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="px-3 py-2 rounded-l-md text-black flex-1 focus:outline-none"
//             />
//             <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Jambulogix Logistics. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-16 px-6 sm:px-16">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
//         {/* Logo */}
//         <div className="flex flex-col items-center md:items-start">
//           <Image src="/logo.png" alt="Logo" width={160} height={40} className="mb-4" />
//           <p className="text-sm text-center md:text-left">
//             1st Floor, Daulatabad Industrial Area, Dwarka Expressway, Gurugram, Haryana - 122006
//           </p>
//         </div>

//         {/* Links */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
//           <div>
//             <h3 className="font-semibold mb-3">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:text-yellow-400">About Us</Link></li>
//               <li><Link href="#" className="hover:text-yellow-400">Careers</Link></li>
//               <li><Link href="#" className="hover:text-yellow-400">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-3">Services</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:text-yellow-400">Smart Warehousing</Link></li>
//               <li><Link href="#" className="hover:text-yellow-400">Smart Transportation</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-3">Partners</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:text-yellow-400">Delivery Partner</Link></li>
//               <li><Link href="#" className="hover:text-yellow-400">Client Partner</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-3">Legal</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="hover:text-yellow-400">Privacy Policy</Link></li>
//               <li><Link href="#" className="hover:text-yellow-400">Terms of Service</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 text-center text-xs text-gray-400">
//         © {new Date().getFullYear()} Jambulogix Logistics. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function LogisticsFooter() {
  return (
    <footer className="relative bg-white/90 text-black overflow-hidden">
      {/* Decorative background graphics */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer-bg-truck.png"
          alt="Truck Illustration"
          fill
          className="object-cover opacity-10"
        />
      </div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10 grid md:grid-cols-5 gap-12 relative z-10">
        {/* Logo & Address */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <Image
              src="/logo.png"
              alt="Jambulogix Logo"
              width={160}
              height={40}
            />
          </Link>
          <p className="text-sm mb-2 flex items-start gap-1">
            <MapPin size={16} /> 1st Floor, Daulatabad Industrial Area, Dwarka
            Expressway, Gurugram, Haryana - 122006
          </p>
          <a
            href="mailto:corporate@jambulogix.com"
            className="text-[#24577F] hover:underline text-sm mb-2 flex items-center gap-1"
          >
            <Mail size={16} /> corporate@jambulogix.com
          </a>
          <p className="text-sm flex items-center gap-1">
            <Phone size={16} /> +91 12345 67890
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="#">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Book a Delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
            {/* <li><Link href="#" className="hover:text-yellow-400">Tracking</Link></li> */}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {/* <li><Link href="#" className="hover:text-yellow-400">Smart Warehousing</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Smart Transportation</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Smart Supply Chain</Link></li> */}
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Sort Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Fulfilment Centre
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Dark Store
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Cross Dock
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Hub In Hub
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                QuickRack
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                First Mile
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Last Mile
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                FTL
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Surface Express
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Air Express
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Rail Parcel
              </Link>
            </li>
            {/* <li><Link href="#" className="hover:text-yellow-400">Last Mile Delivery</Link></li> */}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Partners</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Delivery Partner
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Client Partner
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Franchise Partner
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Technology Partner
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Logistics Partner
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400">
                Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-2xl mx-auto  relative z-10">
        {/* Newsletter / App Download */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">
            Subscribe to get latest updates, news & logistics tips.
          </p>
          <div className="flex w-full mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-lg text-black border border-black flex-1 focus:outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
          {/* <p className="text-sm mb-2">Download our App</p>
          <div className="flex gap-4">
            <Image
              src="/googleplay.svg"
              alt="Google Play"
              width={100}
              height={30}
            />
          </div> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="  text-center py-6 text-xs text-black">
        © {new Date().getFullYear()} Jambulogix Logistics Private Limited. All
        rights reserved.
      </div>

      {/* Optional Logistics Icon Overlay */}
      <div className="absolute -bottom-10 -right-72 w-[620px] opacity-100 pointer-events-none">
        <Image src="/Truck.png" alt="Truck Icon" width={800} height={600} />
      </div>
      <div className="absolute -bottom-10 -left-15 w-[320px] opacity-100 pointer-events-none">
        <Image src="/JLXXM.png" alt="Truck Icon" width={800} height={600} />
      </div>
    </footer>
  );
}
