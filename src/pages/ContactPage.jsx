import { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import Newsletter from "../layouts/Newsletter";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
  FaCheck,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 600);
  };

  return (
    <>
      {/* Themed Hero Banner */}
      <section className="relative bg-[#0D554C] pt-12 sm:pt-16 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 overflow-hidden text-center">
        {/* Hexagonal wireframe pattern */}
        <div className="absolute -bottom-8 -left-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-15 pointer-events-none">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full stroke-white fill-none"
            strokeWidth="1"
          >
            <polygon points="50,20 90,40 90,80 50,100 10,80 10,40" />
            <polygon points="90,40 130,60 130,100 90,120 50,100" />
            <polygon points="50,100 90,120 90,160 50,180 10,160 10,120" />
            <polygon points="130,60 170,80 170,120 130,140 90,120" />
            <polygon points="90,120 130,140 130,180 90,200 50,180" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="max-w-200 mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-offwhite font-inter leading-tight sm:leading-snug">
              Let's Connect and Build Together
            </h1>
            <SubHeading
              className="mt-4 sm:mt-6 text-offwhite/90 text-sm sm:text-base leading-relaxed max-w-150 mx-auto"
              text="Have a question about our platform, need custom enterprise onboarding, or just want to say hi? We'd love to hear from you."
            />
          </div>
        </Container>

        {/* Slanted white divider cut at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full h-12 sm:h-16"
            preserveAspectRatio="none"
          >
            <path d="M0 40L1440 100V100H0V40Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Office & Contact Info */}
            <div className="lg:col-span-5 bg-[#F7FAFC] border border-[#E6EDF3] rounded-2xl p-6 sm:p-8 shadow-sm">
              <span className="text-xs sm:text-sm text-secondary font-bold font-inter tracking-wide uppercase">
                Contact Information
              </span>
              <Heading
                className="mt-2 text-xl sm:text-2xl lg:text-3xl"
                text="Speak to Our Team"
              />
              <p className="text-[#495E6C] text-sm sm:text-base leading-relaxed font-inter font-normal mt-3 mb-8">
                Fill out the form or reach us directly via email, phone, or
                visit our headquarters.
              </p>

              <div className="space-y-6 text-[#495E6C] font-inter text-sm sm:text-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2F8] text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <FaLocationDot className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-third text-sm sm:text-base">
                      Office Address
                    </h4>
                    <p className="mt-1">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2F8] text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <FaEnvelope className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-third text-sm sm:text-base">
                      Email Us
                    </h4>
                    <a
                      href="mailto:contact@sasspro.com"
                      className="mt-1 block hover:text-secondary transition text-third font-medium"
                    >
                      contact@sasspro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2F8] text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <FaPhone className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-third text-sm sm:text-base">
                      Call Us
                    </h4>
                    <a
                      href="tel:+15551234567"
                      className="mt-1 block hover:text-secondary transition text-third font-medium"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAF2F8] text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <FaClock className="text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-third text-sm sm:text-base">
                      Working Hours
                    </h4>
                    <p className="mt-1">
                      Monday – Friday: 9:00 AM – 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E6EDF3]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-third mb-4">
                  Follow Our Socials
                </h4>
                <div className="flex items-center gap-x-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#D5E1EA] bg-white flex items-center justify-center text-third hover:bg-secondary hover:border-secondary hover:text-white transition duration-300 shadow-sm"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#D5E1EA] bg-white flex items-center justify-center text-third hover:bg-secondary hover:border-secondary hover:text-white transition duration-300 shadow-sm"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#D5E1EA] bg-white flex items-center justify-center text-third hover:bg-secondary hover:border-secondary hover:text-white transition duration-300 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white border border-[#E6EDF3] rounded-2xl p-6 sm:p-10 shadow-janina">
              <Heading
                className="text-2xl sm:text-3xl text-third"
                text="Send Us a Message"
              />
              <p className="text-[#495E6C] text-sm sm:text-base mt-2 mb-8 font-inter">
                We typically respond within 24 business hours.
              </p>

              {isSubmitted ? (
                <div className="bg-[#EAF7EE] border border-[#A7E2BA] rounded-xl p-6 sm:p-8 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#27AE60] text-white flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-third font-inter mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#495E6C] text-sm sm:text-base max-w-md mx-auto mb-6">
                    Thank you for reaching out. One of our solution specialists
                    will get back to you shortly.
                  </p>
                  <Button
                    text="Send Another Message"
                    onClick={() => setIsSubmitted(false)}
                    classname="py-2.5! px-6!"
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs sm:text-sm font-semibold text-third mb-2 font-inter"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-[#D6E2EC] rounded-xl px-4 py-3 text-sm sm:text-base text-third font-inter outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-semibold text-third mb-2 font-inter"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full border border-[#D6E2EC] rounded-xl px-4 py-3 text-sm sm:text-base text-third font-inter outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-semibold text-third mb-2 font-inter"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Product inquiry, feedback, partnership..."
                      className="w-full border border-[#D6E2EC] rounded-xl px-4 py-3 text-sm sm:text-base text-third font-inter outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-semibold text-third mb-2 font-inter"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help your team?"
                      className="w-full border border-[#D6E2EC] rounded-xl px-4 py-3 text-sm sm:text-base text-third font-inter outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition bg-white resize-y"
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      classname="w-full sm:w-auto py-3.5! px-8! flex items-center justify-center"
                      text={
                        isSubmitting ? "Sending Message..." : "Send Message"
                      }
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default ContactPage;
