import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import styles from './Header.module.scss'

const SECTION_IDS = navItems.map((item) => item.href.slice(1)) // ['intro','skills','projects','together']

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [activeId, setActiveId] = useState('intro')

  // ── IntersectionObserver: 뷰포트에 들어온 섹션을 active로 표시
  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        {
          rootMargin: '-40% 0px -55% 0px', // 화면 중앙 근처를 트리거
          threshold: 0,
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  // ── 앵커 클릭: smooth scroll + URL hash 반영
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    // header 높이만큼 offset
    const headerH = document.querySelector('header')?.offsetHeight ?? 64
    const top = el.getBoundingClientRect().top + window.scrollY - headerH

    window.scrollTo({ top, behavior: 'smooth' })
    window.history.pushState(null, '', href)
    setActiveId(id)
  }, [])

  return (
    <header className={styles.header}>
      <div className={`inner ${styles.inner}`}>
        {/* 로고 → 최상단 이동 */}
        <a
          href="#intro"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, '#intro')}
        >
          <div className={styles.logoIcon}>h</div>
          민엽.P
        </a>

        <div className={styles.headMenu}>
          <nav className={styles.nav} aria-label="Main">
            {navItems.map(({ href, label }) => {
              const id = href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={
                    activeId === id
                      ? `${styles.link} ${styles.linkActive}`
                      : styles.link
                  }
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className={styles.actions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
