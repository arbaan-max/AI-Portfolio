import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Layers3, Route, Wrench, X, type LucideIcon } from 'lucide-react';
import { projectStories, type ProjectStory } from '../data/portfolio';
import { Reveal } from './Reveal';

type StoryStep = {
  number: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

function getStorySteps(project: ProjectStory): StoryStep[] {
  return [
    { number: '01', label: 'Issue', title: 'What was broken', body: project.before, icon: Clock3 },
    { number: '02', label: 'Challenge', title: 'The Flutter challenge', body: project.challenge, icon: Layers3 },
    { number: '03', label: 'Build', title: 'How I solved it', body: project.solution, icon: Wrench },
    { number: '04', label: 'Impact', title: 'What changed', body: project.result, icon: CheckCircle2 },
  ];
}

function StoryScene({
  project,
  steps,
  activeIndex,
  onStepChange,
}: {
  project: ProjectStory;
  steps: StoryStep[];
  activeIndex: number;
  onStepChange: (index: number) => void;
}) {
  const activeStep = steps[activeIndex] ?? steps[0];
  const ActiveIcon = activeStep.icon;
  const progressHeight = steps.length > 1 ? 12 + (activeIndex / (steps.length - 1)) * 78 : 22;

  return (
    <div className="perspective-stage relative min-h-[520px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f4f5f9] p-5 shadow-soft-ring md:h-full md:min-h-[760px]">
      <div className="absolute inset-0 story-grid opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(21,188,223,0.18),transparent_26%),radial-gradient(circle_at_18%_82%,rgba(255,255,255,0.88),transparent_35%)]" />

      <motion.div
        animate={{ rotateX: [7, 2, 7], rotateY: [-16, -7, -16], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="project-card-3d absolute bottom-[11%] right-[9%] h-44 w-32 rounded-[28px] border border-black/15 bg-white p-3 shadow-glass"
      >
        <div className="h-full rounded-[22px] border border-black/10 bg-gradient-to-b from-white to-[#dfe3ea] p-3">
          <div className="mb-4 h-2 w-12 rounded-full bg-ink/80" />
          <div className="space-y-2">
            <div className="h-5 rounded-full bg-cyan" />
            <div className="h-3 rounded-full bg-zinc-300" />
            <div className="h-3 w-3/4 rounded-full bg-zinc-300" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2">
            <div className="h-10 rounded-2xl bg-white shadow-sm" />
            <div className="h-10 rounded-2xl bg-white shadow-sm" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[14%] top-[18%] h-16 w-16 rounded-full border border-white/70 bg-white/40 shadow-soft-ring backdrop-blur-md"
      />
      <motion.div
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[22%] left-[13%] h-12 w-12 rounded-full border border-black/10 bg-cyan/55 shadow-soft-ring backdrop-blur-md"
      />

      <div className="relative z-10 flex h-full min-h-[480px] flex-col justify-between gap-8 md:min-h-[720px]">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-industrial text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">story map</p>
              <h4 className="mt-3 max-w-64 font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-ink">
                {project.sceneLabel}
              </h4>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white/70 text-cyan shadow-soft-ring backdrop-blur-md">
              <Route size={20} />
            </div>
          </div>

          <div className="relative mt-8 space-y-3 pl-5">
            <div className="absolute bottom-5 left-[9px] top-5 w-px bg-black/10" />
            <motion.div
              className="absolute left-[9px] top-5 w-px bg-cyan"
              animate={{ height: `${progressHeight}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={step.number}
                  type="button"
                  onClick={() => onStepChange(index)}
                  onMouseEnter={() => onStepChange(index)}
                  whileHover={{ x: 4 }}
                  className={`relative flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                    isActive
                      ? 'border-cyan/50 bg-white/90 shadow-soft-ring'
                      : 'border-transparent bg-white/45 hover:border-black/10 hover:bg-white/70'
                  }`}
                >
                  <span className={`absolute -left-[24px] h-3 w-3 rounded-full border ${isActive ? 'border-cyan bg-cyan' : 'border-black/15 bg-white'}`} />
                  <span className={`grid h-9 w-9 flex-none place-items-center rounded-full ${isActive ? 'bg-cyan text-ink' : 'bg-white text-zinc-500'}`}>
                    <StepIcon size={17} />
                  </span>
                  <span>
                    <span className="block font-industrial text-[0.64rem] font-bold uppercase tracking-[0.14em] text-zinc-400">
                      {step.number} / {step.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-tight text-ink">{step.title}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeStep.number}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="max-w-sm rounded-3xl border border-black/10 bg-white/75 p-4 shadow-soft-ring backdrop-blur-xl"
      >
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white">
              <ActiveIcon size={16} />
            </span>
            <div>
              <p className="font-industrial text-[0.62rem] font-bold uppercase tracking-[0.14em] text-zinc-400">{activeStep.label}</p>
              <p className="text-sm font-semibold text-ink">{project.scale}</p>
            </div>
          </div>
          <p className="line-clamp-4 text-sm leading-relaxed text-zinc-600">{activeStep.body}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.highlights.slice(0, 3).map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[0.68rem] font-medium text-zinc-600">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ScrollStoryObjects() {
  const { scrollYProgress } = useScroll();
  const firstY = useTransform(scrollYProgress, [0.15, 0.75], [120, -140]);
  const secondY = useTransform(scrollYProgress, [0.2, 0.85], [-80, 160]);
  const rotate = useTransform(scrollYProgress, [0.15, 0.85], [-14, 18]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: firstY, rotate }}
        className="absolute -left-16 top-28 hidden h-44 w-32 rounded-[28px] border border-black/10 bg-white/60 shadow-soft-ring backdrop-blur-xl md:block"
      >
        <div className="m-4 h-3 w-16 rounded-full bg-cyan" />
        <div className="mx-4 mt-16 h-16 rounded-3xl border border-black/10 bg-[#f7f8fb]" />
      </motion.div>
      <motion.div
        style={{ y: secondY, rotate }}
        className="absolute -right-10 bottom-40 hidden h-36 w-36 rounded-[34px] border border-black/10 bg-cyan/70 shadow-soft-ring backdrop-blur-xl lg:block"
      >
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/70" />
      </motion.div>
    </div>
  );
}

function StoryModal({ project, onClose }: { project: ProjectStory; onClose: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const steps = getStorySteps(project);
  const activeBeat = project.storyBeats[activeBeatIndex] ?? project.storyBeats[0];
  const nextBeatIndex = (activeBeatIndex + 1) % project.storyBeats.length;

  const selectBeat = (index: number) => {
    setActiveBeatIndex(index);
    setActiveStep(Math.min(index, steps.length - 1));
  };

  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-ink/30 p-4 backdrop-blur-sm md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.32, ease: 'easeOut' }}
        className="mx-auto grid max-w-6xl gap-6 rounded-[34px] bg-bg-base p-4 shadow-glass md:grid-cols-[0.9fr_1.1fr] md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <StoryScene project={project} steps={steps} activeIndex={activeStep} onStepChange={setActiveStep} />
        <div className="rounded-[28px] bg-white p-6 md:p-8">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {project.company} / {project.type}
              </p>
              <h3 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-ink md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 inline-flex rounded-full border border-black/10 bg-[#f7f8fb] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {project.scale}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 flex-none place-items-center rounded-full border border-black/10 bg-[#f7f8fb] text-ink"
              aria-label="Close story"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mb-5 rounded-[28px] border border-cyan/30 bg-cyan/10 p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-industrial text-[0.64rem] font-bold uppercase tracking-[0.16em] text-cyan">business story mode</p>
              </div>
              <span className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-soft-ring sm:inline-flex">
                {activeBeatIndex + 1}/{project.storyBeats.length}
              </span>
            </div>

            <motion.div
              key={activeBeat.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-[24px] border border-black/10 bg-white p-5 shadow-soft-ring"
            >
              <h4 className="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-ink">{activeBeat.title}</h4>
              <p className="mt-3 leading-relaxed text-zinc-700">{activeBeat.body}</p>
            </motion.div>

            <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="flex flex-wrap gap-2">
                {project.storyBeats.map((beat, index) => (
                  <button
                    key={beat.title}
                    type="button"
                    onClick={() => selectBeat(index)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      activeBeatIndex === index ? 'border-ink bg-ink text-white' : 'border-black/10 bg-white text-zinc-600 hover:border-cyan/50'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => selectBeat(nextBeatIndex)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                next chapter <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid gap-3">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => {
                  setActiveStep(index);
                  setActiveBeatIndex(Math.min(index, project.storyBeats.length - 1));
                }}
                onMouseEnter={() => {
                  setActiveStep(index);
                  setActiveBeatIndex(Math.min(index, project.storyBeats.length - 1));
                }}
                className={`group rounded-3xl border p-5 text-left transition-colors ${
                  activeStep === index ? 'border-cyan/50 bg-cyan/10' : 'border-black/10 bg-[#f7f8fb] hover:border-cyan/35'
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.18em] text-zinc-400">{step.number}</span>
                  <ChevronRight size={16} className="text-zinc-400 transition-transform group-hover:translate-x-1" />
                  <h4 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">{step.title}</h4>
                </div>
                <p className="leading-relaxed text-zinc-700">{step.body}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function ProjectStories() {
  const [selectedProject, setSelectedProject] = useState<ProjectStory | null>(null);

  return (
    <section id="work" className="relative overflow-hidden bg-bg-base px-6 py-24 md:px-12 lg:px-20">
      <ScrollStoryObjects />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              <Layers3 size={14} /> project stories
            </p>
            <h2 className="targo-heading text-5xl font-bold text-[#2b3033] md:text-6xl">
              20+ projects.
              <br />
              <span className="text-cyan">5 companies + freelance.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-zinc-600">
            Tap a card to read the short build story: the issue, the Flutter challenge, the software decisions, and the result.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectStories.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index}>
              <motion.button
                type="button"
                onClick={() => setSelectedProject(project)}
                whileTap={{ scale: 0.98 }}
                className="project-card-3d group flex h-full min-h-[390px] w-full flex-col justify-between overflow-hidden rounded-[34px] border border-black/10 bg-white/75 p-6 text-left shadow-soft-ring backdrop-blur-xl transition-all duration-300 hover:border-black/20"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="rounded-full bg-[#f1f3f7] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      {project.company}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                  <p className="mb-4 font-industrial text-xs font-bold uppercase tracking-[0.14em] text-cyan">{project.type}</p>
                  <h3 className="font-display text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">{project.summary}</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan px-3 py-1.5 text-xs font-semibold text-ink">
                    {project.scale}
                  </span>
                  {project.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-zinc-600">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>{selectedProject && <StoryModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </section>
  );
}
