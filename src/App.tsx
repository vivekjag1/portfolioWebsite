import '../src/App.css';
import NavBar from "../src/components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import { Outlet } from "react-router-dom"; // Import Outlet to render child routes

function App() {
  return (
    <div className=" bg-[linear-gradient(135deg,_#123B32,_#1E5B4F)] flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex  justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
