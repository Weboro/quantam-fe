import ContainerLayout from "@/components/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-powder-blue pt-16 pb-12 space-y-4">
        <ContainerLayout
          size="base"
          className="grid md:grid-cols-2 items-center"
        >
          <Link className="h-24 lg:h-32 aspect-[7/3] mb-8 md:mb-0" href={"/"}>
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="Logo Image for Header"
              className="w-full h-full object-contain"
            />
          </Link>

          <div className="flex flex-col md:items-end text-text font-[500]">
            <p>CRICOS Provider Code 04082E</p>
            <p>TEQSA Provider Number PRV14305</p>
            <p>ABN 91 612 507 141</p>
          </div>
        </ContainerLayout>

        <br />

        <ContainerLayout
          size="base"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {Array.from({ length: 4 }).map((el, i) => (
            <div key={i} className="mb-8 lg:mb-0">
              <h4 className="text-xl font-semibold">Courses</h4>
              <Link
                className="block mt-2 hover:text-brand-primary transition-all"
                href={"#"}
              >
                Accounting Major
              </Link>
              <Link
                className="block mt-2 hover:text-brand-primary transition-all"
                href={"#"}
              >
                Major in Information Systems
              </Link>
              <Link
                className="block mt-2 hover:text-brand-primary transition-all"
                href={"#"}
              >
                Major in Hospitality
              </Link>
              <Link
                className="block mt-2 hover:text-brand-primary transition-all"
                href={"#"}
              >
                Major in Management
              </Link>
            </div>
          ))}
        </ContainerLayout>
      </div>

      <div className="bg-brand-primary text-background">
        <ContainerLayout className="pt-12 pb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src={"/flag-a.png"}
              alt="footer flag image"
              className="w-22"
              width={500}
              height={500}
            />
            <Image
              src={"/flag-b.png"}
              alt="footer flag image"
              className="w-22"
              width={500}
              height={500}
            />
          </div>
          <p className="md:w-2/4 mx-auto text-center leading-4.5 text-sm">
            Quantam Institute of Higher Education acknowledges Aboriginal and
            Torres Strait Islander people as the Traditional Custodians of the
            land and acknowledges and pays respect to their elders, past and
            present
          </p>

          <hr className="border-brand-blue-4 my-4" />

          <p className="w-fit mx-auto text-center text-sm">
            Copyright &copy; {new Date().getFullYear()} Mpika Holdings Pty Ltd
            as Quantam Institute of Higher Education. 
          </p>
        </ContainerLayout>
      </div>
    </footer>
  );
};

export default Footer;
