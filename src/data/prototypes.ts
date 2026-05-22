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
  /** Display name for who originated the artifact. */
  createdBy: string
  /** Display name for who last meaningfully updated the artifact. */
  lastModifiedBy: string
  gradient: GradientTheme
  tags?: string[]
  external?: boolean
  /** When true, the project is rendered in the highlighted "Featured" section
   *  on the home page. Order within Featured follows array order. */
  featured?: boolean
  /** Optional header image. Path is relative to the site root (served from
   *  /public). When set, the card replaces the gradient header with this
   *  image (object-fit: cover). The gradient still shows behind the image
   *  while it loads, and the bottom fade-to-card overlay is preserved so
   *  the pills remain readable. Recommended aspect ratio ~2.6:1 for
   *  featured cards (h-44) and ~3.4:1 for regular cards (h-32). */
  image?: string
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
    slug: 'vds-color-v2',
    title: 'VDS Color v2 Rollout',
    description:
      'Strategy hub for the VDS Color v2 migration: rollout phases, who does what by role, and team migration cards for every product line. Links to the companion Storybook for hands-on guides.',
    href: '/vds-color-v2/',
    category: 'writeup',
    status: 'live',
    createdDate: '2026-05-22',
    modifiedDate: '2026-05-22',
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'hex',
    tags: ['design-system', 'vds', 'tokens', 'color', 'rollout'],
    featured: true,
  },
  {
    slug: 'vds-color-v2-storybook',
    title: 'VDS Color Migration Guide',
    description:
      'Storybook for VDS Color v2: migration MDX guides, Alert Button and Checkbox before/after stories, per-product-line team examples, and semantic token reference.',
    href: 'https://ankush-rustagi.github.io/vds-color-v2-storybook/?path=/docs/foundations-color-v2-overview--docs',
    category: 'storybook',
    status: 'live',
    createdDate: '2026-05-22',
    modifiedDate: '2026-05-22',
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'hex',
    tags: ['design-system', 'vds', 'tokens', 'storybook', 'migration'],
    external: true,
  },
  {
    slug: 'maps-2-0-nav-audit',
    title: 'Maps 2.0 Navigation Redesign',
    description:
      'Interactive IA prototype for Verkada Maps 2.0. Cross-walks Google Maps patterns to Verkada concepts (Locations, Collections, Sites, Layouts) and lets you click through every state of the proposed viewer and editor experience.',
    href: '/maps-2-0-nav-audit/',
    category: 'canvas',
    status: 'live',
    createdDate: '2026-05-15',
    modifiedDate: '2026-05-18',
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'maps',
    tags: ['maps', 'navigation', 'ia', 'command'],
    featured: true,
    image: '/project-headers/maps-2-0-nav-audit.png',
  },
  {
    slug: 'global-site-hierarchy',
    title: 'Customer Site Hierarchy Atlas',
    description:
      'Dashboard mapping the spatial hierarchy of every Verkada customer org. Industry archetypes, depth distributions, geographic spread, and per-org Locations \u2192 Buildings \u2192 Floors \u2192 Areas structure across commercial and enterprise accounts.',
    href: '/site-hierarchy-archetypes/',
    category: 'dashboard',
    status: 'live',
    createdDate: '2026-05-18',
    modifiedDate: '2026-05-18',
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'maps',
    tags: ['sites', 'customers', 'hierarchy', 'command'],
    featured: true,
    image: '/project-headers/global-site-hierarchy.png',
  },
  {
    slug: 'verity-charts-playground',
    title: 'Command Analytics Charts',
    description:
      'Interactive Storybook cataloguing every chart shape used in customer-facing Command analytics. Highcharts and visx production mirrors, plus live Verity primitive sims (doc-27 r6 tokens, shared argTypes controls, PieDonut, ScheduleChart, color palettes).',
    href: 'https://ankush-rustagi.github.io/verity-charts-playground/?path=/docs/release-notes--docs',
    category: 'storybook',
    status: 'live',
    createdDate: '2026-05-19',
    modifiedDate: '2026-05-21',
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Vivien Ding',
    gradient: 'analytics',
    tags: ['analytics', 'charts', 'highcharts', 'visx', 'command', 'storybook'],
    external: true,
    image: '/project-headers/verity-charts-playground.png',
  },
  {
    slug: 'verkada-ac-mcp',
    title: 'Access Control MCP',
    description:
      'PM hub for Jake Leichtling\'s Access Control MCP server: 24 tools on public APIs, use-case flows, architecture, and setup. Works with Cursor, Claude Desktop, Copilot, and other local MCP hosts.',
    href: '/verkada-ac-mcp/',
    category: 'tool',
    status: 'live',
    createdDate: '2026-05-20',
    modifiedDate: '2026-05-20',
    createdBy: 'Jake Leichtling',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'cursor',
    tags: ['mcp', 'access-control', 'api', 'docs-vibes', 'command'],
    featured: true,
    image: '/project-headers/verkada-ac-mcp.png',
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
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'cursor',
    tags: ['cursor', 'llm', 'cost', 'analytics'],
    external: true,
    image: '/project-headers/cursor-margin-analysis.png',
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
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'floorplans',
    tags: ['floorplans', 'maps', 'geo', 'vatlas'],
    image: '/project-headers/floorplans-geo-field-inventory.png',
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
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'hex',
    tags: ['hex', 'design-system', 'tokens', 'color'],
    image: '/project-headers/hex-styling-configurator.png',
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
    createdBy: 'Ankush Rustagi',
    lastModifiedBy: 'Ankush Rustagi',
    gradient: 'router',
    tags: ['agents', 'ai', 'routing', 'workspace'],
    image: '/project-headers/agents-md-router-map.png',
  },
]
