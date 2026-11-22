import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { invitation } from '../../config'
import { artFallback, artSet, type Stage } from '../../lib/assets'
import { Diya, FloralCorner, FlourishDivider, LotusMark } from '../FloralDecorations/FloralDecorations'
import { ArchCrown, DoorLeaf } from './Doors'
import { Garland } from './Garland'
import { GardenReveal } from '../GardenReveal/GardenReveal'

type Props = {
  stage: Stage
  reduced: boolean
  onOpen: () => void
}

const doorEase = [0.42, 0.01, 0.15, 0.99] as [number, number, number, number]

export function PalaceEntrance({ stage, reduced, onOpen }: Props) {
  const open = stage !== 'closed'
  const revealRef = useRef<HTMLDivElement>(null)

  const doorTransition = {
    duration: reduced ? 0.35 : 2.25,
    delay: reduced ? 0 : 0.08,
    ease: doorEase,
  }

  useEffect(() => {
    if (stage !== 'revealed') return
    const timer = window.setTimeout(() => revealRef.current?.focus({ preventScroll: true }), reduced ? 100 : 600)
    return () => window.clearTimeout(timer)
  }, [stage, reduced])

  return (
    <section
      id="entrance"
      className={[
        'gate-scene',
        stage === 'opening' ? 'is-opening' : '',
        stage === 'revealed' ? 'is-revealed' : '',
      ].join(' ')}
      data-stage={stage}
      aria-label="The royal entrance"
    >
      <div className="reveal-field" aria-hidden="true">
        <img
          className="reveal-field__img"
          src={artFallback('garden')}
          srcSet={artSet('garden')}
          sizes="100vw"
          alt=""
          width={1536}
          height={1024}
          decoding="async"
          fetchPriority="high"
        />
        <div className="reveal-field__veil" />
        <div className="reveal-field__vignette" />
      </div>

      <div className="gate" aria-hidden={stage === 'revealed'}>
        <div className="gate__texture" aria-hidden="true" />
        <div className="gate__niche" aria-hidden="true" />
        <FloralCorner className="gate__corner gate__corner--tl" />
        <FloralCorner className="gate__corner gate__corner--tr" />
        <FloralCorner className="gate__corner gate__corner--bl" />
        <FloralCorner className="gate__corner gate__corner--br" />

        <div className="gate__inner">
          <header className="gate__head">
            <LotusMark className="gate__lotus" />
            <p className="gate__blessing">{invitation.entrance.blessing}</p>
            <p className="gate__greeting">{invitation.entrance.greeting}</p>
          </header>

          <div className="portal-wrap">
            <div className="portal">
              <div className="portal__garden" aria-hidden="true">
                <img
                  src={artFallback('garden')}
                  srcSet={artSet('garden')}
                  sizes="(max-width: 640px) 86vw, 470px"
                  alt=""
                  width={1536}
                  height={1024}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="portal__shade" aria-hidden="true" />

              <div className="doorway">
                <motion.div
                  className="door door--left"
                  initial={false}
                  animate={open ? { rotateY: -88 } : { rotateY: 0 }}
                  transition={doorTransition}
                >
                  <DoorLeaf />
                </motion.div>
                <motion.div
                  className="door door--right"
                  initial={false}
                  animate={open ? { rotateY: 88 } : { rotateY: 0 }}
                  transition={{ ...doorTransition, delay: (doorTransition.delay ?? 0) + 0.035 }}
                >
                  <DoorLeaf />
                </motion.div>
              </div>

              <div className="portal__spill" aria-hidden="true" />
              <ArchCrown />
              <Garland />

              <div className="plinth" aria-hidden="true" />
              <Diya className="diya diya--left" />
              <Diya className="diya diya--right" />
            </div>
          </div>

          <footer className="gate__foot">
            <FlourishDivider className="gate__flourish" />
            <button
              type="button"
              className="open-button"
              onClick={onOpen}
              disabled={stage !== 'closed'}
            >
              <span className="open-button__icon" aria-hidden="true">
                <svg viewBox="0 0 26 26" fill="none" focusable="false">
                  <path
                    d="M5 22V9.5C5 6.4 8.1 3.8 13 3.8s8 2.6 8 5.7V22"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                  <path d="M13 4v18" stroke="currentColor" strokeWidth=".8" opacity=".65" />
                  <path d="M3.6 22h18.8" stroke="currentColor" strokeWidth=".9" strokeLinecap="round" opacity=".8" />
                  <circle cx="10.4" cy="13.2" r=".95" fill="currentColor" />
                  <circle cx="15.6" cy="13.2" r=".95" fill="currentColor" />
                </svg>
              </span>
              <span className="open-button__text">
                <span className="open-button__label">
                  {stage === 'closed' ? invitation.entrance.control : invitation.entrance.opening}
                </span>
                <span className="open-button__hint">
                  {stage === 'closed' ? invitation.entrance.hint : invitation.entrance.openingHint}
                </span>
              </span>
            </button>
          </footer>
        </div>

        <div className="gate__vignette" aria-hidden="true" />
      </div>

      <GardenReveal stage={stage} containerRef={revealRef} />

      <p className="sr-only" aria-live="polite">
        {stage === 'opening'
          ? 'The invitation is opening.'
          : stage === 'revealed'
            ? 'The invitation has opened. Scroll to continue.'
            : ''}
      </p>
    </section>
  )
}
