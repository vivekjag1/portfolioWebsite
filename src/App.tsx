
import '../src/App.css'
import { Route,  Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Certifications from "./routes/Certifications.tsx";
import NavBar from "../src/components/NavBar.tsx";
import Projects from "./routes/Projects.tsx";


function App(){
  return(
    <div className = "App bg-white w-full h-screen">
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/certifications' element = {<Certifications/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
