"use client";
import DetailedCourseCard from "@/components/cards/DetailedCourseCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FilterPopover from "@/components/popovers/FilterPopover";
import FilterSelect from "@/components/select/FilterSelect";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import courses, { type ICourse } from "@/data/courses";
import useSearchCourse from "@/hooks/useSearchCourse";
import React, { useState } from "react";

const CourseFilterSection = () => {
  const {
    results,
    searchQuery,
    handleInputChange,
    handleSearch,
    clearFilter,
    //
    degreeType,
    setDegreeType,
    deliveryMode,
    setDeliveryMode,
    studentType,
    setStudentType,
  } = useSearchCourse(courses);

  return (
    <>
      <ContainerLayout>
        <section className="mt-2 grid lg:grid-cols-2 gap-4">
          <div className="">
            <Heading level={2}>Find A Course</Heading>
            <p className="text-muted">
              Looking for the perfect course? Explore from our wide range of
              undergraduate, postgraduate and research programs.
            </p>
          </div>

          <div className="flex items-end">
            <div className="flex flex-col sm:flex-row sm:items-center items-end w-full gap-2 min-w-0">
              <input
                type="text"
                className="flex-1 min-w-0 border-2 border-surface-2 rounded-lg bg-surface w-full px-2 py-1.5"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <Button
                  icon="fi fi-br-search"
                  className="w-fit"
                  onClick={handleSearch}
                >
                  Search
              </Button>

              <FilterPopover clearFilter={clearFilter}>
                <FilterSelect
                  value={degreeType ?? ""}
                  onChange={(el) => setDegreeType(el as ICourse["degreeType"])}
                  placeholder="Select Degree Type"
                  options={[
                    "Undergraduate",
                    "Postgraduate",
                    "Diploma",
                    "Certificate",
                  ]}
                />

                <FilterSelect
                  value={deliveryMode ?? ""}
                  onChange={(el) =>
                    setDeliveryMode(el as ICourse["deliveryMode"])
                  }
                  placeholder="Select Delivery Mode"
                  options={["Face-to-Face", "Online", "Blended"]}
                />

                <FilterSelect
                  value={studentType ?? ""}
                  onChange={(el) => setStudentType(el as ICourse["level"])}
                  placeholder="Select Student Level"
                  options={["Beginner", "Intermediate", "Advanced"]}
                />
              </FilterPopover>
            </div>
          </div>
        </section>

        {results.length > 0 ? (
          <section className="space-y-6 mt-10">
            {results.map((course) => (
              <DetailedCourseCard
                key={course.slug}
                slug={course.slug}
                heroImage={course.heroImage}
                description={course.description}
                name={course.name}
                location={course.location}
                duration={course.duration}
                degreeType={course.degreeType}
                intakes={course.intakes}
                deliveryMode={course.deliveryMode}
                CRICOSCourseCode={course.CRICOSCourseCode}
              />
            ))}
          </section>
        ) : (
          <div className="flex items-center flex-col py-20 my-8 rounded-2xl bg-brand-primary/5">
            <p className="w-20 aspect-square bg-brand-primary/25 rounded-full grid place-items-center mb-4">
              <i className="fi fi-rr-lightbulb-exclamation text-brand-primary flex text-5xl" />
            </p>

            <Heading level={4} className="font-medium text-center">
              No Results matching your query!
            </Heading>
          </div>
        )}
      </ContainerLayout>
    </>
  );
};

export default CourseFilterSection;
