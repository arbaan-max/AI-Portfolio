import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import heroPoster from '../assets/hero-poster.jpg';
import { AutoplayVideo } from './AutoplayVideo';

const TARGO_HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_050407_500d0339-ab28-41c1-9688-132a74a3b5aa.mp4';

export function Hero() {
  const { displayed, done } = useTypewriter('Flutter apps. Clean architecture. Teams that ship.', 34, 520);
  const [query, setQuery] = useState('');

  const submitQuestion = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent('Portfolio inquiry');
    const body = encodeURIComponent(
      query
        ? `Hi Arbaan, I wanted to ask about: ${query}`
        : 'Hi Arbaan, I would like to discuss a project with you.',
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-targo-base pb-12 pt-28 sm:pt-36 md:pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <AutoplayVideo
          src={TARGO_HERO_VIDEO}
          poster={heroPoster}
          startAt={2}
          className="h-full w-full scale-[1.12] object-cover object-[66%_center] opacity-50 saturate-50 contrast-90 sm:opacity-58 md:absolute md:right-[-26vw] md:top-0 md:h-full md:w-[78vw] md:scale-100 md:object-cover md:object-[66%_center] md:opacity-68 lg:right-[-25vw] xl:right-[-23vw] xl:w-[76vw]"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full bg-[linear-gradient(90deg,rgba(242,241,240,0.96)_0%,rgba(242,241,240,0.86)_52%,rgba(242,241,240,0.52)_82%,rgba(242,241,240,0.18)_100%)] md:w-[86%] md:bg-[linear-gradient(90deg,#F2F1F0_0%,#F2F1F0_55%,rgba(242,241,240,0.9)_74%,rgba(242,241,240,0.35)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-x-4 px-5 pt-[320px] md:px-12 md:pt-10 lg:px-20">
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
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
            className="targo-heading max-w-[640px] text-[clamp(2.3rem,6vw,4.85rem)] font-bold text-[#2b3033]"
          >
            Scaling
            <br />
            mobile
            <br />
            platform
            <br />
            <span>for</span>
            <br />
            <span>real</span>
            <br />
            <span className="text-cyan">products</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-[#6b6f72] md:text-xl"
          >
            <span>{displayed}</span>
            {!done && <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-1 bg-ink animate-blink" />}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            onSubmit={submitQuestion}
            className="mt-8 flex w-full max-w-xl items-center rounded-[10px] border border-black/[0.05] bg-white p-1 pl-4 shadow-sm"
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ask about Flutter, apps, APIs..."
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-zinc-400 sm:text-base"
            />
            <button
              className="relative grid h-10 w-10 flex-none place-items-center rounded-full bg-cyan text-ink transition-transform hover:scale-105"
              aria-label="Send inquiry"
            >
              <ArrowRight size={18} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="mt-8 grid w-full max-w-xl grid-cols-2 gap-3 sm:flex sm:flex-wrap"
          >
            <a href="#work" className="chamfer col-span-2 inline-flex items-center justify-center gap-3 border border-cyan-border bg-cyan px-8 py-4 font-industrial text-sm font-bold uppercase tracking-[0.14em] text-[#1a1c1e] shadow-[0_0_0_1px_rgba(21,188,223,0.35),0_10px_30px_-12px_rgba(15,163,194,0.6)] transition-colors hover:bg-cyan-hover sm:col-span-1">
              Explore stories <span className="h-px w-6 bg-ink" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-white">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-white">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="col-span-2 inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-white sm:col-span-1">
              <Mail size={16} /> {profile.email}
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
