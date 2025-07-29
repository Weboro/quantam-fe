import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import { aboutUsCards, IAboutUsCard } from "../../data/aboutuscard";

interface AboutUsCardProps {
  card: IAboutUsCard;
}

export interface AboutUsCardRef {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const AboutSliderCard: React.FC<AboutUsCardProps> = ({ card }) => (
  <div className="min-w-[250px] max-w-[320px] w-auto bg-background rounded-xl overflow-hidden flex-shrink-0 border-2 p-4  border-surface-2  ">
    <div className="h-[200px] w-full relative  rounded-xl overflow-hidden mb-4">
      <Image src={card.image} alt={card.title} fill className="object-cover" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-brand-primary-black mb-3 leading-tight">
        {card.title}
      </h3>
      <p className="text-brand-primary-black text-sm mb-4 leading-relaxed">
        {card.description}
      </p>
      <a
        href={card.link}
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

const AboutSlider = forwardRef<AboutUsCardRef>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: -350, // Scroll by approximately one card width
          behavior: "smooth",
        });
      }
    },
    scrollRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 350, // Scroll by approximately one card width
          behavior: "smooth",
        });
      }
    },
  }));

  return (
    <div className="w-full py-4 md:ml-32 ">
      <div className="overflow-x-auto scrollbar-hide" ref={containerRef}>
        <div className="flex gap-8 px-6" style={{ width: "max-content" }}>
          {aboutUsCards.map((card, index) => (
            <AboutSliderCard key={index} card={card} />
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

AboutSlider.displayName = "AboutSlider";

export default AboutSlider;
