import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import NewsletterImage from "../assets/NewsletterImage.png";
import { FaRegEnvelope } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="bg-primary rounded-3xl p-12 relative overflow-hidden">
          <Flex className="items-center justify-between">
            {/* Left Content */}
            <div className="w-1/2 pr-6">
              <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-3 font-inter">
                Newsletter
              </span>

              <Heading className="text-[38px] leading-tight" text="Stay up to date" />

              <SubHeading
                className="text-[#495E6C]! pt-3 pb-8 max-w-110 leading-relaxed"
                text="With our latest news and updates delivered straight to your inbox every week. No spam, ever."
              />

              <div className="relative max-w-115">
                <FaRegEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-[#8C9BA5] text-lg pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full bg-white text-third text-sm font-inter py-4 pl-12 pr-40 rounded-xl outline-none shadow-sm border border-transparent focus:border-secondary transition"
                />
                <Button
                  classname="absolute top-1/2 -translate-y-1/2 right-1.5 py-3! px-7! rounded-lg"
                  text="Subscribe"
                />
              </div>
            </div>

            {/* Right Illustration */}
            <div className="w-1/2 flex justify-center">
              <img
                src={NewsletterImage}
                alt="Newsletter Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;

