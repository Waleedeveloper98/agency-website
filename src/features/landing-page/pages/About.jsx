import React from "react";

const About = () => {
  return (
    <section className="w-full relative max-w-[1280px] mx-auto p-6 flex flex-col gap-13 pt-10 sm:pt-32 sm:pb-20 sm:flex-row sm:items-start">
      <div className="sm:w-[30%] sm:sticky sm:top-10">
        <h3 className="syne text-3xl md:text-5xl font-semibold">About Our Agency</h3>
      </div>
      <div className="inter sm:w-[70%] sm:pr-10 flex flex-col gap-6">
        <h4 className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 mb-4">
          We Are Not Just an Agency. We Are Your Creative Partners{" "}
          <span className="text-black">
            born from passion. Built on creativity.
          </span>
        </h4>
        <div className="flex flex-col gap-8 sm:text-lg md:text-xl">
          <p>
            Zainx Media is a passionate creative agency dedicated to
            transforming your ideas into powerful visual stories. We specialize
            in video editing, thumbnail designing, YouTube Shorts, Cash Cow
            videos, spiritual content, and talking head videos — delivering
            content that doesn't just look good, but actually performs.
          </p>
          <p>
            We don't believe in average. Every project we touch is treated with
            obsessive attention to detail, creative thinking, and a genuine
            desire to help your brand grow. Whether you're a YouTuber scaling
            your channel, a brand building its identity, or a creator with a
            vision — we're here to bring it to life, frame by frame.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:mt-4 gap-5">
          {[
            { count: "6+", text: "Years of experience" },
            { count: "50+", text: "repeated clients" },
            { count: "470+", text: "completed projects" },
            { count: "350+", text: "Happy clients" },
          ].map((item) => (
            <div
              key={item.count}
              className="relative rounded-xl overflow-hidden flex items-center justify-center flex-col gap-4 mb-2"
            >
              <h5 className="text-5xl md:text-6xl syne font-bold bg-gradient-to-r from-[#b8ff03] to-[#9ee100] text-transparent bg-clip-text opacity-45 z-0">
                {item.count}
              </h5>
              <h4 className="syne text-xs md:text-lg whitespace-nowrap font-bold text-center leading-none uppercase">
                {item.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;