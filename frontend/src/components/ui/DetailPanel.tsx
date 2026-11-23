import { useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ease } from '../../lib/motion';

type DetailPanelProps = {
  /** Shared with the tile that opened it, so the tile grows into the panel. */
  layoutId: string;
  label: string;
  bg: string;
  fg: string;
  onClose: () => void;
  children: ReactNode;
};

export const TILE_RADIUS = 28;

/** A bento tile expanded into a dialog. Escape, the close button or the backdrop closes it. */
export function DetailPanel({ layoutId, label, bg, fg, onClose, children }: DetailPanelProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      root.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-3 sm:p-6" data-lenis-prevent>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      />
      <motion.div
        layoutId={layoutId}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative max-h-[92svh] w-full max-w-5xl overflow-y-auto overscroll-contain"
        style={{ backgroundColor: bg, color: fg, borderRadius: TILE_RADIUS }}
        transition={{ duration: 0.6, ease: ease.soft }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-current/10 transition-transform duration-500 ease-soft hover:rotate-90"
          style={{ backgroundColor: 'rgb(127 127 127 / 0.18)' }}
        >
          <X size={18} strokeWidth={1.8} />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.soft, delay: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
