import { useState, useRef, useEffect } from "react";

interface IFilterSelect<T extends string | null | undefined = string> {
  options?: T[];
  placeholder?: string;
  value?: T;
  onChange?: (value: T) => void;
  className?: string;
}

const FilterSelect: React.FC<IFilterSelect> = ({
  options = [],
  placeholder = "Select an option",
  value = "",
  onChange = () => {},
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string): void => {
    onChange(option);
    setIsOpen(false);
  };

  const displayValue: string = value || placeholder;

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <div
        className="cursor-pointer transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="flex items-center gap-2 justify-between">
          <span className="py-1.5 text-gray-700 capitalize">
            {displayValue}
          </span>
          <i
            className={`fi fi-rr-angle-small-down text-gray-500 transition-transform duration-200 flex ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </p>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-1  border border-muted/25 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-gray-500 text-sm">
              No options available
            </div>
          ) : (
            <>
              {["", ...options].map((option: string, index: number) => (
                <div
                  key={index}
                  className="px-4 capitalize py-2 text-gray-700 hover:bg-brand-primary/5 cursor-pointer transition-colors duration-150 border-b border-muted/25 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                  onClick={() => handleSelect(option)}
                >
                  {option === "" ? placeholder : option}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
