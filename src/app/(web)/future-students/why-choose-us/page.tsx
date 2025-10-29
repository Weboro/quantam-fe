import Link from "next/link";
import { Metadata } from "next";
//
import { files, slugs } from "@/extra/slugs";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: `Why Choose Us`,
  description:
    "Discover why Quantum Institute is the right choice for your higher education, offering quality, support, and opportunity.",
  keywords: [
    "why choose Quantum Institute",
    "higher education benefits",
    "quality education",
    "student support",
    "education opportunities",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}/${slugs.whyChooseUs}`,
  },
  openGraph: {
    title: `Why Choose Us`,
    description:
      "Discover why Quantum Institute is the right choice for your higher education, offering quality, support, and opportunity.",
    url: `${SITE_URL}/${slugs.futureStudents}/${slugs.whyChooseUs}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Why Choose Us`,
    description:
      "Discover why Quantum Institute is the right choice for your higher education, offering quality, support, and opportunity.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-gray-800 mt-6 mb-2" level={1}>
        Why QIHE?
      </Heading>
      <p>
        At QIHE, we are committed to providing a supportive and enriching
        environment for students to achieve academic and professional success.
        We take pride in offering a meaningful educational experience catered
        for students’ impactful educational journey.
      </p>

      <Heading className="text-gray-800 mt-6 mb-2" level={3}>
        Modern Facilities
      </Heading>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong className="text-gray-800">
            Well-equipped Computer Labs:
          </strong>{" "}
          Designed to provide hands-on experience with the latest software and
          technologies.
        </li>
        <li>
          <strong className="text-gray-800">Resourceful Library:</strong> A
          digital and physical library offering access to academic resources,
          research tools, and study spaces.
        </li>
        <li>
          <strong className="text-gray-800">
            Collaborative Learning Areas:
          </strong>{" "}
          Modern spaces for teamwork, brainstorming, and group projects.
        </li>
      </ul>

      <Heading className="text-gray-800 mt-6 mb-2" level={3}>
        Industry-Relevant Curriculum
      </Heading>
      <p>
        Our programs are designed in consultation and oversight of industry
        experts, present in our governance, to ensure they align with current
        and future workforce demands. With a focus on real-world application, we
        aim to prepare students for careers in rapidly evolving fields.
      </p>

      <Heading className="text-gray-800 mt-6 mb-2" level={3}>
        Personalised and Learning Support
      </Heading>

      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong className="text-gray-800">Small Class Sizes:</strong> Students
          benefit from close interaction with academic staff, fostering a more
          personalised learning experience.
        </li>
        <li>
          <strong className="text-gray-800">Student Services:</strong> Dedicated
          support for academic guidance, career planning, and personal
          development. Please refer to the{" "}
          <Link
            className="text-brand-primary italic underline hover:text-brand-blue-4 transition-all"
            href={slugs.consultation}
          >
            Student Support and Consultation Policy
          </Link>{" "}
          for more information.
        </li>
        <li>
          <strong className="text-gray-800">Learning Programs:</strong> Events
          and programs that allow students to build their learning skills,
          connect with others, and stay engaged.
        </li>
      </ul>

      <Heading className="text-gray-800 mt-6 mb-2" level={3}>
        Dedicated Educators
      </Heading>

      <p>
        Our academic staff bring a wealth of experience from academia and
        industry, ensuring that students receive practical and relevant
        knowledge in their chosen fields.
      </p>

      <Heading className="text-gray-800 mt-6 mb-2" level={3}>
        Convenient Location
      </Heading>
      <p>
        Our campus is conveniently located at Level 4, 16-18 Wentworth Street,
        Parramatta NSW 2150, providing students with easy access to public
        transport, nearby amenities, and opportunities to engage with the local
        community.
      </p>

      <Heading className="text-gray-800 mt-6 mb-2" level={3}>
        Inclusive and Supportive Environment
      </Heading>

      <p>
        QIHE values diversity and fosters an inclusive atmosphere where students
        from all backgrounds feel welcome and supported.
      </p>

      <p>
        <Link
          className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          href={files.prospectus}
        >
          Find our Prospectus here
        </Link>
        . <br />
        <Link
          className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          href={`/${slugs.apply}`}
        >
          Apply here
        </Link>
        .
      </p>
    </ContainerLayout>
  );
};

export default page;
