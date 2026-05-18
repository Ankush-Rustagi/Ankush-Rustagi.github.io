export type PrototypeStatus = 'live' | 'wip' | 'archived'

export type PrototypeCategory =
  | 'canvas'
  | 'storybook'
  | 'dashboard'
  | 'prototype'
  | 'tool'
  | 'writeup'

export type GradientTheme =
  | 'maps'
  | 'hex'
  | 'floorplans'
  | 'cursor'
  | 'router'
  | 'default'

export interface Prototype {
  slug: string
  title: string
  description: string
  href: string
  category: PrototypeCategory
  status: PrototypeStatus
  createdDate: string
  modifiedDate: string
  gradient: GradientTheme
  tags?: string[]
  external?: boolean
}

export const GRADIENTS: Record<GradientTheme, string> = {
  maps: 'radial-gradient(ellipse 80% 70% at 20% 30%, oklch(0.55 0.18 230 / 0.85), transparent), radial-gradient(ellipse 70% 60% at 80% 70%, oklch(0.62 0.18 160 / 0.7), transparent), linear-gradient(135deg, oklch(0.25 0.05 230), oklch(0.22 0.08 180))',
  hex: 'conic-gradient(from 180deg at 50% 50%, oklch(0.65 0.2 200), oklch(0.6 0.22 280), oklch(0.65 0.22 340), oklch(0.7 0.2 60), oklch(0.7 0.2 140), oklch(0.65 0.2 200))',
  floorplans:
    'radial-gradient(ellipse 70% 60% at 30% 30%, oklch(0.6 0.16 195 / 0.85), transparent), radial-gradient(ellipse 60% 50% at 75% 75%, oklch(0.7 0.18 70 / 0.7), transparent), linear-gradient(135deg, oklch(0.25 0.06 195), oklch(0.25 0.06 60))',
  cursor:
    'radial-gradient(ellipse 70% 60% at 25% 25%, oklch(0.55 0.22 290 / 0.9), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.65 0.22 340 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.08 290), oklch(0.2 0.1 320))',
  router:
    'radial-gradient(ellipse 70% 60% at 30% 25%, oklch(0.6 0.18 150 / 0.85), transparent), radial-gradient(ellipse 60% 55% at 75% 75%, oklch(0.55 0.2 265 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.07 150), oklch(0.22 0.08 265))',
  default:
    'linear-gradient(135deg, oklch(0.25 0 0), oklch(0.18 0 0))',
}

export const prototypes: Prototype[] = [
  {
    slug: 'maps-2-0-nav-audit',
    title: 'Google Maps → Verkada Maps 2.0 navigation audit',
    description:
      'Comparative audit of Google Maps navigation patterns mapped against the Verkada Maps 2.0 information architecture. Answers which patterns earn their place in Command, and which don\'t.',
    href: '/maps-2-0-nav-audit/',
    category: 'canvas',
    status: 'wip',
    createdDate: '2026-05-15',
    modifiedDate: '2026-05-16',
    gradient: 'maps',
    tags: ['maps', 'navigation', 'ia', 'command'],
  },
]
