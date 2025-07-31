import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Link from "next/link";

const FaqSection = () => (
  <ContainerLayout className="md:px-22">
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-primary to-transparent pointer-events-none" />

      <div className="relative z-10 w-full h-full px-3 py-5 text-white">
        <Heading level={4}>Did not find what you want?</Heading>
        <Heading level={4} className="mb-3">
          We are here to help!
        </Heading>
        <p className="text-gray-200 md:max-w-2xl">
          If you can't find the answer you're looking for below, please send us
          a question, call us on 12345678 or chat with us online.
        </p>

        <div className="flex gap-2 flex-col md:flex-row mt-4">
          <Link href="mailto:sayuj@gmail.com">
            <Button
              variant="primaryAlt"
              icon="fi fi-br-envelope"
              className="cursor-pointer"
              interaction={false}
            >
              <span className="font-bold">mail@quantum.nsw.edu.au</span>
            </Button>
          </Link>
          <Link href={"tel:+98193847489"}>
            <Button icon="fi fi-br-phone-flip rotate-90" variant="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </ContainerLayout>
);

export default FaqSection;
