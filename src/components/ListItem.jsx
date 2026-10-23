import { FaAngleDown } from "react-icons/fa6";

const ListItem = ({text,classname,type}) => {
  return (
      <li className={`text-base text-offwhite font-medium font-inter inline-block ${classname}`}>{text} 
      {
        type && <FaAngleDown className='inline-block ml-.5'/>
      }
      
      </li>
  )
}

export default ListItem