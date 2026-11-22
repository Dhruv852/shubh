import { useRef, type CSSProperties } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { invitation } from '../../config'
import { artFallback, artSet } from '../../lib/assets'
import { FlourishDivider } from '../FloralDecorations/FloralDecorations'
import { Reveal } from '../Shared/Reveal'

const petals = [
  { left: '6%', delay: '-3s', duration: '27s', size: 14, sway: '56px', spin: '220deg', tone: 'rose' },
  { left: '18%', delay: '-17s', duration: '33s', size: 9, sway: '40px', spin: '-160deg', tone: 'ivory' },
  { left: '29%', delay: '-9s', duration: '24s', size: 15, sway: '64px', spin: '300deg', tone: 'rose' },
  { left: '41%', delay: '-22s', duration: '36s', size: 10, sway: '46px', spin: '180deg', tone: 'rose' },
  { left: '52%', delay: '-12s', duration: '30s', size: 12, sway: '58px', spin: '-220deg', tone: 'ivory' },
  { left: '64%', delay: '-5s', duration: '26s', size: 9, sway: '38px', spin: '260deg', tone: 'rose' },
  { left: '73%', delay: '-19s', duration: '34s', size: 14, sway: '52px', spin: '-120deg', tone: 'rose' },
  { left: '84%', delay: '-7s', duration: '29s', size: 11, sway: '44px', spin: '200deg', tone: 'ivory' },
  { left: '93%', delay: '-25s', duration: '38s', size: 12, sway: '60px', spin: '-260deg', tone: 'rose' },
]

function petalStyle(petal: (typeof petals)[number]): CSSProperties {
  return {
    left: petal.left,
    animationDelay: petal.delay,
    animationDuration: petal.duration,
    ['--petal-size' as string]: `${petal.size}px`,
    ['--sway' as string]: petal.sway,
    ['--spin' as string]: petal.spin,
    ['--petal-tone' as string]: petal.tone === 'rose' ? 'var(--rose)' : 'var(--ivory)',
  } as CSSProperties
}

export function RomanticGarden() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const artY = useTransform(scrollYProgress, [0, 1], ['-6.5%', '6.5%'])

  return (
    <section
      ref={sectionRef}
      className="scene scene--interlude"
      aria-labelledby="interlude-heading"
    >
      <motion.div className="interlude__art" style={reduced ? undefined : { y: artY }}>
        <picture>
          <source media="(min-aspect-ratio: 4/5)" srcSet={artSet('peacocks')} sizes="100vw" />
          <img
            src={artFallback('peacocks-portrait')}
            srcSet={artSet('peacocks-portrait')}
            sizes="100vw"
            alt="An illustrated royal garden at sunset, where two peacocks face each other beside a lotus pond below a marble pavilion."
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </motion.div>
      <div className="interlude__scrim" aria-hidden="true" />
      <div className="interlude__shimmer" aria-hidden="true" />

      <div className="interlude__petals" aria-hidden="true">
        {petals.map((petal, i) => (
          <span key={i} className="petal" style={petalStyle(petal)} />
        ))}
      </div>

      <div className="interlude__frame" aria-hidden="true">
        <span className="interlude__frame-label">An interlude</span>
      </div>

      <div className="interlude__content">
        <Reveal className="interlude__ornament" y={28}>
          <span className="interlude__rule" />
          <span className="interlude__diamond" />
          <span className="interlude__rule" />
        </Reveal>
        <Reveal delay={0.06} y={46}>
          <p className="interlude__eyebrow">{invitation.interlude.subline}</p>
        </Reveal>
        <Reveal delay={0.12} y={64}>
          <h2 id="interlude-heading" className="interlude__line" aria-label={invitation.interlude.line}>
            {invitation.interlude.lineParts.map((part) => (
              <span key={part}>{part}</span>
            ))}
          </h2>
        </Reveal>
        <Reveal className="interlude__divider" delay={0.2} y={34}>
          <FlourishDivider />
        </Reveal>
      </div>

      <div className="interlude__fade" aria-hidden="true" />
    </section>
  )
}
