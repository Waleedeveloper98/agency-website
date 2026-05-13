import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[40] md:hidden p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Launch Offer
              </span>
              <span className="text-xl font-black">PKR 5,000</span>
            </div>
            <a
              href="#pricing"
              className="flex-1 bg-(--primary-color) text-black py-4 rounded-2xl font-black text-center shadow-lg active:scale-95 transition-transform"
            >
              Reserve Seat
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
