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
  hex: 'conic-gradient(from 200deg at 40% 55%, oklch(0.65 0.22 200 / 0.8), oklch(0.6 0.22 280 / 0.7), oklch(0.65 0.2 340 / 0.6), oklch(0.7 0.18 60 / 0.55), oklch(0.68 0.2 140 / 0.65), oklch(0.65 0.22 200 / 0.8))',
  floorplans: 'radial-gradient(ellipse 70% 60% at 30% 30%, oklch(0.6 0.16 195 / 0.85), transparent), radial-gradient(ellipse 60% 50% at 75% 75%, oklch(0.7 0.18 70 / 0.7), transparent), linear-gradient(135deg, oklch(0.25 0.06 195), oklch(0.25 0.06 60))',
  cursor: 'radial-gradient(ellipse 70% 60% at 25% 25%, oklch(0.55 0.22 290 / 0.9), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.65 0.22 340 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.08 290), oklch(0.2 0.1 320))',
  router: 'radial-gradient(ellipse 70% 60% at 30% 25%, oklch(0.6 0.18 150 / 0.85), transparent), radial-gradient(ellipse 60% 55% at 75% 75%, oklch(0.55 0.2 265 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.07 150), oklch(0.22 0.08 265))',
  default: 'linear-gradient(135deg, oklch(0.25 0 0), oklch(0.18 0 0))',
}

export const prototypes: Prototype[] = [
  {
    slug: 'cursor-margin-analysis',
    title: 'Cursor Enterprise: Usage, Cost & Margin Analysis',
    description:
      'Multi-tab dashboard analyzing Verkada\'s Cursor enterprise spend across 4,715 usage rows, 51 models, and 166.7B tokens. Covers budget by exec, retention, Claude Code actuals, adoption, and cost deep-dives.',
    href: 'https://verkada.github.io/cursor-margin-analysis/',
    category: 'dashboard',
    status: 'live',
    createdDate: '2026-05-04',
    modifiedDate: '2026-05-10',
    gradient: 'cursor',
    tags: ['cursor', 'llm', 'cost', 'analytics'],
    external: true,
  },
  {
    slug: 'maps-2-0-nav-audit',
    title: 'Google Maps → Verkada Maps 2.0 navigation audit',
    description:
      'Comparative audit of Google Maps navigation patterns mapped against the Verkada Maps 2.0 information architecture. Answers which patterns earn their place in Command.',
    href: '/maps-2-0-nav-audit/',
    category: 'canvas',
    status: 'live',
    createdDate: '2026-05-15',
    modifiedDate: '2026-05-18',
    gradient: 'maps',
    tags: ['maps', 'navigation', 'ia', 'command'],
  },
  {
    slug: 'floorplans-geo-field-inventory',
    title: 'Floorplans Geo-Field Inventory & vAtlas Transform',
    description:
      'Data audit and transform spec for migrating Verkada floorplan coordinate data into the Maps 2.0 vAtlas pipeline. 99.8% geo-field coverage across all floorplan entities.',
    href: '/floorplans-geo-field-inventory/',
    category: 'canvas',
    status: 'live',
    createdDate: '2026-05-14',
    modifiedDate: '2026-05-18',
    gradient: 'floorplans',
    tags: ['floorplans', 'maps', 'geo', 'vatlas'],
  },
  {
    slug: 'hex-styling-configurator',
    title: 'Verkada HEX Styling Configurator',
    description:
      'Interactive configurator mapping Verkada\'s brand color system to Command UI tokens. Five product-line palettes (20 colors each) with live component preview and token export.',
    href: '/hex-styling-configurator/',
    category: 'tool',
    status: 'live',
    createdDate: '2026-04-27',
    modifiedDate: '2026-05-18',
    gradient: 'hex',
    tags: ['hex', 'design-system', 'tokens', 'color'],
  },
  {
    slug: 'agents-md-router-map',
    title: 'AGENTS.md Router Map',
    description:
      'Visual DAG of how the Verkada PM workspace AGENTS.md routes every task type to the right workflow, standards file, and output format. Includes a path explorer and decision table.',
    href: '/agents-md-router-map/',
    category: 'tool',
    status: 'live',
    createdDate: '2026-04-22',
    modifiedDate: '2026-05-18',
    gradient: 'router',
    tags: ['agents', 'ai', 'routing', 'workspace'],
  },
]
