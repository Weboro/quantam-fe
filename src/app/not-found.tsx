import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header />

      <div className="space-y-32">
        <ContainerLayout>
          <div className="flex items-center flex-col py-20 my-8 rounded-2xl bg-brand-primary/5">

            <Heading level={4} className="font-medium text-center">
              ProQuest-TBA
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
      <Footer />
    </>
  );
};

export default NotFound;
