import React, { type ReactNode } from "react";

interface ContainerLayoutProps {
  size?: "sm" | "md" | "base";
  isCenter?: boolean;
  className?: string;
  children: ReactNode;
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  size = "md",
  isCenter = true,
  children,
  className,
}) => {
  return (
    <div
      className={`${
        size === "sm"
          ? "container-sm"
          : size === "md"
          ? "container-md"
          : "container"
      } ${isCenter && "mx-auto"} ${className} px-4`}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
