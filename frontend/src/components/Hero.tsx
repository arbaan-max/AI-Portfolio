import { useRef, type MouseEvent } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';
import { ease } from '../lib/motion';
import { BrowserFrame } from './ui/BrowserFrame';
import { Magnetic } from './ui/Magnetic';
import { RevealText } from './ui/RevealText';

const stack = [
  {
    id: 'maktob',
    src: '/projects/maktob-hero.jpg',
    alt: 'Maktob Holding investment office website',
    url: 'maktob-website.vercel.app',
    position: 'right-0 top-0 w-[72%]',
    rotate: 5,
    depth: 0.5,
  },
  {
    id: 'lily-eve',
    src: '/projects/lily-eve-hero.jpg',
    alt: 'Lily Eve and Eucalyptus flower and plant store',
    url: 'lily-eve-ecommerce.vercel.app',
    position: 'left-0 top-[23%] w-[74%]',
    rotate: -4,
    depth: 0.9,
  },
  {
    id: 'trapped-inn',
    src: '/projects/trapped-inn-hero.jpg',
    alt: 'Trapped Inn escape room website',
    url: 'trapped-inn-seven.vercel.app',
    position: 'right-[3%] top-[47%] w-[82%]',
    rotate: 2,
    depth: 1.4,
  },
];

type StackCardProps = {
  item: (typeof stack)[number];
  index: number;
  ready: boolean;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scroll: MotionValue<number>;
};

function StackCard({ item, index, ready, pointerX, pointerY, scroll }: StackCardProps) {
  // Pointer parallax plus scroll lift, both scaled by the card's depth.
  const x = useTransform(pointerX, (value) => value * item.depth * -40);
  const y = useTransform<number, number>(
    [pointerY, scroll],
    ([pointer, scrolled]) => pointer * item.depth * -26 - scrolled * item.depth * 190,
  );

  return (
    <motion.div className={`absolute ${item.position}`} style={{ x, y }}>
      <motion.div
        initial={{ opacity: 0, y: 140, rotate: item.rotate * 3 }}
        animate={ready ? { opacity: 1, y: 0, rotate: item.rotate } : undefined}
        transition={{ duration: 1.2, ease: ease.out, delay: 0.45 + index * 0.14 }}
      >
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 6 + index * 1.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BrowserFrame src={item.src} alt={item.alt} url={item.url} eager />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 18 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, ease: ease.out, delay },
  });

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMove}
      className="relative overflow-hidden px-gutter pb-16 pt-32 lg:min-h-[100svh] lg:pb-24 lg:pt-32"
    >
      <motion.div aria-hidden="true" className="grid-lines absolute inset-[-10%_0]" style={{ y: gridY }} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_82%_30%,rgb(var(--c-accent)/0.2),transparent_70%),linear-gradient(180deg,transparent_70%,rgb(var(--c-bg))_100%)]"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <motion.div className="lg:col-span-7" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.p {...fade(0.1)} className="label mb-7 inline-flex items-center gap-3 bg-ink px-4 py-2.5 text-paper">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-pulse-dot rounded-full bg-signal" />
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            Now building at {profile.company}
          </motion.p>

          <RevealText
            as="h1"
            start={ready}
            delay={0.15}
            text="I build the apps, sites & systems businesses *run* *on.*"
            className="display max-w-[13ch] text-display-xl"
            accentClassName="text-accent-deep"
          />

          <motion.p {...fade(0.75)} className="mt-8 max-w-xl text-body-lg text-muted">
            {profile.headline}
          </motion.p>

          <motion.div {...fade(0.9)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#work" className="btn btn-primary">
                See the work <ArrowDown size={16} strokeWidth={2.4} />
              </a>
            </Magnetic>
            <a href="#contact" className="btn btn-dark">
              Start a project <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative h-[92vw] max-h-[560px] [perspective:1400px] sm:h-[72vw] lg:col-span-5 lg:h-[640px] lg:max-h-none">
          {stack.map((item, index) => (
            <StackCard
              key={item.id}
              item={item}
              index={index}
              ready={ready}
              pointerX={smoothX}
              pointerY={smoothY}
              scroll={scrollYProgress}
            />
          ))}
        </div>
      </div>

      <motion.div
        {...fade(1.2)}
        className="label relative mx-auto mt-14 flex max-w-[1400px] items-center justify-between text-muted lg:absolute lg:inset-x-gutter lg:bottom-8 lg:mt-0"
      >
        <span>{profile.location}</span>
        <span className="hidden items-center gap-3 sm:flex">
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-ink/15">
            <motion.span
              className="absolute left-0 top-0 h-1/2 w-full bg-ink"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </span>
        <span>{profile.experience} shipping</span>
      </motion.div>
    </section>
  );
}
