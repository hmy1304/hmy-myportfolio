import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectSwiper from '../components/projects/ProjectSwiper'
import { projects } from '../data'
import styles from './Projects.module.scss'

// 이 숫자 이하면 일반 그리드, 초과하면 Swiper 캐러셀
const GRID_LIMIT = 3

const Projects = () => {
  const useSwiper = projects.length > GRID_LIMIT

  return (
    <section id="projects" className={styles.projects}>
      <div className="inner">

        <div className={styles.header}>
          <p className="section-label">portfolio</p>
          <h2 className="section-title">
            WORK &amp; <span>PROJECTS</span>
          </h2>
          <p className={`txt ${styles.desc}`}>
            지금까지 배운 기술들을 사용하여 이러한 프로젝트들을 진행해왔습니다.
          </p>
        </div>

        {useSwiper ? (
          /* ── 4개 이상: Swiper 캐러셀 ── */
          <ProjectSwiper projects={projects} />
        ) : (
          /* ── 3개 이하: 기존 그리드 ── */
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects
