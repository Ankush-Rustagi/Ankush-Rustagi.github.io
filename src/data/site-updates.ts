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
    title: 'VDS Color System v2 Rollout',
    author: 'Ankush Rustagi',
    href: '/vds-color-v2/',
    bullets: [
      'Strategy hub: rollout phases, who-does-what table, and team migration cards for all major product lines.',
      'Companion Storybook with Alert Button + Checkbox before/after, per-team examples, and token mapping reference.',
      'Cross-linked at ankush-rustagi.github.io/vds-color-v2/ and vds-color-v2-storybook/.',
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
