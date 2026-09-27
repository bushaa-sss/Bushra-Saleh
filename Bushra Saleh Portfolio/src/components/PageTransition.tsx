import { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const COLS = 5;

/**
 * Staggered column-curtain page transition. On exit, red columns rise
 * one after another to cover the screen (with the wordmark flashing in);
 * on enter they fall away in sequence, revealing the new page.
 * Requires <AnimatePresence> around <Routes> (see App.tsx).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      {/* red staggered columns */}
      <div className="fixed inset-0 z-[9991] pointer-events-none flex">
        {Array.from({ length: COLS }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-[hsl(var(--brand-red))]"
            initial={{ scaleY: 1 }}
            animate={{
              scaleY: 0,
              transition: { duration: 0.5, ease: EASE, delay: 0.05 + i * 0.06 },
            }}
            exit={{
              scaleY: 1,
              transition: { duration: 0.4, ease: EASE, delay: (COLS - 1 - i) * 0.05 },
            }}
            style={{ originY: 0 }}
          />
        ))}
      </div>

      {/* trailing dark columns for depth */}
      <div className="fixed inset-0 z-[9990] pointer-events-none flex">
        {Array.from({ length: COLS }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-background"
            initial={{ scaleY: 1 }}
            animate={{
              scaleY: 0,
              transition: { duration: 0.55, ease: EASE, delay: 0.12 + i * 0.06 },
            }}
            exit={{
              scaleY: 1,
              transition: { duration: 0.45, ease: EASE, delay: 0.06 + (COLS - 1 - i) * 0.05 },
            }}
            style={{ originY: 0 }}
          />
        ))}
      </div>

      {/* wordmark flash during the covered moment */}
      <motion.div
        className="fixed inset-0 z-[9992] pointer-events-none flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
        exit={{ opacity: 1, transition: { duration: 0.25, ease: "easeIn", delay: 0.2 } }}
      >
        <span className="font-display font-black uppercase tracking-tight text-3xl md:text-5xl text-white">
          Bushra Saleh<span className="text-white/60">.</span>
        </span>
      </motion.div>

      {/* page content */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.985 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: EASE, delay: 0.35 },
        }}
        exit={{
          opacity: 0,
          y: -24,
          scale: 0.99,
          transition: { duration: 0.35, ease: EASE },
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
