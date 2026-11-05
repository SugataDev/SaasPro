import { Link } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import { FaHouse, FaCompass } from "react-icons/fa6";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24 bg-[#F9FBFC] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2C83BB]/5 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10 text-center">
        <div className="max-w-xl mx-auto px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#EAF2F8] text-secondary flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FaCompass className="text-3xl sm:text-4xl animate-spin" style={{ animationDuration: "12s" }} />
          </div>

          <span className="text-secondary font-bold text-6xl sm:text-8xl lg:text-9xl font-inter block leading-none tracking-tight">
            404
          </span>

          <Heading
            className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl"
            text="Page Not Found"
          />

          <SubHeading
            className="text-[#495E6C]! mt-3 text-sm sm:text-base leading-relaxed max-w-md mx-auto"
            text="Sorry, we couldn't find the page you're looking for. It might have been moved or removed."
          />

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button classname="inline-flex items-center gap-2 py-3.5! px-8!">
                <FaHouse className="text-sm" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                text="Contact Support"
                classname="bg-white border-[#D6E2EC] text-third hover:bg-secondary hover:text-white hover:border-secondary shadow-sm"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
