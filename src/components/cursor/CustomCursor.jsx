import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { lerp } from "../../utils/lerp";

const CustomCursor = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // References for coordinates and animation loops
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0, scaleX: 1, scaleY: 1, angle: 0 });
  
  // DOM Refs
  const dotElRef = useRef(null);
  const trailElRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // Checking device touch support / viewport width
  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Listeners for mouse activities
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    
    const handleMouseDown = () => {
      setIsClicked(true);
      spawnSparks(mouseRef.current.x, mouseRef.current.y, 16);
    };
    
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Dynamic Hover detector for all interactive tags
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest(".skill-card") ||
        target.closest(".project-card") ||
        target.closest(".cert-card") ||
        target.closest(".interactive-hover");
      
      setIsHovered(!!isInteractive);
    };
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  // Particle Sparks Spawner
  const spawnSparks = (x, y, count) => {
    const sparksColors = theme === "dark" 
      ? ["#00f0ff", "#7b2fff", "#ff2d78", "#00ff88"] 
      : ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: sparksColors[Math.floor(Math.random() * sparksColors.length)],
        alpha: 1,
        size: Math.random() * 2.5 + 1.5,
        decay: Math.random() * 0.03 + 0.015,
      });
    }
  };

  // Main high-performance Animation Frame Loop
  useEffect(() => {
    if (isMobile) return;

    let rAF;
    let lastTime = performance.now();

    const updateFrame = () => {
      const now = performance.now();
      const dt = now - lastTime;
      lastTime = now;

      // 1. Interpolate central dot position
      dotRef.current.x = lerp(dotRef.current.x, mouseRef.current.x, 0.4);
      dotRef.current.y = lerp(dotRef.current.y, mouseRef.current.y, 0.4);

      if (dotElRef.current) {
        dotElRef.current.style.transform = `translate3d(${dotRef.current.x}px, ${dotRef.current.y}px, 0)`;
      }

      // 2. Interpolate follower ring position (slower LERP for trailing feeling)
      const lastTrailX = trailRef.current.x;
      const lastTrailY = trailRef.current.y;
      
      trailRef.current.x = lerp(trailRef.current.x, mouseRef.current.x, 0.14);
      trailRef.current.y = lerp(trailRef.current.y, mouseRef.current.y, 0.14);

      // Calculate velocity for stretching
      const dx = trailRef.current.x - lastTrailX;
      const dy = trailRef.current.y - lastTrailY;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate angle of stretch
      if (velocity > 0.5) {
        trailRef.current.angle = Math.atan2(dy, dx);
      }

      // Stretch multiplier based on movement speed
      const maxStretch = 0.6; // capped
      const stretch = Math.min(velocity * 0.03, maxStretch);
      trailRef.current.scaleX = 1 + stretch;
      trailRef.current.scaleY = 1 - stretch * 0.5;

      if (trailElRef.current) {
        const rotateStr = `rotate(${trailRef.current.angle}rad)`;
        const scaleStr = `scale(${trailRef.current.scaleX}, ${trailRef.current.scaleY})`;
        
        trailElRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0) ${rotateStr} ${scaleStr}`;
      }

      // 3. Spawning subtle trails when flicking mouse fast
      if (velocity > 18) {
        spawnSparks(mouseRef.current.x, mouseRef.current.y, 1);
      }

      // 4. Update and Render Sparks on Canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update particle positions
        particlesRef.current = particlesRef.current.filter((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.98; // Friction
          p.vy *= 0.98;
          p.alpha -= p.decay;
          
          if (p.alpha <= 0) return false;

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
          
          return true;
        });
      }

      rAF = requestAnimationFrame(updateFrame);
    };

    // Canvas size sync
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    rAF = requestAnimationFrame(updateFrame);

    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, theme]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Sparks Particle Layer Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997] w-full h-full"
      />

      {/* Main Cursor Core Dot */}
      <div
        ref={dotElRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300
          ${isHovered 
            ? "bg-cyber-pink shadow-[0_0_12px_#ff2d78]" 
            : theme === "dark" 
              ? "bg-cyber-cyan shadow-[0_0_12px_#00f0ff]" 
              : "bg-blue-600 shadow-[0_0_8px_#3b82f6]"
          }
        `}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      />

      {/* Smooth Trailing Follower Ring */}
      <div
        ref={trailElRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full border pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out flex items-center justify-center
          ${isHovered
            ? "border-cyber-pink bg-cyber-pink/10 w-14 h-14"
            : theme === "dark"
              ? "border-cyber-cyan/45 bg-cyber-cyan/5"
              : "border-blue-500/40 bg-blue-500/5"
          }
          ${isClicked ? "scale-[0.7]" : ""}
        `}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Futuristic revolving dashboard lines when hovered */}
        {isHovered && (
          <div className="absolute inset-[-4px] rounded-full border border-dashed animate-spin border-cyber-cyan/40" style={{ animationDuration: "8s" }} />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
