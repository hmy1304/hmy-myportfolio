import React from 'react'
import ContactCard from '../components/together/ContactCard'
import { contact, profile } from '../data'
import styles from './Together.module.scss'

const contactItems = [
  { type: 'tel',      label: 'tel',      value: contact.tel },
  { type: 'email',    label: 'mail',     value: contact.email },
  { type: 'github',   label: 'github',   value: contact.github },
  { type: 'location', label: 'location', value: contact.location },
]

const Together = () => {
  return (
    <section id="together" className={styles.together}>
      <div className="inner">
        <div className={styles.layout}>

          {/* ── 좌측 텍스트 ── */}
          <div className={styles.left}>
            <p className="section-label">contact</p>
            <h2 className={`section-title ${styles.bigTitle}`}>
              LET'S<br />
              WORK<br />
              <span>TOGETHER</span>
            </h2>
            <p className={`txt ${styles.desc}`}>
              안녕하세요, 끊임없이 배우고 성장하는 풀스택 개발자입니다.<br /><br />
              지금까지의 저의 포트폴리오를 보시고 저에 대해서 궁금한 것이 생기셨다면
              부디 이쪽으로 연락을 주시면 감사하겠습니다.
            </p>
          </div>

          {/* ── 우측 연락처 그리드 ── */}
          <div className={styles.right}>
            <div className={styles.grid}>
              {contactItems.map((item) => (
                <ContactCard key={item.type} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Together
