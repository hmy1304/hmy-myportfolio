import React from 'react'
import styles from './ContactCard.module.scss'

export const ICONS = {
  tel: (
    <svg viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02L6.62 10.79z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  velog: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm8.5 4.5l-4 9h2l.8-1.8h2.4l.8 1.8h2l-4-9zm0 3l.8 1.8h-1.6L11.5 10.5z"/>
    </svg>
  ),
}

const ContactCard = ({ type, label, value, url }) => {
  const inner = (
    <>
      <div className={styles.icon} aria-hidden="true">
        {ICONS[type]}
      </div>
      <div className={styles.info}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </>
  )

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.cardLink}`}>
      {inner}
    </a>
  ) : (
    <div className={styles.card}>{inner}</div>
  )
}

export default ContactCard
