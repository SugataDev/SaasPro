import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import EngageChart from "../assets/engageChart.png";

const Engage = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <Flex className="items-center justify-between gap-x-16">
          {/* Left Visual Card */}
          <div className="w-1/2">
            <img
              src={EngageChart}
              alt="Engage Chart"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-1/2">
            <Heading
              className="leading-12.5 max-w-115"
              text="Don't just engage, make it engaging."
            />

            <SubHeading
              className="text-[#495E6C]! pt-6 pb-4 leading-relaxed max-w-120"
              text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."
            />

            <SubHeading
              className="text-[#495E6C]! pb-8 leading-relaxed max-w-120"
              text="Our UX/UI and experience will help you make a lasting impression on your customers and grow your business."
            />

            <Button classname="py-4! px-10!" text="Read More" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Engage;
