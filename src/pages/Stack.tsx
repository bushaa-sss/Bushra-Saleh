import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

type Tile = { name: string; category: string; hue: string; blurb: string };

const stack: Tile[] = [
  { name: "React", category: "Frontend", hue: "180 100% 55%", blurb: "Component-driven UIs, hooks, Suspense, Router." },
  { name: "TypeScript", category: "Language", hue: "220 100% 65%", blurb: "Typed contracts across the entire app surface." },
  { name: "Next / Vite", category: "Frontend", hue: "265 100% 65%", blurb: "SSR, edge routes, and lightning dev servers." },
  { name: "Tailwind", category: "Styling", hue: "195 100% 60%", blurb: "Design tokens, dark themes, motion utilities." },
  { name: "Node.js", category: "Backend", hue: "82 100% 55%", blurb: "REST + realtime APIs, workers, queues." },
  { name: "MongoDB", category: "Data", hue: "140 80% 55%", blurb: "Flexible schemas for product prototypes." },
  { name: "PostgreSQL", category: "Data", hue: "210 90% 60%", blurb: "Relational modeling, RLS, migrations." },
  { name: "Socket.IO", category: "Realtime", hue: "320 100% 60%", blurb: "Bi-directional streams for live dashboards." },
  { name: "AWS", category: "Cloud", hue: "30 100% 60%", blurb: "EC2, VPC, IAM, RDS deployment case studies." },
  { name: "Python", category: "Language", hue: "50 100% 60%", blurb: "Automation, scraping, ML tooling glue." },
  { name: "OpenCV + YOLOv8", category: "AI", hue: "0 100% 60%", blurb: "Detection pipelines shipped as desktop EXEs." },
  { name: "FaceNet", category: "AI", hue: "290 100% 65%", blurb: "Face embeddings powering smart attendance." },
];

const Stack = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Layout>
      <section className="relative container-wide py-20 md:py-28 noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-70 pointer-events-none" />
        <span
          aria-hidden
          className="absolute -bottom-8 right-0 text-outline font-display font-black uppercase leading-none text-[26vw] lg:text-[16vw] pointer-events-none select-none"
        >
          Stack
        </span>
        <div className="relative z-10">
          <Reveal>
            <p className="text-label mb-6">/ The Stack</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              Tools I use to <span className="text-gradient-bold italic">ship bold things</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg text-foreground/70">
              A living toolkit — from realtime dashboards to AI vision desktops. Hover any tile to
              see how it shows up in my work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {stack.map((tile, i) => {
            const isActive = active === i;
            return (
              <Reveal key={tile.name} delay={i * 50}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group relative w-full aspect-square overflow-hidden border border-border text-left transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-1.2deg] hover:scale-[1.02]"
                  style={{
                    background: isActive
                      ? `radial-gradient(120% 120% at 20% 20%, hsl(${tile.hue} / 0.9), hsl(${tile.hue} / 0.35) 60%, transparent)`
                      : "hsl(var(--card))",
                    boxShadow: isActive ? `0 20px 60px -20px hsl(${tile.hue} / 0.7)` : "none",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `hsl(${tile.hue} / 0.08)` }}
                  />
                  <span className="shine" aria-hidden />
                  <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span
                        className="text-[10px] uppercase tracking-widest px-2 py-1 border"
                        style={{
                          borderColor: `hsl(${tile.hue} / 0.5)`,
                          color: isActive ? "hsl(var(--foreground))" : `hsl(${tile.hue})`,
                        }}
                      >
                        {tile.category}
                      </span>
                      <span className="text-xs text-foreground/40 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-none">
                        {tile.name}
                      </h3>
                      <p
                        className="mt-3 text-xs md:text-sm text-foreground/80 overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isActive ? 120 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        {tile.blurb}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Stack;
