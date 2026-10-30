import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import BannerImage from "../assets/banner.png";
import Button from "../components/Button";
import SubHeading from "../components/SubHeading";

const Banner = () => {
  return (
    <section className="relative bg-[#0D554C] [clip-path:polygon(0_0,100%_0,100%_100%,0_85%)] sm:[clip-path:polygon(0_0,100%_0,100%_100%,0_75%)] lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_70%)] pt-12 sm:pt-16 lg:pt-25 pb-36 sm:pb-44 lg:pb-55 overflow-hidden">
      {/* Hexagonal wireframe pattern in bottom left */}
      <div className="absolute -bottom-8 -left-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100 opacity-15 pointer-events-none">
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
          <polygon points="170,80 210,100 210,140 170,160 130,140" />
          <polygon points="130,140 170,160 170,200 130,220 90,200" />
          <polygon points="210,100 250,120 250,160 210,180 170,160" />
          <line x1="50" y1="20" x2="50" y2="100" strokeDasharray="3 3" />
          <line x1="90" y1="40" x2="90" y2="120" strokeDasharray="3 3" />
          <line x1="130" y1="60" x2="130" y2="140" strokeDasharray="3 3" />
        </svg>
      </div>

      <Container className="relative z-10">
        <Flex className="flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2 text-left">
            <h4 className="text-sm sm:text-base lg:text-lg text-offwhite font-inter font-bold">
              Business & Technologies
            </h4>
            <h1 className="pt-2 sm:pt-2.5 pb-6 sm:pb-8 leading-tight sm:leading-snug lg:leading-15.5 w-full max-w-122.5 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-offwhite font-inter font-bold">
              We help tech{" "}
              <span className="relative inline-block">
                companies deliver
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
              </span>{" "}
              great software
            </h1>

            <SubHeading
              className="leading-6 sm:leading-6.75 text-sm sm:text-base text-offwhite/90 font-inter font-normal max-w-122.5"
              text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."
            />

            <div className="w-full max-w-140 mt-8 sm:mt-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row w-full rounded-lg overflow-hidden shadow-lg bg-white sm:h-16 border border-white/20"
              >
                <input
                  type="text"
                  placeholder="Enter your email or domain..."
                  aria-label="Request demo input"
                  className="h-12 sm:h-full flex-1 px-4 sm:px-6 bg-white text-third font-inter text-sm sm:text-base outline-none min-w-0"
                />
                <Button
                  classname="w-full sm:w-auto h-12 sm:h-full py-0! px-6 sm:px-8! rounded-none! text-sm sm:text-base font-inter font-medium shrink-0 flex items-center justify-center hover:brightness-105!"
                  text="Request for Demo"
                />
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="w-full max-w-lg lg:max-w-140 xl:max-w-165 xl:-mr-16 drop-shadow-2xl">
              <Image
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl block"
                src={BannerImage}
                alt="SaaS Dashboard Preview"
              />
            </div>
          </div>
        </Flex>
      </Container>

      {/* Slanted white divider cut at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-16 sm:h-24 lg:h-30"
          preserveAspectRatio="none"
        >
          <path d="M0 60L1440 140V140H0V60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
