import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectListItemProps {
  id: string;
  title: string;
  tags: string[];
  year: string;
  image: string;
  index: number;
}

export function ProjectListItem({
  id,
  title,
  tags,
  year,
  image,
  index,
}: ProjectListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/work/${id}`}
      className="group relative block border-b border-separator overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 60}ms both`,
      }}
    >
      {/* Sliding hover background */}
      <span
        aria-hidden
        className="absolute inset-0 bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-smooth"
      />

      <div className="container-wide py-5 md:py-6 relative z-10">
        <div className="flex items-center justify-between gap-4">
          {/* Index number */}
          <span
            className={`hidden md:inline-block w-10 text-xs tabular-nums tracking-widest transition-colors duration-500 ${
              isHovered ? "text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title with double-layer scroll reveal */}
          <div className="flex-1 relative overflow-hidden text-lg md:text-xl lg:text-2xl h-[1.5em]">
            <h3
              className={`leading-[1.5] font-sans uppercase tracking-wide transition-transform duration-500 ease-smooth ${
                isHovered ? "-translate-y-full" : "translate-y-0"
              } ${isHovered ? "text-accent-foreground" : "text-foreground"}`}
            >
              {title}
            </h3>
            <h3
              aria-hidden
              className={`absolute inset-0 leading-[1.5] font-sans italic uppercase tracking-[0.18em] transition-transform duration-500 ease-smooth ${
                isHovered ? "translate-y-0 text-accent-foreground" : "translate-y-full"
              }`}
            >
              {title}
            </h3>
          </div>

          {/* Tags */}
          <div className="hidden sm:flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 border transition-colors duration-500 ${
                  isHovered
                    ? "border-accent-foreground text-accent-foreground"
                    : "border-separator text-muted-foreground"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <span
            className={`text-xs md:text-sm uppercase tracking-widest transition-colors duration-500 ${
              isHovered ? "text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            {year}
          </span>

          {/* Arrow */}
          <span
            className={`hidden md:inline-flex items-center justify-center w-8 h-8 transition-all duration-500 ${
              isHovered
                ? "text-accent-foreground translate-x-0 opacity-100"
                : "text-muted-foreground -translate-x-2 opacity-60"
            }`}
            aria-hidden
          >
            →
          </span>


          {/* Hover Image */}
          <div
            className={`fixed right-8 lg:right-32 top-1/2 w-64 lg:w-80 aspect-[3/4] pointer-events-none z-40 overflow-hidden transition-all duration-700 ease-smooth ${
              isHovered
                ? "opacity-100 -translate-y-1/2 scale-100"
                : "opacity-0 -translate-y-[40%] scale-95"
            }`}
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-1400 ease-smooth ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary px-8 text-center text-label">
                Image coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
