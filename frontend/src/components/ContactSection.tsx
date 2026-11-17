import { useRef, useState, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Check, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Magnetic } from './ui/Magnetic';
import { Reveal } from './ui/Reveal';
import { RevealText } from './ui/RevealText';
import { SectionLabel } from './ui/SectionLabel';

const inquiryTypes = [
  'Mobile app',
  'Website or store',
  'ERP or dashboard',
  'Backend / API',
  'Architecture review',
  'Full-time role',
];

export function ContactSection() {
  const [selected, setSelected] = useState<string[]>(['Mobile app']);
  const [message, setMessage] = useState('');

  const toggleType = (type: string) => {
    setSelected((current) => (current.includes(type) ? current.filter((item) => item !== type) : [...current, type]));
  };

  const submitInquiry = (event: FormEvent) => {
    event.preventDefault();
    const topics = selected.join(', ') || 'a project';
    const subject = encodeURIComponent(`Inquiry: ${topics}`);
    const body = encodeURIComponent(`Hi Arbaan,\n\nI want to discuss: ${topics}.\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', href: profile.github },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-paper px-gutter py-section">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionLabel index="06" className="mb-6 text-muted">
            Contact
          </SectionLabel>
          <RevealText
            text="Got a product to ship? *Let's* *build* *it.*"
            className="display max-w-[12ch] text-display-xl"
            accentClassName="text-accent-deep"
          />
          <Reveal delay={0.2} className="mt-8 max-w-md text-body-lg text-muted">
            Open to app builds, websites and stores, ERP and dashboard work, backend APIs and senior product
            engineering roles.
          </Reveal>

          <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-8">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${profile.email}`}
                className="group grid h-40 w-40 place-items-center rounded-full bg-accent text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <span className="display flex flex-col items-center gap-2 text-sm tracking-[0.12em]">
                  <ArrowUpRight size={28} className="transition-transform duration-500 group-hover:rotate-45" />
                  Email me
                </span>
              </a>
            </Magnetic>
            <ul className="grid gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-3 font-medium text-ink"
                    >
                      <Icon size={17} className="text-accent-deep" />
                      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out group-hover/link:bg-[length:100%_1px]">
                        {link.label}
                      </span>
                    </a>
                  </li>
                );
              })}
              <li className="inline-flex items-center gap-3 text-muted">
                <MapPin size={17} className="text-accent-deep" /> {profile.location}
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5 lg:pt-10">
          <form onSubmit={submitInquiry} className="chamfer-lg bg-ink p-7 text-paper sm:p-10">
            <h3 className="display text-2xl">What should we talk about?</h3>
            <p className="mt-3 text-sm text-paper/60">Pick what applies, add a note, and it opens a ready email.</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {inquiryTypes.map((type) => {
                const active = selected.includes(type);
                return (
                  <motion.button
                    key={type}
                    type="button"
                    aria-pressed={active}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => toggleType(type)}
                    className={`label inline-flex items-center gap-2 border px-3.5 py-2.5 transition-colors duration-200 ${
                      active ? 'border-accent bg-accent text-ink' : 'border-paper/20 text-paper/75 hover:border-paper/50'
                    }`}
                  >
                    {active && <Check size={13} strokeWidth={3} />}
                    {type}
                  </motion.button>
                );
              })}
            </div>

            <label htmlFor="message" className="label mt-8 block text-paper/60">
              A short note
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              placeholder="What are you building, and by when?"
              className="mt-3 w-full resize-none border border-paper/20 bg-transparent p-4 text-paper placeholder:text-paper/40 focus:border-accent focus:outline-none"
            />

            <button type="submit" className="btn btn-primary mt-6 w-full hover:!bg-paper hover:!text-ink">
              Open email draft <ArrowUpRight size={16} strokeWidth={2.4} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['-12%', '0%']);

  return (
    <footer ref={ref} className="overflow-hidden bg-ink px-gutter pb-8 pt-16 text-paper">
      <motion.p
        aria-hidden="true"
        style={{ x }}
        className="display text-outline whitespace-nowrap text-[clamp(2.4rem,10.4vw,12rem)] leading-[0.9] text-paper/45"
      >
        Arbaan Qureshi
      </motion.p>
      <div className="label mx-auto mt-12 flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6 text-paper/60">
        <span>© 2026 {profile.name}</span>
        <span>{profile.role}</span>
        <a href="#home" className="inline-flex items-center gap-2 text-paper transition-colors hover:text-accent">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
