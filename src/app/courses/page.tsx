import Breadcrumbs from "@/components/global/Breadcrumbs";
import CourseFilterSection from "@/components/sections/course/CourseFilterSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";

const CoursesPage = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="space-y-28 mt-6">
        <CourseFilterSection />

        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default CoursesPage;
