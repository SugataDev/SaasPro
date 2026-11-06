import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Pricing from "../layouts/Pricing";
import Rating from "../layouts/Rating";
import Testimonial from "../layouts/Testimonial";
import Newsletter from "../layouts/Newsletter";
import { FaCircleQuestion } from "react-icons/fa6";

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your subscription at any point directly from your account dashboard. Changes take effect immediately.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "All paid plans come with a full-featured 14-day free trial. No credit card is required to explore all core platform capabilities.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, American Express) along with PayPal, Apple Pay, and direct invoicing for annual accounts.",
  },
  {
    question: "Are there any hidden setup fees?",
    answer:
      "Never. The price you see includes all routine cloud updates, server maintenance, data security backups, and standard technical support.",
  },
  {
    question: "What support level does my tier receive?",
    answer:
      "Standard plans include comprehensive email and ticket support within 24 hours. Business plans receive dedicated 24/7 priority support and direct onboarding.",
  },
  {
    question: "How secure is our organizational data?",
    answer:
      "We adhere to SOC 2 Type II compliance standards and enforce end-to-end AES-256 encryption across all data at rest and in transit.",
  },
];

const PricingPage = () => {
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
              Predictable, Transparent Pricing For Every{" "}
              <span className="relative inline-block">
                Stage
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3.5 z-0 pointer-events-none text-secondary"
                  viewBox="0 0 260 15"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 11C45 4 180 2 257 8C215 13 85 15 3 11Z"
                    fill="#2C83BB"
                    opacity="0.9"
                  />
                </svg>
              </span>
            </h1>
            <SubHeading
              className="mt-4 sm:mt-6 text-offwhite/90 text-sm sm:text-base leading-relaxed max-w-150 mx-auto"
              text="Simple plans that adapt to your team's workflow. Start free, explore all features, and scale smoothly as you expand."
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

      {/* Pricing Section */}
      <Pricing />

      {/* Rating / Social Proof */}
      <Rating />

      {/* Frequently Asked Questions */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F9FBFC]">
        <Container>
          <div className="text-center max-w-160 mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm text-secondary font-bold font-inter tracking-wide uppercase">
              Got Questions?
            </span>
            <Heading
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl"
              text="Frequently Asked Questions"
            />
            <SubHeading
              className="text-[#495E6C]! mt-3 text-sm sm:text-base"
              text="Everything you need to know about our subscriptions, billing, and platform features."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7.5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E6EDF3] p-6 sm:p-7.5 rounded-2xl shadow-janina hover:-translate-y-1 transition duration-300 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-[#EAF2F8] text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <FaCircleQuestion className="text-lg" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-third font-inter mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[#495E6C] text-sm sm:text-base leading-relaxed font-inter font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonial />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default PricingPage;
