import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { slugs } from "@/extra/slugs";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";

export const metadata: Metadata = {
  title: "Fees and Payment",
  description:
    "Find all the essential information on tuition fees, payment methods, deadlines, and financial policies at Quantum Institute.",
  keywords: [
    "tuition fees",
    "payment methods",
    "Quantum Institute fees",
    "student payments",
    "financial policies",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/${slugs.feesAndPayment}`,
  },
  openGraph: {
    title: "Fees and Payment",
    description:
      "Find all the essential information on tuition fees, payment methods, deadlines, and financial policies at Quantum Institute.",
    url: `${SITE_URL}/${slugs.qiheStudents}/${slugs.feesAndPayment}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fees and Payment",
    description:
      "Find all the essential information on tuition fees, payment methods, deadlines, and financial policies at Quantum Institute.",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumbs />

      {/* <ContainerLayout className="text-muted mt-6">
        <Heading className="text-brand-primary-black mb-2" level={2}>
          Fees and Payment
        </Heading>
        <p>
          Stay informed about your tuition fees, payment deadlines, and
          available payment options. For assistance, contact our Accounts
          Officer or visit the{" "}
          <Link
            href={slugs.feesandPayments}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Fees and Payments
          </Link>{" "}
          section on the Student Platform.
        </p>

        <p>
          For more information on fees and refunds, please refer to our{" "}
          <Link
            href={slugs.feeRefundPolicy}
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Fee Refund Policy
          </Link>
          .
        </p>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div> */}
      <ContainerLayout className="text-muted mt-6">
        <Heading className="text-brand-primary-black mb-2" level={1}>
          Fees and Payments
        </Heading>
        <p>Details of Fees are below:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Tuition Fees: $10,000 per year</li>
          <li>Registration Fee: $200 (one-time)</li>
          <li>Library Fee: $50 per semester</li>
          <li>Lab Fee: $100 per course</li>
        </ul>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      
      </div>
    </>
  );
};

export default page;
