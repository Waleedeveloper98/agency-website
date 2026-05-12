import React from "react";



const ReviewTag = ({
  images = avatars,
  text = "From 10K+ Reviews",
  rating = "4.9/5",
  maxVisible,
  className = "",
}) => {
  // limit images if maxVisible is provided
  const visibleImages = maxVisible ? images.slice(0, maxVisible) : images;

  return (
    <div
      className={`secondary-font bg-white text-black border border-neutral-200 px-3 py-2 rounded-full flex items-center gap-2 w-fit ${className}`}
    >
      {/* avatars */}
      <div className="flex items-center -space-x-3">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            className="w-8 h-8 rounded-full object-cover border-2 border-white"
            src={img}
            alt={`avatar-${index}`}
          />
        ))}
      </div>

      {/* text */}
      <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">
        <span className="font-bold">{rating}</span> {text}
      </div>
    </div>
  );
};

export default ReviewTag;
