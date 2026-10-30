const SubHeading = ({text,className = ""}) => {
  return (
    <p className={`text-sm sm:text-base text-offwhite font-normal font-inter ${className}`}>{text}</p>
  )
}

export default SubHeading