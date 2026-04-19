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
        justify-center gap-8  p-14 
        sm:text-center lg:gap-3.5 leading-loose "
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
        className="text-8xl  z-10"
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <VariableProximity
          label={" Hi, I'm Jitendra"}
          className={
            "variable-proximity-demo cursor-grab text-shadow-md text-amber-50 font-bold text-shadow-[#1f241ac5] z-10"
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
          "variable-proximity-demo text-4xl font-bold text-[#f9f4f4]  cursor-grab text-shadow-sm  sm:text-[2.6rem] md:text-[3rem] lg:text-[3.5rem]"
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
          "variable-proximity-demo h-[11vh] w-[70vw] flex justify-center content-center items-center text-2xl font-medium text-amber-50 text-center cursor-grab z-10 leading-9  sm:leading-relaxed sm:text-[1.5rem]  md:text-[1.7rem] lg:text-[1.8rem] lg:leading-relaxed"
        }
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />

      <CtaBtn btn1={"Get in Touch"} btn2={"View My Work"} />

      <div
        className="iconHandler h-[15vh] w-[70vw] flex bg-transparent justify-center items-center gap-8 pt-5 z-10 mt-20
       sm:mt-36 md:mt-35 lg:mt-10   "
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
