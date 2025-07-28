import React from "react";
import Image from "next/image";
import { homeNewsCards, HomeNewsCardItem } from "../data/homenewscard";

interface Props {
  card: HomeNewsCardItem;
}

const NewsCard: React.FC<Props> = ({ card }) => (
  <div className="  w-full flex flex-col overflow-hidden font-primary">
    <Image
      src={card.imageUrl}
      alt={card.title}
      width={400}
      height={192}
      className="w-full h-48 object-cover rounded-2xl"
    />
    <div className=" flex flex-col gap-1">
      <div className="flex items-center gap-4 text-muted  text-sm mt-2 justify-between">
        <span className="flex items-center gap-1">
          {" "}
          <i className="fi fi-br-calendar-day"></i>
          {card.date}
        </span>
        <span className="flex items-center gap-1">
          <i className="fi fi-br-hourglass"></i>
          {card.readTime}
        </span>
      </div>
      <h3 className="font-bold text-lg text-brand-primary-black leading-snug mb-2">
        {card.title}
      </h3>
      <p className="text-muted text-base mb-4">{card.summary}</p>
      <a
        href={card.url}
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

const HomeNewsCard = () => (
  <div className="w-full mb-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {homeNewsCards.map((card) => (
        <NewsCard key={card.id} card={card} />
      ))}
    </div>
  </div>
);

export default HomeNewsCard;
