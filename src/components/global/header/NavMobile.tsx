"use client";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        <button className="text-xl" onClick={() => setIsOpen((prev) => !prev)}>
          <i className="fi fi-br-menu-burger flex"></i>
        </button>
      </div>

      {isOpen && (
        <section className="md:hidden fixed top-0 left-0 w-screen h-screen py-8 bg-background">
          <ContainerLayout size="base">
            <div className="flex items-center gap-2 justify-between ">
              <Link className="block h-12" href={"/"}>
                <Image
                  src={"/logo.png"}
                  width={200}
                  height={200}
                  alt="Logo Image for Header"
                  className="w-full h-full object-cover"
                />
              </Link>

              <button
                className="text-2xl"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <i className="fi fi-br-cross-small flex"></i>
              </button>
            </div>

            <hr className="mt-3 opacity-50" />
          </ContainerLayout>
        </section>
      )}
    </>
  );
};

export default NavMobile;
