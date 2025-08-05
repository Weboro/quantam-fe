import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CourseDetailsSection from "@/components/sections/course/CourseDetailsSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { getCourse } from "@/utils/getCourses";
import { notFound } from "next/navigation";
import React from "react";
import Tabbed from "../../../components/tabbedpane/Tabbed";

interface ICoursePage {
  params: Promise<{ slug: string }>;
}

const CoursePage: React.FC<ICoursePage> = async ({ params }) => {
  const { slug } = await params;

  const course = await getCourse(slug);

  if (!course) notFound();

  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-4">
        <Heading level={1}>{course.name}</Heading>
      </ContainerLayout>

      <div className="mt-12 space-y-22">
        <CourseDetailsSection
          name={course.name}
          description={course.description}
          richText={course.richText}
          heroImage={course.heroImage}
          duration={course?.duration}
          location={course?.location}
          degreeType={course?.degreeType}
          intakes={course?.intakes}
          deliveryMode={course?.deliveryMode}
          CRICOSCourseCode={course?.CRICOSCourseCode}
        />

        <Tabbed tabbedPaneData={course.tabbedPaneData || []} />

        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default CoursePage;
