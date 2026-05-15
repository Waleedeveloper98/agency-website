import AnimatedSection from "./AnimatedSection";
import { X, Check, ArrowRight } from "lucide-react";
import ColorHeading from "./ColorHeading";
import { motion } from "framer-motion";

const ComparisonSection = () => {
  const oldWay = [
    "Expensive professional gear & studio (Lakhs)",
    "Manual editing (8–10 hours/video)",
    "Hiring expensive models & voice artists",
    "Hard to iterate or split test ads",
    "Slow turnaround times (1–2 weeks)",
  ];

  const aiWay = [
    "Just a laptop & high-speed internet",
    "AI Ad creation (Under 10 minutes)",
    "Digital human models & AI voice clones",
    "Generate 50+ variations for split testing",
    "Instant delivery to clients (Same day)",
  ];

  return (
    <section
      id="comparison"
      className="relative overflow-hidden bg-zinc-50 py-24 md:py-32 lg:pb-24 px-5 md:px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-(--primary-color)/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm mb-6">
            <div className="h-2 w-2 rounded-full bg-(--primary-color) animate-pulse" />
            <span className="text-sm font-semibold text-zinc-600">
              The Future Of Content Creation
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter  mb-6">
            The New Era Of
            <br />
            <ColorHeading text="Advertising" />
          </h2>

          <p className="text-lg md:text-xl text-(--secondary-color) font-medium max-w-3xl mx-auto leading-relaxed lg:leading-normal ">
            Why AI creators outperform traditional workflows in speed,
            scalability, and profitability.
          </p>
        </AnimatedSection>

        {/* Comparison Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Desktop Connector */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-(--primary-color) shadow-2xl shadow-(--primary-color)/30">
              <ArrowRight size={32} className="text-black" />
            </div>
          </div>

          {/* Old Way */}
          <AnimatedSection direction="right">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200
                bg-white/70
                backdrop-blur-xl
                p-8
                md:p-12
                shadow-lg
              "
            >
              {/* Noise */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,black,transparent_70%)]" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex h-14 w-14 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-red-100 text-red-500 border border-red-200">
                    <X size={24} strokeWidth={3} />
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-(--secondary-color) mb-1">
                      Traditional Workflow
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-800">
                      The Old Way
                    </h3>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-6">
                  {oldWay.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-zinc-600"
                    >
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-400 shrink-0">
                        <X size={14} />
                      </div>

                      <span className="text-lg md:text-xl lg:text-lg font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* AI Way */}
          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-(--primary-color)/30
                bg-black
                p-8
                md:p-12
                shadow-[0_0_80px_rgba(184,255,3,0.12)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.18),transparent_70%)] opacity-70" />

              {/* Big Check */}
              <div className="absolute right-0 top-0 opacity-[0.04]">
                <Check size={240} className="text-white" />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      lg:h-12
                      lg:w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-(--primary-color)
                      text-black
                      shadow-lg
                      shadow-(--primary-color)/30
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  >
                    <Check size={24} strokeWidth={3} />
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-(--primary-color)/70 mb-1">
                      AI Powered Workflow
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                      The AI Way
                    </h3>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-6">
                  {aiWay.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-white"
                    >
                      <div
                        className="
                          mt-1
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          rounded-full
                          bg-(--primary-color)
                          text-black
                          shrink-0
                        "
                      >
                        <Check size={14} strokeWidth={3} />
                      </div>

                      <span className="text-lg md:text-xl lg:text-lg font-medium leading-relaxed text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-(--primary-color)" />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Mobile Divider */}
        <div className="lg:hidden flex justify-center py-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-(--primary-color) shadow-lg">
            <ArrowRight size={24} className="text-black rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;