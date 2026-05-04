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
        
      </div>
    </header>
  )
}

export default Header