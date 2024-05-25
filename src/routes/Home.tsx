import vivekHeadshot from "../assets/vivekHeadshot.png"
import {TypeAnimation} from "react-type-animation";

function Home(){
  return(
    <>
      <section className = "hidden md:flex ">
        <div className="w-screen h-screen grid grid-cols-2 overflow-hidden ">
          <div className = "flex flex-col  items-center justify-center  h-full col-span-1 ">
            <TypeAnimation className="text-black font-mono font-bold md:text-6xl lg:text-6xl cursor-hidden" sequence={["Hello, World!"]}
            />

            {/*<h1 className="text-black font-mono font-bold md:text-6xl lg:text-6xl">*/}
            {/*  Hello,World!*/}
            {/*</h1>*/}
            <br></br>
            <h1 className = "text-black font-semibold text-2xl font-arial  ml-10">
              My name is Vivek Jagadeesh and I am a junior at Worcester Polytechnic Institute (WPI) majoring in Computer Science and minoring in Electrical and Computer Engineering.  My interests include Software Engineering, Systems Programming, and Cloud Computing. Visit the about page to learn more about me and my interests.
            </h1>
          </div>
          <div className = "flex items-center justify-center  h-full  col-span-1">
            <img src={vivekHeadshot}/>
          </div>
        </div>
      </section>
      <section className="flex md:hidden">
      <div className = "flex flex-col sm:flex-row w-full">
        <div className="w-full h-auto grid grid-row-2 py-10 sm:py-0">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <img src={vivekHeadshot} alt="vivek jagadeesh "/>
              <TypeAnimation
                className="text-black text-center font-mono font-bold  text-4xl md:text-6xl lg:text-8xl mt-2 " sequence={["Hello, World!"]}/>
              <div className="w-full h-auto flex flex-col items-center justify-center   sm:ml-5">
                <h1
                  className="text-black font-semibold text-center text-xl sm:text-xl font-arial   overflow-x-hidden">
                  My name is Vivek Jagadeesh and I am a junior at Worcester Polytechnic Institute (WPI) majoring in
                  Computer Science and minoring in Electrical and Computer Engineering. My interests include Software
                  Engineering, Systems Programming, and Cloud Computing. Visit the about page to learn more about me and
                  my interests.
                </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>


    </>

  )
}

export default Home;
