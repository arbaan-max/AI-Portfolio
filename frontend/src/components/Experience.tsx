import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experience } from '../data/portfolio';
import { ease, inView } from '../lib/motion';
import { RevealText } from './ui/RevealText';
import { SectionLabel } from './ui/SectionLabel';

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.8', 'end 0.6'] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" className="bg-paper px-gutter py-section">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="04" className="mb-5 text-muted">
              Experience
            </SectionLabel>
            <RevealText text="Where I've *built.*" className="display text-display-lg" accentClassName="text-accent-deep" />
          </div>
          <p className="max-w-sm text-muted lg:pb-2">
            Six companies, one client engagement and freelance builds. Different products, the same job: get it live.
          </p>
        </div>

        <ol ref={listRef} className="relative border-t border-ink/15">
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-[3px] origin-top bg-accent lg:block"
            style={{ scaleY: line }}
          />
          {experience.map((item, index) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inView}
              transition={{ duration: 0.7, ease: ease.out, delay: index * 0.04 }}
              className="group relative grid items-baseline gap-x-8 gap-y-2 overflow-hidden border-b border-ink/15 py-7 sm:grid-cols-[3rem_minmax(0,1fr)_auto] lg:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.3fr)_6rem] lg:px-8 lg:py-9"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100"
              />
              <span className="label relative text-muted transition-colors duration-300 group-hover:text-accent">
                0{index + 1}
              </span>
              <h3 className="display relative text-[clamp(1.6rem,3.4vw,3rem)] transition-[color,transform] duration-500 ease-out group-hover:translate-x-2 group-hover:text-paper">
                {item.company}
              </h3>
              <p className="relative font-medium transition-colors duration-300 group-hover:text-paper sm:col-start-2 lg:col-start-auto">
                {item.focus}
              </p>
              <p className="relative text-muted transition-colors duration-300 group-hover:text-paper/65 sm:col-start-2 lg:col-start-auto">
                {item.work}
              </p>
              <span
                className={`label relative inline-flex w-fit items-center gap-2 px-3 py-1.5 sm:col-start-3 sm:row-start-1 lg:col-start-auto lg:row-start-auto ${
                  item.tag === 'Now' ? 'bg-ink text-paper group-hover:bg-accent group-hover:text-ink' : 'text-muted group-hover:text-paper/65'
                } transition-colors duration-300`}
              >
                {item.tag === 'Now' && <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
                {item.tag}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
