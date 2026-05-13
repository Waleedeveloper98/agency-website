import AnimatedSection from "./AnimatedSection";
import { Star, Quote } from "lucide-react";
import ColorHeading from "./ColorHeading";

const ResultsSection = () => {
  const reviews = [
    {
      name: "Ahmed Raza",
      role: "Ecom Store Owner",
      text: "I used to spend 50k on monthly shoots. Now I generate all my ads using the AI techniques I learned here for virtually zero cost. ROI is insane.",
      rating: 5,
    },
    {
      name: "Sabahat Khan",
      role: "Freelance Designer",
      text: "Went from charging $10/hour to closing $500 project packages for local brands just after 3 weeks into the bootcamp.",
      rating: 5,
    },
    {
      name: "Zeeshan Ali",
      role: "Digital Marketer",
      text: "The Urdu AI voiceover module is a game changer for the local market. My conversion rates on Meta ads jumped by 40%.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Real Proof. <ColorHeading text={"Real Results."}/>
          </h2>
          <p className="text-xl text-(--secondary-color) font-medium">
            Join 500+ professionals who have already UPGRADED.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="bg-gray-50 p-10 rounded-xl cursor-pointer border border-gray-100 flex flex-col justify-between group hover:bg-black transition-all duration-500"
            >
              <div className="cursor-pointer">
                <Quote className="text-(--primary-color) mb-8 opacity-20" size={48} />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#b8ff03"
                      className="text-accent"
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold leading-tight mb-10 group-hover:text-white transition-colors">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full bg-gradient-to-br from-(--primary-color) to-black" />
                <div>
                  <h5 className="font-black group-hover:text-white transition-colors">
                    {review.name}
                  </h5>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
