import { invitation } from '../../config'
import { artFallback, artSet } from '../../lib/assets'
import { FlourishDivider, LotusMark, Monogram } from '../FloralDecorations/FloralDecorations'
import { Reveal } from '../Shared/Reveal'

export function WeddingFinale() {
  return (
    <section className="scene scene--finale" aria-labelledby="finale-heading">
      <div className="finale__art" aria-hidden="true">
        <img
          src={artFallback('mandap')}
          srcSet={artSet('mandap')}
          sizes="100vw"
          alt=""
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="finale__scrim" aria-hidden="true" />

      <div className="finale__content">
        <Reveal className="finale__monogram" y={28}>
          <LotusMark />
        </Reveal>
        <Reveal delay={0.05} y={42}>
          <p className="finale__eyebrow">{invitation.finale.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.12} y={64}>
          <h2 id="finale-heading" className="finale__names">
            <span>{invitation.couple.first}</span>
            <i aria-hidden="true">&amp;</i>
            <span>{invitation.couple.second}</span>
          </h2>
        </Reveal>
        <Reveal className="finale__divider" delay={0.18} y={30}>
          <FlourishDivider />
        </Reveal>
        <Reveal className="finale__seal" delay={0.24} y={36}>
          <Monogram />
        </Reveal>
        <Reveal className="finale__coda" delay={0.3} y={28}>
          <span>{invitation.finale.seal}</span>
        </Reveal>
      </div>

      <div className="finale__fade" aria-hidden="true" />
    </section>
  )
}
