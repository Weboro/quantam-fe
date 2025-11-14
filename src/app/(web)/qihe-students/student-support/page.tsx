import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import Link from "next/link";
import ContainerLayout from "@/components/layouts/ContainerLayout";

const policyPdf = (filename: string) =>
  encodeURI(`/policies-and-procedures/${filename}`);

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
    <ContainerLayout className="rich_text_container">
      <div>
        <h1>QIHE Services and Facilities</h1>
        <p>
          We provide modern facilities to support your learning, including our
          on-campus library, 24/7 e-library, computer labs, secure Wi-Fi, and a
          fully equipped LMS. All students enjoy free, fair, and inclusive
          access to resources designed for success. Our services are safe,
          reliable, and regularly updated.
        </p>
        <p>
          For full details, please refer to the{" "}
          <a
            target="main"
            href={policyPdf("ICT Services and Library Facilities Policy.pdf")}
          >
            ICT Services and Library Facilities Policy
          </a>
          .
        </p>
      </div>

      <div>
        <h2>Student Support at QIHE</h2>
        <p>
          Your success and wellbeing come first. We offer academic counselling,
          English and numeracy support, peer mentoring, free counselling, health
          and safety services, and inclusive programs for international
          students, Aboriginal and Torres Strait Islander students, and students
          with disabilities. Support is always available, and we provide the
          resources, guidance, and care you need to thrive at QIHE.
        </p>
        <p>
          For full details, please refer to the{" "}
          <a
            target="main"
            href={policyPdf("Student Support and Consultation Policy.pdf")}
          >
            <i>Student Support and Consultation Policy</i>.
          </a>
        </p>
      </div>
    </ContainerLayout>
  );
};

export default Page;
