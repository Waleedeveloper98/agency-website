import { motion } from "motion/react";
import { ArrowLeft, Play, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { projectsData } from "../data/projects";
import ColorHeading from "../components/ColorHeading";

const CourseProject = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projectsData.find((project) => project.slug === slug);
  if (!project) {
    navigate("/bootcamp");
    return;
  }


  return (
    <div className="min-h-screen bg-white pb-20 selection:bg-accent selection:text-black">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <motion.button
          onClick={() => navigate("/bootcamp")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5, boxShadow: "0 0 15px rgba(184,255,3,0.3)" }}
          className="group flex items-center gap-2 border border-gray-200 px-6 py-3 rounded-md font-bold text-sm bg-white hover:border-(--primary-color) hover:text-(--primary-color) cursor-pointer transition-all duration-300"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Bootcamp
        </motion.button>
      </div>

      {/* Hero Content */}
      <section className="max-w-7xl mx-auto px-6 pt-20 md:pt-10 pb-16 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-xs font-bold mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-accent" fill="currentColor" />
            SHOWCASING BOOTCAMP EXCELLENCE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
            {project.heading.split(" ").slice(0 , 3).join(" ")}
            <br />
            <ColorHeading text={project.heading.split(" ").slice(3).join(" ")}/>
          </h1>
          <p className="text-base md:text-base text-gray-400 font-base max-w-3xl mx-auto  text-balance">
            {project.subheading}
          </p>
        </AnimatedSection>
      </section>

      {/* Video Showcase Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {project.videos.map((video, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className="group flex justify-center items-center">
              <motion.div
                className="relative  md:aspect-[5/8]  md:h-auto h-[500px] w-[80%] md:w-[90%]  bg-gray-100 rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-[0_20px_50px_-15px_rgba(184,255,3,0.2)] group-hover:border-accent/30 cursor-pointer"
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <img
                  src={video}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Hover Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play size={24} fill="black" className="ml-1 text-black" />
                  </div>
                </div>

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Floating Particles Simulation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/10 rounded-full blur-md animate-bounce duration-[5s]" />
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-accent/30 rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default CourseProject;
