import React from "react";
import TypingEffect from "../TypingEffect";
import Showcase from "./Showcase";

function Projects() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-950 flex flex-col items-center ">
      <h1 className="h-[80vh] text-9xl text-[#f2f0f4] text-shadow-md text-shadow-black mt-40 font-semibold">
        <TypingEffect
          text1={"Discover my Work."}
          text2={"Explore my Projects."}
          text3={"Scroll to Begin."}
        />
      </h1>
      <Showcase/>
    </div>

  );
}

export default Projects;
