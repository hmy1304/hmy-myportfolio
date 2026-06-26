import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";

// 썸네일 fallback SVG
const ThumbIcon = ({ variant }) => {
  if (variant === "blue")
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect
          x="10"
          y="20"
          width="60"
          height="40"
          rx="4"
          stroke="white"
          strokeWidth="2"
        />
        <path d="M10 30h60" stroke="white" strokeWidth="2" />
        <rect
          x="18"
          y="38"
          width="20"
          height="16"
          rx="2"
          fill="white"
          fillOpacity="0.5"
        />
        <rect
          x="44"
          y="38"
          width="28"
          height="5"
          rx="1"
          fill="white"
          fillOpacity="0.3"
        />
        <rect
          x="44"
          y="47"
          width="20"
          height="5"
          rx="1"
          fill="white"
          fillOpacity="0.3"
        />
      </svg>
    );
  if (variant === "cyan")
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect
          x="15"
          y="15"
          width="50"
          height="50"
          rx="6"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M25 32h30M25 40h20M25 48h25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="57" cy="23" r="8" fill="white" fillOpacity="0.4" />
        <path
          d="M54 23l2 2 4-4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="2" />
      <circle cx="25" cy="30" r="6" fill="white" fillOpacity="0.5" />
      <circle cx="55" cy="30" r="6" fill="white" fillOpacity="0.5" />
      <circle cx="40" cy="55" r="6" fill="white" fillOpacity="0.5" />
      <path
        d="M25 30l15 25M55 30L40 55M25 30h30"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
    </svg>
  );
};

const TAG_STYLES = {
  React: {
    bg: "rgba(20,80,100,0.7)",
    color: "#5bedf5",
    border: "rgba(91,237,245,0.3)",
  },
  "Node.js": {
    bg: "rgba(20,60,20,0.7)",
    color: "#4ade80",
    border: "rgba(74,222,128,0.3)",
  },
  JavaScript: {
    bg: "rgba(80,70,0,0.7)",
    color: "#facc15",
    border: "rgba(250,204,21,0.3)",
  },
  TypeScript: {
    bg: "rgba(20,40,100,0.7)",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.3)",
  },
  Vite: {
    bg: "rgba(70,20,80,0.7)",
    color: "#c084fc",
    border: "rgba(192,132,252,0.3)",
  },
  vite: {
    bg: "rgba(70,20,80,0.7)",
    color: "#c084fc",
    border: "rgba(192,132,252,0.3)",
  },
  Scss: {
    bg: "rgba(80,20,50,0.7)",
    color: "#f472b6",
    border: "rgba(244,114,182,0.3)",
  },
  css: {
    bg: "rgba(20,40,80,0.7)",
    color: "#93c5fd",
    border: "rgba(147,197,253,0.3)",
  },
  Router: {
    bg: "rgba(60,30,10,0.7)",
    color: "#fb923c",
    border: "rgba(251,146,60,0.3)",
  },
  Swiper: {
    bg: "rgba(50,20,20,0.7)",
    color: "#f87171",
    border: "rgba(248,113,113,0.3)",
  },
  ContextAPI: {
    bg: "rgba(20,60,60,0.7)",
    color: "#34d399",
    border: "rgba(52,211,153,0.3)",
  },
  LocalStorage: {
    bg: "rgba(40,40,20,0.7)",
    color: "#a3e635",
    border: "rgba(163,230,53,0.3)",
  },
  "Open Source API": {
    bg: "rgba(10,50,70,0.7)",
    color: "#38bdf8",
    border: "rgba(56,189,248,0.3)",
  },
  OpenWeatherAPI: {
    bg: "rgba(10,50,80,0.7)",
    color: "#7dd3fc",
    border: "rgba(125,211,252,0.3)",
  },
  Axios: {
    bg: "rgba(60,20,20,0.7)",
    color: "#fca5a5",
    border: "rgba(252,165,165,0.3)",
  },
};

const TAG_ICONS = {
  React: "⚛",
  "Node.js": "🟢",
  JavaScript: "JS",
  TypeScript: "TS",
  Vite: "⚡",
  vite: "⚡",
  Scss: "🎨",
  css: "🖌",
  Router: "🔗",
  Swiper: "↔",
  ContextAPI: "🔄",
  LocalStorage: "💾",
  "Open Source API": "🌐",
  OpenWeatherAPI: "🌤",
  Axios: "📡",
};

const DEFAULT_TAG_STYLE = {
  bg: "rgba(40,40,60,0.7)",
  color: "#a78bfa",
  border: "rgba(167,139,250,0.3)",
};

const DESC_MAX = 100;

const isValid = (url) => url && url !== "#";

const ProjectCard = ({
  title,
  tags,
  status,
  desc,
  deployUrl,
  codeUrl,
  thumbImage,
  thumbVariant,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = desc && desc.length > DESC_MAX;
  const displayDesc =
    isLong && !expanded ? desc.slice(0, DESC_MAX) + "..." : desc;

  // 카드 전체 클릭 → Vercel 배포 URL
  const handleCardClick = () => {
    if (isValid(deployUrl)) {
      window.open(deployUrl, "_blank", "noopener,noreferrer");
    }
  };

  // GitHub 버튼 클릭 → GitHub URL (카드 클릭 이벤트 차단)
  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (isValid(codeUrl)) {
      window.open(codeUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleExpandClick = (e) => {
    e.stopPropagation();
    setExpanded((v) => !v);
  };

  const hasDeployUrl = isValid(deployUrl);
  const hasCodeUrl = isValid(codeUrl);

  return (
    <article
      className={`${styles.card} ${hasDeployUrl ? styles.linked : ""}`}
      onClick={handleCardClick}
      role={hasDeployUrl ? "link" : undefined}
      tabIndex={hasDeployUrl ? 0 : undefined}
      onKeyDown={
        hasDeployUrl ? (e) => e.key === "Enter" && handleCardClick() : undefined
      }
      aria-label={hasDeployUrl ? `${title} 배포 페이지 보기` : undefined}
    >
      {/* 썸네일 */}
      <div
        className={`${styles.thumb} ${!thumbImage ? styles[thumbVariant] : ""}`}
      >
        {thumbImage ? (
          <img
            src={thumbImage}
            alt={`${title} 썸네일`}
            className={styles.thumbImg}
          />
        ) : (
          <ThumbIcon variant={thumbVariant} />
        )}

        {/* 배포 URL 호버 오버레이 */}
        {hasDeployUrl && (
          <div className={styles.thumbOverlay}>
            {/* Vercel 삼각형 아이콘 */}
            <svg width="32" height="32" viewBox="0 0 512 512" fill="white">
              <path d="M256 48L496 464H16z" />
            </svg>
            <span>배포 사이트 보기</span>
          </div>
        )}
      </div>

      {/* 메타 */}
      <div className={styles.meta}>
        {/* 태그 + 상태 */}
        <div className={styles.tagsRow}>
          <div className={styles.tagGroup}>
            {tags.map((t) => {
              const s = TAG_STYLES[t] || DEFAULT_TAG_STYLE;
              const icon = TAG_ICONS[t];
              return (
                <span
                  key={t}
                  className={styles.tag}
                  style={{
                    background: s.bg,
                    color: s.color,
                    border: `1px solid ${s.border}`,
                  }}
                >
                  {icon && <span className={styles.tagIcon}>{icon}</span>}
                  {t}
                </span>
              );
            })}
          </div>
          <span className={styles.status}>{status}</span>
        </div>

        {/* 제목 */}
        <h3 className={styles.title}>{title}</h3>

        {/* 설명 */}
        <p className={styles.desc}>
          {displayDesc}
          {isLong && (
            <button className={styles.expandBtn} onClick={handleExpandClick}>
              {expanded ? " 접기" : " 더보기"}
            </button>
          )}
        </p>

        {/* 하단 버튼 영역 */}
        <div className={styles.actions}>
          {/* Vercel 배포 뱃지 */}
          {hasDeployUrl && (
            <div className={styles.deployBadge}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M256 48L496 464H16z" />
              </svg>
              배포 사이트
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 10L10 2M10 2H4M10 2v6" />
              </svg>
            </div>
          )}

          {/* GitHub 버튼 — 클릭 이벤트 독립 */}
          {hasCodeUrl && (
            <button
              className={styles.githubBtn}
              onClick={handleGithubClick}
              aria-label={`${title} GitHub 보기`}
              title="GitHub에서 보기"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 10L10 2M10 2H4M10 2v6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
