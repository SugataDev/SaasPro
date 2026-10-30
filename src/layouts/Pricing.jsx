import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const features = [
    "Access to editing all blocks",
    "Editing blocks together",
    "Access to all premium icons",
    "A dedicated domain",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        <Heading className="text-center" text="Affordable Pricing" />

        {/* Billing toggle switch */}
        <div className="flex justify-center items-center gap-x-4 mt-6 sm:mt-8 mb-10 sm:mb-14">
          <span
            className={`text-sm sm:text-base font-inter font-medium cursor-pointer transition ${
              !isAnnual ? "text-third font-semibold" : "text-[#495E6C]"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>

          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 sm:w-15 h-7 sm:h-8 bg-secondary rounded-full p-1 cursor-pointer transition-colors relative flex items-center"
            aria-label="Toggle annual or monthly pricing"
          >
            <div
              className={`w-5 sm:w-6 h-5 sm:h-6 bg-offwhite rounded-full shadow-md transition-transform duration-300 transform ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            ></div>
          </button>

          <span
            className={`text-sm sm:text-base font-inter font-medium cursor-pointer transition ${
              isAnnual ? "text-third font-semibold" : "text-[#495E6C]"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annualy
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5 justify-items-center">
          <PricingCard
            title="Free Plan"
            price="$0"
            period="/ monthly"
            features={features}
          />
          <PricingCard
            title="Premium Plan"
            price={isAnnual ? "$599" : "$59"}
            period={isAnnual ? "/ year" : "/ monthly"}
            features={features}
          />
          <PricingCard
            title="Business Plan"
            price={isAnnual ? "$999" : "$99"}
            period={isAnnual ? "/ year" : "/ monthly"}
            features={features}
          />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
