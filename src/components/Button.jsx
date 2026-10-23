
const Button = ({text,classname}) => {
  return (
    <button className={`bg-secondary text-base font-inter font-medium py-5 px-12.5 text-offwhite rounded-md border border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 ${classname}`}>{text}</button>
  )
}

export default Button