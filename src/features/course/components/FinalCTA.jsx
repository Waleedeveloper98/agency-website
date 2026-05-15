import AnimatedSection from "./AnimatedSection";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import ColorHeading from "./ColorHeading";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-(--primary-color)/20 rounded-full blur-[160px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-(--primary-color) font-semibold text-sm mb-10 backdrop-blur-md">
            <Sparkles size={16} fill="currentColor" />
            Limited Availability • 75 Seats Only
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-12">
            The AI <br />
            Opportunity <br />{" "}
            <ColorHeading text={"Won't Wait"}/>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-xl text-gray-400 font-medium mb-20 leading-tight text-balance">
            Choose where you'll be 6 months from now. Still working for peanuts,
            or leading the AI revolution in Pakistan?
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={0.4}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#pricing"
            className="w-full md:w-auto bg-(--primary-color) text-bold px-12 py-6 rounded-xl font-black text-2xl shadow-[0_20px_50px_rgba(184,255,3,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-shadow-2xl text-shadow-black/40"
          >
            Join Bootcamp
            <ArrowRight size={24} strokeWidth={3} />
          </a>
          <a
            href="https://wa.me/your_number_here"
            target="_blank"
            className="w-full md:w-auto bg-white/5 border-2 border-white/10 px-12 py-6 rounded-xl font-black text-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} fill="currentColor" />
            WhatsApp Now
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="mt-20">
          <div className="flex justify-center -space-x-4 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-black overflow-hidden relative shadow-xl"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <p className="text-gray-400 font-bold">
            Join 500+ professionals already inside.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
