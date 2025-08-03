import Breadcrumbs from "@/components/global/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="text-muted mt-6">
        <Heading className="text-gray-800 mt-6 mb-2" level={1}>
          Policies and Procedures
        </Heading>
        <p>
          Below are QIHE’s policies and procedures that provides comprehensive
          information for everyone in regard to QIHE:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href="#"
            >
              [Link to Policy 1]
            </Link>
          </li>
          <li>
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href="#"
            >
              [Link to Policy 2]
            </Link>
          </li>
          <li>
            <Link
              className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
              href="#"
            >
              [Link to Policy 3]
            </Link>
          </li>
        </ul>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
