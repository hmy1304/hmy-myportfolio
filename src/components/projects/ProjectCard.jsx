import React from 'react'
import styles from './ProjectCard.module.scss'

// 썸네일 SVG 아이콘들
const ThumbIcon = ({ variant }) => {
  if (variant === 'blue') return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="10" y="20" width="60" height="40" rx="4" stroke="white" strokeWidth="2"/>
      <path d="M10 30h60" stroke="white" strokeWidth="2"/>
      <rect x="18" y="38" width="20" height="16" rx="2" fill="white" fillOpacity="0.5"/>
      <rect x="44" y="38" width="28" height="5" rx="1" fill="white" fillOpacity="0.3"/>
      <rect x="44" y="47" width="20" height="5" rx="1" fill="white" fillOpacity="0.3"/>
    </svg>
  )
  if (variant === 'cyan') return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="15" y="15" width="50" height="50" rx="6" stroke="white" strokeWidth="2"/>
      <path d="M25 32h30M25 40h20M25 48h25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="57" cy="23" r="8" fill="white" fillOpacity="0.4"/>
      <path d="M54 23l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="2"/>
      <circle cx="25" cy="30" r="6" fill="white" fillOpacity="0.5"/>
      <circle cx="55" cy="30" r="6" fill="white" fillOpacity="0.5"/>
      <circle cx="40" cy="55" r="6" fill="white" fillOpacity="0.5"/>
      <path d="M25 30l15 25M55 30L40 55M25 30h30" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
    </svg>
  )
}

const TAG_MAP = {
  React:    'react',
  'Node.js': 'node',
}

const ProjectCard = ({ title, tags, status, desc, codeUrl, thumbVariant }) => {
  return (
    <article className={styles.card}>
      <div className={`${styles.thumb} ${styles[thumbVariant]}`}>
        <ThumbIcon variant={thumbVariant} />
      </div>

      <div className={styles.meta}>
        <div className={styles.tags}>
          <div className={styles.tagGroup}>
            {tags.map((t) => (
              <span key={t} className={`${styles.tag} ${styles[TAG_MAP[t] || '']}`}>{t}</span>
            ))}
          </div>
          <span className={`${styles.tag} ${styles.done}`}>{status}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>

        <a href={codeUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
          코드보기
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 10L10 2M10 2H4M10 2v6"/>
          </svg>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
