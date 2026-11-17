import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { aboutStory, services } from '../data/portfolio';
import { ease, inView } from '../lib/motion';
import { DrawnRule, Reveal } from './ui/Reveal';

type PieceProps = {
  range: [number, number];
  progress: MotionValue<number>;
};

function Word({ value, range, progress }: PieceProps & { value: string }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.24em] inline-block">
      {value}
    </motion.span>
  );
}

/** A small plate set inside the sentence. It opens as the reading position reaches it. */
function InlinePlate({ src, alt, range, progress }: PieceProps & { src: string; alt: string }) {
  const scale = useTransform(progress, range, [0.82, 1]);
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span
      style={{ scale, opacity }}
      className="mx-[0.14em] mr-[0.34em] inline-block h-[0.86em] w-[1.5em] origin-center overflow-hidden rounded-plate align-[-0.08em] shadow-plate"
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
    </motion.span>
  );
}

/** Paragraph that inks in word by word as it travels up the screen. */
function ScrollStory() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.48'] });

  // Flatten the story into reading-order pieces so each gets its own slice of the scroll range.
  type Piece = { value: string } | { img: string; alt: string };
  const pieces = aboutStory.flatMap<Piece>((part) =>
    typeof part === 'string' ? part.split(' ').map((value) => ({ value })) : [part],
  );

  return (
    <p ref={ref} className="font-display text-lead font-medium text-ink">
      {pieces.map((piece, index) => {
        const range: [number, number] = [index / pieces.length, (index + 1) / pieces.length];
        return (
          <Fragment key={index}>
            {'value' in piece ? (
              <Word value={piece.value} range={range} progress={scrollYProgress} />
            ) : (
              <InlinePlate src={piece.img} alt={piece.alt} range={range} progress={scrollYProgress} />
            )}
          </Fragment>
        );
      })}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="px-gutter py-section">
      <div className="mx-auto max-w-page">
        <Reveal y={12}>
          <h2 className="label text-muted">About</h2>
        </Reveal>

        <div className="mt-10 max-w-[1080px]">
          <ScrollStory />
        </div>

        <div className="mt-24 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 1, ease: ease.soft, delay: index * 0.12 }}
            >
              <DrawnRule className="text-ink/25" delay={index * 0.12} />
              <h3 className="display mt-7 text-[1.9rem]">{service.title}</h3>
              <p className="mt-3 max-w-[34ch] text-muted">{service.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
