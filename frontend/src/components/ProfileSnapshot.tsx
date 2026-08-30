import { ArrowRight } from 'lucide-react';
import { deliveryStats, focusAreas, profile } from '../data/portfolio';
import { AutoplayVideo } from './AutoplayVideo';
import { Reveal } from './Reveal';

const TARGO_ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_063501_2e2c8971-de1e-473a-8611-a0c9ae7ee186.mp4';

export function ProfileSnapshot() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F2F1F0_0%,#F7F6F8_18%,#F7F6F8_100%)] px-5 py-[clamp(60px,10vw,140px)] md:pl-12 md:pr-0 lg:pl-[clamp(72px,9vw,118px)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(360px,0.9fr)]">
        <Reveal>
          <p className="mb-4 font-industrial text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">profile signal</p>
          <h2 className="targo-heading text-[clamp(2.2rem,6.5vw,4.5rem)] font-bold text-[#2b3033]">
            About
            <br />
            <span className="text-cyan sm:inline-block sm:pl-[min(160px,18vw)]">Arbaan</span>
          </h2>
          <p className="mt-8 max-w-xl text-[clamp(0.95rem,1.6vw,1.08rem)] leading-[1.7] text-[#6b6f72] md:ml-[min(160px,18vw)]">
            {profile.headline} I work hands-on across Flutter, Dart, BLoC, Riverpod, Firebase, REST APIs, Node.js,
            Express.js, and MongoDB, while also supporting technical decisions, code quality, delivery, and team coordination.
          </p>
          <a
            href="#work"
            className="chamfer mt-9 inline-flex items-center gap-3 border border-cyan-border bg-cyan px-8 py-4 font-industrial text-sm font-bold uppercase tracking-[0.14em] text-[#1a1c1e] shadow-[0_0_0_1px_rgba(21,188,223,0.35),0_10px_30px_-12px_rgba(15,163,194,0.6)] transition-colors hover:bg-cyan-hover md:ml-[min(160px,18vw)]"
          >
            Learn more <span className="h-px w-6 bg-ink" />
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative ml-auto w-full max-w-[644px] overflow-hidden">
            <AutoplayVideo src={TARGO_ABOUT_VIDEO} className="h-auto w-full object-contain" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-cyan mix-blend-hue" />
          </div>
        </Reveal>

        <div className="grid gap-4 pr-5 md:grid-cols-3 lg:col-span-2 lg:pr-12">
          {deliveryStats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.04 * index}>
              <div className="rounded-[28px] border border-black/10 bg-white/60 p-5 shadow-soft-ring backdrop-blur-md">
                <div className="font-industrial text-3xl font-bold uppercase tracking-tight text-[#2b3033]">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-[#6b6f72]">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 pr-5 md:grid-cols-3 lg:col-span-2 lg:pr-12">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.label} delay={0.06 * index}>
                <div className="group flex min-h-40 items-end justify-between rounded-[28px] border border-black/10 bg-white/55 p-5 shadow-soft-ring backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <Icon className="mb-8 text-cyan" size={24} strokeWidth={1.9} />
                    <p className="max-w-64 font-industrial text-xl font-bold uppercase leading-tight tracking-[0.01em] text-[#2b3033]">
                      {area.label}
                    </p>
                  </div>
                  <ArrowRight className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" size={20} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
