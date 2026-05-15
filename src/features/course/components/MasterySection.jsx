import AnimatedSection from "./AnimatedSection";
import { Layers, Zap, Monitor, Globe, Mail, Search } from "lucide-react";
import ColorHeading from "./ColorHeading";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const MasterySection = () => {
  const topics = [
    {
      title: "AI Photography Mastery",
      desc: "Master Midjourney, Flux, and AI upscalers to create studio-quality product visuals.",
      icon: Layers,
      tag: "Beginner Friendly",
    },
    {
      title: "Cinematic AI Videography",
      desc: "Create cinematic AI commercials using Runway Gen-3 and Luma Dream Machine.",
      icon: Zap,
      tag: "High Demand",
      featured: true,
    },
    {
      title: "The UGC AI Formula",
      desc: "Build realistic AI creators for TikTok and Meta ads using HeyGen and ElevenLabs.",
      icon: Monitor,
      tag: "Fast Growing",
    },
    {
      title: "Meta & TikTok Strategy",
      desc: "Learn campaign structure, ad copywriting, and conversion tracking systems.",
      icon: Globe,
      tag: "Client Favorite",
    },
    {
      title: "Urdu Voice Design",
      desc: "Clone realistic Urdu voices and sync them perfectly with AI-generated videos.",
      icon: Mail,
      tag: "Low Competition",
    },
    {
      title: "Client Acquisition",
      desc: "Find brands, pitch AI services confidently, and close high-paying deals.",
      icon: Search,
      tag: "Income Skill",
    },
  ];

  return (
    <section
      id="mastery"
      className="relative overflow-hidden bg-white py-24 md:py-32 px-5 md:px-6"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-(--primary-color)/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-4xl">
            <AnimatedSection>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm mb-6">
                <div className="h-2 w-2 rounded-full bg-(--primary-color) animate-pulse" />
                <span className="text-sm font-semibold text-zinc-600">
                  Complete AI Creator System
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.92] mb-6">
                Master The Most
                <br />
                Valuable <ColorHeading text="AI Skills" />
              </h2>

              {/* Description */}
              <p className="text-base md:text-xl text-zinc-500 font-medium max-w-3xl leading-relaxed">
                This isn't just another AI course. It's a complete creator
                system designed to help you build profitable AI services.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {topics.map((topic, i) => (
            <AnimatedSection key={topic.title} delay={i * 0.08}>
              <FeatureCard
                icon={topic.icon}
                title={topic.title}
                desc={topic.desc}
                tag={topic.tag}
                featured={topic.featured}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterySection;
