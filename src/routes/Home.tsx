import vivekHeadshot from "../assets/Vivek-Picture-One.png"
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import {Stack} from "@mui/material";
function Home(){
  return(
    <div className=" bg-[#184B40] flex flex-col lg:flex-row overflow-hidden items-center justify-center text-left">
      <div className = "flex items-center justify-center  h-fit w-11/12  mb-5 lg:hidden">
          <img src={vivekHeadshot} alt = "Vivek Jagadeesh" className="  max-h-[75vh] mt-5  overflow-hidden"/>
        </div>
        <div className = "flex flex-col justify-center  h-max md:max-w-[50vw] ml-5 mr-5  ">
                    <h1 className="text-white font-poppins font-medium text-4xl md:text-5xl lg:text-3xl cursor-hidden">Hi, my name is</h1>
                    <h1 className="text-[oklch(81%_0.145_181.9)] font-poppins font-medium text-4xl md:text-5xl lg:text-5xl mt-3">
                      Vivek Jagadeesh
                    </h1>
                    <br></br>
                    <h1 className = "text-white justify-center items-center  lg:w-[40vw] font-semibold text-2xl font-arial  ">
                      I'm a senior at Worcester Polytechnic Institute (WPI) majoring in Computer Science with a concentration in Cybersecurity.
                      My interests include Kernel Development, System Hardening, and Secure Operating Systems.
                      Use the links below to learn more about me and my interests!
                    </h1>
                    <div className="flex ">
                    <Stack spacing={2} direction="row" className="items-center mt-7">
                      <Link to="/about">
                        <Button
                          variant="contained"
                          startIcon={<PersonIcon />}
                          sx={{
                            "&.MuiButtonBase-root:hover": { backgroundColor: "black" },
                            width: "10rem",
                            bgcolor: "black",
                            color: "white"  
                          }}
                          className="mr-4 hover:bg-white"
                        >
                          About Me
                      </Button>
                      </Link>
                      <Link to="/projects">
                        <Button variant="contained"
                          startIcon={<PersonIcon />}
                          sx={{
                            "&.MuiButtonBase-root:hover": { backgroundColor: "black" },
                            width: "10rem",
                            bgcolor: "black",
                            color: "white"  
                          }}
                          className="mr-4 hover:bg-white"
                        >Projects</Button>
                      </Link>
                    </Stack>
                    </div>
        </div>
         <div className="hidden lg:flex items-center justify-center h-fit w-11/12">
  <img src={vivekHeadshot} alt="Vivek Jagadeesh" className="max-h-[75vh] mt-5 overflow-hidden"/>
</div>
                 
    </div>
  )
}

export default Home;