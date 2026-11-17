import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { projectStories, type ProjectStory } from '../data/portfolio';
import { ease, inView } from '../lib/motion';
import { SectionHead } from './ui/SectionHead';

const getSteps = (project: ProjectStory) => [
  { label: 'The issue', body: project.before },
  { label: 'The hard part', body: project.challenge },
  { label: 'What I built', body: project.solution },
  { label: 'What changed', body: project.result },
];

type StoryRowProps = {
  project: ProjectStory;
  index: number;
  open: boolean;
  onToggle: () => void;
};

function StoryRow({ project, index, open, onToggle }: StoryRowProps) {
  const panelId = `story-${project.id}`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.9, ease: ease.soft, delay: index * 0.06 }}
      className="border-t border-surface/20 last:border-b"
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 py-7 text-left md:grid-cols-[4rem_minmax(0,1.5fr)_minmax(0,1fr)_auto] md:gap-x-8 md:py-9"
        >
          <span className="label text-gold">0{index + 1}</span>
          <span className="display text-[clamp(1.6rem,3vw,2.6rem)] transition-transform duration-700 ease-soft group-hover:translate-x-3">
            {project.title}
          </span>
          <span className="label col-start-2 text-surface/60 md:col-start-auto">
            {project.company} · {project.type}
          </span>
          <span
            aria-hidden="true"
            className={`col-start-3 row-start-1 grid h-10 w-10 place-items-center self-center rounded-full border transition-[transform,background-color,border-color,color] duration-500 ease-soft md:col-start-auto md:row-start-auto ${
              open ? 'rotate-45 border-gold bg-gold text-night' : 'border-surface/30 group-hover:border-gold'
            }`}
          >
            <Plus size={17} strokeWidth={1.6} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: ease.soft }}
            className="overflow-hidden"
          >
            <div className="pb-12 md:pl-[6rem]">
              <p className="max-w-[58ch] font-display text-[clamp(1.35rem,2vw,1.75rem)] italic leading-snug text-surface/90">
                {project.summary}
              </p>
              <motion.dl
                className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-4"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
              >
                {getSteps(project).map((step) => (
                  <motion.div
                    key={step.label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.soft } },
                    }}
                    className="border-t border-surface/20 pt-5"
                  >
                    <dt className="label text-gold">{step.label}</dt>
                    <dd className="mt-3 text-[0.98rem] leading-relaxed text-surface/75">{step.body}</dd>
                  </motion.div>
                ))}
              </motion.dl>
              <p className="label mt-10 text-surface/55">{project.stack.join(' · ')}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export function AppStories() {
  const [open, setOpen] = useState<string | null>('tingting');

  return (
    <section id="apps" className="on-dark bg-night px-gutter py-section text-surface">
      <div className="mx-auto max-w-page">
        <SectionHead eyebrow="Case studies" title="Flutter apps I've *shipped*">
          Six products, from two school apps to a quick-commerce business run on almost twelve. Open a row to read
          how each one went.
        </SectionHead>

        <ul className="mt-16">
          {projectStories.map((project, index) => (
            <StoryRow
              key={project.id}
              project={project}
              index={index}
              open={open === project.id}
              onToggle={() => setOpen((current) => (current === project.id ? null : project.id))}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
