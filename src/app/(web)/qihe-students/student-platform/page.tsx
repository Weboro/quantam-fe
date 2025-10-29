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
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-brand-primary-black mb-2" level={1}>
        Learning Platform
      </Heading>
      <p>
        The QIHE Learnjng Management System(LMS) is your central hub for
        managing your studies.
      </p>
      <br />
      <p>
        Access learning materials, submit assessments, view grades, and stay
        informed with important announcements and updates.
      </p>

      <p className="mt-2">
        <Link
          href={slugs.studentPlatformLogin}
          className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
        >
          Login to the Learning Platform
        </Link>
      </p>
    </ContainerLayout>
  );
};

export default page;
