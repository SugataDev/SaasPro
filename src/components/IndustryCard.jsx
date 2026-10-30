import { MdKeyboardArrowRight } from "react-icons/md";
import SubHeading from "./SubHeading";
import Image from "./Image";

const IndustryCard = ({ image, text, title }) => {
  return (
    <div className="w-full max-w-91.5 bg-offwhite rounded-2xl shadow-janina overflow-hidden hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between">
      <div className="w-[calc(100%-20px)] h-48 sm:h-52.5 mx-auto mt-2.5 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-5 sm:p-7.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-[22px] text-third font-inter font-bold">{title}</h3>
          <SubHeading
            className="text-[#495E6C]! pt-2.5 sm:pt-3.5 pb-5 sm:pb-6 leading-relaxed"
            text={text}
          />
        </div>
        <div>
          <a
            className="text-sm sm:text-base text-secondary font-inter font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            href="#"
          >
            See More <MdKeyboardArrowRight className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
