import Breadcrumbs from "@/components/global/Breadcrumbs";
import KeyDatesSection from "@/components/sections/KeyDatesSection";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="mt-6"></div>
      <KeyDatesSection showAll={true} />
    </>
  );
};

export default page;
