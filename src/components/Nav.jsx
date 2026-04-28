import React from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "@remixicon/react";
function Nav({ menu, setMenu }) {
  return (
    <div
      className="navbar h-[10vh] w-[100vw]   flex items-center justify-between text-2xl text-zinc-800 p-10 z-20 select-none
    "
    >
      <div
        className="logo h-[10vh] w-[7vw] scale-x-[4] bg-transparent  flex items-center  rounded-full
         sm:scale-x-[3.2] md:scale-w-[2vw]  lg:w-[3vw] xl:w-[2.3vw] "
      >
        <img src="./public/logo.png" alt="" className="h-[12vh] w-[13vw]" />
      </div>
      <div
        className="navElement hidden gap-20 mr-10
      sm:hidden md:hidden lg:flex "
      >
        <Link
          to="/"
          className=" border-b-2 border-transparent   text-amber-50 hover:border-b-2 
          hover:border-amber-50"
        >
          HOME
        </Link>

        <Link
          to="/about"
          className=" border-b-2 border-transparent text-amber-50  hover:border-b-2 
          hover:border-amber-50 "
        >
          About
        </Link>
        <Link
          to="/projects"
          className=" border-b-2 border-transparent  text-amber-50 hover:border-b-2 
          hover:border-amber-50 "
        >
          Projects
        </Link>
        <Link
          to="/contact-us"
          className=" border-b-2 border-transparent  text-amber-50 hover:border-b-2 
          hover:border-amber-50 "
        >
          Contact Us
        </Link>
      </div>
      <h1
        onClick={() => setMenu(true)}
        className="menuBar flex text-amber-50  scale-125
        sm:flex  sm:text-amber-50  md:text-amber-50 md:flex lg:hidden"
      >
        <RiMenuLine />
      </h1>
    </div>
  );
}

export default Nav;
