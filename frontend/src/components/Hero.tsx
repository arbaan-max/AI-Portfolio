import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import heroPoster from '../assets/hero-poster.jpg';
import { AutoplayVideo } from './AutoplayVideo';

const TARGO_HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_050407_500d0339-ab28-41c1-9688-132a74a3b5aa.mp4';

export function Hero() {
  const { displayed, done } = useTypewriter('Apps, websites, APIs, dashboards, and platforms that ship.', 34, 520);

  return (
    <section id="home" className="relative min-h-[860px] overflow-hidden bg-targo-base pb-14 pt-0 sm:min-h-[920px] md:min-h-[100svh] md:pb-16 md:pt-28">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <AutoplayVideo
          src={TARGO_HERO_VIDEO}
          poster={heroPoster}
          startAt={2}
          className="absolute right-[-52vw] top-4 h-[92svh] w-[170vw] max-w-none object-contain object-right opacity-36 saturate-70 contrast-90 sm:right-[-34vw] sm:w-[140vw] sm:opacity-44 md:top-0 md:right-[-34%] md:h-auto md:w-[104%] md:opacity-64 md:saturate-55 md:contrast-90 lg:right-[-32%] lg:opacity-66 xl:right-[-30%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(242,241,240,0.62)_0%,rgba(242,241,240,0.86)_48%,#F2F1F0_100%)] md:hidden" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[50%] bg-[linear-gradient(90deg,#F2F1F0_0%,#F2F1F0_66%,rgba(242,241,240,0.7)_88%,rgba(242,241,240,0)_100%)] md:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-x-4 px-5 pt-[150px] sm:pt-[190px] md:px-12 md:pt-12 lg:px-20">
        <div className="col-span-12 md:col-span-7 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-7 inline-flex max-w-[calc(100vw-2.5rem)] items-center gap-2 border-l-2 border-cyan bg-white/70 px-3 py-2 text-[0.64rem] font-bold uppercase leading-tight tracking-[0.12em] text-ink shadow-soft-ring backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.15em]"
          >
            <Sparkles size={14} />
            <span className="sm:hidden">{profile.projectFootprint} apps/modules shaped</span>
            <span className="hidden sm:inline">{profile.projectFootprint} apps and platform modules shaped</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
            className="targo-heading max-w-[680px] text-[clamp(2.3rem,10vw,3.5rem)] font-bold text-[#2b3033] md:text-[min(clamp(34px,7.6vw,80px),9.2vh)]"
          >
            Scaling
            <br />
            digital
            <br />
            products
            <br />
            <span className="md:inline-block md:pl-[min(238px,28vw)]">for</span>
            <br />
            <span className="md:inline-block md:pl-[min(238px,28vw)]">real</span>
            <br />
            <span className="text-cyan md:inline-block md:pl-[min(238px,28vw)]">products</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-[#6b6f72] md:ml-[min(238px,28vw)] md:text-xl"
          >
            <span>{displayed}</span>
            {!done && <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-1 bg-ink animate-blink" />}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="mt-10 md:ml-[min(238px,28vw)]"
          >
            <a
              href="#work"
              className="chamfer inline-flex items-center gap-4 border border-[#0fa3c2] bg-[#15BCDF] px-8 py-4 font-industrial text-sm font-bold uppercase tracking-[0.14em] text-[#1a1c1e] shadow-[0_0_0_1px_rgba(21,188,223,0.42),0_12px_34px_-12px_rgba(15,163,194,0.8)] transition-all duration-300 hover:bg-[#3fd0ef] hover:shadow-[0_0_0_1px_rgba(21,188,223,0.65),0_16px_42px_-12px_rgba(15,163,194,0.9)]"
            >
              Explore stories <span className="h-px w-6 bg-ink" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hidden md:absolute md:bottom-8 md:left-10 md:z-10 md:block md:text-xs md:uppercase md:tracking-[0.18em] md:text-zinc-500">
        {profile.location}
      </div>
      <div className="hidden md:absolute md:bottom-8 md:right-10 md:z-10 md:block md:text-right md:text-xs md:uppercase md:tracking-[0.18em] md:text-zinc-500">
        {profile.experience} experience
      </div>
    </section>
  );
}
