import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
//
import Link from "next/link";
import { Metadata } from "next";
//
import { slugs } from "@/extra/slugs";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";

export const metadata: Metadata = {
  title: `Admissions`,
  description:
    "Learn about the admissions process at Quantum Institute and the steps you need to take to enroll successfully.",
  keywords: [
    "admissions process",
    "Quantum Institute enrollment",
    "application steps",
    "student registration",
    "higher education admissions",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}/${slugs.admissions}`,
  },
  openGraph: {
    title: `Admissions`,
    description:
      "Learn about the admissions process at Quantum Institute and the steps you need to take to enroll successfully.",
    url: `${SITE_URL}/${slugs.futureStudents}/${slugs.admissions}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Admissions`,
    description:
      "Learn about the admissions process at Quantum Institute and the steps you need to take to enroll successfully.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>Admissions</h1>

      <section>
        <h3>Step 1: Admission Eligibility</h3>
        <p>
          Check your eligibility through Quantum’s{" "}
          <Link href={`/${slugs.futureStudents}/admission-requirements`}>
            Admission Requirements
          </Link>{" "}
          for undergraduate courses.
        </p>
      </section>

      <section>
        <h3>Step 2: Admission Application Form</h3>
        <p>
          To allow ample time to arrange your respective Australian Visa, we
          encourage you to apply at the earliest. You can find the{" "}
          <Link href={slugs.onlineApplication}>
            Quantum’s Online Application Form
          </Link>{" "}
          or apply through an education agent. Please ensure your application is
          complete, as missing information may delay processing.
        </p>
      </section>

      <section>
        <h3>Step 3: Supplementary Documents</h3>
        <p>
          The below supporting documents must be certified by an accredited
          body:
        </p>
        <ul>
          <li>Academic transcripts and testamurs/completion certificates;</li>
          <li>Proof of English language proficiency;</li>
          <li>Passport copy;</li>
          <li>
            Official translations of documents not issued in English.
            Translators in Australia must be certified by the National
            Accreditation Authority for Translators and Interpreters (NAATI);
          </li>
          <li>
            Additional documents required for Advanced Standing application (if
            applicable); and,
          </li>
          <li>Other documents as requested by the Institution.</li>
        </ul>
      </section>

      <section>
        <h3>Step 4: Admission Outcome</h3>
        <p>
          After successful completion of the outlined criteria, the application
          outcome is typically released within five working days and may include
          one of the following:
        </p>
        <ul>
          <li>A Letter of Offer</li>
          <li>
            A Conditional Letter of Offer, outlining any conditions that must be
            satisfied prior to issuance of the full offer;{" "}
          </li>
          <li>
            A request for additional documentation needed to complete the
            decision process
          </li>
          <li>A notification of application rejection</li>
        </ul>
      </section>

      <section>
        <h3>Step 5: Acceptance of Offer</h3>
        <p>The Confirmation of Enrolment (CoE) will be issued when:</p>
        <ul>
          <li>Entry admission requirements are satisfied;</li>
          <li>The Letter of Offer is signed and dated;</li>
          <li>
            All required sections of the GTE form are completed, meeting both
            Genuine Student (GS) and Genuine Temporary Entrant (GTE)
            requirements;
          </li>
          <li>The Financial Declaration Form is completed; and,</li>
          <li>Proof of payment for fees is provided</li>
        </ul>
      </section>

      <section>
        <h3>Step 6: Student Orientation and Enrolment</h3>

        <p>
          We warmly welcome you to the Quantum Institute of Higher Education!
        </p>
        <p>
          We’re thrilled to have you with us! You’re now ready to begin your
          journey as a Quantum student. Enroll in your classes, connect with
          classmates, and dive into campus life.
        </p>
      </section>

      <section>
        <p>
          For more details, please refer to the{" "}
          <Link
            target="main"
            href={
              "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Admission+Policy+and+Procedure.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
            }
          >
            Admission Policy and Procedure
          </Link>
        </p>
      </section>
    </ContainerLayout>
  );
};

export default page;
