import {Link} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
import shellFull from "../../src/assets/shellFull.svg"
export default function NavBar(){
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleClickX = () => setMobileOpen(!mobileOpen);

  return(
    <nav className = " fixed top-0 w-full flex justify-between p-5 bg-white	 items-center items-baseline z-50">
      <div className=" hidden md:flex flex-row items-center mb-3 mt-3 ">
      <Link to = "/" className=" absolute left-5 text-black font-bold inline-block align-middle">
          <div className = "flex items-center ">
            <img src = {shellFull}  alt = "shellClipart" className="  mr-2 mt h-8"/>
            <div className=" text-2xl  text-black font-bold  whitespace-nowrap font-mono">Vivek Jagadeesh</div>
          </div>
        </Link>
        <ul className = " absolute right-5 inline-flex items-center  h-1 text-lg font-bold  text-black  md:flex gap-6  font-mono ">
          <Link to = "/" ><li>Home</li></Link>
          <Link to = "/about" ><li>About</li></Link>
          <Link to = "/projects" ><li>Projects</li></Link>
          <Link to = "/certifications" ><li>Certifications</li></Link>
        </ul>
      </div>
      <div className="md:hidden z-10 flex flex-row items-center" onClick = {handleClickX}>
        <Link to = "/" className=" absolute left-5 text-black font-bold inline-block align-middle">
          <div className = "md:hidden flex flex-row justify-items-end  align-middle ">
            <img src = {shellFull}  alt = "shellClipart" className="  mr-2 mt h-8"/>
            <div className=" text-2xl  text-black font-bold  whitespace-nowrap font-mono">Vivek Jagadeesh</div>
          </div>
        </Link>
        {mobileOpen? <IoMdClose size = {30} className="absolute top-0 right-0 cursor-pointer text-black"/> : <RxHamburgerMenu size = {30} className = "absolute top-0 right-0   h-5 mt-2" />}

      </div>
      <ul className={`${
        mobileOpen? 'text-black opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full'} transition-transform absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center font-mono text-2xl
      }`}>
        <Link to = "/" onClick={handleClickX}><li>Home</li></Link>
        <Link to = "/about" onClick={handleClickX}><li>About</li></Link>
        <Link to = "/projects" onClick={handleClickX}><li>Projects</li></Link>
        <Link to = "/certifications" onClick={handleClickX}><li>Certifications</li></Link>

      </ul>

    </nav>

  )
}
