import BWH from "../assets/BWH.png"
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
export default function SoftEngProject(){
  return(
    <div className=" mt-20 text-center">
      <h1 className="mb-5 text-4xl font-bold font-mono">An application for Brigham and Women's Hospital</h1>
      <h2 className = "mb-5 text-lg font-semibold">CS3733 Software Engineering D24</h2>
      <img src = {BWH} alt = "Software Engineering Team O Final Project" className="w-3/4 mx-auto max-w-[70rem] max-h-full"/>
      <div className = "flex justify-center">

      <Stack spacing = {2} direction = "row" className = "items-center mt-5">
        <Button href = "https://github.com/vivekjag1/CS3733TeamO" variant = "contained" startIcon={<GitHubIcon/>} sx={{ "&.MuiButtonBase-root:hover": { backgroundColor: "black" },width:"14rem", bgcolor:'black'}} className="mr-4 hover:bg-black"> GitHub Repository</Button>
        <Button variant = "contained" className = " text-white mx-auto"  href = "https://brighamwomens.com" startIcon = {<LanguageIcon/>} sx={{ "&.MuiButtonBase-root:hover": { backgroundColor: "black" },width:"14rem", bgcolor:'black'}}> Project Website</Button>
      </Stack>
      </div>




      <p className = "text-5xl font-bold font-mono  "> Project Overview </p>
      <p className = "text-lg font-semibold">From March to May of 2024, I worked in a team of 10 people to develop  </p>
    </div>
  )
}