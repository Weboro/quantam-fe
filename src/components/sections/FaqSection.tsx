import faq from "@/data/faq";
import ContainerLayout from "../layouts/ContainerLayout";
import Heading from "../ui/Heading";
import Accordion from "../accordion";
import NewsLetterSection from "./NewsLetterSection";

const FaqSection: React.FC = () => {
  return (
    <ContainerLayout>
      <Heading level={2} className="w-fit mx-auto text-center">
        Frequently Asked Questions
      </Heading>
      <p className="text-muted max-w-xl text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a optio
        praesentium assumenda consectetur ipsa ut molestiae, debitis voluptas?
      </p>

      <br />

      <Accordion data={faq} />
      <br />
    </ContainerLayout>
  );
};

export default FaqSection;
