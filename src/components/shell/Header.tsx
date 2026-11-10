'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { THEMES, applyTheme, getCurrentTheme } from '../../theme';

export const Header: React.FC = () => {
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('colorblind');

  useEffect(() => {
    const savedTheme = getCurrentTheme();
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.theme-dropdown-container')) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    setThemeDropdownOpen(false);
  };

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-muted)',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '6px 12px',
    borderRadius: '4px',
    transition: 'color 0.15s, background 0.15s',
    textDecoration: 'none'
  };

  return (
    <header
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-deep)',
        padding: '0 24px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      {/* Brand & Left Nav */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            marginRight: '32px'
          }}
        >
          <Image
            src="/logo.png"
            alt="Coffee, Tea & APTs"
            width={28}
            height={28}
            style={{ filter: 'drop-shadow(0 0 6px rgba(90,143,212,0.40))' }}
          />
          <div>
            <div
              style={{
                color: 'var(--text-heading)',
                fontWeight: 800,
                fontSize: '0.9rem',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              Coffee, Tea <span style={{ color: 'var(--primary)', fontWeight: 600 }}>& APTs</span>
            </div>
          </div>
        </a>

        {/* Tactical Nav Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <a
            href="/#news"
            style={linkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--text-bright)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Feed
          </a>
          <a
            href="/detections"
            style={linkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--text-bright)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Detection Library
          </a>
          <a
            href="/#blog"
            style={linkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--text-bright)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Muninn Blog
          </a>
        </nav>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Stream Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '4px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)'
          }}
        >
          <span className="pulse-indicator" />
          <span
            className="font-mono"
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

        <div
          style={{
            width: '1px',
            height: '16px',
            background: 'var(--border)'
          }}
        />

        {/* 7-Theme Selector Dropdown */}
        <div className="theme-dropdown-container" style={{ position: 'relative' }}>
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            style={{
              background: themeDropdownOpen ? 'var(--surface)' : 'transparent',
              border: '1px solid',
              borderColor: themeDropdownOpen ? 'var(--border-bright)' : 'transparent',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 8px',
              borderRadius: '4px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
            onMouseOver={(e) => {
              if (!themeDropdownOpen) {
                e.currentTarget.style.color = 'var(--text-bright)';
                e.currentTarget.style.background = 'var(--surface)';
              }
            }}
            onMouseOut={(e) => {
              if (!themeDropdownOpen) {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
            title="Switch Theme"
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
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <span style={{ textTransform: 'uppercase' }}>
              {THEMES.find((t) => t.id === currentTheme)?.name.split(' ')[0] || 'Theme'}
            </span>
          </button>

          {themeDropdownOpen && (
            <div
              className="fade-in"
              style={{
                position: 'absolute',
                top: '38px',
                right: 0,
                width: '260px',
                background: 'var(--surface)',
                border: '1px solid var(--border-bright)',
                borderRadius: '8px',
                boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
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
                    onClick={() => handleSelectTheme(theme.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '4px',
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
                    <div>
                      <div>{theme.name}</div>
                      <div
                        style={{
                          fontSize: '0.65rem',
                          color: 'var(--text-muted)',
                          marginTop: '2px'
                        }}
                      >
                        {theme.subtitle.split('(')[0]}
                      </div>
                    </div>
                    {/* Color Preview Dots */}
                    <div style={{ display: 'flex', gap: '3px' }}>
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
    </header>
  );
};
