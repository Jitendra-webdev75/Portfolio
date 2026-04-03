import CtaBtn from "./CtaBtn";

function Hero() {
  return (
    <div
      className="heroSection h-[80vh] w-[90vw] bg-transparent flex flex-col items-center 
        justify-center gap-10"
    >
      <h1 className="text-8xl font-bold text-[#3C3434]">
        Hi, I'm <span className="text-[#106bc6]">Jitendra</span>
      </h1>
      <h1 className="text-4xl font-bold text-[#0F3B3A]">Frontend Developer</h1>
      <h1 className="text-2xl font-medium text-[#3C3434]">
        A passionate Web Developer focused on building clean, modern, and
        user-friendly web applications.
      </h1>
      <CtaBtn />
    </div>
  );
}

export default Hero;
