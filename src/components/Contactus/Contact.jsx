import Galaxy from "../Galaxy";

function Contact() {
  return (
    <div className="h-[100vh] w-[100vw] bg-zinc-950">
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
  );
}

export default Contact;
