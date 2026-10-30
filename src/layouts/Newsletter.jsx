import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import NewsletterImage from "../assets/NewsletterImage.png";
import { FaRegEnvelope } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <div className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          <Flex className="flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-6 text-center lg:text-left">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-2 sm:mb-3 font-inter">
                Newsletter
              </span>

              <Heading className="text-2xl sm:text-3xl lg:text-[38px] leading-tight" text="Stay up to date" />

              <SubHeading
                className="text-[#495E6C]! pt-2 sm:pt-3 pb-6 sm:pb-8 max-w-110 mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base"
                text="With our latest news and updates delivered straight to your inbox every week. No spam, ever."
              />

              <form onSubmit={(e) => e.preventDefault()} className="max-w-115 mx-auto lg:mx-0">
                <div className="flex flex-col sm:block sm:relative gap-3">
                  <div className="relative w-full">
                    <FaRegEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-[#8C9BA5] text-lg pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      aria-label="Email address for newsletter"
                      className="w-full bg-white text-third text-sm font-inter py-3.5 sm:py-4 pl-12 pr-4 sm:pr-36 rounded-xl outline-none shadow-sm border border-transparent focus:border-secondary transition"
                    />
                  </div>
                  <Button
                    type="submit"
                    classname="w-full sm:w-auto sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-1.5 py-3! px-6 sm:px-7! rounded-lg flex items-center justify-center"
                    text="Subscribe"
                  />
                </div>
              </form>
            </div>

            {/* Right Illustration */}
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-1/2 flex justify-center">
              <img
                src={NewsletterImage}
                alt="Newsletter Illustration"
                className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-full h-auto object-contain"
              />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
