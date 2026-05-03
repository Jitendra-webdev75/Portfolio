import {
  RiBrushAiLine,
  RiCodeSSlashLine,
  RiRocket2Line,
} from "@remixicon/react";
import OrbitImages from "../OrbitImages.jsx";
import DotGrid from "../DotGrid.jsx";
import { useEffect, useState } from "react";

function About() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleSize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
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
    <div className="aboutPage absolute min-h-screen w-full flex flex-col items-center  gap-3 pt-20 overflow-x-hidden  sm:pt-20 md:pt-20 lg:pt-24">
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
      <div
        className="content h-full w-full flex flex-col  justify-center items-center 
        sm:flex  sm:flex-col md:flex md:flex-col lg:flex lg:flex-row  lg:items-baseline "
      >
        <div
          className="leftContent h-full w-full  flex flex-col items-center
          p-10 text-xl text-[#fff] leading-loose gap-5   
            sm:w-full sm:p-20  sm:text-[1.7rem]  md:w-full md:p-16 lg:w-[50vw] lg:p-16  "
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
        <div className="rightContent h-full w-full  p-12 flex flex-col gap-5  items-center  sm:w-[50vw] sm:justify-start sm md:w-[50vw] lg:w-[50vw] ">
          <div className="card1 h-[20vh] w-[90vw]  backdrop-blur-lg shadow-sm shadow-cyan-300  rounded-l-2xl border-2 border-gray-900 hover:border-amber-50    sm:w-[40vw] md:w-[40vw] lg:w-[40vw]">
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
          <div className="card2 h-[20vh] w-[90vw] bg-transparent backdrop-blur-lg shadow-sm shadow-cyan-300  rounded-l-2xl border-2 border-gray-900 hover:border-amber-50 sm:w-[46vw] md:w-[46vw] lg:w-[44vw]">
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
          <div className="card3 h-[20vh] w-[90vw]  bg-transparent backdrop-blur-lg shadow-sm shadow-cyan-300  rounded-l-2xl border-2 border-gray-900 hover:border-amber-50 sm:w-[48vw]  md:w-[46vw] lg:w-[46vw]">
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
      <div className="skills h-[100vh] w-full flex  justify-center   border-t-4 border-cyan-500    ">
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
        <div className="skillSect p-8 flex flex-col sm:p-2 md:p-4 lg:pt-2">
          <h1 className="  h-[10vh] text-amber-50 text-center text-7xl font-bold mt-23  border-b-2 border-transparent  hover:border-amber-50 z-20  ">
            My Skills
          </h1>
          <div className="skillRotator  h-[60vh] w-[70vw]  flex  justify-center         overflow-hidden mt-10 bg-[url(./dp2.png)] bg-[length:35%] bg-no-repeat bg-center scale-125 sm:bg-[length:38%] md:bg-[length:20%] lg:bg-[length:20%]  ">
            <OrbitImages
              images={images}
              shape={mobile ? "circle" : "ellipse"}
              radiusX={mobile ? 150 : 660}
              radiusY={mobile ? 350 : 170}
              rotation={-8}
              duration={30}
              itemSize={mobile ? 200 : 100}
              responsive={true}
              radius={mobile ? 560 : 120}
              direction="normal"
              fill
              showPath
              paused={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
