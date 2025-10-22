import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import pages from "@/data/pages";
import { slugs } from "@/extra/slugs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavDesktop = () => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-2 font-[500]">
        {pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.subPages || page.subHeadings ? (
              <div className="group/nav">
                <p className="flex items-center text-center leading-tight gap-0.5 cursor-pointer text-sm xl:text-base">
                  <span className="group-hover/nav:underline group-hover/nav:text-brand-primary transition-all">
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                  </span>

                  <i className="fi fi-rr-angle-small-up flex rotate-180 group-hover/nav:rotate-360 transition-all group-hover/nav:text-brand-primary"></i>
                </p>

                <div className="hidden group-hover/nav:block group-hover/nav:absolute left-1/2 -translate-x-1/2 right-0 w-full ">
                  <div className="bg-background shadow px-2 pt-6 pb-3 mt-6">
                    {page?.subPages ? (
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
                            <Image
                              src={"/header-kt.jpg"}
                              alt="Header Image"
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>
                      </ContainerLayout>
                    ) : (
                      page.subHeadings && (
                        <ContainerLayout>
                          <h3 className="mb-2 text-lg font-bold">
                            Undergraduate
                          </h3>

                          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 overflow-y-scroll">
                            <div className="lg:col-span-2">
                              <div className="grid lg:grid-cols-2 gap-y-8 gap-4 max-h-56 overflow-y-scroll">
                                {page.subHeadings.map((heading) => (
                                  <div key={heading.slug}>
                                    <Link
                                      key={page.slug}
                                      href={
                                        heading.pages.length > 1
                                          ? "#"
                                          : `/${slugs.programs}/${heading.slug}`
                                      }
                                    >
                                      <h3 className="mb-2 text-lg font-semibold">
                                        {heading.title}
                                      </h3>
                                    </Link>

                                    {heading.pages.length > 1 && (
                                      <div className="space-y-2 mt-2 ml-2">
                                        {heading.pages.map((page) => (
                                          <Link
                                            key={page.slug}
                                            href={`/${slugs.programs}/${page.slug}`}
                                            className="block font-medium hover:underline hover:text-brand-primary"
                                          >
                                            {page.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="w-full aspect-auto lg:aspect-square xl:aspect-[2/1.25] bg-brand-primary/25">
                              <Image
                                src={"/header-kt.jpg"}
                                alt="Header Image"
                                width={500}
                                height={500}
                              />
                            </div>
                          </div>
                        </ContainerLayout>
                      )
                    )}
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
        <Link href={`/${slugs.contact}`}>
          <Button
            className="font-medium flex-row-reverse text-sm"
            variant="secondary"
            icon="fi fi-rr-phone-flip scale-x-[-1]"
          >
            Get in Touch
          </Button>
        </Link>

        <Link href={`/${slugs.getStarted}`}>
          <Button className="font-medium text-sm">Get Started</Button>
        </Link>
      </div>
    </>
  );
};

export default NavDesktop;
