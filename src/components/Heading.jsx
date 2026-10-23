
const Heading = ({text,className}) => {
  return (
    <h2 className={`text-4xl text-third font-bold font-inter ${className}`}>{text}</h2>
  )
}

export default Heading