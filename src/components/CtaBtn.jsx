import React from "react";

function CtaBtn() {
  return (
    <div
      className="h-[20vh] w-[50vw] bg-transparent flex justify-center items-center
     gap-10 z-10 mt-5"
    >
      <button className="h-[10vh] w-[13vw] bg-[#e0e0e0f5] text-2xl text-zinc-900      rounded-lg font-semibold hover:bg-transparent hover:text-amber-50 hover:border-2 hover:border-[#e0e0e0de] active:scale-95 transition-all">
        Get In Touch
      </button>
      <button className="h-[10vh] w-[13vw] bg-transparent text-2xl text-[#faf4f4fd]      rounded-lg font-semibold border-2 border-[#e0e0e0de] hover:border-3 active:scale-95 transition-all">
        View My Work
      </button>
    </div>
  );
}

export default CtaBtn;
