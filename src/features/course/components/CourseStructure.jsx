import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Tilt from "react-parallax-tilt";

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
      bgImg: "/images/week1.avif",
    },
    {
      week: "Week 02",
      title: "AI Videography & Commercials for Brands",
      topics: [
        "AI Videography for Brands (Practical 1 AI personal avatar reel)",
        "AI Commercials (Practical one commercial for any brand)",
        "Live Q&A on Videography Slops",
      ],
      bgImg: "/images/week2.avif",
    },
    {
      week: "Week 03",
      title: "AI Video & UGC Content",
      topics: [
        "Create your First AI Influencer (Practical replica of one famous influencer)",
        "Create your First UGC Ad (Practical one ugc for product)",
        "Live Q&A on AI Influencer Common Issues and UGC Video Errors",
      ],
      bgImg: "/images/week3.avif",
    },
    {
      week: "Week 04",
      title: "Portfolio, and How to get Clients",
      topics: [
        "Meta Ads",
        "Linkedin Cold DM’s",
        "Live Q&A on How to get clients",
      ],
      bgImg: "/images/week4.avif",
    },
  ];

  return (
    <section id="curriculum" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Interactive <br /> <ColorHeading text="Curriculum" />
          </h2>

          <p className="text-xl text-(--secondary-color) font-medium">
            12 Live Classes. 4 Capstone Projects. Lifetime Support.
          </p>
        </AnimatedSection>

        {/* Week Tabs */}
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

        {/* Tilt Card */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1400}
          scale={1.01}
          transitionSpeed={1200}
          gyroscope={true}
          className="h-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className={`group
                relative
                overflow-hidden
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                p-8
                md:p-14
                shadow-2xl
                flex
                flex-col
                md:flex-row
                gap-8
                md:gap-12
                transition-all
                duration-500
                hover:border-(--primary-color)/30
                bg-cover
                bg-center

                `}
              style={{
                backgroundImage: `url(${curriculum[activeWeek].bgImg})`,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.12),transparent_70%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(to_top_left,rgba(255,255,255,0.85)_30%,rgba(255,255,255,0.35)_60%,transparent_100%)] backdrop-blur-xs" />

              {/* Left */}
              <div className="relative z-10 md:w-1/2">
                <span className="text-(--primary-color) font-bold text-xl mb-4 block">
                  {curriculum[activeWeek].week}
                </span>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                  {curriculum[activeWeek].title}
                </h3>

                <div className="flex items-center gap-2 text-gray-200 font-bold mb-8">
                  <ChevronRight size={20} className="text-(--primary-color)" />

                  <span>3 Live Sessions • 6 Hours</span>
                </div>
              </div>

              {/* Right */}
              <div className="relative z-10 md:w-1/2">
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
                        className="text-(--primary-color) shrink-0"
                        size={20}
                      />

                      {topic}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
            </motion.div>
          </AnimatePresence>
        </Tilt>
      </div>
    </section>
  );
};

export default CourseStructure;
