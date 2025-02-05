import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import ApplySection from "@/components/ApplySection";
import GrowthSection from "@/components/GrowthSection";
import HeadlineSection from "@/components/HeadlineSection";
import HeroSection from "@/components/HeroSection";
import HighLightBanner from "@/components/HighlightBanner";
import LogoSection from "@/components/LogoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ApplySection />
      <LogoSection />
      <GrowthSection />
      <HeadlineSection />
      <AboutSection2 />
      <HighLightBanner />
    </>
  );
}
