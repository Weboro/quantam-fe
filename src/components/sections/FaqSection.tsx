import faq from "@/data/faq";
import ContainerLayout from "../layouts/ContainerLayout";
import Heading from "../ui/Heading";
import Accordion from "../accordion";

const FaqSection: React.FC = () => {
  return (
    <ContainerLayout>
      <Heading level={2} className="w-fit mx-auto text-center">
        Got Questions about Studying at QIHE ?
      </Heading>
      <p className="text-muted max-w-xl text-center mx-auto">
        Find answers about admissions, programs, support services, and student
        visas to help you succeed.
      </p>
      <br />
      <Accordion data={faq} />
    </ContainerLayout>
  );
};

export default FaqSection;
