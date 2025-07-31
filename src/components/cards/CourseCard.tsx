import Image from "next/image";
import React from "react";
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
        <h3 className="text-lg font-semibold text-brand-primary-black mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-brand-primary-black text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          className="flex items-center text-brand-primary font-medium text-sm justify-between "
        >
          <span>Learn More</span>

          <span className=" size-6 rounded-full border border-0.5 border-surface-2 items-center justify-center flex ">
            <i className="fi fi-br-arrow-small-right mt-1"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
