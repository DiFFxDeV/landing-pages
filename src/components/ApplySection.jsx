"use client";

import { Image } from "@nextui-org/react";

const ApplySection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center justify-center "
      style={{
        backgroundImage: `url('/images/beach.jpg')`,
      }}
    >
      <div className="container mx-auto min-h-[70vh] flex items-center justify-center bg-slate-100/95">
        <div className="w-full rounded-lg p-5 flex flex-col h-full">
          {/* Logo Section */}
          <div className="w-full py-12 flex justify-center items-center">
            <Image
              src="/images/silva-method-official-logo.png"
              className="w-[300px] object-cover"
              alt="Silva Method Logo"
            />
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center gap-6 flex-grow">
            {/* Image Section */}

            <div className="max-w-[630px] mx-auto">
              <Image
                className="rounded-lg object-cover w-full"
                src="/images/image_1.png"
                alt="Person with Book"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left gap-10 md:gap-4">
              <h2 className="text-5xl md:text-4xl lg:text-7xl font-bold text-gray-800">
                Accelerate
                <span className="text-[#731f69]"> your Momentum</span>
              </h2>
              <div>
                <p className="mt-4 text-2xl md:text-2xl text-gray-800">
                  Break through limits to unlock your talent and confidence
                  using the powerful 4-part{" "}
                  <span className="text-[#731f69] font-bold">
                    Momentum Mastery
                  </span>
                </p>

                {/* CTA Section */}
                <p className="pt-4 text-2xl font-bold text-[#731f69]">
                  Apply to join the live private workshop HERE:
                </p>
              </div>

              <div className="flex mt-6">
                <button className="text-xl md:text-2xl bg-gradient-to-t from-fuchsia-800 to-purple-700 text-gray-200 py-3 px-6 rounded-lg w-96 font-semibold transition-all duration-200 transform hover:shadow-xl hover:to-fuchsia-800">
                  <a href="#ContactMe">APPLY NOW!</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
