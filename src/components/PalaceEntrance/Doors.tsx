import { useId } from 'react'

/**
 * One carved palace door leaf. The right-hand door simply mirrors this one,
 * so the brass ring, hinge straps and edge band always land correctly.
 */
export function DoorLeaf() {
  const raw = useId().replace(/:/g, '')
  const gold = `url(#${raw}-gold)`
  const wood = `url(#${raw}-wood)`
  const panel = `url(#${raw}-panel)`

  return (
    <svg
      className="door__art"
      viewBox="0 0 300 760"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${raw}-wood`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5D2130" />
          <stop offset=".34" stopColor="#6E2A39" />
          <stop offset=".64" stopColor="#4D1A26" />
          <stop offset="1" stopColor="#612433" />
        </linearGradient>
        <linearGradient id={`${raw}-gold`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7D1A7" />
          <stop offset=".42" stopColor="#C5A46D" />
          <stop offset="1" stopColor="#8F7042" />
        </linearGradient>
        <radialGradient id={`${raw}-panel`} cx=".5" cy=".32" r=".82">
          <stop offset="0" stopColor="#672837" />
          <stop offset="1" stopColor="#3D131F" />
        </radialGradient>
        <radialGradient id={`${raw}-shade`} cx=".5" cy=".4" r=".82">
          <stop offset=".5" stopColor="#170810" stopOpacity="0" />
          <stop offset="1" stopColor="#170810" stopOpacity=".5" />
        </radialGradient>
        <pattern id={`${raw}-jaali`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M20 1.5 26 14l12.5 6L26 26l-6 12.5L14 26 1.5 20 14 14 20 1.5Z"
            stroke="#C5A46D"
            strokeWidth=".55"
            opacity=".42"
          />
          <circle cx="20" cy="20" r="2.1" stroke="#C5A46D" strokeWidth=".5" opacity=".48" />
          <circle cx="0" cy="0" r="1" fill="#C5A46D" opacity=".35" />
          <circle cx="40" cy="0" r="1" fill="#C5A46D" opacity=".35" />
          <circle cx="0" cy="40" r="1" fill="#C5A46D" opacity=".35" />
          <circle cx="40" cy="40" r="1" fill="#C5A46D" opacity=".35" />
        </pattern>
      </defs>

      <rect width="300" height="760" fill={wood} />

      <g stroke="#240B13" strokeWidth="1" opacity=".08">
        <path d="M32 0c8 180 4 380-4 760M74 0c10 200 6 420-2 760M118 0c8 240 6 470 0 760M162 0c-6 220-8 470 2 760M206 0c10 250 4 500-2 760M248 0c8 190 8 430-4 760M276 0c6 260 6 500 0 760" />
      </g>

      <rect x="10" y="10" width="280" height="740" stroke={gold} strokeWidth="1.6" />
      <rect x="18" y="18" width="264" height="724" stroke={gold} strokeWidth=".55" opacity=".55" />

      {[
        [31, 31],
        [269, 31],
        [31, 729],
        [269, 729],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`} fill={gold}>
          {[0, 90, 180, 270].map((angle) => (
            <ellipse key={angle} cx="0" cy="-4.2" rx="2.1" ry="3.7" transform={`rotate(${angle})`} opacity=".85" />
          ))}
          <circle r="1.5" fill="#3D131F" />
        </g>
      ))}

      {/* Arched upper panel */}
      <path
        d="M42 292V168c0-24 16-44 42-56 22-10 36-24 48-48 8-18 16-26 18-32 2 6 10 14 18 32 12 24 26 38 48 48 26 12 42 32 42 56v124Z"
        fill={panel}
        stroke={gold}
        strokeWidth="1.3"
      />
      <path
        d="M54 284V174c0-20 14-36 36-46 22-10 38-26 50-48 4-8 8-16 10-22 2 6 6 14 10 22 12 22 28 38 50 48 22 10 36 26 36 46v110Z"
        stroke={gold}
        strokeWidth=".55"
        opacity=".5"
      />

      <g stroke={gold} strokeWidth=".7" strokeLinecap="round" opacity=".8">
        <circle cx="150" cy="72" r="1.4" fill={gold} />
        <circle cx="150" cy="84" r="1.2" fill={gold} />
        <circle cx="150" cy="95" r="2.1" fill={gold} opacity=".8" />
        <path d="M150 103v14" />
        <path d="M150 117c-4.8-5.2-4.8-9.6 0-13.4 4.8 3.8 4.8 8.2 0 13.4Z" fill={gold} opacity=".65" />
      </g>

      <g stroke={gold} strokeWidth=".75" strokeLinecap="round" opacity=".75">
        <path d="M150 268c0-24-12-36-24-52-12-16-14-34-4-48M150 268c0-24 12-36 24-52 12-16 14-34 4-48" />
        <path d="M126 216c-10-2-18 2-22 10M136 232c-9 0-15 4-18 11M174 216c10-2 18 2 22 10M164 232c9 0 15 4 18 11" />
      </g>
      <g fill="#7E3A48" stroke={gold} strokeWidth=".45">
        <ellipse cx="112" cy="193" rx="4.6" ry="7.4" transform="rotate(-34 112 193)" />
        <ellipse cx="100" cy="222" rx="3.8" ry="6.2" transform="rotate(-52 100 222)" />
        <ellipse cx="188" cy="193" rx="4.6" ry="7.4" transform="rotate(34 188 193)" />
        <ellipse cx="200" cy="222" rx="3.8" ry="6.2" transform="rotate(52 200 222)" />
      </g>
      <g transform="translate(150 218)" fill="#8A4251" stroke={gold} strokeWidth=".5">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse key={angle} cx="0" cy="-8" rx="4.4" ry="7" transform={`rotate(${angle})`} />
        ))}
        <circle r="3.4" fill="#C5A46D" stroke="none" />
        <circle r="1.4" fill="#4A1925" stroke="none" />
      </g>

      {/* Carved separators */}
      <rect x="24" y="302" width="252" height="22" fill="#4A1925" stroke={gold} strokeWidth=".8" />
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={i} transform={`translate(${48 + i * 34} 313)`} fill={gold} opacity=".8">
          <path d="M0-4 4 0 0 4-4 0 0-4Z" />
          <circle cx="15" cy="0" r="1.2" opacity=".7" />
        </g>
      ))}

      {/* Jaali panel */}
      <rect x="42" y="336" width="216" height="224" fill="#3D131F" />
      <rect x="42" y="336" width="216" height="224" fill={`url(#${raw}-jaali)`} />
      <rect x="42" y="336" width="216" height="224" stroke={gold} strokeWidth="1.2" />
      <rect x="49" y="343" width="202" height="210" stroke={gold} strokeWidth=".5" opacity=".45" />

      <g transform="translate(150 448)">
        <circle r="37" fill="#471722" stroke={gold} strokeWidth="1" />
        <circle r="31" fill="none" stroke={gold} strokeWidth=".5" opacity=".55" />
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-21"
            rx="5"
            ry="12"
            fill="#6E2637"
            stroke={gold}
            strokeWidth=".55"
            transform={`rotate(${i * 36})`}
          />
        ))}
        <circle r="10" fill="#3D131F" stroke={gold} strokeWidth=".8" />
        <circle r="4" fill={gold} opacity=".75" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          return (
            <circle
              key={i}
              cx={Math.cos(angle) * 27}
              cy={Math.sin(angle) * 27}
              r="1"
              fill={gold}
              opacity=".65"
            />
          )
        })}
      </g>

      {/* Lower lotus panel */}
      <rect x="42" y="576" width="216" height="138" fill={panel} stroke={gold} strokeWidth="1.2" />
      <rect x="49" y="583" width="202" height="124" stroke={gold} strokeWidth=".5" opacity=".4" />
      <g transform="translate(150 646)">
        <circle r="47" stroke={gold} strokeWidth=".65" opacity=".55" />
        {Array.from({ length: 16 }).map((_, i) => (
          <ellipse
            key={`o${i}`}
            cx="0"
            cy="-30"
            rx="4.6"
            ry="13"
            fill="#6E2637"
            fillOpacity=".55"
            stroke={gold}
            strokeWidth=".45"
            transform={`rotate(${i * 22.5})`}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={`i${i}`}
            cx="0"
            cy="-16"
            rx="4"
            ry="9"
            fill="#8A4251"
            fillOpacity=".6"
            stroke={gold}
            strokeWidth=".5"
            transform={`rotate(${i * 45})`}
          />
        ))}
        <circle r="9" fill="#3D131F" stroke={gold} strokeWidth=".8" />
        <circle r="3.2" fill={gold} />
        <path d="M-6 3c2-5 8-6 10-1 1.8 4.2-2 7.6-5.6 6" stroke={gold} strokeWidth=".5" opacity=".7" />
      </g>

      {/* Brass edge band, handle and hinge straps */}
      <rect x="282" y="26" width="8" height="708" fill="#3D131F" stroke={gold} strokeWidth=".6" opacity=".95" />
      {[70, 300, 600, 710].map((y) => (
        <circle key={y} cx="286" cy={y} r="1.6" fill={gold} opacity=".65" />
      ))}

      <g transform="translate(268 452)">
        <circle r="13" fill={gold} stroke="#6B4D29" strokeWidth=".8" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse key={angle} cx="0" cy="-8.5" rx="2.2" ry="4.4" fill="#8F7042" transform={`rotate(${angle})`} />
        ))}
        <circle r="4.6" fill="#3D131F" />
        <path d="M0 10v5" stroke={gold} strokeWidth="2.6" />
        <circle cy="32" r="15.5" stroke={gold} strokeWidth="4" />
        <circle cy="32" r="15.5" stroke="#5C3F1F" strokeWidth=".7" opacity=".55" />
        <circle cy="32" r="11" stroke="#F0DDB7" strokeWidth=".8" opacity=".45" />
      </g>

      <g opacity=".9">
        {[126, 372, 644].map((y) => (
          <g key={y}>
            <rect x="-4" y={y} width="54" height="18" rx="2" fill={gold} stroke="#6B4D29" strokeWidth=".6" />
            <rect x="4" y={y + 3} width="46" height="12" rx="1" stroke="#7B5B33" strokeWidth=".45" opacity=".6" />
            {[10, 22, 34, 46].map((x) => (
              <circle key={x} cx={x} cy={y + 9} r="1.8" fill="#3D131F" />
            ))}
          </g>
        ))}
      </g>

      <rect x="24" y="722" width="252" height="22" fill="#3A101B" stroke={gold} strokeWidth=".8" />
      {Array.from({ length: 9 }).map((_, i) => (
        <circle key={i} cx={48 + i * 26} cy="733" r="1.2" fill={gold} opacity=".55" />
      ))}

      <rect width="300" height="760" fill={`url(#${raw}-shade)`} pointerEvents="none" />
    </svg>
  )
}

/** Carved timber frieze that crowns the doorway. */
export function ArchCrown() {
  const raw = useId().replace(/:/g, '')
  const gold = `url(#${raw}-gold)`
  return (
    <svg
      className="arch-crown"
      viewBox="0 0 420 112"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${raw}-gold`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7D1A7" />
          <stop offset=".5" stopColor="#C5A46D" />
          <stop offset="1" stopColor="#8F7042" />
        </linearGradient>
      </defs>

      <path d="M208 12 224 26l-16 14-16-14 16-14Z" fill={gold} opacity=".9" />
      <path d="M208 0v10M200 18h16" stroke={gold} strokeWidth="1" opacity=".75" />

      <path
        d="M14 32h392v28H14z"
        fill="var(--gate-crown-fill, #4A1925)"
        stroke={gold}
        strokeWidth="1.1"
      />
      <path d="M18 36h384M18 56h384" stroke={gold} strokeWidth=".5" opacity=".5" />

      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i} transform={`translate(${38 + i * 43} 46)`} fill={gold} opacity=".75">
          <path d="M0-5 4 0 0 5-4 0 0-5Z" />
          <circle cx="11" cy="0" r="1" opacity=".6" />
          <circle cx="-11" cy="0" r="1" opacity=".6" />
        </g>
      ))}

      <path
        d="M14 60c14 0 14 14 28 14s14-14 28-14 14 14 28 14 14-14 28-14 14 14 28 14 14-14 28-14 14 14 28 14 14-14 28-14 14 14 28 14 14-14 28-14 14 14 28 14 14-14 28-14 14 14 28 14 14-14 28-14"
        stroke={gold}
        strokeWidth="1"
        opacity=".85"
      />

      {[42, 98, 154, 210, 266, 322, 378].map((x) => (
        <g key={x} stroke={gold} strokeWidth=".6" opacity=".6">
          <path d={`M${x} 74v7`} />
          <circle cx={x} cy="85" r="2.2" fill={gold} stroke="none" />
        </g>
      ))}

      <g transform="translate(210 44)">
        <circle r="17" fill="#3D131F" stroke={gold} strokeWidth="1" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse key={angle} cx="0" cy="-9" rx="2.7" ry="5" fill="#8A4251" stroke={gold} strokeWidth=".45" transform={`rotate(${angle})`} />
        ))}
        <circle r="3.4" fill={gold} />
      </g>
    </svg>
  )
}
