import React from "react";

type Variant =
  | "primary"
  | "secondary"
  | "contrast"
  | "contrastAlt"
  | "primaryAlt"
  | "secondaryAlt";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: string;
  interaction?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  icon,
  children,
  className = "",
  interaction = true,
  onClick,
  ...rest
}) => {
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors duration-200 font-medium cursor-pointer leading-4.5";

  const variantClasses = {
    primary: `
      bg-[var(--color-brand-primary)] text-white
      ${interaction && "hover:bg-[var(--color-brand-blue-2)]"}
      disabled:bg-[var(--color-brand-blue-4)] disabled:text-white disabled:opacity-60 disabled:cursor-not-allowed
    `,
    secondary: `
      bg-[var(--color-brand-yellow-3)] text-black
      ${interaction && "hover:bg-[var(--color-brand-yellow-2)]"}
      disabled:bg-[var(--color-brand-yellow-4)] disabled:opacity-60 disabled:cursor-not-allowed
    `,
    contrast: `
      bg-[var(--color-brand-primary-black)] text-white
      ${interaction && "hover:bg-neutral-700"}
      disabled:bg-neutral-400 disabled:text-white disabled:cursor-not-allowed
    `,
    contrastAlt: `
      bg-background text-black outline-2 outline-black
      ${interaction && "hover:bg-neutral-100"}
      disabled:bg-neutral-100 disabled:text-black disabled:opacity-60 disabled:cursor-not-allowed
    `,
    primaryAlt: `
      bg-background text-[var(--color-brand-primary)] outline-2 outline-[var(--color-brand-primary)]
      ${interaction && "hover:bg-[var(--color-brand-blue-5)]"}
      disabled:bg-neutral-100 disabled:text-[var(--color-brand-blue-4)] disabled:outline-[var(--color-brand-blue-4)] disabled:opacity-60 disabled:cursor-not-allowed
    `,
    secondaryAlt: `
      bg-background text-[var(--color-brand-yellow-3)] outline-2 outline-[var(--color-brand-yellow-3)]
      ${interaction && "hover:bg-[var(--color-brand-yellow-5)]"}
      disabled:bg-neutral-100 disabled:text-[var(--color-brand-yellow-4)] disabled:outline-[var(--color-brand-yellow-4)] disabled:opacity-60 disabled:cursor-not-allowed
    `,
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && <i className={`${icon} flex`} />}
      {children}
    </button>
  );
};

export default Button;
