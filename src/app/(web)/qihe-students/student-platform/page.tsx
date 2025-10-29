import Link from "next/link";
import { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Learning Platform",
  description:
    "Access the Quantum Institute Learning Platform for course materials, announcements, grades, and communication with faculty and staff.",
  keywords: [
    "Learning Platform",
    "Quantum Institute portal",
    "course materials",
    "student announcements",
    "academic grades",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/${slugs.studentPlatform}`,
  },
  openGraph: {
    title: "Learning Platform",
    description:
      "Access the Quantum Institute Learning Platform for course materials, announcements, grades, and communication with faculty and staff.",
    url: `${SITE_URL}/${slugs.qiheStudents}/${slugs.studentPlatform}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Platform",
    description:
      "Access the Quantum Institute Learning Platform for course materials, announcements, grades, and communication with faculty and staff.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Learning Platform</h1>
      <p>
        The QIHE Learnjng Management System(LMS) is your central hub for
        managing your studies.
      </p>

      <p>
        Access learning materials, submit assessments, view grades, and stay
        informed with important announcements and updates.
      </p>

      <Link href={slugs.studentPlatformLogin}>
        Login to the Learning Platform
      </Link>
    </ContainerLayout>
  );
};

export default page;
