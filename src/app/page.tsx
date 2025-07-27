import AboutUsPage from "@/components/aboutus/page";
import Banner from "@/components/banner/page";
import FaqBox from "@/components/faqbox";
import HomeKeyDates from "@/components/homekeydates";
import HomeNewsSection from "@/components/homenewsection";
import { faqBoxData } from "@/data/faqbox";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <AboutUsPage />
      <HomeKeyDates />
      <HomeNewsSection />
      <div className="m-8">
        <FaqBox faqBoxData={faqBoxData} />
      </div>
    </div>
  );
};

export default HomePage;
