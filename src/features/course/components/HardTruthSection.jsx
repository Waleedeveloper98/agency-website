import AnimatedSection from "./AnimatedSection";
import { AlertCircle, Clock3, TrendingDown, DollarSign } from "lucide-react";
import ColorHeading from "./ColorHeading";
import { motion } from "framer-motion";
import FeatureTiltCard from "./FeatureTiltCard";

const HardTruthSection = () => {
  const truths = [
    {
      icon: TrendingDown,
      title: "Traditional Creative Work Is Being Replaced",
      description:
        "AI now creates content in minutes that used to take designers and editors entire days to finish.",
    },
    {
      icon: AlertCircle,
      title: "Generic Freelancers Are Becoming Invisible",
      description:
        "Brands no longer pay premium prices for average creative work. They want AI-powered speed and scale.",
    },
    {
      icon: Clock3,
      title: "AI Creators Are Moving 10x Faster",
      description:
        "If you're not using AI tools, you're competing against creators who produce more content in a single day than most do in a week.",
    },
    {
      icon: DollarSign,
      title: "Businesses Want Faster & Cheaper Ads",
      description:
        "Ecommerce brands are replacing expensive shoots with AI ads that cost less and convert faster.",
    },
  ];

  return (
    <section
      id="truth"
      className="relative overflow-hidden bg-black py-16 md:py-32 text-white px-5 md:px-6"
    >
      {/* Background Effects */}
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-(--primary-color)/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-2 lg:gap-20 items-start mb-16 md:mb-24">
          {/* Heading */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-(--primary-color) animate-pulse" />
                <span className="text-sm font-semibold text-gray-300">
                  The Market Is Changing Fast
                </span>
              </div>

              <h2 className="text-5xl  md:text-7xl font-bold tracking-tight">
                Most Creators
                <br />
                Are Falling
                <br />
                <ColorHeading text="Behind" />
              </h2>
            </AnimatedSection>
          </div>

          {/* Paragraph */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection delay={0.2}>
              <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-xl p-6 md:p-8 lg:pt-20">
                <p className="text-base md:text-2xl lg:text-xl text-gray-300 font-base leading-relaxed lg:leading-normal">
                  The world has changed. Businesses don't reward effort anymore
                  they reward{" "}
                  <span className="text-white font-bold">speed</span>,{" "}
                  <span className="text-white font-bold">scale</span>, and{" "}
                  <span className="text-(--primary-color) font-bold">
                    AI-powered execution.
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["AI Ads", "UGC Videos", "Voiceovers", "AI Commercials"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-sm font-semibold text-gray-300 hover:bg-(--primary-color) hover:text-black transition-colors duration-300 cursor-pointer"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {truths.map((truth, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <FeatureTiltCard 
                icon={truth.icon}
                label={truth.title}
                sub={truth.description}
                bgClass=""
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardTruthSection;
