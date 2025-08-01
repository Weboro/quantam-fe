import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import courses from "@/data/courses";
import React from "react";

const CourseFilterSection = () => {
  return (
    <ContainerLayout>
      <section className="mt-2 grid lg:grid-cols-2 gap-4">
        <div className="">
          <Heading level={2}>Find A Course</Heading>
          <p>
            Looking for the perfect course? Explore from our wide range of
            undergraduate, postgraduate and research programs.
          </p>
        </div>
        <div className="flex items-end">
          <div className="flex items-center w-full gap-2">
            <input
              type="text"
              className="flex-1 border-2 border-surface-2 rounded-lg bg-surface-1 px-1 py-1.5"
              placeholder="Search"
            />
            <Button icon="fi fi-br-search" className="">
              Search
            </Button>
            <Button icon="fi fi-br-filter" className="py-3"></Button>
          </div>
        </div>
      </section>

      <section>
        {courses.map((course) => (
          <div key={course.slug}></div>
        ))}
      </section>
    </ContainerLayout>
  );
};

export default CourseFilterSection;
