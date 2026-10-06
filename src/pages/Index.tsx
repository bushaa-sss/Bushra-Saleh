import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { ProjectListItem } from "@/components/ProjectListItem";
import { PORTRAIT_URL, projects } from "@/data/projects";

const Hero3D = lazy(() => import("@/components/Hero3D"));

// Photos shown on the 3D rotating profile screen. Add more portrait
// URLs here (e.g. import them from src/assets) and the screen becomes
// a revolving carousel that shows each photo in turn.
const HERO_IMAGES = [PORTRAIT_URL];

const MARQUEE_ITEMS = [
  "Web Developer",
  "Software Developer",
  "Full-Stack Developer",
  "UI & UX Designer",
  "React",
  "Next.js",
  "Figma",
  "Freelancer",
  "Karachi",
];

/** Live clock in Karachi time — ticks every second. */
function useKarachiClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Karachi",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const clock = useKarachiClock();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setMouse({
      x: (e.clientX - rect.left - cx) / cx,
      y: (e.clientY - rect.top - cy) / cy,
    });
  };

  useEffect(() => {
    document.title = "Bushra Saleh — Software Developer | Full-Stack & Mobile";
  }, []);

  return (
    <Layout noPadding>
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen overflow-hidden bg-background noise-overlay"
      >
        {/* Red radial glow behind portrait */}
        <div
          className="absolute inset-0 pointer-events-none will-transform"
          style={{
            background:
              "radial-gradient(50% 55% at 78% 55%, hsl(var(--brand-red) / 0.55) 0%, hsl(var(--brand-red) / 0.15) 40%, transparent 70%)",
            transform: `translate3d(${mouse.x * -20}px, ${mouse.y * -20}px, 0)`,
            transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 0% / 0.55) 100%)",
          }}
        />

        {/* giant outlined watermark with parallax */}
        <div
          aria-hidden
          className="absolute bottom-[6vh] left-0 right-0 z-0 pointer-events-none select-none overflow-hidden will-transform"
          style={{
            transform: `translate3d(${mouse.x * -30}px, ${mouse.y * -10}px, 0)`,
            transition: "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <span className="text-outline font-display font-black uppercase whitespace-nowrap leading-none text-[20vw] block text-center">
            Portfolio ✦ 2026
          </span>
        </div>

        {/* corner label like reference */}
        <div
          className="absolute top-24 md:top-28 left-6 md:left-12 z-20 animate-fade-in-up"
          style={{ animationDelay: "150ms", opacity: 0 }}
        >
          <p className="text-label tracking-[0.35em]">Hi, i am Bushra*</p>
        </div>

        <div className="relative z-10 container-wide min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-32 lg:pt-24 pb-16">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            <h1
              className="font-display font-black tracking-tight leading-[0.9] text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] uppercase animate-blur-in"
              style={{ animationDelay: "250ms", opacity: 0 }}
            >
              <span className="block">Hi, I am</span>
              <span className="block">
                <span className="text-foreground">Bush</span>
                <span className="text-gradient-bold italic">ra</span>
              </span>
              <span className="block">
                <span className="text-gradient-bold italic">Sa</span>
                <span className="text-foreground">leh</span>
              </span>
            </h1>

            {/* Red pill tag */}
            <div
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "550ms", opacity: 0 }}
            >
              <span className="inline-block bg-[hsl(var(--brand-red))] text-white text-[11px] md:text-sm uppercase tracking-[0.25em] font-semibold px-5 md:px-6 py-3 shadow-[0_10px_30px_-10px_hsl(var(--brand-red)/0.6)]">
                SOFTWARE DEVELOPER &nbsp;|&nbsp; FULL-STACK &amp; MOBILE &nbsp;|&nbsp; JAVASCRIPT
              </span>
            </div>

            {/* CTA row */}
            <div
              className="flex items-center gap-5 pt-4 animate-fade-in-up"
              style={{ animationDelay: "750ms", opacity: 0 }}
            >
              <Magnetic>
                <Link
                  to="/about"
                  className="group flex items-center gap-4 hover-highlight"
                >
                  <span className="w-14 h-14 rounded-full bg-[hsl(var(--brand-red))] text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-[0_10px_40px_-8px_hsl(var(--brand-red)/0.7)]">
                    <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-foreground">
                    Find out more
                  </span>
                </Link>
              </Magnetic>

              <Magnetic>
                <Link
                  to="/work"
                  className="hidden md:inline-block text-xs uppercase tracking-[0.3em] font-semibold text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
                >
                  See projects
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Right portrait — 3D rotating profile screen */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end">
            <div
              className="relative w-full h-[68vh] lg:h-[92vh] lg:-mr-8 xl:-mr-16 animate-fade-in"
              style={{ animationDelay: "400ms", opacity: 0 }}
            >
              {/* soft red glow behind the screen */}
              <div
                className="absolute inset-8 rounded-full blur-3xl opacity-50 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--brand-red) / 0.7), transparent 70%)",
                  animation: "float-slow 7s ease-in-out infinite",
                }}
              />
              {reducedMotion ? (
                <img
                  src={PORTRAIT_URL}
                  alt="Bushra Saleh — Web Developer"
                  className="relative z-10 h-full w-auto mx-auto object-contain drop-shadow-[0_30px_60px_hsl(0_0%_0%/0.6)]"
                />
              ) : (
                <Suspense
                  fallback={
                    <img
                      src={PORTRAIT_URL}
                      alt="Bushra Saleh — Web Developer"
                      className="relative z-10 h-full w-auto mx-auto object-contain drop-shadow-[0_30px_60px_hsl(0_0%_0%/0.6)]"
                    />
                  }
                >
                  <Hero3D images={HERO_IMAGES} mouse={mouse} />
                </Suspense>
              )}
              {/* handwritten annotation */}
              <div
                className="absolute bottom-4 left-2 md:left-6 z-20 text-foreground/80 text-sm md:text-base italic rotate-[-6deg] animate-fade-in-up"
                style={{ animationDelay: "1000ms", opacity: 0, fontFamily: "'Syne', cursive" }}
              >
                <span className="inline-block">↖ my craft</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom labels */}
        <div
          className="absolute bottom-8 left-6 md:left-12 z-20 text-label animate-fade-in-up"
          style={{ animationDelay: "1100ms", opacity: 0 }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--brand-red))] animate-pulse" />
            Karachi {clock && `· ${clock} PKT`} · Available for freelance
          </span>
        </div>
        <div
          className="absolute bottom-8 right-6 md:right-12 z-20 text-right animate-fade-in-up"
          style={{ animationDelay: "1200ms", opacity: 0 }}
        >
          <p className="text-label">React · Next.js · Figma</p>
          <p className="text-label mt-2">Portfolio — 2026</p>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-70">
          <div className="w-px h-10 bg-foreground/40 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-[hsl(var(--brand-red))]"
              style={{
                height: "40%",
                animation: "scroll-hint 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Red marquee band ── */}
      <section className="relative py-10 overflow-hidden bg-background">
        <div className="rotate-[-1.5deg] scale-105 bg-[hsl(var(--brand-red))] shadow-[0_20px_60px_-20px_hsl(var(--brand-red)/0.5)]">
          <div className="marquee-track py-4">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {MARQUEE_ITEMS.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center text-white font-display font-bold uppercase tracking-[0.2em] text-sm md:text-lg whitespace-nowrap"
                  >
                    <span className="px-6 md:px-10">{item}</span>
                    <span className="text-white/70">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="relative bg-background pt-20 pb-24">
        <div className="container-wide mb-10 flex items-end justify-between">
          <Reveal>
            <h2 className="text-headline uppercase">
              Selected <span className="text-gradient-bold italic">Work</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/work"
              className="hidden md:inline-block text-xs uppercase tracking-[0.3em] font-semibold text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
            >
              All projects →
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <div className="border-t border-separator">
            {projects.slice(0, 4).map((project, i) => (
              <ProjectListItem
                key={project.id}
                id={project.id}
                title={project.title}
                tags={project.tags.slice(0, 2)}
                year={project.year}
                image={project.coverImage}
                index={i}
              />
            ))}
          </div>
        </Reveal>

        {/* big CTA */}
        <Reveal delay={150}>
          <div className="container-wide mt-20 text-center">
            <Magnetic>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-5"
              >
                <span className="font-display font-black uppercase tracking-tight text-3xl md:text-5xl text-foreground group-hover:text-[hsl(var(--brand-red))] transition-colors duration-500">
                  Let's build something
                </span>
                <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(var(--brand-red))] text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-35deg] shadow-[0_10px_40px_-8px_hsl(var(--brand-red)/0.7)]">
                  <ArrowRight size={24} />
                </span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      {/* ── Client feedback ── */}
      <section className="relative bg-secondary/30 py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-label mb-3">Client feedback</p>
                <h2 className="text-headline uppercase">
                  Words from <span className="text-gradient-bold italic">the people</span>
                </h2>
              </div>
              <Quote className="hidden text-[hsl(var(--brand-red))] md:block" size={42} />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.filter((project) => project.testimonial).map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <article className="flex h-full flex-col border border-border/80 bg-card/70 p-6 md:p-8">
                  <Quote className="mb-6 text-[hsl(var(--brand-red))]" size={24} />
                  <blockquote className="flex-1 font-display text-xl font-bold leading-tight text-foreground md:text-2xl">
                    “{project.testimonial?.quote}”
                  </blockquote>
                  <footer className="mt-8 border-t border-border/80 pt-4 text-sm text-foreground/70">
                    <Link to={`/project/${project.id}`} className="font-semibold text-foreground hover:text-[hsl(var(--brand-red))] transition-colors">
                      {project.testimonial?.name}
                    </Link>
                    <span className="mx-2 text-[hsl(var(--brand-red))]">/</span>
                    {project.testimonial?.role}, {project.testimonial?.company}
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
      `}</style>
    </Layout>
  );
};

export default Index;
