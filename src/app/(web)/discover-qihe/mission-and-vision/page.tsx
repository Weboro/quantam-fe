import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";

const page = () => {
  return (
    <>
      <ContainerLayout>
        <Heading className="text-brand-primary-black mt-6 mb-6" level={1}>
          Our Mission and Vision
        </Heading>
      </ContainerLayout>

      <ContainerLayout className=" grid md:grid-cols-2 gap-4">
        <div className="border border-muted/50 shadow rounded-xl p-3">
          <p className="w-22 aspect-square bg-brand-primary/10 rounded-full grid place-items-center">
            <i
              className={`fi fi-rr-bullseye-arrow flex text-5xl text-brand-primary`}
            />
          </p>

          <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
            Our Mission
          </Heading>
          <p className="text-muted">
            To provide quality higher education and learning experiences for
            students from various backgrounds.
          </p>
        </div>

        <div className="border border-muted/50 shadow rounded-xl p-3">
          <p className="w-22 aspect-square bg-brand-primary/10 rounded-full grid place-items-center">
            <i
              className={`fi fi-rr-binoculars flex text-5xl text-brand-primary`}
            />
          </p>

          <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
            Our Vision
          </Heading>
          <p className="text-muted">
            To enhance students’ lives through higher education, providing them
            with the opportunities to pursue a bright and promising future in
            both their personal lives and careers.
          </p>
        </div>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
