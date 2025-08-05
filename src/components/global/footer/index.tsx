import ContainerLayout from "@/components/layouts/ContainerLayout";
import { slugs } from "@/extra/slugs";
import pages from "@/data/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterBottom from "./FooterBottom";
import FooterLinksSection from "./FooterLinksSection";

const findSection = (slug: string) => {
  return pages.find((el) => el.slug === slug);
};

const Footer = () => {
  const programData = findSection(slugs.programs);
  const futureStudents = findSection(slugs.futureStudents);
  const discoverQihe = findSection(slugs.discoverQihe);
  const qiheStudents = findSection(slugs.qiheStudents);

  const footerSections = [
    { title: "Programs", data: programData },
    { title: "Future Students", data: futureStudents },
    { title: "QIHE Students", data: qiheStudents },
    { title: "Discover QIHE", data: discoverQihe },
  ];

  return (
    <footer className="mt-24">
      <div className="bg-powder-blue pt-16 pb-12 space-y-4">
        <ContainerLayout className="grid md:grid-cols-2 items-center">
          <Link className="h-24 lg:h-32 aspect-[7/3] mb-8 md:mb-0" href={"/"}>
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="Logo Image for Header"
              className="w-full h-full object-contain"
            />
          </Link>

          <div className="flex flex-col md:items-end text-text font-[250  ]">
            <p>CRICOS Provider Code 04082E</p>
            <p>TEQSA Provider Number PRV14305</p>
            <p>ABN 91 612 507 141</p>
          </div>
        </ContainerLayout>

        <br />

        <ContainerLayout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FooterLinksSection
            title={"Information"}
            baseSlug={""}
            pages={[
              ...pages,
              {
                title: "Contact",
                name: "Contact QHIE",
                slug: slugs.contact,
              },
            ]}
          />

          {footerSections.map(
            ({ title, data }) =>
              data && (
                <FooterLinksSection
                  key={title}
                  title={title}
                  baseSlug={data.slug}
                  pages={data.subPages}
                />
              )
          )}
        </ContainerLayout>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
