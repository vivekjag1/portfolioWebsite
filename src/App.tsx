
import '../src/App.css'
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Certifications from "./routes/Certifications.tsx";
import NavBar from "../src/components/NavBar.tsx";
import Projects from "./routes/Projects.tsx";
import Footer from "./components/Footer.tsx";


function App(){
  const location = useLocation();
  const goingHome = location.pathname === '/';
  return(
    <div className = "flex flex-col min-h-screen ">
      <NavBar/>
      <div className = "flex-grow">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/certifications' element = {<Certifications/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
      </Routes>
      </div>
      {goingHome && <Footer fixed={true}/> }
      {!goingHome && <Footer fixed={false}/> }
    </div>
  )
}

export default App
