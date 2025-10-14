import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import DownloadIcon from '@mui/icons-material/Download';
import Button from "@mui/material/Button";
import resume from "../assets/Jagadeesh_V_Resume_Oct_2025.pdf";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
interface ModalProps{
  isOpen:boolean;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export const ContactModal = (props:ModalProps) => {
  return(
    <div className="flex flex-row items-center font-black font-arial rounded-2xl">

      <Dialog open={props.isOpen} onOpenChange={() => props.setOpen(!props.isOpen)}>
        <div className="hidden">
          <DialogTitle>Contact Vivek</DialogTitle>
        </div>

        <DialogContent>
          <h1 className="text-3xl font-arial text-center">Lets Connect!</h1>
          <DialogHeader className="flex items-center  font-arial text-3xl font-bold">
            <DialogDescription className ="text-lg text-left text-black font-arial font-semibold">
              I'm always interested in speaking to fellow developers, engineers, and students about my interests! Use the links below to contact me:
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center">
            <div className="mt-5">
              <Button variant="contained"
                      startIcon={<EmailIcon/>}
                      href="mailto:vivekjag1@gmail.com"
                      target="_blank"
                      sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "15rem", bgcolor: 'black'}}
                      className=" hover:bg-black ">Email Me!</Button>
            </div>
            <div className = "mt-5">
              <Button variant="contained"
                      href={resume}
                      download="Vivek-Jagadeesh-Resume-2025"
                      target="_blank"
                      startIcon={<DownloadIcon/>}
                      sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "15rem", bgcolor: 'black'}}
                      className=" hover:bg-black"> Current C.V. </Button>
            </div>

            <div className="mt-5">
              <Button variant="contained"
                      startIcon={<LinkedInIcon/>}
                      href = "https://www.linkedin.com/in/vivek-jagadeesh/"
                      target="_blank"
                      sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "15rem", bgcolor: 'black'}}
                      className=" hover:bg-black "> Linkedin Profile </Button>
            </div>
            <div className="mt-5">
              <Button variant="contained"
                      startIcon={<GitHubIcon/>}
                      href="https://github.com/vivekjag1" target="_blank"
                      sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "15rem", bgcolor: 'black'}}
                      className=" hover:bg-black "> GitHub Profile </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}