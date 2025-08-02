import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-4">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={1}>
          About QIHE
        </Heading>

        <p>
          At QIHE, we are driven by a mission to create an empowering
          educational ecosystem where every student is inspired to pursue their
          dreams and make a meaningful impact through education. Committed to
          delivering excellence, our programs are designed to meet the high
          standards of Australian higher education, placing quality and student
          success at the heart of everything we do. Located in the vibrant hub
          of Parramatta, QIHE offers students an enriching educational
          experience in a multicultural environment. With peers from diverse
          backgrounds, students benefit from the best of Australian higher
          education while developing a global perspective.
        </p>
        <br />
        <p>
          Our institute brings together a dedicated team of educators with
          diverse expertise and qualifications, united by a shared passion for
          fostering student achievement. At QIHE, our focus extends beyond
          academic success—we aim to ensure our students are job-ready and
          equipped to pursue fulfilling careers, making a positive impact in
          their chosen fields.
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Our Vision
        </Heading>
        <p>
          At QIHE, we aspire to transform students' lives and open doors to
          professional opportunities through the delivery of quality higher
          education. Our vision is to create an environment that fosters
          intellectual curiosity, critical thinking, and the cultivation of
          practical skills and humane values, empowering students to thrive in
          their personal and professional lives.
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Our Mission
        </Heading>
        <p>
          QIHE provides an exceptional higher education experience for students
          from all walks of life. We achieve this by fostering a dynamic and
          creative learning environment where education is an active and
          lifelong journey. Our mission is to prepare students to make
          meaningful contributions to their chosen professions and to society.
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Our Core Values
        </Heading>
        <p className="mb-2">
          At QIHE, our core values guide us in achieving our vision and mission:
        </p>
        <ul className="list-decimal pl-6 space-y-1">
          <li>
            <strong>Academic Excellence:</strong> We are dedicated to delivering
            education that empowers students and prepares them for success in a
            global workforce.
          </li>
          <li>
            <strong>Equity and Inclusivity:</strong> We believe in providing
            equitable access to quality higher education, fostering an inclusive
            environment for all.
          </li>
          <li>
            <strong>Community Engagement:</strong> We strive to make a positive
            impact on our local community and beyond through meaningful
            contributions.
          </li>
          <li>
            <strong>Integrity:</strong> We uphold the highest standards of
            academic and operational integrity, ensuring transparency,
            compliance, and consistency.
          </li>
          <li>
            <strong>Accountability:</strong> We take responsibility for our
            actions and their impact, maintaining the trust of our students,
            stakeholders, and community.
          </li>
          <li>
            <strong>Sustainability:</strong> We are committed to financial and
            environmental sustainability, integrating responsible practices
            across our operations and curriculum.
          </li>
          <li>
            <strong>Adaptability:</strong> We embrace innovation and remain
            flexible to meet the challenges of a dynamic, ever-changing world.
          </li>
          <li>
            <strong>Global Outlook:</strong> We cultivate an international
            perspective in our programs and operations, fostering collaboration
            and global connections.
          </li>
        </ul>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Our People
        </Heading>

        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          A Note from the Chair
        </Heading>
        <p className="mt-2">
          <strong>Emeritus Professor Jim Psaros</strong>
          <br />
          Chair of the Governing Council
        </p>
        <p className="mt-2">
          <Link
            href="#"
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Read Message from the Chair
          </Link>
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Meet the Quantum Family
        </Heading>
        <p>
          QIHE’s governance framework includes several key bodies that work
          collaboratively to uphold our commitment to academic excellence,
          integrity, and student achievement.
        </p>

        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The Governing Council</li>
          <li>The Academic Board</li>
          <li>The Industry and Advisory Committee</li>
          <li>The Risk and Audit Committee</li>
        </ul>

        <p className="mt-2">
          The Institute is steered by the Governing Council, the Academic Board,
          and a network of Course and Advisory Committees. These bodies play a
          pivotal role in ensuring the Institute’s academic standards, industry
          relevance, and student-focused outcomes.
        </p>

        <p className="mt-2">
          These teams collaborate closely to provide an enriching learning
          experience, combining innovative teaching, industry insights, and
          personalized support. At Quantum, we are committed to empowering
          students with relevant knowledge, skills, and connections they need to
          thrive in their careers and contribute meaningfully to society.
        </p>

        <Image
          src={"/organizational/governance-structure.png"}
          alt="Governance Structure"
          width={600}
          height={600}
          className="md:w-2xl mx-auto mix-blend-multiply"
        />

        <p className="mt-2 w-fit mx-auto md:text-center">
          <Link
            href="/organizational/governance-structure.png"
            target="_blank"
            download={true}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Download Governance Structure & Organizational Diagram
          </Link>
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          The Academic Team
        </Heading>
        <p>
          Our academic team comprises highly qualified professionals with both
          industry and academic experience, dedicated to delivering
          student-centric education that’s relevant and impactful.
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

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          The Support Team
        </Heading>
        <p>
          The support staff ensure students have access to essential services,
          guidance, and resources from enrollment to graduation.
        </p>
        <p className="mt-2">
          <Link
            href="#"
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            View Support Staff Profiles
          </Link>
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Student Association
        </Heading>
        <p>
          Our Student Association plays an important role in creating a vibrant
          and inclusive campus culture, representing student voices and
          organizing events, support services, and advocacy initiatives.
        </p>
        <p className="mt-2">
          <Link
            href="#"
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Meet the Student Association
          </Link>
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <div className="space-y-22 mt-22">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
