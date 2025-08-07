import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const generateMetadata = (): Metadata => ({
  title: `Mission and Vision`,
  description:
    "Explore Quantum Institute’s mission and vision statements that reflect our dedication to excellence, innovation, and student success.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.missionAndVision}`,
  },
  openGraph: {
    title: `Mission and Vision`,
    description:
      "Explore Quantum Institute’s mission and vision statements that reflect our dedication to excellence, innovation, and student success.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.missionAndVision}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Mission and Vision`,
    description:
      "Explore Quantum Institute’s mission and vision statements that reflect our dedication to excellence, innovation, and student success.",
  },
});

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
            QIHE provides an exceptional higher education experience for
            students from all walks of life. We achieve this by fostering a
            dynamic and creative learning environment where education is an
            active and lifelong journey. Our mission is to prepare students to
            make meaningful contributions to their chosen professions and to
            society.
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
            At QIHE, we aspire to transform students lives and open doors to
            professional opportunities through the delivery of quality higher
            education. Our vision is to create an environment that fosters
            intellectual curiosity, critical thinking, and the cultivation of
            practical skills and humane values, empowering students to thrive in
            their personal and professional lives.
          </p>
        </div>
      </ContainerLayout>
    </>
  );
};

export default page;
