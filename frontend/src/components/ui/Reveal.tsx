import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ease, inView } from '../../lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = '', delay = 0, y = 32 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.8, ease: ease.out, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
