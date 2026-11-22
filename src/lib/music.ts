import { invitation } from '../config'

const FADE_IN = 2600

let audio: HTMLAudioElement | null = null
let armed = true

function fadeUp(el: HTMLAudioElement) {
  const target = invitation.audio.volume
  const started = performance.now()
  const step = (now: number) => {
    if (audio !== el) return
    const progress = Math.min(1, (now - started) / FADE_IN)
    el.volume = target * progress
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

/**
 * Browsers only allow sound after a gesture, so this is armed on load and
 * fired by the first tap or key press. The track has no visible control.
 */
export function startBackgroundMusic() {
  if (!armed || audio) return
  armed = false

  const el = new Audio(invitation.audio.src)
  el.loop = true
  el.preload = 'auto'
  el.volume = 0
  audio = el

  const attempt = el.play()
  if (!attempt) return
  attempt.then(() => fadeUp(el)).catch(() => {
    audio = null
    armed = true
  })
}
