const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export const ArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

export const ArrowDown = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </svg>
)

export const Download = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v11" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 19h14" />
  </svg>
)

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const Phone = (props) => (
  <svg {...base} {...props}>
    <path d="M6.5 3h3l1.6 4-2 1.3a11.5 11.5 0 0 0 5.6 5.6l1.3-2 4 1.6v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.5 5.1 2 2 0 0 1 6.5 3Z" />
  </svg>
)

export const LinkedIn = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M6.3 8.5H3.4V20h2.9V8.5ZM4.9 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.6 13c0-3.3-1.8-4.8-4.2-4.8-1.8 0-2.7 1-3.2 1.7V8.5H10.3V20h2.9v-6.2c0-1.6.6-2.6 2-2.6s1.9 1 1.9 2.6V20h2.9v-7Z" />
  </svg>
)

export const GitHub = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .8 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1.1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.6-2.2 4.4-4.3 4.7.3.3.6.9.6 1.8v2.7c0 .3.2.6.6.5A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
)

export const Menu = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
)

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
)
