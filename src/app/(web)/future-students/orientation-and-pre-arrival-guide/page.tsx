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
    <div className="space-y-20">
      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          Orientation and Pre-Arrival Guide
        </Heading>
        <p>
          At Quantum Institute of Higher Education (QIHE), we aim to ensure that
          every student feels prepared, welcomed, and confident as they begin
          their academic journey with us.
        </p>
      </ContainerLayout>

      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
          Pre-Arrival Guide
        </Heading>
        <p>
          Before arriving at QIHE, students will receive a Pre-Arrival Guide
          with important information to help them transition smoothly to life at
          the Institute and in Australia. This guide includes:
        </p>
        <ul className="list-disc pl-6 space-y-1">
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
      </ContainerLayout>

      <ContainerLayout className="text-muted">
        <Heading className="text-gray-800 mt-6 mb-2" level={2}>
          Student Orientation Program
        </Heading>
        <p>
          The Student Orientation Program is an integral part of your journey at
          QIHE, designed to help you settle into campus life and understand what
          to expect academically and socially. During the orientation, students
          will:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong className="text-gray-800">Explore the Campus:</strong> Learn
            the layout of classrooms, student areas, and key administrative
            offices.
          </li>
          <li>
            <strong className="text-gray-800">Learn About Policies:</strong>{" "}
            Receive essential information on attendance requirements, refund
            procedures, and emergency protocols.
          </li>
          <li>
            <strong className="text-gray-800">
              Receive the Student Handbook:
            </strong>{" "}
            A comprehensive resource with all the details you need, including
            visa and housing information for international students and support
            services for all.
          </li>
          <li>
            <strong className="text-gray-800">
              Discover Support Services:
            </strong>{" "}
            Gain insights into how to access academic, personal, and career
            support services available at QIHE.
          </li>
        </ul>
        <p>
          Our Student Services Team, led by the Student Services Manager and
          supported by the Student Services Officer, will guide you through this
          program to ensure you feel fully informed and supported from day one.
        </p>
        <>
          <a
            target="main"
            href={
              "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AF-HwH0fnWWbpNminvyKYTI/Student%20Information%20Materials?e=1&preview=QIHE+Pre-Arrival+Guide.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
            }
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {" "}
            <Button className="mt-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Pre-Arrival Guide
            </Button>
          </a>
        </>
      </ContainerLayout>
    </div>
  );
};

export default page;
