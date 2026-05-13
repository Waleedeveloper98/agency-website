import AnimatedSection from "./AnimatedSection";
import { X, Check, ArrowRight } from "lucide-react";
import ColorHeading from "./ColorHeading";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            The New Era of <ColorHeading text={"Advertising"}/>
          </h2>
          <p className="text-xl text-(--secondary-color) font-medium">
            Why AI always beats the manual workflow.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connector Arrow for Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-(--primary-color) rounded-full items-center justify-center shadow-xl z-10 border-4 border-white">
            <ArrowRight size={24} className="text-black" />
          </div>

          {/* Old Way */}
          <AnimatedSection
            direction="right"
            className="bg-gray-50 rounded-xl p-10 md:p-14 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <X size={24} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight opacity-40">
                The Old Way
              </h3>
            </div>

            <ul className="space-y-8">
              {[
                "Expensive professional gear & studio (Lakhs)",
                "Manual editing (8-10 hours/video)",
                "Hiring expensive models & voice artists",
                "Hard to iterate or split test ads",
                "Slow turnaround times (1-2 weeks)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-lg font-medium text-(--secondary-color)"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-red-400">
                    <X size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* AI Way */}
          <AnimatedSection
            direction="left"
            className="bg-black rounded-xl p-10 md:p-14 border-4 border-accent shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ">
              <Check size={200} className="text-white" />
            </div>

            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(184,255,3,0.5)] bg-(--primary-color)">
                <Check size={24} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight text-white">
                The AI Way
              </h3>
            </div>

            <ul className="space-y-8 relative z-10">
              {[
                "Just a laptop & high-speed internet",
                "AI Ad creation (Under 10 minutes)",
                "Digital human models & AI voice clones",
                "Generate 50+ variations for split testing",
                "Instant delivery to clients (Same day)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-lg font-medium text-white/90"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center bg-(--primary-color)">
                    <Check size={14} className="text-black"/>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
