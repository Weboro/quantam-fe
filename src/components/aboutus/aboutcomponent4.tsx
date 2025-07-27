import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import {
  aboutComponent4Data,
  AboutComponent4Props,
} from "../../data/aboutcomponent4";
import ContainerLayout from "../layouts/ContainerLayout";

interface Props {
  data?: AboutComponent4Props;
}

const AboutComponent4: React.FC<Props> = ({ data = aboutComponent4Data }) => {
  const {
    sectionTitle,
    mainTitle,
    subtitle,
    description,
    primaryButton,
    secondaryButton,
    image,
    layout = "right",
  } = data;

  const isImageRight = layout === "right";

  return (
    <ContainerLayout>
      <div className="w-full py-16 ">
        <div
          className={`flex flex-col  ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16 max-w-7xl mx-auto`}
        >
          <div className="flex-1 space-y-6 text-brand-primary-black">
            <div className="space-y-2">
              <span className="text-muted text-sm font-medium uppercase tracking-wide">
                {sectionTitle}
              </span>
              <h2 className="text-3xl  font-bold leading-tight">{mainTitle}</h2>
            </div>

            <p className="text-lg leading-relaxed">{subtitle}</p>

            <p className=" leading-relaxed max-w-lg">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-[-4px] ">
              <a href={primaryButton.link} className="font-semibold">
                <Button variant="secondary">
                  {primaryButton.text}&nbsp;
                  <i className="fi fi-br-arrow-small-right mt-1"></i>
                </Button>
              </a>

              <a href={secondaryButton.link}>
                <Button variant="primary">
                  {secondaryButton.text}&nbsp;
                  <i className="fi fi-br-arrow-small-right mt-1"></i>
                </Button>
              </a>
            </div>
          </div>

          {/* photo eta */}
          <div className="flex-1 relative">
            <div className="relative w-full min-h-[300px]  max-h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AboutComponent4;
