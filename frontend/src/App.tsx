import { useCallback, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { AppStories } from './components/AppStories';
import { ContactSection, Footer } from './components/ContactSection';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { SkillsSection } from './components/SkillsSection';
import { WebWork } from './components/WebWork';

export default function App() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="preloader" onDone={finishLoading} />}</AnimatePresence>
      <a
        href="#work"
        className="btn btn-dark fixed left-4 top-4 z-[70] -translate-y-24 focus-visible:translate-y-0"
      >
        Skip to work
      </a>
      {!loading && <Navbar />}
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <About />
        <WebWork />
        <AppStories />
        <Experience />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  );
}
