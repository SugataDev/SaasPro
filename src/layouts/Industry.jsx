import Container from "../components/Container";
import Heading from "../components/Heading";
import IndustryCard from "../components/IndustryCard";
import Flex from "../components/Flex";
import IndustryImageOne from "../assets/industryimage1.png";
import IndustryImageTwo from "../assets/industryimage2.png";
import IndustryImageThree from "../assets/industryimage3.png";
import IndustryImageFour from "../assets/industryimage4.png";
import IndustryImageFive from "../assets/industryimage5.png";
import IndustryImageSix from "../assets/industryimage6.png";

const Industry = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <Heading className="text-center" text="Industries in focus" />
        <Flex className="justify-between flex-wrap gap-y-10 mt-12">
          <IndustryCard
            image={IndustryImageOne}
            title="EdTech"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <IndustryCard
            image={IndustryImageTwo}
            title="FinTech"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <IndustryCard
            image={IndustryImageThree}
            title="Retail"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <IndustryCard
            image={IndustryImageFour}
            title="Transportation"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <IndustryCard
            image={IndustryImageFive}
            title="Consulting"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <IndustryCard
            image={IndustryImageSix}
            title="Artificial Intelligence"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Industry;
