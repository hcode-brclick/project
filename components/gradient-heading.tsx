import React from "react"
interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function GradientHeading({
  children,
  className = "",
  as: Component = "h1",
}: GradientHeadingProps) {
  return (
    <Component
      className={`gradient-text font-bold text-balance ${className}`}
    >
      {children}
    </Component>
  );
}
