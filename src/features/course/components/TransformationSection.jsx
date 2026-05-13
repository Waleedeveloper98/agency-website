import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";

const TransformationSection = () => {
  const steps = [
    {
      phase: "Day 1",
      title: "Tool Setup",
      desc: "Getting access to our premium AI stack and understanding the landscape.",
    },
    {
      phase: "Week 1",
      title: "The Creative Eye",
      desc: "Mastering prompting and creating your first hyper-realistic AI product photos.",
    },
    {
      phase: "Week 2",
      title: "The Animator",
      desc: "Bringing static products to life with cinematic AI video techniques.",
    },
    {
      phase: "Week 3",
      title: "The Campaign",
      desc: "Building a full marketing funnel including UGC and Urdu voiceovers.",
    },
    {
      phase: "Week 4",
      title: "The Professional",
      desc: "Launching your portfolio, pitching clients, and closing your first deal.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
            The 30-Day <span className="text-accent">Evolution</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            From total beginner to specialized AI Creator.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line on mobile, Horizontal on desktop */}
          <div className="absolute left-4 md:left-0 md:top-1/2 md:w-full h-full md:h-1 bg-white/10 md:-translate-y-1/2" />

          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="pl-12 md:pl-0 md:pt-12 relative rounded-lg">
                  {/* Point */}
                  <div className="absolute left-3 md:left-0 top-0 md:-top-3 w-6 h-6 bg-(--primary-color) rounded-full border-[6px] border-bold shadow-[0_0_15px_rgba(184,255,3,0.5)] z-10" />

                  <div className="text-(--primary-color) font-black text-sm uppercase tracking-widest mb-2 px-3 py-1 bg-(--primary-color)/10 rounded-full inline-block">
                    {step.phase}
                  </div>
                  <h4 className="text-2xl font-semibold mb-4">{step.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
