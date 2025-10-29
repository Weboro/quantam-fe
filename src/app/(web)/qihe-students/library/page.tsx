import Link from "next/link";
import { Metadata } from "next";
//
import { slugs } from "@/extra/slugs";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Explore the Quantum Institute library resources, access digital collections, and find study spaces and support services available to students.",
  keywords: [
    "Quantum Institute library",
    "digital collections",
    "study resources",
    "library services",
    "student support",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/${slugs.library}`,
  },
  openGraph: {
    title: "Library",
    description:
      "Explore the Quantum Institute library resources, access digital collections, and find study spaces and support services available to students.",
    url: `${SITE_URL}/${slugs.qiheStudents}/${slugs.library}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Library",
    description:
      "Explore the Quantum Institute library resources, access digital collections, and find study spaces and support services available to students.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Library</h1>
      <p>
        Access a wide range of academic resources, including textbooks,
        journals, and e-resources, through our on-campus library and online
        portal. The library staff is here to support your learning needs.
      </p>
      <p>
        <Link href={slugs.eLibrary}>Access the E-Library</Link>
      </p>

      <p>
        For more details, see our{" "}
        <Link
          target="main"
          href={
            "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?dl=0&e=1&preview=ICT+Services+and+Library+Facilities+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1"
          }
        >
          ICT Services and Library Facilities Policy
        </Link>
        .
      </p>
    </ContainerLayout>
  );
};

export default page;
