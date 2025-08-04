import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import pages from "@/data/pages";
import Link from "next/link";
import React from "react";

const NavDesktop = () => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-2 lg:gap-4 font-[500]">
        {pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.subPages ? (
              <div className="group/nav">
                <p className="flex items-center text-center leading-tight gap-0.5 cursor-pointer text-sm xl:text-base">
                  <span className="group-hover/nav:underline group-hover/nav:text-brand-primary transition-all">
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                  </span>

                  <i className="fi fi-rr-angle-small-up flex rotate-180 group-hover/nav:rotate-360 transition-all group-hover/nav:text-brand-primary"></i>
                </p>

                <div className="hidden group-hover/nav:block group-hover/nav:absolute left-1/2 -translate-x-1/2 right-0 w-full ">
                  <div className="bg-background shadow px-2 pt-6 pb-3 mt-6">
                    <ContainerLayout>
                      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                        <div className="lg:col-span-2">
                          <div className="lg:grid lg:grid-cols-2 gap-1">
                            {page.subPages.map((subPage) => (
                              <Link
                                href={`/${page.slug}/${subPage.slug}`}
                                key={subPage.slug}
                                className="block font-medium hover:underline py-1"
                              >
                                {subPage.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="w-full aspect-auto lg:aspect-square xl:aspect-[2/1.25] bg-brand-primary/25">
                          TBD: BENTO GRID
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

      <div className="hidden xl:flex items-center gap-2">
        <Link href={"/contact"}>
          <Button
            className="font-medium flex-row-reverse text-sm"
            variant="secondary"
            icon="fi fi-rr-phone-flip scale-x-[-1]"
          >
            Get in Touch
          </Button>
        </Link>

        <Link href={"/apply"}>
          <Button className="font-medium text-sm">Get Started</Button>
        </Link>
      </div>
    </>
  );
};

export default NavDesktop;
