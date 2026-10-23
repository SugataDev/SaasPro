import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import DeviceDashboard from "../assets/DeviceDashboard.png";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const Device = () => {
  return (
    <section className="py-24 bg-[#F9FBFC]">
      <Container>
        <div className="text-center max-w-170 mx-auto mb-10">
          <Heading className="text-center" text="All product work with several devices." />
          <SubHeading
            className="text-[#495E6C]! pt-4 pb-8 leading-relaxed"
            text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow."
          />

          {/* App store buttons */}
          <div className="flex justify-center items-center gap-x-4">
            <button className="flex items-center gap-x-3 bg-third text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition duration-300 shadow">
              <FaApple className="text-2xl" />
              <div className="text-left leading-none">
                <span className="text-[10px] block opacity-80 uppercase tracking-wider">
                  Download on the
                </span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </button>

            <button className="flex items-center gap-x-3 bg-third text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition duration-300 shadow">
              <FaGooglePlay className="text-xl" />
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
        <div className="mt-14">
          <img
            src={DeviceDashboard}
            alt="Device Dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Device;

