import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { webProjects, type WebProject } from '../data/portfolio';
import { ease, useMediaQuery } from '../lib/motion';
import { BrowserFrame } from './ui/BrowserFrame';
import { RevealText } from './ui/RevealText';
import { SectionLabel } from './ui/SectionLabel';

function ProjectPanel({ project, index }: { project: WebProject; index: number }) {
  const { theme } = project;

  return (
    <motion.article
      initial={{ opacity: 0.35, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.35 }}
      transition={{ duration: 0.7, ease: ease.out }}
      style={{ backgroundColor: theme.bg, color: theme.fg }}
      className="chamfer-lg grid w-full shrink-0 gap-8 p-6 sm:p-9 lg:h-full lg:w-[min(76vw,1180px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-12 lg:p-12"
    >
      <div className="flex min-w-0 flex-col">
        <p className="label flex flex-wrap items-center gap-x-4 gap-y-2 opacity-70">
          <span style={{ color: theme.accent }} className="opacity-100">
            0{index + 1} / 0{webProjects.length}
          </span>
          <span>{project.origin}</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} /> {project.market}
          </span>
        </p>

        <h3 className="display mt-5 text-display-md">{project.name}</h3>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.08em]" style={{ color: theme.accent }}>
          {project.kind}
        </p>

        <p className="mt-5 max-w-[46ch] leading-relaxed opacity-80">{project.summary}</p>

        <ul className="mt-6 grid gap-2.5 text-sm [@media(max-height:780px)_and_(min-width:1024px)]:hidden">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 opacity-85">
              <span
                aria-hidden="true"
                className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45"
                style={{ backgroundColor: theme.accent }}
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip opacity-80">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group/link label mt-8 inline-flex w-fit items-center gap-3 border-b pb-2 transition-[gap] duration-300 hover:gap-5"
          style={{ borderColor: theme.accent }}
        >
          Visit {project.displayUrl}
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} in a new tab`}
        className="frame-pan block min-w-0 transition-transform duration-700 ease-out hover:-translate-y-2"
      >
        <BrowserFrame src={project.imageFull} alt={`${project.name} homepage`} url={project.displayUrl} />
        <p className="label mt-4 opacity-55">{project.note ?? 'Hover to scroll the page'}</p>
      </a>
    </motion.article>
  );
}

export function WebWork() {
  const desktop = useMediaQuery('(min-width: 1024px)');
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef(0);
  const [distance, setDistance] = useState(0);
  const [current, setCurrent] = useState(1);

  // How far the track must travel so its last panel ends flush with the viewport.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !desktop) {
      distanceRef.current = 0;
      setDistance(0);
      return;
    }
    const measure = () => {
      const next = Math.max(track.scrollWidth - window.innerWidth, 0);
      distanceRef.current = next;
      setDistance(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [desktop]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const rawX = useTransform(scrollYProgress, (value) => -value * distanceRef.current);
  const x = useSpring(rawX, { stiffness: 140, damping: 30, mass: 0.35 });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setCurrent(Math.min(webProjects.length, Math.max(1, Math.ceil(value * webProjects.length + 0.15))));
  });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-paper"
      style={desktop ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className="flex flex-col py-section lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:pb-10 lg:pt-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-6 px-gutter">
          <div>
            <SectionLabel index="02" className="mb-5 text-muted">
              Web work
            </SectionLabel>
            <RevealText text="Live on *the* *web.*" className="display text-display-lg" accentClassName="text-accent-deep" />
          </div>
          <p className="max-w-sm text-muted lg:pb-2">
            Five products from my current chapter. Every screenshot is the real site. Open any of them.
          </p>
        </div>

        <motion.div
          ref={trackRef}
          style={desktop ? { x } : undefined}
          className="mt-10 flex min-h-0 flex-1 flex-col gap-6 px-gutter lg:w-max lg:flex-row lg:gap-8 lg:pr-[12vw]"
        >
          {webProjects.map((project, index) => (
            <ProjectPanel key={project.id} project={project} index={index} />
          ))}

          <a
            href="#apps"
            className="chamfer-lg group hidden w-[30vw] shrink-0 flex-col justify-between bg-ink p-12 text-paper lg:flex"
          >
            <span className="label text-paper/60">Up next</span>
            <span>
              <span className="display block text-display-md">Then there are the apps.</span>
              <span className="mt-8 grid h-14 w-14 place-items-center bg-accent text-ink transition-transform duration-500 group-hover:translate-x-3">
                <ArrowRight size={22} />
              </span>
            </span>
          </a>
        </motion.div>

        <div className="mx-auto mt-8 hidden w-full max-w-[1400px] items-center gap-6 px-gutter lg:flex">
          <span className="label tabular-nums text-ink">
            0{current} <span className="text-muted">/ 0{webProjects.length}</span>
          </span>
          <div className="h-px flex-1 bg-ink/15">
            <motion.div className="h-full origin-left bg-ink" style={{ scaleX: scrollYProgress }} />
          </div>
          <span className="label text-muted">Keep scrolling</span>
        </div>
      </div>
    </section>
  );
}
