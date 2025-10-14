import vivekHeadshot from "../assets/Vivek-Picture-One.jpg"
import {TypeAnimation} from "react-type-animation";
import Button from '@mui/material/Button';
import MonitorIcon from '@mui/icons-material/Monitor';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import {Stack} from "@mui/material";

function Home(){
  return(
    
    <div className="flex flex-col lg:flex-row overflow-hidden items-center justify-center">
       <div className = "flex items-center justify-center  h-fit w-11/12  ">
          <img src={vivekHeadshot} alt = "Vivek Jagadeesh" className="  max-h-[75vh] mt-5  overflow-hidden"/>
        </div>
        <div className = "flex flex-col  items-center justify-center  h-max md:max-w-[50vw]   ">
                    <TypeAnimation className="text-black font-mono font-bold text-4xl md:text-5xl lg:text-6xl cursor-hidden" sequence={["Hello, World!"]}
                    />
                    <br></br>
                    <h1 className = "text-black font-semibold text-2xl font-arial  ml-5 mr-5">
                      I'm a senior at Worcester Polytechnic Institute (WPI) majoring in Computer Science with a concentration in Cybersecurity.
                      My interests include Kernel Development, System Hardening, and Distributed Systems.
                      Use the links below to learn more about me and my interests!
                    </h1>
                    <div className="flex justify-center">
                    <Stack spacing={2} direction="row" className="items-center mt-7">
                      <Link to="/about">
                        <Button  variant="contained"
                                startIcon={<PersonIcon/>}
                                sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "10rem", bgcolor: 'black'}}
                                className="mr-4 hover:bg-black"> About Me </Button>
                      </Link>
                      <Link to="/projects">
                        <Button variant="contained" className=" text-white mx-auto"
                                startIcon={<MonitorIcon/>} sx={{
                          "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
                          width: "10rem",
                          bgcolor: 'black'
                        }}>Projects</Button>
                      </Link>
                    </Stack>
                    </div>
        </div>
                 
    </div>








 



  )
}

export default Home;