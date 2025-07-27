import React, { type ReactNode } from "react";

interface ContainerLayoutProps {
  size: "sm" | "base";
  isCenter: boolean;
  className: string;
  children: ReactNode;
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  size = "sm",
  isCenter,
  children,
  className,
}) => {
  return (
    <div
      className={`${size === "sm" ? "container-sm" : "container"} ${
        isCenter && "mx-auto"
      } ${className} px-4`}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
