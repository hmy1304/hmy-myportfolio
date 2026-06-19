import React, { useEffect, useState } from 'react'
import styles from './CodeModal.module.scss'

const CodeModal = ({ title, codeUrl, codeFiles, onClose }) => {
  const [activeFile, setActiveFile] = useState(0)
  const [copied, setCopied] = useState(false)

  // ESC 키로 닫기
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const files = codeFiles || []
  const currentFile = files[activeFile]

  const handleCopy = () => {
    if (!currentFile?.code) return
    navigator.clipboard.writeText(currentFile.code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // 코드 줄 강조 렌더링 (단순 토크나이저)
  const renderCode = (code) => {
    if (!code) return null
    return code.split('\n').map((line, i) => (
      <div key={i} className={styles.codeLine}>
        <span className={styles.lineNum}>{i + 1}</span>
        <span className={styles.lineContent}>{colorize(line)}</span>
      </div>
    ))
  }

  // 간단한 구문 강조
  const colorize = (line) => {
    const parts = []
    let rest = line

    // import/export/const/let/var/function/return/if/else/class 키워드
    const keywords = /\b(import|export|from|const|let|var|function|return|if|else|class|extends|new|this|typeof|async|await|default)\b/g
    // string
    const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g
    // comment
    const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm
    // jsx tag
    const tags = /(<\/?[A-Za-z][A-Za-z0-9.]*(?:\s[^>]*)?\/>?|<\/?[A-Za-z][A-Za-z0-9.]*>)/g

    // 그냥 텍스트 그대로 반환 (실제 파서는 복잡하므로 단순 렌더)
    return <span dangerouslySetInnerHTML={{ __html: syntaxHL(line) }} />
  }

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={`${title} 코드 뷰어`}>

        {/* 헤더 */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.red}`}   onClick={onClose} title="닫기" />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
            </div>
            <div className={styles.titleWrap}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              <span className={styles.modalTitle}>{title}</span>
            </div>
          </div>
          <div className={styles.headerRight}>
            {codeUrl && codeUrl !== '#' && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubBtn}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub에서 보기
              </a>
            )}
            <button className={styles.copyBtn} onClick={handleCopy} title="코드 복사">
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
              )}
              {copied ? '복사됨!' : '복사'}
            </button>
            <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 파일 탭 */}
        {files.length > 0 && (
          <div className={styles.tabs}>
            {files.map((f, i) => (
              <button
                key={i}
                className={`${styles.tab} ${i === activeFile ? styles.activeTab : ''}`}
                onClick={() => setActiveFile(i)}
              >
                <span className={styles.tabIcon}>{getFileIcon(f.name)}</span>
                {f.name}
              </button>
            ))}
          </div>
        )}

        {/* 코드 본문 */}
        <div className={styles.body}>
          {files.length === 0 ? (
            <div className={styles.noCode}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              <p>등록된 코드가 없습니다.</p>
              {codeUrl && codeUrl !== '#' && (
                <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                  GitHub에서 코드 보기 →
                </a>
              )}
            </div>
          ) : (
            <pre className={styles.pre}>
              <code className={styles.code}>
                {currentFile?.code
                  ? currentFile.code.split('\n').map((line, i) => (
                      <div key={i} className={styles.codeLine}>
                        <span className={styles.lineNum}>{i + 1}</span>
                        <span
                          className={styles.lineContent}
                          dangerouslySetInnerHTML={{ __html: syntaxHL(line) }}
                        />
                      </div>
                    ))
                  : <span className={styles.noCodeText}>코드 내용이 없습니다.</span>
                }
              </code>
            </pre>
          )}
        </div>

        {/* 하단 상태바 */}
        {currentFile && (
          <div className={styles.statusBar}>
            <span>{currentFile.name}</span>
            <span>{currentFile.language || 'plaintext'}</span>
            <span>{currentFile.code?.split('\n').length || 0} lines</span>
          </div>
        )}
      </div>
    </div>
  )
}

// 파일 확장자별 아이콘
function getFileIcon(name = '') {
  const ext = name.split('.').pop()?.toLowerCase()
  const map = {
    jsx: '⚛', tsx: '⚛', js: '📜', ts: '📘',
    css: '🎨', scss: '🎨', html: '🌐', json: '{}',
    md: '📝', py: '🐍', java: '☕', go: '🐹',
  }
  return map[ext] || '📄'
}

// 간단한 구문 강조 (HTML escape + keyword highlight)
function syntaxHL(line) {
  // 1. HTML 특수문자 이스케이프
  let s = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // 2. 주석
  s = s.replace(/(\/\/.*$)/g, '<span style="color:#6b7280;font-style:italic">$1</span>')
  // 3. 문자열
  s = s.replace(/(&quot;[^&]*?&quot;|'[^']*?'|`[^`]*?`)/g, '<span style="color:#86efac">$1</span>')
  // 4. 키워드
  s = s.replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|new|this|typeof|async|await|default|switch|case|break|continue|try|catch|finally|null|undefined|true|false)\b/g,
    '<span style="color:#c084fc">$1</span>')
  // 5. JSX 태그명
  s = s.replace(/(&lt;\/?[A-Z][A-Za-z0-9]*)/g, '<span style="color:#60a5fa">$1</span>')
  // 6. 숫자
  s = s.replace(/\b(\d+)\b/g, '<span style="color:#fb923c">$1</span>')

  return s
}

export default CodeModal
