import {Link} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
export default function NavBar(){
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleClickX = () => setMobileOpen(!mobileOpen);

  return(
    <nav className = "flex justify-between p-5 bg-white	 items-center border-b">
      <h1 className={'text-4xl text-black font-bold'}>Vivek Jagadeesh</h1>
      <ul className = " text-black hidden md:flex gap-6">
        <Link to = "/"><li>Home</li></Link>
        <Link to = "/about"><li>About</li></Link>
        <Link to = "/certifications"><li>Certifications</li></Link>
      </ul>
      <div className="md:hidden z-10" onClick = {handleClickX}>
        {mobileOpen? <IoMdClose size = {25}/> : <RxHamburgerMenu size = {25}/>}
      </div>
      <ul className={`${
        mobileOpen? 'text-black opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full'} transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl
      }`}>
        <Link to = "/" onClick={handleClickX}><li>Home</li></Link>
        <Link to = "/about" onClick={handleClickX}><li>About</li></Link>
        <Link to = "/certifications" onClick={handleClickX}><li>Certifications</li></Link>
      </ul>

    </nav>

  )
}