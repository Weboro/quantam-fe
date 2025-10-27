"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const ESOSFrameworkPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          ESOS Framework
        </Heading>

        <p className="text-gray-700 mb-4">
          The <strong>ESOS Framework</strong> protects international students
          studying in Australia, ensuring high-quality education and fair
          treatment.
        </p>

        <Heading level={2} className="text-2xl font-semibold mb-3">
          Your Rights as an International Student
        </Heading>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Clear Information:</strong> Receive accurate course, fee,
            and study details before enrolment.
          </li>
          <li>
            <strong>Written Agreement:</strong> Sign a formal agreement
            outlining services, fees, and refund policies.
          </li>
          <li>
            <strong>Tuition Protection:</strong> If your provider cannot deliver
            your course, the Tuition Protection Service (TPS) helps you transfer
            or get a refund.
          </li>
          <li>
            <strong>Support Services:</strong> Access orientation, counselling,
            and academic support.
          </li>
          <li>
            <strong>Visa Compliance:</strong> Providers report your enrolment
            and progress to the Department of Home Affairs.
          </li>
        </ul>

        <Heading level={2} className="text-2xl font-semibold mb-3">
          Oversight
        </Heading>
        <p className="text-gray-700 mb-6">
          The <strong>TEQSA</strong> ensures providers meet ESOS and higher
          education standards, safeguarding your welfare and study experience.
        </p>

        <p className="text-gray-700">
          For more details, visit the{" "}
          <a
            href="https://www.education.gov.au/esos-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="italic underline text-brand-primary"
          >
            ESOS Framework
          </a>
          .
        </p>
      </div>
    </ContainerLayout>
  );
};

export default ESOSFrameworkPage;
