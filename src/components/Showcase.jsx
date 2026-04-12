import React from "react";

function Showcase() {
  return (
    <>
      <div className=" h-screen flex bg-amber-200 ">
        <div className="relative w-full max-w-xl mx-auto">
          <img
            src="./mac.png"
            alt="macbook"
            className="w-full scale-150 mt-36 "
          />

          <div className="absolute top-[26%] -left-[37%] w-[96%] h-[62%] overflow-hidden rounded-xl">
            <img
              src="/taskManag.png"
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="aboutProjec text-2xl bg-red-300 text-amber-50 
        h-full w-1/3"
        >
          <h1>A Task Manager</h1>
          <p>
            Task Manager app with add, delete, and mark complete features —
            built using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
}

export default Showcase;
