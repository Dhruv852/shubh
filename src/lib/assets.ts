export type Stage = 'closed' | 'opening' | 'revealed'

const ART = {
  garden: { widths: [768, 1200, 1536], fallback: 1200 },
  peacocks: { widths: [768, 1200, 1536], fallback: 1200 },
  'peacocks-portrait': { widths: [512, 768, 1024], fallback: 768 },
  mandap: { widths: [768, 1200, 1536], fallback: 1200 },
} as const

export type ArtName = keyof typeof ART

export function artSet(name: ArtName): string {
  return ART[name].widths
    .map((width) => `/assets/illustrations/${name}-${width}.webp ${width}w`)
    .join(', ')
}

export function artFallback(name: ArtName): string {
  return `/assets/illustrations/${name}-${ART[name].fallback}.webp`
}
