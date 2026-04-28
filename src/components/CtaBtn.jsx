import React from "react";
import { Link } from "react-router-dom";

function CtaBtn({ btn1, btn2, demo, code }) {
  return (
    <div
      className="h-[20vh] w-[50vw] bg-transparent flex flex-col  justify-center items-center 
     gap-2 z-10  translate-y-14 
     sm:flex sm:flex-col sm:relative sm:translate-y-14 md:flex md:flex-col sm:-mt-6  md:mt-20 lg:mt-16 lg:flex lg:flex-row   "
    >
      <a href={demo}>
        <button
          className="h-[7vh] w-[87vw] bg-[#e0e0e0f5] text-xl text-zinc-900      rounded-lg font-semibold hover:bg-transparent hover:text-amber-50 hover:border-2 hover:border-[#e0e0e0de] active:scale-95 transition-all
            lg:w-[32vw] lg:text-4xl  xl:w-[14vw]  xl:text-[2rem]    "
        >
          {btn1}
        </button>
      </a>

      <a href={code}>
        <button
          className="h-[7vh] w-[87vw] bg-transparent text-2xl text-[#faf4f4fd]      rounded-lg font-semibold border-2 border-[#e0e0e0de] hover:border-3 active:scale-95 transition-all hover:border-amber-50
         lg:w-[32vw]  lg:text-4xl xl:w-[14vw]  xl:text-[1.6rem]"
        >
          {btn2}
        </button>
      </a>
    </div>
  );
}

export default CtaBtn;
