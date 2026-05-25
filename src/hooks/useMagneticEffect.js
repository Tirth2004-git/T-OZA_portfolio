import { useRef, useEffect } from "react";

/**
 * Hook to apply a magnetic/gravity pull effect to any hovered element.
 * Pulls the element slightly towards the mouse position.
 * @param {number} strength - Strength of the magnetic pull (0.1 to 0.5 recommended)
 */
export const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply inline style transitions
    el.style.willChange = "transform";
    el.style.transition = "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)";

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = el.getBoundingClientRect();
      
      // Calculate center of element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance between mouse and center
      const dx = clientX - centerX;
      const dy = clientY - centerY;

      // Translate the element towards the mouse
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };

    const handleMouseLeave = () => {
      // Return to original position with spring-back styling
      el.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      el.style.transform = "translate(0px, 0px)";
      
      // Reset transition to fast follow after return completes
      setTimeout(() => {
        if (el) el.style.transition = "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)";
      }, 600);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

export default useMagneticEffect;
