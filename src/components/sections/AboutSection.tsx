"use client";
import React, { useRef } from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import Button from "../ui/Button";
import AboutUsCard, { AboutUsCardRef } from "../cards/AboutSlider";

const AboutSection = () => {
  const sliderRef = useRef<AboutUsCardRef>(null);

  const handlePrevSlide = () => {
    sliderRef.current?.scrollLeft();
  };

  const handleNextSlide = () => {
    sliderRef.current?.scrollRight();
  };

  return (
    <div>
      <ContainerLayout className="flex flex-col md:flex-row md:items-start justify-between w-full py-4">
        <div className={`flex flex-col flex-1 items-start text-left`}>
          <span className="text-muted text-base font-medium mb-0.5">
            About Us
          </span>
          <h2 className="text-3xl font-bold text-brand-primary-black leading-tight mb-4">
            About Our Programs and our course of action.
          </h2>
          <p className=" text-brand-primary-black font-normal max-w-2xl">
            A modal dialog that interrupts the user with important content and
            expects a response. A modal dialog that interrupts the user.
          </p>
        </div>

        <div className="flex flex-col  items-start md:items-end flex-1 mt-6 md:mt-0 md:gap-30 gap-8">
          <Link href={"/about"}>
            <Button variant="secondary">About Us</Button>
          </Link>

          <div className="flex items-center gap-4 ">
            <Button
              variant="secondary"
              icon="fi fi-br-angle-small-left"
              className="rounded-full px-1! py-1!"
              onClick={handlePrevSlide}
            />
            <Button
              variant="secondary"
              icon="fi fi-br-angle-small-right"
              className="rounded-full px-1! py-1!"
              onClick={handleNextSlide}
            />
          </div>
        </div>
      </ContainerLayout>

      <div className="w-full overflow-x-hidden">
        <AboutUsCard ref={sliderRef} />
      </div>
    </div>
  );
};

export default AboutSection;
