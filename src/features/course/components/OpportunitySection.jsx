import AnimatedSection from "./AnimatedSection";
import { Camera, Video, UserCheck, Mic, ArrowRight } from "lucide-react";
import ColorHeading from "./ColorHeading";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const OpportunitySection = () => {
  const opps = [
    {
      icon: Camera,
      title: "AI Product Photography",
      price: "PKR 5,000 / Shoot",
      desc: "Turn ordinary phone photos into studio-quality ecommerce visuals for brands.",
      tag: "Beginner Friendly",
    },
    {
      icon: Video,
      title: "AI Video Ads",
      price: "PKR 15,000 / Ad",
      desc: "Create cinematic AI commercials without cameras, studios, or expensive crews.",
      tag: "High Demand",
    },
    {
      icon: UserCheck,
      title: "UGC AI Content",
      price: "PKR 10,000 / Video",
      desc: "Generate realistic creator-style videos using AI human models and avatars.",
      tag: "Fast Growing",
    },
    {
      icon: Mic,
      title: "Urdu AI Voiceovers",
      price: "PKR 3,000 / Script",
      desc: "Create realistic Urdu voiceovers for ads, reels, and marketing campaigns.",
      tag: "Low Competition",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 md:py-32 px-5 md:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-(--primary-color)/10 blur-3xl" />

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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm mb-6">
              <div className="h-2 w-2 rounded-full bg-(--primary-color) animate-pulse" />
              <span className="text-sm font-semibold text-zinc-600">
                High-Income AI Skills
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              {" "}
              Modern Income <br /> <ColorHeading text={"Opportunities"} />{" "}
            </h2>

            <p className="text-lg md:text-xl text-(--secondary-color) font-medium max-w-3xl mx-auto leading-relaxed lg:leading-normal">
              Businesses are actively searching for creators who can produce
              fast, scalable, AI-powered content.
            </p>
          </AnimatedSection>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 mb-20 md:mb-28">
          {opps.map((opp, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <FeatureCard
                icon={opp.icon}
                title={opp.title}
                price={opp.price}
                desc={opp.desc}
                tag={opp.tag}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Income Potential Block */}
        <AnimatedSection delay={0.4}>
          <div className="relative overflow-hidden rounded-xl bg-black px-6 py-14 md:px-14 md:py-20 text-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,3,0.18),transparent_70%)]" />

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8">
                <div className="h-2 w-2 rounded-full bg-(--primary-color) animate-pulse" />
                <span className="text-sm font-semibold text-white/70">
                  Real Income Potential
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] mb-2 text-white">
                Just 3 Clients / Month Can Generate
              </h3>

              <div className="mb-8">
                <span className="text-4xl md:text-7xl font-black tracking-tight text-(--primary-color)">
                  PKR 60K–100K+
                </span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-2xl lg:text-lg text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
                You don't need a traditional job anymore. You need a valuable AI
                skill that businesses already pay for.
              </p>

              {/* CTA */}
              <a
                href="#pricing"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-(--primary-color)
                  px-6
                  py-5
                  text-sm
                  md:text-xl
                  lg:text-base
                  font-bold
                  text-black
                  shadow-2xl
                  shadow-(--primary-color)/20
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Start Building Your AI Business
                <ArrowRight size={24} strokeWidth={3} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OpportunitySection;
