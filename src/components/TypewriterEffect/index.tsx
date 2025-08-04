"use client";
import { useState, useEffect } from "react";

interface ITypewriterEffect {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypewriterEffect: React.FC<ITypewriterEffect> = ({
  strings = ["Word 1", "Word 2", "Word 3"],
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentStringIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (!isDeleting) {
          // Typing
          if (currentText.length < currentString.length) {
            setCurrentText(currentString.slice(0, currentText.length + 1));
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Finished deleting, move to next string
            setIsDeleting(false);
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isPaused ? pauseTime : isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentStringIndex,
    strings,
    typeSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
