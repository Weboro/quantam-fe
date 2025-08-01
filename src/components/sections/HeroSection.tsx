import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import Heading from "../ui/Heading";
import Link from "next/link";

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
      className="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat grid place-items-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-[#002B5C]/50 to-transparent"></div>

      <ContainerLayout
        className={`relative z-10 h-full flex flex-col justify-center ${alignClass}`}
      >
        <Heading level={1} className="text-background lg:max-w-3xl mb-4">
          {title}
        </Heading>

        {subtitle && (
          <Heading
            level={5}
            className="text-background font-normal lg:max-w-3xl mb-2"
          >
            {subtitle}
          </Heading>
        )}

        <Heading
          level={5}
          className="text-neutral-200 font-normal hidden md:block lg:max-w-3xl"
        >
          {description}
        </Heading>

        {buttonText && buttonLink && (
          <Link href={buttonLink} className="font-medium block mt-4 md:mt-8">
            <Button variant="secondary">{buttonText}</Button>
          </Link>
        )}
      </ContainerLayout>
    </div>
  );
};
export default HeroSection;
