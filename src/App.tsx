
import '../src/App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Certifications from "./routes/Certifications.tsx";
import NavBar from "../src/components/NavBar.tsx";
import Projects from "./routes/Projects.tsx";
import Footer from "./components/Footer.tsx";
import SoftEngProject from "./routes/SoftEngProject.tsx";
import TACompanionProject from "./routes/TACompanionProject.tsx";
import MLBClassifier from "./routes/MLBClassifier.tsx";



function App(){
  return(
    <div className = "flex flex-col min-h-screen ">
      <NavBar/>
      <div className = "flex-grow">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = 'https://portfolio-website-git-main-vivek-jagadeeshs-projects.vercel.app/about' element = {<About/>}/>
        <Route path = '/certifications' element = {<Certifications/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/BWHCS3733" element = {<SoftEngProject/>}/>
        <Route path = "/taCompanion" element = {<TACompanionProject/>}/>
        <Route path = "/MLBClassifier" element = {<MLBClassifier/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
