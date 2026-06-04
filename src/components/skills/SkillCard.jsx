import React, { useEffect, useRef, useState } from 'react'
import styles from './SkillCard.module.scss'

const SkillCard = ({ icon, label, variant, items }) => {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.header}>
        <div className={`${styles.icon} ${styles[variant]}`}>{icon}</div>
        <span className={styles.title}>{label}</span>
      </div>

      {items.map(({ name, level }) => (
        <div key={name} className={styles.item}>
          <span className={styles.name}>{name}</span>
          <div className={styles.barBg}>
            <div
              className={`${styles.barFill} ${styles[variant]}`}
              style={{ width: visible ? `${level}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillCard
