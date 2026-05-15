import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ColorHeading from "./ColorHeading";

const TransformationSection = () => {
  const steps = [
    {
      phase: "Day 1",
      title: "Tool Setup",
      desc: "Access the complete AI creator stack and understand the modern content ecosystem.",
    },
    {
      phase: "Week 1",
      title: "The Creative Eye",
      desc: "Learn prompting systems and create hyper-realistic AI product visuals.",
    },
    {
      phase: "Week 2",
      title: "The Animator",
      desc: "Turn static products into cinematic AI commercials with motion workflows.",
    },
    {
      phase: "Week 3",
      title: "The Campaign",
      desc: "Build full ad funnels with UGC creators, voiceovers, and conversion systems.",
    },
    {
      phase: "Week 4",
      title: "The Professional",
      desc: "Launch your portfolio, pitch clients confidently, and close your first AI deal.",
      // featured: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32 px-5 md:px-6 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Subtle Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-(--primary-color)/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16 md:mb-28">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-(--primary-color)" />

            <span className="text-sm font-semibold text-white/70">
              Beginner → Professional AI Creator
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Your 30-Day
            <br />
            <ColorHeading text="Transformation" />
          </h2>

          {/* Description */}
          <p className="text-base md:text-xl text-zinc-400 font-medium max-w-3xl leading-relaxed text-center mx-auto">
            In just 30 days you'll go from complete beginner to AI creator with
            monetizable, real-world skills.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile Vertical Line */}
          <div className="absolute left-[9px] top-0 h-full w-px bg-gradient-to-b from-white/5 via-white/10 to-white/5 md:hidden" />

          {/* Desktop Horizontal Line */}
          <div className="absolute left-0 top-[10px] hidden h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 md:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 md:gap-6 relative">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1400}
                  scale={1.02}
                  transitionSpeed={1200}
                  gyroscope={true}
                  className="h-full"
                >
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
                      pl-12
                      md:pl-0
                      md:pt-14

                      ${step.featured ? "md:-translate-y-3" : ""}
                    `}
                  >
                    {/* Timeline Anchor */}
                    <div
                      className="
                        absolute
                        left-0
                        top-1
                        md:left-1/2
                        md:-translate-x-1/2
                        md:top-0
                        z-20
                      "
                    >
                      <div
                        className={`
                          relative
                          h-5
                          w-5
                          rounded-full
                          border
                          transition-all
                          duration-500

                          ${
                            step.featured
                              ? "border-(--primary-color) bg-(--primary-color)"
                              : "border-white/20 bg-black"
                          }

                          group-hover:border-(--primary-color)
                          group-hover:bg-(--primary-color)
                        `}
                      >
                        <div
                          className={`
                            absolute
                            inset-1
                            rounded-full
                            transition-colors
                            duration-500

                            ${step.featured ? "bg-black" : "bg-white/20"}

                            group-hover:bg-black
                          `}
                        />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        p-6
                        md:p-7
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        group-hover:border-(--primary-color)/30

                        ${
                          step.featured
                            ? "border-(--primary-color)/20 bg-white/[0.06] shadow-[0_0_40px_rgba(184,255,3,0.08)]"
                            : "border-white/10 bg-white/[0.03]"
                        }
                      `}
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.10),transparent_70%)]" />

                      {/* Phase */}
                      <div className="relative z-10 mb-4">
                        <div className="inline-flex items-center rounded-full bg-(--primary-color)/10 px-4 py-2 border border-(--primary-color)/20">
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-(--primary-color)">
                            {step.phase}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          relative z-10
                          text-2xl
                          md:text-[2rem]
                          lg:text-2xl
                          font-bold
                          tracking-tight
                          leading-tight
                          mb-4
                        "
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          relative z-10
                          text-base
                          md:text-lg
                          lg:text-sm
                          leading-relaxed
                          text-zinc-300
                        "
                      >
                        {step.desc}
                      </p>

                      {/* Bottom Hover Line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
                    </div>
                  </motion.div>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
