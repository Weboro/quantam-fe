import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { slugs } from "@/extra/slugs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="text-muted mt-6">
        <Heading className="text-brand-primary-black mb-2" level={2}>
          Forms
        </Heading>
        <p>Access important student forms directly below:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">TODO: List Forms</ul>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
