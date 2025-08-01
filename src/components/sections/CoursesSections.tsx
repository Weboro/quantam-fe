"use client";
import React, { useRef } from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import Button from "../ui/Button";
import { AboutUsCardRef } from "../sliders/CourseSlider";
import Heading from "../ui/Heading";
import CourseSlider from "../sliders/CourseSlider";

const CoursesSections = () => {
  const sliderRef = useRef<AboutUsCardRef>(null);

  const handlePrevSlide = () => {
    sliderRef.current?.scrollLeft();
  };

  const handleNextSlide = () => {
    sliderRef.current?.scrollRight();
  };

  return (
    <div>
      <ContainerLayout className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="md:col-span-2 ">
          <span className="text-muted text-sm font-medium mb-0.5">
            Our Programs
          </span>
          <Heading className="mb-3" level={2}>
            About Our Programs and our course of action.
          </Heading>
          <p className=" text-muted font-normal max-w-2xl">
            A modal dialog that interrupts the user with important content and
            expects a response. A modal dialog that interrupts the user.
          </p>
        </div>

        <div className="flex flex-col justify-between items-end">
          <Link href={"/courses"}>
            <Button variant="secondary" className="text-lg font-semibold">
              Learn More
            </Button>
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
        <CourseSlider ref={sliderRef} />
      </div>
    </div>
  );
};

export default CoursesSections;
