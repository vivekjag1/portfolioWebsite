import ProjectCard from "../components/ProjectCard.tsx";
import BWH from "../assets/BWH.png"
import portfolioHeroPage from "../assets/portfolioHero.png"

function Projects(){
  return(
    <>
    <div className="flex flex-row mt-20 justify-center  mb-4">
      <h1 className="font-bold md:text-5xl font-mono">Projects</h1>
    </div>
      <div className = "flex flex-col md:flex-row items-center justify-center mb-5">

    <div className = "flex flex-row justify-center md:px-5 md:mr-5 mb-5">
      <ProjectCard projectTitle={"An application for Brigham and Women's"} projectImage={BWH} projectImageAlt={"Software Engineering Team O project"} projectDescription={"A Node.JS  application, designed to run on Kiosks at Boston's Brigham and Women's Hospital as part of WPI CS3733 - Software Engineering"} github={"https://github.com/vivekjag1/CS3733TeamO"} page={"/BWHCS3733"}/>
    </div>
      {/*<div className="flex flex-row justify-center md:px-5 md:mr-5 mb-5">*/}
      {/*  <ProjectCard projectTitle = {"Programming Pearls"} projectImage = {programmingPearls} projectImageAlt={"Programming Pearls by John Bentley"} projectDescription={"A collection of Algorithms from John Bentley's Programming Pearls over Winter Break 2024."} github={"https://github.com/vivekjag1/ProgrammingPearls"} page={"/programmingPearls"}/>*/}
      {/*</div>*/}
      <div className = "flex flex-row justify-center md:px-5 md:mr-5 mb-5">
        <ProjectCard projectTitle = {"Portfolio Website"} projectImage = {portfolioHeroPage} projectImageAlt={"A portfolio website for Vivek Jagadeesh"} projectDescription={"A portfolio website for Vivek Jagadeesh, designed using React, TypeScript, Vite, TailwindCSS, and hosted with AWS EC2 and Cloudflare DNS"} github={"https://github.com/vivekjag1/portfolioWebsite"} page={"/portfolio"}/>

      </div>
      </div>

    </>

  )
}

export default Projects;
