import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { focusAreas, profile, stats } from '../data/portfolio';
import { ease, inView } from '../lib/motion';
import { Counter } from './ui/Counter';
import { SectionLabel } from './ui/SectionLabel';

type WordProps = {
  value: string;
  accent: boolean;
  range: [number, number];
  progress: MotionValue<number>;
};

function Word({ value, accent, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.26em] inline-block ${accent ? 'text-accent' : ''}`}>
      {value}
    </motion.span>
  );
}

/** Paragraph that "inks in" one word at a time as it scrolls through the viewport. */
function ScrollStory({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = text.split(' ');

  return (
    <p
      ref={ref}
      aria-label={text.replace(/\*/g, '')}
      className="font-display text-[clamp(1.5rem,3.4vw,3.1rem)] font-bold leading-[1.18]"
    >
      {words.map((raw, index) => {
        const accent = raw.startsWith('*') && raw.endsWith('*');
        return (
          <Word
            key={`${raw}-${index}`}
            value={accent ? raw.slice(1, -1) : raw}
            accent={accent}
            range={[index / words.length, (index + 1) / words.length]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

export function About() {
  return (
    <section id="story" className="relative bg-ink px-gutter py-section text-paper">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="01" className="mb-12 text-paper/60">
          Story
        </SectionLabel>

        <div className="max-w-[1150px]">
          <ScrollStory text={profile.story} />
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-paper/15 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.8, ease: ease.out, delay: index * 0.08 }}
              className="flex flex-col-reverse justify-end gap-3 border-b border-paper/15 py-8 pr-6 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="max-w-[22ch] text-sm leading-relaxed text-paper/60">{stat.label}</dt>
              <dd className="display text-[clamp(3rem,7vw,6rem)]">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>

        <div className="mt-20 grid gap-px bg-paper/15 md:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.8, ease: ease.out, delay: index * 0.1 }}
                className="group bg-ink p-8 transition-colors duration-500 hover:bg-graphite lg:p-10"
              >
                <span className="chamfer-sm grid h-12 w-12 place-items-center bg-paper/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="display mt-8 text-xl">{area.title}</h3>
                <p className="mt-4 leading-relaxed text-paper/65">{area.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
