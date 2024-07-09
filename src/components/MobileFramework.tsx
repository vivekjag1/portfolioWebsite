interface FrameworkProps{
  imageString:string;
  imageAlt:string;
  description:string;
}


export const MobileFramework = (props:FrameworkProps) => {
  return(
    <div className="flex flex-col items-center mb-2">
      <img src={props.imageString} alt={props.imageAlt} className="w-[7rem] h-full mr-3"/>
      <p className="mt-2 text-center italic">{props.description}</p>

    </div>
  )
}
export default MobileFramework;