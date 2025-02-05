"use client";

// import Image from "next/image";

import { Image } from "@nextui-org/react";

export default function AboutSection2() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div
          className="flex flex-col md:flex-row md:gap-8 lg:gap-10 md:items-start"
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* Left column */}
          <div className="w-full md:w-1/2 lg:w-3/5 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h1 className="text-3xl lg:text-4xl text-gray-800 font-bold mb-8 lg:text-center">
              About Alex Cattoni & The Copy Posse
            </h1>
            <div className="mt-6">
              <p className="text-xl md:text-lg font-medium leading-relaxed lg:text-center">
                Alex is the founder of the
                <span className="text-red-500"> Copy Posse</span>, where she is
                on a mission to de-douchify the Internet, redefine modern
                marketing and build an empathy empire. Through her online
                programs, content and challenges, Alex has helped hundreds of
                thousands of copywriters and entrepreneurs from around the world
                ignite their businesses with her fun and empathetic approach to
                branding, marketing and copywriting. Since launching the Copy
                Posse in 2020, Alex has been featured on Forbes, Mindvalley, and
                Foundr. She is a 5-time speaker at Ad World and was crowned 2022
                Marketer of the Year by DigitalMarketer.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="relative mt-8 md:mt-0 md:w-1/2 lg:w-2/5">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <Image
                src="/images/image.png"
                alt="Pianist"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
