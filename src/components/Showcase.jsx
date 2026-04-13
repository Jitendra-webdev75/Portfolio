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
      <div className=" h-screen flex  ">
        <div className="relative w-full max-w-xl mx-auto ">
          <img
            src="./mac.png"
            alt="macbook"
            className="w-full scale-150 mt-36  "
          />

          <div className="absolute top-[19%] left-[2%] w-[96%] h-[44%] overflow-hidden rounded-xl">
            <img
              src={img1}
              alt="project"
              className="w-full h-full object-top "
            />
          </div>
        </div>

        <div
          className="aboutProjec text-2xl  text-amber-50 
        h-full w-1/2 flex flex-col items-left p-10 gap-8"
        >
          <h1 className="text-6xl font-bold">{projTitle}</h1>
          <p className="text-2xl">{projOverview}</p>
          <h1 className="text-3xl font-semibold text-emerald-400">Features</h1>
          <p>{projFeature}</p>

          <h1 className="font-semibold text-blue-400">Tech Stack </h1>
          {projTech}
          <CtaBtn
            btn1={`Live Demo`}
            btn2={"Source Code"}
            demo={demoLink}
            code={codeLink}
          />
        </div>
      </div>
    </>
  );
}

export default Showcase;
