# SpaceFlow (공간 예약 SaaS 플랫폼)

![Project Status](https://img.shields.io/badge/Project-FrontEnd_Prototype-blue)
![Tech Stack](https://img.shields.io/badge/Next.js-14-black)
![Style](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

**SpaceFlow**는 파티룸, 스튜디오, 회의실 등 다양한 공간을 시간 단위로 예약할 수 있는 B2B/B2C SaaS 플랫폼의 프론트엔드 프로토타입입니다. 
에어비앤비(Airbnb)와 피어스페이스(Peerspace)의 장점을 벤치마킹하여, 직관적인 예약 흐름과 강력한 호스트 관리 기능을 제공합니다.


## ✨ Key Features

### 1. Guest View (사용자)
- **Airbnb 스타일의 검색 UX:** 상단 헤더의 Expandable Search Bar를 통한 직관적인 검색 경험.
- **고도화된 예약 위젯:** 날짜 선택 및 시작/종료 시간(Time Range) 설정을 통한 실시간 가격 계산.
- **Micro-Interaction:** Toss 스타일의 고급스러운 스켈레톤(Skeleton) 로딩 및 Staggered Animation 적용.
- **반응형 디자인:** 모바일 및 데스크탑 환경에 최적화된 UI.

### 2. Host Admin (관리자)
- **대시보드:** 매출, 예약률, 승인 대기 건수를 한눈에 볼 수 있는 요약 카드.
- **멀티 공간 관리:** 여러 개의 공간을 운영하는 호스트를 위한 공간 전환(Context Switcher) 기능.
- **시각적 스케줄러:** 주간 캘린더(Weekly View)를 통해 예약 현황을 직관적으로 파악 및 관리.
- **예약 승인 시스템:** 신청된 예약을 승인(Approve)하거나 거절(Reject)하는 관리 로직.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI (Radix UI 기반)
- **Icons:** Lucide React
- **Animation:** Tailwind Animate (Custom Keyframes)

## 🚀 Getting Started

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 1. 설치 (Installation)
```bash
# 저장소 클론
git clone [https://github.com/YOUR_GITHUB_ID/space-rental-ui.git](https://github.com/YOUR_GITHUB_ID/space-rental-ui.git)

# 프로젝트 폴더로 이동
cd space-rental-ui

# 의존성 설치
npm install
# 또는
yarn install

# 실행
npm run dev