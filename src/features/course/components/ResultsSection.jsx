import AnimatedSection from "./AnimatedSection";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ColorHeading from "./ColorHeading";

const ResultsSection = () => {
  const reviews = [
    {
      name: "Ahmed Raza",
      role: "Ecom Store Owner",
      text: "I used to spend 50k on monthly shoots. Now I generate all my ads using the AI techniques I learned here for virtually zero cost.",
      result: "Massive ROI Increase",
      initials: "AR",
      featured: true,
    },
    {
      name: "Sabahat Khan",
      role: "Freelance Designer",
      text: "Went from charging $10/hour to closing $500 project packages for local brands just after 3 weeks into the bootcamp.",
      result: "$500 Projects",
      initials: "SK",
    },
    {
      name: "Zeeshan Ali",
      role: "Digital Marketer",
      text: "The Urdu AI voiceover module changed the game for my local campaigns. Meta conversions jumped by 40%.",
      result: "+40% Conversions",
      initials: "ZA",
    },
    {
      name: "Hassan Mehmood",
      role: "Shopify Store Owner",
      text: "I launched my first AI commercial during Week 2 and instantly used it in TikTok campaigns. Sales doubled.",
      result: "Sales Doubled",
      initials: "HM",
    },
    {
      name: "Areeba Noor",
      role: "Content Creator",
      text: "Before this bootcamp I had no idea how AI worked. Now brands pay me to create UGC-style AI campaigns.",
      result: "First Paying Clients",
      initials: "AN",
    },
    {
      name: "Usman Tariq",
      role: "Freelancer",
      text: "The outreach system alone was worth the price. I landed 2 international clients using the exact methods taught.",
      result: "2 International Clients",
      initials: "UT",
    },
    {
      name: "Maham Javed",
      role: "Social Media Manager",
      text: "This course feels years ahead of the Pakistani market. My content quality completely transformed.",
      result: "Premium Content Upgrade",
      initials: "MJ",
    },
    {
      name: "Bilal Aslam",
      role: "Video Editor",
      text: "I was struggling to find valuable skills. Now I offer premium AI ad services to ecommerce brands.",
      result: "High-Income Skill",
      initials: "BA",
    },
  ];

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
        {/* Heading */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm mb-6">
            <div className="h-2 w-2 rounded-full bg-(--primary-color)" />

            <span className="text-sm font-semibold text-zinc-600">
              Trusted By 500+ Professionals
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.92] mb-6">
            Real Proof.
            <br />
            <ColorHeading text="Real Results." />
          </h2>

          {/* Description */}
          <p className="text-sm md:text-xl text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Students are already building AI services, landing clients, and
            generating income using these exact systems.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
            {[
              "500+ Students",
              "4.9/5 Rating",
              "Thousands In Client Revenue",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-full border border-black/10 bg-white px-5 py-2 shadow-sm"
              >
                <span className="text-sm md:text-base font-bold text-zinc-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4">
          {reviews.map((review, i) => (
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
                className={`
                  group
                  relative
                  h-full
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

                  ${review.featured ? "md:col-span-2" : ""}
                `}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.12),transparent_70%)]" />

                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="relative z-10 text-(--primary-color)/20 mb-4"
                  strokeWidth={1.5}
                />

                {/* Rating */}
                <div className="relative z-10 flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#b8ff03"
                      className="text-(--primary-color)"
                    />
                  ))}
                </div>

                {/* Result Chip */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center rounded-full bg-(--primary-color)/10 px-4 py-2 border border-(--primary-color)/20">
                    <span className="text-xs md:text-xs font-black uppercase tracking-wide text-black">
                      {review.result}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <p className="relative z-10 text-base md:text-base text-zinc-600  font-base mb-8">
                  "{review.text}"
                </p>

                {/* Profile */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Avatar */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-(--primary-color) to-zinc-900 shadow-lg">
                    <span className="text-sm font-black text-white">
                      {review.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h5 className="text-lg font-bold tracking-tight text-black">
                      {review.name}
                    </h5>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-(--primary-color) group-hover:w-full transition-all duration-700" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
