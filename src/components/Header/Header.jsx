import React from 'react'
import { NavLink } from 'react-router-dom'
import {useTheme} from "../../context/useTheme"
import { navItems } from '../../utils/nav'
import styles from "./Header.module.scss"

const Header = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} end>
          <div className={styles.title_logo}/>
          민엽.P
        </NavLink>
        <nav className={styles.nav} aria-label='Main'>
          {navItems.map(({to, label})=>(
            <NavLink
            to={to}
            key={to}
            className={({isActive})=>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <button type='button' className={styles.btnOutline}>
            Resume
          </button>
          <button type='button' className={styles.btnPrimary}>
            Hire me
          </button>
          <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
          >
            {theme == 'dark' ? 'light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header