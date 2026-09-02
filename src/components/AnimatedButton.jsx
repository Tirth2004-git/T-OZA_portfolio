import React from "react";
import { useMagneticEffect } from "../hooks/useMagneticEffect";

const AnimatedButton = ({
  children,
  onClick,
  href,
  target,
  download,
  variant = "primary", // primary, secondary, or ghost
  className = "",
  type = "button",
  disabled = false,
}) => {
  const magneticRef = useMagneticEffect(0.2);

  const baseStyles = `
    relative font-sans text-xs font-semibold tracking-wide
    px-5 py-2.5 inline-flex items-center justify-center gap-2 rounded-md
    transition-all duration-200 select-none active:scale-[0.98]
    cursor-pointer
  `;

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = `
      bg-theme-accent text-white dark:text-[#12161C] font-bold
      hover:bg-theme-accent-hover shadow-sm hover:shadow-md
    `;
  } else if (variant === "secondary") {
    variantStyles = `
      bg-theme-surface-alt text-theme-text border border-theme-border
      hover:border-theme-accent hover:text-theme-accent shadow-sm
    `;
  } else {
    variantStyles = `
      bg-transparent text-theme-text border border-theme-border
      hover:border-theme-accent/60 hover:bg-theme-surface-alt/60
    `;
  }

  const buttonProps = {
    className: `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`,
    onClick,
    ref: magneticRef,
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
    <button type={type} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  );
};

export default AnimatedButton;

