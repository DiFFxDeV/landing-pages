"use client";
import { Image, Button } from "@nextui-org/react";
import Footer from "./Footer";

const AboutSection = () => {
  return (
    <section className=" bg-gray-100">
      <div className="w-full max-w-7xl mx-auto py-12 md:py-12 h-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid gap-6 lg:grid-cols-[2fr_2fr] lg:gap-12">
            <div className="relative">
              <Image
                src="/images/second_lady.png"
                alt="Professional portrait"
                className="h-full w-full max-w-[1492] rounded-lg object-contain overflow-hidden"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6 px-10">
              <div>
                <h2 className="text-center text-xl font-extrabold uppercase tracking-wider text-[#948873]">
                  ABOUT ME
                </h2>
                <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-center">
                  Hi, I want to help you retire before you&apos;re forty.
                </h3>
              </div>

              <p className="text-xl text-center leading-relaxed text-zinc-600">
                I went from not having a single dollar in my savings to running
                my own empire of digital businesses. Affiliate marketing changed
                my life. And now I&apos;m here to change yours. The affiliate
                marketing game is getting crowded as more people hear about the
                opportunity in this industry. So I&apos;ve put together a guide,
                with everything I wish I&apos;d known when I started out, to
                help people like me get a head start.
              </p>

              <div className="pt-4 flex justify-center">
                <Button className="text-lg h-12 border rounded-none font-extrabold border-[#948873] px-8 py-6 text-[#948873] bg-transparent hover:bg-[#948873] hover:text-gray-100 font-source_sans_3">
                  GET THE GUIDE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default AboutSection;
