import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { aboutStory, profile, services, toolGroups } from '../data/portfolio';
import { ease, inView, tileEntrance } from '../lib/motion';
import { TILE_RADIUS } from './ui/DetailPanel';
import { SectionHead } from './ui/SectionHead';

const serviceColours = ['bg-tile-blush', 'bg-tile-sage', 'bg-tile-sky'];

export function About() {
  return (
    <section id="about" className="px-gutter pb-section">
      <div className="mx-auto max-w-page">
        <SectionHead eyebrow="About" title="One engineer, *every* layer" />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          <motion.div
            {...tileEntrance(0)}
            className="border border-ink/10 bg-surface p-7 sm:p-10 md:col-span-2 lg:col-span-8"
            style={{ borderRadius: TILE_RADIUS }}
          >
            <p className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.3] text-ink">
              {aboutStory.map((part, index) => (
                <Fragment key={index}>
                  {typeof part === 'string' ? (
                    `${part} `
                  ) : (
                    <motion.span
                      className="mx-[0.1em] mr-[0.3em] inline-block h-[0.9em] w-[1.6em] overflow-hidden rounded-md align-[-0.1em] shadow-plate"
                      initial={{ scale: 0.4, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={inView}
                      transition={{ duration: 0.8, ease: ease.soft, delay: 0.3 + index * 0.08 }}
                    >
                      <img src={part.img} alt={part.alt} loading="lazy" className="h-full w-full object-cover object-top" />
                    </motion.span>
                  )}
                </Fragment>
              ))}
            </p>
          </motion.div>

          <motion.div
            {...tileEntrance(1)}
            className="flex min-h-[260px] flex-col justify-between bg-tile-teal p-7 text-surface sm:p-10 md:col-span-2 lg:col-span-4"
            style={{ borderRadius: TILE_RADIUS }}
          >
            <p className="label inline-flex items-center gap-3 opacity-90">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-tile-sage opacity-70" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-tile-sage" />
              </span>
              Open to new projects
            </p>
            <div>
              <p className="label opacity-70">Based in</p>
              <p className="mt-2 font-display text-4xl font-medium">{profile.location}</p>
              <p className="label mt-6 opacity-70">Building for</p>
              <p className="mt-2 font-display text-2xl">India, Kuwait and Saudi Arabia</p>
            </div>
          </motion.div>

          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...tileEntrance(index + 2)}
              whileHover={{ y: -4 }}
              className={`flex min-h-[220px] flex-col justify-between p-7 text-ink sm:p-8 lg:col-span-4 ${serviceColours[index]}`}
              style={{ borderRadius: TILE_RADIUS }}
            >
              <span className="label opacity-70">0{index + 1}</span>
              <div>
                <h3 className="font-display text-[2rem] font-medium leading-tight">{service.title}</h3>
                <p className="mt-2 max-w-[34ch] text-body">{service.body}</p>
              </div>
            </motion.article>
          ))}

          <motion.div
            {...tileEntrance(5)}
            className="grid gap-8 bg-ink p-7 text-surface sm:grid-cols-2 sm:p-10 md:col-span-2 lg:col-span-12 lg:grid-cols-4"
            style={{ borderRadius: TILE_RADIUS }}
          >
            {toolGroups.map((group) => (
              <div key={group.title}>
                <h3 className="label text-tile-saffron">{group.title}</h3>
                <motion.ul
                  className="mt-4 flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, scale: 0.85 },
                        show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: ease.soft } },
                      }}
                      className="rounded-full border border-surface/20 px-3.5 py-1.5 text-[0.95rem] transition-colors duration-300 hover:border-tile-saffron hover:text-tile-saffron"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
