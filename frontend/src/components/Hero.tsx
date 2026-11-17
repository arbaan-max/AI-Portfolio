import { useEffect, useRef, useState, type MouseEvent } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { profile, webProjects } from '../data/portfolio';
import { curtain, ease } from '../lib/motion';
import { RevealText } from './ui/RevealText';
import { Wash } from './ui/Wash';

const pick = (ids: string[]) =>
  ids.map((id) => {
    const project = webProjects.find((item) => item.id === id)!;
    return { src: project.plate, alt: `${project.name}, ${project.kind.toLowerCase()}` };
  });

const largePlates = pick(['trapped-inn', 'tekrio', 'maktob']);
const smallPlates = pick(['lily-eve', 'orvia']);

type PlateCycleProps = {
  items: { src: string; alt: string }[];
  ready: boolean;
  /** Seconds between changes, and how long to wait before the first one. */
  every: number;
  offset: number;
  enterDelay: number;
};

/** One hung plate. Each new screenshot wipes up over the last like a curtain. */
function PlateCycle({ items, ready, every, offset, enterDelay }: PlateCycleProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  useEffect(() => {
    if (!ready || reduced) {
      return;
    }
    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      const advance = () =>
        setIndex((current) => {
          setPrevious(current);
          return (current + 1) % items.length;
        });
      advance();
      interval = window.setInterval(advance, every * 1000);
    }, offset * 1000);
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [ready, reduced, every, offset, items.length]);

  return (
    <div className="plate-view">
      {previous !== null && (
        <img
          src={items[previous].src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
      <motion.img
        key={index}
        src={items[index].src}
        alt={items[index].alt}
        className="absolute inset-0 h-full w-full object-cover object-top"
        initial={{ clipPath: curtain.closed, scale: 1.14 }}
        animate={ready ? { clipPath: curtain.open, scale: 1 } : undefined}
        transition={{ duration: 1.4, ease: ease.soft, delay: previous === null ? enterDelay : 0 }}
      />
    </div>
  );
}

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 50, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 50, damping: 18 });

  // The two plates sit at different depths: the small one travels further.
  const largeX = useTransform(smoothX, (value) => value * -14);
  const largeY = useTransform<number, number>([smoothY, scrollYProgress], ([p, s]) => p * -10 - s * 70);
  const smallX = useTransform(smoothX, (value) => value * -34);
  const smallY = useTransform<number, number>([smoothY, scrollYProgress], ([p, s]) => p * -26 - s * 190);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.1, ease: ease.soft, delay },
  });

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMove}
      className="relative flex flex-col overflow-hidden px-gutter pt-28 lg:min-h-[100svh] lg:pt-24"
    >
      <Wash />

      <div className="relative mx-auto grid w-full max-w-page flex-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div className="lg:col-span-6 xl:col-span-5" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.p {...fade(0.05)} className="label text-muted">
            {profile.role} · {profile.location}
          </motion.p>

          <RevealText
            as="h1"
            start={ready}
            delay={0.15}
            stagger={0.06}
            text={profile.headline}
            className="display mt-7 text-display-xl"
          />

          <motion.p {...fade(0.8)} className="mt-8 max-w-[44ch] text-body-lg text-muted">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.95)} className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
            <a href="#contact" className="btn">
              Start a project <ArrowUpRight size={15} strokeWidth={2} />
            </a>
            <a href="#work" className="label link text-ink">
              See the work
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-[600px] lg:col-span-6 lg:col-start-7 lg:mx-0 lg:ml-auto">
          <motion.div className="plate absolute left-0 top-0 aspect-[4/5] h-full" style={{ x: largeX, y: largeY }}>
            <PlateCycle items={largePlates} ready={ready} every={5.5} offset={4.5} enterDelay={0.35} />
          </motion.div>
          <motion.div
            className="plate absolute bottom-[7%] right-0 aspect-square w-[36%]"
            style={{ x: smallX, y: smallY, rotate: -3 }}
          >
            <PlateCycle items={smallPlates} ready={ready} every={5.5} offset={7.25} enterDelay={0.75} />
          </motion.div>
        </div>
      </div>

      <motion.div
        {...fade(1.25)}
        className="relative mx-auto mt-14 flex w-full max-w-page flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-ink/15 py-6 lg:mt-10"
      >
        <span className="label text-muted">Recent work</span>
        {webProjects.map((project) => (
          <span key={project.id} className="font-display text-xl italic text-body">
            {project.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
