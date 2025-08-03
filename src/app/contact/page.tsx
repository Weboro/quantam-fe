import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { contact } from "@/data/contact";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-4">
        <Heading level={1}>Contact QIHE</Heading>

        <p className="text-muted max-w-2xl mt-2 mb-4">
          Have questions or need assistance? We're here to help—reach out to the
          QIHE team through the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {contact.map((item, i) => (
            <div
              key={i}
              className="border border-muted/50 shadow rounded-xl p-3 group/card"
            >
              <p className="w-16 aspect-square bg-brand-primary/10 group-hover/card:bg-brand-blue-3/25 transition-all rounded-full grid place-items-center mb-3">
                <i
                  className={`${item.icon} flex text-3xl group-hover/card:scale-105 transition-all text-brand-primary`}
                />
              </p>

              <Heading level={3} className="mt-3 -mb-0.5">
                {item.title}
              </Heading>

              {item.email && (
                <Link
                  className="text-muted underline hover:text-brand-primary transition-all"
                  href={`mailto:${item.email}`}
                  target="_blank"
                >
                  {item.email}
                </Link>
              )}

              {item.phone && (
                <Link
                  className="text-muted underline hover:text-brand-primary transition-all"
                  href={`tel:${item.phone}`}
                  target="_blank"
                >
                  {item.phone}
                </Link>
              )}

              {item.url && (
                <Link
                  className="text-muted underline hover:text-brand-primary transition-all"
                  href={`${item.url}`}
                  target="_blank"
                >
                  {item.url}
                </Link>
              )}
            </div>
          ))}
        </div>
      </ContainerLayout>

      <div className="mt-22 space-y-22">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default ContactPage;
