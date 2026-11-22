type Point = [number, number]

function quadPoint(a: Point, control: Point, b: Point, t: number): Point {
  const mt = 1 - t
  return [
    mt * mt * a[0] + 2 * mt * t * control[0] + t * t * b[0],
    mt * mt * a[1] + 2 * mt * t * control[1] + t * t * b[1],
  ]
}

function swag(from: Point, control: Point, to: Point, count = 19) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1)
    const point = quadPoint(from, control, to, t)
    const ahead = quadPoint(from, control, to, Math.min(1, t + 0.02))
    const angle = (Math.atan2(ahead[1] - point[1], ahead[0] - point[0]) * 180) / Math.PI
    return { point, angle, index: i }
  })
}

const swagLeft = swag([4, 3], [108, 42], [210, 6])
const swagRight = swag([210, 6], [312, 42], [416, 3])

const strands: { x: number; length: number }[] = [
  { x: 72, length: 16 },
  { x: 142, length: 24 },
  { x: 210, length: 32 },
  { x: 278, length: 24 },
  { x: 348, length: 16 },
]

export function Garland() {
  return (
    <div className="garland" aria-hidden="true">
      <svg viewBox="0 0 420 84" fill="none" focusable="false">
        <g stroke="#C5A46D" strokeWidth=".55" opacity=".55">
          <path d="M4 3Q108 42 210 6" />
          <path d="M210 6Q312 42 416 3" />
        </g>

        {[...swagLeft, ...swagRight].map(({ point, angle, index }, i) => {
          const marigold = i % 3 !== 1
          const r = marigold ? (index % 2 === 0 ? 3.7 : 3.1) : 2.6
          return (
            <g key={i}>
              {i % 4 === 1 && (
                <ellipse
                  cx={point[0] + 5}
                  cy={point[1] - 4}
                  rx="4.6"
                  ry="2.1"
                  fill="#68765A"
                  stroke="#C5A46D"
                  strokeWidth=".35"
                  opacity=".85"
                  transform={`rotate(${angle + 34} ${point[0] + 5} ${point[1] - 4})`}
                />
              )}
              <circle
                cx={point[0]}
                cy={point[1]}
                r={r}
                fill={marigold ? '#D48340' : '#F0E3C8'}
                stroke={marigold ? '#A95F27' : '#C5A46D'}
                strokeWidth=".45"
              />
              {marigold && <circle cx={point[0] - 0.9} cy={point[1] - 0.9} r="1" fill="#E9A75D" opacity=".8" />}
            </g>
          )
        })}

        {strands.map(({ x, length }) => (
          <g key={x}>
            <path d={`M${x} 12v${length}`} stroke="#C5A46D" strokeWidth=".5" opacity=".6" />
            {Array.from({ length: Math.round(length / 7) }).map((_, i) => {
              const y = 15 + i * 7
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="2.3" fill={i % 2 === 0 ? '#F0E3C8' : '#E5D5B9'} stroke="#C5A46D" strokeWidth=".35" />
                  {i % 2 === 0 && <circle cx={x + 3.4} cy={y + 2.2} r="1.9" fill="#F0E3C8" stroke="#C5A46D" strokeWidth=".3" />}
                </g>
              )
            })}
            <path
              d={`M${x} ${14 + length}c-2.8 2.8-2.8 5.6 0 7.4 2.8-1.8 2.8-4.6 0-7.4Z`}
              fill="#D48340"
              stroke="#A95F27"
              strokeWidth=".35"
            />
          </g>
        ))}

        <g transform="translate(210 6)">
          <circle r="3" fill="#C5A46D" />
          <path d="M0 4v7" stroke="#C5A46D" strokeWidth=".8" />
          <path d="M0 11c-4.6 0-7.4 2.8-7.4 6.5 4.6.9 7.4-.9 7.4-3.7 0 2.8 2.8 4.6 7.4 3.7 0-3.7-2.8-6.5-7.4-6.5Z" fill="#D48340" stroke="#A95F27" strokeWidth=".35" />
        </g>
      </svg>
    </div>
  )
}
