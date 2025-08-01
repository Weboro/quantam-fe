"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onClick={handleScrollToTop}
      className="fixed right-3 bottom-3 md:right-6 md:bottom-6 scale-[65%] md:scale-[75%] fade-in"
    >
      <Button
        icon="fi fi-br-angle-small-up"
        variant="primaryAlt"
        className="py-4 text-xl rounded-full"
      />
    </div>
  );
};

export default ScrollToTop;
