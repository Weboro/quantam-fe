import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `Governance Structure`,
  description:
    "Explore QIHE’s Governance Structure and Framework, where dedicated academic and administrative bodies work together to uphold integrity, excellence, and transparency in education.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreTeam}`,
  },
  openGraph: {
    title: `Governance Structure`,
    description:
      "Explore QIHE’s Governance Structure and Framework, where dedicated academic and administrative bodies work together to uphold integrity, excellence, and transparency in education.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreTeam}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Governance Structure`,
    description:
      "Explore QIHE’s Governance Structure and Framework, where dedicated academic and administrative bodies work together to uphold integrity, excellence, and transparency in education.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="text-muted">
      <Heading className="text-brand-primary-black mt-4 mb-1" level={1}>
        Meet the Quantum Family
      </Heading>
      <p className="font-medium mb-3">QIHE’s Governance Framework</p>

      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>The Governing Council</li>
        <li>The Academic Board</li>
        <li>The Course and Industry Advisory Committee</li>
        <li>The Risk and Audit Committee</li>
      </ul>

      <p className="mt-3 text-justify leading-relaxed">
        The Institute is steered by the Governing Council, the Academic Board,
        and a network of Course and Industry Advisory Committee, who plays a
        pivotal role in upholding the Institute’s standards of academic
        excellence and integrity, practical and industry relevance, and, most
        importantly, student achievement.
      </p>

      <Image
        src={"/organizational/governance-structure.png"}
        alt="Governance Structure"
        width={600}
        height={600}
        className="md:w-2xl mx-auto mix-blend-multiply mt-4"
      />

      <p className="mt-3 w-fit mx-auto md:text-center">
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
