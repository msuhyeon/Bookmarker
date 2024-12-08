# 나의 책장

- 웹툽 및 웹소설 컨텐츠를 볼 수 있는 서비스

## 디렉토리 구조
src/
├── app/                    # Next.js의 app 기반 라우팅 디렉토리
│   ├── layout.js           # 공통 레이아웃 파일 (헤더, 푸터 포함 가능)
│   ├── page.js             # 기본 루트 페이지
│   └── about/              # "About" 페이지 디렉토리
│       └── page.js
├── components/             # 재사용 가능한 컴포넌트 모음
│   ├── layout/             # 레이아웃 관련 컴포넌트
│   │   ├── Header.jsx      # 헤더 컴포넌트
│   │   ├── Footer.jsx      # 푸터 컴포넌트
│   │   └── Layout.jsx      # 레이아웃 컴포넌트
│   └── common/             # 공통 컴포넌트 (버튼, 모달 등)
└── styles/                 # 전역 스타일 (CSS, Tailwind 등)

public/                     # 정적 파일 디렉토리
├── images/                 # 이미지 파일
│   ├── logo/               # 로고 관련 이미지
│   │   ├── logo.png
│   │   └── logo-dark.png
│   ├── banners/            # 배너 이미지
│   └── icons/              # 아이콘
└── favicons/               # 브라우저 파비콘
