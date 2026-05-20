/**
 * Changelog surfaced on the portfolio home page banner.
 * lastSiteEditDate: last hub deploy before this batch (used in the banner header).
 */
export const lastSiteEditDate = '2026-05-18'

export interface SiteUpdate {
  date: string
  title: string
  href?: string
  external?: boolean
  bullets: string[]
}

export const siteUpdates: SiteUpdate[] = [
  {
    date: '2026-05-20',
    title: 'Command Analytics Charts (Storybook)',
    href: 'https://ankush-rustagi.github.io/verity-charts-playground/',
    external: true,
    bullets: [
      'VeritySimPrimitives layer: live simulated primitives wired to doc-27 color tokens (categorical, sequential, diverging, status).',
      'New primitive stories: PieDonutChart (cloud backup donut) and ScheduleChart (Alarms AI schedule / xrange).',
      'New Color Palette Reference story and Highcharts Camera Stats cloud-backup pie.',
      'Axis title controls on every Verity primitive story; 30+ Highcharts and visx production mirrors refreshed with token-aware colors.',
    ],
  },
]
