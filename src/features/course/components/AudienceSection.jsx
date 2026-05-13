import AnimatedSection from './AnimatedSection';
import { User, Briefcase, GraduationCap, Laptop, ShoppingBag, Palette } from 'lucide-react';

const AudienceSection = () => {
  const audiences = [
    { title: "Freelancers", icon: Briefcase, desc: "Upgrade your design services with AI and charge premium rates." },
    { title: "Students", icon: GraduationCap, desc: "Learn a future-proof skill to fund your studies or start a career." },
    { title: "Ecom Owners", icon: ShoppingBag, desc: "Save lakhs on creative production and scale your own brand." },
    { title: "Job Seekers", icon: User, desc: "Stand out in the marketing job market with unique AI credentials." },
    { title: "Creators", icon: Palette, desc: "Take your content quality to the cinematic level effortlessly." },
    { title: "Beginners", icon: Laptop, desc: "No tech background? No problem. AI handles the complexity." },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Who is this <span className="text-gray-300">for?</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto px-4">
            If you want to capitalize on the AI revolution and build a high-income skill, you're in the right place.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((aud, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="bg-gray-50 p-10 rounded-xl cursor-pointer border border-gray-100 hover:border-(--primary-color) transition-colors flex gap-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <aud.icon size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{aud.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{aud.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
