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

      <h2 className="md:w-2/4 mx-auto text-center leading-4.5 text-md font-semibold text-neutral-300">
        Acknowledgement of Country
      </h2>

      <p className="md:w-2/4 mx-auto text-center leading-4.5 text-sm text-neutral-300">
        We acknowledge the Dharug people as the Traditional Custodians of the
        land on which Quantum Institute of Higher Education stands in
        Parramatta, New South Wales.
      </p>

      <p className="md:w-2/4 mx-auto text-center leading-4.5 text-sm text-neutral-300">
        We pay our respects to their Elders past, present and emerging, and
        extend that respect to all Aboriginal and Torres Strait Islander
        peoples.
      </p>

      <div className="w-fit text-center mx-auto mt-4">
        <p>TEQSA Provider ID: TBA</p>
        <p>CRICOS Provider Code: TBA</p>
        <p>ABN 54 668 014 757</p>
        <p>ACN 668 014 757</p>
        <p>Level 4, 16-18 Wentworth Street, Parramatta, NSW 2150</p>
        <p>+61 2 8359 5220</p>
      </div>

      <hr className="border-brand-blue-4 my-4" />

      <p className="w-fit mx-auto text-center text-sm text-neutral-300">
        Copyright &copy; {new Date().getFullYear()} Quantum Institute of Higher
        Education. All Rights Reserved.
      </p>
    </ContainerLayout>
  </div>
);

export default FooterBottom;
