import { useEffect, useState } from 'react';

/** Motion tokens — mirror --ease-soft / --dur-* in tokens.css. */
export const ease = {
  soft: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
};

export const duration = { fast: 0.25, base: 0.6, slow: 1.1 };

/** Fires once an element's top edge is 12% above the bottom of the screen, however tall it is. */
export const inView = { once: true, margin: '0px 0px -12% 0px' } as const;

/** Bento tiles rise and settle as they enter, staggered along each row. */
export const tileEntrance = (index: number) => ({
  initial: { opacity: 0, y: 40, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: inView,
  transition: { duration: 0.9, ease: ease.soft, delay: (index % 3) * 0.08 },
});

/** Clip-path states for the "curtain" image reveal. */
export const curtain = {
  closed: 'inset(100% 0% 0% 0%)',
  open: 'inset(0% 0% 0% 0%)',
};

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}
