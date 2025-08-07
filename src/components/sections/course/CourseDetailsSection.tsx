import CourseInfoBlock from "@/components/cards/CourseInfoBlock";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { type ICourse } from "@/data/courses";
import Image from "next/image";
import React from "react";

type ICourseDetailsSection = Pick<
  ICourse,
  | "name"
  | "description"
  | "richText"
  | "heroImage"
  | "duration"
  | "location"
  | "degreeType"
  | "intakes"
  | "deliveryMode"
  | "CRICOSCourseCode"
>;

const CourseDetailsSection: React.FC<ICourseDetailsSection> = ({
  name,
  description,
  richText,
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
    { label: "Study Level", value: degreeType },
    { label: "Duration", value: duration },
    { label: "Delivery Mode", value: deliveryMode },
    { label: "CRICOS Course Code", value: CRICOSCourseCode },
    { label: "Intakes", value: intakes },
  ];

  return (
    <ContainerLayout className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div suppressHydrationWarning className="md:col-span-2 self-center">
        <Heading level={2} className="mb-3">
          Study {name} at QIHE
        </Heading>

        <p className="text-muted md:max-w-xl">{description}</p>
        <div
          className="text-muted md:max-w-xl"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: richText }}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {infoFields.map(({ label, value }) => (
            <CourseInfoBlock key={label} label={label} value={value} />
          ))}
        </div>
      </div>

      <div className="w-full aspect-[2/1] lg:aspect-[3.75/4] rounded-xl overflow-hidden">
        <Image
          src={heroImage}
          width={500}
          height={500}
          className="w-full h-full object-cover"
          alt={`Image for ${name}`}
        />
      </div>
    </ContainerLayout>
  );
};

export default CourseDetailsSection;
