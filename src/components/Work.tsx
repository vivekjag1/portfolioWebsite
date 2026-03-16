import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";


const experiences = [
    {
      id: 1,
      title: "Student - Worcester Polytechnic Institute",
      location: "Worcester, Massachusetts",
      description: "Bachelor and Master of Science in Computer Science.",
      date: "August 2022 - May 2026 (Bachelor's), August 2025 - May 2027 (Masters)",
      icon: <SchoolIcon/>,
    },
    {
      id: 2,
      title: "Software Engineering Intern - Waters Corporation",
      location: "Milford, Massachusetts",
      description: "Developed a Retrieval Augmented Generation (RAG) AI chatbot to enhance the customer support experience for Waters customers.",
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

  ]; 

export default function WorkExperience() {
  return (
    <section className="bg-[#184B40] text-white py-16 px-5">

      <div className="flex flex-col items-center space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row items-start md:items-center bg-[#1f6b5a] rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-5xl"
          >
            {/* Icon */}
            <div className="flex-shrink-0 bg-black p-3 rounded-full mb-4 md:mb-0 md:mr-6">
              {exp.icon}
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="font-bold text-xl">{exp.title}</h3>
                <p className="text-gray-300 text-sm mt-1 md:mt-0">{exp.date}</p>
              </div>
              <p className="text-gray-200 mt-2 mb-1">{exp.location}</p>
              <p className="text-white">{exp.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}