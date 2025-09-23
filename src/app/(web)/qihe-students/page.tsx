import Link from "next/link";
import React from "react";
//
import pages from "@/data/pages";
import { slugs } from "@/extra/slugs";
//
import IconCard from "@/components/cards/IconCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import FadeUp from "@/components/animations/FadeUp";

const page = () => {
  const items = pages.find((page) => page.slug === slugs.qiheStudents);

  return (
    <ContainerLayout>
      <Heading className="text-gray-800 mt-6 mb-2" level={1}>
        QIHE Students
      </Heading>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
        {items?.subPages?.map((item, index) => (
          <FadeUp delay={index * 0.1} key={item.slug}>
            <Link href={`${slugs.qiheStudents}/${item.slug}`}>
              <IconCard icon={item.icon}>
                <Heading level={4}>{item.name}</Heading>
              </IconCard>
            </Link>
          </FadeUp>
        ))}
      </section>
    </ContainerLayout>
  );
};

export default page;
