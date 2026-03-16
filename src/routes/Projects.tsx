import ProjectCard from "../components/ProjectCard.tsx";
import BWH from "../assets/BWH.png"
import taCompanionHero from "../assets/taCompanionHero.png"
import MLBHero from "../assets/MLBHero.png"
import bounce from "../assets/bounce-image-full.png"

// Projects.tsx
function Projects() {
  return (
    <div className="bg-[#184B40] min-h-screen w-full flex flex-col items-center text-white py-12">
      <div className="mb-12">
        <h1 className="font-bold text-5xl font-arial">Projects</h1>
      </div>

      {/* Grid container ensures uniform row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 max-w-6xl w-full">
        <ProjectCard 
          title={"Secure Memory Allocator for Linux Kernel"} 
          image={bounce}
          description={"An ARM Memory Tagging Extension (MTE) enabled secure memory allocator, aimed to mitigate temporal memory safety errors"}
          github={""}
          tags={["Kernel Development", "Security", "C", "ARM MTE"]}
        />
        <ProjectCard 
          title={"An application for Brigham and Women's"} 
          image={BWH}
          description={"A Node.JS application, designed to run on Kiosks at Boston's Brigham and Women's Hospital as part of WPI CS3733 - Software Engineering"}
          github={"https://github.com/vivekjag1/CS3733TeamO"} 
          tags={["Full Stack Development", "AWS", "React.js"]}
        />
        <ProjectCard 
          title={"TA Companion"} 
          image={taCompanionHero}
          description={"A Next.js application for Teaching Assistants, designed using React, Typescript, GraphQL, MongoDB, and hosted using Vercel Cloud and MongoDB Atlas"}
          github={"https://github.com/vivekjag1/portfolioWebsite"} 
          tags={["Full Stack Development", "Vercel", "Next.js"]}

        />
        <ProjectCard 
          title={"MLB Classifier"} 
          image={MLBHero}
          description={"A machine learning application for classifying MLB pitches developed using Next.JS Python Flask, and hosted on AWS EC2 & RDS"}
          github={"https://github.com/vivekjag1/MLBStatClassifier"} 
          tags={["Machine Learning", "AWS", "Docker"]}

        />
      </div>
    </div>
  );
}

export default Projects;