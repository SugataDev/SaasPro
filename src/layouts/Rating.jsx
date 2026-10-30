import Container from "../components/Container";
import Heading from "../components/Heading";
import { FaStar } from "react-icons/fa6";
import RatingOne from "../assets/retingicon1.png";
import RatingTwo from "../assets/retingicon2.png";
import RatingThree from "../assets/retingicon3.png";
import RatingCard from "../components/RatingCard";

const Rating = () => {
  return (
    <section className="relative z-20 -mt-20 sm:-mt-28 lg:-mt-32.5 mb-12 sm:mb-16 lg:mb-20">
      <Container>
        <div className="bg-offwhite p-6 sm:p-8 lg:p-12.5 rounded-2xl shadow-janina">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[rgba(17,47,66,0.1)] pb-8 sm:pb-10 mb-8 sm:mb-10 gap-6">
            <div className="w-full md:max-w-xl lg:max-w-187.5">
              <p className="text-xs sm:text-sm text-secondary font-bold font-inter tracking-wide uppercase">
                Who we are?
              </p>
              <Heading
                className="w-full pt-2 sm:pt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
                text="More than 5,000 users around the world are already using STDEV actively"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 w-full sm:w-44.25 h-auto py-5 sm:py-0 sm:h-46.5 bg-[#CFDDDB] rounded-xl sm:rounded-md shrink-0 self-center md:self-auto">
              <h1 className="text-4xl sm:text-[50px] leading-tight sm:leading-12 text-third font-inter font-bold">
                4.8
              </h1>
              <ul className="flex gap-x-1 my-1">
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
                <li>
                  <FaStar className="text-[#FF7282] text-sm" />
                </li>
              </ul>
              <p className="text-sm sm:text-base text-[#495E6C] font-inter font-normal">
                35 Reviews
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-0 sm:px-4 items-center">
            <RatingCard image={RatingOne} title="70+" des="Professionals" />
            <RatingCard image={RatingTwo} title="22 Years" des="Year of experience" />
            <RatingCard image={RatingThree} title="$40+M" des="Fundraised by customers" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Rating;
