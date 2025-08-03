import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="border border-muted/50 shadow rounded-xl p-3">
          <p className="w-22 aspect-square bg-brand-primary/10 rounded-full grid place-items-center">
            <i
              className={`fi fi-rr-bullseye-arrow flex text-5xl text-brand-primary`}
            />
          </p>

          <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
            Our Vision
          </Heading>
          <p className="text-muted">
            At QIHE, we aspire to transform students' lives and open doors to
            professional opportunities through the delivery of quality higher
            education. Our vision is to create an environment that fosters
            intellectual curiosity, critical thinking, and the cultivation of
            practical skills and humane values, empowering students to thrive in
            their personal and professional lives.
          </p>
        </div>

        <div className="border border-muted/50 shadow rounded-xl p-3">
          <p className="w-22 aspect-square bg-brand-primary/10 rounded-full grid place-items-center">
            <i
              className={`fi fi-rr-binoculars flex text-5xl text-brand-primary`}
            />
          </p>

          <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
            Our Mission
          </Heading>
          <p className="text-muted">
            QIHE provides an exceptional higher education experience for
            students from all walks of life. We achieve this by fostering a
            dynamic and creative learning environment where education is an
            active and lifelong journey. Our mission is to prepare students to
            make meaningful contributions to their chosen professions and to
            society.
          </p>
        </div>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
