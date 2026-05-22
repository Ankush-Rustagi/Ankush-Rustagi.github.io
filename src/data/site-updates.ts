/**
 * Changelog surfaced on the portfolio home page banner.
 * lastSiteEditDate: last hub deploy before this batch (used in the banner header).
 */
export const lastSiteEditDate = '2026-05-22'

/** Newest first. Two-up grid on md+ when multiple entries. */
export interface SiteUpdate {
  date: string
  title: string
  /** Person who authored the update (shown in the home banner). */
  author?: string
  href?: string
  external?: boolean
  bullets: string[]
}

export const siteUpdates: SiteUpdate[] = [
  {
    date: '2026-05-22',
    title: 'Maps 2.0 Editor Experience',
    author: 'Azalea Phangsoa',
    href: '/maps-2-0-editor-experience/',
    bullets: [
      'Interactive editor prototype: 14 editor states covering Manage Maps home, structural tools, device stamp, FOV adjust, and scale/align.',
      'Three-panel edit layout: floor context left, tool strip + canvas center, tools/devices/properties right.',
      'Built from Azalea\'s Cursor canvas; extends the Navigation Audit IA with Maps v1 PRD M2 editor MVP scope.',
    ],
  },
  {
    date: '2026-05-22',
    title: 'VDS Color System v2 Rollout',
    author: 'Ankush Rustagi',
    href: 'https://ankush-rustagi.github.io/vds-color-updates-2026/?path=/docs/intro-to-color-v2-strategy--docs',
    external: true,
    bullets: [
      'Single Storybook site: strategy, rollout phases, who-does-what, migration guides, and team examples.',
      'TokenExplorer reference for 566 semantic tokens plus Alert Button and Checkbox before/after patterns.',
      'Vibe design assets live in docs-vibes 17-ux-design (DESIGN.md, Claude Design setup, Verity handoff).',
    ],
  },
  {
    date: '2026-05-21',
    title: 'Command Analytics Charts (Storybook)',
    author: 'Vivien Ding',
    href: 'https://ankush-rustagi.github.io/verity-charts-playground/?path=/docs/release-notes--docs',
    external: true,
    bullets: [
      'Doc-27 r6 polish: Open Sans typography, refined Verkada color tokens, and xBands/yZones naming aligned to the design system spec.',
      'Centralized Storybook controls (argTypes.ts): axis titles, color palettes, PieDonut innerRadius size tokens, and threshold wiring.',
      'Token refactor (chartColors.ts + verkadaTokens.ts) drives all palette assignments across 40+ stories.',
      'After Verity chart dimensions matched to original visx sizes; ScheduleChart inactive segments use neutral-75.',
    ],
  },
]
