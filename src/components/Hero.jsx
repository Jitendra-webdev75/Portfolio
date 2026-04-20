import CtaBtn from "./CtaBtn";
import { Link } from "react-router-dom";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import BottomIcons from "./BottomIcons";
import { RiGithubFill, RiLinkedinFill, RiMailLine } from "@remixicon/react";
import Orb from "./Orb";
function Hero() {
  const containerRef = useRef(null);
  return (
    <div
      className="heroSection h-[80vh] w-[90vw] bg-transparent  flex flex-col items-center 
        justify-center gap-4  p-14 
        sm:text-center sm:gap-0.5 md:gap-0.5 lg:gap-1 leading-loose "
    >
      <div className="absolute inset-0 z-0 opacity-60">
        <Orb
          hoverIntensity={1.2}
          rotateOnHover
          hue={340}
          forceHoverState={false}
          backgroundColor="#0a0a0a"
        />
      </div>
      <div
        className="  z-10"
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <VariableProximity
          label={" Hi, I'm Jitendra"}
          className={
            "variable-proximity-demo cursor-grab text-[3rem] leading-10 text-center text-shadow-md text-amber-50 font-bold text-shadow-[#1f241ac5] z-10 select-none sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl"
          }
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
      <VariableProximity
        label={" Frontend Developer"}
        className={
          "variable-proximity-demo text-[1.5rem]  font-extrabold text-[#f9f4f4]   cursor-grab text-shadow-sm  sm:text-[2.6rem]    md:text-[3rem] lg:text-[3.5rem] select-none"
        }
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
      <VariableProximity
        label={`A passionate web developer who loves turning ideas into interactive web experiences. Skilled in HTML, CSS, JavaScript, and currently mastering React & Tailwind CSS, I focus on building fast, clean, and user-friendly interfaces.`}
        className={
          "variable-proximity-demo h-[11vh] w-[70vw] flex justify-center content-center items-center text-center   text-xl text-amber-50  cursor-grab z-10 leading-relaxed  sm:leading-relaxed sm:text-[1.5rem] sm:text-center  md:text-[1.7rem] lg:text-[1.8rem] lg:leading-relaxed select-none"
        }
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />

      <CtaBtn btn1={"Get in Touch"} btn2={"View My Work"} />

      <div
        className="iconHandler h-[15vh] w-[70vw] flex bg-transparent justify-center items-center gap-8 pt-5 z-10 mt-48
       sm:mt-36 md:mt-35 lg:mt-10    "
      >
        <a href="https://github.com/Jitendra-webdev75">
          <BottomIcons Icon={RiGithubFill}></BottomIcons>
        </a>

        <a href="https://www.linkedin.com/in/jitendra-kumar-8ba8673b5/">
          <BottomIcons Icon={RiLinkedinFill}></BottomIcons>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&to=jitendraphone7505@gmail.com">
          <BottomIcons Icon={RiMailLine}></BottomIcons>
        </a>
      </div>
    </div>
  );
}

export default Hero;
