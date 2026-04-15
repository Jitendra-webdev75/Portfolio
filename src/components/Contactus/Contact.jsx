import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailLine,
  RiMapPinLine,
  RiPhoneFill,
} from "@remixicon/react";
import Galaxy from "../Galaxy";
import BottomIcons from "../BottomIcons";

function Contact() {
  return (
    <div className="h-[115vh] w-screen bg-transparent p-10 ">
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.2}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <div className="content h-full w-full z-20 relative flex flex-col items-center ">
        <h1 className="text-6xl text-amber-50  -mt-13">Get In Touch</h1>
        <div className="dataContent h-full w-full bg-transparent flex justify-center p-7">
          <div className="leftContent h-full w-1/2 flex flex-col gap-6  ">
            <h1 className="text-amber-50 text-5xl">Let's work together</h1>
            <p className="text-amber-50 text-2xl leading-9">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
            <div className="email text-amber-50 text-2xl flex items-center gap-4">
              <h1>
                <RiMailLine />
              </h1>
              <h1>jitendraphone7505@gmail.com</h1>
            </div>
            <div className="phone text-amber-50 text-2xl flex items-center gap-4">
              <h1>
                <RiPhoneFill />
              </h1>
              <h1>7505341271</h1>
            </div>
            <div className="location text-amber-50 text-2xl flex items-center gap-4">
              <h1>
                <RiMapPinLine />
              </h1>
              <h1>Aligarh,UP</h1>
            </div>
            <div className="iconHandler h-[15vh] w-[70vw] flex bg-transparent justify-left  gap-8 pt-5 z-10 ">
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
          <div className="rightContent h-full w-1/2 ">
            <div className="details h-[70vh] w-[40vw]  text-amber-50 ">
              <form
                action=""
                className="flex flex-col items-center  text-2xl gap-6 z-20"
              >
                <div className="nameInput flex flex-col gap-2  ">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="h-[8vh] w-[38vw]  rounded-xl border-2 p-2"
                  />
                </div>
                <div className="emailInput flex flex-col gap-2 ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="h-[8vh] w-[38vw]  rounded-xl border-2 p-2"
                  />
                </div>
                <div className="feedbackInpt flex flex-col gap-2">
                  <label htmlFor="feedback">feedback</label>
                  <textarea
                    name="feedback"
                    className="h-[37vh] w-[38vw]  border-2  rounded-xl resize-none outline-none text-amber-50 p-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="h-[5.3vh] w-[11vw] bg-white text-2xl text-gray-950 rounded-2xl hover:bg-blue-500 
                  hover:text-amber-50"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="   text-center text-gray-300    text-md py-4  ">
          © 2026 Jeetu | Built with React
        </div>
      </div>
    </div>
  );
}

export default Contact;
