import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="text-muted mt-6">
        <Heading className="text-brand-primary-black mb-2" level={2}>
          Fees and Payment
        </Heading>
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

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
