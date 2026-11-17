import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { navItems, profile } from '../data/portfolio';
import { curtain, ease } from '../lib/motion';

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = ['home', ...navItems.map((item) => item.href.slice(1)), 'contact'];
const menuItems = [...navItems, { label: 'Contact', href: '#contact' }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 240);
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <motion.header
        className={`fixed left-0 top-0 z-50 w-full border-b px-gutter transition-[background-color,border-color] duration-500 ${
          scrolled && !open ? 'border-ink/10 bg-[var(--nav-bg)] backdrop-blur-xl' : 'border-transparent'
        }`}
        initial={{ y: -90 }}
        animate={{ y: hidden && !open ? -100 : 0 }}
        transition={{ duration: 0.7, ease: ease.soft }}
      >
        <nav aria-label="Primary" className="mx-auto flex h-[4.5rem] max-w-page items-center justify-between gap-6">
          <a href="#home" className="font-display text-[1.55rem] font-medium tracking-[-0.01em] text-ink">
            {profile.name}
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`label relative block py-2 transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                        transition={{ duration: 0.6, ease: ease.soft }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn hidden !px-5 !py-3 sm:inline-flex">
              Start a project
            </a>
            <button
              type="button"
              className="label relative z-[70] flex h-11 items-center gap-3 text-ink lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Close' : 'Menu'}
              <span aria-hidden="true" className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-soft ${
                    open ? 'translate-y-[6px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-soft ${
                    open ? '-translate-y-[5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-band px-gutter pb-12 pt-28 lg:hidden"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: curtain.open }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.8, ease: ease.inOut }}
          >
            <ul>
              {menuItems.map((item, index) => (
                <li key={item.href} className="overflow-hidden border-t border-ink/15 last:border-b">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline justify-between py-4 text-[clamp(2.4rem,11vw,4rem)]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: ease.soft, delay: 0.25 + index * 0.07 }}
                  >
                    {item.label}
                    <span className="label text-muted">0{index + 1}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
