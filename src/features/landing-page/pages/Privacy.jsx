import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ShieldCheck } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      number: "1",
      title: "Who we are",
      content: (
        <>
          <p>
            Zainx Media ("we", "us", or "our") operates the website at{" "}
            <span className="text-(--primary-color) font-semibold">
              zainxmedia.com
            </span>
            . We are a business and agency providing professional services. This
            Privacy Policy explains what personal information we collect when
            you visit our website, how we use it, and your rights regarding that
            information.
          </p>

          <p className="mt-4">
            By using our website, you agree to the practices described in this
            policy.
          </p>
        </>
      ),
    },

    {
      number: "2",
      title: "Information we collect",
      content: (
        <>
          <p>
            We only collect information that you voluntarily provide to us
            through our contact form. We do not collect data passively or
            without your knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {[
              {
                title: "Full name",
                desc: "To address you properly",
              },
              {
                title: "Email address",
                desc: "To respond to your inquiry",
              },
              {
                title: "Phone number",
                desc: "To follow up on your query",
              },
              {
                title: "Message / inquiry",
                desc: "To understand your needs",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-black/10 rounded-2xl p-5 bg-white hover:border-(--primary-color) transition-all duration-300"
              >
                <h4 className="font-semibold text-lg text-black">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6">
            We do not collect payment information, location data, or any other
            type of personal data beyond what is listed above.
          </p>
        </>
      ),
    },

    {
      number: "3",
      title: "How we use your information",
      content: (
        <>
          <p>
            The information you submit through our contact form is used solely
            for the following purpose:
          </p>

          <div className="mt-6 border-l-4 border-(--primary-color) pl-5">
            <p className="text-lg font-medium text-black">
              To respond to your inquiry and follow up on any questions, service
              requests, or queries you have submitted.
            </p>
          </div>

          <p className="mt-6">
            We will only contact you in direct relation to the message you have
            sent us.
          </p>

          <p className="mt-4">
            We do not use your information for marketing, advertising,
            profiling, or any automated decision-making.
          </p>
        </>
      ),
    },

    {
      number: "4",
      title: "Sharing of your information",
      content: (
        <p>
          We do not sell, rent, trade, or share your personal information with
          any third parties, partners, advertisers, or external services. Your
          data stays private and is only accessible to the Zainx Media team for
          the purpose of responding to your inquiry.
        </p>
      ),
    },

    {
      number: "5",
      title: "Data retention",
      content: (
        <p>
          We retain your contact information only for as long as necessary to
          address your inquiry and for a reasonable period thereafter in case of
          follow-up correspondence. Once your query is fully resolved and no
          further communication is needed, your data is securely deleted or
          anonymised.
        </p>
      ),
    },

    {
      number: "6",
      title: "Your rights",
      content: (
        <>
          <p>
            Regardless of where you are located, you have the following rights
            over your personal data:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Access — request a copy of the data we hold about you",
              "Correction — ask us to correct inaccurate information",
              "Deletion — request that we delete your personal data",
              "Objection — object to how we process your data",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black text-white rounded-2xl p-5 border border-white/10"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6">
            To exercise any of these rights, please contact us using the details
            below. We will respond within a reasonable timeframe.
          </p>
        </>
      ),
    },

    {
      number: "7",
      title: "Cookies",
      content: (
        <p>
          Our website may use basic functional cookies necessary for the website
          to operate correctly. We do not use tracking cookies, advertising
          cookies, or any analytics tools that collect personal data.
        </p>
      ),
    },

    {
      number: "8",
      title: "Children's privacy",
      content: (
        <p>
          Our website and services are not directed at children under the age of
          13. We do not knowingly collect personal information from minors. If
          you believe a child has submitted information through our site, please
          contact us and we will promptly delete it.
        </p>
      ),
    },

    {
      number: "9",
      title: "Changes to this policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. When we do, we will update the
          "Last updated" date at the top of this page. We encourage you to
          review this policy periodically.
        </p>
      ),
    },

    {
      number: "10",
      title: "Contact us",
      content: (
        <div className="space-y-3">
          <p className="text-lg font-semibold text-black">Zainx Media</p>

          <a
            href="https://zainxmedia.com"
            className="text-(--primary-color) font-medium hover:underline"
          >
            zainxmedia.com
          </a>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] overflow-hidden">
      <Nav />

      {/* Hero */}
      <div className="px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-(--primary-color)/30 bg-(--primary-color)/10 mb-6">
            <ShieldCheck className="text-(--primary-color)" size={18} />
            <span className="text-sm font-medium text-black">
              Privacy & Data Protection
            </span>
          </div>

          <h1 className="text-black primary-font text-5xl md:text-7xl font-black tracking-tight leading-none">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            How we handle your information and protect your privacy while using
            Zainx Media services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-gray-500">
            <span>Effective date: May 14, 2025</span>
            <span className="hidden md:block">•</span>
            <span>Last updated: May 14, 2025</span>
            <span className="hidden md:block">•</span>
            <span>Applies to: zainxmedia.com</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white border border-black/5 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Number */}
                <div className="w-14 h-14 rounded-2xl bg-(--primary-color) text-black flex items-center justify-center text-xl font-black shrink-0 shadow-[0_10px_30px_rgba(184,255,3,0.3)]">
                  {section.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-5">
                    {section.title}
                  </h2>

                  <div className="text-gray-600 leading-relaxed text-base md:text-lg space-y-4">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Privacy;
