import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contactus/Contact";
import Nav from "./components/Nav";
import "./index.css";
import CursorCircle from "./components/CursorCircle";
import { useState } from "react";
function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="main  w-full   backdrop-blur-sm flex flex-col items-center  gap-7 overflow-hidden bg-[url(/bg.jpg)] bg-fixed min-h-screen sm:min-h-screen md:min-h-screen lg:min-h-screen  ">
        <CursorCircle />

        {menu && (
          <div className="menuSlider absolute top-0 h-full w-full flex flex-col  items-center  bg-white opacity-90 z-30 text-7xl font-bold gap-10 ">
            <Link
              to="/"
              onClick={() => setMenu(false)}
              className="bg-black w-full text-center text-amber-50 p-2 "
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenu(false)}
              className="bg-black w-full text-center text-amber-50 p-2 "
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setMenu(false)}
              className="bg-black w-full text-center text-amber-50 p-2 "
            >
              Projects
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMenu(false)}
              className="bg-black w-full text-center text-amber-50 p-2 "
            >
              Contact Us
            </Link>
          </div>
        )}
        <Nav menu={menu} setMenu={setMenu} />
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
