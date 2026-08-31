import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { deliveryStats, focusAreas, profile } from '../data/portfolio';
import { AutoplayVideo } from './AutoplayVideo';
import { Reveal } from './Reveal';

const TARGO_ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_063501_2e2c8971-de1e-473a-8611-a0c9ae7ee186.mp4';

const focusDetails = [
  {
    title: 'Hands-on senior product engineering',
    body:
      'I work like a builder who can own the full product path: user screens, state, APIs, backend logic, dashboards, edge cases, release blockers, and the details that make software feel serious.',
    points: ['Product ideas translated into shippable systems', 'Frontend, backend, and integration ownership', 'Review, debugging, delivery, and release support'],
  },
  {
    title: 'Apps, web, desktop, and platform systems',
    body:
      'My strongest work is not limited to one screen size. I can build Android and iOS apps, extend Flutter to desktop and TV-style interfaces, create websites and landing pages, and connect everything to stable backend services.',
    points: ['Android, iOS, Windows, macOS, and TV app direction', 'Websites, landing pages, dashboards, and admin panels', 'Reusable APIs and platform modules behind the UI'],
  },
  {
    title: 'Interfaces that feel premium and ready to launch',
    body:
      'I care about the final impression: clean layouts, responsive behavior, fast interactions, readable states, empty/error/loading flows, and pages that make the product look trustworthy from the first visit.',
    points: ['Premium responsive UI across devices', 'Landing pages and product experiences that convert', 'Performance and UX cleanup before handoff'],
  },
];

function FocusDetailModal({
  activeIndex,
  onClose,
}: {
  activeIndex: number;
  onClose: () => void;
}) {
  const detail = focusDetails[activeIndex];
  const area = focusAreas[activeIndex];
  const Icon = area.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-ink/30 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative grid w-full max-w-4xl gap-6 overflow-hidden rounded-[32px] border border-black/10 bg-[#f7f8fb] p-5 shadow-glass md:grid-cols-[0.85fr_1.15fr] md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-64 overflow-hidden rounded-[26px] border border-black/10 bg-white/70 p-5 shadow-soft-ring">
          <div className="absolute inset-0 story-grid opacity-60" />
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-2, 3, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[18%] top-[18%] grid h-16 w-16 place-items-center rounded-3xl border border-black/10 bg-cyan/80 text-ink shadow-soft-ring"
          >
            <Icon size={26} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[18%] right-[12%] w-44 rounded-[24px] border border-black/10 bg-white/85 p-4 shadow-soft-ring backdrop-blur-md"
          >
            <div className="mb-3 h-2 w-16 rounded-full bg-ink/70" />
            <div className="space-y-2">
              <div className="h-3 rounded-full bg-cyan/80" />
              <div className="h-3 w-5/6 rounded-full bg-zinc-300" />
              <div className="h-3 w-2/3 rounded-full bg-zinc-300" />
            </div>
          </motion.div>
          <div className="relative z-10 mt-auto flex h-full flex-col justify-end">
            <p className="font-industrial text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">focus detail</p>
            <p className="mt-2 max-w-52 font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-ink">
              {area.label}
            </p>
          </div>
        </div>

        <div className="rounded-[26px] bg-white p-6">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 font-industrial text-xs font-bold uppercase tracking-[0.16em] text-cyan">how I work</p>
              <h3 className="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-ink md:text-4xl">
                {detail.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 flex-none place-items-center rounded-full border border-black/10 bg-[#f7f8fb] text-ink"
              aria-label="Close focus detail"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-base leading-relaxed text-zinc-700">{detail.body}</p>
          <div className="mt-6 grid gap-3">
            {detail.points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.24 }}
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f8fb] p-3 text-sm font-medium text-ink"
              >
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-cyan font-industrial text-xs font-bold">
                  {index + 1}
                </span>
                {point}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function ProfileSnapshot() {
  const [activeFocus, setActiveFocus] = useState<number | null>(null);

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F2F1F0_0%,#F7F6F8_18%,#F7F6F8_100%)] px-5 py-[clamp(60px,10vw,140px)] md:pl-12 md:pr-0 lg:pl-[clamp(72px,9vw,118px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] overflow-hidden opacity-45 lg:hidden">
        <AutoplayVideo src={TARGO_ABOUT_VIDEO} className="absolute -right-28 top-0 h-full w-[130vw] max-w-none object-contain object-right saturate-75 contrast-90" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,246,248,0.58)_0%,rgba(247,246,248,0.84)_44%,#F7F6F8_100%)]" />
        <div className="absolute inset-0 bg-cyan/70 mix-blend-hue" />
      </div>

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_minmax(360px,0.9fr)]">
        <Reveal>
          <p className="mb-4 font-industrial text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">profile signal</p>
          <h2 className="targo-heading text-[clamp(2.2rem,6.5vw,4.5rem)] font-bold text-[#2b3033]">
            About
            <br />
            <span className="text-cyan sm:inline-block sm:pl-[min(160px,18vw)]">Arbaan</span>
          </h2>
          <p className="mt-8 max-w-xl text-[clamp(0.95rem,1.6vw,1.08rem)] leading-[1.7] text-[#6b6f72] md:ml-[min(160px,18vw)]">
            {profile.headline} I work hands-on across Flutter, Dart, BLoC, Riverpod, responsive web UI, Firebase, REST APIs,
            Node.js, Express.js, and MongoDB, while supporting architecture, code quality, delivery, and team coordination.
          </p>
          <a
            href="#work"
            className="chamfer mt-9 inline-flex items-center gap-3 border border-cyan-border bg-cyan px-8 py-4 font-industrial text-sm font-bold uppercase tracking-[0.14em] text-[#1a1c1e] shadow-[0_0_0_1px_rgba(21,188,223,0.35),0_10px_30px_-12px_rgba(15,163,194,0.6)] transition-colors hover:bg-cyan-hover md:ml-[min(160px,18vw)]"
          >
            Learn more <span className="h-px w-6 bg-ink" />
          </a>
        </Reveal>

        <Reveal delay={0.08} className="hidden lg:block">
          <div className="relative ml-auto w-full max-w-[644px] overflow-hidden">
            <AutoplayVideo src={TARGO_ABOUT_VIDEO} className="h-auto w-full object-contain" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-cyan mix-blend-hue" />
          </div>
        </Reveal>

        <div className="grid auto-rows-fr gap-4 pr-0 md:grid-cols-2 lg:col-span-2 lg:pr-12 xl:grid-cols-4">
          {deliveryStats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.04 * index}>
              <div className="flex h-full min-h-40 flex-col justify-between rounded-[28px] border border-black/10 bg-white/60 p-5 shadow-soft-ring backdrop-blur-md">
                <div className="font-industrial text-3xl font-bold uppercase tracking-tight text-[#2b3033]">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-[#6b6f72]">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid auto-rows-fr gap-4 pr-0 md:grid-cols-3 lg:col-span-2 lg:pr-12">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.label} delay={0.06 * index}>
                <button
                  type="button"
                  onClick={() => setActiveFocus(index)}
                  className="group flex h-full min-h-48 w-full items-end justify-between rounded-[28px] border border-black/10 bg-white/55 p-5 text-left shadow-soft-ring backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-cyan/45 focus:outline-none focus:ring-2 focus:ring-cyan/45"
                >
                  <div>
                    <Icon className="mb-8 text-cyan" size={24} strokeWidth={1.9} />
                    <p className="max-w-64 font-industrial text-xl font-bold uppercase leading-tight tracking-[0.01em] text-[#2b3033]">
                      {area.label}
                    </p>
                  </div>
                  <ArrowRight className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" size={20} />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeFocus !== null && <FocusDetailModal activeIndex={activeFocus} onClose={() => setActiveFocus(null)} />}
      </AnimatePresence>
    </section>
  );
}
