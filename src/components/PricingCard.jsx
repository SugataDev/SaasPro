import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ title, price, period, features, buttonText = "Try for Free" }) => {
  return (
    <div className="w-full max-w-91.5 bg-[#F7FAFC] border border-[#E6EDF3] p-6 sm:p-9 rounded-2xl transition duration-300 hover:shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-xl sm:text-[22px] text-third font-inter font-bold mb-2 sm:mb-3">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-4xl sm:text-[48px] text-third font-inter font-bold leading-none">{price}</span>
          <span className="text-sm sm:text-base text-[#495E6C] font-inter font-normal ml-2">{period}</span>
        </div>
        <div className="w-full h-px bg-[#D6E2EC] my-6 sm:my-8"></div>
        <ul className="space-y-3.5 sm:space-y-4 mb-7 sm:mb-9">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-x-3 text-sm sm:text-base text-[#495E6C] font-inter font-normal">
              <FaCheck className="text-secondary text-sm shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="w-full bg-secondary text-offwhite text-sm sm:text-base font-inter font-medium py-3 sm:py-3.5 rounded-md border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
