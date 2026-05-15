import React from "react";

const ColorHeading = ({ text }) => {
  return (
    <span className="bg-(--primary-color) text-black italic-font italic font-light rotate-[-1deg] inline-block px-2">
      {text}
    </span>
  );
};

export default ColorHeading;
