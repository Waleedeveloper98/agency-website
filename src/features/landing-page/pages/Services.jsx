import React from "react";
import ServiceCard from "../components/ServiceCard";

const servicesData = [
  {
    number: "01",
    heading: "YouTube Video Editing",
    paragraph:
      "We transform your raw footage into high-retention, cinematic YouTube videos that keep viewers hooked from the first second to the last. Every cut, transition, and sound effect is crafted with purpose to maximize watch time and grow your channel faster.",
    img: "./images/service1.webp",
  },
  {
    number: "02",
    heading: "YouTube Shorts & Reels",
    paragraph:
      "Scroll-stopping short-form content edited to capture attention in the first 3 seconds and hold it till the end. We craft viral-ready Shorts that drive massive impressions, new subscribers, and consistent channel growth on autopilot.",
    img: "./images/service2.webp",
  },
  {
    number: "03",
    heading: "Cash Cow Video Editing",
    paragraph:
      "Faceless, fully edited cash cow videos built to generate passive income around the clock. We handle the pacing, voiceover sync, B-roll, and motion graphics so your channel runs like a business — without you ever showing your face.",
    img: "./images/service3.webp",
  },
  {
    number: "04",
    heading: "Talking Head Videos",
    paragraph:
      "Clean, professional talking head edits that make you look and sound your absolute best on camera. From color grading to jump cut cleanup, captions, and B-roll inserts — we make sure every video builds your authority and keeps your audience engaged.",
    img: "./images/service4.webp",
  },
];

const Services = () => {
  return (
    <section id="services" className="secondary-font w-full max-w-[1200px]  relative mx-auto px-5 py-10 sm:py-20 flex flex-col gap-16">
      <div className="content flex flex-col items-center gap-y-4 md:gap-y-10 text-center">
        <div>
          <h6 className="bg-white px-4 py-2 shadow-sm shadow-black/10 primary-font text-xl sm:text-2xl md:text-3xl font-medium">
            Services
          </h6>
        </div>
        <div>
          <h2 className="primary-font font-medium text-2xl md:text-4xl lg:text-5xl">
            Services That Speak for Themselves
          </h2>
        </div>
        <div className="hidden">
          <p className="text-(--secondary-color)">
            From high-retention YouTube edits to viral shorts we offer
            end-to-end post-production services built specifically for creators
            who are serious about growth.
          </p>
        </div>
      </div>

      <div className="content h-[300vh] md:h-[150vh] lg:h-[340vh] relative">
        {servicesData.map((data, idx) => (
          <ServiceCard key={idx} data={data} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Services;
