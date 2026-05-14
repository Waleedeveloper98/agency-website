import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

const Terms = () => {
  return (
    <section className="w-full min-h-screen bg-[#050505] overflow-hidden text-white">
      <Nav />

      {/* Hero Section */}
      <div className="relative px-6 pt-24 pb-16">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-(--primary-color)/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-(--primary-color)/20 bg-(--primary-color)/10 mb-6 backdrop-blur-xl">
            <ShieldCheck className="text-(--primary-color)" size={18} />

            <span className="text-sm font-medium text-white">
              Legal Information
            </span>
          </div>

          <h1 className="secondary-font text-5xl md:text-7xl font-bold leading-none tracking-tighter">
            Terms & Conditions
          </h1>

          <p className="text-gray-400 mt-6 text-lg  max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services and
            website.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500 flex-wrap">
            <span>Last updated: May 14, 2026</span>
            <span className="hidden md:block">•</span>
            <span>Zainx Media</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-12 backdrop-blur-xl shadow-[0_0_60px_rgba(184,255,3,0.05)]">
            {/* Intro */}
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Terms and Conditions
              </h2>

              <p className="text-gray-400 leading-relaxed text-lg">
                These Terms and Conditions govern your access to and use of
                Zainx Media services and website.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-14">
              {/* Section */}
              {[
                {
                  title: "Interpretation and Definitions",
                  content:
                    "The words whose initial letters are capitalized have meanings defined under the following conditions. These definitions shall have the same meaning regardless of whether they appear in singular or plural.",
                },

                {
                  title: "Acknowledgment",
                  content:
                    "By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms, You may not access the Service.",
                },

                {
                  title: "Links to Other Websites",
                  content:
                    "Our Service may contain links to third-party websites or services that are not owned or controlled by Zainx Media. We assume no responsibility for the content or privacy practices of any third-party sites.",
                },

                {
                  title: "Termination",
                  content:
                    "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including breach of these Terms.",
                },

                {
                  title: "Limitation of Liability",
                  content:
                    "To the maximum extent permitted by applicable law, Zainx Media shall not be liable for indirect, incidental, or consequential damages resulting from Your use of the Service.",
                },

                {
                  title: "Governing Law",
                  content:
                    "These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.",
                },

                {
                  title: "Changes to These Terms",
                  content:
                    "We reserve the right to modify or replace these Terms at any time. Continued use of the Service after changes become effective constitutes acceptance of the updated Terms.",
                },

                {
                  title: "Contact Us",
                  content:
                    "If you have any questions regarding these Terms and Conditions, you may contact us through zainxmedia.com.",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="group border-b border-white/10 pb-12 last:border-none"
                >
                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-(--primary-color) text-black flex items-center justify-center font-black shadow-[0_0_30px_rgba(184,255,3,0.4)]">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-(--primary-color) transition-colors duration-300">
                        {section.title}
                      </h2>

                      <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Full Terms Box */}
              <div className="mt-16 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-(--primary-color)">
                  Important Notice
                </h2>

                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  By continuing to use this website and our services, You
                  acknowledge that You have read, understood, and agreed to
                  these Terms and Conditions. If You do not agree, please
                  discontinue use of the Service immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Terms;
