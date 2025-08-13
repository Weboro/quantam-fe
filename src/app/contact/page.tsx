import IconCard from "@/components/cards/IconCard";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { contact } from "@/data/contact";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const generateMetadata = (): Metadata => ({
  title: "Contact Us",
  description:
    "Get in touch with Quantum Institute. Find our contact details, office hours, and how to reach our support team.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.contact}`,
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Quantum Institute. Find our contact details, office hours, and how to reach our support team.",
    url: `${SITE_URL}/${slugs.contact}`,
    siteName: "Quantum Institute of Higher Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Get in touch with Quantum Institute. Find our contact details, office hours, and how to reach our support team.",
  },
});

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-8">
        <Heading level={1}>Contact QIHE</Heading>

        <p className="text-muted max-w-2xl mt-2 mb-4">
          Have questions or need assistance? We are here to help—reach out to
          the QIHE team through the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {contact.map((item, i) => (
            <IconCard key={i} icon={item.icon}>
              <Heading level={4} className="">
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
            </IconCard>
          ))}
        </div>
      </ContainerLayout>

      <div className="mt-32 space-y-32">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default ContactPage;
