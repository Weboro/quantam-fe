import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const metadata: Metadata = {
  title: `Admission Requirements`,
  description:
    "Understand the admission requirements for prospective students at Quantum Institute to prepare your application successfully.",
  keywords: [
    "admission requirements",
    "Quantum Institute admissions",
    "student eligibility",
    "entry criteria",
    "application requirements",
    "higher education admission",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}/${slugs.admissionRequirements}`,
  },
  openGraph: {
    title: `Admission Requirements`,
    description:
      "Understand the admission requirements for prospective students at Quantum Institute to prepare your application successfully.",
    url: `${SITE_URL}/${slugs.futureStudents}/${slugs.admissionRequirements}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Admission Requirements`,
    description:
      "Understand the admission requirements for prospective students at Quantum Institute to prepare your application successfully.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Admission Requirements</h1>

      <h2>General Admission Requirements</h2>

      <section>
        <h3>Domestic Applicants</h3>
        <p>
          For any undergraduate courses, you must satisfy at least one of the
          following entry requirements:
        </p>
        <ul>
          <li>
            Hold a Higher Secondary Certificate (Year 12) or have completed an
            ATAR with a minimum score of 55;
          </li>
          <li>
            Successful completion of any of the following:
            <ul>
              <li>Diploma AQF Level 5;</li>
              <li>Tertiary Preparation Program; or</li>
              <li>
                An equivalent qualification from an accredited Australian higher
                education institution such as Universities, TAFE Institutes, or
                Government-approved Registered Training Organisations (RTOs).
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>International Applicants</h3>
        <p>
          For any undergraduate courses, you must satisfy all of the following
          entry requirements:
        </p>
        <ul>
          <li>
            Successful completion of one of the following:
            <ul>
              <li>
                Year 12 of the Australian Senior Secondary Certificate of
                Education completion;
              </li>
              <li>
                12 years of formal studies recognised by the National Office for
                Overseas Skills Recognition (NOOSR);
              </li>
              <li>
                Certificate IV or a higher qualification from a NOOSR-accredited
                education provider, ideally aligned with the chosen program; or
              </li>
              <li>
                International Baccalaureate Diploma with a minimum score of 24
                points.
              </li>
            </ul>
          </li>
          <li>
            If English is not the applicant’s first language, the English
            Language Requirements outlined below must be fully satisfied;
          </li>
          <li>
            After meeting the academic and English language requirements,
            applicants must also satisfy the following criteria:
            <ul>
              <li>
                Compliance with the Australian Department of Home Affairs
                Genuine Temporary Entrant (GTE) verification process, including
                completion of the QIHE GTE Form subject for assessment by QIHE
                staff.
              </li>
              <li>Payment of tuition fees upon successful GTE verification.</li>
              <li>Issuance of the Confirmation of Enrolment (CoE) by QIHE.</li>
              <li>
                Provision of valid Student Visa as documentary proof of the
                applicant’s eligibility to study in Australia.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>English Language Requirements</h2>
        <p>
          International students whose prior education was conducted in a
          language other than English must provide documentary evidence to
          demonstrate their English language proficiency. The following tests
          are accepted to meet the English language requirements:
        </p>
        <ul>
          <li>
            English Language Testing System (IELTS Academic): Overall score of
            6.0 with no band score lower than 5.5;
          </li>
          <li>
            Test of English as a Foreign Language - Internet-Based Test (TOEFL
            iBT): Minimum overall score of 60;
          </li>
          <li>
            Pearson Test of English (PTE Academic): Minimum overall score of 55.
          </li>
        </ul>
        <p>
          Alternative English language tests may also be accepted to meet the
          English language requirements. For detailed requirements, including
          possible exemptions, please refer to the{" "}
          <a
            href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=English+Language+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
            target="main"
          >
            English Language Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Advanced Standing (Recognition of Prior Learning)</h2>
        <p>
          At Quantum Institute of Higher Education, we value and recognise your
          prior learning experiences! You are strongly encouraged to apply for
          Advanced Standing or Credit for Prior Learning, based on your previous
          work or life experience if you satisfy the following criteria:
        </p>
        <ul>
          <li>
            Relevance to the learning outcomes at the unit and/or course level;
          </li>
          <li>
            Evidence of skills and knowledge that serve as pre-requisites for
            subsequent units;
          </li>
          <li>
            Fulfillment of requirements set by a relevant professional body (if
            applicable).
          </li>
        </ul>
        <p>
          For full details, see the{" "}
          <a href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?dl=0&preview=Advanced+Standing%2C+Credit+Transfer+and+Articulation+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1">
            Advanced Standing, Credit Transfer and Articulation Policy
          </a>
          .
        </p>
      </section>
    </ContainerLayout>
  );
};

export default page;
