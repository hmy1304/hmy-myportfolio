import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import Box from '../animation/Box'
import styles from './Hero.module.scss'
import { profile } from '../../data'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const headerH = document.querySelector('header')?.offsetHeight ?? 64
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH, behavior: 'smooth' })
  window.history.pushState(null, '', `#${id}`)
}

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`inner ${styles.inner}`}>

        {/* ── 텍스트 영역 ── */}
        <div className={styles.content}>
          <p className="sub-tit">{profile.role}</p>

          <h1 id="hero-heading" className="tit">
            {profile.name}
          </h1>

          <p className="txt">
            {profile.intro.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < profile.intro.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div className={styles.keywords}>
            <p>Keywords</p>
            <div className={styles.keywordList}>
              {profile.keywords.map((kw) => (
                <span key={kw}>{kw}</span>
              ))}
            </div>
          </div>

          <div className={styles.cta}>
            <button type="button" className="btn btn__primary" onClick={() => scrollTo('projects')}>
              작업물 보기
            </button>
            <button type="button" className="btn btn__outline" onClick={() => scrollTo('together')}>
              연락하기
            </button>
          </div>
        </div>

        {/* ── 3D 캔버스 영역 ── */}
        <div className={styles.canvasWrap}>
          <Canvas
            className={styles.canvas}
            camera={{ position: [0, 0, 4], fov: 65 }}
          >
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
              <Box position={[0, 0, 0]} scale={0.5} />
            </Float>
          </Canvas>
        </div>

      </div>
    </section>
  )
}

export default Hero
