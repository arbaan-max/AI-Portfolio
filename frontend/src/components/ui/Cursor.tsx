import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ease, useMediaQuery } from '../../lib/motion';

/**
 * A label that follows the pointer over anything marked `data-cursor="…"`.
 * Mouse and trackpad only; touch devices never see it.
 */
export function Cursor() {
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)');
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.5 });
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!fine) {
      return;
    }
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target instanceof Element ? event.target.closest('[data-cursor]') : null;
      setLabel(target ? target.getAttribute('data-cursor') : null);
    };
    // Scrolling moves content under a still pointer, so drop the label until the pointer moves again.
    // A click usually opens a panel over the tile, so drop the label then too.
    const handleScroll = () => setLabel(null);
    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointerdown', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointerdown', handleScroll);
    };
  }, [fine, x, y]);

  if (!fine) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90]"
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="label grid h-24 w-24 place-items-center rounded-full bg-ink text-center text-surface"
          initial={{ scale: 0 }}
          animate={{ scale: label ? 1 : 0 }}
          transition={{ duration: 0.45, ease: ease.soft }}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}
