"use client"
import { Image } from "@nextui-org/react";

const LogoSection = () => {
  const images = [
    "/images/forbes.1318213d953b12eb4801.png",
    "/images/nytimes.465f3a074f50cb8762de.png",
    "/images/usatoday.4b405a262590618c571c.png",
    "/images/washingtonpost.a00c687b07cb31968649.png",
  ];
  return (
    <div className="w-full bg-slate-200 py-8 px-4 mb-5 md:mb-0">
      <div className="flex items-center justify-center md:gap-3 flex-wrap">
        <h3
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-bold 
              text-gray-800 
              leading-tight my-2"
        >
          Silva Method got featured on
        </h3>
      </div>
      <div className="max-w-6xl mx-auto mt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {images.map((logo, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <Image
                src={logo}
                alt={`Featured publication ${idx + 1}`}
                className="w-32 md:w-40 opacity-30 grayscale hover:opacity-50 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
