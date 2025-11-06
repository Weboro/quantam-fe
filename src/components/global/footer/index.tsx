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
    {
      title: "Discover QIHE",
      data: {
        ...discoverQihe,
        subPages: discoverQihe?.subPages?.filter((el) => el.quickLink !== true),
      },
    },
    {
      title: "Quick Links",
      data: {
        slug: slugs.discoverQihe, // base prefix
        subPages: [
          {
            slug: slugs.esosFramework,
            name: "ESOS Framework",
            icon: "fi fi-rr-file-contract",
            quickLink: true,
          },
          {
            slug: slugs.privacyPolicy,
            name: "Privacy Policy",
            icon: "fi fi-rr-shield-check",
            quickLink: true,
          },
          {
            slug: slugs.copyright,
            name: "Copyright",
            icon: "fi fi-rr-copyright",
            quickLink: true,
          },
          {
            slug: slugs.careersAtQihe,
            name: "Careers at QIHE",
            icon: "fi fi-rr-briefcase",
            quickLink: true,
          },
        ],
      },
    },
  ];

  return (
    <footer className="mt-32">
      <div className="bg-powder-blue pt-16 pb-12 space-y-4">
        <ContainerLayout className="grid items-center justify-center">
          <Link className="h-24 lg:h-32 aspect-[7/3] mb-8 md:mb-0" href={"/"}>
            <Image
              src={"/quantam-horizontal.svg"}
              width={200}
              height={200}
              alt="Logo Image for Header"
              className="w-full h-full object-contain"
            />
          </Link>
        </ContainerLayout>

        <br />

        <ContainerLayout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <FooterLinksSection
            title={"Information"}
            baseSlug={""}
            pages={[
              ...pages,
              {
                title: "Contact",
                name: "Contact QIHE",
                slug: slugs.contact,
              },
              {
                title: "Campus Information",
                name: "Campus Information",
                slug: slugs.campusInformation,
              },
            ]}
          />

          {footerSections.map(({ title, data }) =>
            data ? (
              <FooterLinksSection
                key={title}
                title={title}
                baseSlug={data.slug}
                pages={data.subPages}
              />
            ) : null
          )}
        </ContainerLayout>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
