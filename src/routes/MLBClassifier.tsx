import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import FrameworkComponent from "../components/FrameworkComponent.tsx";
import typescriptLogo from "../assets/TypeScript.svg";
import nextLogo from "../assets/next.svg";
import reactLogo from "../assets/react.svg";
import tailwindCSSLogo from "../assets/tailwind.svg";
import mlbHero from "../assets/MLBHero.png"
import pythonLogo from "../assets/Python.svg"
import flaskLogo from "../assets/Flask.svg"
import postgresLogo from "../assets/postgresqllogo.png"
import sklearnLogo from "../assets/skLearn.png"
import classifierHome from "../assets/classifierHome.png"
import comparison from "../assets/comparison.png"
import AWSLogo from "../assets/aws.svg"
import dockerLogo from "../assets/dockerIcon.png"

export default function MLBClassifier(){
  return(
    <div className=" mt-20 text-center">
      <h1 className="mb-5 text-4xl text-center font-bold font-arial">MLB Classifier</h1>
      <h2 className="mb-5 text-lg font-semibold">July 2024 - August 2024 </h2>
      <h3 className="mb-5 text-lg italic"> Machine/Deep learning model development, Data Set design, CI/CD
        pipelines, UI/UX design, Cloud Deployment</h3>
      <h3 className="mb-5 text-lg italic"> Next.js, TypeScript, React.js, TailwindCSS, Python, Flask, Sci-Kit
        learn , PostgreSQL, AWS EC2 & RDS</h3>
      <img src={mlbHero} alt="MLB Classifier hero page "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl"/>
      <div className="hidden md:flex justify-center">
        <Stack spacing={2} direction="row" className="items-center mt-5">
          <Button href="https://github.com/vivekjag1/MLBStatClassifier" target="_blank" variant="contained"
                  startIcon={<GitHubIcon/>}
                  sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                  className="mr-4 hover:bg-black"> GitHub Repository</Button>
          <Button variant="contained" className=" text-white mx-auto" href="https://mlbclassifier.com/" target="_blank"
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
            <Button href="https://github.com/vivekjag1/MLBStatClassifier" target="_blank" variant="contained"
                    startIcon={<GitHubIcon/>}
                    sx={{"&.MuiButtonBase-root:hover": {backgroundColor: "black"}, width: "14rem", bgcolor: 'black'}}
                    className="mr-4 hover:bg-black"> GitHub Repository</Button>
            <Button variant="contained" className=" text-white mx-auto" href="https://mlbclassifier.com/"
                    target="_blank"
                    startIcon={<LanguageIcon/>} sx={{
              "&.MuiButtonBase-root:hover": {backgroundColor: "black"},
              width: "14rem",
              bgcolor: 'black'
            }}> Project Website</Button>
          </Stack>
        </div>
      </div>


      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Project Overview</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5 ">

          As a life-long fan of the Boston Red Sox, I have always been interested in the intersection between computer science and professional sports.
          As I began to experiment with machine/deep learning in the summer of 2024, I discovered that one application of computing to professional baseball was the use of machine learning
          to classify MLB pitches by type. This led me to develop MLB Classifier - a machine learning application which classifies MLB pitches by type using StatCast data.

        </p>
      </div>
      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">The Technology Stack</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row mb-3 ">
        <FrameworkComponent imageString={sklearnLogo} imageAlt={"Sci-Kit learn"} description={"Sci-Kit Learn"}/>
          <FrameworkComponent imageString={nextLogo} imageAlt={"nextjs"} description={"Next.js"}/>
          <FrameworkComponent imageString={typescriptLogo} imageAlt={"TypesScript"} description={"TypeScript"}/>
          <FrameworkComponent imageString={reactLogo} imageAlt={"react.js"} description={"React.js"}/>

        </div> <div className="flex flex-col items-center justify-center lg:flex-row  mb-10">
      <FrameworkComponent imageString={tailwindCSSLogo} imageAlt={"tailwindcss"} description={"TailwindCSS"}/>
      <FrameworkComponent imageString={pythonLogo} imageAlt={"Python"} description={"Python"}/>
      <FrameworkComponent imageString={flaskLogo} imageAlt={"Flask"} description={"Flask"}/>
      <FrameworkComponent imageString={postgresLogo} imageAlt={"postgreSQL"} description={"PostgreSQL"}/>


    </div>


      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          When designing the technology stack, I knew that the portions of the project which involved building the
          machine learning model and training the neural network needed to be written in Python.
          However, in my previous project experience, I grew very fond of the advanced rendering capabilities of
          Next.js.
          This led me to design a technology stack which utilized Next.js and TypeScript in the frontend, and Python
          Flask in the backend, enabling me to use a performant frontend framework and machine-learning capable backend
          framework.

          <br/><br/>
          As mentioned earlier, MLB Classifier's frontend was developed using Next.js, TypeScript React and TailwindCSS. 
          Choosing Next.js over
          similar JavaScript frameworks was an easy choice, as its support for client/server side rendering allowed me
          to optimize the performance of the application.
          Similarly, choosing React and TailwindCSS were both easy choices as I have significant experience with each of
          these frameworks, which allowed me to spend less time building the UI and more time on the machine-learning capabilities of the application. 
          Furthermore, using custom components and contexts, I was able to create reusable UI elements and pass global state between components.
          Finally, TailwindCSS allowed me to quickly design a unique, consistent, and attractive UI for MLB Classifier.

          <br/><br/>
          MLB Classifier's backend was designed using Flask. While I debated several Python frameworks for the
          backend, (including Django), I finally decided to use Flask due to its included ORM, lightweight nature, and
          vast library support. This made development and
          deployment significantly easier than if I had used a framework which did not support these features. Over the
          course of developing this project, I found that Flask simplified the development of the PostgreSQL schema and
          REST APIs, and added functionality to backend frameworks that I have used in other projects, like Express and
          Next.JS


          <br/><br/>
          The last choice I made when designing the technology stack was to use PostgreSQL for the database.
          I made this choice because the data in this application (Pitchers and Pitches) formed a natural relationship
          with each other and would not require null values to be stored (had this been the case a database which
          supported JSON objects would have made more sense). 
          Furthermore, PostgreSQL was easy to setup on AWS RDS and on my local machine during development.
        </p>
      </div>
      <img src={classifierHome} alt="Pitch Classifier Page "
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl mt-5"/>
      <h3 className="text-lg text-gray-400 italic mt-2">The defining feature of MLB Classifier is its classification feature,
        which allows users to classify a pitch by type using the Velocity, X-Break, Z-Break, Rise and Tail of a
        pitch</h3>


      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">Cloud Deployment</h1>

        <div className="flex flex-col items-center justify-center lg:flex-row  mb-10">

          <FrameworkComponent imageString={AWSLogo} imageAlt={"AWS"} description={"AWS"}/>
          <FrameworkComponent imageString={dockerLogo} imageAlt={"Docker"} description={"Docker"}/>
        </div>


      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          Another consideration I had to make in the development of this project was cloud deployment.
          While deciding which cloud service provider to use, I weighed cost, ease of deployment, and scalability.
          Each of these considerations led me to choose to deploy my project in 2 Docker Containers (one for the UI and another for the API services) running on AWS EC2, and a PostgreSQL server running on AWS RDS.
          AWS EC2 and RDS both offer generous free tiers, low latency, and were easy enough to deploy to. Furthermore, I used Docker Hub as the container register for this project as it was both free and easy to use.
          Initially, I planned to deploy the project on Google Cloud, but opted to use AWS due to the high costs of GCP and my familiarity with AWS. 
        </p>
      </div>

      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Developing the Data Set</h1>


      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          At the beginning of this project, I did not expect finding a good, publicly available dataset to be as
          challenging as it ended up being.
          However, as I began looking for a data set, I found that much of the available data either did not use
          relevant metrics, was not complete, or was not easily accessible.
          Fortunately, I was able to use Baseball Savant's repository of StatCast data to develop a training data set which
          was easily accessible and comprehensive.


          However, even after I found data from Baseball Savant, I found it difficult to select a group of features
          (metrics) which accurately characterized pitch types. 





          Initially, I developed my first machine learning model using a data set which prioritized spin rate rather
          than pitch movement, which led to an accuracy of 70% rather than the 92% I achieved with the final dataset.
          Eventually, after conducting some research into the matter, I determined that pitch movement would be a much
          better indicator of pitch type than spin rate, and utilized the appropriate data from Baseball Savant to craft
          the final dataset.


        </p>
      </div>
      <h1 className="mb-5 mt-10 text-3xl font-bold font-arial">Developing the Machine Learning Model with Sci-Kit
        Learn</h1>

      <div className="flex flex-col items-center justify-center lg:flex-row  mb-10">

        <FrameworkComponent imageString={sklearnLogo} imageAlt={"Sklearn"} description={"Sci-Kit Learn"}/>
      </div>


      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          The most challenging part of developing MLB Classifier was creating the machine learning model. Initially, I
          started by using a Convoluted Neural Network (CNN) from Keras, however, I soon realized
          that due to the small dimension of the feature vectors, that a traditional Neural Network would perform better
          for this (the CNN performed at only 26% accuracy).

          Once I decided to use a traditional Neural Network, I needed to determine the parameters that would be used
          with Sci-Kit Learn's MLP Classifier.
          I decided to fix the mini-batch size at 50 during training, which allowed for the back-propagation algorithm
          to run as frequently as possible (which meant the weights of the network would be updated frequently) and for training time to be minimized. Another important decision I made in
          the
          design
          of the machine learning model was to use a learning rate of .001 which allowed the model to learn effectivley
          while not falling victim to overfitting. On that note, I used Sci-Kit Learn's early stopping functionality to
          prevent
          over-training (which could prevent the model from learning the general features of the dataset).
          Finally, I chose a network architecture with 3 hidden layers, the first of which had 2000 nodes, the next had
          1000 nodes, and the final layer had 5000 nodes. While experimenting with the classifier, I found that having
          the first and last layer have the largest number of nodes
          greatly increased accuracy as opposed to having a larger middle layer.

        </p>
      </div>

      <img src={comparison} alt="Pitcher comparison page"
           className="w-3/4 mx-auto max-w-[70rem] max-h-full shadow-2xl mt-5"/>
      <h3 className="text-lg text-gray-400 italic mt-2">MLB Classifier uses its data to allow for the easy comparison between
        pitchers and their pitch arsenal, allowing users to compare their favorite pitchers </h3>


      <h1 className="mb-2 mt-10 text-3xl font-bold font-arial">Results</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-left md:w-1/2 ml-5 mr-5">
          When I started this project, I set out to gain an understanding of machine learning, and gain experience
          designing machine learning models with the hope of using machine learning in future applications.
          Reflecting this experience, I feel confident in my ability to develop machine learning models and meaningfully incorperate ML models in web applications using frameworks like Flask and Next.js.
          <br></br>
          <br></br>

          As I mentioned earlier, the most challenging part of building MLB Classifier was designing the Machine
          Learning Model. Prior to this experience, I had never developed with machine learning, and had not had any
          exposure to the subject in my coursework, meaning I had to understand the concept and practical application of
          the subject.

          Furthermore, finding a good dataset and model architecture added to this challenge, as these aspects of the
          model directly influenced its performance.
          While this was a difficult aspect of this project, I found it to be the most interesting.
          Specifically, I thoroughly enjoyed learning the theory behind machine learning (particularly the calculus and
          linear algebra),
          and how that translated to code with Sci-Kit Learn, Keras, and TensorFlow.

          <br></br>
          <br></br>
          Additionally, I found it difficult to develop the application given the non-portable nature of machine
          learning libraries.
          I utilized Docker containers to establish platform independence, but also ran into an issue where my Docker
          auto-deploy pipeline failed to containerize the machine learning model as the file had been commited using
          GitHub Large File System.
          I was able to overcome this issue when I utilized a combination of automatically build containers via my
          Docker CI/CD pipeline and locally built containers to ensure my development and production environments were
          the same.
          <br></br>
          <br></br>

          If I could do it all over again, one change I would make is using pitch-by-pitch stat cast data for the model.
          Baseball Savant was a great data source, however, I was unable to get pitch-by-pitch data
          and instead used averages for each pitch thrown by a player (thus representing every pitch in a player's
          arsenal once in the training set). This did have its advantages, as it eliminated outlier feature vectors
          which may have been caused by fatigue or injury, but may have decreased the true accuracy of the model.
          <br></br>
          <br></br>
          Reflecting on MLB Classifier, I am extremely proud of the product which I produced.  
          
          
          I believe that this is an
          application which can be used by fans to better understand Baseball,
          and the importance of analytics and machine learning in sports. I am also proud of the technology stack which
          I designed, as it represents my understanding of each part of an application, even when they may not directly
          compatible (ex: TypeScript and Python).
          Furthermore, I am truly proud of the seamless user-experience this software provides despite the complicated
          nature of the software system. All portions of the application (Frontend, backend, and machine learning) are
          integrated seamlessly and contribute
          to the professional nature of this application.
          Finally, I'm proud of the fact that I was able to learn the fundamentals of Machine and Deep learning on my own, without any prior coursework or project experience in the subject. 



        </p>
      </div>


    </div>


  )
}