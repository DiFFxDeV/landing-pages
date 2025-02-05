"use client";
import { Image, Button, Input } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center "
      style={{
        backgroundImage: `url('/images/ladybj.png')`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-20">
          <div className="space-y-8 ">
            <div>
              <p className="text-lg font-source_sans_3 font-bold uppercase tracking-wider text-[#948873]">
                FREE GUIDE TO AFFILIATE MARKETING
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl lg:text-6xl">
                Start your journey to financial freedom
              </h1>
            </div>

            <p className="max-w-2xl font-source_sans_3 text-xl font-extrabold  text-gray-300">
              Claim your free guide to affiliate marketing to learn how you can
              start generating passive income in just a few hours. Here&apos;s
              what you&apos;ll find inside:
            </p>

            <ul className="space-y-4">
              {[
                "Get a beginner's introduction to affiliate marketing",
                "Learn how the experts build multiple streams of income",
                "How to set up your new business to run itself",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xl font-source_sans_3 font-extrabold gap-3 text-gray-300  "
                >
                  <svg
                    className="h-6 w-6 flex-none text-zinc-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="cursor-default h-full w-full font-source_sans_3 text-lg max-w-sm rounded-sm bg-white text-gray-700"
              />
              <Button className="h-14 w-full max-w-sm font-source_sans_3 text-lg font-bold rounded-sm bg-[#948873] text-white hover:bg-zinc-600">
                SEND ME THE GUIDE!
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-center">
            <div className=" w-full max-w-xl mx-auto h-auto">
              <div className="flex justify-center pt-10">
                <img
                  src="/images/small_image.png"
                  alt="Affiliate Marketing Guide Preview"
                  className="h-full max-w-[300] rounded-lg"
                />
              </div>
              <blockquote className="mt-8 italic text-lg text-zinc-100">
                "In just two months, I was able to quit my job. I now only work
                an hour a week and make three times my old salary. Thank you!"
                <footer className="mt-2 not-italic text-lg font-bold font-source_sans_3 text-[#948873]">
                  — BEN
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
