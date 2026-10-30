import { MdKeyboardArrowRight } from "react-icons/md";
import SubHeading from "./SubHeading";
import Image from "./Image";

const ProductCard = ({ image, title, text }) => {
  return (
    <div className="w-full max-w-91.5 bg-offwhite p-6 sm:p-9 rounded-2xl shadow-janina hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 flex items-center justify-center">
          <Image src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl sm:text-[22px] text-third font-inter font-bold">{title}</h3>
        <SubHeading
          className="text-[#495E6C]! pt-2.5 sm:pt-3.5 pb-5 sm:pb-6 leading-relaxed text-sm sm:text-base"
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
  );
};

export default ProductCard;
