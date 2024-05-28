import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import secondVivekHeadshot from "../assets/secondVivekHeadshot.png";

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
              In this role, I assist both professors and students in creating a meaningful and substantive learning experience for everyone.
              My primary responsibilities include holding student office hours, providing feedback on student programming assignments, guiding students through the Computer Science
              curriculum, and working with professors to deliver the course content in the most effective manner possible.
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
                    with a concentration in systems development and a minor in Electrical and Computer Engineering (ECE).
                    In addition to being a student, I am a teaching assistant in the Computer Science department at WPI.
                    In this role, I assist both professors and students in creating a meaningful and substantive learning experience for everyone.
                    My primary responsibilities include holding student office hours, providing feedback on student programming assignments, guiding students through the Computer Science
                    curriculum, and working with professors to deliver the course content in the most effective manner possible.
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
    </div>
  )
}

export default About;
