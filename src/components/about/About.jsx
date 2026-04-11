import {
  RiBrushAiLine,
  RiCodeSSlashLine,
  RiRocket2Line,
} from "@remixicon/react";
import OrbitImages from "../OrbitImages";
import DotGrid from "../DotGrid.jsx";

function About() {
  const images = [
    "/html.png",
    "/css.png",
    "/js.png",
    "/tailwind.png",
    "/react.svg",
    "/git.png",
    "/probl.png",
  ];
  return (
    <div className="aboutPage absolute min-h-screen min-w-screen flex flex-col items-center p-1.5 gap-3 overflow-x-hidden   ">
      <div className="gridBg h-full w-full absolute overflow-hidden bg-transparent z-[-10]">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={7}
          resistance={550}
          returnDuration={1.5}
        />
      </div>
      <h1
        className="text-3xl text-amber-50 font-bold border-amber-50 border-b-2 
        "
      >
        About Me
      </h1>
      <div className="content h-full w-full flex  justify-center items-center ">
        <div
          className="leftContent h-full w-[60vw]  flex flex-col items-center
          p-16 text-xl text-[#fff] leading-loose gap-7  "
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
        <div className="rightContent h-full w-[40vw] p-10 flex flex-col gap-5 items-end ">
          <div className="card1 h-[20vh] w-[30vw] bg-transparent backdrop-blur-lg shadow-sm shadow-cyan-300  rounded-l-2xl border-2 border-gray-900 hover:border-amber-50  ">
            <h1
              className="text-2xl font-semibold p-4 flex gap-10 text-[#1680e9]
               text-shadow-black text-shadow-sm"
            >
              <RiCodeSSlashLine color="#1680e9" size={35} />
              Clean Code
            </h1>
            <p className="text-xl p-3 text-[#f1e9e9ea]">
              Writing maintainable, scalable, and efficient code is my priority.
            </p>
          </div>
          <div className="card2 h-[20vh] w-[35vw] bg-transparent backdrop-blur-lg shadow-sm shadow-cyan-300  rounded-l-2xl border-2 border-gray-900 hover:border-amber-50">
            <h1
              className="text-2xl text-[#9051e3] p-4 font-semibold flex gap-10
              text-shadow-black text-shadow-sm"
            >
              <RiBrushAiLine color="#9051e3" size={35} />
              Design Focus
            </h1>
            <p className="text-xl p-3 text-[#f1e9e9ea]">
              Creating beautiful interfaces with great user experience.
            </p>
          </div>
          <div className="card3 h-[20vh] w-[38vw]  bg-transparent backdrop-blur-lg shadow-sm shadow-cyan-300  rounded-l-2xl border-2 border-gray-900 hover:border-amber-50">
            <h1
              className="text-2xl text-[#9051e3] text-shadow-black text-shadow-sm 
            p-4 font-semibold flex gap-10 "
            >
              <RiRocket2Line color="#9051e3" size={35} />
              Fast Learner
            </h1>
            <p className="text-xl  p-3 text-[#f1e9e9ea]">
              Fast Learner Always exploring new technologies and best practices.
            </p>
          </div>
        </div>
      </div>
      <div className="skills h-[100vh] w-full flex justify-center   border-t-4 border-cyan-500    ">
        <div className="gridBg h-full w-full absolute overflow-hidden bg-transparent ">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={7}
            resistance={550}
            returnDuration={1.5}
          />
        </div>
        <div className="skillSect p-8 flex ">
          <h1 className="  h-[10vh] text-amber-50 text-center text-7xl font-bold mt-23  border-b-2 border-transparent  hover:border-amber-50 z-20  ">
            My Skills
          </h1>
          <div className="skillRotator  h-[60vh] w-[70vw]  flex  justify-center item        overflow-hidden mt-28 bg-[url(./dp2.png)] bg-[length:15%] bg-no-repeat bg-center scale-125  ">
            <OrbitImages
              images={images}
              shape="ellipse"
              radiusX={560}
              radiusY={200}
              rotation={-8}
              duration={30}
              itemSize={80}
              responsive={true}
              radius={160}
              direction="normal"
              fill
              showPath
              paused={false}
            />
          </div>
          ;
        </div>
      </div>
    </div>
  );
}

export default About;
