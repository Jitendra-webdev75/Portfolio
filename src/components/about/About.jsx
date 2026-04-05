import React from "react";

function About() {
  return (
    <div className="aboutPage h-full w-full flex flex-col items-center p-2 gap-3 bg-transparent">
      <h1 className="text-3xl font-semibold  ">About Me</h1>
      <div className="content h-full w-full flex justify-center items-center ">
        <div
          className="leftContent h-full w-1/2  flex flex-col items-center
          p-10 text-xl leading-9 gap-7"
        >
          <p>
            I'm a passionate web developer in progress and a BCA student. I
            specialize in building responsive interfaces and interactive web
            experiences using HTML, CSS, JavaScript, React, and Tailwind CSS. I
            believe good design and clean code go hand in hand.
          </p>
          <p>
            When I’m not coding, I’m exploring new technologies and learning new
            ways to improve performance and UI design.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user
            experiences that make a difference.
          </p>
        </div>
        <div className="rightContent h-full w-1/2 bg-red-400">Right</div>
      </div>
    </div>
  );
}

export default About;
