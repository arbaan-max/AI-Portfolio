import { motion } from 'framer-motion';
import { ease, inView } from '../../lib/motion';

type RevealTextProps = {
  /** Words wrapped in *asterisks* take the accent colour. */
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  /** When set, the reveal is driven by this flag instead of scroll position. */
  start?: boolean;
};

const word = {
  hidden: { y: '118%' },
  show: { y: '0%', transition: { duration: 0.95, ease: ease.out } },
};

/** Masked word-by-word rise. The signature text entrance of the site. */
export function RevealText({
  text,
  as = 'h2',
  className = '',
  accentClassName = 'text-accent',
  delay = 0,
  stagger = 0.055,
  start,
}: RevealTextProps) {
  const Tag = motion[as];
  const words = text.split(' ');
  const plain = text.replace(/\*/g, '');
  const trigger =
    start === undefined
      ? { whileInView: 'show' as const, viewport: inView }
      : { animate: start ? 'show' : 'hidden' };

  return (
    <Tag
      aria-label={plain}
      className={className}
      initial="hidden"
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...trigger}
    >
      {words.map((raw, index) => {
        const accent = raw.startsWith('*') && raw.endsWith('*');
        const value = accent ? raw.slice(1, -1) : raw;
        return (
          <span
            key={`${value}-${index}`}
            aria-hidden="true"
            className="-mb-[0.14em] mr-[0.24em] inline-block overflow-hidden pb-[0.14em] align-bottom"
          >
            <motion.span variants={word} className={`inline-block ${accent ? accentClassName : ''}`}>
              {value}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
