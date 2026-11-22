import { invitation } from '../../config'
import { FloralCorner, FlourishDivider, Monogram, WaxSeal } from '../FloralDecorations/FloralDecorations'
import { Reveal } from '../Shared/Reveal'

export function InvitationLetter() {
  return (
    <section className="scene scene--letter" aria-labelledby="letter-heading">
      <div className="letter-scene__wash" aria-hidden="true" />
      <FloralCorner className="letter-scene__pressed letter-scene__pressed--left" />
      <FloralCorner className="letter-scene__pressed letter-scene__pressed--right" />

      <Reveal className="letter-scene__label" y={34}>
        <span className="eyebrow eyebrow--ink">{invitation.letter.eyebrow}</span>
      </Reveal>

      <Reveal className="letter" delay={0.08} y={64}>
        <div className="letter__paper">
          <div className="letter__border" aria-hidden="true" />
          <div className="letter__corners" aria-hidden="true">
            <FloralCorner className="letter__corner letter__corner--tl" />
            <FloralCorner className="letter__corner letter__corner--tr" />
            <FloralCorner className="letter__corner letter__corner--bl" />
            <FloralCorner className="letter__corner letter__corner--br" />
          </div>

          <div className="letter__content">
            <Monogram className="letter__monogram" />
            <h2 id="letter-heading" className="letter__heading">
              {invitation.letter.heading}
            </h2>
            <FlourishDivider className="letter__divider" />

            <p className="letter__body">{invitation.letter.paragraphs[0]}</p>
            <p className="letter__body">{invitation.letter.paragraphs[1]}</p>

            <div className="letter__closing">
              <span className="letter__closing-rule" aria-hidden="true" />
              <span>{invitation.letter.closing}</span>
              <span className="letter__closing-rule" aria-hidden="true" />
            </div>

            <div className="letter__seal-wrap">
              <WaxSeal className="letter__seal" />
              <span className="sr-only">Sealed with the initials S and N</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
