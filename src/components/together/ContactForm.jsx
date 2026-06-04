import React, { useState } from 'react'
import styles from './ContactForm.module.scss'

const INITIAL = { name: '', email: '', message: '' }

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // 실제 전송 로직은 백엔드 연동 시 교체
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL)
    }, 1200)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.formTitle}>문의하기</h3>
      <p className={styles.formDesc}>
        프로젝트 협업이나 채용 관련 문의를 남겨주세요.<br/>빠르게 회신드리겠습니다.
      </p>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.fieldLabel}>이름</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="홍길동"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
            disabled={status === 'sending' || status === 'sent'}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.fieldLabel}>이메일</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            disabled={status === 'sending' || status === 'sent'}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.fieldLabel}>메시지</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="문의 내용을 입력해주세요."
          value={form.message}
          onChange={handleChange}
          className={styles.textarea}
          rows={5}
          disabled={status === 'sending' || status === 'sent'}
          required
        />
      </div>

      {status === 'sent' ? (
        <div className={styles.successMsg}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          메시지가 전송되었습니다. 빠르게 답변드리겠습니다!
        </div>
      ) : (
        <button
          type="submit"
          className={`btn btn__primary ${styles.submitBtn}`}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              <span className={styles.spinner} />
              전송 중...
            </>
          ) : (
            <>
              메시지 보내기
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </>
          )}
        </button>
      )}
    </form>
  )
}

export default ContactForm
