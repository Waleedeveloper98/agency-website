import { motion } from "motion/react";
import {
  Sparkles,
  Play,
  Users,
  Calendar,
  Banknote,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-md blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-md blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <AnimatedSection delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-md text-sm font-bold mb-8">
            <Sparkles className="text-accent" size={16} />
            <span>Next Cohort Starts June 1st</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="primary-font text-5xl md:text-8xl font-black mb-8  text-balance">
            Learn AI Ads in{" "}
            <span className="text-(--primary-color)">
              30 Days
            </span>
            <br />
            Get Paid By Brands
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed text-balance px-4">
            Create AI product ads, UGC videos, AI commercials and Urdu
            voiceovers even if you’re starting from zero.
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={0.4}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 px-4"
        >
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer w-full md:w-auto bg-(--primary-color) text-black px-10 py-5 rounded-md font-bold text-xl shadow-[0_20px_40px_-10px_rgba(184,255,3,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(184,255,3,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Reserve My Seat
            <ArrowRight size={20} strokeWidth={3} />
          </Link>
          <Link
            to="curriculum"
            smooth={true}
            duration={500}
            className="cursor-pointer w-full md:w-auto bg-white border-2 border-black/5 px-10 py-5 rounded-md font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <Play fill="currentColor" size={16} />
            View Curriculum
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "75 Seats Only", sub: "Strictly limited" },
              {
                icon: Calendar,
                label: "12 Live Classes",
                sub: "Hands-on training",
              },
              { icon: Banknote, label: "PKR 5,000", sub: "Launch offer price" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-6 rounded-md flex flex-col items-center group hover:border-accent/30 transition-colors shadow shadow-black/10"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <item.icon size={24} className="text-black" />
                </div>
                <span className="font-bold text-xl">{item.label}</span>
                <span className="text-gray-400 text-sm font-medium">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Hero Visual Mockup (Simulated) */}
      <AnimatedSection delay={0.6} className="mt-20 max-w-6xl mx-auto px-4">
        <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border-4 md:border-8 border-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
            alt="AI Ads Visualization"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:h-20 md:w-20 bg-accent rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform bg-(--primary-color)">
              <Play fill="black" size={28} className="ml-1" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;
