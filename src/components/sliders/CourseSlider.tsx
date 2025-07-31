import React, { useRef, forwardRef, useImperativeHandle } from "react";
import CourseCard from "../cards/CourseCard";
import courses from "@/data/courses";

export interface AboutUsCardRef {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const CourseSlider = forwardRef<AboutUsCardRef>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: -350,
          behavior: "smooth",
        });
      }
    },
    scrollRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 350,
          behavior: "smooth",
        });
      }
    },
  }));

  return (
    <div className="w-full py-4 md:ml-32">
      <div className="overflow-x-auto scrollbar-hide" ref={containerRef}>
        <div className="flex gap-4 px-4 w-max">
          {[...courses, ...courses].map((course, index) => (
            <CourseCard
              key={index}
              image={course.heroImage}
              title={course.name}
              description={course.description}
              link={`/courses/${course.slug}/`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
});

CourseSlider.displayName = "CourseSlider";

export default CourseSlider;
