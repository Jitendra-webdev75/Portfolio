import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contactus/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="main h-[100vh] w-[100vw] bg-gradient-to-b from-[#d1d0d0] via-[#87C6C1] to-[#3C3434]  flex flex-col items-center  gap-7">
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
