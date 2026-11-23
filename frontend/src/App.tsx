import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { About } from './components/About';
import { Apps } from './components/Apps';
import { ContactSection, Footer } from './components/ContactSection';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { Work } from './components/Work';
import { Cursor } from './components/ui/Cursor';

/** Eased wheel scrolling. Touch scrolling and reduced-motion visitors keep the native behaviour. */
function useSmoothScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const lenis = new Lenis({ lerp: 0.11, anchors: true });
    let frame = requestAnimationFrame(function tick(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [enabled]);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);
  const reduced = useReducedMotion();
  useSmoothScroll(!loading && !reduced);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="preloader" onDone={finishLoading} />}</AnimatePresence>
      <a href="#work" className="btn fixed left-4 top-4 z-[70] -translate-y-24 focus-visible:translate-y-0">
        Skip to work
      </a>
      {!loading && <Navbar />}
      <Cursor />
      <main>
        <Hero ready={!loading} />
        <Work />
        <Apps />
        <About />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  );
}
