import AnimatedSection from "./AnimatedSection";
import { Camera, Video, UserCheck, Mic, ArrowRight } from "lucide-react";
import ColorHeading from "./ColorHeading";

const OpportunitySection = () => {
  const opps = [
    {
      icon: Camera,
      title: "AI Product Photography",
      price: "PKR 5,000 / Shoot",
      desc: "Turn phone photos into professional studio-grade shots for eCommerce brands.",
    },
    {
      icon: Video,
      title: "AI Video Ads",
      price: "PKR 15,000 / Ad",
      desc: "Create cinematic product commercials using AI without a single camera crew.",
    },
    {
      icon: UserCheck,
      title: "UGC AI Content",
      price: "PKR 10,000 / Video",
      desc: "Generate realistic 'User Generated Content' using digital human AI models.",
    },
    {
      icon: Mic,
      title: "Urdu AI Voiceovers",
      price: "PKR 3,000 / Script",
      desc: "Clone voices or create perfect Urdu voiceovers for marketing campaigns.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedSection>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              Modern Income <br /> <ColorHeading text={"Opportunities"}/>
            </h2>
            <p className="text-xl text-(--secondary-color) font-medium max-w-2xl mx-auto">
              Brands are desperate for high-quality content. Here's what you can
              charge as a solo creator.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {opps.map((opp, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="bg-white cursor-pointer p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-(--primary-color) transition-colors">
                <opp.icon size={28} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{opp.title}</h3>
              <div className="bg-(--accent)/10 px-3 py-1 rounded-full inline-block mb-4">
                <span className="text-sm font-black text-black">
                  {opp.price}
                </span>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                {opp.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          delay={0.4}
          className="bg-black text-white p-10 md:p-16 rounded-xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-(--primary-color)/10 blur-[100px]" />
          <h3 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 select-none">
            Just 3 clients/month can generate <br className="hidden md:block" />
            <span className="text-(--primary-color) underline underline-offset-8">
              PKR 60,000–100,000+
            </span>
          </h3>
          <p className="text-xl text-gray-400 font-medium mb-10 relative z-10">
            You don't need a job. You need a high-value skill that solves
            specific business problems.
          </p>
          <a
            href="#pricing"
            className="relative z-10 inline-flex items-center gap-2 bg-(--primary-color) text-black px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform"
          >
            Start Your Business Today
            <ArrowRight size={32} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OpportunitySection;
