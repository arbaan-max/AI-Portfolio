import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

const inquiryTypes = ['Flutter app', 'Architecture review', 'Backend/API work', 'Team lead role'];

export function ContactSection() {
  const [selected, setSelected] = useState<string[]>(['Flutter app']);
  const [message, setMessage] = useState('');

  const toggleType = (type: string) => {
    setSelected((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type],
    );
  };

  const submitInquiry = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Inquiry for ${selected.join(', ') || 'portfolio discussion'}`);
    const body = encodeURIComponent(
      `Hi Arbaan,\n\nI want to discuss: ${selected.join(', ') || 'a portfolio inquiry'}.\n\n${message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="absolute left-1/2 top-0 h-64 w-[80vw] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">contact</p>
          <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
            Bring me into
            <br />
            the next build.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Available for senior Flutter work, lead mobile engineering, architecture decisions, and full-stack delivery support.
          </p>

          <div className="mt-10 grid gap-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/15">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/15">
              <Phone size={18} /> {profile.phone}
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/85 backdrop-blur-md">
              <MapPin size={18} /> {profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={submitInquiry} className="rounded-[34px] border border-white/15 bg-white/10 p-5 shadow-glass backdrop-blur-xl md:p-7">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em]">What should we talk about?</h3>
            <p className="mt-2 text-sm text-white/60">Select all that apply, add a note, and it opens a ready email.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {inquiryTypes.map((type) => {
                const active = selected.includes(type);
                return (
                  <motion.button
                    key={type}
                    type="button"
                    whileTap={{ scale: 0.96 }}
                    onClick={() => toggleType(type)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      active
                        ? 'border-cyan bg-cyan text-ink'
                        : 'border-white/15 bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    {active && <Check size={15} />}
                    {type}
                  </motion.button>
                );
              })}
            </div>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me what you are building, improving, or hiring for..."
              className="mt-6 min-h-36 w-full resize-none rounded-[24px] border border-white/15 bg-white/10 p-4 text-white outline-none placeholder:text-white/40 focus:border-cyan"
            />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs italic text-white/50">
                Ready to inquire about: {selected.length ? selected.join(', ') : 'portfolio discussion'}
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/85">
                send inquiry <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-20 flex max-w-7xl justify-end border-t border-white/10 pt-8 text-sm text-white/50">
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/15" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/15" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/15" aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </section>
  );
}
