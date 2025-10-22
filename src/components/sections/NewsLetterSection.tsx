import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Link from "next/link";
import { SITE_EMAIL, SITE_PHONE } from "@/extra/siteDetails";

const NewsLetterSection = () => (
  <ContainerLayout size="sm" className="">
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-primary to-transparent pointer-events-none" />

      <div className="relative z-10 w-full h-full px-5 py-4 text-white">
        <Heading level={4}>Not finding what you need? No worries!</Heading>

        <p className="text-gray-200 md:max-w-2xl">
          Ask us a question, call{" "}
          <span className="font-medium">{SITE_PHONE}</span>, or chat with us
          online
        </p>

        <div className="flex gap-2 md:items-center flex-col md:flex-row mt-4">
          <Link href={`mailto:${SITE_EMAIL}`}>
            <Button
              variant="primaryAlt"
              icon="fi fi-br-envelope"
              className="cursor-pointer"
              interaction={false}
            >
              <span className="font-medium">{SITE_EMAIL}</span>
            </Button>
          </Link>
          <Link href={`tel:${SITE_PHONE}`}>
            <Button icon="fi fi-br-phone-flip rotate-90" variant="secondary">
              <span className="font-medium">Contact Us</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </ContainerLayout>
);

export default NewsLetterSection;

// const HelpSection = () => (
//   <ContainerLayout size="sm" className="my-6">
//     <div className="rounded-lg p-6 bg-gray-800 text-white">
//       <Heading level={4} className="mb-3">
//         Not finding what you need? No worries!
//       </Heading>
//       <p className="text-gray-200 md:max-w-2xl">
//         Ask us a question, call{" "}
//         <span className="font-medium"> {SITE_PHONE}</span>, or chat with us
//         online.
//       </p>
//     </div>
//   </ContainerLayout>
// );
// export default HelpSection;
