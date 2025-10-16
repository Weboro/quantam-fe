import { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const metadata: Metadata = {
  title: "QIHE Services and Facilities",
  description:
    "Explore the modern services and facilities provided by QIHE, including our on-campus library, e-library, computer labs, Wi-Fi, and LMS resources.",
  keywords: [
    "QIHE services",
    "QIHE facilities",
    "library",
    "e-library",
    "computer labs",
    "Wi-Fi",
    "LMS",
    "ICT Services",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/services-and-facilities`,
  },
  openGraph: {
    title: "QIHE Services and Facilities",
    description:
      "Explore the modern services and facilities provided by QIHE, including our on-campus library, e-library, computer labs, Wi-Fi, and LMS resources.",
    url: `${SITE_URL}/${slugs.qiheStudents}/services-and-facilities`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "QIHE Services and Facilities",
    description:
      "Explore the modern services and facilities provided by QIHE, including our on-campus library, e-library, computer labs, Wi-Fi, and LMS resources.",
  },
};

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        QIHE Services and Facilities
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        We provide modern facilities to support your learning, including our
        on-campus library, 24/7 e-library, computer labs, secure Wi-Fi, and a
        fully equipped LMS. All students enjoy free, fair, and inclusive access
        to resources designed for success. Our services are safe, reliable, and
        regularly updated.
      </p>
      <p className="text-lg text-gray-700 italic mt-6">
        For full details, please refer to the{" "}
        <i>ICT Services and Library Facilities Policy</i>.
      </p>
    </section>
  );
};

export default Page;
