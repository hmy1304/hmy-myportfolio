// ─────────────────────────────────────────
//  모든 포트폴리오 데이터를 한 곳에서 관리
// ─────────────────────────────────────────

export const profile = {
  name: 'HAN MIN YEOB',
  nameKo: '한민엽',
  role: 'Fullstack Developer',
  intro: '안녕하세요, 끊임없이 배우고 성장하는 풀스택 개발자입니다.\n다양한 프로젝트를 통해 프론트엔드와 백엔드 전반을 경험하며, 문제 해결 능력을 키워왔습니다.',
  keywords: ['#성실', '#성장', '#FM', '#적당한 융통성'],
}

export const contact = {
  tel: '010-1111-2222',
  email: 'hmy@gmail.com',
  github: 'github.com',
  location: '경기도 남양주시',
  resumeUrl: '/resume.pdf',
}

export const snsLinks = [
  { type: 'github',   label: 'GitHub',   url: 'https://github.com' },
  { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
  { type: 'velog',    label: 'Velog',    url: 'https://velog.io' },
]

// ── Skills ───────────────────────────────
export const skillGroups = [
  {
    id: 'frontend',
    label: '프론트엔드',
    icon: 'F',
    variant: 'fe',
    items: [
      { name: 'React/Next.js',  level: 85 },
      { name: 'TypeScript',     level: 78 },
      { name: 'TailwindCSS',    level: 88 },
      { name: 'Redux/zustand',  level: 72 },
    ],
  },
  {
    id: 'backend',
    label: '백엔드',
    icon: 'B',
    variant: 'be',
    items: [
      { name: 'Node.js/express', level: 80 },
      { name: 'REST&GraphQL',    level: 75 },
      { name: 'SQL/Redis',       level: 68 },
      { name: 'Prisma/ORM',      level: 65 },
    ],
  },
  {
    id: 'devops',
    label: '데이터베이스',
    icon: 'D',
    variant: 'db',
    items: [
      { name: 'Docker/Kubernetes', level: 70 },
      { name: 'AWS/GCP/Vercel',    level: 65 },
      { name: 'CI/CD&파이프라인',   level: 60 },
      { name: 'Nginx/Linux',       level: 62 },
    ],
  },
  {
    id: 'testing',
    label: '테스팅&품질관리',
    icon: 'T',
    variant: 'test',
    items: [
      { name: 'Jest/Vitest',           level: 72 },
      { name: 'Cypress',               level: 65 },
      { name: 'React Testing Library', level: 70 },
      { name: 'Storybook',             level: 60 },
    ],
  },
]

// ── Projects ─────────────────────────────
// 3개 이하 → 그리드 / 4개 이상 → Swiper 캐러셀 자동 전환
//
// ★ 이미지 삽입 방법 2가지:
//
// [방법 1] public 폴더 — 경로를 문자열로 직접 지정
//   thumbImage: '/images/todo.png'
//   → 파일을 public/images/ 에 넣으면 바로 사용 가능
//
// [방법 2] src/assets 폴더 — import 후 변수로 전달 (Vite 번들 최적화 적용)
//   import todoImg from '../assets/images/todo.png'  ← 파일 상단에 추가
//   thumbImage: todoImg
//
// thumbImage를 비워두거나 필드 자체를 삭제하면 thumbVariant의 SVG가 대신 표시됨
export const projects = [
  {
    id: 'todo',
    title: '투두리스트',
    tags: ['React', 'Node.js'],
    status: '완료',
    desc: 'useState를 사용하여 데이터를 관리하고, reducer 함수를 사용하여 일들의 데이터를 컨트롤하고 수정을 편리하도록 만들었으며, 유저 경험을 위해 localStorage를 사용하여 새로고쳐도 데이터가 남도록 제작하였습니다.',
    codeUrl: '#',
    thumbImage: '',            // ← 여기에 이미지 경로 입력 (비우면 SVG fallback)
    thumbVariant: 'blue',      // thumbImage 없을 때만 사용
  },
  {
    id: 'diary',
    title: '감정일기장',
    tags: ['React', 'Node.js'],
    status: '완료',
    desc: '투두리스트에서 어렵게 느껴졌던 일기장의 CRUD를 useState, reducer함수, localStorage를 사용하였고, Date객체를 사용하여 달력을 직접 만들어 날짜별로 일기를 볼 수 있으면서 기록기능을 구현하였습니다.',
    codeUrl: '#',
    thumbImage: '',
    thumbVariant: 'cyan',
  },
  {
    id: 'collab',
    title: '실시간 협업 툴 플래폼',
    tags: ['React', 'Node.js'],
    status: '완료',
    desc: 'firebase의 json파일과 kakao developers를 이용하여, kakao developers로는 지도 데이터를 가져오고 json파일로는 필지의 조회 실패로 확인이 가능한 정보를 불러와서 지도표시하였으며 구현하였습니다.',
    codeUrl: '#',
    thumbImage: '',
    thumbVariant: 'purple',
  },
  {
    id: 'weather',
    title: '날씨 대시보드',
    tags: ['React', 'Node.js'],
    status: '완료',
    desc: 'OpenWeather API를 활용하여 현재 위치 기반 날씨 정보와 5일 예보를 시각화한 대시보드입니다. Chart.js로 기온 변화 그래프를 구현하고, 도시 검색 기능을 추가하였습니다.',
    codeUrl: '#',
    thumbImage: '',
    thumbVariant: 'blue',
  },
  {
    id: 'shop',
    title: '쇼핑몰 플랫폼',
    tags: ['React', 'Node.js'],
    status: '완료',
    desc: 'React와 Node.js로 구축한 풀스택 쇼핑몰입니다. 상품 필터링, 장바구니, 결제 플로우를 구현하고 JWT 기반 인증과 관리자 대시보드를 포함합니다.',
    codeUrl: '#',
    thumbImage: '',
    thumbVariant: 'cyan',
  },
]
