import Image from "next/image";
import React from "react";
import Heading from "../ui/Heading";
import Link from "next/link";
interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="min-w-[250px] max-w-[320px] w-auto bg-background rounded-xl overflow-hidden flex-shrink-0 border-2 p-4  border-surface-2  ">
      <div className="h-[200px] w-full relative  rounded-xl overflow-hidden mb-4">
        <Image
          width={250}
          height={250}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <Heading level={4} className="mb-2">
          {title}
        </Heading>
        <p className="text-muted mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="flex items-center text-brand-primary hover:text-brand-blue-3 transition-all font-medium text-sm justify-between "
        >
          <span>Learn More</span>

          <span className=" size-6 rounded-full border border-0.5 border-surface-2 items-center justify-center flex ">
            <i className="fi fi-br-arrow-small-right mt-1"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
