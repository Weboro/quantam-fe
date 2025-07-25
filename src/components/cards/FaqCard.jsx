import React, { useState } from "react";

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
    console.log("clicked");
  };

  return (
    <div
      className="mb-4 border-b border-gray-200 cursor-pointer"
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-gray-900 mb-2">{question}</p>
        <i
          className={`fi fi-rr-angle-small-${open ? "up" : "down"} text-xl transition-transform duration-300`}
        ></i>
      </div>
      {open && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
};

export default FaqCard;
