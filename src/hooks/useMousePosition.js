import { useState, useEffect, useRef } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0, speed: 0 });
  const lastTimeRef = useRef(performance.now());
  const movingTimeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseRef.current = { x: clientX, y: clientY };
      setPosition({ x: clientX, y: clientY });
      setIsMoving(true);

      // Reset moving state after some inactivity
      if (movingTimeoutRef.current) clearTimeout(movingTimeoutRef.current);
      movingTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        velocityRef.current = { x: 0, y: 0, speed: 0 };
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Velocity loop using requestAnimationFrame
    let rAF;
    const calculateVelocity = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTimeRef.current);
      
      const dx = mouseRef.current.x - lastMouseRef.current.x;
      const dy = mouseRef.current.y - lastMouseRef.current.y;
      
      // Calculate pixels per millisecond (speed)
      const vx = dx / dt;
      const vy = dy / dt;
      const speed = Math.sqrt(vx * vx + vy * vy);

      velocityRef.current = { x: vx, y: vy, speed };
      
      lastMouseRef.current = { ...mouseRef.current };
      lastTimeRef.current = now;
      rAF = requestAnimationFrame(calculateVelocity);
    };

    rAF = requestAnimationFrame(calculateVelocity);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rAF);
      if (movingTimeoutRef.current) clearTimeout(movingTimeoutRef.current);
    };
  }, []);

  return {
    x: position.x,
    y: position.y,
    vx: velocityRef.current.x,
    vy: velocityRef.current.y,
    speed: velocityRef.current.speed,
    isMoving,
  };
};
export default useMousePosition;
