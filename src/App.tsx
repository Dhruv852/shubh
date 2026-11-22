import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Stage } from './lib/assets'
import { PalaceEntrance } from './components/PalaceEntrance/PalaceEntrance'
import { InvitationLetter } from './components/InvitationLetter/InvitationLetter'
import { RomanticGarden } from './components/RomanticGarden/RomanticGarden'
import { WeddingFinale } from './components/WeddingFinale/WeddingFinale'
import { MusicControl } from './components/MusicControl/MusicControl'
import { MotionControl } from './components/MotionControl/MotionControl'

export default function App() {
  const [stage, setStage] = useState<Stage>('closed')
  const [motionPaused, setMotionPaused] = useState(false)
  const reducedPref = useReducedMotion()
  const reduced = reducedPref === true

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

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('is-paused', motionPaused)
    return () => root.classList.remove('is-paused')
  }, [motionPaused])

  return (
    <div className="experience">
      <h1 className="sr-only">
        Shubham and Nancy — a royal garden wedding invitation
      </h1>

      <main>
        <PalaceEntrance
          stage={stage}
          reduced={reduced}
          onOpen={() => setStage((current) => (current === 'closed' ? 'opening' : current))}
        />
        <InvitationLetter />
        <RomanticGarden />
        <WeddingFinale />
      </main>

      <MusicControl />
      {!reduced && (
        <MotionControl paused={motionPaused} onToggle={() => setMotionPaused((p) => !p)} />
      )}
    </div>
  )
}
