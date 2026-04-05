import React from "react";

function CtaBtn() {
  return (
    <div
      className="h-[20vh] w-[50vw] bg-transparent flex justify-center items-center
     gap-10"
    >
      <button className="h-[10vh] w-[13vw] bg-[#106bc6] text-2xl text-[#e0e0e0f5]       rounded-lg font-semibold hover:bg-transparent  hover:border-2 hover:border-[#e0e0e0de] active:scale-95 transition-all">
        Get In Touch
      </button>
      <button className="h-[10vh] w-[13vw] bg-transparent text-2xl text-[#e0e0e0f5]      rounded-lg font-semibold border-2 border-[#e0e0e0de] hover:bg-[#106bc6] hover:border-0 active:scale-95 transition-all">
        View My Work
      </button>
    </div>
  );
}

export default CtaBtn;
