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
          Library
        </Heading>
        <p>
          Access a wide range of academic resources, including textbooks,
          journals, and e-resources, through our on-campus library and online
          portal. The library staff is here to support your learning needs.
        </p>
        <p className="mt-2">
          <Link
            href={slugs.eLibrary}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Access the E-Library
          </Link>
        </p>
        <p>
          For more details, see our{" "}
          <Link
            href={slugs.libraryFacilitiesPolicy}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            ICT Services and Library Facilities Policy
          </Link>
          .
        </p>
      </ContainerLayout>
      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
