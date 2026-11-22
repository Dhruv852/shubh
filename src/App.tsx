import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Stage } from './lib/assets'
import { startBackgroundMusic } from './lib/music'
import { PalaceEntrance } from './components/PalaceEntrance/PalaceEntrance'
import { InvitationLetter } from './components/InvitationLetter/InvitationLetter'
import { RomanticGarden } from './components/RomanticGarden/RomanticGarden'
import { WeddingFinale } from './components/WeddingFinale/WeddingFinale'

export default function App() {
  const [stage, setStage] = useState<Stage>('closed')
  const reducedPref = useReducedMotion()
  const reduced = reducedPref === true

  useEffect(() => {
    const start = () => startBackgroundMusic()
    window.addEventListener('pointerdown', start, { once: true, passive: true })
    window.addEventListener('keydown', start, { once: true })
    return () => {
      window.removeEventListener('pointerdown', start)
      window.removeEventListener('keydown', start)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (stage !== 'revealed') {
      root.classList.add('is-locked')
      return
    }
    const timer = window.setTimeout(
      () => root.classList.remove('is-locked'),
      reduced ? 120 : 1400,
    )
    return () => window.clearTimeout(timer)
  }, [stage, reduced])

  useEffect(() => {
    if (stage !== 'opening') return
    const timer = window.setTimeout(() => setStage('revealed'), reduced ? 420 : 1280)
    return () => window.clearTimeout(timer)
  }, [stage, reduced])

  const openInvitation = () => {
    startBackgroundMusic()
    setStage((current) => (current === 'closed' ? 'opening' : current))
  }

  return (
    <div className="experience">
      <h1 className="sr-only">
        Shubham and Nancy — a royal garden wedding invitation
      </h1>

      <main>
        <PalaceEntrance stage={stage} reduced={reduced} onOpen={openInvitation} />
        <InvitationLetter />
        <RomanticGarden />
        <WeddingFinale />
      </main>
    </div>
  )
}
