import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';
import { ease } from '../lib/motion';
import { Reveal } from './ui/Reveal';
import { RevealText } from './ui/RevealText';
import { SectionHead } from './ui/SectionHead';
import { Wash } from './ui/Wash';

const projectTypes = ['Mobile app', 'Website or store', 'ERP or dashboard', 'Backend and APIs', 'Code review', 'Full-time role'];

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'arbaan-flutter-developer', href: profile.linkedin },
  { label: 'GitHub', value: 'arbaan-max', href: profile.github },
];

export function ContactSection() {
  const [selected, setSelected] = useState<string[]>(['Mobile app']);
  const [message, setMessage] = useState('');

  const toggleType = (type: string) => {
    setSelected((current) => (current.includes(type) ? current.filter((item) => item !== type) : [...current, type]));
  };

  const submitBrief = (event: FormEvent) => {
    event.preventDefault();
    const topics = selected.join(', ') || 'a project';
    const subject = encodeURIComponent(`Project: ${topics}`);
    const body = encodeURIComponent(`Hi Arbaan,\n\nI'd like to talk about: ${topics}.\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden px-gutter py-section">
      <Wash />
      <div className="relative mx-auto max-w-page">
        <SectionHead eyebrow="Contact" title="Tell me what you need *built*" align="center">
          A mobile app, a website, a store or an ERP. Send a few lines and I&apos;ll reply with questions and a
          plan.
        </SectionHead>

        <div className="mx-auto mt-16 grid max-w-[1040px] gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <dl>
              {contactLinks.map((link) => (
                <div key={link.label} className="grid grid-cols-[6rem_minmax(0,1fr)] items-baseline border-t border-ink/15 py-5">
                  <dt className="label text-muted">{link.label}</dt>
                  <dd className="min-w-0">
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group inline-flex max-w-full items-center gap-2 font-display text-2xl text-ink transition-colors duration-300 hover:text-accent"
                    >
                      <span className="truncate">{link.value}</span>
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.6}
                        className="shrink-0 opacity-0 transition-[opacity,transform] duration-500 ease-soft group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-baseline border-y border-ink/15 py-5">
                <dt className="label text-muted">Based in</dt>
                <dd className="font-display text-2xl text-ink">{profile.location}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={submitBrief} className="plate !p-7 sm:!p-10">
              <fieldset>
                <legend className="label text-muted">What do you need?</legend>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {projectTypes.map((type) => {
                    const active = selected.includes(type);
                    return (
                      <motion.button
                        key={type}
                        type="button"
                        aria-pressed={active}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => toggleType(type)}
                        className={`flex items-center gap-3 border px-4 py-3.5 text-left text-[0.95rem] transition-colors duration-300 ${
                          active ? 'border-accent bg-accent/10 text-ink' : 'border-ink/15 text-muted hover:border-ink/40'
                        }`}
                      >
                        <span className="grid h-3.5 w-3.5 shrink-0 place-items-center border border-current">
                          <motion.span
                            className="h-2 w-2 bg-accent"
                            initial={false}
                            animate={{ scale: active ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: ease.soft }}
                          />
                        </span>
                        {type}
                      </motion.button>
                    );
                  })}
                </div>
              </fieldset>

              <label htmlFor="brief" className="label mt-9 block text-muted">
                A few lines about it
              </label>
              <textarea
                id="brief"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={4}
                className="mt-4 w-full resize-none border border-ink/15 bg-paper/60 p-4 text-ink transition-colors duration-300 focus:border-accent focus:outline-none"
              />

              <button type="submit" className="btn mt-7 w-full">
                Start a project <ArrowUpRight size={15} strokeWidth={2} />
              </button>
              <p className="mt-4 text-center text-sm text-muted">Opens your email app with this filled in.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const elsewhere = [
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
    { label: 'Email', href: `mailto:${profile.email}` },
  ];

  return (
    <footer className="on-dark bg-night px-gutter pb-8 pt-20 text-surface">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <RevealText as="p" text={profile.name} className="display text-[clamp(2.8rem,7vw,6.5rem)]" stagger={0.1} />
            <p className="mt-5 max-w-sm text-surface/65">
              {profile.role} in {profile.location}. Apps, websites and business software.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 md:col-span-4 md:col-start-9">
            <div>
              <h2 className="label text-surface/55">Sections</h2>
              <ul className="mt-5 grid gap-2.5">
                {[...navItems, { label: 'Contact', href: '#contact' }].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-surface/85 transition-colors duration-300 hover:text-gold">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label text-surface/55">Elsewhere</h2>
              <ul className="mt-5 grid gap-2.5">
                {elsewhere.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-surface/85 transition-colors duration-300 hover:text-gold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="rule-double mt-16" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-surface/60">
          <span>© 2026 {profile.name}</span>
          <a href="#home" className="inline-flex items-center gap-2 text-surface transition-colors duration-300 hover:text-gold">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
