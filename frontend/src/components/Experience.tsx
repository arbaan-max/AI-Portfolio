import { motion } from 'framer-motion';
import { experience, toolGroups } from '../data/portfolio';
import { ease, inView } from '../lib/motion';
import { SectionHead } from './ui/SectionHead';

export function Experience() {
  return (
    <section id="experience" className="bg-band px-gutter py-section">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHead eyebrow="Experience" title="Where I've *worked*" className="lg:sticky lg:top-28">
              Six companies, one client project and freelance work.
            </SectionHead>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {experience.map((item, index) => (
              <motion.li
                key={item.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.9, ease: ease.soft, delay: index * 0.05 }}
                className="group relative grid gap-x-8 gap-y-1 border-t border-ink/15 py-6 last:border-b sm:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_5.5rem] sm:items-baseline"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 inset-y-0 -mx-4 origin-left scale-x-0 bg-surface transition-transform duration-700 ease-soft group-hover:scale-x-100"
                />
                <h3 className="display relative text-[1.9rem] transition-transform duration-700 ease-soft group-hover:translate-x-2">
                  {item.company}
                </h3>
                <p className="relative">
                  <span className="block text-ink">{item.focus}</span>
                  <span className="block text-muted">{item.work}</span>
                </p>
                <span className={`label relative sm:text-right ${item.tag === 'Current' ? 'text-accent' : 'text-muted'}`}>
                  {item.tag}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHead eyebrow="Tools" title="What I work *with*" />
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {toolGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: groupIndex * 0.08 } } }}
              >
                <h3 className="label border-b border-ink/15 pb-4 text-accent">{group.title}</h3>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li key={item} className="overflow-hidden">
                      <motion.span
                        className="block py-1 font-display text-[1.45rem] text-ink"
                        variants={{
                          hidden: { y: '110%' },
                          show: { y: '0%', transition: { duration: 0.9, ease: ease.soft } },
                        }}
                      >
                        {item}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
