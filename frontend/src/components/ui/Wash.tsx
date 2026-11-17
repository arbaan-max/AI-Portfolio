import { motion } from 'framer-motion';

const drift = (duration: number) => ({
  duration,
  repeat: Infinity,
  ease: 'easeInOut' as const,
});

/** Soft watercolour wash that drifts slowly behind a section. Decorative only. */
export function Wash({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -left-[12%] top-[2%] h-[62%] w-[52%] rounded-full bg-wash-a opacity-80 blur-[110px]"
        animate={{ x: [0, 70, -20, 0], y: [0, -30, 40, 0] }}
        transition={drift(28)}
      />
      <motion.div
        className="absolute right-[-8%] top-[-12%] h-[58%] w-[46%] rounded-full bg-wash-c opacity-70 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, 50, -10, 0] }}
        transition={drift(34)}
      />
      <motion.div
        className="absolute bottom-[4%] left-[32%] h-[46%] w-[44%] rounded-full bg-wash-b opacity-60 blur-[120px]"
        animate={{ x: [0, 40, -50, 0], y: [0, -40, 10, 0] }}
        transition={drift(31)}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-paper" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-transparent to-paper" />
    </div>
  );
}
