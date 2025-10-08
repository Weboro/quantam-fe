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

      {formsList.map((form) => {
        return (
          <PDFrenderCard
            key={form.id}
            icon={form.icon}
            title={form.title}
            url={form.url}
            description={form.description}
          />
        );
      })}
    </ContainerLayout>
  );
};

export default FormsPage;
