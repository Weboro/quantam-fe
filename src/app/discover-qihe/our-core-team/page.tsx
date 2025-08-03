import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-6 text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={1}>
          Meet the Quantum Family
        </Heading>
        <p>
          QIHE’s governance framework includes several key bodies that work
          collaboratively to uphold our commitment to academic excellence,
          integrity, and student achievement.
        </p>

        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The Governing Council</li>
          <li>The Academic Board</li>
          <li>The Industry and Advisory Committee</li>
          <li>The Risk and Audit Committee</li>
        </ul>

        <p className="mt-2">
          The Institute is steered by the Governing Council, the Academic Board,
          and a network of Course and Advisory Committees. These bodies play a
          pivotal role in ensuring the Institute’s academic standards, industry
          relevance, and student-focused outcomes.
        </p>

        <p className="mt-2">
          These teams collaborate closely to provide an enriching learning
          experience, combining innovative teaching, industry insights, and
          personalized support. At Quantum, we are committed to empowering
          students with relevant knowledge, skills, and connections they need to
          thrive in their careers and contribute meaningfully to society.
        </p>

        <Image
          src={"/organizational/governance-structure.png"}
          alt="Governance Structure"
          width={600}
          height={600}
          className="md:w-2xl mx-auto mix-blend-multiply"
        />

        <p className="mt-2 w-fit mx-auto md:text-center">
          <Link
            href="/organizational/governance-structure.png"
            target="_blank"
            download={true}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Download Governance Structure & Organizational Diagram
          </Link>
        </p>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
