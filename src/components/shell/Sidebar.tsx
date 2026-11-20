'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { THEMES, applyTheme, getCurrentTheme } from '../../theme';

const SIDEBAR_STORAGE_KEY = 'cta_sidebar_collapsed';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const isNews = pathname?.startsWith('/news') || pathname?.startsWith('/feed');
  const isVulns = pathname?.startsWith('/vulnerabilities');
  const isDetections = pathname?.startsWith('/detections');
  const isBlog = pathname?.startsWith('/blog');

  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('colorblind');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = getCurrentTheme();
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    try {
      const savedCollapsed = localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';
      setCollapsed(savedCollapsed);
      if (savedCollapsed) {
        document.documentElement.setAttribute('data-sidebar', 'collapsed');
      } else {
        document.documentElement.removeAttribute('data-sidebar');
      }
    } catch {}

    setMounted(true);

    const handleThemeSync = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setCurrentTheme(detail);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.theme-dropdown-container')) {
        setThemeDropdownOpen(false);
      }
    };

    window.addEventListener('theme_change', handleThemeSync);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('theme_change', handleThemeSync);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleToggleCollapse = () => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next));
      } catch {}
      if (next) {
        document.documentElement.setAttribute('data-sidebar', 'collapsed');
      } else {
        document.documentElement.removeAttribute('data-sidebar');
      }
      return next;
    });
  };

  const handleSelectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    setThemeDropdownOpen(false);
  };

  const navItems = [
    {
      label: 'Home',
      href: '/',
      active: isHome,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      )
    },
    {
      label: 'News',
      href: '/news/',
      active: Boolean(isNews),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      )
    },
    {
      label: 'Vulnerabilities',
      href: '/vulnerabilities/',
      active: Boolean(isVulns),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    },
    {
      label: 'Detection Library',
      href: '/detections/',
      active: Boolean(isDetections),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      label: 'Muninn Blog',
      href: '/blog/',
      active: Boolean(isBlog),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    }
  ];

  const activeThemeName = mounted
    ? THEMES.find((t) => t.id === currentTheme)?.name || 'Theme'
    : 'Theme';

  return (
    <div className="app-shell">
      {/* Mobile Header Bar (shown <= 860px) */}
      <div className="app-mobile-bar">
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <Image
            src="/logo.png"
            alt="Coffee, Tea & APTs"
            width={26}
            height={26}
            style={{ filter: 'drop-shadow(0 0 6px rgba(90,143,212,0.40))' }}
          />
          <span
            style={{
              color: 'var(--text-heading)',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '-0.02em'
            }}
          >
            Coffee, Tea <span style={{ color: 'var(--primary)', fontWeight: 600 }}>&amp; APTs</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            color: 'var(--text-bright)',
            padding: '6px 10px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: '52px 0 0 0',
            background: 'rgba(0, 0, 0, 0.55)',
            zIndex: 95
          }}
        />
      )}

      {/* Left Collapsible Vertical Sidebar */}
      <aside
        className={`app-sidebar${collapsed ? ' is-collapsed' : ''}${mobileMenuOpen ? ' mobile-open' : ''}`}
      >
        {/* Top Brand + Collapse Toggle + Nav Links */}
        <div style={{ padding: '18px 12px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {/* Brand & Collapse Row */}
          <div
            className="sidebar-brand-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              padding: '0 4px'
            }}
          >
            <Link
              href="/"
              title="Coffee, Tea & APTs — Home"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                minWidth: 0
              }}
            >
              <Image
                src="/logo.png"
                alt="Coffee, Tea & APTs"
                width={30}
                height={30}
                style={{ filter: 'drop-shadow(0 0 6px rgba(90,143,212,0.40))', flexShrink: 0 }}
              />
              <div className="sidebar-hide-collapsed" style={{ minWidth: 0 }}>
                <div
                  style={{
                    color: 'var(--text-heading)',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Coffee, Tea <span style={{ color: 'var(--primary)', fontWeight: 600 }}>&amp; APTs</span>
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginTop: '2px'
                  }}
                >
                  MUNINN GATEWAY
                </div>
              </div>
            </Link>

            {/* Collapse / Expand Button */}
            <button
              type="button"
              onClick={handleToggleCollapse}
              className="sidebar-collapse-toggle"
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--text-bright)';
                e.currentTarget.style.borderColor = 'var(--border-bright)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
                {collapsed ? (
                  <polyline points="13 9 16 12 13 15" />
                ) : (
                  <polyline points="16 9 13 12 16 15" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Section */}
          <div>
            <div
              className="font-mono sidebar-hide-collapsed"
              style={{
                fontSize: '0.64rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                padding: '0 8px',
                marginBottom: '8px'
              }}
            >
              Navigation
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.label}
                  className="sidebar-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '9px 12px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: item.active ? 700 : 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    color: item.active ? 'var(--text-bright)' : 'var(--text-muted)',
                    background: item.active ? 'var(--surface-raised)' : 'transparent',
                    borderLeft: item.active ? '3px solid var(--primary)' : '3px solid transparent',
                    transition: 'color 0.15s, background 0.15s, border-color 0.15s'
                  }}
                  onMouseOver={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.color = 'var(--text-bright)';
                      e.currentTarget.style.background = 'var(--surface)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <span style={{ color: item.active ? 'var(--primary)' : 'inherit', display: 'inline-flex', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <span className="sidebar-hide-collapsed">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Status & Theme Selector */}
        <div
          style={{
            padding: '14px 12px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {/* Live Stream Badge */}
          <div
            className="sidebar-status-pill"
            title="Public Feed Live"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 10px',
              borderRadius: '6px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              whiteSpace: 'nowrap'
            }}
          >
            <span className="pulse-indicator" style={{ flexShrink: 0 }} />
            <span
              className="font-mono sidebar-hide-collapsed"
              style={{
                fontSize: '0.68rem',
                color: 'var(--success)',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              PUBLIC FEED LIVE
            </span>
          </div>

          {/* 7-Theme Selector Dropdown (opens upward) */}
          <div className="theme-dropdown-container" style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="sidebar-theme-btn"
              style={{
                width: '100%',
                background: themeDropdownOpen ? 'var(--surface-raised)' : 'var(--surface)',
                border: '1px solid',
                borderColor: themeDropdownOpen ? 'var(--border-bright)' : 'var(--border)',
                cursor: 'pointer',
                color: 'var(--text-bright)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                padding: '8px 10px',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.03em'
              }}
              title={`Theme: ${activeThemeName}`}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <span
                  className="sidebar-hide-collapsed"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {activeThemeName}
                </span>
              </span>
              <span
                className="font-mono sidebar-hide-collapsed"
                style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}
              >
                {themeDropdownOpen ? '▾' : '▴'}
              </span>
            </button>

            {themeDropdownOpen && (
              <div
                className="fade-in"
                style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 8px)',
                  left: 0,
                  width: '256px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border-bright)',
                  borderRadius: '8px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.65)',
                  zIndex: 1000,
                  padding: '6px'
                }}
              >
                <div
                  style={{
                    padding: '8px 10px 6px 10px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    borderBottom: '1px solid var(--border)',
                    marginBottom: '4px'
                  }}
                >
                  7-Theme Dark UI System
                </div>
                {THEMES.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => handleSelectTheme(theme.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 10px',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                        background: isSelected ? 'var(--surface-raised)' : 'transparent',
                        color: isSelected ? 'var(--text-bright)' : 'var(--text)',
                        textAlign: 'left',
                        fontSize: '0.75rem',
                        fontWeight: isSelected ? 700 : 500
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--surface-raised)';
                        e.currentTarget.style.color = 'var(--text-bright)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = isSelected
                          ? 'var(--surface-raised)'
                          : 'transparent';
                        e.currentTarget.style.color = isSelected
                          ? 'var(--text-bright)'
                          : 'var(--text)';
                      }}
                    >
                      <div style={{ paddingRight: '8px' }}>
                        <div>{theme.name}</div>
                        <div
                          style={{
                            fontSize: '0.64rem',
                            color: 'var(--text-muted)',
                            marginTop: '2px'
                          }}
                        >
                          {theme.subtitle.split('(')[0]}
                        </div>
                      </div>
                      {/* Color Preview Dots */}
                      <div style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: theme.previewColors.bg,
                            border: '1px solid #444'
                          }}
                        />
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: theme.previewColors.primary
                          }}
                        />
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: theme.previewColors.accent
                          }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="app-main-column">
        {children}
      </div>
    </div>
  );
};
