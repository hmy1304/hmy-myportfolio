import React from 'react'
import ContactCard from '../components/together/ContactCard'
import ContactForm from '../components/together/ContactForm'
import { contact, snsLinks } from '../data'
import styles from './Together.module.scss'

// 기본 연락처 정보 카드 (4개)
const infoItems = [
  { type: 'tel',      label: 'tel',      value: contact.tel },
  { type: 'email',    label: 'mail',     value: contact.email },
  { type: 'github',   label: 'github',   value: contact.github },
  { type: 'location', label: 'location', value: contact.location },
]

const Together = () => {
  return (
    <section id="together" className={styles.together}>
      {/* ── 배경 글로우 ── */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="inner">

        {/* ── 섹션 헤더 ── */}
        <div className={styles.header}>
          <p className="section-label">contact</p>
          <h2 className="section-title">
            LET'S WORK <span>TOGETHER</span>
          </h2>
          <p className={`txt ${styles.headerDesc}`}>
            지금까지의 저의 포트폴리오를 보시고 궁금한 것이 생기셨다면<br/>
            아래 폼이나 연락처로 편하게 메시지를 남겨주세요.
          </p>

          {/* 이력서 다운로드 버튼 */}
          <a
            href={contact.resumeUrl}
            download
            className={`btn btn__outline ${styles.resumeBtn}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            이력서 다운로드
          </a>
        </div>

        {/* ── 연락처 카드 행 ── */}
        <div className={styles.infoRow}>
          {infoItems.map((item) => (
            <ContactCard key={item.type} {...item} />
          ))}
        </div>

        {/* ── 하단: 문의 폼 + SNS ── */}
        <div className={styles.bottom}>

          {/* 문의 폼 */}
          <div className={styles.formWrap}>
            <ContactForm />
          </div>

          {/* SNS 링크 */}
          <div className={styles.snsWrap}>
            <p className={styles.snsTitle}>소셜 링크</p>
            <div className={styles.snsList}>
              {snsLinks.map(({ type, label, url }) => (
                <ContactCard
                  key={type}
                  type={type}
                  label={type}
                  value={label}
                  url={url}
                />
              ))}
            </div>

            {/* 한마디 메모 */}
            <div className={styles.memo}>
              <span className={styles.memoIcon}>✉</span>
              <div>
                <p className={styles.memoTitle}>빠른 응답을 원하신다면</p>
                <p className={styles.memoText}>
                  이메일 또는 문의 폼을 이용해 주세요.<br/>
                  평균 24시간 내에 회신드립니다.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Together
