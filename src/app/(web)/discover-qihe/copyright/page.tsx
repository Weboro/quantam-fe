"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";

const CopyrightPage = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Copyright Information</h1>

      <p>
        QIHE respects copyright laws and intellectual property rights. We
        acknowledge and protect the creative works of authors, artists, and
        institutions that contribute to our educational resources.
      </p>

      <p>
        For guidance on copyright, visit:{" "}
        <a
          href="https://www.nsw.gov.au/nsw-government/about-website/copyright"
          target="_blank"
          rel="noopener noreferrer"
        >
          NSW Copyright Resources
        </a>
        .
      </p>
    </ContainerLayout>
  );
};

export default CopyrightPage;
