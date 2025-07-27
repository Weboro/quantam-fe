import { quantumBanner } from "../data/banner";

export default function Banner() {
  const {
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    imageUrl,
    textAlign = "left",
  } = quantumBanner;

  const alignClass =
    textAlign === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] to-transparent"></div>

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 font-primary max-w-2xl space-y-8 ${alignClass}`}
      >
        <h1 className="text-white  md:text-3xl lg:text-4xl font-extrabold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-white text-xl md:text-2xl font-medium">
            {subtitle}
          </h2>
        )}
        <p className="text-white text-base md:text-lg  leading-relaxed opacity-90 max-w-lg">
          {description}
        </p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center font-semibold px-4 py-2 rounded text-sm transition-colors duration-200 w-fit bg-[var(--color-brand-yellow-3)] text-black hover:bg-[var(--color-brand-yellow-2)]"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
