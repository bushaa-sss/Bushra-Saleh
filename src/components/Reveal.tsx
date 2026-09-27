import { ReactNode, CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as: Tag = "div",
  style,
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
        transition: `opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
