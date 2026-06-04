import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <p className={styles.copy}>@한민엽 포트폴리오</p>
      </div>
    </footer>
  )
}

export default Footer
