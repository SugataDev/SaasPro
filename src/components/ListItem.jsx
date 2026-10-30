import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

const DEFAULT_DROPDOWNS = {
  Home: [
    { label: "Home SaaS", href: "#" },
    { label: "Home Business", href: "#" },
    { label: "Home Startup", href: "#" },
  ],
  Pages: [
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Pricing Plans", href: "#" },
    { label: "Client Reviews", href: "#" },
  ],
};

const ListItem = ({
  text,
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
        <a
          href="#"
          onClick={(e) => {
            if (onItemClick) onItemClick(e);
          }}
          className={`hover:text-white/80 transition duration-200 block py-1.5 ${isMobile ? "text-lg py-2.5 px-3 rounded-lg hover:bg-white/10" : ""}`}
        >
          {text}
        </a>
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
                <a
                  href={subItem.href || "#"}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (onItemClick) onItemClick(e);
                  }}
                  className="block py-1.5 px-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition duration-150"
                >
                  {subItem.label}
                </a>
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
          <a
            key={idx}
            href={subItem.href || "#"}
            onClick={(e) => {
              setIsOpen(false);
              if (onItemClick) onItemClick(e);
            }}
            className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/15 transition duration-150"
          >
            {subItem.label}
          </a>
        ))}
      </div>
    </li>
  );
};

export default ListItem;
