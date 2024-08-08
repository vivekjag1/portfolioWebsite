interface FrameworkProps{
  imageString:string;
  imageAlt:string;
  description:string;
}


export const FrameworkComponent = (props:FrameworkProps) => {
  return(
    <div className="flex flex-col items-center">
      <img src={props.imageString} alt={props.imageAlt} className="w-full h-[10rem] "/>
      <p className="mt-2 text-center italic">{props.description}</p>

    </div>
  )
}
export default FrameworkComponent;