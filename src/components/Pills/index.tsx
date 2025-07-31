import React from "react";

interface PillProps {
  value: string;
}

const Pill: React.FC<PillProps> = ({ value }) => (
  <span className="bg-surface-2 rounded-xl py-1 px-2 text-xs text-brand-primary-black">
    {value}
  </span>
);

export default Pill;
