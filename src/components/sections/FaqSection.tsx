import faq from "@/data/faq";
import ContainerLayout from "../layouts/ContainerLayout";
import Heading from "../ui/Heading";
import Accordion from "../accordion";

const FaqSection: React.FC = () => {
  return (
    <ContainerLayout>
      <Heading level={2} className="w-fit mx-auto text-center">
        Frequently Asked Questions
      </Heading>

      <p className="text-muted max-w-xl text-center mx-auto">
        Find answers to common questions about admissions, courses, support
        services, and life at QIHE.
      </p>

      <br />

      <Accordion data={faq} />
    </ContainerLayout>
  );
};

export default FaqSection;
