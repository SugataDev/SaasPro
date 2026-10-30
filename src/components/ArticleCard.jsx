import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import SubHeading from "./SubHeading";
import Image from "./Image";

const ArticleCard = ({ image, title, author, avatar, date, text }) => {
  return (
    <div className="w-full max-w-91.5 bg-offwhite p-3 rounded-2xl shadow-janina hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between">
      <div className="w-full h-48 sm:h-52.5 rounded-xl overflow-hidden mb-4 sm:mb-5">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-[20px] text-third font-inter font-bold leading-snug">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1 my-3 sm:my-3.5 text-xs text-[#495E6C]">
            <div className="flex items-center gap-x-2">
              <Image
                src={avatar}
                alt={author}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-semibold text-third font-inter">{author}</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <FaRegCalendarDays className="text-[#495E6C] text-sm" />
              <span className="font-inter">{date}</span>
            </div>
          </div>

          <SubHeading
            className="text-[#495E6C]! text-xs sm:text-sm font-normal leading-relaxed pb-4 sm:pb-5"
            text={text}
          />
        </div>

        <div>
          <a
            className="text-sm text-secondary font-inter font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            href="#"
          >
            See More <MdKeyboardArrowRight className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
