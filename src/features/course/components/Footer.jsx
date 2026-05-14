import { Rocket } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/zainxmedia/",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      url: "https://pk.linkedin.com/company/zainx-media",
      icon: FaLinkedin,
    },
  ];
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-(--primary-color) rounded-xl flex items-center justify-center">
                <Rocket className="text-black" size={20} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                ZAINX
              </span>
            </div>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              We're building the next generation of AI advertisers. Join the
              movement and master the world's most valuable skill.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Bootcamp</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                {
                  name: "Curriculum",
                  to: "curriculum",
                },
                {
                  name: "Pricing",
                  to: "pricing",
                },
                {
                  name: "FAQs",
                  to: "faq",
                },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="hover:text-(--primary-color) cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-(--primary-color) hover:border-accent hover:text-black transition-all duration-200"
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-(--secondary-color) -translate-y-6 sm:translate-y-0 text-sm">
            © 2026 Zainx AI Academy. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
