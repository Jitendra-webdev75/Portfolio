import React from "react";
import TypingEffect from "../TypingEffect";
import Showcase from "../Showcase";

function Projects() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-950 flex flex-col items-center ">
      <h1 className="h-[80vh] text-9xl text-[#f2f0f4] text-shadow-md text-shadow-black mt-40 font-semibold">
        <TypingEffect
          text1={"Discover my Work."}
          text2={"Explore my Projects."}
          text3={"Scroll to Begin."}
        />
      </h1>
      <div className="project1 h-screen w-full ">
        <Showcase
          img1={"/taskManag.png"}
          projTitle={"A Task Manager"}
          projOverview={`Task Manager app with add, delete, and mark complete features —
            built using React and Tailwind CSS.`}
          projFeature={`Add, edit, and delete tasksLocalStorage persistenceFully responsive designClean and modern UI`}
          projTech={`React (Vite), Tailwind CSS, JavaScript`}
          demoLink={`https://task-manager-delta-nine-81.vercel.app/`}
          codeLink={"https://github.com/Jitendra-webdev75/Task-manager"}
        />
      </div>
      <div className="project2 h-screen w-full ">
        <Showcase
          img1={"/weather.png"}
          projTitle={"A  Weather App"}
          projOverview={`A simple and modern Weather Application built using React.js that allows users to check real-time weather conditions of any city in the world.`}
          projFeature={`🔍 Search weather by city name.
                      🌡️ Displays temperature, humidity and wind speed,
                      🌤️ Dynamic weather icons based on conditions,
                      🎨 Clean and responsive UI,
                      🌍 Real-time data using Weather API
`}
          projTech={`React (Vite), Tailwind CSS, JavaScript`}
          demoLink={`https://weather-app-76q2.vercel.app/`}
          codeLink={"https://github.com/Jitendra-webdev75/WeatherApp"}
        />
      </div>

      <div className="project3 h-screen w-full mt-16">
        <Showcase
          img1={"/water.png"}
          projTitle={" Evocus Black Water"}
          projOverview={`A modern animated product landing page built with React, Tailwind CSS, and GSAP.`}
          projFeature={` This project showcases a premium water product using smooth scroll animations, responsive layouts, and interactive UI elements.
`}
          projTech={`⚛️ React (Vite),🎨 Tailwind CSS,🎞 GSAP + ScrollTrigger`}
          demoLink={`https://black-water-website-tl8y.vercel.app/`}
          codeLink={"https://github.com/Jitendra-webdev75/black-water-website"}
        />
      </div>
      <div className="project4 h-screen w-full  ">
        <Showcase
          img1={"/gta.png"}
          projTitle={" GTA VI Landing Page "}
          projOverview={`A GTA VI inspired animated landing page built using React, GSAP, and Tailwind CSS.`}
          projFeature={` TGSAP intro animation, Background title music, Custom GTA font (Pricedown), Mouse movement effect
          ⚠️ Currently not responsive (desktop only).

`}
          projTech={`⚛️ React (Vite),🎨 Tailwind CSS,🎞 GSAP + ScrollTrigger`}
          demoLink={`https://gta-vi-website-rho.vercel.app/`}
          codeLink={`https://github.com/Jitendra-webdev75/GTA-VI-website?tab=readme-ov-file`}
        />
      </div>
    </div>
  );
}

export default Projects;
