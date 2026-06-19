import React from 'react'
import SkillCard from '../components/skills/SkillCard'
import { skillGroups } from '../data'
import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="inner">

        {/* ── 타이틀 영역 (위 · 가운데) ── */}
        <div className={styles.header}>
          <p className="section-label">what i do</p>
          <h2 className="section-title">
            SKILLS &amp;<br />
            <span>STACK</span>
          </h2>
          <p className={`txt ${styles.desc}`}>
            안녕하세요, 끊임없이 배우고 성장하는 풀스택 개발자입니다.<br /><br />
            다양한 프로젝트를 통해 프론트엔드와 백엔드 전반을 경험하며,
            문제 해결 능력을 키워왔습니다.
          </p>
        </div>

        {/* ── 스킬 카드 그리드 (아래) ── */}
        <div className={styles.cardsGrid}>
          {skillGroups.map((group) => (
            <SkillCard
              key={group.id}
              icon={group.icon}
              label={group.label}
              variant={group.variant}
              items={group.items}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
