// =============================================================================
// Card title length rule
// -----------------------------------------------------------------------------
// Titles MUST fit on a single line at the default desktop 3-column grid.
// Featured cards (text-xl):  max 30 characters
// Regular cards (text-lg):   max 34 characters
//
// The renderer in App.tsx enforces single-line + ellipsis as a CSS backstop,
// but titles should never depend on that backstop. Always shorten the title
// to fit the budget. See AGENTS.md ("Portfolio card title length") for the
// authoritative rule.
// =============================================================================

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
  | 'analytics'
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
  /** When true, the project is rendered in the highlighted "Featured" section
   *  on the home page. Order within Featured follows array order. */
  featured?: boolean
}

export const GRADIENTS: Record<GradientTheme, string> = {
  maps: 'radial-gradient(ellipse 80% 70% at 20% 30%, oklch(0.55 0.18 230 / 0.85), transparent), radial-gradient(ellipse 70% 60% at 80% 70%, oklch(0.62 0.18 160 / 0.7), transparent), linear-gradient(135deg, oklch(0.25 0.05 230), oklch(0.22 0.08 180))',
  hex: 'conic-gradient(from 200deg at 40% 55%, oklch(0.65 0.22 200 / 0.8), oklch(0.6 0.22 280 / 0.7), oklch(0.65 0.2 340 / 0.6), oklch(0.7 0.18 60 / 0.55), oklch(0.68 0.2 140 / 0.65), oklch(0.65 0.22 200 / 0.8))',
  floorplans: 'radial-gradient(ellipse 70% 60% at 30% 30%, oklch(0.6 0.16 195 / 0.85), transparent), radial-gradient(ellipse 60% 50% at 75% 75%, oklch(0.7 0.18 70 / 0.7), transparent), linear-gradient(135deg, oklch(0.25 0.06 195), oklch(0.25 0.06 60))',
  cursor: 'radial-gradient(ellipse 70% 60% at 25% 25%, oklch(0.55 0.22 290 / 0.9), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.65 0.22 340 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.08 290), oklch(0.2 0.1 320))',
  router: 'radial-gradient(ellipse 70% 60% at 30% 25%, oklch(0.6 0.18 150 / 0.85), transparent), radial-gradient(ellipse 60% 55% at 75% 75%, oklch(0.55 0.2 265 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.07 150), oklch(0.22 0.08 265))',
  analytics: 'radial-gradient(ellipse 70% 60% at 20% 70%, oklch(0.55 0.22 260 / 0.85), transparent), radial-gradient(ellipse 60% 50% at 80% 25%, oklch(0.65 0.2 35 / 0.7), transparent), linear-gradient(135deg, oklch(0.22 0.09 250), oklch(0.24 0.08 30))',
  default: 'linear-gradient(135deg, oklch(0.25 0 0), oklch(0.18 0 0))',
}

export const prototypes: Prototype[] = [
  {
    slug: 'maps-2-0-nav-audit',
    title: 'Maps 2.0 Navigation Redesign',
    description:
      'Interactive IA prototype for Verkada Maps 2.0. Cross-walks Google Maps patterns to Verkada concepts (Locations, Collections, Sites, Layouts) and lets you click through every state of the proposed viewer and editor experience.',
    href: '/maps-2-0-nav-audit/#full',
    category: 'canvas',
    status: 'live',
    createdDate: '2026-05-15',
    modifiedDate: '2026-05-18',
    gradient: 'maps',
    tags: ['maps', 'navigation', 'ia', 'command'],
    featured: true,
  },
  {
    slug: 'global-site-hierarchy',
    title: 'Customer Site Hierarchy Atlas',
    description:
      'Dashboard mapping the spatial hierarchy of every Verkada customer org. Industry archetypes, depth distributions, geographic spread, and per-org Locations \u2192 Buildings \u2192 Floors \u2192 Areas structure across commercial and enterprise accounts.',
    href: '/site-hierarchy-archetypes/#customers-at-a-glance',
    category: 'dashboard',
    status: 'live',
    createdDate: '2026-05-18',
    modifiedDate: '2026-05-18',
    gradient: 'maps',
    tags: ['sites', 'customers', 'hierarchy', 'command'],
    featured: true,
  },
  {
    slug: 'verity-charts-playground',
    title: 'Command Analytics Charts',
    description:
      'Interactive Storybook cataloguing every chart shape used in customer-facing Command analytics. Highcharts (columns, lines, areas, gauges, combos, threshold editor), visx, and Verity primitives shown side-by-side with the data shapes that drive them.',
    href: 'https://ankush-rustagi.github.io/verity-charts-playground/',
    category: 'storybook',
    status: 'live',
    createdDate: '2026-05-19',
    modifiedDate: '2026-05-19',
    gradient: 'analytics',
    tags: ['analytics', 'charts', 'highcharts', 'visx', 'command', 'storybook'],
    external: true,
    featured: true,
  },
  {
    slug: 'cursor-margin-analysis',
    title: 'Cursor Enterprise Cost Dashboard',
    description:
      'Multi-tab dashboard analyzing Verkada\'s Cursor enterprise spend across 4,715 usage rows, 51 models, and 166.7B tokens. Budget by exec, retention, Claude Code actuals, adoption, and per-model cost deep-dives.',
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
    slug: 'floorplans-geo-field-inventory',
    title: 'Floorplans Geo-Data Migration Plan',
    description:
      'Data audit and transform spec for migrating Verkada floorplan coordinate data into the Maps 2.0 vAtlas pipeline. 99.8% geo-field coverage across all floorplan entities, with field-by-field mapping rules.',
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
    title: 'HEX Brand Token Configurator',
    description:
      'Interactive configurator mapping Verkada\'s brand color system to Command UI tokens. Five product-line palettes (20 colors each) with live component preview and copy-ready token export.',
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
    title: 'AGENTS.md Workflow Router',
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
