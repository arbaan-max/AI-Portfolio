import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolio';
import { ease } from '../lib/motion';

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
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <motion.header
        className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4"
        initial={{ y: -90 }}
        animate={{ y: hidden && !open ? -110 : 0 }}
        transition={{ duration: 0.5, ease: ease.out }}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-4 border px-4 py-2.5 transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 ${
            scrolled || open
              ? 'border-[var(--nav-line)] bg-[var(--nav-bg)] shadow-[0_12px_40px_-24px_rgb(var(--c-fg)/0.5)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#home" className="flex items-center gap-3" aria-label="Arbaan Qureshi, back to top">
            <span className="chamfer-sm grid h-9 w-9 place-items-center bg-ink font-display text-sm font-bold text-paper">
              AQ
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-[0.04em]">Arbaan</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`label relative block px-4 py-2.5 transition-colors duration-200 ${
                      isActive ? 'text-paper' : 'text-ink/70 hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="chamfer-sm absolute inset-0 bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
              Let&apos;s talk <ArrowUpRight size={15} strokeWidth={2.4} />
            </a>
            <button
              type="button"
              className="chamfer-sm grid h-10 w-10 place-items-center bg-ink text-paper lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-gutter pb-12 pt-28 text-paper lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: ease.inOut }}
          >
            <ul className="flex flex-col gap-1">
              {[...navItems, { label: 'Contact', href: '#contact' }].map((item, index) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 py-2 text-[clamp(2.2rem,11vw,4rem)]"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: ease.out, delay: 0.18 + index * 0.06 }}
                  >
                    <span className="label text-accent">0{index + 1}</span>
                    {item.label}
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
