import {Link} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
import {ContactModal} from "@/components/ContactModal.tsx";

export default function NavBar(){
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const handleClickX = () => setMobileOpen(!mobileOpen);

  return(
    // 1. Add background color here (e.g., bg-black, bg-gray-900, or a specific color)
    // 2. Ensure z-index is high (z-[999] is fine) and 'sticky' is present.
    // I'm using a placeholder dark color (bg-[#123B32]) to match the darkest part of your gradient.
    <div className=" top-0 z-[999]"> 

      <ContactModal isOpen={contactModalOpen} setOpen={setContactModalOpen}/>
      <div className = "flex flex-row items-center justify-between w-full p-5">
        <a className = "flex items-center" href="/">
          {/* <img src = {shellFull} alt = "shellClipart" className=" mr-2 mt h-8"/> */}
          <div className=" text-2xl text-white font-bold whitespace-nowrap font-arial">Vivek Jagadeesh</div>
        </a>
        <div className = "hidden lg:flex flex-row justify-center items-end">
          <ul className=" inline-flex items-center h-1 text-lg font-bold text-white md:flex gap-6 font-arial">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <div onClick={() => setContactModalOpen(true)} className="cursor-pointer">
              Contact Me
            </div>
          </ul>
        </div>
        <div className = "flex flex-row lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen? <IoMdClose size={30} className=" h-max"/> : <RxHamburgerMenu size = {30} className = " h-max" />}
        </div>
        
        {/* Mobile Menu (unchanged) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen z-50 bg-white transition-all duration-300 ease-in-out transform
            ${mobileOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}
          `}
        >
          <ul className={`${
            mobileOpen ? 'text-white opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-y-full'} transition-transform absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center font-arial text-2xl
          }`}>
            <IoMdClose onClick={handleClickX} size={30} className=" absolute right-5 top-5 h-max"/>
            <Link to="/" onClick={handleClickX}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={handleClickX}>
              <li>About</li>
            </Link>
            <Link to="/projects" onClick={handleClickX}>
              <li>Projects</li>
            </Link>
            <div onClick={() => setContactModalOpen(true)} className="cursor-pointer">
              Contact Me
            </div>
          </ul>
        </div>
        
      </div>
    </div>
  )
}