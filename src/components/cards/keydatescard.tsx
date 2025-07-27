import React from "react";
import type { IKeyDate } from "@/data/keyDates";

interface Props {
  keyDate: IKeyDate;
}

const KeyDatesCard: React.FC<Props> = ({ keyDate }) => (
  <div className="flex bg-surface-1 rounded-xl overflow-hidden">
    <div className="bg-brand-yellow-3 text-black gap-4 flex flex-col items-center justify-center min-w-[190px] text-primary ">
      <div className="text-3xl font-bold uppercase tracking-wide">
        {keyDate.month}
      </div>
      <div className="text-8xl font-bold leading-none">{keyDate.day}</div>
    </div>
    <div className="flex-1 p-4 bg-background border-surface-2 border-[1.5px] rounded-r-xl">
      <div className="flex gap-1">
        {keyDate.category.map((i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-surface-1 text-brand-primary-black rounded-full mb-1"
          >
            {i}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight text-primary">
        {keyDate.title}
      </h3>
      <p className="text-muted text-sm font-medium mb-2 leading-relaxed">
        {keyDate.description}
      </p>
      {keyDate.learnMoreUrl && (
        <div className="flex items-center justify-between ">
          <a
            href={keyDate.learnMoreUrl}
            className="flex items-center text-brand-primary w-full font-medium text-sm  justify-between "
          >
            <span className="text-brand-primary font-semibold">Learn More</span>
            <span className="size-6 rounded-full border border-gray-300 flex items-center justify-center text-brand-primary ">
              <i className="fi fi-rr-arrow-small-right text-xl mt-1" />
            </span>
          </a>
        </div>
      )}
    </div>
  </div>
);

export default KeyDatesCard;
