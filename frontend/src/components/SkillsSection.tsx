import { motion } from 'framer-motion';
import { skillClusters } from '../data/portfolio';
import { ease, inView } from '../lib/motion';
import { RevealText } from './ui/RevealText';
import { SectionLabel } from './ui/SectionLabel';

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.out, staggerChildren: 0.05, delayChildren: 0.2 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: ease.out } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-ink px-gutter py-section text-paper">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="05" className="mb-5 text-paper/60">
              Skills
            </SectionLabel>
            <RevealText text="The *toolkit.*" className="display text-display-lg" />
          </div>
          <p className="max-w-sm text-paper/60 lg:pb-2">
            Grouped by the job they do, from the first screen to the server behind it.
          </p>
        </div>

        <motion.div
          className="grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          transition={{ staggerChildren: 0.08 }}
        >
          {skillClusters.map((cluster, index) => {
            const Icon = cluster.icon;
            return (
              <motion.article
                key={cluster.title}
                variants={card}
                className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-graphite lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="chamfer-sm grid h-12 w-12 place-items-center bg-paper/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="label text-paper/40">0{index + 1}</span>
                </div>
                <h3 className="display mt-8 text-xl">{cluster.title}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cluster.items.map((item) => (
                    <motion.li key={item} variants={chip} className="chip text-paper/80">
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
