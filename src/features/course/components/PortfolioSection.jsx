import AnimatedSection from "./AnimatedSection";
import ColorHeading from "./ColorHeading";
import { projectsData } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Play, Layers3 } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 px-5 md:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-(--primary-color)/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16 md:mb-24">
          {/* Left */}
          <div className="max-w-4xl">
            <AnimatedSection>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm mb-6">
                <Sparkles size={14} className="text-(--primary-color)" />

                <span className="text-sm font-semibold text-zinc-600">
                  Client-Ready AI Projects
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.92] mb-6">
                The AI
                <br />
                <ColorHeading text="Portfolio" />
                <br />
                You'll Build
              </h2>
            </AnimatedSection>
          </div>

          {/* Right */}
          <AnimatedSection delay={0.2} className="lg:max-w-md">
            <p className="text-base md:text-lg text-zinc-400 font-medium max-w-3xl leading-relaxed ">
              You won't just learn AI tools. You'll create agency-level projects
              that brands are actively paying creators for.
            </p>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Commercial Ads", "UGC Videos", "Luxury Visuals"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm"
                  >
                    <span className="text-sm font-bold text-zinc-700">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projectsData.map((project, i) => {
            const featured = i === 0;

            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    bg-black
                    cursor-pointer
                    border
                    border-black/5
                    shadow-xl
                    hover:shadow-2xl
                    transition-all
                    duration-500 aspect-[16/10]
                  `}
                >
                  <Link
                    to={`/project/${project.slug}`}
                    className="block h-full w-full"
                  >
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                    {/* Glow Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.18),transparent_70%)]" />

                    {/* Top Content */}
                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-20">
                      {/* Type */}
                      <div className="inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 px-4 py-2">
                        <Layers3 size={14} className="text-(--primary-color)" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--primary-color)">
                          {project.type}
                        </span>
                      </div>

                      {/* View Button */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/40
                          backdrop-blur-xl
                          transition-all
                          duration-500
                          group-hover:bg-(--primary-color)
                          group-hover:border-(--primary-color)
                        "
                      >
                        <ArrowUpRight
                          size={20}
                          className="text-white group-hover:text-black transition-colors"
                        />
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                      {/* Title */}
                      <h3
                        className={`
                          text-white
                          font-bold
                          tracking-tight
                          leading-tight

                              text-2xl md:text-3xl
                        `}
                      >
                        {project.title}
                      </h3>

                      {/* Bottom Meta */}
                      <div className="flex flex-wrap gap-3 mt-6">
                        {["Client Ready", "Commercial Quality"].map(
                          (item, idx) => (
                            <div
                              key={idx}
                              className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2"
                            >
                              <span className="text-xs md:text-sm font-semibold text-white/80">
                                {item}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Hover Bottom Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700 z-30" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
