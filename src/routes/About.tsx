import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import secondVivekHeadshot from "../assets/secondVivekHeadshot.png";
import typescriptLogo from "../assets/typescriptLogo.png";
import CLogo from "../assets/CLogo.png";
import CPPLogo from "../assets/CPPLogo.png";
import javaLogo from "../assets/javaLogo.png";
import SQLLogo from "../assets/SQLLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import asmLogo from "../assets/assemblyLanguage.png";
import nextLogo from "../assets/nextLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindCSSLogo from "../assets/tailwindLogo.png";
import graphqlLogo from "../assets/graphqlLogo.png";
import expressLogo from "../assets/expressLogo.png";
import prismaLogo from "../assets/prismaLogo.png";
import oracleLogo from "../assets/oracleLogo.png";
import postgresLogo from "../assets/postgresqllogo.png";
import mongoLogo from "../assets/mongodbLogo.png";
import awsLogo from "../assets/awsLogo.png";
import azureLogo from "../assets/azureLogo.png";
import atlasLogo from "../assets/atlas-raw.webp"
import vercelLogo from "../assets/vercelLogo.png"
import dockerLogo from "../assets/dockerLogo.png"
import FrameworkComponent from "../components/FrameworkComponent.tsx";
import MobileFramework from "../components/MobileFramework.tsx";
function About(){

  const experiences = [
    {
      id: 1,
      title: "Student - Worcester Polytechnic Institute",
      location: "Worcester, Massachusetts",
      description: "Bachelor of Science in Computer Science, Minor in Electrical and Computer Engineering. Member of campus ACM Chapter",
      date: "August 2022 - Present",
      icon: <SchoolIcon/>,
    },
    {
      id:2,
      title:"Student Assistant - Worcester Polytechnic Institute Department of Computer Science",
      location: "Worcester, Massachusetts",
      description: "Student Teaching Assistant in the Computer Science Department. Responsible for guiding students through coursework, WPI CS curriculum, and grading assignments. Currently assisting in teaching CS 3013- Operating Systems",
      date: "May 2024 - Present",
      icon: <WorkIcon/>
    },
    {
      id:3,
      title: "Legislative Intern - Massachusetts House of Representatives",
      location: "Boston, Massachusetts",
      description: "As a legislative intern for State Representative Adam Scanlon, I was responsible for writing legislative memos, policy recommendations, and communicating with constituents through a weekly newsletter",
      date: "June 2021 - June 2022",
      icon: <WorkIcon/>
    },
    {
      id: 4,
      title: "Field Intern - Dave Cavell for Congress",
      location: "Brookline, Massachusetts",
      description: "As a field intern for Dave Cavell congressional campaign, I was responsible for speaking with members of my community and advocating for the candidate.",
      date: "June 2020 - September 2020",
      icon: <WorkIcon/>,
      textForButton: "Check out my editorial in the Sun Chronicle!"
    }

  ]
  return(
    <div className="flex flex-col  mt-20 justify-center items-center mb-4">
      <h1 className="font-bold text-5xl  font-mono">About me</h1>
      <section className="hidden md:flex">
        <div className=" mt-20 grid grid-cols-2 overflow-hidden">
          <div className="flex flex-col  items-center justify-center  h-full col-span-1 ">
            <p className="font-semibold  text-lg ml-10">
              I'm currently pursuing a Bachelor of Science in Computer Science at Worcester Polytechnic Institute,
              with a concentration in systems development and a minor in Electrical and Computer Engineering (ECE).
              In addition to being a student, I am a teaching assistant in the Computer Science department at WPI.
              In this role, I assist both professors and students in creating a meaningful and substantive learning
              experience for everyone.
              My primary responsibilities include holding student office hours, providing feedback on student
              programming assignments, guiding students through the Computer Science
              curriculum, and working with professors to deliver the course content in the most effective manner
              possible.
            </p>
          </div>
          <div className="items-center justify-center flex col-span-1">
            <img src={secondVivekHeadshot} alt="vivek jagadeesh " className=""/>

          </div>
        </div>
      </section>
      <section className="flex md:hidden">
        <div className="flex flex-col sm:flex-row w-screen">
          <div className="w-full h-auto grid grid-row-2 py-10 sm:py-0">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <img src={secondVivekHeadshot} alt="vivek jagadeesh "/>

                <div className="w-full h-auto flex flex-col items-center justify-center   sm:ml-5">
                  <h1
                    className="text-black font-semibold text-center text-xl sm:text-xl font-arial   overflow-x-hidden">
                    I'm currently pursuing a Bachelor of Science in Computer Science at Worcester Polytechnic Institute,
                    with a concentration in systems development and a minor in Electrical and Computer Engineering
                    (ECE).
                    In addition to being a student, I am a teaching assistant in the Computer Science department at WPI.
                    In this role, I assist both professors and students in creating a meaningful and substantive
                    learning experience for everyone.
                    My primary responsibilities include holding student office hours, providing feedback on student
                    programming assignments, guiding students through the Computer Science
                    curriculum, and working with professors to deliver the course content in the most effective manner
                    possible.
                  </h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className=" flex flex-row justify-center ">
        <h1 className="font-bold text-5xl  font-mono ">
          Experience
        </h1>
      </div>
      <VerticalTimeline className="text-black">
        {
          experiences.map(exp => {
            return (
              <VerticalTimelineElement
                key={exp.id}
                date={exp.date}
                icon={exp.icon}
                contentStyle={{background: 'lightgray', color: '#333'}}
                contentArrowStyle={{borderRight: '7px solid  black'}}
                iconStyle={{background: 'black', color: 'white'}}
                className=" rounded-xl  p-4  mx-4"
              >
                <h3 className="font-bold text-xl">{exp.title}</h3>
                <h4 className="font-semibold text-l">{exp.location}</h4>
                <p>{exp.description}</p>

              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
      <div className=" flex flex-row justify-center">
        <h1 className="font-bold text-5xl font-mono">Skills</h1>
      </div>
      <div className=" flex flex-row justify-center">
        <h1 className="font-bold text-3xl font-mono mt-4 mb-4">Programming Languages</h1>
      </div>
      <div className="hidden sm:flex md:flex">
        <div className="flex flex-row space-x-4 mb-10">
          <FrameworkComponent imageString={typescriptLogo} imageAlt={"TypessScript"} description={"TypeScript"}/>
          <FrameworkComponent imageString={CLogo} imageAlt={"C"} description={"C"}/>
          <FrameworkComponent imageString={CPPLogo} imageAlt={"C++"} description={"C++"}/>
          <FrameworkComponent imageString={javaLogo} imageAlt={"Java"} description={"Java"}/>
          <FrameworkComponent imageString={pythonLogo} imageAlt={"Python"} description={"Python"}/>
          <FrameworkComponent imageString={asmLogo} imageAlt={"Assembly Language x86-64"}
                              description={"Assembly Language x86-64"}/>
          <div className="flex flex-col items-center">
            <img src={SQLLogo} alt={"SQL"} className="h-[11rem] mr-5"/>
            <p className="mt-2 text-center italic">{"SQL (Oracle & PostgreSQL)"}</p>
          </div>
        </div>
      </div>

      <div className="md:hidden sm:flex flex-col space-x-4 mb-10">
        <MobileFramework imageString={typescriptLogo} imageAlt={"TypeScript"} description={"TypeScript"}/>
        <MobileFramework imageString={CLogo} imageAlt={"C"} description={"C"}/>
        <MobileFramework imageString={CPPLogo} imageAlt={"C++"} description={"C++"}/>
        <MobileFramework imageString={javaLogo} imageAlt={"Java"} description={"Java"}/>
        <MobileFramework imageString={pythonLogo} imageAlt={"Python"} description={"Python"}/>
        <MobileFramework imageString={asmLogo} imageAlt={"Assembly Language x86-64"}
                         description={"Assembly Language x86-64"}/>
        <div className="flex flex-col items-center">
          <img src={SQLLogo} alt={"SQL"} className="h-[11rem] mr-5"/>
          <p className="mt-2 text-center italic">{"SQL (Oracle & PostgreSQL)"}</p>
        </div>
      </div>

      <div className=" flex flex-row justify-center">
        <h1 className="font-bold text-3xl font-mono mt-4 mb-4">Software Frameworks</h1>
      </div>
      <div className="hidden sm:flex md:flex">
        <div className="flex flex-row space-x-4 mb-10">
          <FrameworkComponent imageString={nextLogo} imageAlt={"Next.js"} description={"Next.js"}/>
          <FrameworkComponent imageString={nodeLogo} imageAlt={"Node.js"} description={"Node.js"}/>
          <FrameworkComponent imageString={reactLogo} imageAlt={"React.js"} description={"React.js"}/>
          <FrameworkComponent imageString={tailwindCSSLogo} imageAlt={"TailwindCSS"} description={"TailwindCSS"}/>
          <FrameworkComponent imageString={graphqlLogo} imageAlt={"GraphQL"} description={"GraphQL"}/>
          <FrameworkComponent imageString={expressLogo} imageAlt={"GraphQL"} description={"Express.js"}/>
          <FrameworkComponent imageString={prismaLogo} imageAlt={"PrismaORM"} description={"PrismaORM"}/>

        </div>
      </div>
      <div className="md:hidden sm:flex flex-col space-x-4 mb-10">
        <div className=" flex flex-col justify-center">
          <h1 className="font-bold text-3xl text-center font-mono mt-4 mb-4">Software Frameworks</h1>
        </div>
        <div className="flex flex-col space-x-4 mb-10">
          <MobileFramework imageString={nextLogo} imageAlt={"Next.js"} description={"Next.js"}/>
          <MobileFramework imageString={nodeLogo} imageAlt={"Node.js"} description={"Node.js"}/>
          <MobileFramework imageString={reactLogo} imageAlt={"React.js"} description={"React.js"}/>
          <MobileFramework imageString={tailwindCSSLogo} imageAlt={"TailwindCSS"} description={"TailwindCSS"}/>
          <MobileFramework imageString={graphqlLogo} imageAlt={"GraphQL"} description={"GraphQL"}/>
          <MobileFramework imageString={expressLogo} imageAlt={"GraphQL"} description={"Express.js"}/>
          <MobileFramework imageString={prismaLogo} imageAlt={"PrismaORM"} description={"PrismaORM"}/>
        </div>
      </div>


      <div className=" flex flex-row justify-center">
        <h1 className="font-bold text-3xl font-mono mt-4 text-center mb-4">Database Management Systems</h1>
      </div>
      <div className="hidden sm:flex md:flex">
        <div className="flex flex-row space-x-4 mb-10">
          <FrameworkComponent imageString={oracleLogo} imageAlt={"Oracle"} description={"Oracle"}/>
          <FrameworkComponent imageString={postgresLogo} imageAlt={"PostgreSQL"} description={"PostgreSQL"}/>
          <FrameworkComponent imageString={mongoLogo} imageAlt={"Mongo DB"} description={"Mongo DB"}/>
        </div>
      </div>


      <div className="md:hidden sm:flex flex-col space-x-4 mb-10">
        <div className="flex flex-col space-x-4 mb-10">
          <MobileFramework imageString={oracleLogo} imageAlt={"Oracle"} description={"Oracle"}/>
          <MobileFramework imageString={postgresLogo} imageAlt={"PostgreSQL"} description={"PostgreSQL"}/>
          <MobileFramework imageString={mongoLogo} imageAlt={"Mongo DB"} description={"Mongo DB"}/>
        </div>
      </div>


      <div className=" flex flex-row text-center justify-center">
        <h1 className="font-bold text-3xl font-mono mt-4 mb-4">Cloud Computing & Containers</h1>
      </div>
      <div className="hidden sm:flex md:flex">
        <div className="flex flex-row space-x-4 mb-10">
          <FrameworkComponent imageString={awsLogo} imageAlt={"AWS"} description={"AWS EC2 & RDS"}/>
          <FrameworkComponent imageString={azureLogo} imageAlt={"Microsoft Azure"} description={"Microsoft Azure"}/>
          <FrameworkComponent imageString={atlasLogo} imageAlt={"Mongo DB Atlas"} description={"Mongo DB Atlas"}/>
          <FrameworkComponent imageString={vercelLogo} imageAlt={"Vercel Cloud"} description={"Vercel Cloud"}/>
          <FrameworkComponent imageString={dockerLogo} imageAlt={"Docker"} description={"Docker"}/>
        </div>
      </div>

      <div className="md:hidden sm:flex flex-col space-x-4 mb-10">
        <div className="flex flex-col space-x-4 mb-10">
          <MobileFramework imageString={awsLogo} imageAlt={"AWS"} description={"AWS EC2 & RDS"}/>
          <MobileFramework imageString={azureLogo} imageAlt={"Microsoft Azure"} description={"Microsoft Azure"}/>
          <MobileFramework imageString={atlasLogo} imageAlt={"Mongo DB Atlas"} description={"Mongo DB Atlas"}/>
          <MobileFramework imageString={vercelLogo} imageAlt={"Vercel Cloud"} description={"Vercel Cloud"}/>
          <MobileFramework imageString={dockerLogo} imageAlt={"Docker"} description={"Docker"}/>
        </div>
      </div>
    </div>
  )
}

export default About;
