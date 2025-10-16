"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const PrivacyPolicyPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Privacy Information
        </Heading>

        <p className="text-gray-700 mb-4">
          QIHE respects your privacy and handles personal information in
          accordance with Australian privacy laws. We are committed to
          protecting the personal information of our students, staff, and
          stakeholders.
        </p>

        <p className="text-gray-700">
          For guidance on privacy rights and information about handling personal
          data, please visit the{" "}
          <a
            href="https://www.ipc.nsw.gov.au/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            NSW Privacy Resources
          </a>
          .
        </p>
      </div>
    </ContainerLayout>
  );
};

export default PrivacyPolicyPage;
