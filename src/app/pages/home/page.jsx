import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="font-sans overflow-hidden">
        {/* <section
          className="flex flex-col-reverse sm:flex-row items-center h-lvh justify-between gap-8 p-8 sm:p-20 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/Video-Showreel.mp4')" }}
        >
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-black">
              Experience the Future of Logistics
            </h1>
            <p className="text-black/80 mb-6">Efficient. Reliable. On Time.</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Track Shipment"
                className="p-3 rounded-l border border-gray-300 w-full max-w-xs"
              />
              <button className="bg-yellow-500 px-4 text-white rounded-r">
                Track
              </button>
            </div>
          </div>
          <Image
            src="/delivery_boy.webp"
            className=" absolute right-30 bottom-0"
            alt="Hero"
            width={700}
            height={400}
          />
        </section> */}

        <section className="relative flex flex-col-reverse sm:flex-row items-center h-lvh justify-between gap-8 p-8 sm:p-20 overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/Video-Showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Image Overlay on top of video */}
          {/* <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
    style={{ backgroundImage: "url('/banner1.png')" }}
  ></div> */}
          {/* Image Overlay on top of video */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-center z-10"></div>

          {/* Content on top of both */}
          <div className="z-20 max-w-4xl text-[#FF7F06] p-0 md:pt-40">
            <h1 className="text-3xl sm:text-7xl font-bold mb-4 leading-tight">
              Experience the Future of
              <span className=" text-white"> Logistics</span>
            </h1>
            <p className="text-white/80 mb-6 text-3xl">
              Efficient. Reliable.{" "}
              <span className="text-[#FF7F06]">On Time</span>{" "}
            </p>
          </div>

          <Image
            src="/delivery_boy.webp"
            className=" absolute z-0 md:z-10 right-0 -bottom-10"
            alt="Hero"
            width={650}
            height={400}
          />
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 sm:p-20 text-center">
          <div>
            <p className="text-2xl md:text-5xl font-bold">1 Billion+</p>
            <p className="text-sm md:text-xl text-white/60">
              Parcels Delivered
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl font-bold">2.5 Million+</p>
            <p className="text-sm md:text-xl text-white/60">
              Sq. Ft. of Sort Centres
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl font-bold">14,300+</p>
            <p className="text-sm md:text-xl text-white/60">Pin Codes</p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl font-bold">2,500+</p>
            <p className="text-sm md:text-xl text-white/60">Truck Fleet</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
