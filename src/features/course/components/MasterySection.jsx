import AnimatedSection from "./AnimatedSection";
import { Layers, Zap, Monitor, Globe, Mail, Search } from "lucide-react";

const MasterySection = () => {
  const topics = [
    {
      title: "AI Photography Mastery",
      desc: "Master Midjourney, Flux, and AI Upscalers to create hyper-realistic product shots.",
      icon: Layers,
    },
    {
      title: "Cinematic AI Videography",
      desc: "Learn Runway Gen-3 and Luma Dream Machine to animate products like a pro.",
      icon: Zap,
    },
    {
      title: "The UGC AI Formula",
      desc: "Create talking digital humans for TikTok & Meta ads using HeyGen and ElevenLabs.",
      icon: Monitor,
    },
    {
      title: "Meta & TikTok Strategy",
      desc: "How to structure ad campaigns, write copy, and set up tracking for conversions.",
      icon: Globe,
    },
    {
      title: "Urdu Voice Design",
      desc: "Clone perfect local voices and sync them with AI videos for the Pakistani market.",
      icon: Mail,
    },
    {
      title: "Client Acquisition",
      desc: "How to find high-paying brands, pitch your AI services, and close deals.",
      icon: Search,
    },
  ];

  return (
    <section id="mastery" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="md:w-2/3">
            <AnimatedSection>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
                What you will <br />
                <span className="text-black bg-(--primary-color) px-4 rotate-[-1deg] inline-block">
                  Master
                </span>
              </h2>
              <p className="text-xl text-(--secondary-color) font-medium max-w-xl">
                We don't just teach tools. We teach a complete business system
                that turns AI skills into bank balances.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <AnimatedSection
              key={topic.title}
              delay={i * 0.1}
              className="group cursor-pointer border-b border-gray-100 pb-12 hover:border-accent transition-colors rounded-md shadow px-6 pt-4"
            >
              <div className="text-(--primary-color) mb-6 group-hover:scale-110 transition-transform origin-left">
                <topic.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-(--primary-color) pr-4 transition-colors">
                {topic.title}
              </h3>
              <p className="text-(--secondary-color) text-lg leading-relaxed font-medium">
                {topic.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterySection;
