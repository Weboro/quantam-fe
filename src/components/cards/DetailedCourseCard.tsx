import Image from "next/image";
import React from "react";
import Heading from "../ui/Heading";
import CourseInfoBlock from "./CourseInfoBlock";
import { type ICourse } from "@/data/courses";
import Link from "next/link";
import Button from "../ui/Button";
import { siteLinks } from "@/extra/siteLinks";

type ICourseDetailsSection = Pick<
  ICourse,
  | "slug"
  | "name"
  | "description"
  | "duration"
  | "heroImage"
  | "location"
  | "studyLevel"
  | "intakes"
  | "deliveryMode"
  | "CRICOSCourseCode"
>;

const DetailedCourseCard: React.FC<ICourseDetailsSection> = ({
  slug,
  name,
  description,
  heroImage,
  location,
  duration,
  studyLevel,
  intakes,
  deliveryMode,
  CRICOSCourseCode,
}) => {
  const infoFields = [
    { label: "Location", value: location },
    { label: "Study Level", value: studyLevel },
    { label: "Duration", value: duration },
    { label: "Delivery Mode", value: deliveryMode },
    { label: "CRICOS Course Code", value: CRICOSCourseCode },
    { label: "Intakes", value: intakes },
  ];

  return (
    <div className="border border-muted/50 shadow rounded-xl overflow-hidden | grid sm:grid-cols-5 md:grid-cols-4">
      <div className="w-full h-full overflow-hidden sm:col-span-2 md:col-span-1">
        <Image
          src={heroImage}
          alt={`Image for ${name}`}
          width={600}
          height={600}
          className="w-full h-full object-cover hover:scale-105 transition-all"
        />
      </div>

      <div className="sm:col-span-3 p-3">
        <Heading level={4} className="font-semibold">
          Study {name} at QHIE
        </Heading>

        <p className="text-muted text-base   line-clamp-3">{description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 text-sm lg:px-4 my-5">
          {infoFields.map(({ label, value }) => (
            <CourseInfoBlock key={label} label={label} value={value} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href={""}>
            <Button
              className="flex-row-reverse "
              icon="fi fi-br-arrow-small-right"
              variant="secondary"
            >
              Apply Now
            </Button>
          </Link>

          <Link href={`${siteLinks.programs}/${slug}`}>
            <Button
              className="flex-row-reverse"
              icon="fi fi-br-arrow-small-right"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedCourseCard;
