import PDFrenderCard from "@/components/cards/PdfRenderCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { StudentInformationMaterial } from "@/data/pdf/student-information-material";
import React from "react";

export default function page() {
  return (
    <ContainerLayout className="mt-6 text-muted">
      {StudentInformationMaterial.map((item) => (
        <PDFrenderCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </ContainerLayout>
  );
}
