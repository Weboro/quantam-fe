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
}) => (
  <div className="min-w-[250px] max-w-[320px] flex-shrink-0 w-auto overflow-hidden ournded rounded-xl p-3 border border-muted/50 flex flex-col gap-2">
    <Image
      width={250}
      height={250}
      src={image}
      alt={title}
      className="w-full aspect-[4/3] object-cover rounded-xl"
    />
    <div className="flex-1 flex flex-col justify-between">
      <h3 className="text-2xl font-semibold font-primary">{title}</h3>
      <div className="h-fit">
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
  </div>
);

export default CourseCard;
