import React from "react";
import Image from "next/image";
import Heading from "../ui/Heading";
import Link from "next/link";

interface NewsCardProps {
  imageUrl: string;
  date: string;
  readTime: string;
  title: string;
  url: string;
  summary: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  date,
  readTime,
  title,
  url,
  summary,
}) => (
  <div className="relative overflow-hidden">
    <div className="group/image w-full aspect-[4.5/3] overflow-hidden rounded-2xl">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={192}
        className="w-full h-full object-cover group-hover/image:scale-110 transition-all"
      />
    </div>

    <div className="flex items-center gap-4 text-sm text-muted mt-2 mb-3 justify-between">
      <span className="flex items-center gap-1">
        <i className="fi fi-br-calendar-day flex" />
        {date}
      </span>
      <span className="flex items-center gap-1">
        <i className="fi fi-br-hourglass flex" />
        {readTime}
      </span>
    </div>

    <Link href={url}>
      <Heading level={4} className="mb-3.5 line-clamp-1">
        {title}
      </Heading>
    </Link>
    <p className="text-muted text-base mb-4">{summary}</p>

    <Link
      href={url}
      className="font-bold text-brand-primary text-sm flex items-center gap-2"
    >
      <span>Learn More</span> <i className="fi fi-br-arrow-right flex"></i>
    </Link>
  </div>
);

export default NewsCard;
