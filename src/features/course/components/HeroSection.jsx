import { motion } from "motion/react";
import {
  Sparkles,
  Play,
  Users,
  Video,
  Calendar,
  Banknote,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-scroll";
import HeroIntraction from "./HeroIntraction";
import FeatureTiltCard from "./FeatureTiltCard";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-6 md:pb-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-(--primary-color)/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-(--primary-color)/40 rounded-full blur-[100px]" />
      </div>
      <HeroIntraction />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <AnimatedSection delay={0.1}>
          <div className="inline-flex select-none items-center gap-2 bg-black text-white px-4 py-1.5 rounded-md text-sm font-bold mb-8 md:mb-3 md:text-xs">
            <Sparkles
              className="text-(--primary-color) rotate-anim"
              size={16}
            />
            <span>Enrollment Closing Soon</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="secondary-font text-4xl md:text-[3.9rem] text-shadow-lg text-shadow-black/10 md:w-[80%] md:mx-auto font-bold tracking-tighter mb-8 md:mb-3">
            Learn Generative AI in{" "}
            <span className="text-(--primary-color) text-shadow-lg text-shadow-black/7">
              30 Days
            </span>
            <br />
            Get Paid By{" "}
            <span className="italic-font italic font-light">Brands</span>
          </h1>
        </AnimatedSection>
        {/* Hero Visual Mockup (Simulated) */}
        <AnimatedSection delay={0.6} className="max-w-[44rem] mx-auto px-4">
          <div
            className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border-4 md:border-8 border-white mb-10"
            style={{
              transform: "perspective(1000px) rotateX(2deg)",
              boxShadow: `
        0 2px 4px rgba(0,0,0,0.04),
        0 8px 16px rgba(0,0,0,0.08),
        0 20px 40px rgba(0,0,0,0.12),
        0 40px 80px rgba(0,0,0,0.10),
        0 1px 0px rgba(255,255,255,0.8) inset
      `,
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(0deg) translateY(-4px)";
              e.currentTarget.style.boxShadow = `
        0 4px 8px rgba(0,0,0,0.05),
        0 16px 32px rgba(0,0,0,0.10),
        0 32px 64px rgba(0,0,0,0.14),
        0 60px 100px rgba(0,0,0,0.10),
        0 1px 0px rgba(255,255,255,0.8) inset
      `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateX(2deg)";
              e.currentTarget.style.boxShadow = `
        0 2px 4px rgba(0,0,0,0.04),
        0 8px 16px rgba(0,0,0,0.08),
        0 20px 40px rgba(0,0,0,0.12),
        0 40px 80px rgba(0,0,0,0.10),
        0 1px 0px rgba(255,255,255,0.8) inset
      `;
            }}
          >
            <img
              src="/images/thumbnail.avif"
              alt="AI Ads Visualization"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:h-20 md:w-20 bg-(--primary-color) rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play fill="black" size={24} className="ml-1" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.4}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 px-4"
        >
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer w-full md:w-auto bg-(--primary-color) text-black px-10 py-5 rounded-md font-bold text-base sm:text-xl shadow-[0_20px_40px_-10px_rgba(184,255,3,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(184,255,3,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Join The AI Bootcamp
            <ArrowRight size={20} strokeWidth={3} />
          </Link>
          <Link
            to="curriculum"
            smooth={true}
            duration={500}
            className="cursor-pointer w-full md:w-auto bg-white border-2 border-black/5 px-10 py-5 rounded-md font-bold text-base sm:text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Play fill="currentColor" size={16} />
            See What You'll Build
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Video,
              label: "Lifetime Access",
              sub: "Replay lessons anytime after class",
            },
            {
              icon: Calendar,
              label: "Hands-On AI Training",
              sub: "12 live interactive sessions",
            },
            {
              icon: Banknote,
              label: "PKR 5,000",
              sub: "Limited-time launch pricing",
            },
          ].map((item, i) => (
            <FeatureTiltCard
              key={i}
              icon={item.icon}
              label={item.label}
              sub={item.sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
