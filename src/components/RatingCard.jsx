import SubHeading from './SubHeading'
import Image from './Image'

const RatingCard = ({image,title,des}) => {
  return (
    <div className="flex gap-x-4 sm:gap-x-5 items-center">
      <div className="w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center shrink-0">
        <Image src={image} className="w-full h-full object-contain" alt={title}/>
      </div>
      <div className="min-w-0">
        <h2 className="text-2xl sm:text-[30px] leading-tight text-secondary font-bold font-inter">{title}</h2>
        <SubHeading className="text-[#495E6C]! text-xs sm:text-sm font-normal pt-1" text={des}/>
      </div>
    </div>
  )
}

export default RatingCard;
