import React from "react";

const ColorHeading = ({ text }) => {
  return (
    <span className="text-black whitespace-nowrap bg-(--primary-color) px-4 rotate-[-1deg] inline-block">
      {text}
    </span>
  );
};

export default ColorHeading;
