import Container from "../components/Container";
import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";

const Product = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F9FBFC]">
      <Container>
        <Heading className="text-center" text="The Product we work with." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5 mt-8 sm:mt-12 justify-items-center">
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
        </div>

        {/* Carousel pagination indicator */}
        <div className="flex justify-center items-center gap-x-2 mt-8 sm:mt-12">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary cursor-pointer"></span>
        </div>
      </Container>
    </section>
  );
};

export default Product;
