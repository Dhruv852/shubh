export const invitation = {
  couple: {
    first: 'Shubham',
    second: 'Nancy',
    initials: 'SN',
  },
  entrance: {
    blessing: 'शुभ विवाह',
    greeting: 'You are cordially invited',
    control: 'Open the invitation',
    hint: 'Tap to open the doors',
    opening: 'Opening the invitation',
    openingHint: 'The doors are opening',
  },
  reveal: {
    kicker: 'The Royal Garden',
    celebration: 'A celebration of love',
    line:
      'Together with their families, they invite you to celebrate the beginning of their beautiful journey.',
    scroll: 'Scroll',
  },
  letter: {
    eyebrow: 'The Invitation',
    heading: 'An invitation to celebrate',
    paragraphs: [
      'With hearts full of joy and families filled with blessings, we invite you to celebrate the beautiful union of Shubham and Nancy.',
      'May this new beginning be surrounded by love, laughter and a lifetime of togetherness.',
    ],
    closing: 'With love, blessings & joy',
  },
  interlude: {
    line: 'Two hearts. One beautiful beginning.',
    lineParts: ['Two hearts.', 'One beautiful beginning.'],
    subline: 'A garden in celebration',
  },
  finale: {
    eyebrow: 'With love, blessings & joy',
    names: 'Shubham & Nancy',
    seal: 'The Royal Garden',
  },
  audio: {
    // Locally hosted bansuri raga, supplied for this invitation. Confirm the
    // licence covers your publication before sharing the site publicly.
    src: '/assets/audio/bansuri-raga.mp3',
    volume: 0.55,
  },
} as const

export type Invitation = typeof invitation
