import ContainerLayout from "@/components/layouts/ContainerLayout";
import Image from "next/image";
import React from "react";

const FooterBottom = () => (
  <div className="bg-brand-primary text-background">
    <ContainerLayout size="sm" className="pt-12 pb-6">
      <div className="flex items-center justify-center gap-4 mb-4">
        <Image
          src={"/flag-a.png"}
          alt="footer flag image"
          className="w-20"
          width={250}
          height={250}
        />

        <Image
          src={"/flag-b.png"}
          alt="footer flag image"
          className="w-20"
          width={250}
          height={250}
        />
      </div>

      <p className="md:w-2/4 mx-auto text-center leading-4.5 text-sm text-neutral-300">
        Quantam Institute of Higher Education acknowledges Aboriginal and Torres
        Strait Islander people as the Traditional Custodians of the land and
        acknowledges and pays respect to their elders, past and present
      </p>

      <hr className="border-brand-blue-4 my-4" />

      <p className="w-fit mx-auto text-center text-sm text-neutral-300">
        Copyright &copy; {new Date().getFullYear()} Quantam Institute of Higher
        Education
      </p>
    </ContainerLayout>
  </div>
);

export default FooterBottom;
