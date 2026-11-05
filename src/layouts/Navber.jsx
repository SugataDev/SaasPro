import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Logo from "../assets/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navber = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-[#0D554C] py-4 sm:py-5.5 relative z-50">
      <Container>
        <Flex className="justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="inline-block shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
          >
            <Image src={Logo} alt="Logo" className="h-7 sm:h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation (>= lg) */}
          <div className="hidden lg:flex items-center gap-x-9">
            <ul className="flex items-center gap-x-7.5">
              <ListItem to="/" text="Home" />
              <ListItem to="/products" text="Products" />
              <ListItem to="/pricing" text="Pricing" />
              <ListItem to="/blog" text="Blog" />
              <ListItem to="/contact" text="Contact" />
            </ul>
            <Link to="/contact">
              <Button
                classname="bg-transparent py-2.5! px-5.75! hover:bg-secondary hover:border-amber-50 border-white hover:text-white text-white"
                text="Let's talk"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button (< lg) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-offwhite hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FaXmark className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </Flex>
      </Container>

      {/* Mobile Drawer / Dropdown Menu (< lg) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] sm:top-[76px] bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        >
          <div
            className="bg-[#0D554C] border-t border-white/10 px-6 py-6 max-h-[calc(100vh-76px)] overflow-y-auto shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-2">
              <ListItem
                to="/"
                text="Home"
                isMobile={true}
                onItemClick={closeMenu}
              />
              <ListItem
                to="/products"
                text="Products"
                isMobile={true}
                onItemClick={closeMenu}
              />
              <ListItem
                to="/pricing"
                text="Pricing"
                isMobile={true}
                onItemClick={closeMenu}
              />
              <ListItem
                to="/blog"
                text="Blog"
                isMobile={true}
                onItemClick={closeMenu}
              />
              <ListItem
                to="/contact"
                text="Contact"
                isMobile={true}
                onItemClick={closeMenu}
              />
            </ul>

            <div className="pt-6 mt-4 border-t border-white/15">
              <Link to="/contact" onClick={closeMenu} className="block w-full">
                <Button
                  classname="w-full justify-center text-center bg-transparent py-3! px-5.75! hover:bg-secondary hover:border-white border-white hover:text-white text-white rounded-lg"
                  text="Let's talk"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
