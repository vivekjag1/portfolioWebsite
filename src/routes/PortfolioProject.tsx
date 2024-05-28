import portfolioHeroPage from "../assets/portfolioHero.png"
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {Stack} from "@mui/material";
import vivekAboutSection from "../assets/vivekAboutSection.png";
import mobileUI from "../assets/mobileUI.png"


export default function PortfolioProject(){
  return(
    <div className="mt-20 text-center">
      <h1 className="mb-5 text-4xl font-bold font-mono">Personal Portfolio Website</h1>
      <h2 className="mb-5 text-lg font-semibold">May 2024</h2>
      <h3 className="mb-5 text-lg ">Skills developed: UI/UX design, CI/CD pipelines, Front End development, Cloud
        Computing, Page Routing, Component Design </h3>
      <h3 className="mb-5 text-lg ">Technology Stack: Node.JS, TypeScript, React.JS, TailwindCSS, Docker,AWS EC2,
        Cloudflare
        DNS</h3>
      <img src={portfolioHeroPage} alt="Portfolio Hero Page"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl"/>
      <div className="hidden md:flex justify-center">
        <Stack spacing={2} direction="row" className="items-center mt-5">
          <Button href="https://github.com/vivekjag1/portfolioWebsite" target="_blank" variant="contained"
                  startIcon={<GitHubIcon/>}
                  sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                  className="mr-4 hover:bg-black"> GitHub Repository</Button>
          <Button variant="contained" className=" text-white mx-auto" href="https://vivekjagadeesh.com" target="_blank"
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
            <Button href="https://github.com/vivekjag1/portfolioWebsite" target="_blank" variant="contained"
                    startIcon={<GitHubIcon/>}
                    sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                    className="mr-4 hover:bg-black"> GitHub Repository</Button>
            <Button variant="contained" className=" text-white mx-auto" href="https://vivekjagadeesh.com"
                    target="_blank"
                    startIcon={<LanguageIcon/>} sx={{
              "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
              width: "14rem",
              bgcolor: 'black'
            }}> Project Website</Button>
          </Stack>
        </div>
      </div>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-mono">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 ">
          Following the conclusion of my sophomore year at WPI, I wanted a way to showcase my projects, work experience,
          and goals in a way which also demonstrated the skills in web-development which I gained during
          my previous project (An Application for Brigham and Women's Hospital).
          Additionally, I wanted to use this project as a way to experiment with cloud computing alongside the AWS
          certifications that I was working towards.
          Each of these goals led me to develop my own portfolio website using TypeScript, React, Vite, TailwindCSS,
          Docker, AWS EC2 and Cloudflare DNS.
          Through this project, I was able to hone my existing skills in front-end design while learning how to use AWS,
          Docker, Custom Domains, and more.
        </p>
      </div>
      <img src={mobileUI} alt="Responsive mobile UI"
           className="w-3/4 mx-auto max-w-[15rem] max-h-full shadow-2xl mt-5"/>
      <h3 className="text-lg text-gray-400 mt-2"> The text, images, NavBar, and Footer are all responsive, and change to
        ensure the website looks attractive on all devices, regardless of size. </h3>


      <h1 className="mb-2 mt-10 text-3xl font-bold font-mono">The Technology Stack</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5">
          This portfolio website was built using ReactJS and Vite as the front-end framework. While designing the
          technology stack for this project,
          I debated using static HTML instead, however settled on React due to its integration with TypeScript, which
          allowed me to develop the website in a more programmatic environment.
          Additionally, I used TailwindCss for inline styling while developing this website. This was an easy choice, as
          I found the ability to style elements quickly greatly decreased my development time and made it easier to
          implement the desired user experience.
          The last major component of the technology stack relates to how the website is hosted.
          While there are many web-hosting services, I chose to use AWS as I was pursuing AWS certifications at the
          time, and wanted a way to experiment with cloud computing while developing this project.
          Furthermore, using AWS also gave me the opportunity to learn how to use Docker, as the application was build
          locally, containerized, and then run on EC2 using Docker.
          Over the course of the project, I wrote a Dockerfile, and created a CI/CD pipeline which allowed me to safely
          deploy the application by simply running 2 shell scripts.
          Finally, while AWS EC2 does provide an IPV4 url, I wanted to ensure this project felt unique to me, so I set
          up a custom domain with Cloudflare to further personalize the application. This also allowed me to obtain an
          SSL certificate and DDOS protection for the website.
        </p>
      </div>
      <img src={vivekAboutSection} alt="The about section of the website with a graphical resume"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl mt-5"/>
      <h3 className="text-lg text-gray-400 mt-2">One of the most interesting pages to design was the about page, which
        contains a graphical resume</h3>
      <h1 className="mb-2 mt-10 text-3xl font-bold font-mono">Results</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5">
          Reflecting on this project, I feel significantly more confident in my skills as a full stack developer than
          when I started.
          While I came into this project with a good amount of front-end skills, the opportunity to work on a React
          project individually allowed me to learn more about web design, responsive design, and UI/UX.
          <br></br>
          <br></br>
          In addition to using this project to further my skills as a developer, I learned a lot about cloud computing,
          Docker,configuring a custom domain, and deploying on AWS.
          <br></br>
          <br></br>
          Over the course of this project, I developed new ways to interact with each of these, and developed a refined
          process for building and deploying my application to vivekjagadeesh.com through AWS EC2.
          <br></br>
          <br></br>
          The most challenging part of designing this website was ensuring that it scaled properly on mobile devices, including tablets and phones.
          In order to ensure that the website was responsive, I utilized TailwindCss classes to create column-based layouts on larger devices, and row-based layout on mobile devices, which ensured that all of the website content fit on each screen size.

          Additionally, I found AWS deployment to be quite challenging while I was still getting my footing with Docker and AWS EC2.
          I spent the first few days of this project experimenting with the React+Vite starter code, and getting it deploy to AWS and my custom domain.
          During this portion of the project, I was able to understand how various AWS services (including Route 53, and Elastic IP) would be crucial in the development of my website.
          Furthermore I was able to develop a pipeline for AWS deployment which allowed me to quickly deploy my project to AWS during the development of this project.

        </p>
      </div>


    </div>

  )
}