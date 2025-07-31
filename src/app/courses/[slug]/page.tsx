import HeroSection from "@/components/sections/HeroSection";
import { getCourse } from "@/utils/getCourses";
import { notFound } from "next/navigation";
import React from "react";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

const CoursePage: React.FC<CoursePageProps> = async ({ params }) => {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) notFound();

  return (
    <>
      <HeroSection
        title={course.name}
        description={course.description}
        imageUrl={course.heroImage}
      />

      <div className="my-32 text-center">TBD</div>
    </>
  );
};

export default CoursePage;
