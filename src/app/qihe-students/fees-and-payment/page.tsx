import React from "react";
import { Metadata } from "next";
//
import { slugs } from "@/extra/slugs";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

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
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-brand-primary-black mb-2" level={1}>
        Fees and Payments
      </Heading>

      <p>Details of Fees are TBA:</p>
      {/* <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Tuition Fees: $10,000 per year</li>
        <li>Registration Fee: $200 (one-time)</li>
        <li>Library Fee: $50 per semester</li>
        <li>Lab Fee: $100 per course</li>
      </ul> */}
    </ContainerLayout>
  );
};

export default page;
