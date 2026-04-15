import { useEffect, useRef } from "react";

function CursorCircle() {
  const circleRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {
      // easing (0.1 = slow, 0.2 = faster)
      current.current.x += (mouse.current.x - current.current.x) * 0.1;
      current.current.y += (mouse.current.y - current.current.y) * 0.1;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${current.current.x - 12}px, ${current.current.y - 12}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
    />
  );
}

export default CursorCircle;
