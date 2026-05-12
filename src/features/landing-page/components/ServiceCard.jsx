import React from "react";

const ServiceCard = ({ data }) => {
  const { number, heading, paragraph, img } = data;
  return (
    <div className={`w-full max-w[800px] max-h-[500px] sticky top-[50px] mb-8 bg-[linear-gradient(to_bottom_right,#d9f99d_0%,white_40%)] p-4 md:py-7 md:px-8 rounded-md flex flex-col gap-6 md:flex-row md:gap-8 shadow shadow-black/10`}>
      {/* image */}
      <div className="w-full md:w-[40%] h-[clamp(200px,40vw,400px)] rounded-md overflow-hidden group">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          src={img}
          loading="lazy"
          alt={heading}
        />
      </div>

      <div className="details-part md:w-[60%] pb-5 flex flex-col gap-2 md:gap-4">
        <p className="font-['Inter'] text-sm border border-(--secondary-color) size-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-(--primary-color) transition-colors duration-200 ease-in-out">
          {number}
        </p>
        <div className="font-['Syne'] font-medium text-2xl md:text-3xl lg:text-4xl pointer-events-none select-none">
          <h3>{heading}</h3>
        </div>

        <div className="font-['Inter'] pr-6 pointer-events-none md:pr-20">
          <p className="text-sm text-(--secondary-color) select-none md:text-base md:text-justify">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
