import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, Github, Linkedin, FileDown, ArrowUpRight } from "lucide-react";
import { RESUME_URL } from "@/data/projects";
import contactPortrait from "@/assets/contact.png";
import resume from "@/assets/Bushra Saleh.pdf";
const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-label">06 / Contact</p>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[hsl(var(--brand-red))] border border-[hsl(var(--brand-red)/0.4)] px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-red))] animate-pulse" />
                    Available now
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
                  Let's build something<br />
                  <span className="italic text-gradient-bold">memorable.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Open to portfolio projects, freelance builds, dashboard concepts, AI workflows,
                  mobile app workflows, automation, and cloud-ready deployments from Karachi, Pakistan.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-3 gap-6 border-y border-separator py-6">
              <div>
                <p className="text-label mb-1">Response</p>
                <p className="text-sm">24 hour reply</p>
              </div>
              <div>
                <p className="text-label mb-1">Scope</p>
                <p className="text-sm">Web + cloud</p>
              </div>
              <div>
                <p className="text-label mb-1">Based in</p>
                <p className="text-sm">Karachi, PK</p>
              </div>
            </div>

            <Reveal delay={250}>
              <div className="divide-y divide-separator border-y border-separator">
                {[
                  { icon: Mail, label: "bushra.saleh123@gmail.com", href: "mailto:bushra.saleh123@gmail.com" },
                  { icon: Phone, label: "0334 9048577", href: "tel:03349048577" },
                  { icon: Github, label: "GitHub", href: "https://github.com/bushaa-sss", external: true },
                  { icon: Linkedin, label: "Bushra Saleh", href: "https://www.linkedin.com/in/bushra-saleh-239b36146/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEuGCqnfKQmOLj0KDJId%2FCA%3D%3D", external: true },
                  { icon: FileDown, label: "Download resume", href: resume, external: true },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 py-4 text-base md:text-lg transition-all duration-300 hover:pl-3"
                  >
                    <span className="flex items-center gap-4">
                      <item.icon
                        size={20}
                        className="text-muted-foreground transition-colors duration-300 group-hover:text-[hsl(var(--brand-red))]"
                      />
                      <span className="transition-colors duration-300 group-hover:text-[hsl(var(--brand-red))]">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[hsl(var(--brand-red))]"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <div className="hidden lg:block">
            <Reveal delay={200}>
              <div className="group relative">
                <div className="absolute -inset-3 border border-[hsl(var(--brand-red)/0.5)] -translate-x-4 translate-y-4 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2" />
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                  <img
                    src={contactPortrait}
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
    </Layout>
  );
};

export default Contact;
