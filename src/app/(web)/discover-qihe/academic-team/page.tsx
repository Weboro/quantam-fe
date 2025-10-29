import Link from "next/link";
import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";

export const generateMetadata = (): Metadata => ({
  title: `Academic Team`,
  description:
    "Meet the expert academic team at Quantum Institute who guide and support your learning journey with dedication and excellence.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.academicTeam}`,
  },
  openGraph: {
    title: `Academic Team`,
    description:
      "Meet the expert academic team at Quantum Institute who guide and support your learning journey with dedication and excellence.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.academicTeam}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Academic Team`,
    description:
      "Meet the expert academic team at Quantum Institute who guide and support your learning journey with dedication and excellence.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>The Academic Team</h1>
      <p>
        Our academic team consists of highly qualified professionals with strong
        industry and academic backgrounds, committed to supporting student
        success through relevant, engaging, and practice-focused learning
        experiences.
      </p>
      <p>
        <Link href="#">View Academic Staff Profiles</Link>
      </p>
    </ContainerLayout>
  );
};

export default page;
