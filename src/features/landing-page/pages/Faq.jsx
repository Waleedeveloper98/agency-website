import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What types of videos do you edit?",
    answer:
      "We edit YouTube long-form videos, Shorts, Cash Cow videos, talking head videos, spiritual content, and more.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide video editing, thumbnail designing, YouTube Shorts, Cash Cow videos, spiritual content, and talking head videos.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team through email, live chat, or the contact form on our website.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we create customized solutions tailored to your business requirements and goals.",
  },
  {
    question: "What is your project delivery time?",
    answer:
      "Project timelines depend on the complexity and scope, but most projects are delivered within 2–6 weeks.",
  },
  {
    question: "Do you provide maintenance services?",
    answer:
      "Yes, we offer ongoing maintenance and support packages after project completion.",
  },
  {
    question: "How do I get a price quote?",
    answer:
      "You can request a free quote by sharing your project details through our contact page.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 md:pt-18 pb-20 px-4 flex flex-col gap-2">
      <h2 className="syne text-center mb-8 md:mb-14 text-2xl sm:text-3xl md:text-4xl font-bold px-10">Curious? Check Out the (FAQs)</h2>
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        const isHovered = hoveredIndex === index;

        return (
          <div key={index} className="border border-neutral-200 bg-white">
            {/* Question Row */}
            <button
              onClick={() => toggle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-full flex items-center justify-between px-8 py-4 md:py-6 text-left cursor-pointer"
            >
              <span
                className="text-lg md:text-xl font-medium inter transition-all duration-300"
                style={{
                  transform: isHovered ? "translateX(10px)" : "translateX(0px)",
                  color: isHovered ? "#84cc16" : "#1a1a1a",
                }}
              >
                {item.question}
              </span>

              <ChevronDown
                className="flex-shrink-0 ml-6 transition-all duration-300"
                style={{
                  transform: `translateX(${isHovered ? "-10px" : "0px"}) rotate(${isOpen ? "180deg" : "0deg"})`,
                  color: isHovered ? "#84cc16" : "#525252",
                }}
                size={22}
                strokeWidth={1.5}
              />
            </button>

            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p className="inter text-neutral-500 px-8 pb-6 pt-0 sm:pr-20 leading-relaxed md:text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );    
};

export default Faq;
