import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import ProjectCard from './ProjectCard'
import styles from './ProjectSwiper.module.scss'

// Swiper core CSS (v11)
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProjectSwiper = ({ projects }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState(null)
  const total = projects.length

  // 커스텀 버튼을 swiper에 연결
  useEffect(() => {
    if (!swiperInstance) return
    swiperInstance.params.navigation.prevEl = prevRef.current
    swiperInstance.params.navigation.nextEl = nextRef.current
    swiperInstance.navigation.destroy()
    swiperInstance.navigation.init()
    swiperInstance.navigation.update()
  }, [swiperInstance])

  return (
    <div className={styles.wrap}>

      {/* 슬라이드 카운터 */}
      <div className={styles.counter} aria-live="polite">
        <span className={styles.current}>{String(activeIndex + 1).padStart(2, '0')}</span>
        <span className={styles.sep}>/</span>
        <span className={styles.total}>{String(total).padStart(2, '0')}</span>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        onSwiper={setSwiperInstance}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        slidesPerView={3}
        spaceBetween={24}
        centeredSlides={false}
        loop={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true, el: `.${styles.pagination}` }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        breakpoints={{
          0:   { slidesPerView: 1, spaceBetween: 24 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          900: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className={styles.swiper}
        a11y={{ prevSlideMessage: '이전 프로젝트', nextSlideMessage: '다음 프로젝트' }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className={styles.slide}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 + 페이지네이션 바 */}
      <div className={styles.controls}>
        <div className={styles.pagination} />

        <div className={styles.navBtns}>
          <button ref={prevRef} className={styles.navBtn} aria-label="이전 슬라이드">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button ref={nextRef} className={styles.navBtn} aria-label="다음 슬라이드">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProjectSwiper
