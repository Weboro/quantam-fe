import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const EsosRightsPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Your Rights as an International Student (ESOS Framework)
        </Heading>

        <p className="text-gray-700 mb-6">
          The ESOS Framework protects international students studying in
          Australia, ensuring high-quality education and fair treatment.
        </p>

        <div className="mb-8">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Key Rights
          </Heading>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Clear Information:</strong> Receive accurate course, fee,
              and study details before enrolment.
            </li>
            <li>
              <strong>Written Agreement:</strong> Sign a formal agreement
              outlining services, fees, and refund policies.
            </li>
            <li>
              <strong>Tuition Protection:</strong> If your provider cannot
              deliver your course, the Tuition Protection Service (TPS) helps
              you transfer or get a refund.
            </li>
            <li>
              <strong>Support Services:</strong> Access orientation,
              counselling, and academic support.
            </li>
            <li>
              <strong>Visa Compliance:</strong> Providers report your enrolment
              and progress to the Department of Home Affairs.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Oversight
          </Heading>
          <p className="text-gray-700 mb-2">
            TEQSA ensures providers meet ESOS and higher education standards,
            safeguarding your welfare and study experience.
          </p>
          <p className="text-gray-700">
            For more details, please visit the{" "}
            <a
              href="https://www.education.gov.au/esos-framework?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ESOS Framework
            </a>
            .
          </p>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default EsosRightsPage;
