import React, { type ReactNode } from "react";

interface IconCardProps {
  children: ReactNode;
  icon?: string;
}

const IconCard: React.FC<IconCardProps> = ({ children, icon }) => {
  return (
    <div className="border h-full border-muted/50 shadow rounded-xl p-3 group/card">
      {icon && (
        <p className="w-16 aspect-square bg-brand-primary/10 group-hover/card:bg-brand-blue-3/25 transition-all rounded-full grid place-items-center mb-3">
          <i
            className={`${icon} flex text-3xl group-hover/card:scale-105 transition-all text-brand-primary`}
          />
        </p>
      )}

      {children}
    </div>
  );
};

export default IconCard;
