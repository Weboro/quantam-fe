import Link from "next/link";
import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `QIHE Student Association`,
  description:
    "The Quantum Institute of Higher Education (QIHE) Student Association is the formally recognised body representing the interests, needs, and welfare of all students.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.studentAssociation}`,
  },
  openGraph: {
    title: `QIHE Student Association`,
    description:
      "The Quantum Institute of Higher Education (QIHE) Student Association is the formally recognised body representing the interests, needs, and welfare of all students.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.studentAssociation}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `QIHE Student Association`,
    description:
      "The Quantum Institute of Higher Education (QIHE) Student Association is the formally recognised body representing the interests, needs, and welfare of all students.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>QIHE Student Association</h1>

      <p>
        The Quantum Institute of Higher Education (QIHE) Student Association is
        the formally recognised body representing the interests, needs, and
        welfare of all students. It provides a strong student voice in
        institutional decision-making and acts as a channel of communication
        between students, management, and governance bodies.
      </p>

      <p>The Association enhances academic, social, and cultural life by:</p>

      <ul>
        <li>
          Representing students in governance, planning, and quality assurance
          processes.
        </li>
        <li>
          Organising events, clubs, and initiatives that promote wellbeing,
          inclusivity, and diversity.
        </li>
        <li>
          Supporting student-led activities such as peer mentoring, advocacy,
          volunteering, and leadership development.
        </li>
        <li>
          Ensuring that the perspectives of domestic, international, and diverse
          student cohorts are heard and valued.
        </li>
      </ul>

      <p>
        All enrolled students are automatically members of the Student
        Association, giving them the opportunity to participate in elections,
        attend meetings, and contribute to student-led initiatives. Through this
        engagement, the Association builds student belonging, strengthens
        community, and contributes to continuous improvement of the student
        learning experience.
      </p>
    </ContainerLayout>
  );
};

export default page;
