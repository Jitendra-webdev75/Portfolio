import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contactus/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="main min-h-screen w-full  bg-[#060010] backdrop-blur-sm flex flex-col items-center  gap-7 overflow-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
