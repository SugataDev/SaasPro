import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";

const Product = () => {
  return (
    <section className="py-20 bg-[#F9FBFC]">
      <Container>
        <Heading className="text-center" text="The Product we work with." />

        <Flex className="justify-between items-stretch mt-12">
          <ProductCard
            image={Product1}
            title="Consulting"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <ProductCard
            image={Product2}
            title="Security"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
          <ProductCard
            image={Product3}
            title="Management & support"
            text="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          />
        </Flex>

        {/* Carousel pagination indicator */}
        <div className="flex justify-center items-center gap-x-2 mt-12">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary cursor-pointer"></span>
        </div>
      </Container>
    </section>
  );
};

export default Product;

