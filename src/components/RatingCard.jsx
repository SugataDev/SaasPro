import SubHeading from './SubHeading'
import Image from './Image'
import Flex from './Flex'

const RatingCard = ({image,title,des}) => {
  return (
       <Flex className="gap-x-5 items-center">
            <div className="w-15 h-15 flex items-center justify-center shrink-0">
                <Image src={image} className="w-full h-full object-contain" alt={title}/>
            </div>
            <div>
                <h2 className="text-[30px] leading-tight text-secondary font-bold font-inter">{title}</h2>
                <SubHeading className="text-[#495E6C]! text-sm font-normal pt-1" text={des}/>
            </div>
        </Flex>
  )
}

export default RatingCard
