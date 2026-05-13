import { useLocation, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Contact", to: "contact" },
  { label: "Testimonials", to: "testimonials" },
  { label: "FAQ", to: "faq" },
  { label: "Team", to: "team" },
];

const otherPages = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund Policy", to: "/refund" },
];

const socialLinks = [
  { icon: "ri-instagram-line", label: "Instagram", href: "https://www.instagram.com/zainxmedia/" },
  { icon: "ri-linkedin-box-line", label: "LinkedIn", href: "https://pk.linkedin.com/company/zainx-media" },
  { icon: "ri-youtube-line", label: "YouTube", href: "https://www.youtube.com/@ZainxMedia" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    // If already on home page
    if (location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Navigate back home with hash
      navigate(`/#${section}`);
    }
  };

  return (
    <footer className="secondary-font bg-white border-t border-gray-200 font-sans overflow-hidden">
      {/* Top Grid */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 pt-16 pb-10 md:pb-0 md:px-16 flex flex-col gap-16 md:flex-row md:justify-between">
        {/* LEFT — Logo + socials */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <RouterLink
            to="/"
            className="text-xl w-fit flex flex-col items-center leading-none uppercase"
          >
            <span className="font-bold text-black">Zainx</span>

            <span className="text-lg font-light text-black/70">Media</span>
          </RouterLink>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 transition-all duration-200 hover:bg-[#b8ff03] hover:border-[#b8ff03] hover:text-black hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(184,255,3,0.4)]"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-32 md:gap-40">
          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-(--secondary-color) mb-5">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <button
                    onClick={() => handleNavigation(to)}
                    className="text-[14.5px] font-medium text-gray-700 cursor-pointer inline-block transition-all duration-200 hover:text-[#b8ff03] hover:translate-x-1"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-(--secondary-color) mb-5">
              Other Pages
            </h4>

            <ul className="flex flex-col gap-3">
              {otherPages.map((page) => (
                <li key={page.to}>
                  <RouterLink
                    to={page.to}
                    className="text-[14.5px] font-medium text-gray-700 cursor-pointer inline-block transition-all duration-200 hover:text-[#b8ff03] hover:translate-x-1"
                  >
                    {page.label}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Big Gradient Text */}
      <div className="overflow-hidden" style={{ lineHeight: 0.85 }}>
        <p className="primary-font md:text-[400px] lg:text-[500px] tracking-[-4px] text-center px-4 bg-gradient-to-b translate-y-20 from-white to-[#b8ff03] bg-clip-text text-transparent">
          ZAINX
        </p>
      </div>
    </footer>
  );
}
