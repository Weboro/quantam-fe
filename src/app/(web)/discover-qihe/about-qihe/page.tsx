import React from "react";
import type { Metadata } from "next";
//
import { slugs } from "@/extra/slugs";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `About QIHE`,
  description:
    "Learn about Quantum Institute of Higher Education (QIHE), our history, vision, and commitment to quality education and student success.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.aboutQihe}`,
  },
  openGraph: {
    title: `About QIHE`,
    description:
      "Learn about Quantum Institute of Higher Education (QIHE), our history, vision, and commitment to quality education and student success.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.aboutQihe}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `About QIHE`,
    description:
      "Learn about Quantum Institute of Higher Education (QIHE), our history, vision, and commitment to quality education and student success.",
  },
});

const page = () => {
  return (
    <div className="space-y-32">
      <ContainerLayout className="">
        <div className="text-muted">
          <Heading className="mt-4 mb-2" level={1}>
            About QIHE
          </Heading>

          <p className="text-justify leading-relaxed">
            At QIHE, we are driven by a mission to create an empowering
            educational ecosystem where every student is inspired to pursue
            their dreams and make a meaningful impact through education.
            Committed to delivering excellence, our programs are designed to
            meet the high standards of Australian higher education, placing
            quality and student success at the heart of everything we do.
            Located in the vibrant hub of Parramatta, QIHE offers students an
            enriching educational experience in a multicultural environment.
            With peers from diverse backgrounds, students benefit from the best
            of Australian higher education while developing a global
            perspective.
          </p>
          <br />
          <p className="text-justify leading-relaxed">
            Our Institute brings together a dedicated team of educators with
            diverse expertise and qualifications, united by a shared passion for
            fostering student achievement. At QIHE, our focus extends beyond
            academic success—we aim to ensure our students are job-ready and
            equipped to pursue fulfilling careers, making a positive impact in
            their chosen fields.
          </p>
        </div>
        {/* <div className="bg-brand-primary/10 grid place-items-center text-brand-primary rounded-lg">
          IMAGE HERE
        </div> */}
      </ContainerLayout>

      <ContainerLayout className="text-muted">
        {/* <div className="bg-brand-primary/10 grid place-items-center text-brand-primary rounded-lg">
          IMAGE OF CHAIRPERSON HERE
        </div> */}

        <div className="">
          <Heading className="mt-4 mb-2" level={2}>
            Welcome to Quantum Institute of Higher Education (QIHE)
          </Heading>
          <p className="text-justify  leading-relaxed">
            At QIHE, we believe that education is not just about acquiring
            knowledge — it’s about unlocking potential, fostering innovation,
            and shaping future leaders. Our institution is built on a commitment
            to academic excellence, student success, and real-world impact.
            Whether you aspire to lead in business, drive technological
            advancements, or contribute to your community, we are here to guide
            and support you every step of the way. Located in the vibrant city
            of Parramatta, our modern campus offers an enriching learning
            environment where students from diverse backgrounds come together to
            share ideas, challenge perspectives, and build lasting connections.
            Our industry-aligned programs, hands-on learning opportunities, and
            dedicated academic support ensure that you graduate not only with a
            degree but with the skills and confidence to thrive in an evolving
            global landscape. As you explore this prospectus, we invite you to
            imagine your future with QIHE — a place where your aspirations are
            nurtured, your potential is realised, and your success is
            celebrated.
          </p>
          <p className="text-justify  leading-relaxed mt-4">
            We look forward to welcoming you to our community and being a part
            of your academic and personal growth.
          </p>
          <p>
            <b>Warm Regards,</b>
          </p>
          <p className="mt-4">
            <strong>Emeritus Professor Jim Psaros</strong>
            <br />
            Chair of the Governing Council
            <br />
            Quantum Institute of Higher Education
          </p>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default page;
