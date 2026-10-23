import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import { FaStar } from "react-icons/fa6";
import RatingOne from "../assets/retingicon1.png";
import RatingTwo from "../assets/retingicon2.png";
import RatingThree from "../assets/retingicon3.png";
import RatingCard from "../components/RatingCard";

const Rating = () => {
  return (
    <section className="relative z-20 -mt-32.5 mb-20">
      <Container>
        <div className="bg-offwhite p-12.5 rounded-2xl shadow-janina">
          <Flex className="justify-between items-center border-b border-[rgba(17,47,66,0.1)] pb-10 mb-10">
            <div>
              <p className="text-sm text-secondary font-bold font-inter">
                Who we are?
              </p>
              <Heading
                className="w-187.5 pt-4"
                text="More than 5,000 users around the world are already using STDEV actively"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1 w-44.25 h-46.5 bg-[#CFDDDB] rounded-md shrink-0">
              <h1 className="text-[50px] leading-12 text-third font-inter font-bold">
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
              <p className="text-base text-[#495E6C] font-inter font-normal">
                35 Reviews
              </p>
            </div>
          </Flex>

          <Flex className="justify-between items-center px-4">
            <RatingCard image={RatingOne} title="70+" des="Professionals" />
            <RatingCard image={RatingTwo} title="22 Years" des="Year of experience" />
            <RatingCard image={RatingThree} title="$40+M" des="Fundraised by customers" />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Rating;
