import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { CheckCircle2, ChevronRight } from "lucide-react";
import ColorHeading from "./ColorHeading";

const CourseStructure = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const curriculum = [
    {
      week: "Week 01",
      title: "AI Product Photography & Static Ads",
      topics: [
        "AI Product Photography, Colorgrade & Cinematography (Practical one brand complete photoshoot)",
        "AI Photoshoot for Clothing Brands with Consistancy (One brand practical photoshoot)",
        "Live Q/A on AI Photography Slops and Consistancy",
      ],
    },
    {
      week: "Week 02",
      title: "AI Videography & Commercials for Brands",
      topics: [
        "AI Videography for Brands (Practical 1 AI personal avatar reel)",
        "AI Commercials (Practical one commercial for any brand)",
        "Live Q&A on Videography Slops",
      ],
    },
    {
      week: "Week 03",
      title: "AI Video & UGC Content",
      topics: [
        "Create your First AI Influencer (Practical replica of one famous influencer)",
        "Create your First UGC Ad (Practical one ugc for product)",
        "Live Q&A on AI Influencer Common Issues and UGC Video Errors",
      ],
    },
    {
      week: "Week 04",
      title: "Portfolio, and How to get Clients",
      topics: [
        "Meta Ads",
        "Linkedin Cold DM’s",
        "Live Q&A on How to get clients",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Interactive <ColorHeading text="Curriculum" />
          </h2>
          <p className="text-xl text-(--secondary-color) font-medium">
            12 Live Classes. 4 Capstone Projects. Lifetime Support.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {curriculum.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              className={`px-6 py-3 rounded-2xl font-semibold cursor-pointer text-sm uppercase tracking-widest transition-all ${
                activeWeek === i
                  ? "bg-black text-white shadow-xl scale-105"
                  : "bg-white text-gray-400 hover:bg-gray-100"
              }`}
            >
              {item.week}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 md:p-14 rounded-xl border border-gray-100 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 cursor-pointer"
          >
            <div className="md:w-1/2">
              <span className="text-(--primary-color) font-bold text-xl mb-4 block">
                {curriculum[activeWeek].week}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {curriculum[activeWeek].title}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 font-bold mb-8">
                <ChevronRight size={20} className="text-(--primary-color)" />
                <span>3 Live Sessions • 6 Hours</span>
              </div>
            </div>

            <div className="md:w-1/2">
              <h4 className="font-bold text-xl mb-8 uppercase tracking-widest text-gray-300">
                Modules Covered
              </h4>
              <ul className="space-y-6">
                {curriculum[activeWeek].topics.map((topic, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-sm md:text-lg font-medium"
                  >
                    <CheckCircle2
                      className="text-(--primary-color) shrink-0  "
                      size={20}
                    />
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CourseStructure;
