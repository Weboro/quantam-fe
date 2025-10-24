import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QIHE Services and Facilities | Student Support",
  description:
    "Learn about QIHE's modern facilities and student support services, including library access, computer labs, Wi-Fi, counselling, and academic guidance.",
  keywords: [
    "QIHE services",
    "QIHE facilities",
    "student support",
    "library",
    "computer labs",
    "counselling",
    "academic support",
    "ICT Services",
    "Student Support Policy",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/services-and-support`,
  },
  openGraph: {
    title: "QIHE Services and Facilities | Student Support",
    description:
      "Learn about QIHE's modern facilities and student support services, including library access, computer labs, Wi-Fi, counselling, and academic guidance.",
    url: `${SITE_URL}/${slugs.qiheStudents}/services-and-support`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "QIHE Services and Facilities | Student Support",
    description:
      "Learn about QIHE's modern facilities and student support services, including library access, computer labs, Wi-Fi, counselling, and academic guidance.",
  },
};

const Page = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          QIHE Services and Facilities
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          We provide modern facilities to support your learning, including our
          on-campus library, 24/7 e-library, computer labs, secure Wi-Fi, and a
          fully equipped LMS. All students enjoy free, fair, and inclusive
          access to resources designed for success. Our services are safe,
          reliable, and regularly updated.
        </p>
        <p className="text-lg text-gray-700 italic mt-6">
          For full details, please refer to the{" "}
          <p>
            For more details, see our{" "}
            <a
              target="main"
              href={
                "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?dl=0&e=1&preview=ICT+Services+and+Library+Facilities+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1"
              }
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all italic"
            >
              ICT Services and Library Facilities Policy
            </a>
            .
          </p>
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Student Support at QIHE
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Your success and wellbeing come first. We offer academic counselling,
          English and numeracy support, peer mentoring, free counselling, health
          and safety services, and inclusive programs for international
          students, Aboriginal and Torres Strait Islander students, and students
          with disabilities. Support is always available, and we provide the
          resources, guidance, and care you need to thrive at QIHE.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          For full details, please refer to the{" "}
                      <a
              target="main"
              href={
                "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AH3M6gYuVmnkM8lasZmegKw/Policies%20and%20Procedures/Student%20Support%20and%20Consultation%20Policy.pdf?rlkey=bt8lvdav3k7x6my0f6khqgfsg&dl=0"
              }
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all italic"
            >
          <i>Student Support and Consultation Policy</i>.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Page;
