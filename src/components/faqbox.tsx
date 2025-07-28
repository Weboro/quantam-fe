"use client";

import type { IFaqBox } from "../data/faqbox";
import Button from "./ui/Button";
import ContainerLayout from "./layouts/ContainerLayout";
import { useState } from "react";

interface Props {
  faqBoxData: IFaqBox;
}

export default function FaqBox({ faqBoxData }: Props) {
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = "+1234567890";

  const handleContactClick = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${faqBoxData.email}`;
  };
  return (
    <ContainerLayout>
      <div
        className="rounded-sm px-4 md:py-4  flex flex-col items-start relative overflow-hidden md:m-16 aspect-[3/4] md:aspect-auto py-28"
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none rounded-sm"
          style={{
            background:
              "linear-gradient(to right, #00295C 0%, #00295C 50%, transparent 100%)",
            opacity: 0.7,
          }}
        />
        <div className="md:mb-2 font-primary relative z-10">
          <h3 className="text-2xl font-bold text-white">{faqBoxData.title}</h3>
          <h4 className="text-xl font-semibold text-white">
            {faqBoxData.subtitle}
          </h4>
        </div>
        <p className="md:mb-8 text-white leading-relaxed font-primary flex items-start relative z-10">
          {faqBoxData.description}
        </p>
        <div className="md:font-bold text-secondary md:flex-row  flex gap-4  flex-col   z-10 mt-5 md:mt-0">
          <Button
            variant="primaryAlt"
            as="a"
            href={`mailto:${faqBoxData.email}`}
            className="cursor-pointer"
          >
            <span className="font-bold relative top-0.5">
              <i className="fi fi-br-envelope"></i>
            </span>
            <span className="font-bold">{faqBoxData.email}</span>
          </Button>
          <div className="relative">
            {showCopied && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                Copied!
              </div>
            )}
            <div onClick={handleContactClick} className="cursor-pointer">
              <Button variant="secondary">
                <span className="font-bold mr-1 rotate-90">
                  <i className="fi fi-br-phone-flip"></i>
                </span>
                <span className="font-bold">Contact Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}
