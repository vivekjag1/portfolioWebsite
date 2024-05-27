import BWH from "../assets/BWH.png"
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import userManual from "../assets/TeamOUserManual.pdf";
import DownloadIcon from '@mui/icons-material/Download';
export default function SoftEngProject(){
  return(
    <div className=" mt-20 text-center">
      <h1 className="mb-5 text-4xl font-bold font-mono">An application for Brigham and Women's Hospital</h1>
      <h2 className="mb-5 text-lg font-semibold">March 2024 - May 2024</h2>
      <h3 className="mb-5 text-lg ">Skills developed: Agile Methodology, Full stack development,User Authentication,
        Version Control, UI/UX design </h3>
      <img src={BWH} alt="Software Engineering Team O Final Project"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full"/>
      <div className="flex justify-center">
        <Stack spacing={2} direction="row" className="items-center mt-5">
          <Button href="https://github.com/vivekjag1/CS3733TeamO" target="_blank" variant="contained"
                  startIcon={<GitHubIcon/>}
                  sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                  className="mr-4 hover:bg-black"> GitHub Repository</Button>
          <Button variant="contained" className=" text-white mx-auto" href="https://brighamwomens.com" target="_blank"
                  startIcon={<LanguageIcon/>} sx={{
            "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
            width: "14rem",
            bgcolor: 'black'
          }}> Project Website</Button>
          <Button variant="contained" className=" text-white mx-auto" href={userManual} download="SoftEngUserManual"
                  target="_blank" startIcon={<DownloadIcon/>} sx={{
            "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
            width: "14rem",
            bgcolor: 'black'
          }}> User Manual </Button>
        </Stack>
      </div>
      <section className = "hidden md:flex">
        <div className="w-screen grid grid-cols-2 overflow-y-auto">
          <div className="flex flex-col  items-center justify-center  h-full col-span-1 ">
            <p className="text-3xl font-bold font-mono mt-10 "> Project Overview </p>
            <p className="text-lg  ml-20 mr-20 text-left"> During D-Term of the 2023-2024 academic year, I served as an
              assistant lead developer on a team of 9 other computer science student as we developed an application for
              Brigham and Women's hospital in Boston, Massachusetts.
              Our application was developed during five agile sprints, each of which lasted one week. Our application
              utilized TypeScript and React as our front-end framework, with NodeJS, PrismaORM, ExpressJS, and
              PostgresSQL powering the backend, Auth0 for user authentication,and was hosted on AWS EC2 and AWS RDS.
              {/*Key features include the ability to navigate between two points in the hospital, edit the map graphically and with a .CSV file, submit*/}
              {/*service requests, and manage hospital employees.*/}
            </p>
            <p className="text-3xl font-bold font-mono mt-10 "> Key Features </p>
            <ul className="text-black list-disc list-inside text-left ml-20">
              <li>Pathfinding between two locations (both a 3D and 2D view are supported) with Breath First Search,
                Depth First Search, A*, and Dijkstra's algorithm
              </li>
              <li>Both graphical and textual (.CSV files) editing of the hospital map for Admin users</li>
              <li>Service Request Submission, with employee assignment</li>
              <li>Management of employees and corresponding accounts graphically and with .CSV files</li>
              <li>Role-Based access control to limit the scope of the application depending on the type of user</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center h-full col-span-1">
          <p className="text-3xl font-bold font-mono mt-10 "> The Technology Stack </p>

        </div>
      </section>

      <p className="text-lg  ml-20 mr-20 text-left">
      </p>


    </div>
  )
}