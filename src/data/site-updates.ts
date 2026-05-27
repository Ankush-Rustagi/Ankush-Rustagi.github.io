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
    date: '2026-05-26',
    title: 'Verkada Maps IA Prototype',
    author: 'Zack Baumel',
    href: '/zack-maps-prototype/',
    bullets: [
      'Long-lived design exploration for Verkada Maps 2.0: 18+ state machine (press S to jump between states), real Mapbox basemap with light and dark Verkada styles, and donut cluster tokens that aggregate device counts by location.',
      'Homegrown polygon drawer powers both location perimeters (state X) and per-floor layout crops (state Z); the floorplan image is a DOM overlay reprojected each frame so CSS clip-path actually works on a Mapbox map.',
      'Mock-data only: 6 seeded Bay Area locations, an empty/seeded toggle, and a States sidebar for jumping between every flow without touching real Command data.',
    ],
  },
  {
    date: '2026-05-22',
    title: 'Firmware Update Scheduler',
    author: 'Zack Baumel',
    href: '/zack-firmware-scheduler/',
    bullets: [
      'Admin-console prototype for scheduling Verkada firmware rollouts across regions, sites, and device families (cameras, access control, sensors), with per-site overrides of the org-wide default window.',
      'Custom schedule per device family: day-of-week picker, start and end time windows, and per-site time-zone selection so rollouts can hit the same local clock everywhere.',
      'Dev-tools panel toggles between Admin homepage variants and firmware-management states and flips the schedule layout between Cards and Rows for design exploration.',
    ],
  },
]
