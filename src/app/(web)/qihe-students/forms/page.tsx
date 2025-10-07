import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { formsList } from "@/data/form";
import PDFrenderCard from "@/components/cards/PdfRenderCard";

const FormsPage = () => {
  return (
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-brand-primary-black mb-6" level={1}>
        Forms
      </Heading>

      {formsList.map((form, index) => (
        <PDFrenderCard key={index} form={form} />
      ))}
    </ContainerLayout>
  );
};

export default FormsPage;
