import React from "react";

type StarBorderProps = React.HTMLAttributes<HTMLElement> & {
  as?: any;
  color?: string;
  speed?: string;
  className?: string;
};

const StarBorder: React.FC<StarBorderProps> = ({ as: Tag = "button", color = "cyan", speed = "5s", className = "", children, ...props }) => {
  // lightweight decorative wrapper that forwards props to the underlying element
  const rootStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 8,
    background: "transparent",
    border: "1px solid rgba(0,0,0,0.08)",
    cursor: "pointer",
  };

  const decoStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: 8,
    pointerEvents: "none",
    background: "linear-gradient(90deg, rgba(99,102,241,0.14), rgba(6,182,212,0.12))",
    mixBlendMode: "screen",
    opacity: 0.9,
    animation: `sb-anim ${speed} linear infinite`,
  };

  return (
    <>
      <style>{`@keyframes sb-anim { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } } .starborder-root { background-size: 200% 200%; }`}</style>
      <Tag {...(props as any)} className={`starborder-root ${className}`} style={{ ...rootStyle, ...(props as any).style }}>
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
        <span aria-hidden style={decoStyle} />
      </Tag>
    </>
  );
};

export default StarBorder;
