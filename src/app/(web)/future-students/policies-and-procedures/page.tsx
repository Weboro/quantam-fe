import PDFrenderCard from "@/components/cards/PdfRenderCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { PolicesAndProcedures } from "@/data/Policies_and_Procedures";

const PoliciesPage = () => {
  return (
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-gray-800 mt-6 mb-2" level={1}>
        Policies and Procedures
      </Heading>
      {/* <p className="text-gray-600 mb-6">
        Below are QIHE's policies and procedures that provides comprehensive
        information for everyone in regard to QIHE:
      </p> */}

      {PolicesAndProcedures.map((policy) => {
        return (
          <PDFrenderCard
            key={policy.id}
            icon={policy.icon}
            title={policy.title}
            url={policy.url}
            description={policy.description}
          />
        );
      })}
    </ContainerLayout>
  );
};

export default PoliciesPage;
