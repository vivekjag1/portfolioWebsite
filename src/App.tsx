
import './App.css'
import { Route,  Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Certifications from "./routes/Certifications.tsx";
import NavBar from "./components/NavBar.tsx";


function App(){
  return(
    <div className = "App bg-white w-full h-screen">
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/certifications' element = {<Certifications/>}/>
      </Routes>
    </div>
  )
}

export default App
