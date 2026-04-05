import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar h-[10vh] w-[100vw]  bg-transparent flex items-center justify-between text-2xl text-zinc-800 p-10 ">
      <div
        className="logo h-[10vh] w-[7vw] bg-transparent flex items-center  rounded-full
        "
      >
        <img src="./public/logo.png" alt="" className="h-[12vh] w-[13vw]" />
      </div>
      <div className="navElement flex gap-20 mr-10 ">
        <Link
          to="/"
          className=" border-b-2 border-transparent   hover:border-b-2 
          hover:border-amber-50 hover:text-shadow-sm hover:text-shadow-[#828281]"
        >
          HOME
        </Link>

        <Link
          to="/about"
          className=" border-b-2 border-transparent   hover:border-b-2 
          hover:border-amber-50 hover:text-shadow-sm hover:text-shadow-[#828281]"
        >
          About
        </Link>
        <Link
          to="/projects"
          className=" border-b-2 border-transparent   hover:border-b-2 
          hover:border-amber-50 hover:text-shadow-sm hover:text-shadow-[#828281]"
        >
          Projects
        </Link>
        <Link
          to="/contact-us"
          className=" border-b-2 border-transparent   hover:border-b-2 
          hover:border-amber-50 hover:text-shadow-sm hover:text-shadow-[#828281]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Nav;
