interface FrameworkProps{
  imageString:string;
  imageAlt:string;
  description:string;
}


export const FrameworkComponent = (props:FrameworkProps) => {
  return(

    <div style={{background: '#E2E8F0'}} className="flex flex-col items-center justify-center shadow-xl  rounded-2xl h-[12rem] w-[12rem] lg:mr-3 mb-3">
      <div style={{background: '#E2E8F0'}} className="flex flex-col  items-center justify-center  rounded-2xl h-[11.75rem] w-[11.75rem] ">
        <div className="items-center justify-center">
          <img src={props.imageString} alt={props.imageAlt} className="w-[8rem] h-[8rem] justify-center "/>
          <p className="mt-2 text-center italic">{props.description}</p>
        </div>

      </div>
    </div>

  )
}
export default FrameworkComponent;