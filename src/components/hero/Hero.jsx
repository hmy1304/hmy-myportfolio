import React from 'react'
import styles from './Hero.module.scss'
import Stats from '../stats/Stats'

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby='hero-heading'>
        <div className={`inner ${styles.inner}`}>
            <div className={styles.content}>
                <span className="badge badge__green">
                    open to work
                </span>
                <h1 className="tit">
                    Full-stack engineer building fast, accessible web apps.
                </h1>
                <p className='txt'>
                    Placeholder sub-headline — content will match the final design.
                </p>
                <div className={styles.cta}>
                    <button type='button' className='btn btn__primary'>
                        작업물 보기
                    </button>
                    <button type='button' className='btn btn__outline'>
                        연락하기
                    </button>
                </div>

                <Stats />
            </div>
            <div className={styles.visual} >
                <div className={styles.imageFrame} />
            </div>
        </div>
    </section>
  )
}

export default Hero