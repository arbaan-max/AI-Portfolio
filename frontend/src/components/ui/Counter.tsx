import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { ease } from '../../lib/motion';

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** Counts up from zero the first time it scrolls into view. */
export function Counter({ value, prefix = '', suffix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    const node = ref.current;
    if (!node || !visible) {
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: ease.out,
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [visible, value, prefix, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}
