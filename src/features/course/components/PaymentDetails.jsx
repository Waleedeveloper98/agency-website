import { motion } from "motion/react";
import {
  CreditCard,
  MessageSquare,
  Unlock,
  Copy,
  Check,
  Info,
} from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import ColorHeading from "./ColorHeading";

const PaymentDetails = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedField(field);

      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  const steps = [
    {
      id: "01",
      title: "Send Payment",
      desc: "Transfer PKR 5,000 to the account below. Screenshot your transfer receipt.",
      icon: CreditCard,
      color: "accent",
    },
    {
      id: "02",
      title: "Send Screenshot",
      desc: "WhatsApp your payment screenshot to confirm. Your seat is reserved instantly.",
      icon: MessageSquare,
      color: "accent",
      highlight: "+92 302 5211886",
    },
    {
      id: "03",
      title: "Get Instant Access",
      desc: "Receive class confirmation, WhatsApp group invite and course onboarding details.",
      icon: Unlock,
      color: "accent",
    },
  ];

  const accountInfo = [
    { label: "Account Name", value: "Zainx Media" },
    { label: "Bank", value: "UBL (United Bank Limited)" },
    { label: "Account Number", value: "1774307008576" },
    { label: "IBAN", value: "PK23UNIL010900307008576" },
  ];

  return (
    <section id="bankDetails" className="py-24 px-6 bg-[#050505] text-white overflow-hidden relative">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-(--primary-color)/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30%] h-[30%] bg-(--primary-color)/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            SECURE YOUR <br /> <ColorHeading text={"SEAT"} />{" "}
            <span className="text-(--primary-color)"> NOW</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            3 simple steps takes less than 2 minutes
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-lg h-full relative hover:bg-white/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-30 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl font-black text-white/10 group-hover:text-(--primary-color)/50 transition-colors">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 bg-(--primary-color) rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(184,255,3,0.3)]">
                    <step.icon size={24} className="text-black" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {step.desc}
                  {step.highlight && (
                    <span className="block mt-4 text-accent font-black text-xl tracking-tight">
                      {step.highlight}
                    </span>
                  )}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Payment Details Card */}
        <AnimatedSection delay={0.4} className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-(--primary-color)/20 rounded-[4rem] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-gradient-to-br from-gray-900 to-black p-10 md:p-16 rounded-xl border-2 border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <CreditCard size={180} />
              </div>

              <div className="text-center mb-12">
                <h4 className="text-(--primary-color) font-bold text-2xl tracking-[0.2em] uppercase mb-2 drop-shadow-[0_0_10px_rgba(184,255,3,0.5)]">
                  PAYMENT DETAILS
                </h4>
                <div className="w-12 h-1 bg-(--primary-color)/50 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-8">
                {accountInfo.map((info, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-6"
                  >
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                      {info.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-base md:text-2xl font-semibold text-white">
                        {info.value}
                      </span>
                      <button
                        onClick={() => copyToClipboard(info.value, info.label)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-accent"
                      >
                        {copiedField === info.label ? (
                          <Check size={18} />
                        ) : (
                          <Copy size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-3 justify-center text-gray-400 bg-white/5 py-4 rounded-2xl border border-white/5">
                <Info size={18} className="text-accent" />
                <p className="text-sm font-bold uppercase tracking-widest">
                  Screenshot required for confirmation
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Info */}
        <AnimatedSection delay={0.6} className="text-center mt-12 opacity-50">
          <p className="text-lg font-medium text-gray-400">
            Time: <span className="text-white">9–11 PM</span> | Platform:{" "}
            <span className="text-white font-black text-xl ml-2">Zoom</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PaymentDetails;
