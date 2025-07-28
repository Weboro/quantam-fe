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
              <div className=" group">
                <p className="flex items-center gap-1 cursor-pointer">
                  <span>{page.name}</span>

                  <i className="fi fi-br-angle-small-up flex rotate-180 group-hover:rotate-360 transition-all"></i>
                </p>
                <div className="hidden group-hover:block group-hover:absolute left-1/2 -translate-x-1/2 right-0 w-full ">
                  <div className="bg-background shadow px-2 pt-6 pb-3 mt-6">
                    <ContainerLayout>
                      <h3 className="text-2xl font-bold">{page.title}</h3>
                      <hr className="mt-1 mb-3 opacity-50 border-brand-primary" />

                      <nav className="space-y-2">
                        {page.subPages.map((subPage) => (
                          <Link
                            href={`/${page.slug}/${subPage.slug}`}
                            key={subPage.slug}
                            className="flex items-center gap-1 group/navLink"
                          >
                            <i
                              className={`${subPage.icon} w-8 aspect-square bg-brand-blue-3 text-background rounded-lg grid place-items-center `}
                            />
                            <span className="font-[600] group/navLink:hover:text-brand-blue-3">
                              {subPage.name}
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </ContainerLayout>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={i} href={`/${page.slug}`}>
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
