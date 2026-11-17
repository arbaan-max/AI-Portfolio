import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from '../lib/motion';
import { profile } from '../data/portfolio';

const letters = profile.name.split('');

/** The name writes itself, a rule draws under it, then the sheet lifts off the page. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(onDone, 1750);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onDone, reduced]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-band px-gutter"
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      transition={{ duration: 1, ease: ease.inOut }}
    >
      <div className="text-center">
        <p aria-label={profile.name} className="display text-[clamp(2.6rem,8vw,6rem)]">
          {letters.map((letter, index) => (
            <span key={index} aria-hidden="true" className="-mb-[0.2em] inline-block overflow-hidden pb-[0.2em]">
              <motion.span
                className="inline-block whitespace-pre"
                initial={{ y: '115%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: ease.soft, delay: 0.1 + index * 0.035 }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.span
          aria-hidden="true"
          className="rule-double mx-auto mt-6 block w-40 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: ease.soft, delay: 0.45 }}
        />
        <motion.p
          className="label mt-6 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {profile.role} · Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}
