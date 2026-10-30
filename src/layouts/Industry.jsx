import Container from "../components/Container";
import Heading from "../components/Heading";
import IndustryCard from "../components/IndustryCard";
import IndustryImageOne from "../assets/industryimage1.png";
import IndustryImageTwo from "../assets/industryimage2.png";
import IndustryImageThree from "../assets/industryimage3.png";
import IndustryImageFour from "../assets/industryimage4.png";
import IndustryImageFive from "../assets/industryimage5.png";
import IndustryImageSix from "../assets/industryimage6.png";

const Industry = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <Heading className="text-center" text="Industries in focus" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5 mt-8 sm:mt-12 justify-items-center">
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
        </div>
      </Container>
    </section>
  );
};

export default Industry;
