import KeyDatesSection from "@/components/sections/KeyDatesSection";
import HomeNewsSection from "@/components/sections/NewsSection";
import HeroSection from "@/components/sections/HeroSection";
import CoursesSections from "@/components/sections/CoursesSections";
import AboutUsSection from "@/components/sections/AboutUsSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import FaqSection from "@/components/sections/FaqSection";
import Heading from "@/components/ui/Heading";
import TypewriterEffect from "@/components/TypewriterEffect";
import { slugs } from "@/extra/slugs";

const HomePage = () => {
  return (
    <div className="space-y-28 mb-28">
      <HeroSection
        title={
          <Heading level={1} className="text-background lg:max-w-3xl mb-4">
            Empowering You to Thrive
            <br />
            in a{" "}
            <TypewriterEffect
              strings={["Dynamic", "Digital", "Global", "Evolving"]}
            />{" "}
            World!
          </Heading>
        }
        buttonText="Get Started"
        buttonLink={`${slugs.getStarted}`}
        imageUrl="/banner.jpg"
        textAlign="left"
      />

      <CoursesSections />

      <AboutUsSection />

      <KeyDatesSection level={2} />

      <HomeNewsSection />

      <FaqSection />

      <NewsLetterSection />
    </div>
  );
};

export default HomePage;
