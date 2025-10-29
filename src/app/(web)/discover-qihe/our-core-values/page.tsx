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
    "Discover the core values that guide Quantum Institute of Higher Education (QIHE) in fostering integrity, inclusivity, innovation, and academic excellence.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreValues}`,
  },
  openGraph: {
    title: `Our Core Values`,
    description:
      "Discover the core values that guide Quantum Institute of Higher Education (QIHE) in fostering integrity, inclusivity, innovation, and academic excellence.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.ourCoreValues}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Core Values`,
    description:
      "Discover the core values that guide Quantum Institute of Higher Education (QIHE) in fostering integrity, inclusivity, innovation, and academic excellence.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Our Core Values</h1>

      <ul>
        <li>
          <strong>Academic Excellence:</strong> QIHE strives for academic
          excellence in order to provide education that will empower students
          and prepare them for a global workforce.
        </li>
        <li>
          <strong>Equity and Inclusivity:</strong> QIHE believes that everyone
          should have an equal chance at pursuing quality higher education,
          therefore the Institute is dedicated to upholding equitable and
          inclusive practices.
        </li>
        <li>
          <strong>Community Engagement:</strong> QIHE is committed to bringing
          positive contributions to the community in which the Institute is
          based and beyond.
        </li>
        <li>
          <strong>Integrity:</strong> Abiding by the established standards for
          Australian higher education, QIHE will always ensure the highest level
          of academic integrity in its operations. QIHE will always ensure that
          transparency, compliance, and consistency are key principles in its
          operations.
        </li>
        <li>
          <strong>Accountability:</strong> QIHE will uphold its responsibilities
          to its students, stakeholders, and the community. The Institute will
          hold itself accountable for its operations, contributions, and impact
          to ensure that it is safeguarding the trust given by stakeholders and
          community.
        </li>
        <li>
          <strong>Sustainability:</strong> Sustainability refers to an essential
          value of QIHE to ensure financial as well as environmental
          responsibility to safeguard its long-term presence. The Institute
          commits to integrating sustainable practices in its operations,
          curriculum, and governance.
        </li>
        <li>
          <strong>Adaptability:</strong> In response to the ever-changing
          environment and circumstances, QIHE is committed to remaining
          flexible, open to new approaches, and embracing innovation. This
          includes keeping up with changes in digital technology innovations and
          the evolving landscape of education.
        </li>
        <li>
          <strong>Global Outlook:</strong> QIHE takes into account the
          interconnected world and is implementing an international perspective
          in its programs and operational plan development. The Institute is
          open to pursuing international opportunities for collaboration and
          cooperation.
        </li>
      </ul>

      <p>
        QIHE’s programs are thoughtfully designed to uphold the Institute’s
        overarching vision, mission, and core values.
      </p>
    </ContainerLayout>
  );
};

export default page;
