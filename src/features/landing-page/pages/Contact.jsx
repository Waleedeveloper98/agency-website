import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};

    // Full Name
    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    // Phone — must be numeric, allow +, spaces, dashes, parens
    const phoneRegex = /^\+?[\d\s\-().]{7,15}$/;
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(data.phone.trim())) {
      newErrors.phone = "Enter a valid phone number (digits only).";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    // Message
    if (!data.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the error for this field as soon as user starts correcting it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // All good — clear errors and proceed
    setErrors({});
    alert("Message sent! We'll be in touch soon.");
  };

  // Reusable error message component
  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs text-red-500 font-medium">{errors[field]}</p>
    ) : null;

  // Dynamic input class — red border on error
  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:ring-4 ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-300 focus:border-[var(--primary-color)] focus:ring-[#a6e800]/20"
    }`;

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
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Name + Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Full Name */}
                <div className="flex-1">
                  <label htmlFor="fullName" className="sf block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass("fullName")}
                  />
                  <ErrorMsg field="fullName" />
                </div>

                {/* Phone */}
                <div className="flex-1">
                  <label htmlFor="phone" className="sf block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+001 234 567 890"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                  />
                  <ErrorMsg field="phone" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sf block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
                <ErrorMsg field="email" />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sf block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business..."
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass("message") + " resize-none"}
                />
                <ErrorMsg field="message" />
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
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;