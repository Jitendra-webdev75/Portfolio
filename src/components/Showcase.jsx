import CtaBtn from "./CtaBtn";

function Showcase({
  img1,
  projTitle,
  projOverview,
  projFeature,
  projTech,
  demoLink,
  codeLink,
}) {
  return (
    <>
      <div
        className=" h-screen flex flex-col p-16 gap-2
          lg:flex lg:flex-row lg:gap-20 "
      >
        <div className="relative w-full max-w-xl mx-auto  ">
          <img
            src={img1}
            alt="macbook"
            className="w-full scale-120 mt-36
           lg:scale-125  "
          />
        </div>

        <div
          className="aboutProjec   text-amber-50 
          h-full w-[90vw] flex flex-col items-center text-center p-5 gap-5
             lg:w-[50vw] lg:flex lg:flex-col lg:-mr-10  "
        >
          <h1 className="text-[2rem] font-bold">{projTitle}</h1>
          <p
            className="w-[90vw] text-xl  pl-5 
          lg:w-[45vw]"
          >
            {projOverview}
          </p>
          <h1 className="text-[1.8rem] font-semibold text-emerald-400">
            Features
          </h1>
          <p
            className="text-xl text-center  w-[93vw]
          lg:w-[45vw]"
          >
            {projFeature}
          </p>

          <h1 className="font-semibold text-blue-400 text-[1.5rem] ">
            Tech Stack
          </h1>
          <p className="text-xl">{projTech}</p>
          <div className="ctabtns   -translate-y-16  ">
            <CtaBtn
              btn1={`Live Demo`}
              btn2={"Source Code"}
              demo={demoLink}
              code={codeLink}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
