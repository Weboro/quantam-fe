import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { slugs } from "@/extra/slugs";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <ContainerLayout className="text-muted mt-6">
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          Admissions
        </Heading>

        <section className="mt-4">
          <Heading className="text-gray-800 mt-6 mb-2" level={3}>
            Step 1: Admission Eligibility
          </Heading>
          <p>
            Check your eligibility through Quantum’s{" "}
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href={`/${slugs.futureStudents}/admission-policy`}
            >
              Admission Requirements
            </Link>{" "}
            for undergraduate courses.
          </p>
        </section>

        <section className="mt-4">
          <Heading className="text-gray-800 mt-6 mb-2" level={3}>
            Step 2: Admission Application Form
          </Heading>
          <p>
            To allow ample time to arrange your respective Australian Visa, we
            encourage you to apply at the earliest. You can find the{" "}
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href={slugs.onlineApplication}
            >
              Quantum’s Online Application Form
            </Link>{" "}
            or apply through an education agent. Please ensure your application
            is complete, as missing information may delay processing.
          </p>
        </section>

        <section className="mt-4">
          <Heading className="text-gray-800 mt-6 mb-2" level={3}>
            Step 3: Supplementary Documents
          </Heading>
          <p>
            The below supporting documents must be certified by an accredited
            body:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Academic transcripts and testamurs/completion certificates;</li>
            <li>Proof of English language proficiency;</li>
            <li>Passport copy;</li>
            <li>
              Official translations of documents not issued in English.
              Translators in Australia must be certified by the National
              Accreditation Authority for Translators and Interpreters (NAATI);
            </li>
            <li>
              Additional documents required for Advanced Standing application
              (if applicable); and,
            </li>
            <li>Other documents as requested by the Institution.</li>
          </ul>
        </section>

        <section className="mt-4">
          <Heading className="text-gray-800 mt-6 mb-2" level={3}>
            Step 4: Admission Outcome
          </Heading>
          <p>
            After successful completion of the outlined criteria, the
            application outcome is typically released within five working days
            and may include one of the following:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>A Letter of Offer</li>
            <li>
              A Conditional Letter of Offer, outlining any conditions that must
              be satisfied prior to issuance of the full offer;{" "}
            </li>
            <li>A notification of application rejection</li>
          </ul>
        </section>

        <section className="mt-4">
          <Heading className="text-gray-800 mt-6 mb-2" level={3}>
            Step 5: Acceptance of Offer
          </Heading>
          <p>The Confirmation of Enrolment (CoE) will be issued when:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Entry admission requirements are satisfied;</li>
            <li>The Letter of Offer is signed and dated;</li>
            <li>
              All required sections of the GTE form are completed, meeting both
              Genuine Student (GS) and Genuine Temporary Entrant (GTE)
              requirements;
            </li>
            <li>The Financial Declaration Form is completed; and,</li>
            <li>Proof of payment for fees is provided</li>
          </ul>
        </section>

        <section className="mt-4">
          <Heading className="text-gray-800 mt-6 mb-2" level={3}>
            Step 6: Student Orientation and Enrolment
          </Heading>

          <p>
            We warmly welcome you to the Quantum Institute of Higher Education!
          </p>
          <p>
            We’re thrilled to have you with us! You’re now ready to begin your
            journey as a Quantum student. Enroll in your classes, connect with
            classmates, and dive into campus life.
          </p>
        </section>

        <section className="mt-4">
          <p>
            For more Information:{" "}
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href={`/${slugs.futureStudents}/admission-policy`}
            >
              QIHE’s Admission Policy
            </Link>
          </p>
        </section>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
