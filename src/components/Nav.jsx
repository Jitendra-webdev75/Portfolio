import React from "react";
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
        <h1
          className=" border-b-2 border-transparent   hover:border-b-2 
          hover:border-amber-50"
        >
          HOME
        </h1>
        <h1
          className="border-b-2 border-transparent   
          hover:border-amber-50"
        >
          ABOUT
        </h1>
        <h1
          className="border-b-2 border-transparent   
          hover:border-amber-50"
        >
          PROJECTS
        </h1>
        <h1
          className="border-b-2 border-transparent   
          hover:border-amber-50"
        >
          CONTACT US
        </h1>
      </div>
    </div>
  );
}

export default Nav;
