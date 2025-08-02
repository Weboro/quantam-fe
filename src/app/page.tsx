import KeyDatesSection from "@/components/sections/KeyDatesSection";
import HomeNewsSection from "@/components/sections/NewsSection";
import HeroSection from "@/components/sections/HeroSection";
import CoursesSections from "@/components/sections/CoursesSections";
import AboutUsSection from "@/components/sections/AboutUsSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import FaqSection from "@/components/sections/FaqSection";

const HomePage = () => {
  return (
    <div className="space-y-24 mb-24">
      <HeroSection
        title="Welcome to Quantum Institute of Higher Education"
        subtitle="At Quantum Institute of Higher Education (QIHE), we are dedicated to providing quality education that empowers our students to succeed in a dynamic and evolving world. "
        description="Whether you're looking to advance your knowledge in business or embark on an exciting journey into the world of information technology, QIHE offers programs designed to equip you with the skills, insights, and confidence needed to thrive in your chosen field."
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

      <NewsLetterSection />
    </div>
  );
};

export default HomePage;
