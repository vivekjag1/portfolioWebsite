import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About(){

  const experiences = [
    {
      id: 1,
      title: "Student - Worcester Polytechnic Institute",
      location: "Worcester, Massachusetts",
      description: "Bachelors of Science in Computer Science, Minor in ECE",
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
      <section>
        <div className=" mt-20 grid grid-cols-2 overflow-hidden">
          <div className="flex flex-col  items-center justify-center  h-full col-span-1 ">
            <p className="font-semibold  text-lg ml-10">
              I'm currently pursuing a bachelor's of science in Computer Science at Worcester Polytechnic Institute, with a concentration in systems development and a minor
              in Electrical and Computer Engineering (ECE). In addition to being a student, I serve as a teaching assistant in the Computer Science department at WPI. In this role, I assist both professors and students in
              navigating teaching and learning in a seven-week term. My primary responsibilities include holding student office hours, providing feedback on student programming assignments, and guiding students through the CS curriculum at WPI.
            </p>
          </div>
          <div className="items-center justify-center flex col-span-1">
            Another vivek photo here? Wpi Logo? idk yet
          </div>
        </div>
      </section>
      <div className = "mt-10 flex flex-row justify-center ">
        <h1 className = "font-bold text-5xl  font-mono ">
          Experience
        </h1>

      </div>

        <VerticalTimeline className = "">
          {
            experiences.map(exp => {
              return(
                <VerticalTimelineElement
                  key = {exp.id}
                  date = {exp.date}
                  icon={exp.icon}
                  contentStyle = {{ background: 'lightgray', color: '#333' }}
                  contentArrowStyle={{ borderRight: '7px solid  black' }}
                  iconStyle={{ background: 'black', color: 'white' }}
                  className = " rounded-lg  p-4  mx-4"
                  >
                  <h3 className = "font-bold text-xl">{exp.title}</h3>
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
