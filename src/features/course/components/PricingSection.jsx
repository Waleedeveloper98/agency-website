import { Link } from "react-scroll";
import AnimatedSection from "./AnimatedSection";
import ColorHeading from "./ColorHeading";
import CountdownTimer from "./CountdownTimer";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const PricingSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

  return (
    <section id="pricing" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-8xl font-bold  mb-6">
            Invest in your <br />
            <ColorHeading text={"Future Self."}/>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-xl mx-auto my-10">
            This isn't a cost. it's the capital for your AI agency.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Urgency Badge */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-black text-(--primary-color) px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-2xl border-2 border-accent">
              <Zap size={18} fill="currentColor" />
              Launch Offer Ends In
            </div>
          </div>

          <AnimatedSection className="bg-white cursor-pointer rounded-2xl border-4 border-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-10 md:p-10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-16 items-center sm:justify-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gray-300 font-bold text-3xl line-through">
                    PKR 25,000
                  </span>
                  <span className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-black whitespace-nowrap  uppercase tracking-widest">
                    80% OFF
                  </span>
                </div>
                <div className="flex items-end gap-2 mb-10">
                  <span className="text-7xl md:text-8xl font-bold tracking-tight">
                    PKR 5,000
                  </span>
                  <span className="text-2xl text-gray-400 font-bold mb-4 whitespace-nowrap">
                    / Only
                  </span>
                </div>

                <div className="space-y-4 mb-12">
                  {[
                    "4 Weeks Live AI Bootcamp",
                    "Premium AI Tool Pack ($200 Value)",
                    "Verified Course Certificate",
                    "Lifetime WhatsApp Community",
                    "Recorded Session Access",
                    "AI Pitch Deck & Templates",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 font-semibold text-lg md:font-medium"
                    >
                      <Check
                        className="text-(--primary-color)"
                        size={24}
                        strokeWidth={3}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
                  <h4 className="text-center font-black uppercase tracking-widest text-xs text-gray-400 mb-8">
                    Seats Filling Fast
                  </h4>
                  <CountdownTimer targetDate={targetDate.getTime()} />
                  <div className="mt-8 flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400">
                    <span>75 Total Seats</span>
                    <span className="text-red-500">Only 12 Left!</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div className="w-[85%] h-full bg-(--primary-color)" />
                  </div>
                </div>

                <Link
                  to="bankDetails"
                  smooth={true}
                  duration={500}
                  className="w-full block text-center bg-black text-white text-xl sm:text-2xl font-bold py-4 rounded-xl hover:bg-(--primary-color) hover:text-black transition-all duration-300 mb-6 shadow-2xl group"
                >
                  Reserve My Seat
                  <ArrowRight
                    size={28}
                    className="inline ml-4 group-hover:translate-x-2 transition-transform"
                  />
                </Link>
                <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-sm">
                  <ShieldCheck size={18} />
                  Secure Enrollment via WhatsApp
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
