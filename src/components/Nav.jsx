import React from "react";
function Nav() {
  return (
    <div className="navbar h-[10vh] w-[100vw]  bg-transparent flex items-center justify-between text-2xl text-zinc-800 p-10">
      <div
        className="logo h-[10vh] w-[7vw] bg-transparent flex items-center  rounded-full
        "
      >
        <img src="./public/logo.png" alt="" className="h-[12vh] w-[13vw]" />
      </div>
      <div className="navElement flex gap-20 mr-10">
        <h1>HOME</h1>
        <h1>ABOUT</h1>
        <h1>PROJECTS</h1>
        <h1>CONTACT US</h1>
      </div>
    </div>
  );
}

export default Nav;
