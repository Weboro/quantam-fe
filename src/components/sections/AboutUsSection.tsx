import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const AboutUsSection = () => {
  return (
    <>
      <ContainerLayout className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <span className="text-muted text-sm font-medium capitalize tracking-wide">
            About Us
          </span>

          <Heading level={3} className="mb-3">
            Your Journey Starts Here
          </Heading>

          <p className="leading-relaxed">
            Explore our programs, discover our campus, and take the first step
            toward your future with QIHE.
          </p>

          <p className="leading-relaxed">
            A modal dialog that interrupts the user with important content and
            expects a response. A modal dialog that interrupts the user with
            important content and expects a response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href={``} className="font-semibold">
              <Button
                variant="secondary"
                icon="fi fi-br-arrow-small-right"
                className="flex-row-reverse"
              >
                Apply Now
              </Button>
            </a>

            <a href={``}>
              <Button
                variant="primary"
                icon="fi fi-br-arrow-small-right"
                className="flex-row-reverse"
              >
                Explore Programs
              </Button>
            </a>
          </div>
        </div>

        <Image
          src={"/banner.jpg"}
          width={700}
          height={700}
          alt="About section detgails"
          className="w-full aspect-[2/1] lg:aspect-[4.5/5] object-cover rounded-xl"
        />
      </ContainerLayout>
      ;
    </>
  );
};

export default AboutUsSection;
