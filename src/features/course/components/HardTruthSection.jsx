import AnimatedSection from "./AnimatedSection";
import { AlertCircle, Clock, TrendingDown, DollarSign } from "lucide-react";

const HardTruthSection = () => {
  const truths = [
    {
      icon: TrendingDown,
      title: "Old Skills are Dying",
      description:
        "Traditional manual editing is too slow. AI is now doing in 60 seconds what used to take 6 hours.",
    },
    {
      icon: AlertCircle,
      title: "Freelance Saturation",
      description:
        "Generic graphic designers are struggling to find work. High-paying brands only want AI-powered creators now.",
    },
    {
      icon: Clock,
      title: "The Time Gap",
      description:
        "If you're not using AI, you're working 10x harder for 10x less money. The gap is widening every single day.",
    },
    {
      icon: DollarSign,
      title: "Expensive Manual Ads",
      description:
        "Ecommerce owners are tired of paying lakhs for manual ad shoots. They want high-conversion AI ads that cost 90% less.",
    },
  ];

  return (
    <section
      id="truth"
      className="py-24 bg-black text-white px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-20">
          <div className="md:w-1/2">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
                The uncomfortable <br />
                <span className="text-(--primary-color)">Hard Truth.</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="md:w-1/2">
            <AnimatedSection delay={0.2}>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                The world has changed. Sticking to traditional methods in 2026
                is a recipe for financial struggle. Brands don't care about your
                effort they care about speed, scale, and sales.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {truths.map((truth, i) => (
            <AnimatedSection
              key={i}
              delay={0.1 * i}
              className="bg-gray-900/50 border border-white/5 p-8 rounded-xl hover:border-accent/40 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10  group-hover:bg-(--primary-color) transition-all duration-300">
                <truth.icon
                  size={28}
                  className="text-white group-hover:text-black transition-colors"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{truth.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                {truth.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardTruthSection;
