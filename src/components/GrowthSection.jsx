"use client";

import { Image } from "@nextui-org/react";
import { FaCircleChevronRight } from "react-icons/fa6";

const GrowthSection = () => {
  const growthChallenges = [
    "You keep learning new pieces but don't feel confident your skills are improving.",
    "You enjoy playing for yourself, but lose all confidence when you play for others.",
    "Physical tension and technical limitations hold you back from expressing the music within you.",
    "Memorizing music feels like something you wish for, but without clear or tangible strategies you don't trust your memory for performance.",
    "Wishing you could sit and play how you feel, but you struggle to express yourself and connect to others with the music you make.",
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-8 lg:justify-items-end">
          <div className="w-full md:w-3/5 lg:w-3/5">
            <h2 className="text-4xl font-bold text-gray-800 sm:text-3xl md:text-2xl">
              Here's the thing...
            </h2>
            <p className="mt-2 text-lg md:text-lg font-semibold text-gray-700 uppercase">
              THERE'S MORE TO YOUR GROWTH THAN LEARNING NEW PIECES OR PUTTING IN
              REPS
            </p>
            <div className="mt-6">
              <h3 className="text-[24px] md:text-xl lg:text-2xl font-bold text-gray-800">
                Have you experienced any of these at the piano?
              </h3>
              <ul className="mt-4 space-y-3">
                {growthChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <FaCircleChevronRight
                      className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-[18px] lg:text-lg md:text-sm font-semibold text-gray-700">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Apply Here
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 w-full md:w-2/5 lg:w-2/5 md:self-center">
            <div className="relative aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <Image
                src="/images/image_2.png"
                alt="Pianist playing with passion"
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection;
