import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import Product from "../layouts/Product";
import Engage from "../layouts/Engage";
import Device from "../layouts/Device";
import Industry from "../layouts/Industry";
import Newsletter from "../layouts/Newsletter";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ProductsPage = () => {
  return (
    <>
      {/* Themed Hero Banner */}
      <section className="relative bg-[#0D554C] pt-12 sm:pt-16 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 overflow-hidden text-center">
        {/* Hexagonal wireframe pattern */}
        <div className="absolute -bottom-8 -left-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-15 pointer-events-none">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full stroke-white fill-none"
            strokeWidth="1"
          >
            <polygon points="50,20 90,40 90,80 50,100 10,80 10,40" />
            <polygon points="90,40 130,60 130,100 90,120 50,100" />
            <polygon points="50,100 90,120 90,160 50,180 10,160 10,120" />
            <polygon points="130,60 170,80 170,120 130,140 90,120" />
            <polygon points="90,120 130,140 130,180 90,200 50,180" />
            <line x1="50" y1="20" x2="50" y2="100" strokeDasharray="3 3" />
            <line x1="90" y1="40" x2="90" y2="120" strokeDasharray="3 3" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="max-w-200 mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-offwhite font-inter leading-tight sm:leading-snug">
              Powerful Tools Engineered for Modern{" "}
              <span className="relative inline-block">
                Growth
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3.5 z-0 pointer-events-none text-secondary"
                  viewBox="0 0 260 15"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 11C45 4 180 2 257 8C215 13 85 15 3 11Z"
                    fill="#2C83BB"
                    opacity="0.9"
                  />
                </svg>
              </span>
            </h1>
            <SubHeading
              className="mt-4 sm:mt-6 text-offwhite/90 text-sm sm:text-base leading-relaxed max-w-150 mx-auto"
              text="Explore our complete suite of cloud-native solutions, security integrations, and productivity systems built to scale with your team."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  text="Schedule a Demo"
                  classname="shadow-lg hover:brightness-105"
                />
              </Link>
              <Link to="/pricing">
                <Button
                  text="View Pricing"
                  classname="bg-transparent border-white hover:bg-white/10 hover:text-white"
                />
              </Link>
            </div>
          </div>
        </Container>

        {/* Slanted white divider cut at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full h-12 sm:h-16"
            preserveAspectRatio="none"
          >
            <path d="M0 40L1440 100V100H0V40Z" fill="#F9FBFC" />
          </svg>
        </div>
      </section>

      <Product />
      <Engage />
      <Device />
      <Industry />
      <Newsletter />
    </>
  );
};

export default ProductsPage;
