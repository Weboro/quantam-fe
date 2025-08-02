import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import pages from "@/data/pages";
import Link from "next/link";
import React from "react";

const NavDesktop = () => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-5 font-[500]">
        {pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.subPages ? (
              <div className="group/nav">
                <p className="flex items-center gap-1 cursor-pointer">
                  <span className="group-hover/nav:underline group-hover/nav:text-brand-primary transition-all">
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                  </span>

                  <i className="fi fi-rr-angle-small-up flex rotate-180 group-hover/nav:rotate-360 transition-all group-hover/nav:text-brand-primary"></i>
                </p>

                <div className="hidden group-hover/nav:block group-hover/nav:absolute left-1/2 -translate-x-1/2 right-0 w-full ">
                  <div className="bg-surface-1 shadow px-2 pt-6 pb-3 mt-6">
                    <ContainerLayout>
                      <div className="mt-2 pb-6 space-y-1">
                        <h3 className="text-3xl font-bold text-brand-primary mb-3">
                          <Link href={`/${page.slug}`}>{page.title}</Link>
                        </h3>

                        <div className="xl:grid xl:grid-cols-2 gap-3">
                          {page.subPages.map((subPage) => (
                            <Link
                              href={`/${page.slug}/${subPage.slug}`}
                              key={subPage.slug}
                              className="block mt-3 xl:mt-0 font-semibold text-gray-700 hover:text-brand-blue-3 transition-all"
                            >
                              {subPage.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </ContainerLayout>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={i}
                className="hover:underline hover:text-brand-primary transition-all"
                href={`/${page.slug}`}
              >
                {page.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-2">
        <Link href={"/contact"}>
          <Button
            className="font-medium flex-row-reverse"
            variant="secondary"
            icon="fi fi-rr-phone-flip scale-x-[-1]"
          >
            Get in Touch
          </Button>
        </Link>

        <Link href={"/apply"}>
          <Button className="font-medium">Get Started</Button>
        </Link>
      </div>
    </>
  );
};

export default NavDesktop;
