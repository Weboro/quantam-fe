import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import pages from "@/data/pages";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  const items = pages.find((page) => page.slug === siteLinks.discoverQihe);

  return (
    <>
      <Breadcrumbs />

      <ContainerLayout>
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          QIHE Students
        </Heading>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {items?.subPages?.map((item) => (
            <div
              key={item.slug}
              className="border border-muted/50 shadow rounded-xl p-3 group/card"
            >
              <Link href={`${siteLinks.discoverQihe}/${item.slug}`}>
                <p className="w-16 aspect-square bg-brand-primary/10 group-hover/card:bg-brand-blue-3/25 transition-all rounded-full grid place-items-center mb-3">
                  <i
                    className={`${item.icon} flex text-3xl group-hover/card:scale-105 transition-all text-brand-primary`}
                  />
                </p>
                <Heading level={4} className="">
                  {item.name}
                </Heading>
              </Link>
            </div>
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
