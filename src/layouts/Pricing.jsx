import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
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
    <section className="py-24 bg-white">
      <Container>
        <Heading className="text-center" text="Affordable Pricing" />

        {/* Billing toggle switch */}
        <div className="flex justify-center items-center gap-x-4 mt-8 mb-14">
          <span
            className={`text-base font-inter font-medium cursor-pointer transition ${
              !isAnnual ? "text-third font-semibold" : "text-[#495E6C]"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>

          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-15 h-8 bg-secondary rounded-full p-1 cursor-pointer transition-colors relative flex items-center"
            aria-label="Toggle annual or monthly pricing"
          >
            <div
              className={`w-6 h-6 bg-offwhite rounded-full shadow-md transition-transform duration-300 transform ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            ></div>
          </button>

          <span
            className={`text-base font-inter font-medium cursor-pointer transition ${
              isAnnual ? "text-third font-semibold" : "text-[#495E6C]"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annualy
          </span>
        </div>

        <Flex className="justify-between items-stretch">
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
        </Flex>
      </Container>
    </section>
  );
};

export default Pricing;

