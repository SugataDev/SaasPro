import { MdKeyboardArrowRight } from "react-icons/md";
import SubHeading from "./SubHeading";
import Image from "./Image";

const IndustryCard = ({ image, text, title }) => {
  return (
    <div className="w-91.5 bg-offwhite rounded-2xl shadow-janina overflow-hidden hover:-translate-y-1.5 transition duration-300">
      <div className="w-86.5 h-52.5 mx-auto mt-2.5 rounded-xl overflow-hidden">
        <Image src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </div>
      <div className="p-7.5">
        <h3 className="text-[22px] text-third font-inter font-bold">{title}</h3>
        <SubHeading
          className="text-[#495E6C]! pt-3.5 pb-6 leading-relaxed"
          text={text}
        />
        <a
          className="text-base text-secondary font-inter font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
          href="#"
        >
          See More <MdKeyboardArrowRight className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default IndustryCard;
