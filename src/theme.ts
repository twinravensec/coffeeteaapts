export interface ThemeOption {
  id: string
  name: string
  subtitle: string
  previewColors: {
    bg: string
    surface: string
    primary: string
    accent: string
  }
}

export const THEMES: ThemeOption[] = [
  {
    id: 'colorblind',
    name: 'Colorblind Accessible',
    subtitle: 'Okabe-Ito high contrast palette safe for all vision spectrums (Default)',
    previewColors: { bg: '#0c1219', surface: '#141c26', primary: '#56b4e9', accent: '#e69f00' }
  },
  {
    id: 'midnight-stealth',
    name: 'Midnight Stealth',
    subtitle: 'Balanced dark blue tactical operations palette',
    previewColors: { bg: '#080b12', surface: '#111622', primary: '#5a8fd4', accent: '#32a852' }
  },
  {
    id: 'neon-green',
    name: 'Old School Neon Green',
    subtitle: 'Classic retro CRT phosphor terminal green',
    previewColors: { bg: '#040d07', surface: '#0a170d', primary: '#00ff66', accent: '#70df93' }
  },
  {
    id: 'black-and-white',
    name: 'Black & White',
    subtitle: 'High-contrast stark minimalist noir monochrome',
    previewColors: { bg: '#080808', surface: '#1c1c1c', primary: '#ffffff', accent: '#888888' }
  },
  {
    id: 'synthwave-80s',
    name: '80s Synthwave',
    subtitle: 'Retro outrun neon magenta, electric cyan & deep sunset violet',
    previewColors: { bg: '#110a24', surface: '#190f33', primary: '#ff2a85', accent: '#00f0ff' }
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    subtitle: 'Night City industrial carbon with high-voltage neon yellow & cyan',
    previewColors: { bg: '#0d0e15', surface: '#131724', primary: '#fcee0a', accent: '#00f0ff' }
  },
  {
    id: 'dracula',
    name: 'Dracula Dark',
    subtitle: 'Universally acclaimed gothic purple, pink & mint developer palette',
    previewColors: { bg: '#21222c', surface: '#282a36', primary: '#bd93f9', accent: '#50fa7b' }
  }
]

export function applyTheme(themeId: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem('twinraven_theme', themeId)
  document.documentElement.setAttribute('data-theme', themeId)
  window.dispatchEvent(new CustomEvent('theme_change', { detail: themeId }))
}

export function getCurrentTheme(): string {
  if (typeof window === 'undefined') return 'colorblind'
  const saved = localStorage.getItem('twinraven_theme')
  if (!saved || saved === 'default') return 'colorblind'
  return saved
}
