import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo from "../assets/logo.png";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-third text-offwhite pt-16 pb-8 font-inter">
      <Container>
        <Flex className="justify-between items-start pb-14 border-b border-white/10 gap-x-10">
          {/* Col 1: Brand Info */}
          <div className="w-[320px]">
            <Image
              src={Logo}
              alt="SassPro Logo"
              className="brightness-0 invert mb-6"
            />
            <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
              Since 1999. For millions of users. We transform businesses with
              powerful and adaptable digital solutions that satisfy the needs of
              today and unlock tomorrow's opportunities.
            </p>
            <div className="flex items-center gap-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-secondary hover:border-secondary hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-xs" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-secondary hover:border-secondary hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-secondary hover:border-secondary hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xs" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 font-inter">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/70 font-normal">
              <li>
                <a href="#" className="hover:text-secondary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 font-inter">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/70 font-normal">
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="w-60">
            <h4 className="text-base font-bold text-white mb-5 font-inter">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-white/70 font-normal">
              <li>
                <a
                  href="mailto:contact@sasspro.com"
                  className="hover:text-secondary transition"
                >
                  contact@sasspro.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-secondary transition"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="leading-relaxed">
                4517 Washington Ave. Manchester, Kentucky 39495
              </li>
            </ul>
          </div>
        </Flex>

        {/* Bottom copyright */}
        <div className="pt-6 text-center text-xs text-white/50">
          <p>2021 &copy; SassPro. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
