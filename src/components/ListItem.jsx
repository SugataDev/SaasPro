import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";

const DEFAULT_DROPDOWNS = {
  Home: [
    { label: "Home SaaS", to: "/" },
    { label: "Home Business", to: "/" },
    { label: "Home Startup", to: "/" },
  ],
  Pages: [
    { label: "Products", to: "/products" },
    { label: "Pricing", to: "/pricing" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ],
};

const ListItem = ({
  text,
  to = "/",
  classname = "",
  type = false,
  dropdownItems,
  isMobile = false,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const items = dropdownItems || (type && DEFAULT_DROPDOWNS[text]) || [];

  // Close dropdown on click outside for desktop
  useEffect(() => {
    if (isMobile) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  if (!type || items.length === 0) {
    return (
      <li className={`text-base text-offwhite font-medium font-inter ${isMobile ? "w-full" : "inline-block"} ${classname}`}>
        <NavLink
          to={to}
          onClick={(e) => {
            if (onItemClick) onItemClick(e);
          }}
          className={({ isActive }) =>
            `transition duration-200 block py-1.5 ${
              isMobile
                ? `text-lg py-2.5 px-3 rounded-lg ${
                    isActive
                      ? "bg-white/20 text-white font-semibold"
                      : "hover:bg-white/10 hover:text-white/80"
                  }`
                : `${
                    isActive
                      ? "text-white font-semibold underline underline-offset-4 decoration-secondary decoration-2"
                      : "hover:text-white/80"
                  }`
            }`
          }
        >
          {text}
        </NavLink>
      </li>
    );
  }

  // Dropdown item (Desktop or Mobile)
  if (isMobile) {
    return (
      <li className={`w-full font-inter ${classname}`}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between text-lg text-offwhite font-medium py-2.5 px-3 rounded-lg hover:bg-white/10 transition text-left cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{text}</span>
          <FaAngleDown
            className={`transition-transform duration-300 text-sm ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <ul className="pl-4 pr-2 py-1.5 space-y-1.5 border-l-2 border-white/20 ml-3 mt-1 animate-fadeIn">
            {items.map((subItem, idx) => (
              <li key={idx}>
                <Link
                  to={subItem.to || subItem.href || "/"}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (onItemClick) onItemClick(e);
                  }}
                  className="block py-1.5 px-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition duration-150"
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Desktop dropdown
  return (
    <li
      ref={dropdownRef}
      className={`relative group inline-block text-base text-offwhite font-medium font-inter ${classname}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 hover:text-white/80 transition duration-200 cursor-pointer py-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{text}</span>
        <FaAngleDown
          className={`inline-block ml-0.5 text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop Dropdown Panel */}
      <div
        className={`absolute top-full left-0 mt-2 w-48 bg-[#0a463e] border border-white/15 rounded-xl shadow-2xl py-2 z-50 transition-all duration-200 origin-top ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {items.map((subItem, idx) => (
          <Link
            key={idx}
            to={subItem.to || subItem.href || "/"}
            onClick={(e) => {
              setIsOpen(false);
              if (onItemClick) onItemClick(e);
            }}
            className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/15 transition duration-150"
          >
            {subItem.label}
          </Link>
        ))}
      </div>
    </li>
  );
};

export default ListItem;
