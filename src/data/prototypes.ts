export type PrototypeStatus = 'live' | 'wip' | 'archived'

export type PrototypeCategory =
  | 'canvas'
  | 'storybook'
  | 'dashboard'
  | 'prototype'
  | 'tool'
  | 'writeup'

export interface Prototype {
  slug: string
  title: string
  description: string
  href: string
  category: PrototypeCategory
  status: PrototypeStatus
  date: string
  tags?: string[]
  external?: boolean
}

export const prototypes: Prototype[] = [
  // Add entries here. Newest at the top.
  // Example:
  // {
  //   slug: 'chart-demo',
  //   title: 'Command Chart Explorer',
  //   description:
  //     'Interactive Highcharts gallery exploring chart types we ship in Command analytics.',
  //   href: '/chart-demo/',
  //   category: 'canvas',
  //   status: 'live',
  //   date: '2026-05-16',
  //   tags: ['highcharts', 'command', 'analytics'],
  // },
]
