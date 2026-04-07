import {
  RiBrushAiLine,
  RiCodeSSlashLine,
  RiRocket2Line,
} from "@remixicon/react";
function About() {
  return (
    <div className="aboutPage h-full w-full flex flex-col items-center p-1.5 gap-3 bg-transparent">
      <h1 className="text-3xl text-zinc-900 font-bold border-amber-50 border-b-2 roboto  ">
        About Me
      </h1>
      <div className="content h-full w-full flex justify-center items-center ">
        <div
          className="leftContent h-full w-[60vw]  flex flex-col items-center
          p-16 text-xl leading-loose gap-7  "
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
        <div
          className="rightContent h-full w-[40vw] p-10 flex flex-col gap-5 items-end
           "
        >
          <div className="card1 h-[20vh] w-[30vw] bg-white/10 border border-white/30 rounded-l-2xl hover:shadow-2xl backdrop-blur-2xl hover:shadow-gray-700">
            <h1 className="text-2xl p-4 flex gap-10">
              <RiCodeSSlashLine color="#106bc6" size={35} />
              Clean Code
            </h1>
            <p className="text-xl p-3">
              Writing maintainable, scalable, and efficient code is my priority.
            </p>
          </div>
          <div className="card1 h-[20vh] w-[35vw] bg-white/10 border border-white/30 rounded-l-2xl backdrop-blur-2xl hover:shadow-2xl hover:shadow-gray-700">
            <h1 className="text-2xl p-4 flex gap-10">
              <RiBrushAiLine color="#3E1E68" size={35} />
              Design Focus
            </h1>
            <p className="text-xl p-3">
              Creating beautiful interfaces with great user experience.
            </p>
          </div>
          <div className="card1 h-[20vh] w-[40vw]  border border-white/30  rounded-2xl  hover:shadow-2xl ">
            <h1 className="text-2xl p-4 flex gap-10 ">
              <RiRocket2Line color="#3E1E68" size={35} />
              Fast Learner
            </h1>
            <p className="text-xl  p-3">
              Fast Learner Always exploring new technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
