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
              <div className="group">
                <p className="flex items-center gap-1 cursor-pointer">
                  <span className="group-hover:underline group-hover:text-brand-primary transition-all">
                    {page.name}
                  </span>

                  <i className="fi fi-rr-angle-small-up flex rotate-180 group-hover:rotate-360 transition-all group-hover:text-brand-primary"></i>
                </p>

                <div className="hidden group-hover:block group-hover:absolute left-1/2 -translate-x-1/2 right-0 w-full ">
                  <div className="bg-background shadow px-2 pt-6 pb-3 mt-6">
                    <ContainerLayout>
                      <div className="mt-2 space-y-1">
                        <h3 className="text-3xl font-bold text-brand-primary mb-3">
                          {page.title}
                        </h3>

                        {page.subPages.map((subPage) => (
                          <Link
                            href={`/${page.slug}/${subPage.slug}`}
                            key={subPage.slug}
                            className="flex items-center gap-3 py-2 w-fit"
                          >
                            <i
                              className={`${subPage.icon} w-8 h-8 bg-brand-blue-3 text-background rounded-lg flex items-center justify-center text-sm flex-shrink-0`}
                            />
                            <span className="font-semibold text-gray-700 hover:text-brand-blue-3 transition-colors">
                              {subPage.name}
                            </span>
                          </Link>
                        ))}
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
        <Button variant="secondary">Get Started</Button>
        <Button>Get Started</Button>
      </div>
    </>
  );
};

export default NavDesktop;
