import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Orientation & Pre-Arrival Guide`,
  description:
    "Prepare for your journey at Quantum Institute with our comprehensive orientation and pre-arrival guide.",
  keywords: [
    "orientation guide",
    "pre-arrival information",
    "Quantum Institute orientation",
    "student preparation",
    "campus introduction",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}/${slugs.orientationAndPreArrivalGuide}`,
  },
  openGraph: {
    title: `Orientation & Pre-Arrival Guide`,
    description:
      "Prepare for your journey at Quantum Institute with our comprehensive orientation and pre-arrival guide.",
    url: `${SITE_URL}/${slugs.futureStudents}/${slugs.orientationAndPreArrivalGuide}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Orientation & Pre-Arrival Guide`,
    description:
      "Prepare for your journey at Quantum Institute with our comprehensive orientation and pre-arrival guide.",
  },
};

const page = () => {
  return (
    <div className="rich_text_container">
      <ContainerLayout>
        <h1>Orientation and Pre-Arrival Guide</h1>
        <p>
          At Quantum Institute of Higher Education (QIHE), we aim to ensure that
          every student feels prepared, welcomed, and confident as they begin
          their academic journey with us.
        </p>
      </ContainerLayout>

      <ContainerLayout>
        <h2>Pre-Arrival Guide</h2>
        <p>
          Before arriving at QIHE, students will receive a Pre-Arrival Guide
          with important information to help them transition smoothly to life at
          the Institute and in Australia. This guide includes:
        </p>
        <ul>
          <li>
            Practical advice on preparing for studies and living in Australia.
          </li>
          <li>
            Information on visa requirements, accommodation options, and
            transport.
          </li>
          <li>
            An overview of campus facilities and available support services.
          </li>
        </ul>
        <>
          <a
            target="main"
            href={
              "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AF-HwH0fnWWbpNminvyKYTI/Student%20Information%20Materials?e=1&preview=QIHE+Pre-Arrival+Guide.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
            }
            rel="noopener noreferrer"
          >
            {" "}
            <Button>Pre-Arrival Guide</Button>
          </a>
        </>
      </ContainerLayout>

      <ContainerLayout>
        <h2>Student Orientation Program</h2>
        <p>
          The Student Orientation Program is an integral part of your journey at
          QIHE, designed to help you settle into campus life and understand what
          to expect academically and socially. During the orientation, students
          will:
        </p>
        <ul>
          <li>
            <strong>Explore the Campus:</strong> Learn the layout of classrooms,
            student areas, and key administrative offices.
          </li>
          <li>
            <strong>Learn About Policies:</strong> Receive essential information
            on attendance requirements, refund procedures, and emergency
            protocols.
          </li>
          <li>
            <strong>Receive the Student Handbook:</strong> A comprehensive
            resource with all the details you need, including visa and housing
            information for international students and support services for all.
          </li>
          <li>
            <strong>Discover Support Services:</strong> Gain insights into how
            to access academic, personal, and career support services available
            at QIHE.
          </li>
        </ul>
        <p>
          Our Student Services Team, led by the Student Services Manager and
          supported by the Student Services Officer, will guide you through this
          program to ensure you feel fully informed and supported from day one.
        </p>
      </ContainerLayout>
    </div>
  );
};

export default page;
