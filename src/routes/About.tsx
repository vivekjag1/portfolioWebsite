import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import secondVivekHeadshot from "../assets/Vivek-Headshot-Updated.jpg";
import typescriptLogo from "../assets/TypeScript.svg";
import CLogo from "../assets/CLogo.svg";
import CPPLogo from "../assets/CPP.svg";
import javaLogo from "../assets/Java.svg";
import pythonLogo from "../assets/Python.svg"
import skLearnLogo from "../assets/skLearn.png"
import nextLogo from "../assets/next.svg";
import nodeLogo from "../assets/nodeLogo.png";
import reactLogo from "../assets/react.svg";
import tailwindCSSLogo from "../assets/tailwind.svg";
import graphqlLogo from "../assets/graphqlLogo.png";
import expressLogo from "../assets/express.svg";
import prismaLogo from "../assets/prismaLogo.png";
import oracleLogo from "../assets/oracle.svg";
import postgresLogo from "../assets/postgresqllogo.png";
import mongoLogo from "../assets/mongodbLogo.png";
import awsLogo from "../assets/aws.svg";
import azureLogo from "../assets/azureLogo.png";
import atlasLogo from "../assets/atlas-raw.webp"
import vercelLogo from "../assets/vercelLogo.png"
import dockerLogo from "../assets/docker.svg"
import flaskLogo from "../assets/Flask.svg"
import kerasLogo from "../assets/keras.svg"
import tensorFlow from "../assets/tensorflow.svg"
import dynamoDB from "../assets/aws-dynamodb-svgrepo-com.svg"
import bedrock from "../assets/Arch_Amazon-Bedrock_64.svg"
import apigw from "../assets/Arch_Amazon-API-Gateway_64.svg"; 
import s3 from "../assets/Res_Amazon-Simple-Storage-Service_S3-Standard_48.svg"; 
import lambda from "../assets/Arch_AWS-Lambda_64.svg"; 
import { Separator } from "@/components/ui/separator"
import vivek_headshot from "../../public/Vivek_J_Headshot.jpg"

 import FrameworkComponent from "../components/FrameworkComponent.tsx";
function About(){

  const experiences = [
    {
      id: 1,
      title: "Student - Worcester Polytechnic Institute",
      location: "Worcester, Massachusetts",
      description: "Bachelor of Science in Computer Science.",
      date: "August 2022 - May 2026",
      icon: <SchoolIcon/>,
    },
    {
      id: 2,
      title: " Software Engineering Intern - Waters Corporation",
      location: "Milford, Massachusetts",
      description: "As a Software Engineering Intern for Waters, I developed a Retrieval Augmented Generation (RAG) AI chatbot to enhance the customer support experience for Waters customers.",
      date: "June 2025 - August 2025",
      icon: <WorkIcon/>,
    },

    {
      id:3,
      title:"Student Assistant - Worcester Polytechnic Institute Department of Computer Science",
      location: "Worcester, Massachusetts",
      description: "As a Student Assistant for WPI's department of Computer Science, I serve as an agile coach and guide teams of four students in developing full stack web applications. I also provide feedback on assignments and collaborate with professors to develop course materials.",
      date: "May 2024 - Present",
      icon: <WorkIcon/>
    },
    {
      id:4,
      title: "Legislative Intern - Massachusetts House of Representatives",
      location: "Boston, Massachusetts",
      description: "As a legislative intern for State Representative Adam Scanlon, " +
        "I was responsible for writing legislative memos, policy recommendations, and communicating with constituents.",
      date: "June 2021 - June 2022",
      icon: <WorkIcon/>
    },
    {
      id: 5,
      title: "Field Intern - Dave Cavell for Congress",
      location: "Brookline, Massachusetts",
      description: "As a field intern for Dave Cavell congressional campaign, I was responsible for speaking with members of my community, writing op-eds in support of the candidate, and hosting community events to discuss policies and issues.",
      date: "June 2020 - September 2020",
      icon: <WorkIcon/>,
      textForButton: "Check out my editorial in the Sun Chronicle!"
    }

  ]
  return(
    <div className="flex flex-col mt-20 justify-center items-center mb-4">
      <h1 className="font-bold text-5xl font-arial mb-10">About me</h1>
      
      <div className='flex flex-col lg:flex-row items-center justify-center ml-2 mr-2 '>
        <div className="items-center justify-center flex  col-span-1  mb-5 ">
          <div className='items-center justify-center flex bg-black h-[20rem] w-[20rem] rounded-full'>
            <div className='bg-white h-[19.3rem] max-w-[19.3rem] rounded-full'>
              <img src={vivek_headshot} alt="vivek jagadeesh " className=" rounded-full max-h-[25rem]"/>
            </div>
          </div>
          
        </div>
        <p className=" lg:max-w-[30vw] ml-10 text-black  text-2xl font-arial ">
                I'm currently pursuing a Bachelor of Science in Computer Science at Worcester Polytechnic Institute,
                with a concentration in systems development.
                I'm primarily interested in the intersection between software and hardware, which has led me to focus 
                my education on operating systems, computer networks, and cybersecurity. 
        </p>
      
       
      </div>

      <div className=" flex flex-row justify-center ">
        <h1 className="font-bold text-5xl  font-arial mt-5">
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
                contentStyle={{background: '#E2E8F0', color: '#333'}}
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
        <h1 className="font-bold text-5xl font-arial">Skills</h1>
      </div>


      <div className="flex flex-col items-center text-center">
        <div className=" flex flex-row text-center justify-center">
          <h1 className="font-bold text-3xl font-arial mt-4 mb-4">Programming Languages</h1>
        </div>
        <Separator className="w-full mb-5 bg-black h-[.25rem]"/>
      </div>
      <div className="flex flex-col lg:flex-row  mb-10">
        <FrameworkComponent imageString={typescriptLogo} imageAlt={"TypesScript"} description={"TypeScript"}/>
        <FrameworkComponent imageString={CLogo} imageAlt={"C"} description={"C"}/>
        <FrameworkComponent imageString={CPPLogo} imageAlt={"C++"} description={"C++"}/>
        <FrameworkComponent imageString={javaLogo} imageAlt={"Java"} description={"Java"}/>
        <FrameworkComponent imageString={pythonLogo} imageAlt={"Python"} description={"Python"}/>


      </div>


      <div className="flex flex-col items-center text-center">
        <div className=" flex flex-row text-center justify-center">
          <h1 className="font-bold text-3xl font-arial mt-4 mb-4">Software Frameworks</h1>
        </div>
        <Separator className="w-full mb-5 bg-black h-[.25rem]"/>
      </div>

      <div className="flex flex-col lg:flex-row lg:mb-3 ">
        <FrameworkComponent imageString={nextLogo} imageAlt={"Next.js"} description={"Next.js"}/>
        <FrameworkComponent imageString={nodeLogo} imageAlt={"Node.js"} description={"Node.js"}/>
        <FrameworkComponent imageString={reactLogo} imageAlt={"React.js"} description={"React.js"}/>
        <FrameworkComponent imageString={tailwindCSSLogo} imageAlt={"TailwindCSS"} description={"TailwindCSS"}/>
        <FrameworkComponent imageString={lambda} imageAlt={"AWS Lambda" } description={"AWS Lambda"}/>


      </div>
      <div className="flex flex-col lg:flex-row  mb-10">
        <FrameworkComponent imageString={graphqlLogo} imageAlt={"GraphQL"} description={"GraphQL"}/>
        <FrameworkComponent imageString={flaskLogo} imageAlt={"Flask"} description={"Flask"}/>
        <FrameworkComponent imageString={expressLogo} imageAlt={"GraphQL"} description={"Express.js"}/>
        <FrameworkComponent imageString={prismaLogo} imageAlt={"PrismaORM"} description={"PrismaORM"}/>
        <FrameworkComponent imageString={apigw} imageAlt={"AWS API Gateway"} description={"AWS API Gateway"}/>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className=" flex flex-row text-center justify-center">
          <h1 className="font-bold text-3xl font-arial mt-4 mb-4">Database Management Systems</h1>
        </div>
        <Separator className="w-full mb-5 bg-black h-[.25rem]"/>
      </div>


      <div className="flex flex-col lg:flex-row  mb-10">
        <FrameworkComponent imageString={oracleLogo} imageAlt={"Oracle"} description={"Oracle"}/>
        <FrameworkComponent imageString={postgresLogo} imageAlt={"PostgreSQL"} description={"PostgreSQL"}/>
        <FrameworkComponent imageString={mongoLogo} imageAlt={"MongoDB"} description={"MongoDB"}/>
        <FrameworkComponent imageString={dynamoDB} imageAlt={"DynamoDB"} description={"DynamoDB"}/>
        <FrameworkComponent imageString={s3} imageAlt={"AWS S3"} description={"AWS S3"}/>
      </div>

      <div className="flex flex-col items-center text-center">

        <div className=" flex flex-row text-center justify-center">
          <h1 className="font-bold text-3xl font-arial mt-4 mb-4">Machine & Deep learning </h1>
        </div>
        <Separator className="w-full mb-5 bg-black h-[.25rem]"/>
      </div>


      <div className="flex flex-col lg:flex-row  mb-10">
        <FrameworkComponent imageString={skLearnLogo} imageAlt={"Sci-Kit Learn"} description={"Sci-Kit Learn"}/>
        <FrameworkComponent imageString={kerasLogo} imageAlt={"Keras"} description={"Keras"}/>
        <FrameworkComponent imageString={tensorFlow} imageAlt={"tensorFlow"} description={"TensorFlow"}/>
        <FrameworkComponent imageString={bedrock} imageAlt={"AWS Bedrock"} description={"AWS Bedrock"}/>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className=" flex flex-row text-center justify-center">
          <h1 className="font-bold text-3xl font-arial mt-4 mb-4">Cloud Computing & Containers</h1>
        </div>
        <Separator className="w-full mb-5 bg-black h-[.25rem]"/>
      </div>


      <div className="flex flex-col lg:flex-row  mb-10">
        <FrameworkComponent imageString={awsLogo} imageAlt={"AWS"} description={"AWS"}/>
        <FrameworkComponent imageString={azureLogo} imageAlt={"Microsoft Azure"} description={"Microsoft Azure"}/>
        <FrameworkComponent imageString={atlasLogo} imageAlt={"MongoDB Atlas"} description={"MongoDB Atlas"}/>
        <FrameworkComponent imageString={vercelLogo} imageAlt={"Vercel Cloud"} description={"Vercel Cloud"}/>
        <FrameworkComponent imageString={dockerLogo} imageAlt={"Docker"} description={"Docker"}/>
      </div>


    </div>
  )
}

export default About;
