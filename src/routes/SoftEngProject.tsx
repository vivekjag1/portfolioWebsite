import BWH from "../assets/BWH.png"
import evolution from "../assets/evolutionPathfinding.png"
import finalMapedit from "../assets/finalMapEditPage.png"
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
      <h3 className="mb-5 text-lg ">Technology Stack: Node.JS, TypeScript, React.JS, TailwindCSS, PrismaORM, PostgreSQL, ExpressJS, Auth0, AWS EC2 and RDS</h3>
      <img src={BWH} alt="Software Engineering Team O Final Project"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl"/>
      <div className="hidden md:flex justify-center">
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

      <div className="md:hidden sm:flex">
        <div className="flex justify-center">
          <Stack spacing={2} direction="column" className="items-center mt-5">
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
      </div>


      <h1 className="mb-2 mt-10 text-3xl font-bold font-mono">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 ">
          During the spring semester of the 2023-2024 academic year, I served as an assistant lead software engineer on a team
          of 9 other students as we developed an application for Brigham and Women's hospital as a part
          of WPI CS3733 - Software Engineering with Professor Wilson Wong.
          Our application was developed over the course of five agile sprints, each lasting for one week and concluding
          with a presentation and technology demonstration. While I began the project as a backend developer, I quickly
          became a full-stack developer and made significant contributions to all components of our project.
        </p>
      </div>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-mono">The Technology Stack</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5">
          The application is built on top of NodeJS, and the front end was developed using TypeScript and ReactJS. Over
          the course of the project, we leveraged  ReactJS to design 65 custom components, which allowed to us to take
          advantage of code reuse and give our website a consistent team despite the fact that we had 10 developers
          working on it.
          The application's back end was utilized ExpressJS, PrismaORM, and a PostgreSQL database.
          Our backend was responsible for storing data related to the hospital map, users and service requests.
          Additionally, we utilized Auth0 to provide user authentication, role based access control, API protection, and
          auto-account creation/deletion upon employee creation and deletion by an admin user.

          Finally, we utilized AWS EC2 and RDS to host our application and database in the cloud, and configured AWS EC2
          to work with our custom domain (brighamwomens.com).

          We deployed to AWS following each iteration, and eventually developed a pipeline using docker-hub auto deploy
          with GitHub actions.

          This allowed us to easily deploy our application at the end of each iteration, and store a much larger volume
          of data than we would have been able to had we used a local PostgreSQL server.
        </p>
      </div>
      <img src={evolution} alt="Changes to the pathfinding page"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full mt-5"/>
      <h3 className="text-lg text-gray-400 mt-2"> Evolution of the Pathfinding page between from Iteration 1 to
        Iteration 5</h3>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-mono">My Contributions and Results</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5">
          At the beginning of this project, I worked almost exclusively on the back end of our application.
          Specifically, I developed the PostgreSQL database schemas, Express routes, Map Data Upload and Download via
          .CSV files, and File Validation.
          I really enjoyed working on these features as I took CS3431 - Database Systems the term prior to taking
          Software Engineering, and enjoyed applying the content from Databases to create a comprehensive user
          experience.
          Furthermore, I enjoyed writing these parts of our applications as these features were essential to the
          pathfinding and map edit capabilities of our application, and largely
          remained unchanged in the final application.
          <br></br>
          <br></br>

          Beginning in Iteration 2, I implemented all of our Auth0 user management in the application. This included
          developing a custom higher-order component to restrict access to certain pages to hospital staff, Role Based
          Access Control to grant different permissions to staff and administrators, API Protection, automatic creation
          and deletion of employee accounts upon CSV file upload and employee deletion, and the creation of a profile
          dashboard for users.
          I found that interacting with Auth0's management API to verify account permissions based on roles and to
          control user account information ( privileges, create, delete, change password, etc.), was the most fun Auth0
          related feature to implement over the course of the project it as it allowed us to create an extremely
          personalized and complete user experience.
          Implementing Auth0 also gave me the chance to interact more with the front end of our application, and led me
          to re-write our page routing logic to support authenticated pages.
          <br></br>
          <br></br>
        </p>
      </div>
      <img src={finalMapedit} alt="Final Map Edit Page "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl mt-5"/>
      <h3 className="text-lg text-gray-400 mt-2">One of my most significant contributions to the team was the refactor of the map
        edit page to the above design. </h3>
      <div className="flex flex-row items-center justify-center mt-2">
        <p className="text-lg  text-left md:w-1/2 ml-5">
          In the final iterations of the project, I became a full-stack developer and made significant contributions to
          the front end of our application while still working on the backend of our application.
          Specifically, I developed one of our service request page along with two other developers and contributed to
          the near complete overhaul of the graphical map-edit page.
          I enjoyed developing these parts of the application (particularly the map edit page), as it allowed me to
          truly understand how all parts of our software systems (Front End, Algorithms, and Back end) interacted to
          create a cohesive application.
          <br></br>
          <br></br>
          Reflecting on this experience, I'm very proud of the application our team developed during this course. All
          parts of our Software System are integrated very closely, which enabled us to develop a very professional user
          experience. I'm also very proud of how our team utilized our own version of the agile methodology.
          While we had our ups and downs, we really hit our stride when we added our own closely followed the
          methodology and added a few of our own ideas - such as traditional Kanban coding marathons. This
          led to an agile environment unique to the team, and led to our eventual success.
          <br></br>
          <br></br>
          If I had to change one thing about the process of developing this application, I would have liked our team to
          make
          modifications to the agile methodology earlier on. There is no one-size-fits-all approach to
          agile, and in the end, our team hit its stride only when we developed a version which was unique to us. I
          believe
          that had we implemented these modifications earlier on, it would have greatly helped us create a balanced
          workload
          earlier on,
          and led us to a better team process.
        </p>
      </div>


    </div>


  )
}