"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";

const ESOSFrameworkPage = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <div>
        <h1>ESOS Framework</h1>

        <p>
          The <strong>ESOS Framework</strong> protects international students
          studying in Australia, ensuring high-quality education and fair
          treatment.
        </p>

        <h2>Your Rights as an International Student</h2>

        <ul>
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

        <h2>Oversight</h2>
        <p>
          The <strong>TEQSA</strong> ensures providers meet ESOS and higher
          education standards, safeguarding your welfare and study experience.
        </p>

        <p>
          For more details, visit the{" "}
          <a
            href="https://www.education.gov.au/esos-framework"
            target="_blank"
            rel="noopener noreferrer"
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
