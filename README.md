# 컨텐츠 허브

- 웹툽 및 웹소설 컨텐츠를 볼 수 있는 서비스

## 디렉토리 구조

src/
├── app/ # Next.js의 app 기반 라우팅 디렉토리
│ ├── layout.js # 공통 레이아웃 파일 (헤더, 푸터 포함 가능)
│ ├── page.js # 기본 루트 페이지
│ └── about
│ └── page.js
├── components/
│ ├── layout/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── Layout.jsx
│ ├── common/ # 공통 컴포넌트
└── styles/ # 전역 스타일
public/
  ├── images/
  │     ├── logo/          # 로고 관련 이미지
  │     │     ├── logo.png
  │     │     └── logo-dark.png
  │     ├── banners/       # 배너 이미지
  │     └── icons/         # 아이콘
  └── favicons/            # 브라우저 파비콘
