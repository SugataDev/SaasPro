import { FaQuoteLeft } from "react-icons/fa6";
import Image from "./Image";
import SubHeading from "./SubHeading";

const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div className="w-85 bg-white border border-[#E8EFF5] rounded-2xl p-7.5 shadow-janina relative flex flex-col justify-between">
      {/* Blue circular quote icon */}
      <div className="w-10 h-10 rounded-full bg-[#EAF2F8] text-secondary flex items-center justify-center mb-5">
        <FaQuoteLeft className="text-sm" />
      </div>

      <SubHeading
        className="text-[#495E6C]! text-sm font-normal leading-relaxed mb-6"
        text={quote}
      />

      <div className="flex items-center gap-x-3.5 pt-4 border-t border-[#F0F4F8]">
        <Image
          src={avatar}
          alt={author}
          className="w-10 h-10 rounded-full object-cover border border-[#E8EFF5]"
        />
        <div>
          <h4 className="text-sm font-bold text-third font-inter">{author}</h4>
          <span className="text-xs text-[#495E6C] font-inter font-normal">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

