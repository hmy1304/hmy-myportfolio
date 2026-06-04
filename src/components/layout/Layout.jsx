import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

const BADGES = [
  { id: 'intro',    label: 'INTRO' },
  { id: 'skills',   label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'together', label: 'TOGETHER' },
]

const Layout = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerH = document.querySelector('header')?.offsetHeight ?? 64
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth' })
    window.history.pushState(null, '', `#${id}`)
  }

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />

      {/* 우측 고정 섹션 배지 */}
      <nav className="side-badge" aria-label="Section quick links">
        {BADGES.map(({ id, label }) => (
          <span key={id} onClick={() => scrollTo(id)} style={{ cursor: 'pointer', pointerEvents: 'all' }}>
            {label}
          </span>
        ))}
      </nav>
    </div>
  )
}

export default Layout
