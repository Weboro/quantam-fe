import { useState } from "react";

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
    console.log("clicked");
  };

  return (
    <div
      className="mb-4 pb-2 border-b border-b-surface-2 cursor-pointer  "
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm  text-text mb-2 font-semibold text-primary">
          {question}
        </p>
        <i
          className={`fi fi-rr-angle-small-${open ? "up" : "down"} text-xl transition-transform duration-300`}
        ></i>
      </div>
      {open && <p className="text-surface- mt-2 text-secondary">{answer}</p>}
    </div>
  );
};

export default FaqCard;
