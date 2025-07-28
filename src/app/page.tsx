import AboutUsPage from "@/components/aboutus/page";
import AllCourses from "@/components/allcourses/page";
import Banner from "@/components/banner/page";
import FaqBox from "@/components/faqbox";
import HomeKeyDates from "@/components/homekeydates";
import HomeNewsSection from "@/components/homenewsection";
import { faqBoxData } from "@/data/faqbox";
import KeyDates from "@/feature/KeyDates";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <Banner />
      <AboutUsPage />
      <HomeKeyDates />
      {/* <KeyDates /> */}
      <HomeNewsSection />
      <div className="m-8">
        <FaqBox faqBoxData={faqBoxData} />
      </div>
      <AllCourses />
    </div>
  );
};

export default HomePage;
