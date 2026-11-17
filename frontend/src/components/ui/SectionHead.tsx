import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ease, inView } from '../../lib/motion';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

/** Eyebrow, serif heading and the small double rule that sits under every section title. */
export function SectionHead({ eyebrow, title, children, align = 'left', className = '' }: SectionHeadProps) {
  const centered = align === 'center';

  return (
    <header className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      <Reveal y={12}>
        <p className="label text-muted [.on-dark_&]:text-surface/60">{eyebrow}</p>
      </Reveal>
      <RevealText text={title} className="display mt-5 text-display-lg" />
      <motion.span
        aria-hidden="true"
        className={`rule-double mt-7 block w-16 ${centered ? 'mx-auto origin-center' : 'origin-left'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={inView}
        transition={{ duration: 1.1, ease: ease.soft, delay: 0.35 }}
      />
      {children && (
        <Reveal delay={0.25} className="mt-7 text-body-lg text-muted [.on-dark_&]:text-surface/70">
          {children}
        </Reveal>
      )}
    </header>
  );
}
