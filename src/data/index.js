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
    id: 'word',
    title: '끝말잇기',
    tags: ['React', 'JavaScript', 'Scss'],
    status: '완료',
    desc: 'Vite와 React를 사용하여 만든 간단한 모두가 알만한 끝말잇기입니다. 제시되어 있는 단어의 끝 단어에 맞춰서 그 단어부터 시작하는 단어를 입력 시 정답 여부를 판단하고 정답일 시 현재 입력한 단어의 끝 단어부터 다시 새 입력을 받게 되어있습니다. ',
    codeUrl: '#',
    thumbImage: '/images/wordgame.png',            // ← 여기에 이미지 경로 입력 (비우면 SVG fallback)
    thumbVariant: 'blue',      // thumbImage 없을 때만 사용
  },
  {
    id: 'timer',
    title: '타이머앱',
    tags: ['React', 'Vite', 'JavaScript'],
    status: '완료',
    desc: 'Vite와 React를 사용하여 간단한 타이머앱을 구현하였습니다. useState와 useRef를 활용하여 타이머의 시작과 진행 도중에 중단, 그리고 초기화 기능까지 구현하였습니다.',
    codeUrl: '#',
    thumbImage: '/images/timer.png',
    thumbVariant: 'cyan',
  },
  {
    id: 'router',
    title: '라우터 프로젝트',
    tags: ['Vite','React', 'Swiper', 'JavaScript', 'Router'],
    status: '완료',
    desc: '헤더, 메인화면, 푸터로 나눠서 구현했으며, 헤더에는 각각의 화면으로 이동할 수 있는 navigation을 넣어놨으며, swiper를 이용하여 옆으로 화면을 넘길 수 있는 슬라이드 게시판, 여러 게시글들을 볼 수 있는 게시판, 푸터에는 각각의 커뮤니티로 이어지는 링크를 달았습니다.전체적으로 React Router를 사용하여 라우팅, 동적인 경로, 한 jsx파일에 전부 구현하는 것이 아닌 적적한 데이터 구조, 컴포넌트 분리를 하고, css 스타일링을 연습한 프로젝트입니다.',
    codeUrl: '#',
    thumbImage: '/images/routerproject.png',
    thumbVariant: 'purple',
  },
  {
    id: 'weatherapp',
    title: '날씨앱',
    tags: ['Vite', 'React', 'JavaScript', 'Scss', 'OpenWeatherAPI', 'Axios'],
    status: '완료',
    desc: '공개 데이터인 OpenWeather API를 사용하여 날씨 데이터를 가져와서 이 앱에 적은 도시의 위도와 경도를 조회하여 입력한 도시의 현째 날씨에 대한 정보를 가져와서 아이콘으로 표시하고 그 날씨에 따라서 Background의 이미지와 색깔을 바꾸도록 구현하였습니다.',
    codeUrl: '#',
    thumbImage: '/images/weatherapp.png',
    thumbVariant: 'blue',
  },
  {
    id: 'todolist-ver2',
    title: 'TodoList ver2',
    tags: ['Vite', 'React', 'JavaScript', 'css'],
    status: '완료',
    desc: '이 프로젝트는 React와 TdoList를 사용하여 사용자가 입력한 할 일을 localstorage에 저장하거나 삭제할 수 있으며 항목을 필터링하는 기능도 추가하였습니다.',
    codeUrl: '#',
    thumbImage: '/images/todolist.png',
    thumbVariant: 'cyan',
  },
  {
    id: 'emotion',
    title: '감정 일기장',
    tags: ['vite', 'React', 'Router', 'ContextAPI', 'LocalStorage'],
    status: '완료',
    desc: '날짜별로 작성한 일기를 관리할 수 있으며, LocalStorage를 활용하여 일기를 작성하거나 삭제, 또는 수정할 수 있고, 작성한 일기는 작성한 날의 Date를 기준으로하여 월별로 정렬이 가능하고, 그 안에서도 최신순, 오래된 순으로도 정렬이 가능합니다.',
    codeUrl: '#',
    thumbImage: '/images/emotion.png',
    thumbVariant: 'cyan',
  },
  {
    id: 'toilet-spot',
    title: '공용 화장실 위치',
    tags: ['Vite', 'React', 'Open Source API'],
    status: '완료',
    desc: '공개되어 있는 위치 데이터를 경도와 위도를 가져와서 조회하며, 스타일 데이터도 따로 가져와서 css나 scss를 직접 입력하는 것이 아닌 클래스명만 변경하는 것으로 스타일을 꾸밀 수 있게 하였습니다. 또한 위치를 선택하면 지도가 자동으로 그 선택된 위치로 화면이 이동하게끔 구현하였습니다.',
    codeUrl: '#',
    thumbImage: '/images/toilet-spot.png',
    thumbVariant: 'cyan',
  },
  {
    id: 'tocobo',
    title: 'TOCOBO',
    tags: ['React', 'Router', 'Swiper', 'Scss'],
    status: '완료',
    desc: 'media query를 이용하여 창 사이즈마다 desktop, teblet, mobile 사이즈에 호환할 수 있도록 구현하였다. 스크롤을 내릴 때를 감지해서 위로 올라가는 버튼과 header의 background 색이 바뀌도록 구현하였다. swiper를 이용하여 hero, category, trend section에 옆으로 넘길수 있는 슬라이드를 추가하였다. 창이 일정 크기로 줄어들었을 때 나타나는 목록 버튼을 누르면 각각 section으로 이동할 수 있는 버튼과 바구니 버튼 등이 있는 목록 화면이 나타날 수 있도록 useEffect를 이용하여 구현하였다.',
    codeUrl: '#',
    thumbImage: '/images/tocobo.png',
    thumbVariant: 'cyan',
  },
]
