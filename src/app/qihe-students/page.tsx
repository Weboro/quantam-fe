import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-4">
        <Heading level={1}>QIHE Information</Heading>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="mt-4">
        <Heading level={2}>Fees and Payment</Heading>
        <p>
          Stay informed about your tuition fees, payment deadlines, and
          available payment options. For assistance, contact our Accounts
          Officer or visit the{" "}
          <Link
            href={siteLinks.feesandPayments}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Fees and Payments
          </Link>{" "}
          section on the Student Platform.
        </p>

        <p>
          For more information on fees and refunds, please refer to our{" "}
          <Link
            href={siteLinks.feeRefundPolicy}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Fee Refund Policy
          </Link>
          .
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout>
        <Heading level={2} className="">
          Library
        </Heading>
        <p>
          Access a wide range of academic resources, including textbooks,
          journals, and e-resources, through our on-campus library and online
          portal. The library staff is here to support your learning needs.
        </p>
        <p className="mt-2">
          <Link
            href={siteLinks.eLibrary}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Access the E-Library
          </Link>
        </p>
        <p>
          For more details, see our{" "}
          <Link
            href={siteLinks.libraryFacilitiesPolicy}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            ICT Services and Library Facilities Policy
          </Link>
          .
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout>
        <Heading level={2} className="">
          Important Dates
        </Heading>
        <p>
          Keep track of key academic dates, including semester start and end
          dates, census dates, and exam periods.
        </p>
        <p className="mt-2">
          <Link
            href="/key-dates"
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Visit Key Dates page
          </Link>
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout>
        <Heading level={2} className="">
          Student Platform
        </Heading>
        <p>
          The QIHE Student Platform is your hub for managing your studies.
          Access course materials, submit assignments, view grades, and stay
          updated with important announcements.
        </p>

        <p className="mt-2">
          <Link
            href={siteLinks.studentPlatformLogin}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Login to the Student Platform
          </Link>
        </p>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout>
        <Heading level={2} className="">
          Forms
        </Heading>
        <p>Access important student forms directly below:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">TODO: List Forms</ul>
      </ContainerLayout>
    </>
  );
};

export default page;
