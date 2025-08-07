import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="space-y-32">
      <ContainerLayout>
        <div className="flex items-center flex-col py-20 my-8 rounded-2xl bg-brand-primary/5">
          <p className="w-20 aspect-square bg-brand-primary/25 rounded-full grid place-items-center mb-4">
            <i className="fi fi-rr-tools text-brand-primary flex text-5xl" />
          </p>

          <Heading level={4} className="font-medium text-center">
            we are building something great here!
            <br />
            This page is under construction.
          </Heading>

          <Link href={"/"} className="block mt-4">
            <Button variant="primaryAlt" className="font-semibold">
              Go Home
            </Button>
          </Link>
        </div>
      </ContainerLayout>

      <FaqSection />

      <NewsLetterSection />
    </div>
  );
};

export default UnderConstruction;
