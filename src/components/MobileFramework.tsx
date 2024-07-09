interface FrameworkProps{
  imageString:string;
  imageAlt:string;
  description:string;
}


export const MobileFramework = (props:FrameworkProps) => {
  return(
    <div className="flex flex-col items-center mb-2">
      <img src={props.imageString} alt={props.imageAlt} className="w-full h-full mr-5"/>
      <p className="mt-2 text-center italic">{props.description}</p>

    </div>
  )
}
export default MobileFramework;