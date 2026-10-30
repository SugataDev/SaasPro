import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import DeviceDashboard from "../assets/DeviceDashboard.png";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const Device = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F9FBFC]">
      <Container>
        <div className="text-center max-w-170 mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
          <Heading className="text-center" text="All product work with several devices." />
          <SubHeading
            className="text-[#495E6C]! pt-3 sm:pt-4 pb-6 sm:pb-8 leading-relaxed text-sm sm:text-base"
            text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."
          />

          {/* App store buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-x-3 bg-third text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition duration-300 shadow cursor-pointer min-w-[160px]"
            >
              <FaApple className="text-2xl shrink-0" />
              <div className="text-left leading-none">
                <span className="text-[10px] block opacity-80 uppercase tracking-wider">
                  Download on the
                </span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-x-3 bg-third text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition duration-300 shadow cursor-pointer min-w-[160px]"
            >
              <FaGooglePlay className="text-xl shrink-0" />
              <div className="text-left leading-none">
                <span className="text-[10px] block opacity-80 uppercase tracking-wider">
                  GET IT ON
                </span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-8 sm:mt-14 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
          <img
            src={DeviceDashboard}
            alt="Device Dashboard"
            className="w-full h-auto object-cover block"
          />
        </div>
      </Container>
    </section>
  );
};

export default Device;
