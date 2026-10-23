import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import TestimonialCard from "../components/TestimonialCard";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Avatar1 from "../assets/avatar1.png";
import Avatar3 from "../assets/avatar3.png";

const Testimonial = () => {
  return (
    <section className="py-24 bg-[#F9FBFC]">
      <Container>
        <Flex className="items-center justify-between gap-x-12">
          {/* Left Title Area */}
          <div className="w-95 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#FFEAEF] text-[#FF7282] flex items-center justify-center mb-5">
              <FaQuoteLeft className="text-sm" />
            </div>

            <Heading
              className="leading-12"
              text="What our clients say about us"
            />

            <SubHeading
              className="text-[#495E6C]! pt-5 pb-8 leading-relaxed"
              text="Community reviews from our lovely customers around the world."
            />
          </div>

          {/* Right Cards Area */}
          <div className="flex-1">
            <Flex className="justify-end gap-x-6">
              <TestimonialCard
                quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                author="Mina Lari"
                role="VP of Operations"
                avatar={Avatar1}
              />
              <TestimonialCard
                quote="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                author="Lois Bradley"
                role="Engineering Lead"
                avatar={Avatar3}
              />
            </Flex>

            {/* Slider Controls */}
            <div className="flex justify-end items-center gap-x-3 mt-8 pr-2">
              <button
                className="w-9 h-9 rounded-full border border-[#D5E1EA] bg-white text-[#495E6C] flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <MdKeyboardArrowLeft className="text-xl" />
              </button>
              <button
                className="w-9 h-9 rounded-full border border-secondary bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 transition duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <MdKeyboardArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Testimonial;

