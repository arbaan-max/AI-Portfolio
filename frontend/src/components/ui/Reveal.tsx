import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ease, inView } from '../../lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = '', delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 1, ease: ease.soft, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself from the left when it scrolls into view. */
export function DrawnRule({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px origin-left bg-current ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.3, ease: ease.soft, delay }}
    />
  );
}
