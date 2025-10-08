import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { FeesAndPayments } from "@/data/pdf/Fees_and_Payments";
import PDFrenderCard from "@/components/cards/PdfRenderCard";

const page = () => {
  return (
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-brand-primary-black mb-2" level={1}>
        Fees and Payments
      </Heading>

      {FeesAndPayments.map((fee) => {
        return (
          <PDFrenderCard
            key={fee.id}
            icon={fee.icon}
            title={fee.title}
            url={fee.url}
            description={fee.description}
          />
        );
      })}
    </ContainerLayout>
  );
};

export default page;
