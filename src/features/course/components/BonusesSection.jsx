import AnimatedSection from './AnimatedSection';
import { Gift, FileText, Smartphone, Layout } from 'lucide-react';

const BonusesSection = () => {
  const bonuses = [
    {
      icon: Layout,
      title: "AI Ad Templates",
      value: "PKR 3,000",
      desc: "Proven high-converting ad layouts you can plug AI content into instantly."
    },
    {
      icon: FileText,
      title: "Client Pitch Scripts",
      value: "PKR 5,000",
      desc: "Exactly what to say to brands to get them to agree to a paid trial."
    },
    {
      icon: Smartphone,
      title: "Mobile Setup Guide",
      value: "PKR 2,000",
      desc: "How to run your entire AI ad business from just your smartphone."
    },
    {
      icon: Gift,
      title: "Premium Prompt Vault",
      value: "PKR 4,000",
      desc: "Our library of 500+ hyper-specific product photography prompts."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Insane <span className="text-(--primary-color)">Bonuses</span>
          </h2>
          <p className="text-2xl text-gray-400 font-semibold">Total Value: PKR 14,000+ Included FREE</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, i) => (
            <AnimatedSection 
              key={i} 
              delay={i * 0.1}
              className="cursor-pointer bg-white/5 border border-white/10 p-10 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-(--primary-color) rounded-xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-300">
                <bonus.icon className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{bonus.title}</h3>
              <div className="text-accent font-bold text-sm mb-4 uppercase tracking-tighter opacity-60">Value: {bonus.value}</div>
              <p className="text-gray-400 font-medium leading-relaxed">
                {bonus.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
