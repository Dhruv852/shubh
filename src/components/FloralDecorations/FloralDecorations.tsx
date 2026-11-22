import { useId, type CSSProperties } from 'react'

type ArtProps = {
  className?: string
  style?: CSSProperties
}

export function LotusMark({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 64 42"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 31C29.2 24.5 29.6 17 32 11.5c2.4 5.5 2.8 13 0 19.5Z" />
        <path d="M32 31c-6.2-3.6-9.6-9.5-10-16.5 5.2 2 8.8 6 10 11.5" />
        <path d="M32 31c6.2-3.6 9.6-9.5 10-16.5-5.2 2-8.8 6-10 11.5" />
        <path d="M32 31c-8.6.4-15.4-2.6-20-9 5.8-2.6 11.8-1.8 16.2 1.8" opacity=".85" />
        <path d="M32 31c8.6.4 15.4-2.6 20-9-5.8-2.6-11.8-1.8-16.2 1.8" opacity=".85" />
        <path d="M19 35.5c8.6 3 17.4 3 26 0" opacity=".6" />
      </g>
    </svg>
  )
}

export function FlourishDivider({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 260 26"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth=".85" strokeLinecap="round">
        <path d="M5 13h72" opacity=".55" />
        <path d="M183 13h72" opacity=".55" />
        <path d="M77 13c7 0 10-6 16-6 5 0 7 4 4 6.5-2.5 2-6 .5-5-2.5M77 13c7 0 10 6 16 6 5 0 7-4 4-6.5-2.5-2-6-.5-5 2.5" opacity=".9" />
        <path d="M183 13c-7 0-10-6-16-6-5 0-7 4-4 6.5 2.5 2 6 .5 5-2.5M183 13c-7 0-10 6-16 6-5 0-7-4-4-6.5 2.5-2 6-.5 5 2.5" opacity=".9" />
        <path d="M102 13h18M140 13h18" opacity=".7" />
      </g>
      <g fill="currentColor">
        <path d="M130 5.5 136 13l-6 7.5L124 13l6-7.5Z" opacity=".95" />
        <circle cx="115" cy="13" r="1.4" />
        <circle cx="145" cy="13" r="1.4" />
        <circle cx="92" cy="13" r="1.1" opacity=".7" />
        <circle cx="168" cy="13" r="1.1" opacity=".7" />
        <circle cx="4" cy="13" r="1" opacity=".6" />
        <circle cx="256" cy="13" r="1" opacity=".6" />
      </g>
    </svg>
  )
}

function Rose({ x, y, size = 1, tone = 'var(--corner-rose, #B66D73)' }: { x: number; y: number; size?: number; tone?: string }) {
  const outer = [0, 60, 120, 180, 240, 300]
  const inner = [30, 90, 150, 210, 270, 330]
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      {outer.map((angle) => (
        <ellipse
          key={`o${angle}`}
          cx="0"
          cy="-8.6"
          rx="4.4"
          ry="7.6"
          fill={tone}
          fillOpacity=".86"
          stroke="var(--corner-line, #C5A46D)"
          strokeWidth=".55"
          transform={`rotate(${angle})`}
        />
      ))}
      {inner.map((angle) => (
        <ellipse
          key={`i${angle}`}
          cx="0"
          cy="-4.3"
          rx="2.6"
          ry="4.6"
          fill={tone}
          stroke="var(--corner-line, #C5A46D)"
          strokeWidth=".45"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="2.5" fill="var(--corner-line, #C5A46D)" />
      <circle r="1.2" fill="var(--corner-rose, #B66D73)" />
    </g>
  )
}

function Jasmine({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy="-3.4"
          rx="2.1"
          ry="3.6"
          fill="var(--corner-flower, #F4EBDD)"
          stroke="var(--corner-line, #C5A46D)"
          strokeWidth=".4"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="1.35" fill="var(--corner-line, #C5A46D)" />
    </g>
  )
}

function Leaf({
  x,
  y,
  rotate,
  scale = 1,
}: {
  x: number
  y: number
  rotate: number
  scale?: number
}) {
  return (
    <path
      d="M0 0C4.4-6 11.4-6.6 15.6 0c-4.2 6.6-11.2 6-15.6 0Z"
      fill="var(--corner-leaf, #68765A)"
      fillOpacity=".88"
      stroke="var(--corner-line, #C5A46D)"
      strokeWidth=".45"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  )
}

/** A hand-drawn miniature-painting vine for the top-left corner. Mirror freely. */
export function FloralCorner({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="var(--corner-line, #C5A46D)" strokeLinecap="round">
        <path d="M4 4c47 8 82 30 100 64 17 32 18 72 6 108" strokeWidth="1.5" opacity=".9" />
        <path d="M10 10c26 14 44 36 51 64 7 28 2 59-11 84" strokeWidth=".8" opacity=".6" />
        <path d="M4 4c12 38 16 74 10 110" strokeWidth=".7" opacity=".45" />
        <path d="M4 4c40 4 74 12 104 28" strokeWidth=".7" opacity=".45" />
        <path d="M38 30c18-6 34-2 45 10M69 60c-14-2-25 4-31 16M89 92c15 0 27 6 33 18M98 128c-13 2-22 9-26 20M97 164c13 4 21 12 24 24" strokeWidth=".8" opacity=".75" />
        <path d="M24 56c-9 7-14 17-14 28M58 116c-7 10-9 21-6 32M76 186c-6 9-8 18-6 27M114 42c8 6 14 14 17 24" strokeWidth=".7" opacity=".7" />
        <path d="M126 20c8 2 15 6 20 12M148 36c-3 7-3 14 0 20" strokeWidth=".6" opacity=".55" />
      </g>

      <Leaf x={42} y={28} rotate={-36} scale={1.05} />
      <Leaf x={58} y={44} rotate={26} scale={1.2} />
      <Leaf x={78} y={62} rotate={-14} scale={.95} />
      <Leaf x={60} y={74} rotate={64} scale={1.1} />
      <Leaf x={96} y={86} rotate={10} scale={1.15} />
      <Leaf x={90} y={104} rotate={78} scale={.9} />
      <Leaf x={76} y={130} rotate={46} scale={1.05} />
      <Leaf x={100} y={146} rotate={-6} scale={1} />
      <Leaf x={97} y={172} rotate={58} scale={1.1} />
      <Leaf x={38} y={48} rotate={-78} scale={.8} />
      <Leaf x={20} y={86} rotate={128} scale={.9} />
      <Leaf x={134} y={52} rotate={-20} scale={.9} />
      <Leaf x={150} y={68} rotate={22} scale={.75} />
      <Leaf x={124} y={32} rotate={-58} scale={.7} />

      <Rose x={58} y={54} size={1.05} />
      <Rose x={104} y={100} size={.82} tone="var(--corner-rose-deep, #9E565F)" />
      <Rose x={78} y={164} size={.72} />
      <Rose x={146} y={44} size={.58} tone="var(--corner-rose-deep, #9E565F)" />

      <Jasmine x={26} y={68} size={1} />
      <Jasmine x={36} y={44} size={.82} />
      <Jasmine x={92} y={140} size={.95} />
      <Jasmine x={121} y={24} size={.8} />
      <Jasmine x={68} y={118} size={.75} />
      <Jasmine x={50} y={96} size={.7} />

      <g fill="var(--corner-line, #C5A46D)">
        <circle cx="112" cy="62" r="1.4" opacity=".8" />
        <circle cx="82" cy="102" r="1.2" opacity=".7" />
        <circle cx="58" cy="188" r="1.3" opacity=".7" />
        <circle cx="30" cy="112" r="1" opacity=".55" />
        <circle cx="134" cy="112" r="1.1" opacity=".55" />
        <circle cx="110" cy="196" r="1" opacity=".5" />
      </g>
    </svg>
  )
}

export function Monogram({ className, style }: ArtProps) {
  const soft = useId().replace(/:/g, '')
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="Shubham and Nancy monogram"
    >
      <defs>
        <linearGradient id={`${soft}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E4CEA2" />
          <stop offset=".5" stopColor="#C5A46D" />
          <stop offset="1" stopColor="#9B7B49" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="52" stroke={`url(#${soft}-gold)`} strokeWidth="1" opacity=".9" />
      <circle cx="60" cy="60" r="47" stroke={`url(#${soft}-gold)`} strokeWidth=".5" opacity=".55" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        return (
          <circle
            key={i}
            cx={60 + Math.cos(angle) * 56}
            cy={60 + Math.sin(angle) * 56}
            r={i % 3 === 0 ? 1.2 : 0.6}
            fill={`url(#${soft}-gold)`}
            opacity={i % 3 === 0 ? 0.8 : 0.45}
          />
        )
      })}
      <g stroke={`url(#${soft}-gold)`} strokeWidth=".9" strokeLinecap="round">
        <path d="M60 15c-4.4-4.2-4.6-8.4 0-11.4 4.6 3 4.4 7.2 0 11.4Z" />
        <path d="M53 16c-6-1.6-8.6-4.8-7.2-9.2M67 16c6-1.6 8.6-4.8 7.2-9.2" opacity=".7" />
      </g>
      <text
        x="59"
        y="71"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="35"
        letterSpacing="1"
        fill={`url(#${soft}-gold)`}
      >
        SN
      </text>
      <path d="M44 82h32" stroke={`url(#${soft}-gold)`} strokeWidth=".6" opacity=".6" />
      <path d="M60 88.5 63 92l-3 3.5-3-3.5 3-3.5Z" fill={`url(#${soft}-gold)`} opacity=".85" />
    </svg>
  )
}

export function WaxSeal({ className, style }: ArtProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 110 110"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="55" cy="55" r="47" fill="#6E2637" />
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i / 36) * Math.PI * 2
        return (
          <circle
            key={i}
            cx={55 + Math.cos(angle) * 51}
            cy={55 + Math.sin(angle) * 51}
            r={i % 2 === 0 ? 3.1 : 2.4}
            fill="#571B28"
          />
        )
      })}
      <circle cx="55" cy="55" r="39" stroke="#C5A46D" strokeWidth=".9" opacity=".7" />
      <circle cx="55" cy="55" r="34" stroke="#C5A46D" strokeWidth=".5" opacity=".4" />
      <text
        x="54"
        y="64"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="25"
        letterSpacing="1.5"
        fill="#D9BE8E"
      >
        SN
      </text>
      <path d="M37 72h36" stroke="#C5A46D" strokeWidth=".6" opacity=".5" />
      <g fill="#C5A46D" opacity=".6">
        <circle cx="55" cy="21" r="1" />
        <circle cx="55" cy="89" r="1" />
        <circle cx="21" cy="55" r="1" />
        <circle cx="89" cy="55" r="1" />
      </g>
    </svg>
  )
}

export function Diya({ className, style }: ArtProps) {
  const soft = useId().replace(/:/g, '')
  return (
    <div className={className} style={style} aria-hidden="true">
      <div className="diya__glow" />
      <svg viewBox="0 0 120 120" fill="none" focusable="false">
        <defs>
          <linearGradient id={`${soft}-brass`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E2C48E" />
            <stop offset=".45" stopColor="#C5A46D" />
            <stop offset="1" stopColor="#7E5F34" />
          </linearGradient>
          <linearGradient id={`${soft}-flame`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#E8A94E" />
            <stop offset=".55" stopColor="#F6D99A" />
            <stop offset="1" stopColor="#FFF3D6" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="89" rx="33" ry="7" fill="#2B0D15" opacity=".35" />
        <path
          d="M20 74c2 15 17 22 40 22s38-7 40-22c-9-6-24-9-40-9s-31 3-40 9Z"
          fill={`url(#${soft}-brass)`}
          stroke="#6B4D29"
          strokeWidth=".7"
        />
        <path d="M25 74c10 4 23 6 35 6s25-2 35-6" stroke="#F0DBB2" strokeWidth=".8" opacity=".55" />
        <path d="M34 92c8 3 17 4 26 4s18-1 26-4" stroke="#6B4D29" strokeWidth=".6" opacity=".6" />
        <path d="M60 60c2.4 6 3.4 9 1.4 12.4-1.4 2.4-4.4 2.2-5.6.2-1.4-2.4.6-4.8 2.4-6.6" stroke="#7A4A22" strokeWidth="1.4" />
        <g className="diya__flame">
          <path
            d="M60 29c7 11.4 10.6 18.6 7.2 25.6-2 4-6 6-9.4 5.2-4.6-1.2-6.6-6-4.6-10.6 1.6-3.6 4.2-5.8 5.4-9.2.8-2.2 1.2-5 .6-8.4l.8-2.6Z"
            fill={`url(#${soft}-flame)`}
          />
          <path d="M60 43c3.4 5.2 4.6 8.6 3 12-1.2 2.6-4 3.6-6 2.4-2.6-1.4-2.6-4.6-.8-7.4 1-1.6 2.2-2.8 3.8-4.6.4-.8.4-1.6 0-2.4Z" fill="#FFF8E6" opacity=".95" />
        </g>
        <circle cx="60" cy="47" r="17" fill="#F4C989" opacity=".12" />
      </svg>
    </div>
  )
}

export function ScrollCue({ label }: { label: string }) {
  return (
    <div className="scroll-cue" aria-hidden="true">
      <span className="scroll-cue__label">{label}</span>
      <span className="scroll-cue__line">
        <span className="scroll-cue__diamond" />
      </span>
    </div>
  )
}
