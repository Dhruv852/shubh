import { useEffect, useRef, useState } from 'react'
import { invitation } from '../../config'

type AudioState = 'off' | 'on' | 'unavailable' | 'starting'

const FADE_IN = 2400
const FADE_OUT = 900

export function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)
  const [state, setState] = useState<AudioState>('off')

  const stopFade = () => {
    if (fadeRef.current !== null) {
      window.clearInterval(fadeRef.current)
      fadeRef.current = null
    }
  }

  const fadeTo = (el: HTMLAudioElement, target: number, duration: number, done?: () => void) => {
    stopFade()
    const from = el.volume
    const started = performance.now()
    fadeRef.current = window.setInterval(() => {
      const progress = Math.min(1, (performance.now() - started) / duration)
      el.volume = Math.min(1, Math.max(0, from + (target - from) * progress))
      if (progress === 1) {
        stopFade()
        done?.()
      }
    }, 40)
  }

  useEffect(() => {
    return () => {
      stopFade()
      const el = audioRef.current
      if (el) {
        el.pause()
        el.removeAttribute('src')
        el.load()
      }
    }
  }, [])

  const createAudio = () => {
    const el = new Audio(invitation.audio.src)
    el.loop = true
    el.preload = 'none'
    el.volume = 0
    el.addEventListener('error', () => setState('unavailable'))
    audioRef.current = el
    return el
  }

  const toggle = async () => {
    if (state === 'starting' || state === 'unavailable') return
    const el = audioRef.current ?? createAudio()

    if (state === 'on') {
      setState('off')
      fadeTo(el, 0, FADE_OUT, () => el.pause())
      return
    }

    setState('starting')
    try {
      el.volume = 0
      await el.play()
      setState('on')
      fadeTo(el, invitation.audio.volume, FADE_IN)
    } catch {
      setState('unavailable')
    }
  }

  const on = state === 'on'
  const unavailable = state === 'unavailable'
  const status = unavailable
    ? invitation.audio.unavailable
    : on
      ? invitation.audio.on
      : invitation.audio.off

  return (
    <div className={`control control--music ${on ? 'is-playing' : ''}`}>
      <button
        type="button"
        className="control__button"
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? 'Pause ambient music' : 'Play ambient music'}
        disabled={unavailable || state === 'starting'}
        title={unavailable ? 'Audio is not available in this browser' : invitation.audio.label}
      >
        <span className="control__icon" aria-hidden="true">
          <svg viewBox="0 0 28 28" fill="none" focusable="false">
            <path d="M5.5 22.5 19.5 8.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
            <path d="M8.5 19.5 5 23" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" opacity=".6" />
            <circle cx="16.8" cy="11.2" r="1.05" fill="currentColor" />
            <circle cx="13.6" cy="14.4" r="1.05" fill="currentColor" />
            <circle cx="10.4" cy="17.6" r="1.05" fill="currentColor" />
            <path
              d="M21.5 6.6c2.4 1.6 3.7 3.9 3.7 6.4s-1.3 4.8-3.7 6.4"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity=".8"
            />
          </svg>
        </span>
        <span className="control__text">{on ? 'Music on' : 'Music'}</span>
        <span className="control__bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status}
      </span>
    </div>
  )
}
