import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { CustomCursor } from "./CustomCursor";

interface LayoutProps {
  children: ReactNode;
  hideFooter?: boolean;
  noPadding?: boolean;
  showEchelonFooter?: boolean;
  headerRevealMode?: boolean;
}

export function Layout({ 
  children, 
  hideFooter = false, 
  noPadding = false,
  showEchelonFooter = false,
  headerRevealMode = false,
}: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      {/* scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-[hsl(var(--brand-red))] origin-left shadow-[0_0_12px_hsl(var(--brand-red)/0.6)]"
        style={{ scaleX: progress }}
      />
      <Header revealMode={headerRevealMode} />
      <main className={`flex-1 ${noPadding ? '' : 'pt-20 md:pt-24'}`}>
        <PageTransition>{children}</PageTransition>
      </main>
      {!hideFooter && (
        <Footer variant={showEchelonFooter ? "echelon" : "default"} />
      )}
    </div>
  );
}
