import Image from "next/image";
import React from "react";
import Heading from "../ui/Heading";
import CourseInfoBlock from "./CourseInfoBlock";
import { type ICourse } from "@/data/courses";
import Link from "next/link";
import Button from "../ui/Button";
import { slugs } from "@/extra/slugs";

type ICourseDetailsSection = Pick<
  ICourse,
  | "slug"
  | "name"
  | "description"
  | "duration"
  | "heroImage"
  | "location"
  | "degreeType"
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
  degreeType,
  intakes,
  deliveryMode,
  CRICOSCourseCode,
}) => {
  const infoFields = [
    { label: "Location", value: location },
    { label: "Duration", value: duration },
    { label: "Delivery Mode", value: deliveryMode },
    { label: "CRICOS Course Code", value: CRICOSCourseCode },
    { label: "Intakes", value: intakes },
    { label: "Degree Type", value: degreeType },
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
          {name}
        </Heading>

        <p className="text-muted text-base line-clamp-3">{description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 text-sm lg:px-4 my-5">
          {infoFields.map(({ label, value }) => (
            <CourseInfoBlock key={label} label={label} value={value} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/${slugs.apply}`}>
            <Button
              className="flex-row-reverse "
              icon="fi fi-br-arrow-small-right"
              variant="secondary"
            >
              Apply Now
            </Button>
          </Link>

          <Link href={`/${slugs.programs}/${slug}`}>
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
