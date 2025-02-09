import vivekHeadshot from "../assets/Vivek-Picture-One.jpg"
import {TypeAnimation} from "react-type-animation";
import Button from '@mui/material/Button';
import MonitorIcon from '@mui/icons-material/Monitor';
import PersonIcon from '@mui/icons-material/Person';
import {Stack} from "@mui/material";

function Home(){
  return(
    <>
      <section className = "hidden md:flex overflow-hidden">
        <div className="w-screen mt-20 grid grid-cols-2  ">
          <div className = "flex flex-col  items-center justify-center  h-full col-span-1  ">
            <TypeAnimation className="text-black font-mono font-bold md:text-6xl lg:text-6xl cursor-hidden" sequence={["Hello, World!"]}
            />
            <br></br>
            <h1 className = "text-black font-semibold text-2xl font-arial  ml-20">
              I'm a junior at Worcester Polytechnic Institute (WPI) majoring in Computer Science with a minor in Electrical and Computer Engineering.
              My interests include Software Engineering, Embedded Systems, and Cloud Computing. Use the links below to learn more about me and my interests!
            </h1>
            <div className="hidden md:flex justify-center">

            <Stack spacing={2} direction="row" className="items-center mt-7">
              <Button href="about"  variant="contained"
                      startIcon={<PersonIcon/>}
                      sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "10rem", bgcolor: 'black'}}
                      className="mr-4 hover:bg-black"> About Me </Button>
              <Button variant="contained" className=" text-white mx-auto" href="projects"
                      startIcon={<MonitorIcon/>} sx={{
                "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
                width: "10rem",
                bgcolor: 'black'
              }}>Projects</Button>

            </Stack>
            </div>
          </div>
          <div className = "flex items-center justify-center  ml-20  h-fit w-11/12  col-span-1">
            <img src={vivekHeadshot} alt = "Vivek Jagadeesh" className="  max-h-[46rem] mt-5 ml-20 overflow-hidden"/>
          </div>
        </div>
      </section>
      <section className="flex md:hidden">
        <div className = "flex flex-col sm:flex-row w-screen">
          <div className="w-full h-auto grid grid-row-2 py-10 sm:py-0">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <img src={vivekHeadshot} alt="vivek jagadeesh" />
                <TypeAnimation
                  className="text-black text-center font-mono font-bold  text-4xl md:text-6xl lg:text-8xl mt-2 " sequence={["Hello, World!"]}/>
                <div className="w-full h-auto flex flex-col items-center justify-center   sm:ml-5">
                  <h1
                    className="text-xl mt-7 text-left md:w-1/2 ml-5 ">
                    I'm a junior at Worcester Polytechnic Institute (WPI) majoring in Computer Science with a minor in Electrical and Computer Engineering.
                    My interests include Software Engineering, Embedded Systems, and Cloud Computing. Use the links below to learn more about me and my interests!
                  </h1>

                  <div className="md:hidden sm:flex ">
                    <div className="flex justify-center">
                      <Stack spacing={2} direction="column" className="items-center mt-5">
                        <Button href="/about"   variant="contained"
                                startIcon={<PersonIcon/>}
                                sx={{
                                  "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
                                  width: "10rem",
                                  bgcolor: 'black'
                                }}
                                className="mr-4 hover:bg-black"> About Me</Button>
                        <Button variant="contained" className=" text-white mx-auto" href="/projects"

                                startIcon={<MonitorIcon/>} sx={{
                          "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
                          width: "10rem",
                          bgcolor: 'black'
                        }}> Projects</Button>

                      </Stack>
                    </div>
                  </div>
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