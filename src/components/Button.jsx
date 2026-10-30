const Button = ({text, children, classname = "", onClick, type = "button"}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-secondary text-sm sm:text-base font-inter font-medium py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-12.5 text-offwhite rounded-md border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 cursor-pointer ${classname}`}
    >
      {text || children}
    </button>
  );
};

export default Button;
