import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import Heading from "../ui/Heading";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  textAlign?: "left" | "center";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  textAlign = "left",
}) => {
  const alignClass =
    textAlign === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat grid place-items-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] to-transparent"></div>

      <ContainerLayout
        className={`relative z-10 h-full flex flex-col justify-center max-w-2xl ${alignClass}`}
      >
        <Heading level={1} className="text-background">
          {title}
        </Heading>

        {subtitle && (
          <h2 className="text-background text-xl md:text-2xl font-medium mb-2">
            {subtitle}
          </h2>
        )}

        <p className="text-background text-base md:text-lg  leading-relaxed opacity-90 max-w-lg mt-3">
          {description}
        </p>

        {buttonText && buttonLink && (
          <a href={buttonLink} className="font-medium block mt-8">
            <Button variant="secondary">{buttonText}</Button>
          </a>
        )}
      </ContainerLayout>
    </div>
  );
};
export default HeroSection;
