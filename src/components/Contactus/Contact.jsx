import Galaxy from "../Galaxy";

function Contact() {
  return (
    <div className="h-screen w-screen bg-transparent p-10 ">
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
      <div className="content h-full w-full z-20  flex flex-col items-center">
        <h1 className="text-6xl text-amber-50  ">Get In Touch</h1>
      </div>
    </div>
  );
}

export default Contact;
