import AnimatedSection from "./AnimatedSection";
import {
  User,
  Briefcase,
  GraduationCap,
  Laptop,
  ShoppingBag,
  Palette,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const AudienceSection = () => {
  const audiences = [
    {
      title: "Freelancers",
      icon: Briefcase,
      desc: "Upgrade your design services with AI and charge premium rates.",
    },
    {
      title: "Students",
      icon: GraduationCap,
      desc: "Learn a future-proof skill to fund your studies or start a career.",
    },
    {
      title: "Ecom Owners",
      icon: ShoppingBag,
      desc: "Save lakhs on creative production and scale your own brand.",
    },
    {
      title: "Job Seekers",
      icon: User,
      desc: "Stand out in the marketing job market with unique AI credentials.",
    },
    {
      title: "Creators",
      icon: Palette,
      desc: "Take your content quality to the cinematic level effortlessly.",
    },
    {
      title: "Beginners",
      icon: Laptop,
      desc: "No tech background? No problem. AI handles the complexity.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 px-5 md:px-6">
      {/* Background */}
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
        <AnimatedSection className="text-center mb-16 md:mb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm mb-6">
            <Sparkles size={14} className="text-(--primary-color)" />

            <span className="text-sm font-semibold text-zinc-600">
              Built For The Next Generation Of Creators
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Who is this
            <span className="text-zinc-300"> for?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            If you want to capitalize on the AI revolution and build a
            high-income skill, you're in the right place.
          </p>
        </AnimatedSection>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {audiences.map((aud, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
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
                  overflow-hidden
                  rounded-xl
                  border
                  border-black/5
                  bg-white/80
                  backdrop-blur-xl
                  p-7
                  md:p-8
                  shadow-lg
                  hover:shadow-2xl
                  hover:border-(--primary-color)/20
                  transition-all
                  duration-500
                  h-full
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.10),transparent_70%)]" />

                {/* Top Row */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  {/* Icon */}
                  <div
                    className="
                      flex
                     h-12
                     w-12
                     lg:h-10
                     lg:w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-black/5
                      bg-gray-50
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:bg-(--primary-color)
                      group-hover:shadow-[0_0_30px_rgba(184,255,3,0.18)]
                    "
                  >
                    <aud.icon
                      size={22}
                      className="text-black"
                      strokeWidth={2}
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-3xl font-bold tracking-tight leading-tight mb-4">
                    {aud.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed">
                    {aud.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Trust Statement */}
        <AnimatedSection delay={0.4} className="mt-14 md:mt-20">
          <div className="rounded-xl border border-black/5 bg-gray-50 px-8 py-8 md:px-12 md:py-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              You Don’t Need To Be “Techy”.
            </h3>

            <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">
              This bootcamp was designed for normal people who want to build
              high-income AI skills without complicated coding or technical
              experience.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AudienceSection;
