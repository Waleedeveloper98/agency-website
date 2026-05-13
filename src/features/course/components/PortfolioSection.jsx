import AnimatedSection from "./AnimatedSection";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Luxury Watch Commercial",
      type: "AI Cinematic Video",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Gourmet Coffee Shoot",
      type: "AI Product Photography",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Skincare UGC Ad",
      type: "AI Digital Human",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sneaker Drop Teaser",
      type: "AI 3D Animation",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-16">
          <div className="md:w-2/3">
            <AnimatedSection>
              <h2 className="text-4xl md:text-7xl font-bold  mb-4 text-balance text-center sm:text-start">
                The AI Portfolio <br /> You'll Build
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} className="md:w-1/3">
            <p className="text-xl text-gray-500 font-medium leading-relaxed text-center sm:text-start">
              You won't just learn. You'll create actual high-end projects that
              brands pay thousands for.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.15}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-(--primary-color) font-semibold uppercase tracking-widest text-sm mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold pr-4">{project.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
