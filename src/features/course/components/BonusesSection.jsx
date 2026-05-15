import AnimatedSection from "./AnimatedSection";
import { Gift, FileText, Smartphone, Layout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ColorHeading from "./ColorHeading";

const BonusesSection = () => {
  const bonuses = [
    {
      icon: Layout,
      title: "AI Ad Templates",
      value: "PKR 3,000",
      desc: "Proven high-converting ad layouts you can plug AI content into instantly.",
    },
    {
      icon: FileText,
      title: "Client Pitch Scripts",
      value: "PKR 5,000",
      desc: "Exactly what to say to brands to get them to agree to a paid trial.",
    },
    {
      icon: Smartphone,
      title: "Mobile Setup Guide",
      value: "PKR 2,000",
      desc: "How to run your entire AI ad business from just your smartphone.",
    },
    {
      icon: Gift,
      title: "Premium Prompt Vault",
      value: "PKR 4,000",
      desc: "Our library of 500+ hyper-specific product photography prompts.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-5 md:px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-(--primary-color)/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 shadow-lg mb-6">
            <Sparkles size={14} className="text-(--primary-color)" />

            <span className="text-sm font-semibold text-zinc-300">
              Limited-Time Premium Bonuses
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.92] mb-6">
            Insane
            <br />
            <ColorHeading text="Bonuses" />
          </h2>

          {/* Description */}
          <p className="text-xl md:text-3xl font-bold text-zinc-300">
            Total Value:
            <span className="text-white"> PKR 14,000+ Included FREE</span>
          </p>

          {/* Small Note */}
          <p className="text-sm md:text-base text-zinc-500 font-medium mt-4">
            Everything below is included with your enrollment.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {bonuses.map((bonus, i) => (
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
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-7
                  md:p-8
                  shadow-xl
                  hover:border-(--primary-color)/20
                  hover:bg-white/[0.05]
                  transition-all
                  duration-500
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.12),transparent_70%)]" />

                {/* Top Row */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      md:h-12 md:w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-(--primary-color)
                      shadow-[0_0_30px_rgba(184,255,3,0.18)]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <bonus.icon
                      className="text-black"
                      size={22}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* FREE Badge */}
                  <div className="rounded-full border border-(--primary-color)/20 bg-(--primary-color)/10 px-3 py-1">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-(--primary-color)">
                      Free
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl md:text-3xl lg:text-2xl font-bold tracking-tight leading-tight mb-4">
                  {bonus.title}
                </h3>

                {/* Value */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <span className="text-sm md:text-xs font-black uppercase tracking-[0.15em] text-zinc-300">
                      Value: {bonus.value}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 text-base  text-zinc-400 font-medium leading-relaxed">
                  {bonus.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <AnimatedSection delay={0.4} className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-(--primary-color)/20 bg-white/[0.03] backdrop-blur-xl px-8 py-8 md:px-12 md:py-10">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.08),transparent_70%)]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  You’re Getting Everything Included.
                </h3>

                <p className="text-zinc-400 text-lg font-medium max-w-2xl">
                  Most courses charge separately for templates, prompts, and
                  client systems. Here, it’s all included from day one.
                </p>
              </div>

              {/* Value Card */}
              <div className="flex-shrink-0 rounded-2xl border border-(--primary-color)/20 bg-black px-8 py-6 text-center shadow-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-bold mb-2">
                  Bonus Value
                </p>

                <h4 className="text-4xl md:text-5xl font-black text-(--primary-color)">
                  14K+
                </h4>

                <p className="text-zinc-400 font-semibold mt-2">
                  Included FREE
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BonusesSection;
