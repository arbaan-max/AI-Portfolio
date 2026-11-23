import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { ease, tileEntrance } from '../lib/motion';
import { TILE_RADIUS } from './ui/DetailPanel';
import { SectionHead } from './ui/SectionHead';

export function Experience() {
  return (
    <section id="experience" className="px-gutter pb-section">
      <div className="mx-auto max-w-page">
        <SectionHead eyebrow="Experience" title="Where I've *worked*">
          Six companies, one client project and freelance work.
        </SectionHead>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((item, index) => {
            const current = item.tag === 'Current';
            return (
              <motion.li
                key={item.company}
                {...tileEntrance(index)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: ease.soft }}
                className={`group flex min-h-[230px] flex-col p-7 ${
                  current ? 'bg-tile-saffron text-ink' : 'border border-ink/10 bg-surface text-ink'
                }`}
                style={{ borderRadius: TILE_RADIUS }}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="label opacity-60">0{index + 1}</span>
                  <span
                    className={`label inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${
                      current ? 'bg-ink text-tile-saffron' : 'bg-band text-muted'
                    }`}
                  >
                    {current && <span className="h-1.5 w-1.5 rounded-full bg-tile-saffron" />}
                    {item.tag}
                  </span>
                </span>
                <h3 className="mt-auto pt-8 font-display text-[2rem] font-medium leading-tight transition-transform duration-500 ease-soft group-hover:translate-x-1">
                  {item.company}
                </h3>
                <p className="mt-1 font-medium">{item.focus}</p>
                <p className={`mt-1 text-[0.95rem] ${current ? 'text-ink/75' : 'text-muted'}`}>{item.work}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
