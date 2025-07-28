import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import pages from "@/data/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavBar = () => {
  return (
    <ContainerLayout
      size="base"
      className="py-2 flex items-center gap-1 justify-between"
    >
      <Link className="block h-14 md:h-16" href={"/"}>
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Logo Image for Header"
          className="w-full h-full object-cover"
        />
      </Link>

      <NavDesktop />

      <NavMobile />
    </ContainerLayout>
  );
};

export default NavBar;
