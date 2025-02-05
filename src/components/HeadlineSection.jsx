"use client";

import Image from "next/image";

const HeadlineSection = () => {
  return (
    <div className="min-h-screen bg-[#2848aa] flex items-center justify-center pt-32 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-x-0 top-0 left-0 w-full flex justify-center p-5">
        <Image
          width={400}
          height={100}
          src="/images/silvaLogo.png"
          alt="logo"
          className=""
        />
      </div>
      <div className="bg-white pt-4 rounded-t-lg max-w-7xl w-full text-center min-h-[90vh] flex flex-col justify-center">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Hey, thanks for joining us at Ad world! We have special thank you gift
          for you...
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900">
          WRITE <span className="text-[#46cef1]">INSANELY</span> BETTER
        </h1>

        <h2 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          HEADLINES
        </h2>
        <p className="mt-4 text-4xl font-semibold text-gray-600">
          (IN 3 EASY STEPS)
        </p>
        <p className="mt-6 text-xl font- text-gray-600">
          Click Below To Get Instant Access To The Copy Posse's{" "}
          <span className="font-bold text-gray-700">
            Ultimate Headline Writing Toolkit
          </span>
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-[#edb535] px-8 py-3 rounded-full text-gray-800 text-lg font-semibold hover:bg-[#b18a2f]"
          >
            GET INSTANT ACCESS
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
