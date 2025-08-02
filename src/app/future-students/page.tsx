import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout>
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          Future Students
        </Heading>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="mt-6 mb-2 text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
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
              href={siteLinks.admission}
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
              href={siteLinks.onlineApplication}
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
              href={siteLinks.admission}
            >
              QIHE’s Admission Policy
            </Link>
          </p>
        </section>
      </ContainerLayout>

      <hr className="my-8 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
          Policies and Procedures
        </Heading>
        <p>
          Below are QIHE’s policies and procedures that provides comprehensive
          information for everyone in regard to QIHE:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href="#"
            >
              [Link to Policy 1]
            </Link>
          </li>
          <li>
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href="#"
            >
              [Link to Policy 2]
            </Link>
          </li>
          <li>
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href="#"
            >
              [Link to Policy 3]
            </Link>
          </li>
        </ul>
      </ContainerLayout>

      <hr className="my-8 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
          Find an Education Agent
        </Heading>

        <Link
          className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          href={siteLinks.findAgent}
        >
          Find Agents Page
        </Link>
      </ContainerLayout>

      <hr className="my-8 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
          Why QIHE?
        </Heading>
        <p>
          At QIHE, we are committed to providing a supportive and enriching
          environment for students to achieve academic and professional success.
          We take pride in offering a meaningful educational experience catered
          for students’ impactful educational journey.
        </p>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Modern Facilities
        </Heading>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong className="text-gray-800">
              Well-equipped Computer Labs:
            </strong>{" "}
            Designed to provide hands-on experience with the latest software and
            technologies.
          </li>
          <li>
            <strong className="text-gray-800">Resourceful Library:</strong> A
            digital and physical library offering access to academic resources,
            research tools, and study spaces.
          </li>
          <li>
            <strong className="text-gray-800">
              Collaborative Learning Areas:
            </strong>{" "}
            Modern spaces for teamwork, brainstorming, and group projects.
          </li>
        </ul>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Industry-Relevant Curriculum
        </Heading>
        <p>
          Our programs are designed in consultation and oversight of industry
          experts, present in our governance, to ensure they align with current
          and future workforce demands. With a focus on real-world application,
          we aim to prepare students for careers in rapidly evolving fields.
        </p>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Personalised and Learning Support
        </Heading>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong className="text-gray-800">Small Class Sizes:</strong>{" "}
            Students benefit from close interaction with academic staff,
            fostering a more personalised learning experience.
          </li>
          <li>
            <strong className="text-gray-800">Student Services:</strong>{" "}
            Dedicated support for academic guidance, career planning, and
            personal development. Please refer to the{" "}
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href={siteLinks.studentSupport}
            >
              Student Support
            </Link>{" "}
            and{" "}
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href={siteLinks.consultation}
            >
              Consultation Policy
            </Link>{" "}
            for more information.
          </li>
          <li>
            <strong className="text-gray-800">Learning Programs:</strong> Events
            and programs that allow students to build their learning skills,
            connect with others, and stay engaged.
          </li>
        </ul>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Dedicated Educators
        </Heading>
        <p>
          Our academic staff bring a wealth of experience from academia and
          industry, ensuring that students receive practical and relevant
          knowledge in their chosen fields.
        </p>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Convenient Location
        </Heading>
        <p>
          Our campus is conveniently located in the heart of Parramatta,
          providing students with easy access to public transport, nearby
          amenities, and opportunities to engage with the local community.
        </p>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Inclusive and Supportive Environment
        </Heading>
        <p>
          QIHE values diversity and fosters an inclusive atmosphere where
          students from all backgrounds feel welcome and supported.
        </p>

        <p>
          <Link
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
            href={siteLinks.prospectus}
          >
            Find our Prospectus here
          </Link>
          . <br />
          <Link
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
            href={siteLinks.apply}
          >
            Apply here
          </Link>
          .
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />
      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
          Orientation and Pre-Arrival Guide
        </Heading>
        <p>
          At Quantum Institute of Higher Education (QIHE), we aim to ensure that
          every student feels prepared, welcomed, and confident as they begin
          their academic journey with us.
        </p>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Pre-Arrival Guide
        </Heading>
        <p>
          Before arriving at QIHE, students will receive a Pre-Arrival Guide
          with important information to help them transition smoothly to life at
          the Institute and in Australia. This guide includes:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Practical advice on preparing for studies and living in Australia.
          </li>
          <li>
            Information on visa requirements, accommodation options, and
            transport.
          </li>
          <li>
            An overview of campus facilities and available support services.
          </li>
        </ul>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
          Student Orientation Program
        </Heading>
        <p>
          The Student Orientation Program is an integral part of your journey at
          QIHE, designed to help you settle into campus life and understand what
          to expect academically and socially. During the orientation, students
          will:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong className="text-gray-800">Explore the Campus:</strong> Learn
            the layout of classrooms, student areas, and key administrative
            offices.
          </li>
          <li>
            <strong className="text-gray-800">Learn About Policies:</strong>{" "}
            Receive essential information on attendance requirements, refund
            procedures, and emergency protocols.
          </li>
          <li>
            <strong className="text-gray-800">
              Receive the Student Handbook:
            </strong>{" "}
            A comprehensive resource with all the details you need, including
            visa and housing information for international students and support
            services for all.
          </li>
          <li>
            <strong className="text-gray-800">
              Discover Support Services:
            </strong>{" "}
            Gain insights into how to access academic, personal, and career
            support services available at QIHE.
          </li>
        </ul>

        <p>
          Our Student Services Team, led by the Student Services Manager and
          supported by the Student Services Officer, will guide you through this
          program to ensure you feel fully informed and supported from day one.
        </p>

        <p className="mt-6 mb-2 font-semibold">
          We look forward to welcoming you to QIHE!
        </p>
      </ContainerLayout>

      <div className="my-24">
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
