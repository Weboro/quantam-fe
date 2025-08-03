import Breadcrumbs from "@/components/global/Breadcrumbs";
import AgentFilterSection from "@/components/sections/course/AgentFilterSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="mt-6"></div>
      <AgentFilterSection />

      <div className="space-y-40 mt-40">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
