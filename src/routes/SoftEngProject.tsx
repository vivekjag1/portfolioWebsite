import BWH from "../assets/BWH.png"
// import evolution from "../assets/evolutionPathfinding.png"
import oldPathfinding from "../assets/oldPathfinding.webp";
import newPathfinding from "../assets/newPathfinding.png";
import finalMapedit from "../assets/finalMapEditPage.png"
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import userManual from "../assets/TeamOUserManual.pdf";
import DownloadIcon from '@mui/icons-material/Download';
import FrameworkComponent from "../components/FrameworkComponent.tsx";
import typescriptLogo from "../assets/TypeScript.svg";
import reactLogo from "../assets/react.svg";
import tailwindCSSLogo from "../assets/tailwind.svg";
import expressLogo from "../assets/express.svg";
import postgresLogo from "../assets/postgresqllogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import prismaLogo from "../assets/prismaLogo.png";
import aws from "../assets/aws.svg";
export default function SoftEngProject(){
  return(
    <div className=" mt-20 text-center">
      <h1 className="mb-5 text-4xl font-bold font-arial">An application for Brigham and Women's Hospital</h1>
      <h2 className="mb-5 text-lg font-semibold font-arial ">March 2024 - May 2024</h2>
      <h3 className="mb-5 text-lg italic font-arial "> Agile Methodology, Full stack development, User Authentication,
        Version Control, UI/UX design </h3>
      <h3 className="mb-5 text-lg italic font-arial ">Node.js, TypeScript, React.js, TailwindCSS, Express.js, PrismaORM, PostgreSQL,
        Auth0, AWS EC2 and RDS</h3>
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


      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5 ">
          During D-Term  of the 2023-2024 academic year, I served as an assistant lead software engineer on
          a team of 9 other students as we developed an application for Brigham and Women's Hospital as a part
          of WPI CS 3733 - Software Engineering with Professor Wilson Wong.
          Our application was developed over the course of five agile sprints, each lasting for one week and concluding
          with a presentation and technology demonstration. Initially, I was responsible for developing the back-end of our application (REST APIs, PostgreSQL schema) but quickly transitioned to contribute to all parts
          of the application. The final application allows users to navigate around the hospital, edit the hospital map (admins. only), submit service requests, and manage hospital employees.
        </p>
      </div>
      <h1 className="mt-10 text-3xl font-bold font-arial mb-5">The Technology Stack</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:mb-3 ">
          <FrameworkComponent imageString={nodeLogo} imageAlt={"nodejs"} description={"Node.js"}/>
          <FrameworkComponent imageString={typescriptLogo} imageAlt={"TypesScript"} description={"TypeScript"}/>
          <FrameworkComponent imageString={reactLogo} imageAlt={"react.js"} description={"react.js"}/>
          <FrameworkComponent imageString={tailwindCSSLogo} imageAlt={"tailwindcss"} description={"TailwindCSS"}/>

        </div>
      <div className="flex flex-col items-center justify-center lg:flex-row  mb-10">
        <FrameworkComponent imageString={expressLogo} imageAlt={"ExpressJS"} description={"Express.JS"}/>
        <FrameworkComponent imageString={prismaLogo} imageAlt={"PrismaORM"}
                            description={"PrismaORM"}/>
        <FrameworkComponent imageString={postgresLogo} imageAlt={"PostgreSQL"}
                            description={"PostgreSQL"}/>
        <FrameworkComponent imageString={aws} imageAlt={"AWS"}
                            description={"AWS EC2 & RDS"}/>
        </div>


      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          Our application was built using Node.js and Vite as our JavaScript frameworks. Furthermore, we utilized TypeScript rather than JavaScript for the purposes of ensuring type-safety throughout the application.

          The user experience of the application was built using React.js.


          Over the course of the project, we leveraged React.js to design 65 custom components, which allowed us to take
          advantage of code reuse and gave our website a consistent theme even though we had a team of 10 students.


          The application's back-end was developed using ExpressJS, PrismaORM, and a PostgreSQL database.
          The express.js REST APIs were responsible for providing database CRUD operations, while the database itself stored information regarding the hospital map, users, and service requests.

          Throughout the application, we utilized Auth0 to provide user authentication, role-based access control, API protection, and auto-account creation and deletion upon employee creation and deletion by an administrator.


          Finally, our application utilized AWS EC2 and RDS to host our application in the cloud, and utilized Cloudflare DNS for our custom domain.

          We deployed to AWS following each iteration and eventually developed a pipeline using docker-hub auto-deploy
          with GitHub actions.

          This allowed us to easily deploy our application at the end of each iteration, and test deployment between
          iterations.
        </p>
      </div>
      <div className=" sm:hidden md:flex items-center justify-center ">
        <img src={oldPathfinding} alt="Changes to the pathfinding page"
             className="w-3/4  max-w-[35rem] max-h-full mt-5 mr-10 ml-10 shadow-2xl"/>
        <img src={newPathfinding} alt="Changes to the pathfinding page"
             className="w-3/4  max-w-[35rem] max-h-full mt-5 ml-10 shadow-2xl"/>
      </div>
      {/*<div className="lg:hidden sm:flex flex-col items-center mb-2">*/}
      {/*  <img src={oldPathfinding} alt="Changes to the pathfinding page"*/}
      {/*       className="w-3/4  max-w-[35rem] max-h-full mt-5 mr-10 ml-10 shadow-2xl"/>*/}
      {/*  <img src={newPathfinding} alt="Changes to the pathfinding page"*/}
      {/*       className="w-3/4  max-w-[35rem] max-h-full mt-5 ml-10 shadow-2xl"/>*/}
      {/*</div>*/}


      <figcaption className="text-lg text-gray-400  italic  mt-2"> The evolution of the application pathfinding page
        from iteration 1 to iteration 5
      </figcaption>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">My Contributions and Results</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">


          At the beginning of this project, I worked almost exclusively on the back end of our application.
          Specifically, I developed the PostgreSQL database schemas, Express APIs, Map Data Upload and Download via
          .CSV files, and File Validation.



          I enjoyed working on these features as I took CS3431 - Database Systems the term before taking
          Software Engineering, and enjoyed applying the content that I had learned in Databases to create a
          comprehensive user
          experience for our application.


          <br></br>
          <br></br>

          Beginning in Iteration 2, I was responsible for implementing all of the Auth0 related features in our
          application. This included
          developing a custom higher-order component to restrict access to certain pages to hospital staff, Role Based
          Access Control to grant different permissions to staff and administrators, API Protection, automatic creation
          and deletion of employee accounts upon CSV file upload and employee deletion, and the creation of a profile
          dashboard for users.

          I found that interacting with Auth0's management API to verify account permissions based on roles and to
          control user account information (privileges, create, delete, change password, etc.), was the most fun
          Auth0-related feature to implement over the course of the project as it allowed us to create an extremely
          personalized and complete user experience.
          Implementing Auth0 also gave me the chance to interact more with the front end of our application, and led me
          to re-write our page routing logic to support authenticated pages.
          <br></br>
          <br></br>
        </p>
      </div>
      <img src={finalMapedit} alt="Final Map Edit Page "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl mt-5"/>
      <figcaption className="text-lg text-gray-400 mt-2 italic">One of my most significant contributions to the team was the
        refactoring of the map
        edit page to the above design. </figcaption>
      <div className="flex flex-row items-center justify-center mt-2">
        <p className="text-lg  text-left md:w-1/2 ml-5 mr-5">
          In the final iterations of the project, I became a full-stack developer and made significant contributions to
          the front end of our application while still working on the back end of the application.
          Specifically, I developed one of our service request pages and contributed to
          the near-complete overhaul of the graphical map-edit page.
          I enjoyed developing these parts of the application (particularly the map edit page), as it allowed me to
          truly understand how all parts of our software systems  interact to
          create a cohesive application.

          <br></br>
          <br></br>

          The most challenging part of this experience was coordinating with a team of ten people.
          Finding time to schedule our daily scrum meetings meetings and social events was very difficult due to everybody's obligations outside of class.
          Furthermore, I also found it challenging to establish a standard for the code produced by our team. Our group had very different backgrounds, and it was challenging to ensure that
          students were able to pick up work from others.


          We were able to use consistent agile scrum meetings, frequent communication, and code reviews to overcome
          these challenges, and ended up with a product that reflected the
          various strengths of the developers on our team.

          <br></br>
          <br></br>

          Reflecting on this experience, I'm very proud of the application our team developed during this course.
          All parts of our software system are integrated very closely, which enabled us to develop a very professional
          user
          experience. I'm also very proud of how our team utilized our own version of the agile methodology.
          While we had our ups and downs, we really hit our stride when we made modifications to the agile methodology -
          such as the use of traditional Kanban coding marathons. This
          led to an agile environment unique to the team and led to our eventual success.
          <br></br>
          <br></br>
          If I had to change one thing about the process of developing this application, I would have liked our team to
          make
          modifications to the agile methodology earlier in the term . There is no one-size-fits-all approach to
          agile, and in the end, our team hit its stride only when we developed a version of the agile methodology that
          was unique to us. I
          believe
          that had we implemented these modifications earlier on, it would have greatly increased our productivity and
          helped us create a balanced
          workload.
        </p>
      </div>


    </div>


  )
}