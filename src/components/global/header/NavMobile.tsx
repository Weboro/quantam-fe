"use client";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import pages from "@/data/pages";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeNav = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <div className="block md:hidden">
        <button className="text-xl" onClick={() => setIsOpen((prev) => !prev)}>
          <i className="fi fi-br-menu-burger flex"></i>
        </button>
      </div>

      {isOpen && (
        <section className="md:hidden fixed top-0 left-0 w-screen h-screen py-4 pb-16 bg-background z-50 overflow-y-auto">
          <ContainerLayout size="base" isCenter={true}>
            <div className="flex items-center gap-2 justify-between mb-4">
              <Link className="block h-10" href={"/"} onClick={closeNav}>
                <Image
                  src={"/quantam-horizontal.svg"}
                  width={200}
                  height={200}
                  alt="Logo Image for Header"
                  className="h-full object-contain text-left"
                />
              </Link>
              <button className="text-2xl p-2" onClick={closeNav}>
                <i className="fi fi-br-cross-small flex"></i>
              </button>
            </div>
            <hr className="opacity-50 mb-6" />
          </ContainerLayout>

          <ContainerLayout size="base" isCenter={true}>
            <nav className="space-y-4">
              {pages.map((page, i) => (
                <div className="text-lg font-medium" key={i}>
                  {page.subPages ? (
                    <>
                      <button
                        className="flex items-center gap-2 w-full text-left"
                        onClick={() => toggleDropdown(i)}
                      >
                        <span className="text-lg font-medium text-gray-900">
                          {page.name}
                        </span>

                        <i
                          className={`fi fi-rr-angle-small-up flex transition-transform duration-200 ${openDropdown === i ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      </button>

                      {openDropdown === i && (
                        <div className="mt-2 pl-2 border-l-4 border-l-brand-primary">
                          {page.subPages.map((subPage) => (
                            <Link
                              href={`/${page.slug}/${subPage.slug}`}
                              key={subPage.slug}
                              className="block text-base font-medium hover:underline py-1"
                              onClick={closeNav}
                            >
                              {subPage.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={`/${page.slug}`} onClick={closeNav}>
                      {page.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </ContainerLayout>
        </section>
      )}
    </>
  );
};

export default NavMobile;
