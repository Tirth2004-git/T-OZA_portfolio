import { useMagneticEffect } from "../hooks/useMagneticEffect";

const AnimatedButton = ({
  children,
  onClick,
  href,
  target,
  download,
  variant = "primary", // primary or ghost
  className = "",
  type = "button",
  disabled = false,
}) => {
  // Apply magnetic effect with a smooth pull factor of 0.25
  const magneticRef = useMagneticEffect(0.25);

  const baseStyles = `
    relative font-orbitron text-xs font-bold tracking-[0.15em] uppercase
    px-8 py-3.5 inline-block text-center transition-all duration-300
    select-none active:scale-95
  `;

  const disabledStyles = disabled
    ? "opacity-70 cursor-not-allowed pointer-events-none saturate-75"
    : "";

  const variantStyles =
    variant === "primary"
      ? `
        bg-gradient-to-r from-cyber-cyan to-cyber-purple text-[#020408]
        hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]
      `
      : `
        bg-transparent text-cyber-cyan border border-cyber-cyan
        hover:bg-cyber-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]
      `;

  const clipStyle = {
    clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
  };

  const buttonProps = {
    className: `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`,
    style: clipStyle,
    onClick,
    ref: magneticRef, // Bind magnetic pull logic
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...buttonProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} {...buttonProps}>
      {children}
    </button>
  );
};

export default AnimatedButton;
