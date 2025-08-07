import IconCard from "@/components/cards/IconCard";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import pages from "@/data/pages";
import { slugs } from "@/extra/slugs";
import Link from "next/link";
import React from "react";

const page = () => {
  const items = pages.find((page) => page.slug === slugs.discoverQihe);

  return (
    <>
      <Breadcrumbs />

      <ContainerLayout>
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          Discover QIHE
        </Heading>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {items?.subPages?.map((item) => (
            <Link href={`${slugs.discoverQihe}/${item.slug}`} key={item.slug}>
              <IconCard icon={item.icon}>
                <Heading level={4} className="">
                  {item.name}
                </Heading>
              </IconCard>
            </Link>
          ))}
        </section>
      </ContainerLayout>

      <div className="my-40">
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
