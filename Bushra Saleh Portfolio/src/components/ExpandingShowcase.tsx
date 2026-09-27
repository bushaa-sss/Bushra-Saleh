import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface Props {
  items: Project[];
}

export const ExpandingShowcase = ({ items }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      {/* Desktop expanding panels */}
      <div className="hidden lg:flex h-[600px] w-full gap-2 overflow-hidden rounded-3xl">
        {items.map((item, index) => {
          const isActive = active === index;
          return (
            <motion.article
              key={item.id}
              onMouseEnter={() => setActive(index)}
              style={{
                flexGrow: isActive ? 16 : 1,
                flexBasis: 0,
                transition: "flex-grow 700ms cubic-bezier(0.22,1,0.36,1)",
              }}
              className="relative min-w-[64px] overflow-hidden rounded-2xl cursor-pointer group"
            >
              {item.coverImage ? (
                <motion.img
                  src={item.coverImage}
                  alt={item.title}
                  loading="lazy"
                  animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1.02 : 1.2 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-secondary" />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Red accent bar */}
              <motion.div
                animate={{ opacity: isActive ? 1 : 0.6, height: isActive ? "100%" : "40%" }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-primary to-transparent"
              />

              {/* Collapsed: vertical title */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-end justify-center pb-6"
                  >
                    <span
                      className="font-display text-sm font-bold uppercase tracking-widest text-white/80"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {String(index + 1).padStart(2, "0")} — {item.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="relative z-10 flex h-full flex-col justify-between p-8 text-white"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs tracking-widest text-primary">
                        {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                      </span>
                      {item.status && (
                        <span className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur-sm">
                          {item.status}
                        </span>
                      )}
                    </div>

                    <div className="max-w-xl space-y-4">
                      <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                        {item.category} · {item.year}
                      </p>
                      <h3 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
                        {item.title}
                      </h3>
                      <p className="text-base text-white/80 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Link
                          to={`/work/${item.id}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-black transition hover:bg-primary hover:text-white"
                        >
                          View Case
                        </Link>
                        {(item.liveUrl || item.downloadUrl) && (
                          <a
                            href={item.downloadUrl || item.liveUrl}
                            download={item.downloadUrl ? true : undefined}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:border-primary hover:text-primary"
                          >
                            {item.downloadUrl ? "Download EXE" : "Live"} <ArrowUpRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* Mobile accordion */}
      <div className="flex flex-col gap-3 lg:hidden">
        {items.map((item, index) => {
          const isActive = active === index;
          return (
            <motion.article
              key={item.id}
              onClick={() => setActive(index)}
              animate={{ height: isActive ? 460 : 96 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl bg-secondary cursor-pointer"
            >
              {item.coverImage ? (
                <motion.img
                  src={item.coverImage}
                  alt={item.title}
                  loading="lazy"
                  animate={{ opacity: isActive ? 0.9 : 0.35 }}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-secondary" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              <div className="relative flex h-full flex-col p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.status && (
                    <span className="rounded-full border border-primary/50 bg-primary/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold">{item.title}</h3>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mt-auto space-y-3"
                    >
                      <p className="text-sm text-white/80 line-clamp-3">{item.description}</p>
                      <div className="flex gap-2">
                        <Link
                          to={`/work/${item.id}`}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-black"
                        >
                          View Case
                        </Link>
                        {(item.liveUrl || item.downloadUrl) && (
                          <a
                            href={item.downloadUrl || item.liveUrl}
                            download={item.downloadUrl ? true : undefined}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-white/30 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest"
                          >
                            {item.downloadUrl ? "Download EXE" : "Live"} <ArrowUpRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};
