import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const CopyrightPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Copyright Information
        </Heading>

        <p className="text-gray-700 mb-6">
          QIHE respects copyright laws and intellectual property rights. We are
          committed to ensuring that the work of others is used responsibly and
          in compliance with the law.
        </p>

        <p className="text-gray-700">
          For guidance on copyright and intellectual property, please visit the{" "}
          <a
            href="https://www.nsw.gov.au/nsw-government/about-website/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            NSW Copyright Resources
          </a>
          .
        </p>
      </div>
    </ContainerLayout>
  );
};

export default CopyrightPage;
