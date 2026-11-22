import type { RefObject } from 'react'
import { invitation } from '../../config'
import type { Stage } from '../../lib/assets'
import { ScrollCue } from '../FloralDecorations/FloralDecorations'

type Props = {
  stage: Stage
  containerRef?: RefObject<HTMLDivElement | null>
}

export function GardenReveal({ stage, containerRef }: Props) {
  const revealed = stage === 'revealed'
  return (
    <div
      ref={containerRef}
      className="reveal-content"
      aria-hidden={!revealed}
      tabIndex={-1}
    >
      <p className="reveal-eyebrow reveal-item" style={{ ['--delay' as string]: '0.35s' }}>
        {invitation.reveal.kicker}
      </p>
      <h2 className="couple-names">
        <span className="reveal-item couple-names__name" style={{ ['--delay' as string]: '0.55s' }}>
          {invitation.couple.first}
        </span>
        <span className="couple-names__amp reveal-item" style={{ ['--delay' as string]: '0.82s' }} aria-hidden="true">
          <i className="couple-names__rule" />
          <span className="couple-names__amp-glyph">&amp;</span>
          <i className="couple-names__rule" />
        </span>
        <span className="reveal-item couple-names__name" style={{ ['--delay' as string]: '1.08s' }}>
          {invitation.couple.second}
        </span>
      </h2>
      <div className="reveal-rule reveal-item" style={{ ['--delay' as string]: '1.3s' }}>
        <span />
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 3.5 14.4 12 12 20.5 9.6 12 12 3.5Z" fill="currentColor" opacity=".9" />
          <circle cx="12" cy="12" r="2.1" fill="var(--burgundy-deep)" />
        </svg>
        <span />
      </div>
      <p className="reveal-celebration reveal-item" style={{ ['--delay' as string]: '1.45s' }}>
        {invitation.reveal.celebration}
      </p>
      <p className="reveal-line reveal-item" style={{ ['--delay' as string]: '1.62s' }}>
        {invitation.reveal.line}
      </p>
      <div className="reveal-item reveal-cue" style={{ ['--delay' as string]: '2.35s' }}>
        <ScrollCue label={invitation.reveal.scroll} />
      </div>
    </div>
  )
}
