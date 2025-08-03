import Breadcrumbs from "@/components/global/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="text-muted mt-6">
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          Orientation and Pre-Arrival Guide
        </Heading>
        <p>
          At Quantum Institute of Higher Education (QIHE), we aim to ensure that
          every student feels prepared, welcomed, and confident as they begin
          their academic journey with us.
        </p>

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
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

        <Heading className="text-gray-800 mt-6 mb-2" level={3}>
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

        <p className="mt-6 mb-2 font-semibold">
          We look forward to welcoming you to QIHE!
        </p>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
