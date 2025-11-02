import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import governance from "../../../../../public/image/qihe-governance-chart.png"
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `Governance Chart`,
  description:
    "The Quantum Institute of Higher Education (QIHE) Student Association is the formally recognised body representing the interests, needs, and welfare of all students.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.studentAssociation}`,
  },
  openGraph: {
    title: `Governance Chart`,
    description:
      "The Quantum Institute of Higher Education (QIHE) Student Association is the formally recognised body representing the interests, needs, and welfare of all students.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.studentAssociation}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Governance Chart`,
    description:
      "The Quantum Institute of Higher Education (QIHE) Student Association is the formally recognised body representing the interests, needs, and welfare of all students.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Governance Chart</h1>

      <Image src={governance} alt="" />
          
    </ContainerLayout>
  );
};

export default page;
