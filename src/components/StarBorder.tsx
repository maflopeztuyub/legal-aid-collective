import React from "react";

type StarBorderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: any;
  color?: string;
  speed?: string;
  className?: string;
};

const StarBorder: React.FC<StarBorderProps> = ({ as: Tag = "button", color = "cyan", speed = "4s", className = "", children, ...props }) => {
  const rootStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 10,
    background: "white",
    border: "none",
    cursor: "pointer",
  };

  // Stroke colors for gradient
  const gradFrom = color === "cyan" ? "#06b6d4" : "#6366f1";
  const gradTo = color === "cyan" ? "#06b6d4" : "#06b6d4";
  // unique id per instance to avoid SVG id collisions when multiple buttons render
  const uid = (React as any).useId ? (React as any).useId() : `sb-${Math.random().toString(36).slice(2, 9)}`;
  const gradId = `sb-grad-${uid}`;
  const starId = `sb-star-${uid}`;

  return (
    <Tag {...(props as any)} className={className} style={{ ...rootStyle, ...(props as any).style }}>
      <span style={{ position: "relative", zIndex: 2, display: "inline-block" }}>{children}</span>

      {/* SVG animated rounded rect border */}
      <svg
        aria-hidden
        width="100%"
        height="100%"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="sb-grad" x1="0%" x2="100%">
            <stop offset="0%" stopColor={gradFrom} stopOpacity="1" />
            <stop offset="100%" stopColor={gradTo} stopOpacity="1" />
          </linearGradient>
          <symbol id="star" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.335 24 12 19.897 4.665 24l1.635-8.69L.6 9.75l7.732-1.732z" fill="currentColor" />
          </symbol>
        </defs>

        <rect x="1" y="1" rx="6" ry="6" width="98" height="38" fill="none" stroke="url(#sb-grad)" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 4">
          <animate attributeName="stroke-dashoffset" from="0" to="6" dur={speed} repeatCount="indefinite" />
        </rect>

        {/* three small stars positioned along the border */}
        <use href="#star" x="8" y="16" width="6" height="6" fill={gradFrom} style={{ transformOrigin: "center" }}>
          <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="2s" repeatCount="indefinite" />
        </use>
        <use href="#star" x="46" y="4" width="6" height="6" fill={gradTo}>
          <animateTransform attributeName="transform" type="scale" values="1;1.3;1" dur="3s" repeatCount="indefinite" />
        </use>
        <use href="#star" x="86" y="16" width="6" height="6" fill={gradFrom}>
          <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="2.5s" repeatCount="indefinite" />
        </use>
      </svg>
    </Tag>
  );
};

export default StarBorder;
