"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

interface IFilterPopover {
  children: ReactNode;
  clearFilter: () => void;
}

const FilterPopover: React.FC<IFilterPopover> = ({ children, clearFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <Button icon="fi fi-br-filter" className="py-[12px]" />
      </div>

      {isOpen && (
        <div
          ref={containerRef}
          className="absolute z-[9999] border border-muted/25 shadow top-full mt-4 right-0 bg-surface rounded-lg w-64 md:w-72"
        >
          <Heading level={4} className="px-3 py-2">
            Filter
          </Heading>

          <hr className="border-muted/15 pt-2" />

          <div className="p-2">{children}</div>

          <hr className="border-muted/15 pb-2" />

          <div className="flex items-center p-2.5 gap-2 justify-between">
            <div onClick={clearFilter}>
              <Button variant="contrastAlt" className="text-xs">
                Clear
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPopover;
