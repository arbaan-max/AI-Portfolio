import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolio';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-[#F2F1F0]/95 to-transparent px-5 py-5 backdrop-blur-[3px] sm:px-8 md:py-8">
      <nav className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 font-industrial">
        <a href="#home" className="col-span-7 flex items-center gap-3 md:col-span-3">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#111] shadow-soft-ring">
            <span className="h-2 w-5 -rotate-[25deg] rounded-full bg-white" />
          </span>
          <span className="text-[22px] font-normal lowercase tracking-[-0.5px] text-[#111] sm:text-[30px]">
            arbaan
          </span>
        </a>

        <div className="col-span-6 hidden justify-center gap-[34px] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[15px] font-bold uppercase tracking-[0.06em] text-[#3a3a3a] transition-colors duration-300 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="col-span-5 flex items-center justify-end gap-3 md:col-span-3">
          <a
            href="#contact"
            className="chamfer-sm hidden items-center gap-3 border border-cyan-border bg-cyan px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-[#1a1c1e] shadow-[0_0_0_1px_rgba(21,188,223,0.35),0_10px_30px_-12px_rgba(15,163,194,0.6)] transition-colors duration-300 hover:bg-cyan-hover md:inline-flex"
          >
            <Mail size={16} strokeWidth={1.6} /> Contact us
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white shadow-soft-ring md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mx-5 mt-5 rounded-[28px] border border-black/10 bg-white/90 p-5 shadow-glass backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 font-display text-3xl tracking-tight text-ink transition-colors hover:bg-zinc-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
