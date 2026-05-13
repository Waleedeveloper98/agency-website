import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do I need a high-end laptop?",
      a: "No! Since most AI tools run on the cloud (Discord or Web Browser), any basic laptop with a good internet connection is enough.",
    },
    {
      q: "Are the classes recorded?",
      a: "Yes, all 12 live classes are recorded and you get lifetime access to the portal to re-watch anytime.",
    },
    {
      q: "Is this for beginners or experts?",
      a: "This is built starting from scratch. We assume you know nothing about AI and take you to a professional level by the end of 4 weeks.",
    },
    {
      q: "How do I get paid?",
      a: "We have a dedicated module in Week 4 where we teach you how to set up your pricing, pitch brands on WhatsApp/LinkedIn, and handle payments locally or internationally.",
    },
    {
      q: "What tools will we use?",
      a: "We cover Midjourney, Flux, Runway Gen-3, Luma Dream Machine, HeyGen, ElevenLabs, and TikTok Creative Center.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Everything you need to know before joining.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className={`cursor-pointer overflow-hidden rounded-xl border transition-all ${openIndex === i ? "border-black border-2" : "border-gray-200"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openIndex === i ? "text-black" : "text-gray-500 group-hover:text-black"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-black text-(--primary-color)" : "bg-gray-100 text-gray-400"}`}
                  >
                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-lg text-gray-500 font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
