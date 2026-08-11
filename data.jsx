export const PROFILE = {
  name: "Vivek Jagadeesh",
  role: "Cybersecurity Graduate Student · Worcester Polytechnic Institute",
  location: "Worcester, MA",
  bio: (
    <>
      I'm a graduate student at <a href="https://wpi.edu">Worcester Polytechnic Institute</a>, studying cybersecurity and researching systems security in WPI's <a href="https://cake.wpi.edu"> Cake Lab</a>. 
      I currently work as a Systems Security Research Intern with <a href="https://www.ll.mit.edu/r-d/cyber-security-and-information-sciences/secure-resilient-systems-and-technology">group 53 at MIT Lincoln Laboratory</a>. 
    </>
  ),
};

export const RESEARCH = [
  { title: "Kernel Security", blurb: "Memory safety, system hardening, and runtime defenses in the Linux kernel." },
  { title: "Compiler-Based Defenses", blurb: "Adding security instrumentation at compile time, particularly in the Linux kernel" },
  { title: "Applied Cryptography", blurb: "Encryption standards, secure communications, and attack hardening" },
  {title: "Hardware-Based defenses", blurb:"Leveraging hardware-based defenses to enforce security primitives at runtime "}

];

export const NEWS = [
  { date: "May 2026", tag: "Experience",    body: <>I'm excited to be starting a cybersecurity research internship at MIT Lincoln Laboratory.</> },
  { date: "May 2026", tag: "Education",    body: <>I graduated from Worcester Polytechnic Institute with a Bachelor of Science in Computer Science with a concentration in cybersecurity. I graduated with high distinction</> },
  { date: "May 2026", tag: "Projects",    body: <> Our Major Qualifying Project (MQP), completed with Charles Engler and Nicholas Golparvar, and advised by Professor Robert J. Walls, has been awarded WPI's Provost's MQP Award.</>},
  
];

export const EXPERIENCE = [
  {
    role: "Cybersecurity Research Intern",
    org: "MIT Lincoln Laboratory",
    where: "Lexington, MA",
    dates: "May 2026 - Present",
    bullets: [
      "Group 05-53: Secure Resilient Systems and Technology.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Waters Corporation",
    where: "Milford, MA",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Led the design and development of a Retrieval Augmented Generation (RAG) chatbot to streamline order support for Waters.com customers.",
      "Utilized Nova Lite for response generation and AWS Bedrock to build an OpenSearch powered knowledge base.",
      "Built a websocket layer to enable real-time communication between the React user frontend and AWS Lambda Functions.",
      "Developed an agent flow that allows customers to re-order previous purchases using natural language through the chatbot interface.",
      "Created a secure token verification system to authenticate users and safeguard sensitive data.",
      "Actively participated in Agile ceremonies and delivered projects updated to senior leadership.",
    ],
  },
  {
    role: "Peer Learning Assistant",
    org: "Worcester Polytechnic Institute",
    where: "Worcester, MA",
    dates: "Aug 2025 – May 2026",
    bullets: [
      "CS 3013 - Operating Systems (C/C++), E Term 2024, A term 2024, A term 2025.",
      "CS 3733 - Software Engineering (JavaScript/Python/Flask), B Term 2024, C Term 2025.",
      "CS 2102 - Object Oriented Design Concepts (Java), B Term 2025."
    ],
  },
];

export const PROJECTS = [
  { name: "Secure Memory Allocator for the Linux Kernel",  year: "2025-Present", desc: "An ARM MTE enabled secure memory allocator that mitigates use-after-free vulnerabilities in the Linux kernel. Designed and implemented prototype in the Linux kernel, running on the Google Pixel 9A.", stack: ["C", "Linux Kernel", "ARM MTE", "Memory Safety", "Kernel Development"]},
  { name: "Smart Grid Security: ANSI PSEM MITM attack simulation",     year: "2025", desc: "A simulation of a Man-in-the-Middle attack against the ANSI Protocol Specification for Electricity Meters (PSEM). Implemented the protocol on Arduino Mega 2560 boards, and performed the MITM attack over UART using a logic analyzer.", stack: ["Arduino", "Networks"], links: [{ label: "github", href: "https://github.com/vivekjag1/Smart-Grid-Security-CS-4404"}]},
  { name: "CS 3733: A web application for Brigham and Women's Hospital", year: "2024", desc: "A Node.JS application, designed to run on Kiosks at Boston's Brigham and Women's Hospital as part of WPI CS3733 - Software Engineering.", stack: ["TypeScript", "AWS", "React.js"], links: [{ label: "github", href: "https://github.com/vivekjag1/BrighamWomens-CS3733" }] },
  { name: "MLB Classifier",    year: "2024", desc: "A machine learning application for classifying MLB pitches developed using Next.JS Python Flask, and hosted on AWS EC2 & RDS.", stack: ["AWS", "Scikit Learn", "Machine Learning"], links: [{ label: "github", href: "https://github.com/vivekjag1/MLBStatClassifier" }] },
];

export const COURSES = [
  { code: "CS 578",  title: "Cryptography & Data Security",            term: "Fall 2025"   },
  { code: "CS 4404",  title: "Networks Security",                      term: "C-term 2025"   },
  { code: "CS 3013", title: "Operating Systems",                       term: "A-term 2023"   },
  { code: "CS 2011",  title: "Machine Organization and Assembly Language",                    term: "D-term 2023" },
  { code: "CS 584",  title: "Design and Analysis of Algorithms",  term: "Fall 2025" },
  { code: "CS 3733",  title: "Software Engineering",              term: "D-term 2024" },

];

export const CONTACT = [
  { lbl: "email",    val: "vivekjag1@gmail.com", href: "mailto:vivekjag1@gmail.com" },
  { lbl: "github",   val: "github.com/vivekjag1",  href: "https://github.com/vivekjag1" },
  { lbl: "linkedin", val: "in/vivek-jagadeesh",  href: "https://www.linkedin.com/in/vivek-jagadeesh/" },
  { lbl: "cv",       val: "resume.pdf",         href: "resume.pdf", download:"resume.pdf" },
];
