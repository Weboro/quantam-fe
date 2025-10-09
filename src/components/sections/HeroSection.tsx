import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import Heading from "../ui/Heading";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
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
      className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat grid place-items-center"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent"></div>

      <ContainerLayout
        className={`relative z-10 h-full flex flex-col justify-center ${alignClass}`}
      >
        {typeof title === "string" ? (
          <Heading level={1} className="text-background lg:max-w-3xl mb-4">
            {title}
          </Heading>
        ) : (
          <>{title}</>
        )}

        {subtitle && (
          <Heading
            level={4}
            className="text-background font-normal lg:max-w-3xl mb-2"
          >
            {subtitle}
          </Heading>
        )}

        {description && (
          <Heading
            level={4}
            className="text-neutral-200 font-normal hidden md:block lg:max-w-3xl"
          >
            {description}
          </Heading>
        )}
        <div>
          <p className="text-neutral-200 font-normal  lg:max-w-3xl">
            At Quantum Institute of Higher Education (QIHE), we are dedicated to
            providing quality education that empowers our students to succeed in
            a dynamic and evolving world.
          </p>
            <br />
          <p className="text-neutral-200 font-normal  lg:max-w-3xl">
            Whether you’re looking to advance your knowledge in business or
            embark on an exciting journey into the world of information
            technology, QIHE offers programs designed to equip you with the
            skills, insights, and confidence needed to thrive in your chosen
            field.
          </p>
         
        </div>
        {buttonText && buttonLink && (
          <Link href={buttonLink} className="font-medium block mt-4 md:mt-8">
            <Button variant="secondary">{buttonText} </Button>
          </Link>
        )}
      </ContainerLayout>
    </div>
  );
};
export default HeroSection;
