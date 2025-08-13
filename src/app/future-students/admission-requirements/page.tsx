import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-40">
        <ContainerLayout className="text-muted mt-6">
          <Heading className="text-brand-primary-black mt-4 mb-8" level={1}>
            Admission Requirements
          </Heading>

          <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
            General Admission Requirements
          </Heading>
          <section className="mt-4">
            <Heading className="text-brand-primary-black mt-4 mb-2" level={3}>
              Domestic Applicants
            </Heading>
            <p>
              For any undergraduate courses, you must satisfy at least one of
              the following entry requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Hold a Higher Secondary Certificate (Year 12) or, have completed
                an ATAR with a minimum score of 55;
              </li>
              <li>
                Successful completion of any of the following:
                <ul className="list-disc pl-6 space-y-1">
                  <li>Diploma AQF Level 5;</li>
                  <li>Tertiary Preparation Program; or,</li>
                  <li>
                    An equivalent qualification from an accredited Australian
                    higher education institution such as Universities, TAFE
                    Institutes, or Government-approved Registered Training
                    Organisations (RTOs).
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mt-4">
            <Heading className="text-brand-primary-black mt-4 mb-2" level={3}>
              International Applicants
            </Heading>
            <p>
              For any undergraduate courses, you must satisfy all of the
              following entry requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Successful completion of one of the following:
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Year 12 of the Australian Senior Secondary Certificate of
                    Education completion;
                  </li>
                  <li>
                    12 years of formal studies recognized by the National Office
                    for Overseas Skills Recognition (NOOSR);
                  </li>
                  <li>
                    Certificate IV or, a higher qualification from a
                    NOOSR-accredited education provider, ideally aligned with
                    the chosen program; or,
                  </li>
                  <li>
                    International Baccalaureate Diploma with a minimum score of
                    24 points.
                  </li>
                </ul>
              </li>
              <li>
                If English is not the applicant’s first language, the ‘English
                Language Requirements’ outlined below must be fully satisfied;
              </li>
              <li>
                After meeting the academic and English language requirements,
                applicant must also satisfy the following criteria:
                <ul className="list-circle pl-6 space-y-1">
                  <li>
                    Compliance with the Australian Department of Home Affairs&apos;
                    Genuine Temporary Entrant (GTE) verification process,
                    including completion of the QIHE GTE Form subject for
                    assessment by QIHE staff.
                  </li>
                  <li>
                    Payment of tuition fees upon successful GTE verification.
                  </li>
                  <li>
                    Issuance of the Confirmation of Enrolment (CoE) by QIHE.
                  </li>
                  <li>
                    Provision of valid Student Visa as documentary proof of the
                    applicant’s eligibility to study in Australia.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </ContainerLayout>
        <ContainerLayout className="text-muted">
          <section className="mt-4">
            <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
              English Language Requirements
            </Heading>
            <p>
              International students whose prior education was conducted in a
              language other than English must provide documentary evidence to
              demonstrate their English language proficiency. The following
              tests are accepted to meet the English language requirements:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                English Language Testing System (IELTS- Academic): Overall score
                of 6.0 with no band score lower than 5.5;
              </li>
              <li>
                Test of English as a Foreign Language - Internet-Based Test
                (TOEFL-IBT): Minimum overall score of 60; or,
              </li>
              <li>
                Pearson Test of English (PTE- Academic): Minimum overall score
                of 55.
              </li>
            </ul>
            <p>
              Alternative English language tests may also be accepted to meet
              the English language requirements. For detailed requirements,
              including possible exemptions, please refer to the{" "}
              <Link
                className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
                href="#"
              >
                English Language Policy
              </Link>
              .
            </p>
          </section>
        </ContainerLayout>

        <ContainerLayout className="text-muted">
          <section className="mt-4">
            <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
              Advanced Standing (Recognition of Proper Learning)
            </Heading>
            <p>
              At Quantum Institute of Higher Education, we value and recognize
              your prior learning experiences! You are strongly encouraged to
              apply for Advanced Standing or, Credit for Prior Learning, based
              on your previous work or, life experience if you satisfy the
              following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Relevance to the learning outcomes at the unit and/or course
                level;
              </li>
              <li>
                Evidence of skills and knowledge that serve as pre-requisites
                for subsequent units; and,
              </li>
              <li>
                Fulfillment of requirements set by a relevant professional body
                (if applicable)
              </li>
            </ul>
            <p>
              For more information, you can click{" "}
              <Link
                className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
                href="#"
              >
                here
              </Link>{" "}
              for the related policy on Advanced Standing, Credit Transfer and
              Articulation Policy and, the{" "}
              <Link
                className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
                href="#"
              >
                form here
              </Link>
              .
            </p>
          </section>
        </ContainerLayout>

        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
