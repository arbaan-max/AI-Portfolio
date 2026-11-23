import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { webProjects, type WebProject } from '../data/portfolio';
import { ease, tileEntrance } from '../lib/motion';
import { orderedStories, storeAppCount } from './Apps';
import { DetailPanel, TILE_RADIUS } from './ui/DetailPanel';
import { SectionHead } from './ui/SectionHead';

/** Grid placement and screenshot size per project. */
const small = 'w-[68%] translate-y-[36%] sm:w-[44%] sm:translate-y-[30%]';
const layout: Record<string, { span: string; text: string; img: string }> = {
  'trapped-inn': {
    span: 'lg:col-span-8 lg:row-span-2',
    text: 'lg:max-w-[34%]',
    img: 'w-[68%] translate-y-[24%] sm:w-[52%] lg:w-[58%] lg:translate-y-[16%]',
  },
  'lily-eve': {
    span: 'lg:col-span-4 lg:row-span-2',
    text: '',
    img: 'w-[68%] translate-y-[24%] sm:w-[52%] lg:w-[80%] lg:translate-y-[22%]',
  },
  maktob: { span: 'lg:col-span-5', text: 'sm:max-w-[46%]', img: small },
  orvia: { span: 'lg:col-span-7', text: 'sm:max-w-[46%]', img: small },
  tekrio: { span: 'lg:col-span-7', text: 'sm:max-w-[46%]', img: small },
};

function ProjectTile({ project, index, onOpen }: { project: WebProject; index: number; onOpen: () => void }) {
  const { span, text, img } = layout[project.id];
  const { bg, fg, accent } = project.tile;

  return (
    <motion.div {...tileEntrance(index)} className={`min-h-[460px] md:min-h-[400px] lg:min-h-0 ${span}`}>
      <motion.button
        type="button"
        layoutId={`work-${project.id}`}
        onClick={onOpen}
        data-cursor="View"
        aria-label={`${project.name}, ${project.kind}. Open details`}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.5, ease: ease.soft }}
        className="group relative flex h-full w-full flex-col overflow-hidden p-7 text-left sm:p-8"
        style={{ backgroundColor: bg, color: fg, borderRadius: TILE_RADIUS }}
      >
        <span className="relative z-10 flex w-full items-start justify-between gap-4">
          <span className="label opacity-75">
            {project.origin} · {project.market}
          </span>
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-soft group-hover:rotate-45"
            style={{ backgroundColor: accent, color: bg }}
          >
            <ArrowUpRight size={17} strokeWidth={2} />
          </span>
        </span>

        <span className={`relative z-10 mt-4 block ${text}`}>
          <span className="block font-display text-[clamp(1.9rem,2.7vw,2.7rem)] font-medium leading-[1.04]">
            {project.name}
          </span>
          <span className="mt-2 block font-display text-xl italic" style={{ color: accent }}>
            {project.kind}
          </span>
        </span>

        <img
          src={project.plate}
          alt=""
          loading="lazy"
          className={`absolute bottom-0 right-6 rounded-t-[16px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-soft group-hover:-translate-y-3 group-hover:scale-[1.02] ${img}`}
        />
      </motion.button>
    </motion.div>
  );
}

function ProjectDetail({ project }: { project: WebProject }) {
  const { fg, accent, bg } = project.tile;
  return (
    <div className="grid gap-8 p-5 sm:p-9 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
      <div
        className="aspect-[4/5] overflow-y-auto overscroll-contain rounded-[18px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
        tabIndex={0}
        aria-label={`${project.name} page, scrollable`}
      >
        <img src={project.tall} alt={`${project.name} website, full page`} className="block w-full" />
      </div>

      <div className="flex flex-col py-2 md:py-6 md:pr-10">
        <p className="label opacity-75">
          {project.origin} · {project.market}
        </p>
        <h3 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-none">{project.name}</h3>
        <p className="mt-3 font-display text-2xl italic" style={{ color: accent }}>
          {project.kind}
        </p>
        <p className="mt-6 text-body-lg opacity-90">{project.summary}</p>
        <ul className="mt-7">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3 border-t py-3 opacity-85" style={{ borderColor: `${fg}26` }}>
              <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="label inline-flex items-center gap-3 rounded-full px-6 py-4 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
            style={{ backgroundColor: accent, color: bg }}
          >
            Visit {project.displayUrl} <ArrowUpRight size={15} strokeWidth={2} />
          </a>
          <span className="label opacity-60">Built with {project.builtWith}</span>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);
  const open = webProjects.find((project) => project.id === openId);

  return (
    <section id="work" className="px-gutter py-section">
      <div className="mx-auto max-w-page">
        <SectionHead eyebrow="Selected work" title="Websites and *platforms*">
          Four built at VirtuProse and one for a client. Open a tile to scroll the real page.
        </SectionHead>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-12">
          {webProjects.map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} onOpen={() => setOpenId(project.id)} />
          ))}

          <motion.a
            {...tileEntrance(webProjects.length)}
            href="#apps"
            whileHover={{ y: -4 }}
            className="group flex min-h-[260px] flex-col justify-between bg-tile-saffron p-7 text-ink sm:p-8 lg:col-span-5 lg:min-h-0"
            style={{ borderRadius: TILE_RADIUS }}
          >
            <span className="flex items-start justify-between gap-4">
              <span className="label opacity-75">Flutter apps</span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-tile-saffron transition-transform duration-500 ease-soft group-hover:translate-y-1">
                <ArrowDown size={17} strokeWidth={2} />
              </span>
            </span>
            <span className="block font-display text-[clamp(1.9rem,2.7vw,2.7rem)] font-medium leading-[1.06]">
              {storeAppCount} apps live on Google Play, from school portals to <em>quick commerce</em>
            </span>
            <span className="flex flex-wrap gap-y-2 -space-x-2">
              {orderedStories
                .flatMap((story) => story.apps ?? [])
                .map((app, index) => (
                  <motion.img
                    key={app.icon}
                    src={app.icon}
                    alt=""
                    className="h-11 w-11 rounded-[12px] ring-2 ring-tile-saffron transition-transform duration-500 ease-soft group-hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  />
                ))}
            </span>
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <DetailPanel
            key={open.id}
            layoutId={`work-${open.id}`}
            label={`${open.name} details`}
            bg={open.tile.bg}
            fg={open.tile.fg}
            onClose={close}
          >
            <ProjectDetail project={open} />
          </DetailPanel>
        )}
      </AnimatePresence>
    </section>
  );
}
