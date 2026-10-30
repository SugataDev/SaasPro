import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import EngageChart from "../assets/engageChart.png";

const Engage = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <Container>
        <Flex className="flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Visual Card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={EngageChart}
              alt="Engage Chart"
              className="w-full max-w-lg lg:max-w-none h-auto object-cover rounded-xl shadow-md sm:shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <Heading
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug lg:leading-12.5 max-w-115"
              text="Don't just engage, make it engaging."
            />

            <SubHeading
              className="text-[#495E6C]! pt-4 sm:pt-6 pb-3 sm:pb-4 leading-relaxed max-w-120 text-sm sm:text-base"
              text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."
            />

            <SubHeading
              className="text-[#495E6C]! pb-6 sm:pb-8 leading-relaxed max-w-120 text-sm sm:text-base"
              text="Our UX/UI and experience will help you make a lasting impression on your customers and grow your business."
            />

            <Button
              classname="py-3.5 sm:py-4! px-8 sm:px-10! w-full sm:w-auto text-center justify-center"
              text="Read More"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Engage;
