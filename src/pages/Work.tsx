import { Layout } from "@/components/Layout";
import { ExpandingShowcase } from "@/components/ExpandingShowcase";
import { ProjectListItem } from "@/components/ProjectListItem";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

const Work = () => {
  const featured = projects.slice(0, 6);

  return (
    <Layout showEchelonFooter>
      {/* Header */}
      <section className="relative container-wide pt-16 md:pt-24 pb-10 md:pb-14 overflow-hidden">
        {/* outlined watermark */}
        <span
          aria-hidden
          className="absolute -top-6 right-0 text-outline font-display font-black uppercase leading-none text-[26vw] lg:text-[18vw] pointer-events-none select-none"
        >
          Work
        </span>
        <div className="relative z-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Selected Work · 2024 — 2026
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
              Thirteen projects.
              <br />
              <span className="italic text-gradient-bold">One obsession.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Hover a panel to expand it. Explore live products, shipped builds, and detailed
              case studies below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Expanding Showcase — featured six */}
      <section className="container-wide pb-20">
        <Reveal delay={300}>
          <ExpandingShowcase items={featured} />
        </Reveal>
      </section>

      {/* Full index */}
      <section className="pb-24">
        <div className="container-wide mb-8 flex items-end justify-between">
          <Reveal>
            <h2 className="text-headline uppercase">
              Full <span className="text-gradient-bold italic">Index</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-label">
              {String(projects.length).padStart(2, "0")} projects — everything shipped
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="border-t border-separator">
            {projects.map((project, i) => (
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
      </section>
    </Layout>
  );
};

export default Work;
