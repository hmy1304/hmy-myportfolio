import React from 'react'
import styles from './Hero.module.scss'
import Stats from '../stats/Stats'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import Box from '../animation/Box'

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby='hero-heading'>
        <div className={`inner ${styles.inner}`}>
            <div className={styles.content}>
                <span className={`badge ${styles.badge}`}>
                    Intro
                </span>
                <p className="sub-tit">
                    fullstack developer
                </p>
                <h1 className="tit">
                    HAN MIN YEOB
                </h1>
                <p className='txt'>
                    안녕하세요, 끊임없이 배우고 성장하는 풀스택 개발자입니다.<br/>다양한 프로젝트를 통해 프론트엔드와 백엔드 전반을 경험하며, 문제 해결 능력을 키워왔습니다.
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
            <div className={styles.canvas}>
                <Canvas className={styles.canvas_anime} camera={{position:[0, 0, 4], fov:65}}>
                    <ambientLight intensity={0.7}/>
                    <pointLight position={[10, 10, 10]} intensity={1.5}/>
                    <Box position={[0, 0.4, 0]} scale={0.5}/>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Hero