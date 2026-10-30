import Container from "../components/Container";
import Image from "../components/Image";
import Logo from "../assets/logo.png";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-third text-offwhite pt-12 sm:pt-16 pb-8 font-inter">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 sm:pb-14 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="w-full max-w-sm">
            <Image
              src={Logo}
              alt="SassPro Logo"
              className="brightness-0 invert mb-5 sm:mb-6 h-7 sm:h-8 w-auto object-contain"
            />
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-normal">
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
          <div className="w-full">
            <h4 className="text-base font-bold text-white mb-4 sm:mb-5 font-inter">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70 font-normal">
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="w-full">
            <h4 className="text-base font-bold text-white mb-4 sm:mb-5 font-inter">
              Resources
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70 font-normal">
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition block py-0.5">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="w-full">
            <h4 className="text-base font-bold text-white mb-4 sm:mb-5 font-inter">
              Contact Details
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-white/70 font-normal">
              <li>
                <a
                  href="mailto:contact@sasspro.com"
                  className="hover:text-secondary transition block py-0.5 break-all"
                >
                  contact@sasspro.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-secondary transition block py-0.5"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="leading-relaxed text-xs sm:text-sm">
                4517 Washington Ave. Manchester, Kentucky 39495
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 text-center text-xs text-white/50">
          <p>&copy; 2021 SassPro. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
