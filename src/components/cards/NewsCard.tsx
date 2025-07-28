import React from "react";
import Image from "next/image";

const NewsCard: React.FC = ({
  imageUrl,
  date,
  readTime,
  title,
  url,
  summary,
}) => (
  <div className="w-full flex flex-col overflow-hidden font-primary">
    <Image
      src={imageUrl}
      alt={title}
      width={400}
      height={192}
      className="w-full h-48 object-cover rounded-2xl"
    />

    <div className=" flex flex-col gap-1">
      <div className="flex items-center gap-4 text-muted  text-sm mt-2 justify-between">
        <span className="flex items-center gap-1">
          <i className="fi fi-br-calendar-day"></i>
          {date}
        </span>
        <span className="flex items-center gap-1">
          <i className="fi fi-br-hourglass"></i>
          {readTime}
        </span>
      </div>
      <h3 className="font-bold text-lg text-brand-primary-black leading-snug mb-2">
        {title}
      </h3>

      <p className="text-muted text-base mb-4">{summary}</p>

      <a
        href={url}
        className="font-bold text-brand-primary flex items-center gap-2"
      >
        Learn More{" "}
        <span>
          <i className="fi fi-br-arrow-right mt-2"></i>
        </span>
      </a>
    </div>
  </div>
);

export default NewsCard;
