import { useCallback, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  ArrowUpRight,
  Calculator,
  LayoutDashboard,
  type LucideIcon,
  PartyPopper,
  Plus,
  Smartphone,
  Store,
  TrendingUp,
  Truck,
} from 'lucide-react';
import { projectStories, type ProjectStory } from '../data/portfolio';
import { ease, tileEntrance } from '../lib/motion';
import { DetailPanel, TILE_RADIUS } from './ui/DetailPanel';
import { SectionHead } from './ui/SectionHead';

/** Placement and colour per app. Light text on the deep tiles, ink on the pale ones. */
const tiles: Record<string, { span: string; bg: string; fg: string; accent: string }> = {
  tingting: { span: 'lg:col-span-7 lg:row-span-2', bg: 'rgb(var(--c-tile-cobalt))', fg: '#FBF8F3', accent: '#F2B33D' },
  growon: { span: 'lg:col-span-5 lg:row-span-2', bg: 'rgb(var(--c-tile-teal))', fg: '#FBF8F3', accent: '#CFE0C3' },
  'tekrio-apps': { span: 'lg:col-span-4 lg:row-span-2', bg: '#0E6FAE', fg: '#FFFFFF', accent: '#BDE8FF' },
  back2basics: { span: 'lg:col-span-4 lg:row-span-2', bg: '#16303A', fg: '#F2FBFC', accent: '#3CC6D9' },
  'people-wire': { span: 'lg:col-span-4 lg:row-span-2', bg: 'rgb(var(--c-tile-terracotta))', fg: '#FBF8F3', accent: '#F1D5CB' },
  onespa: { span: 'lg:col-span-4', bg: 'rgb(var(--c-tile-blush))', fg: '#262321', accent: '#7A4535' },
  playzo: { span: 'lg:col-span-4', bg: 'rgb(var(--c-tile-saffron))', fg: '#262321', accent: '#262321' },
  pqube: { span: 'lg:col-span-4', bg: 'rgb(var(--c-tile-sage))', fg: '#262321', accent: '#1F6F78' },
};

const order = ['tingting', 'growon', 'tekrio-apps', 'back2basics', 'people-wire', 'onespa', 'playzo', 'pqube'];

const supportingIcons: Record<string, LucideIcon> = {
  Accounts: Calculator,
  Store,
  Delivery: Truck,
  'Live monitoring': Activity,
  'Admin dashboard': LayoutDashboard,
  Investors: TrendingUp,
  'Festival specials manager': PartyPopper,
};

const steps = (project: ProjectStory) => [
  { label: 'The issue', body: project.before },
  { label: 'The hard part', body: project.challenge },
  { label: 'What I built', body: project.solution },
  { label: 'What changed', body: project.result },
];

/** Up to three screens, taking each app's first screen before anyone's second. */
const fanShots = (project: ProjectStory) => {
  const apps = project.apps ?? [];
  const picked: string[] = [];
  for (let round = 0; picked.length < 3 && round < 3; round += 1) {
    apps.forEach((app) => {
      if (picked.length < 3 && app.shots[round]) {
        picked.push(app.shots[round]);
      }
    });
  }
  return picked;
};

/** Three phone screens fanned like cards; they spread apart when the tile is hovered. */
function ScreenFan({ shots, large }: { shots: string[]; large: boolean }) {
  const middle = (shots.length - 1) / 2;
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 block ${large ? 'h-[64%]' : 'h-[56%]'}`}>
      {shots.map((src, index) => {
        const offset = index - middle;
        return (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            style={{ '--o': offset, zIndex: 10 - Math.abs(offset) } as CSSProperties}
            className="absolute bottom-0 left-1/2 h-full w-auto origin-bottom rounded-[18px] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.6)] ring-1 ring-black/10 transition-transform duration-700 ease-soft [transform:translateX(calc(-50%+var(--o)*44%))_translateY(16%)_rotate(calc(var(--o)*6deg))] group-hover:[transform:translateX(calc(-50%+var(--o)*62%))_translateY(7%)_rotate(calc(var(--o)*9deg))]"
          />
        );
      })}
    </span>
  );
}

function AppTile({ project, index, onOpen }: { project: ProjectStory; index: number; onOpen: () => void }) {
  const tile = tiles[project.id];
  const large = index === 0;
  const shots = fanShots(project);
  const hasShots = shots.length > 0;

  return (
    <motion.div
      {...tileEntrance(index)}
      className={`${hasShots ? 'min-h-[560px] lg:min-h-0' : 'min-h-[260px] lg:min-h-0'} ${tile.span}`}
    >
      <motion.button
        type="button"
        layoutId={`app-${project.id}`}
        onClick={onOpen}
        data-cursor="Open"
        aria-label={`${project.title}, ${project.company}. See screens and the case study`}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.5, ease: ease.soft }}
        className="group relative flex h-full w-full flex-col overflow-hidden p-7 text-left sm:p-8"
        style={{ backgroundColor: tile.bg, color: tile.fg, borderRadius: TILE_RADIUS }}
      >
        {!hasShots && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[0.18em] -right-[0.04em] font-display font-medium leading-none opacity-[0.13] transition-transform duration-700 ease-soft group-hover:-translate-y-2"
            style={{ fontSize: 'clamp(8rem,13vw,12rem)' }}
          >
            0{index + 1}
          </span>
        )}

        <span className="relative z-20 flex w-full items-start justify-between gap-4">
          <span className="flex flex-wrap items-center gap-3">
            {project.apps && (
              <span className="flex -space-x-2">
                {project.apps.map((app) => (
                  <img
                    key={app.icon}
                    src={app.icon}
                    alt=""
                    className="h-9 w-9 rounded-[10px] ring-2"
                    style={{ '--tw-ring-color': tile.bg } as CSSProperties}
                  />
                ))}
              </span>
            )}
            <span className="label opacity-80">{project.company}</span>
          </span>
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-soft group-hover:rotate-90"
            style={{ backgroundColor: tile.accent, color: tile.bg }}
          >
            <Plus size={17} strokeWidth={2} />
          </span>
        </span>

        <span className={`relative z-20 block ${hasShots ? 'mt-6' : 'mt-auto pt-10'}`}>
          <span
            className={`block font-display font-medium leading-[1.02] ${
              large ? 'text-[clamp(2.3rem,4vw,3.8rem)]' : 'text-[clamp(1.9rem,2.5vw,2.4rem)]'
            }`}
          >
            {project.sceneLabel}
          </span>
          <span className="mt-3 block text-[0.98rem] opacity-80">
            {project.title}
            {project.apps ? ' · On Google Play' : ` · ${project.type}`}
          </span>
          {project.supporting && (
            <span
              className="mt-4 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-sm font-medium"
              style={{ backgroundColor: 'rgb(255 255 255 / 0.14)' }}
            >
              <span className="rounded-full px-2.5 py-0.5" style={{ backgroundColor: tile.accent, color: tile.bg }}>
                +{project.supporting.count}
              </span>
              supporting apps behind the store
            </span>
          )}
        </span>

        {hasShots && <ScreenFan shots={shots} large={large} />}
      </motion.button>
    </motion.div>
  );
}

function StoreListing({ project }: { project: ProjectStory }) {
  const tile = tiles[project.id];
  if (!project.apps) {
    return null;
  }
  return (
    <div className="mt-10 grid gap-4">
      {project.apps.map((app, index) => (
        <motion.div
          key={app.url}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.soft, delay: 0.35 + index * 0.08 }}
          className="rounded-[22px] p-5 sm:p-6"
          style={{ backgroundColor: 'rgb(127 127 127 / 0.14)' }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <img src={app.icon} alt={`${app.name} icon`} className="h-14 w-14 rounded-[14px]" />
            <div className="min-w-0">
              <p className="font-display text-2xl font-medium leading-tight">{app.name}</p>
              <p className="label mt-1 opacity-70">
                Android{app.downloads ? ` · ${app.downloads} downloads` : ''}
              </p>
            </div>
            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
              className="label ml-auto inline-flex items-center gap-2.5 rounded-full px-5 py-3.5 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: tile.accent, color: tile.bg }}
            >
              Get it on Google Play <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
          <div className="mt-5 flex gap-3 overflow-x-auto overscroll-x-contain pb-2">
            {app.shots.map((shot, shotIndex) => (
              <img
                key={shot}
                src={shot}
                alt={`${app.name} screen ${shotIndex + 1}`}
                loading="lazy"
                className="h-[300px] w-auto shrink-0 rounded-[16px] sm:h-[360px]"
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** The internal apps that run the operation, laid out as small app cards. */
function SupportingApps({ project }: { project: ProjectStory }) {
  const tile = tiles[project.id];
  if (!project.supporting) {
    return null;
  }
  const { count, apps } = project.supporting;
  return (
    <div className="mt-12">
      <p className="label" style={{ color: tile.accent }}>
        Plus {count} supporting apps
      </p>
      <p className="mt-3 max-w-[60ch] opacity-85">
        The customer app is one piece. These run the stores, riders, money, offers and oversight behind it.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {apps.map((name, index) => {
          const Icon = supportingIcons[name] ?? Smartphone;
          return (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: ease.soft, delay: 0.45 + index * 0.05 }}
              className="flex flex-col gap-4 rounded-[18px] p-4"
              style={{ backgroundColor: 'rgb(127 127 127 / 0.14)' }}
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-[12px]"
                style={{ backgroundColor: tile.accent, color: tile.bg }}
              >
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="font-medium leading-snug">{name}</span>
            </motion.li>
          );
        })}
        <motion.li
          initial={{ opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: ease.soft, delay: 0.45 + apps.length * 0.05 }}
          className="flex flex-col justify-end rounded-[18px] border border-dashed p-4"
          style={{ borderColor: 'currentColor' }}
        >
          <span className="font-display text-3xl font-medium leading-none">{count}</span>
          <span className="mt-1 text-sm opacity-80">apps in total, one shared system</span>
        </motion.li>
      </ul>
    </div>
  );
}

function AppDetail({ project }: { project: ProjectStory }) {
  const tile = tiles[project.id];
  return (
    <div className="p-6 sm:p-10 lg:p-14">
      <p className="label pr-14 opacity-75">
        {project.company} · {project.type}
      </p>
      <h3 className="mt-5 max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-none">
        {project.sceneLabel}
      </h3>
      <p className="mt-3 font-display text-2xl italic" style={{ color: tile.accent }}>
        {project.title}
      </p>
      <p className="mt-7 max-w-[60ch] text-body-lg opacity-90">{project.summary}</p>

      <StoreListing project={project} />
      <SupportingApps project={project} />

      <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
        {steps(project).map((step, index) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: ease.soft, delay: 0.45 + index * 0.07 }}
            className="border-t pt-5"
            style={{ borderColor: 'currentColor' }}
          >
            <dt className="label" style={{ color: tile.accent }}>
              {step.label}
            </dt>
            <dd className="mt-3 leading-relaxed opacity-85">{step.body}</dd>
          </motion.div>
        ))}
      </dl>

      <p className="label mt-10 opacity-70">{project.stack.join(' · ')}</p>
    </div>
  );
}

export const orderedStories = order
  .map((id) => projectStories.find((story) => story.id === id))
  .filter((story): story is ProjectStory => Boolean(story));

export const storeAppCount = orderedStories.reduce((total, story) => total + (story.apps?.length ?? 0), 0);

export function Apps() {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);
  const open = orderedStories.find((story) => story.id === openId);

  return (
    <section id="apps" className="px-gutter pb-section">
      <div className="mx-auto max-w-page">
        <SectionHead eyebrow="Apps" title="Flutter apps I've *shipped*">
          Eight products, and {storeAppCount} apps live on Google Play. Open one to see its screens, get the app and
          read how it was built.
        </SectionHead>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-12">
          {orderedStories.map((project, index) => (
            <AppTile key={project.id} project={project} index={index} onOpen={() => setOpenId(project.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <DetailPanel
            key={open.id}
            layoutId={`app-${open.id}`}
            label={`${open.title} case study`}
            bg={tiles[open.id].bg}
            fg={tiles[open.id].fg}
            onClose={close}
          >
            <AppDetail project={open} />
          </DetailPanel>
        )}
      </AnimatePresence>
    </section>
  );
}
