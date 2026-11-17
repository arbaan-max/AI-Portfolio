import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { webProjects, type WebProject } from '../data/portfolio';
import { curtain, ease, useMediaQuery } from '../lib/motion';
import { SectionHead } from './ui/SectionHead';

type ProjectTextProps = {
  project: WebProject;
  index: number;
  focused: boolean;
  register: (node: HTMLElement | null) => void;
};

function ProjectText({ project, index, focused, register }: ProjectTextProps) {
  return (
    <motion.article
      ref={register}
      data-index={index}
      animate={{ opacity: focused ? 1 : 0.28 }}
      transition={{ duration: 0.7, ease: ease.soft }}
      className="flex flex-col justify-center py-12 lg:min-h-[86vh] lg:py-0"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} in a new tab`}
        className="plate plate-pan mb-9 block aspect-[4/5] w-full max-w-[460px] lg:hidden"
      >
        <span className="plate-view block">
          <img
            src={project.tall}
            alt={`${project.name} website`}
            loading="lazy"
            className="is-live absolute left-0 top-0 w-full"
          />
        </span>
      </a>

      <p className="label flex flex-wrap gap-x-5 gap-y-1 text-muted">
        <span className="text-accent">
          0{index + 1} / 0{webProjects.length}
        </span>
        <span>{project.origin}</span>
        <span>{project.market}</span>
      </p>

      <h3 className="display mt-6 text-display-md">{project.name}</h3>
      <p className="mt-2 font-display text-2xl italic text-accent">{project.kind}</p>

      <p className="mt-6 max-w-[46ch] text-body-lg">{project.summary}</p>

      <ul className="mt-8 max-w-[46ch] border-b border-ink/15">
        {project.points.map((point) => (
          <li key={point} className="border-t border-ink/15 py-3 text-muted">
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a href={project.url} target="_blank" rel="noreferrer" className="label link text-ink">
          Visit {project.displayUrl} <ArrowUpRight size={14} strokeWidth={2} />
        </a>
        <span className="label text-muted">{project.builtWith}</span>
      </div>
    </motion.article>
  );
}

export function WebWork() {
  const desktop = useMediaQuery('(min-width: 1024px)');
  const [active, setActive] = useState(0);
  const nodes = useRef<(HTMLElement | null)[]>([]);

  // The project whose text crosses the middle of the screen owns the plate.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    nodes.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = webProjects[active];

  return (
    <section id="work" className="px-gutter pb-section pt-section lg:pb-0">
      <div className="mx-auto max-w-page">
        <SectionHead eyebrow="Selected work" title="Websites and *platforms*">
          Four built at VirtuProse and one for a client. Every picture is the real site, and each one opens in a
          new tab.
        </SectionHead>

        <div className="mt-10 grid lg:mt-0 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            {webProjects.map((project, index) => (
              <ProjectText
                key={project.id}
                project={project}
                index={index}
                focused={!desktop || active === index}
                register={(node) => {
                  nodes.current[index] = node;
                }}
              />
            ))}
          </div>

          <div className="hidden lg:col-span-6 lg:col-start-7 lg:block">
            <div className="sticky top-0 flex h-screen flex-col items-end justify-center gap-6">
              <a
                href={current.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="Open site"
                aria-label={`Open ${current.name} in a new tab`}
                className="plate plate-pan block aspect-[4/5] h-[74vh]"
              >
                <span className="plate-view block">
                  {webProjects.map((project, index) => (
                    <motion.span
                      key={project.id}
                      className="absolute inset-0 block overflow-hidden"
                      style={{ zIndex: index }}
                      initial={false}
                      animate={{ clipPath: index <= active ? curtain.open : curtain.closed }}
                      transition={{ duration: 1, ease: ease.soft }}
                    >
                      <motion.span
                        className="block h-full origin-top"
                        initial={false}
                        animate={{ scale: index <= active ? 1 : 1.16 }}
                        transition={{ duration: 1.2, ease: ease.soft }}
                      >
                        <img
                          src={project.tall}
                          alt={index === active ? `${project.name} website` : ''}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          className={`absolute left-0 top-0 w-full ${index === active ? 'is-live' : ''}`}
                        />
                      </motion.span>
                    </motion.span>
                  ))}
                </span>
              </a>

              <div className="flex w-[calc(74vh*0.8)] items-center gap-5">
                <span className="label tabular-nums text-ink">
                  0{active + 1} <span className="text-muted">/ 0{webProjects.length}</span>
                </span>
                <span className="h-px flex-1 bg-ink/15">
                  <motion.span
                    className="block h-full origin-left bg-accent"
                    initial={false}
                    animate={{ scaleX: (active + 1) / webProjects.length }}
                    transition={{ duration: 0.9, ease: ease.soft }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
