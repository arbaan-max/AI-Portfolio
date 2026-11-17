import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { projectStories, type ProjectStory } from '../data/portfolio';
import { ease, useMediaQuery } from '../lib/motion';
import { RevealText } from './ui/RevealText';
import { SectionLabel } from './ui/SectionLabel';

const getSteps = (project: ProjectStory) => [
  { label: 'Issue', title: 'What was broken', body: project.before },
  { label: 'Challenge', title: 'The hard part', body: project.challenge },
  { label: 'Build', title: 'How I solved it', body: project.solution },
  { label: 'Impact', title: 'What changed', body: project.result },
];

type StoryCardProps = {
  project: ProjectStory;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
};

function StoryCard({ project, index, total, progress, stacked }: StoryCardProps) {
  const [step, setStep] = useState(0);
  const steps = getSteps(project);
  const dark = index % 2 === 1;
  // Each card shrinks slightly as the cards after it slide over the top.
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index - 1) * 0.03]);

  return (
    <div
      className="lg:sticky lg:mb-[14vh] lg:last:mb-0"
      style={stacked ? { top: `calc(6.5rem + ${index * 14}px)` } : undefined}
    >
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: ease.out }}
        style={stacked ? { scale } : undefined}
        className={`chamfer-lg grid origin-top gap-10 p-6 sm:p-10 lg:min-h-[62vh] lg:grid-cols-12 lg:gap-12 lg:p-14 ${
          dark ? 'bg-ink text-paper' : 'bg-surface text-ink shadow-lift'
        }`}
      >
        <div className="flex flex-col lg:col-span-5">
          <p className={`label flex items-center gap-4 ${dark ? 'text-paper/60' : 'text-muted'}`}>
            <span className={dark ? 'text-accent' : 'text-accent-deep'}>
              0{index + 1} / 0{total}
            </span>
            {project.company}
          </p>
          <h3 className="display mt-6 text-display-md">{project.sceneLabel}</h3>
          <p className="mt-4 font-display text-lg font-bold">{project.title}</p>
          <p className={`label mt-2 ${dark ? 'text-accent' : 'text-accent-deep'}`}>{project.type}</p>
          <p className={`mt-6 leading-relaxed ${dark ? 'text-paper/70' : 'text-muted'}`}>{project.summary}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-8">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex flex-col border-t pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 ${dark ? 'border-paper/15' : 'border-ink/10'}`}>
          <div role="tablist" aria-label={`${project.title} story`} className="flex flex-wrap gap-1">
            {steps.map((item, itemIndex) => {
              const selected = itemIndex === step;
              return (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setStep(itemIndex)}
                  className={`label relative px-4 py-3 transition-colors duration-200 ${
                    selected ? 'text-ink' : dark ? 'text-paper/60 hover:text-paper' : 'text-muted hover:text-ink'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId={`step-${project.id}`}
                      className="chamfer-sm absolute inset-0 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    0{itemIndex + 1} {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="mt-10 min-h-[13rem] flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: ease.out }}
              >
                <h4 className="display text-2xl">{steps[step].title}</h4>
                <p className={`mt-5 max-w-[58ch] text-body-lg ${dark ? 'text-paper/75' : 'text-ink/75'}`}>
                  {steps[step].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <ul className={`label mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t pt-6 ${dark ? 'border-paper/15 text-paper/60' : 'border-ink/10 text-muted'}`}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
}

export function AppStories() {
  const stacked = useMediaQuery('(min-width: 1024px) and (min-height: 700px)');
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start start', 'end end'] });

  return (
    <section id="apps" className="relative bg-sunken px-gutter py-section">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="03" className="mb-5 text-muted">
              App work
            </SectionLabel>
            <RevealText text="Shipped in *Flutter.*" className="display text-display-lg" accentClassName="text-accent-deep" />
          </div>
          <p className="max-w-sm text-muted lg:pb-2">
            Six products from schools to quick commerce. Each one is told the way it happened: the issue, the hard
            part, the build and what changed.
          </p>
        </div>

        <div ref={listRef} className="flex flex-col gap-6 lg:block">
          {projectStories.map((project, index) => (
            <StoryCard
              key={project.id}
              project={project}
              index={index}
              total={projectStories.length}
              progress={scrollYProgress}
              stacked={stacked}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
