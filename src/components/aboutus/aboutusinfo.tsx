import React from "react";
import { aboutUsInfo } from "../../data/aboutusinfo";
import Button from "../ui/Button";
import ContainerLayout from "../layouts/ContainerLayout";

const {
  sectionTitle,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  textAlign = "left",
} = aboutUsInfo;

const alignClass =
  textAlign === "center" ? "items-center text-center" : "items-start text-left";

const AboutUsInfo: React.FC = () => (
  <ContainerLayout>
    <div
      className={
        "flex flex-col md:flex-row md:items-start justify-between w-full py-4  "
      }
    >
      <div className={`flex flex-col flex-1 ${alignClass}`}>
        <span className="text-muted text-base font-medium mb-0.5">
          {sectionTitle}
        </span>
        <h2 className="text-3xl font-bold text-brand-primary-black leading-tight mb-6">
          {title}
          <br />
          {subtitle}
        </h2>
        <p className="text-lg text-brand-primary-black font-normal max-w-2xl">
          {description}
        </p>
      </div>

      {buttonText && buttonLink && (
        <div className="flex flex-col  items-start md:items-end flex-1 mt-6 md:mt-0 md:gap-30 gap-8">
          <a href={buttonLink}>
            <Button variant="secondary">{buttonText}</Button>
          </a>
          <div className="flex items-center gap-4 ">
            <div className="size-6 flex justify-center items-center  bg-brand-primary-yellow rounded-full">
              <span className="flex items-center justify-center">
                <i className="fi fi-br-angle-small-left mt-1" />
              </span>
            </div>
            <div className="size-6 flex justify-center items-center bg-brand-primary-yellow rounded-full">
              <i className="fi fi-br-angle-small-right mt-1 " />
            </div>
          </div>
        </div>
      )}
    </div>
  </ContainerLayout>
);

export default AboutUsInfo;
