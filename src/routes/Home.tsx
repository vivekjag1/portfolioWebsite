import vivekHeadshot from "../assets/vivekHeadshot.png"
function Home(){
  return(
    <>
      <section>
        <div className="w-screen h-screen grid grid-cols-2 overflow-hidden ">
          <div className = "flex flex-col  items-center justify-center  h-full col-span-1 ">
            <h1 className="text-black font-mono font-bold text-8xl">
              Hello,World!
            </h1>
            <br></br>
            <h1 className = "text-black font-semibold text-2xl font-arial text-justify ml-10">
              My name is Vivek Jagadeesh and I am a junior at Worcester Polytechnic Institute (WPI) studying Computer Science and minoring in Electrical and Computer Engineering.  My interests include Software Engineering, Systems Programming, and Cloud Computing. Visit the about page to learn more about me and my interests.
            </h1>
          </div>
          <div className = "flex items-center justify-center  h-full  col-span-1">
            <img src={vivekHeadshot}/>
          </div>
        </div>
      </section>


    </>




    //  <div className="flex flex-row  justify-center items-center mb-4">
    //
    // <h1 className="font-bold md:text-5xl font-mono">Website Under Construction!</h1>
    //  </div>



  )
}
export default Home;
