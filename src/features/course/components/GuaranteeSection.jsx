import AnimatedSection from "./AnimatedSection";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="bg-white p-12 md:p-20 rounded-2xl border-2 border-black/5 flex flex-col items-center text-center shadow-sm">
          <div className="w-24 h-24 bg-(--primary-color) rounded-full flex items-center justify-center mb-10 shadow-[0_10px_30px_rgba(184,255,3,0.3)]">
            <ShieldCheck size={48} className="text-black" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold  mb-8 ">
            The Zainx <br />{" "}
            <span className="text-(--primary-color) underline decoration-[6px]">
              100% Refund
            </span>{" "}
            Guarantee.
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Attend the first class. If you feel this isn't for you, just message
            us on WhatsApp within 24 hours. No questions asked. Every single
            rupee returned.
          </p>
          <div className="mt-12 pt-12 border-t border-gray-100 w-full flex flex-col md:flex-row justify-center gap-10 opacity-40 grayscale">
            <div className="text-sm font-black uppercase tracking-widest">
              No Hidden Fees
            </div>
            <div className="text-sm font-black uppercase tracking-widest">
              Instant Approval
            </div>
            <div className="text-sm font-black uppercase tracking-widest">
              Zero Risk
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GuaranteeSection;
