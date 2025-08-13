import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `Our Core Team`,
  description:
    "Meet the leadership and core team at Quantum Institute who drive our vision and uphold our commitment to quality education.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreTeam}`,
  },
  openGraph: {
    title: `Our Core Team`,
    description:
      "Meet the leadership and core team at Quantum Institute who drive our vision and uphold our commitment to quality education.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreTeam}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Core Team`,
    description:
      "Meet the leadership and core team at Quantum Institute who drive our vision and uphold our commitment to quality education.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="text-muted">
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
  );
};

export default page;
