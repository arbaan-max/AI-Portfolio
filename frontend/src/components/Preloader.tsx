import { useEffect } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { ease } from '../lib/motion';
import { profile } from '../data/portfolio';

/** Short counted intro. Slides away to hand over to the hero entrance. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const count = useMotionValue(0);
  const padded = useTransform(count, (latest) => Math.round(latest).toString().padStart(3, '0'));
  const barScale = useTransform(count, [0, 100], [0, 1]);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    document.body.style.overflow = 'hidden';
    const controls = animate(count, 100, { duration: 1.25, ease: ease.inOut, onComplete: onDone });
    return () => {
      controls.stop();
      document.body.style.overflow = '';
    };
  }, [count, onDone, reduced]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-gutter py-8 text-paper"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease: ease.inOut }}
    >
      <div className="label flex justify-between text-paper/60">
        <span>{profile.name}</span>
        <span>Portfolio 2026</span>
      </div>
      <div>
        <motion.span className="display block text-[clamp(5rem,22vw,16rem)] leading-none tabular-nums">
          {padded}
        </motion.span>
        <div className="mt-6 h-px w-full bg-paper/15">
          <motion.div className="h-full origin-left bg-accent" style={{ scaleX: barScale }} />
        </div>
      </div>
    </motion.div>
  );
}
