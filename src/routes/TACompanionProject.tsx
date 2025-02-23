import taCompanionHero from "../assets/taCompanionHero.png"

import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import FrameworkComponent from "../components/FrameworkComponent.tsx";
import typescriptLogo from "../assets/TypeScript.svg";
import nextLogo from "../assets/next.svg";
import reactLogo from "../assets/react.svg";
import tailwindCSSLogo from "../assets/tailwind.svg";
import graphqlLogo from "../assets/graphqlLogo.png";
import mongoLogo from "../assets/mongodbLogo.png";
import atlasLogo from "../assets/atlas-raw.webp"
import vercelLogo from "../assets/vercelLogo.png"
import kanban from "../assets/kanban.png"



export default function TACompanionProject(){
  return(
    <div className=" mt-20 text-center">
      <h1 className="mb-5 text-4xl font-bold font-arial">TA Companion</h1>
      <h2 className="mb-5 text-lg font-semibold font-arial">May 2024 - July 2024 </h2>
      <h3 className="mb-5 text-lg italic font-arial"> UI/UX design, Full Stack Frameworks, No SQL Databases,
        server/client side rendering, GraphQL APIs
      </h3>
      <h3 className="mb-5 text-lg font-arial italic"> Next.js, TypeScript, React.js, TailwindCSS, GraphQL, Mongoose,
        MongoDB, Auth0, Vercel Cloud, MongoDB Atlas</h3>
      <img src={taCompanionHero} alt="Software Engineering Team O Final Project"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl"/>

      <div className="hidden md:flex justify-center">
        <Stack spacing={2} direction="row" className="items-center mt-5">
          <Button href="https://github.com/vivekjag1/TACompanion" target="_blank" variant="contained"
                  startIcon={<GitHubIcon/>}
                  sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                  className="mr-4 hover:bg-black"> GitHub Repository</Button>
          <Button variant="contained" className=" text-white mx-auto" href="https://tacompanion.com/" target="_blank"
                  startIcon={<LanguageIcon/>} sx={{
            "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
            width: "14rem",
            bgcolor: 'black'
          }}> Project Website</Button>

        </Stack>
      </div>

      <div className="md:hidden sm:flex">
        <div className="flex justify-center">
          <Stack spacing={2} direction="column" className="items-center mt-5">
            <Button href="https://github.com/vivekjag1/TACompanion" target="_blank" variant="contained"
                    startIcon={<GitHubIcon/>}
                    sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                    className="mr-4 hover:bg-black"> GitHub Repository</Button>
            <Button variant="contained" className=" text-white mx-auto" href="https://tacompanion.com/" target="_blank"
                    startIcon={<LanguageIcon/>} sx={{
              "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
              width: "14rem",
              bgcolor: 'black'
            }}> Project Website</Button>
          </Stack>
        </div>
      </div>


      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5 ">
          During the summer of 2024, when I began my role as a Student Teaching Assistant in the Computer Science Department, I
          quickly found that Workday (which WPI uses for recording hours, grades, and dispersing pay)
          was unintuitive and lacked features which would be helpful to student workers. This led me to design TA
          Companion, an application which allows its users to create tasks
          (and tag them by role and course), log hours, and keep track of their degree progress in a single web
          application. Each of these features were directly motivated by my experience as a TA, and reduces the need
          for the use of several applications, unlike Workday.

        </p>
      </div>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">The Technology Stack</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row  mb-10">
          <FrameworkComponent imageString={nextLogo} imageAlt={"nextjs"} description={"Next.js"}/>

          <FrameworkComponent imageString={typescriptLogo} imageAlt={"TypesScript"} description={"TypeScript"}/>
          <FrameworkComponent imageString={reactLogo} imageAlt={"react.js"} description={"react.js"}/>
          <FrameworkComponent imageString={tailwindCSSLogo} imageAlt={"tailwindcss"} description={"TailwindCSS"}/>
          <FrameworkComponent imageString={graphqlLogo} imageAlt={"GraphQL"} description={"GraphQL"}/>
          <FrameworkComponent imageString={mongoLogo} imageAlt={"MongoDB"}
                              description={"MongoDB"}/>

        </div>


      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5 ">
          The first choice that I made in designing the technology stack for this application was using Next.js.
          I opted to use Next.js instead of other JavasScript frameworks (such as Vue.js and Node.js) since
          Next allows developers to specify whether a page is rendered statically, on the client side, or on the server
          side.
          Using the different kinds of page rendering allowed me to make the application perform well without too much
          work.
          Additionally, I chose to use Next.js due to its seamless integration with react, and bundled backend server,
          both of which further simplified development.
          <br/><br/>
          TA Companion's front-end was developed using React.js, TailwindCSS, and TypeScript. I chose to use react for
          this project
          due to my familiarity with the framework, and its position as the
          industry-standard front-end framework for JavaScript web applications.


          Furthermore, I chose to use TailwindCSS
          as opposed to traditional css due to its inline styling capabilities.
          This greatly sped up the process of developing TA Companion, and enabled me to easily create a unique and
          consistent theme for the entire application.

          Finally, I chose to use TypeScript rather than JavaScript for this project to enforce type-safety in all parts
          of my code. This, once again, simplified development as I did not
          have to worry about using the wrong type with an implicit cast, which was especially important when developing
          the calendar component.
          <br/><br/>
          For my backend server, I chose to use Apollo GraphQL rather than a traditional REST API server like Express.JS. I made this choice because GraphQL prevents both over and underfetching.
          When using Express.js, I found that I either needed to
          implement more API endpoints than necessary, or had to conduct heavy
          processing on the results returned by an API because I only need a portion of the return value. With GraphQL,
          I was able to specify the exact resources which I needed in the front-end,
          with no extra-processing or routes. Furthermore, Apollo GraphQL allowed me to take advantage of API results
          caching, further enhancing the performance of TA Companion.
          <br/><br/>
          The last choice I made when designing the technology stack was to use MongoDB rather than a traditional
          relational DBMS like PostgreSQL or Oracle. I found that
          for the features that I would be implementing, a relational database would be overkill (since there would be almost
          0 relations),
          and that MongoDB would be better suited for TA Companion due to its lightweight nature.
          Furthermore, since MongoDB stores JSON objects, I could completely leave off certain fields on a document,
          rather than storing a null value (which is expensive).
          Finally, MongoDB was an easy choice for this project due to its included object wrapper Mongoose. In contrast
          to PrismaORM (which I would have used had I opted for a relational DBMS),
          Mongoose does not create cloud migrations (which makes it easier to deploy the application), and still
          includes complete CRUD functionality.
        </p>
      </div>


      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Cloud Deployment</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row  mb-10">
        <FrameworkComponent imageString={vercelLogo} imageAlt={"vercel platform"} description={"Vercel Cloud"}/>
          <FrameworkComponent imageString={atlasLogo} imageAlt={"MongoDB Atlas"} description={"MongoDB Atlas"}/>


        </div>



      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          Another consideration I had to make while designing the technology stack was cloud deployment. I considered a
          variety of factors when picking a cloud provider,
          such as the inclusion of a CI/CD pipeline, and cost. In the end, I settled on Vercel Cloud for the frontend,
          and MongoDB atlas for the backend.
          <br/><br/>
          I chose to use Vercel due to its included CI/CD pipeline and generous free tier. Vercel allowed me to
          effortlessly lint, test, and deploy my application when I added code to the production branch of my GitHub
          repository. This eliminated the need to containerize my code, or to SSH into a remote sever every time I
          wanted to deploy my application.


          Furthermore, since Vercel automatically lints the application before it is deployed, I knew my application
          would be stable as soon as it was deployed, and that if a deployment failed,
          there would be detailed logging that showed exactly what I needed to fix.

          At the start of the project, I was using Azure web apps, however, the free tier was significantly slower than vercel, which prompted me to switch to a different cloud service provider.


          <br/><br/>
          Similarly, MongoDB Atlas was chosen as a cloud DBMS due to its easy setup and generous free tier. Initially, I
          was using Azure CosmosDB, however, the free tier was significantly less
          flexible when compared to MongoDB Atlas. Additionally, I found Atlas to perform slightly better than the free
          tier of CosmosDB.


        </p>
      </div>
      <img src={kanban} alt="Final Map Edit Page "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl mt-5"/>
      <h3 className="text-lg text-gray-400 italic mt-2">One of the more interesting pages to design was the Kanban to-do page,
        which allows users to create to-do items by course and role, and drag cards between
        columns.
      </h3>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Results</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          When I started this project, I knew that I wanted to become familiar with a new set of frameworks while still
          designing an application which served a purpose in my daily life and could be used by other students.
          Reflecting on the experience, I am happy to report that I added Next.js, GraphQL, and MongoDB to my skills set
          while still developing an application which I am able to use in my role as a Teaching Assistant.
          <br></br>
          <br></br>

          I found that the most challenging part of building TA Companion was the UI design. While I had a general
          vision for the finished product, I went through several versions of each feature's UI
          (including a complete UI overhaul from Material UI to ShadCn UI) until I felt that TA Companion was both visually
          appealing and easy to use.

          Specifically, the Kanban to-do system went through 4 different user interfaces, some using custom components
          and others using pre-made components, before I finally settled on the custom design in the production
          version of TA Companion. Reflecting on this process, I feel more confident in my ability to design user
          interfaces which are both functional and visually appealing.

          <br></br>
          <br></br>
          I particularly enjoyed building the backend of TA Companion. I had never used MongoDB and GraphQL, which
          presented a fun challenge during the course of developing this application.

          I especially enjoyed using these technologies as I am very familiar with their competitors (Express.js, Oracle,
          PostgreSQL), and found that the technology stack used in TA Companion offers a different set of features than these other technologies.
   This will make my future project work simpler as I now understand the
          considerations that go into designing a technology stack.

          <br></br>
          <br></br>

          If I could do it all over again, one change I would make is using official WPI course and degree information.
          Unfortunately, I was unable to get access to the university's workday API, which would have enabled me to tailor the experience a bit more to WPI students.
          However, this can be easily added down the line, and other developers who may wish to use my code can easily add their own data for the tracking sheet/course features.


          <br></br>
          <br></br>
          Reflecting on the experience as a whole, I'm very proud of the application that I produced. I believe that TA Companion fills a need in many student's daily lives,
          and uses a modern technology stack which will be supported in the years to come. All parts of the software (front-end, middleware, back-end) are closely integrated to provide a seamless user experience,
          and reflect my attention to detail over the course of designing TA Companion.



        </p>
      </div>





    </div>


  )
}