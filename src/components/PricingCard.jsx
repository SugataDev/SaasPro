import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ title, price, period, features, buttonText = "Try for Free" }) => {
  return (
    <div className="w-91.5 bg-[#F7FAFC] border border-[#E6EDF3] p-9 rounded-2xl transition duration-300 hover:shadow-lg">
      <h3 className="text-[22px] text-third font-inter font-bold mb-3">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-[48px] text-third font-inter font-bold leading-none">{price}</span>
        <span className="text-base text-[#495E6C] font-inter font-normal ml-2">{period}</span>
      </div>
      <div className="w-full h-px bg-[#D6E2EC] my-8"></div>
      <ul className="space-y-4 mb-9">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-x-3 text-base text-[#495E6C] font-inter font-normal">
            <FaCheck className="text-secondary text-sm shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-secondary text-offwhite text-base font-inter font-medium py-3.5 rounded-md border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;

