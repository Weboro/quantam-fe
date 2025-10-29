"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const PrivacyPolicyPage = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Privacy Information</h1>

      <p>
        QIHE respects your privacy and handles personal information in
        accordance with Australian privacy laws. We are committed to protecting
        the personal information of our students, staff, and stakeholders.
      </p>

      <p>
        For guidance on privacy rights and information about handling personal
        data, please visit the{" "}
        <a
          href="https://www.ipc.nsw.gov.au/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          NSW Privacy Resources
        </a>
        .
      </p>
    </ContainerLayout>
  );
};

export default PrivacyPolicyPage;
