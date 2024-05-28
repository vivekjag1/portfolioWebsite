
import '../src/App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Certifications from "./routes/Certifications.tsx";
import NavBar from "../src/components/NavBar.tsx";
import Projects from "./routes/Projects.tsx";
import Footer from "./components/Footer.tsx";
import SoftEngProject from "./routes/SoftEngProject.tsx";
import ProgrammingPearls from "./routes/ProgrammingPearls.tsx";
import PortfolioProject from "./routes/PortfolioProject.tsx";


function App(){
  return(
    <div className = "flex flex-col min-h-screen ">
      <NavBar/>
      <div className = "flex-grow">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/certifications' element = {<Certifications/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/BWHCS3733" element = {<SoftEngProject/>}/>
        <Route path = "/programmingPearls" element = {<ProgrammingPearls/>}/>
        <Route path = "/portfolio" element = {<PortfolioProject/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
