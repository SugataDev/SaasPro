import { MdKeyboardArrowRight } from "react-icons/md";
import SubHeading from "./SubHeading";
import Image from "./Image";

const ProductCard = ({ image, title, text }) => {
  return (
    <div className="w-91.5 bg-offwhite p-9 rounded-2xl shadow-janina hover:-translate-y-1.5 transition duration-300">
      <div className="w-14 h-14 mb-6 flex items-center justify-center">
        <Image src={image} alt={title} className="w-full h-full object-contain" />
      </div>
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
  );
};

export default ProductCard;

