import { useParams, Navigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Boxes,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Play,
  Quote,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const StackIcon = ({ tag, className = "" }: { tag: string; className?: string }) => {
  const normalizedTag = tag.toLowerCase();

  if (normalizedTag.includes("mongo") || normalizedTag.includes("sql")) {
    return <Database className={className} size={15} strokeWidth={2.2} />;
  }
  if (normalizedTag.includes("node") || normalizedTag.includes("express") || normalizedTag.includes("server")) {
    return <Server className={className} size={15} strokeWidth={2.2} />;
  }
  if (normalizedTag.includes("jwt") || normalizedTag.includes("auth")) {
    return <ShieldCheck className={className} size={15} strokeWidth={2.2} />;
  }
  if (normalizedTag.includes("netlify") || normalizedTag.includes("vercel") || normalizedTag.includes("web")) {
    return <Globe2 className={className} size={15} strokeWidth={2.2} />;
  }
  if (normalizedTag.includes("react") || normalizedTag.includes("python") || normalizedTag.includes("code")) {
    return <Code2 className={className} size={15} strokeWidth={2.2} />;
  }
  return <Boxes className={className} size={15} strokeWidth={2.2} />;
};


const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <Layout noPadding headerRevealMode showEchelonFooter>
      {/* Hero - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary" />
        )}
        <div className="absolute inset-0 bg-background/30" />
        
        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground text-center px-4 animate-fade-in">
            {project.title}
          </h1>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-8 left-0 right-0 z-10 container-wide">
          <div className="flex justify-between items-end">
            {/* Date */}
            <div className="text-label text-foreground/90">
              {project.year}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-end gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 border border-foreground/50 bg-background/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-foreground"
                >
                  <StackIcon tag={tag} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="container-wide border-y border-border/80 bg-card/30 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Details */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-label mb-2">Role</p>
              <p className="text-foreground/90">{project.client}</p>
            </div>
            <div className="space-y-3">
              <p className="text-label mb-2">Year</p>
              <p className="text-foreground/90">{project.year}</p>
            </div>
            {project.status && (
              <div className="space-y-3">
                <p className="text-label mb-2">Status</p>
                <p className="inline-flex border border-accent/60 bg-accent/10 px-3 py-1 text-sm font-semibold text-foreground">
                  {project.status}
                </p>
              </div>
            )}
            <div className="space-y-3">
              <p className="text-label mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 border border-border bg-secondary/70 px-3 py-2 text-sm font-medium text-foreground"
                  >
                    <StackIcon tag={tag} className="text-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-border/80 pt-6">
              {(project.liveUrl || project.downloadUrl) && (
                <a
                  href={project.downloadUrl || project.liveUrl}
                  download={project.downloadUrl ? true : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 py-3 text-xs font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  {project.downloadUrl ? "Download EXE" : "Live demo"} <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground/70 bg-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
                >
                  GitHub <Github size={16} />
                </a>
              )}
              {project.walkthroughUrl && (
                <a
                  href="#walkthrough"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-border bg-secondary px-5 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Watch walkthrough <Play size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <p className="text-xl leading-relaxed text-foreground/85 md:text-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {project.testimonial && (
        <section className="container-wide py-16 md:py-24">
          <div className="border border-border/80 bg-secondary/50 p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3 text-accent">
              <Quote size={24} />
              <p className="text-label text-foreground/70">Client feedback</p>
            </div>
            <blockquote className="max-w-4xl font-display text-2xl font-bold leading-tight text-foreground md:text-4xl">
              “{project.testimonial.quote}”
            </blockquote>
            <footer className="mt-8 border-t border-border/80 pt-5 text-sm text-foreground/70">
              <span className="font-semibold text-foreground">{project.testimonial.name}</span>
              <span className="mx-2 text-accent">/</span>
              {project.testimonial.role}, {project.testimonial.company}
            </footer>
          </div>
        </section>
      )}

      {project.caseStudy && (
        <>
          <section className="container-wide pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              <div>
                <p className="text-label mb-4">Project overview</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold">Built for better journeys.</h2>
              </div>
              <p className="md:col-span-2 text-lg leading-relaxed text-foreground/80 md:text-xl">
                {project.caseStudy.overview}
              </p>
            </div>
          </section>

          {project.walkthroughUrl && (
            <section id="walkthrough" className="container-wide pb-20 md:pb-28">
              <div className="mb-8">
                <p className="text-label mb-3">How it works</p>
                <h2 className="text-headline">Watch the walkthrough.</h2>
              </div>
              <video
                controls
                preload="metadata"
                autoPlay={project.walkthroughAutoplay}
                muted={project.walkthroughMuted}
                loop={project.walkthroughLoop}
                playsInline
                className="w-full bg-secondary"
                aria-label={`${project.title} walkthrough`}
              >
                <source src={project.walkthroughUrl} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </section>
          )}

          <section className="container-wide pb-20 md:pb-28">
            <div className="mb-8">
              <p className="text-label mb-3">What is built</p>
              <h2 className="text-headline">Key features.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {project.caseStudy.features.map((feature, index) => (
                <article key={feature.title} className="border border-border/80 bg-card/60 p-5">
                  <p className="text-label mb-3">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                  <p className="leading-relaxed text-foreground/75">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="container-wide pb-20 md:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-label mb-3">System design</p>
                <h2 className="text-headline mb-8">Technical architecture.</h2>
                <div className="space-y-8">
                  {project.caseStudy.architecture.map((item) => (
                    <article key={item.title} className="border border-border/80 bg-card/60 p-5">
                      <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                      <p className="leading-relaxed text-foreground/75">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label mb-3">Engineering details</p>
                <h2 className="text-headline mb-8">Technical implementation.</h2>
                <div className="space-y-8">
                  {project.caseStudy.implementation.map((item) => (
                    <article key={item.title} className="border border-border/80 bg-card/60 p-5">
                      <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                      <p className="leading-relaxed text-foreground/75">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container-wide pb-24">
            <div className="mb-8">
              <p className="text-label mb-3">Lessons from the build</p>
              <h2 className="text-headline">Challenges & solutions.</h2>
            </div>
            <div className="space-y-8">
              {project.caseStudy.challenges.map((item) => (
                <article key={item.challenge} className="grid grid-cols-1 gap-6 border border-border/80 bg-card/60 p-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-label mb-2">Challenge</p>
                    <p className="text-lg">{item.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-label mb-2">Solution</p>
                    <p className="leading-relaxed text-foreground/75">{item.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="container-wide pb-24">
          <div className="image-reveal animate-fade-in-up">
            <img
              src={project.images[0]}
              alt={`${project.title} - 1`}
              className="w-full"
            />
          </div>
          {project.images.length > 1 && (
            <div
              className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4"
              aria-label={`${project.title} screenshots`}
            >
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="image-reveal animate-fade-in-up min-w-[82%] snap-start sm:min-w-[60%] lg:min-w-[48%]"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 2}`}
                    className="h-[260px] w-full bg-secondary/30 object-contain sm:h-[340px] lg:h-[420px]"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Back Link */}
      <section className="container-wide pb-24">
        <Link
          to="/work"
          className="inline-flex items-center gap-3 text-muted-foreground hover-highlight group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to projects</span>
        </Link>
      </section>
    </Layout>
  );
};

export default Project;
