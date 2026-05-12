import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="w-full secondary-font bg-white px-4 py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="sf bg-white shadow shadow-black/10 text-black text-sm font-medium px-6 py-2 rounded-md tracking-wide md:text-base">
            Contact us
          </span>
        </div>

        {/* Heading */}
        <h2 className="primary-font text-center font-medium text-black leading-tight text-[clamp(2rem,8.5vw,4.8rem)] mb-4">
          Let's Talk About
          <br />
          Your Next Video.
        </h2>

        {/* Sub text */}
        <p className="sf text-center text-gray-500 text-[clamp(0.9rem,1.2vw,1.05rem)] leading-7 max-w-[450px] mx-auto mb-10">
          Reach out to Zainx Media and let's figure out exactly what your
          channel needs no pressure, just a real conversation about your content
          goals.
        </p>

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-md border border-gray-200 bg-gray-50 shadow-[0_12px_48px_rgba(0,0,0,0.07)]">
          {/* Form Side */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Full Name */}
                <div className="flex-1">
                  <label
                    htmlFor="fullName"
                    className="sf block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[#a6e800]/20"
                  />
                </div>

                {/* Phone */}
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="sf block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+001 234 567 890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[#a6e800]/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="sf block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[#a6e800]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="sf block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none resize-none transition-all duration-200 placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[#a6e800]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md py-3 font-bold text-sm text-white uppercase bg-gradient-to-br from-[#a6e800] to-[var(--primary-color)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_22px_rgba(166,232,0,0.35)] active:scale-[0.98] cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="hidden lg:flex lg:w-[43%] aspect-square">
            <img
              src="./images/formimg.webp"
              alt="Marketing expert"
              className="w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
