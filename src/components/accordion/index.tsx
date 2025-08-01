"use client";
import { IFaq } from "@/data/faq";
import React, { useState } from "react";

interface IAccordion {
  data: IFaq[];
}

const Accordion: React.FC<IAccordion> = ({ data }) => {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div className="space-">
      {data.map((item: IFaq) => (
        <div
          key={item.id}
          className="border-t-2 border-t-muted/25 last:border-b-muted/25 last:border-b space-y-2 px-2"
        >
          <div
            className="w-full flex items-center justify-between gap-2 cursor-pointer hover:bg-brand-primary/5 py-1 transition-all"
            onClick={() => setSelectedId(item.id === selectedId ? -1 : item.id)}
          >
            <p className="font-medium text-lg">{item.question}</p>

            <i
              className={`fi fi-br-angle-small-down flex transition-all ${
                selectedId === item.id && "rotate-180"
              }`}
            />
          </div>

          {selectedId === item.id && (
            <p className="pb-2 text-neutral-700">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
