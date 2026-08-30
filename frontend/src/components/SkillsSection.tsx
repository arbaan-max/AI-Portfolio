import { skillClusters } from '../data/portfolio';
import { Reveal } from './Reveal';

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#f7f8fb] px-6 py-24 md:px-12 lg:px-20">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">technical map</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-ink md:text-6xl">
              The stack behind
              <br />
              the story.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-zinc-600">
            A focused toolkit for cross-platform apps, clean state, backend integration, performance, and delivery leadership.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillClusters.map((cluster, index) => {
            const Icon = cluster.icon;
            return (
              <Reveal key={cluster.title} delay={0.06 * index}>
                <div className="h-full rounded-[30px] border border-black/10 bg-white/70 p-6 shadow-soft-ring backdrop-blur-xl">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink">{cluster.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cluster.items.map((item) => (
                      <span key={item} className="rounded-full border border-black/10 bg-[#f6f7f9] px-3 py-1.5 text-sm text-zinc-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
