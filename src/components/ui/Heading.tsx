import type { ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
}

const Heading = ({ level = 1, children, className = "" }: HeadingProps) => {
  const baseStyles = `font-primary font-bold ${className}`;

  if (level === 1) {
    return <h1 className={`${baseStyles} text-5xl`}>{children}</h1>;
  }

  if (level === 2) {
    return <h2 className={`${baseStyles} text-3xl md:text-4xl`}>{children}</h2>;
  }

  if (level === 3) {
    return <h3 className={`${baseStyles} text-2xl md:text-3xl`}>{children}</h3>;
  }

  if (level === 4) {
    return <h4 className={`${baseStyles} text-lg md:text-xl`}>{children}</h4>;
  }

  return <h5 className={`${baseStyles} text-base`}>{children}</h5>;
};

export default Heading;
