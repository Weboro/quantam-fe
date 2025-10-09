import Link from "next/link";
import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

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
    <ContainerLayout className="text-muted">
      <Heading className="text-brand-primary-black mt-4 mb-2" level={1}>
        The Academic Team
      </Heading>
      <p>
        Our academic team consists of highly qualified professionals with strong
        industry and academic backgrounds, committed to supporting student
        success through relevant, engaging, and practice-focused learning
        experiences.
      </p>
      <p className="mt-2">
        <Link
          href="#"
          className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
        >
          View Academic Staff Profiles
        </Link>
      </p>
    </ContainerLayout>
  );
};

export default page;
