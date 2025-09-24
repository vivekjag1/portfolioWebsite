import ProjectCard from "../components/ProjectCard.tsx";
import BWH from "../assets/BWH.png"
import taCompanionHero from "../assets/taCompanionHero.png"
import MLBHero from "../assets/MLBHero.png"
import bounce from "../assets/bounce-image-full.png"

function Projects(){
  return(
    <div className = "flex flex-col h-full w-full items-center ">
    <div className="flex flex-row mb-5 ">
      <h1 className="font-bold text-5xl font-arial">Projects</h1>
    </div>
      <div className="flex flex-col md:flex-row items-center justify-center mb-2">
        
         <div className="flex flex-row justify-center md:px-5 md:mr-5 mb-5">
          <ProjectCard projectTitle={"Secure Memory Allocator for Linux Kernel"} projectImage={bounce}
                       projectImageAlt={"Secure Memory Allocator MQP"}
                       projectDescription={"An ARM Memory Tagging Extension (MTE) enabled secure memory allocator, aimed to mitigate temporal memory safety errors"}
                       github={""} page={"/secureMalloc"}/>
        </div>

        <div className="flex flex-row justify-center md:px-5 md:mr-5 mb-5">
          <ProjectCard projectTitle={"An application for Brigham and Women's"} projectImage={BWH}
                       projectImageAlt={"Software Engineering Team O project"}
                       projectDescription={"A Node.JS  application, designed to run on Kiosks at Boston's Brigham and Women's Hospital as part of WPI CS3733 - Software Engineering"}
                       github={"https://github.com/vivekjag1/CS3733TeamO"} page={"/BWHCS3733"}/>
        </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-5">

        <div className="flex flex-row justify-center md:px-5 md:mr-5 mb-5">
          <ProjectCard projectTitle={"TA Companion"} projectImage={taCompanionHero}
                       projectImageAlt={"An Application for Computer Science TAs"}
                       projectDescription={"A Next.js application for Teaching Assistants, designed using React, Typescript, GraphQL, MongoDB, and hosted using Vercel Cloud and MongoDB Atlas"}
                       github={"https://github.com/vivekjag1/portfolioWebsite"} page={"/tacompanion"}/>
        </div>
        <div className="flex flex-row justify-center md:px-5 md:mr-5 mb-5">
          <ProjectCard projectTitle={"MLB Classifier"} projectImage={MLBHero}
                       projectImageAlt={"A machine learning application for classifying MLB pitches"}
                       projectDescription={"A machine learning application for classifying MLB pitches developed using Next.JS Python Flask, and hosted on AWS EC2 & RDS"}
                       github={"https://github.com/vivekjag1/MLBStatClassifier"} page={"/MLBClassifier"}/>
        </div>
      </div>

    </div>

  )
}

export default Projects;