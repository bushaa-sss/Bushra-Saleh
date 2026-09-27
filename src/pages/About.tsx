import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { RESUME_URL } from "@/data/projects";
import aboutPortrait from "@/assets/about.png";

const focusAreas = [
  {
    n: "01",
    title: "Full-Stack Product Development",
    body: "End-to-end web applications covering responsive interfaces, REST APIs, authentication, databases, and business workflows.",
  },
  {
    n: "02",
    title: "Mobile App Development",
    body: "Cross-platform mobile applications built with React Native and Expo, including API integration, authentication, booking flows, and real-world user workflows.",
  },
  {
    n: "03",
    title: "AI & Real-Time Systems",
    body: "AI-powered analysis tools and real-time applications using intelligent data workflows, WebSockets, live telemetry, monitoring, and operational dashboards.",
  },
  {
    n: "04",
    title: "Production & Cloud Deployment",
    body: "Deploying and maintaining applications across Vercel, Netlify, VPS infrastructure, AWS, Nginx, PM2, databases, and production environments.",
  },
];

const skillGroups = [
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5 / CSS3"] },
  { label: "Mobile", items: ["React Native", "Expo", "AsyncStorage", "API Integration", "Responsive Mobile UI"] },
  { label: "Backend & Data", items: ["Node.js", "Express.js", "MongoDB", "SQL Server", "REST APIs", "Python"] },
  { label: "Cloud & Deployment", items: ["AWS EC2", "IAM", "VPC", "RDS", "Vercel", "Netlify", "Nginx", "PM2", "Docker"] },
  { label: "AI & Data", items: ["Computer Vision", "Deep Learning", "Python Data Processing", "Power BI"] },
  { label: "Workflow", items: ["Git", "GitHub", "Postman", "Figma", "VS Code"] },
];

const experience = [
  {
    period: "2026 — Present",
    role: "Software Developer",
    body: "Working with CrafTech Technologies remotely on client-facing web and mobile products, from interface development through API integration and ongoing delivery.",
    tags: ["React", "React Native", "APIs", "WordPress"],
  },
  {
    period: "2025 — Present",
    role: "Freelance Software Engineer",
    body: "Turning client requirements into responsive websites, dashboards, mobile workflows, and technical prototypes across Karachi and remote engagements.",
    tags: ["Web Apps", "Dashboards", "Mobile Products"],
  },
  {
    period: "July 2025 — November 2025",
    role: "Junior WordPress Developer",
    body: "SOFT HOUZE (Pvt.) Ltd. · Internship. Customized WordPress themes and plugins, improved HTML/CSS/JavaScript interfaces, and troubleshot layout, functionality, and compatibility issues across client websites.",
    tags: ["WordPress", "Theme Customization", "Plugin Customization", "HTML / CSS / JavaScript"],
  },
  {
    period: "Full-stack",
    role: "Web Applications & API Services",
    body: "Building responsive products and backend services with React, Node.js, Express, MongoDB, SQL Server, and REST APIs across authentication, business logic, and data operations.",
    tags: ["Node.js", "Express", "MongoDB", "SQL Server"],
  },
  {
    period: "Mobile delivery",
    role: "Cross-platform Application Development",
    body: "Creating React Native and Expo applications with authentication, API-connected booking flows, QR processes, and practical workflows for real users.",
    tags: ["React Native", "Expo", "Authentication", "API Integration"],
  },
  {
    period: "Product systems",
    role: "AI, Automation & Real-time Workflows",
    body: "Developing AI-assisted analysis concepts, Python data workflows, WebSocket applications, live telemetry, monitoring dashboards, and structured reporting tools.",
    tags: ["Python", "Scraping", "WebSockets", "Automation"],
  },
  {
    period: "Production delivery",
    role: "Deployment & Technical Handoff",
    body: "Deploying applications across Vercel, Netlify, AWS, VPS infrastructure, Nginx, PM2, and self-hosted databases while preparing SRS, UML, architecture, and handoff materials.",
    tags: ["AWS", "Vercel", "Nginx", "PM2", "SRS", "UML"],
  },
];

const About = () => {
  return (
    <Layout showEchelonFooter>
      {/* Intro */}
      <section className="container-wide pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-label">01 / About</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              Building work that<br />feels alive.
            </h1>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
              <p>
                I'm <span className="text-foreground">Bushra Saleh</span>, a software developer focused
                on building full-stack web and mobile applications. I work across the product stack - from
                responsive interfaces and API development to databases, authentication, real-time systems,
                and production deployment.
              </p>
              <p>
                My work spans practical products and technical experiments, including travel and booking
                platforms, healthcare and AI-powered analysis tools, real-time monitoring systems, and
                production websites for businesses. I enjoy taking an idea from requirements to a working
                product and solving the engineering problems that come with it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest border border-foreground/40 px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <Reveal delay={200}>
              <div className="group relative">
                {/* offset red frame */}
                <div className="absolute -inset-3 border border-[hsl(var(--brand-red)/0.5)] translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                  <img
                    src={aboutPortrait}
                    alt="Bushra Saleh"
                    className="w-full h-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <span className="shine" aria-hidden />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="container-wide pb-16 md:pb-24">
        <Reveal>
          <p className="text-label mb-8">Focus areas</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-separator border border-separator">
          {focusAreas.map((f, i) => (
            <Reveal key={f.n} delay={i * 90}>
              <div className="group relative bg-background p-8 md:p-10 space-y-3 h-full overflow-hidden transition-colors duration-500 hover:bg-[hsl(var(--hover-bg))]">
                {/* giant ghost number */}
                <span
                  aria-hidden
                  className="absolute -top-4 -right-2 text-outline font-display font-black text-8xl md:text-9xl opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none select-none"
                >
                  {f.n}
                </span>
                <p className="text-label transition-colors duration-300 group-hover:text-[hsl(var(--brand-red))]">
                  {f.n}
                </p>
                <h3 className="font-display text-2xl md:text-3xl transition-transform duration-500 group-hover:translate-x-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
                {/* red baseline sweep */}
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[hsl(var(--brand-red))] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container-wide pb-16 md:pb-24">
        <p className="text-label mb-8">03 / Experience</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-[0.95]">
          Freelance work from<br />brief to build.
        </h2>
        <div className="space-y-px bg-separator border-y border-separator">
          {experience.map((e) => (
            <div
              key={e.role}
              className="group bg-background py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 hover:bg-[hsl(var(--hover-bg))] hover:pl-4"
            >
              <p className="md:col-span-3 text-label pt-1">{e.period}</p>
              <div className="md:col-span-6 space-y-2">
                <h3 className="font-display text-2xl md:text-3xl">{e.role}</h3>
                <p className="text-muted-foreground leading-relaxed">{e.body}</p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end items-start">
                {e.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest border border-separator px-3 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container-wide pb-24">
        <p className="text-label mb-8">04 / Technical skills</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-[0.95]">
          The stack behind<br />my builds.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((g, i) => (
            <div key={g.label} className="space-y-4 border-t border-separator pt-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl">{g.label}</h3>
                <span className="text-label">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm border border-separator px-3 py-1 transition-all duration-300 hover:border-[hsl(var(--brand-red))] hover:text-[hsl(var(--brand-red))] hover:-translate-y-0.5 cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
