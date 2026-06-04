import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data'
import styles from './Projects.module.scss'

const Projects = () => {
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

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
