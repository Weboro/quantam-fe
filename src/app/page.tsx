import KeyDatesSection from "@/components/sections/KeyDatesSection";
import HomeNewsSection from "@/components/sections/NewsSection";
import HeroSection from "@/components/sections/HeroSection";
import CoursesSections from "@/components/sections/CoursesSections";
import AboutUsSection from "@/components/sections/AboutUsSection";
import FaqSection from "@/components/sections/FaqSection";

const HomePage = () => {
  return (
    <div className="space-y-28 mb-24">
      <HeroSection
        title="Welcome to Quantum Institute of Higher Education"
        subtitle=""
        description="At Quantum Institute of Higher Education (QIHE), we are dedicated to providing quality education that empowers our students to succeed in a dynamic and evolving world."
        buttonText="Get Started"
        buttonLink="/get-started"
        imageUrl="/banner.jpg"
        textAlign="left"
      />

      <CoursesSections />

      <AboutUsSection />

      <KeyDatesSection />

      <HomeNewsSection />

      <FaqSection />
    </div>
  );
};

export default HomePage;
