/**
 * Changelog surfaced on the portfolio home page banner.
 * lastSiteEditDate: last hub deploy before this batch (used in the banner header).
 */
export const lastSiteEditDate = '2026-05-18'

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
    date: '2026-05-20',
    title: 'Access Control MCP (PM Hub)',
    author: 'Jake Leichtling',
    href: '/verkada-ac-mcp/',
    bullets: [
      'Interactive hub for Jake Leichtling\'s custom Access Control MCP: 24 tools on Verkada public APIs.',
      'Home, tool inventory, technical architecture, and setup tabs with use-case flows and copy-paste install.',
      'Works with any local AI assistant (Cursor, Claude Desktop, Copilot, and other MCP hosts).',
    ],
  },
  {
    date: '2026-05-20',
    title: 'Command Analytics Charts (Storybook)',
    author: 'Vivien Ding',
    href: 'https://ankush-rustagi.github.io/verity-charts-playground/?path=/docs/about--docs',
    external: true,
    bullets: [
      'VeritySimPrimitives layer: live simulated primitives wired to doc-27 color tokens (categorical, sequential, diverging, status).',
      'New primitive stories: PieDonutChart (cloud backup donut) and ScheduleChart (Alarms AI schedule / xrange).',
      'New Color Palette Reference story and Highcharts Camera Stats cloud-backup pie.',
      'Axis title controls on every Verity primitive story; 30+ Highcharts and visx production mirrors refreshed with token-aware colors.',
    ],
  },
]
