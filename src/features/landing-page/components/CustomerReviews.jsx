import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Azunyan U. Wu",
    role: "CEO, fintechwin.ai",
    review:
      "As a lazy entrepreneur who got out of bed at 11, I managed to build my SaaS MVP with slothUI in 3 days. Never looked back since then.",
    image:
      "/images/editor1.webp",
  },
  {
    id: 2,
    name: "Sophia Turner",
    role: "Founder, NovaLabs",
    review:
      "SlothUI completely transformed our workflow. We launched our first product in less than a week.",
    image:
      "/images/editor2.webp",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Product Designer",
    review:
      "The clean components and smooth developer experience made building enjoyable again.",
    image:
      "/images/editor3.webp",
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Startup Advisor",
    review:
      "We saved countless hours using SlothUI. The interface and design system are simply perfect.",
    image:
      "/images/editor4.webp",
  },
  {
    id: 5,
    name: "Daniel Kim",
    role: "CEO, PixelCraft",
    review:
      "Fast, elegant, and production-ready. SlothUI helped us move from idea to launch effortlessly.",
    image:
      "/images/editor2.webp",
  },
];

export default function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(reviews[0]);

  return (
    <section className="w-full max-w-[1280px] mx-auto secondary-font  bg-gradient-to-b from-white from-[70%] to-[var(--primary-color)] to-[100%] flex items-center justify-center px-6 py-10 pb-24 overflow-hidden">
      <div className="relative w-full max-w-[600px]">
        {/*Glow */}
        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[90%] h-[180px] bg-(--primary-color) blur-[90px] opacity-70 rounded-full"></div>

        {/* Main Card */}
        <div className="relative bg-[#f8f8f8]/95 backdrop-blur-xl border border-white/40 rounded-lg sm:rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-5 sm:px-8 md:px-10 py-10 sm:py-14 text-center min-h-88 max-h-96 md:max-h-104">
          {/* Review */}
          <p className="text-[#2d3748] text-lg  md:text-2xl leading-[1.45] font-medium tracking-[-0.03em]">
            {activeReview.review}
          </p>

          {/* User Info */}
          <div className="mt-10">
            <h3 className="text-[#111827] text-[20px] sm:text-[24px] font-bold">
              {activeReview.name}
            </h3>

            <p className="text-[#4b5563] text-[15px] sm:text-[18px] mt-1">
              {activeReview.role}
            </p>
          </div>

          {/* Client Images */}
          <div className="flex items-center justify-center mt-10">
            {reviews.map((user, index) => {
              const isActive = activeReview.id === user.id;

              return (
                <button
                  key={user.id}
                  onClick={() => setActiveReview(user)}
                  className={`cursor-pointer relative transition-all duration-500 ${
                    index !== 0 ? "-ml-2 sm:-ml-3" : ""
                  } ${isActive ? "z-10" : ""}`}
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    loading="lazy"
                    className={`rounded-full object-cover border-[3px] border-white shadow-md transition-all duration-500
                    ${
                      isActive
                        ? "w-[58px] h-[58px] sm:w-[72px] sm:h-[72px] scale-110 opacity-100 z-20"
                        : "w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] scale-100 opacity-30 hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
