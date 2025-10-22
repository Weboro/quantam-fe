"use client";
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

        <p className="text-gray-700 mb-4">
          QIHE respects copyright laws and intellectual property rights. We
          acknowledge and protect the creative works of authors, artists, and
          institutions that contribute to our educational resources.
        </p>

        <p className="text-gray-700">
          For guidance on copyright, visit:{" "}
          <a
            href="https://www.copyright.nsw.gov.au/"
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
