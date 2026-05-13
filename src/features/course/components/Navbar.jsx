import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hard Truth", to: "truth" },
    { name: "Comparison", to: "comparison" },
    { name: "Mastery", to: "mastery" },
    { name: "Curriculum", to: "curriculum" },
    { name: "Pricing", to: "pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
            <Rocket
              className="text-white group-hover:text-black transition-colors"
              size={20}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl leading-none">
              ZAINX
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-50">
              AI Ads Academy
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={index * 300}
              className="text-sm font-medium hover:text-(--primary-color) transition-colors cursor-pointer duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-(--primary-color) px-6 py-2.5 rounded-md text-sm font-bold shadow-[0_4px_14px_0_rgba(184,255,3,0.39)] hover:shadow-[0_6px_20px_rgba(184,255,3,0.45)] hover:bg-accent-dark transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={index * 300}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer bg-(--primary-color) w-full py-4 rounded-xl text-center font-black"
              >
                Enroll Now — PKR 5,000
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
