import CtaBtn from "./CtaBtn";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import BottomIcons from "./BottomIcons";
import { RiGithubFill, RiLinkedinFill, RiMailLine } from "@remixicon/react";
function Hero() {
  const containerRef = useRef(null);
  return (
    <div
      className="heroSection h-[80vh] w-[90vw] bg-transparent flex flex-col items-center 
        justify-center gap-8 p-20 "
    >
      {/* <h1 className="text-8xl font-bold text-[#3C3434]">
        Hi, I'm <span className="text-[#106bc6]">Jitendra</span>
      </h1> */}
      <div
        className="text-8xl text-[#106bc6]"
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <VariableProximity
          label={" Hi, I'm Jitendra"}
          className={"variable-proximity-demo"}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
      <h1 className="text-4xl font-bold text-[#0F3B3A]">Frontend Developer</h1>
      <h1 className="h-[11vh] w-[70vw] flex justify-center content-center items-center text-2xl font-medium text-[#1f241ae0] text-center">
        A passionate web developer who loves turning ideas into interactive web
        experiences. Skilled in HTML, CSS, JavaScript, and currently mastering
        React & Tailwind CSS, I focus on building fast, clean, and user-friendly
        interfaces.
      </h1>
      <CtaBtn />
      <div className="iconHandler h-[15vh] w-[70vw] flex bg-transparent justify-center items-center gap-8 pt-5">
        <BottomIcons Icon={RiGithubFill}></BottomIcons>
        <BottomIcons Icon={RiLinkedinFill}></BottomIcons>
        <BottomIcons Icon={RiMailLine}></BottomIcons>
      </div>
    </div>
  );
}

export default Hero;
