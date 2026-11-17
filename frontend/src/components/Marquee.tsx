import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { marqueeRows } from '../data/portfolio';
import { wrap } from '../lib/motion';

type RowProps = {
  items: string[];
  baseVelocity: number;
  outlined?: boolean;
};

/** A marquee row that speeds up and flips direction with scroll velocity. */
function Row({ items, baseVelocity, outlined = false }: RowProps) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  // Four identical copies: shifting by 25% lands on an identical frame.
  const x = useTransform(baseX, (value) => `${wrap(-50, -25, value)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduced) {
      return;
    }
    const boost = factor.get();
    if (boost < 0) {
      direction.current = -1;
    } else if (boost > 0) {
      direction.current = 1;
    }
    const step = direction.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + step + step * Math.abs(boost));
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex shrink-0" style={{ x }}>
        {[0, 1, 2, 3].map((copy) => (
          <span key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={item} className="flex items-center">
                <span className={`display px-6 text-[clamp(2.4rem,7vw,6rem)] ${outlined ? 'text-outline text-ink/60' : ''}`}>
                  {item}
                </span>
                <span aria-hidden="true" className="chamfer-sm h-4 w-4 bg-accent md:h-6 md:w-6" />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Technologies and product types" className="border-y border-ink/10 bg-paper py-8 md:py-12">
      <Row items={marqueeRows[0]} baseVelocity={-1.6} />
      <Row items={marqueeRows[1]} baseVelocity={1.6} outlined />
    </section>
  );
}
