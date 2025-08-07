import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `Our Core Values`,
  description:
    "Discover the core values that guide Quantum Institute in fostering integrity, inclusivity, innovation, and academic excellence.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreValues}`,
  },
  openGraph: {
    title: `Our Core Values`,
    description:
      "Discover the core values that guide Quantum Institute in fostering integrity, inclusivity, innovation, and academic excellence.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreValues}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Core Values`,
    description:
      "Discover the core values that guide Quantum Institute in fostering integrity, inclusivity, innovation, and academic excellence.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="mt-6 text-muted">
      <Heading className="text-brand-primary-black mt-4 mb-2" level={1}>
        Our Core Values
      </Heading>
      <p className="mb-2">
        At QIHE, our core values guide us in achieving our vision and mission:
      </p>
      <ul className="list-decimal pl-6 space-y-1">
        <li>
          <strong>Academic Excellence:</strong> We are dedicated to delivering
          education that empowers students and prepares them for success in a
          global workforce.
        </li>
        <li>
          <strong>Equity and Inclusivity:</strong> We believe in providing
          equitable access to quality higher education, fostering an inclusive
          environment for all.
        </li>
        <li>
          <strong>Community Engagement:</strong> We strive to make a positive
          impact on our local community and beyond through meaningful
          contributions.
        </li>
        <li>
          <strong>Integrity:</strong> We uphold the highest standards of
          academic and operational integrity, ensuring transparency, compliance,
          and consistency.
        </li>
        <li>
          <strong>Accountability:</strong> We take responsibility for our
          actions and their impact, maintaining the trust of our students,
          stakeholders, and community.
        </li>
        <li>
          <strong>Sustainability:</strong> We are committed to financial and
          environmental sustainability, integrating responsible practices across
          our operations and curriculum.
        </li>
        <li>
          <strong>Adaptability:</strong> We embrace innovation and remain
          flexible to meet the challenges of a dynamic, ever-changing world.
        </li>
        <li>
          <strong>Global Outlook:</strong> We cultivate an international
          perspective in our programs and operations, fostering collaboration
          and global connections.
        </li>
      </ul>
    </ContainerLayout>
  );
};

export default page;
