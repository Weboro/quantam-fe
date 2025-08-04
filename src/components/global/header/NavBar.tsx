import ContainerLayout from "@/components/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavBar = () => {
  return (
    <ContainerLayout className="py-2 flex items-center justify-between">
      <div className="block h-14 md:h-16">
        <Link className="w-full h-full block" href={"/"}>
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            alt="Logo Image for Header"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      <NavDesktop />

      <NavMobile />
    </ContainerLayout>
  );
};

export default NavBar;
