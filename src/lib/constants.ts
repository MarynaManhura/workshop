export const NAV_ITEMS = [
  { label: 'Overview', href: '/' },
  { label: 'Button', href: '/components/button' },
  { label: 'Input', href: '/components/input' },
  { label: 'Badge', href: '/components/badge' },
  { label: 'Card', href: '/components/card' },
  { label: 'Alert', href: '/components/alert' },
  { label: 'Avatar', href: '/components/avatar' },
  { label: 'Toggle', href: '/components/toggle' },
] as const;

export const COMPONENT_CATEGORIES = {
  actions: ['button'],
  forms: ['input', 'toggle'],
  display: ['badge', 'card', 'alert', 'avatar'],
} as const;
