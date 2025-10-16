import { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

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
      {/* QIHE Services and Facilities */}
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
          <i>ICT Services and Library Facilities Policy</i>.
        </p>
      </div>

      {/* Student Support at QIHE */}
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
        <p className="text-lg text-gray-700 italic mt-6">
          For full details, please refer to the{" "}
          <i>Student Support and Consultation Policy</i>.
        </p>
      </div>
    </section>
  );
};

export default Page;
