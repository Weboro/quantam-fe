import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Link from "next/link";
import { slugs } from "@/extra/slugs";

const AboutUsSection = () => {
  return (
    <>
      <ContainerLayout className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <span className="text-muted text-sm font-medium capitalize">
            About Us
          </span>

          <Heading level={3} className="mb-3">
            Your Journey Starts Here
          </Heading>

          <p className="leading-relaxed text-muted">
            Take the first step toward an exciting future. At QIHE, your
            academic journey is more than study—it's about growth, opportunity,
            and real-world success.
          </p>

          <br />

          <p className="leading-relaxed text-muted ">
            Your future starts now. Choose a program, gain practical knowledge,
            and build a career with purpose at QIHE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={slugs.apply} className="">
              <Button
                variant="secondary"
                icon="fi fi-br-arrow-small-right"
                className="flex-row-reverse"
              >
                Apply Now
              </Button>
            </Link>

            <Link href={slugs.programs}>
              <Button
                variant="primary"
                icon="fi fi-br-arrow-small-right"
                className="flex-row-reverse"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src={"/banner.jpg"}
          width={700}
          height={700}
          alt="About section detgails"
          className="w-full aspect-[2/1] lg:aspect-[6.5/5] object-cover rounded-xl"
        />
      </ContainerLayout>
      ;
    </>
  );
};

export default AboutUsSection;
