import AboutComponent4 from "@/components/AboutUsExplore";

import FaqBox from "@/components/faqbox";
import HomeKeyDates from "@/components/homekeydates";
import { faqBoxData } from "@/data/faqbox";
import HomeNewsSection from "@/components/sections/NewsSection";
import HeroSection from "@/components/sections/HeroSection";
import { quantumBanner } from "@/data/banner";
import AboutSection from "@/components/sections/AboutSection";

const HomePage = () => {
  return (
    <div className="space-y-22">
      <HeroSection
        title={quantumBanner.title}
        subtitle={quantumBanner.subtitle}
        description={quantumBanner.description}
        buttonText={quantumBanner.buttonText}
        buttonLink={quantumBanner.buttonLink}
        imageUrl={quantumBanner.imageUrl}
        textAlign="left"
      />

      <AboutSection />

      <AboutComponent4 />

      <HomeKeyDates />

      <HomeNewsSection />

      <FaqBox faqBoxData={faqBoxData} />
    </div>
  );
};

export default HomePage;
