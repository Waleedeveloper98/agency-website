import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/your_number_here"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-10 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">
          Questions?
        </span>
        <span className="text-sm font-black">WhatsApp Us</span>
      </div>
      <div className="bg-white/20 p-2 rounded-full">
        <MessageCircle fill="currentColor" className="text-white" size={20} />
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
