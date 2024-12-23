# react_study
학습용 타입스크립트 + 리액트 프로젝트

이 프로젝트는 React와 TypeScript를 학습하기 위한 예제 모음입니다. 각 예제는 React 훅, MobX, 커스텀 훅 등 다양한 주제를 다룹니다.

## 프로젝트 구조
- `/hooks`: React 훅을 활용한 예제 코드 모음
- `/store`: 상태 관리를 위한 MobX 또는 Zustand 스토어
- `/components`: 재사용 가능한 UI 컴포넌트 모음

---

## 설치 및 실행 방법

### 1. Node.js 설치
프로젝트 실행을 위해 [Node.js](https://nodejs.org) 최신 버전을 설치하세요.

### 2. 프로젝트 클론
GitHub에서 프로젝트를 클론합니다:
```bash
git clone https://github.com/Dr-s0602/react_study.git
cd react_study
3. React 및 TypeScript 환경 설정
아래 명령어를 실행하여 필요한 패키지를 설치하고 React 환경을 설정합니다.

React와 TypeScript 설치
bash
코드 복사
npm init -y
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
필요한 개발 도구 설치
bash
코드 복사
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks
Next.js 설치 (Next.js 프로젝트인 경우)
bash
코드 복사
npm install next
4. 프로젝트 실행
로컬 개발 서버를 실행합니다:

bash
코드 복사
npm run dev
브라우저에서 http://localhost:3000으로 접속합니다.

예제 목록
React 기본 훅
useState

상태 관리를 위한 기본 훅 사용 예제.
경로: /hooks/useStateExample
useEffect

부수 효과를 처리하는 예제.
경로: /hooks/useEffectExample
useRef

DOM 요소 접근 및 유지 가능한 상태를 처리하는 예제.
경로: /hooks/useRefExample
고급 주제 및 상태 관리
TypeScript와 JavaScript 차이

TypeScript의 주요 특징과 JavaScript와의 차이점 비교.
경로: /hooks/tsVsJsExample
useContext를 활용한 테마 변경

전역 상태 관리를 통해 라이트/다크 모드 전환.
경로: /hooks/useThemeExample
useReducer ToDo 리스트

ToDo 리스트 상태를 useReducer로 관리.
경로: /hooks/useTodoExample
useImperativeHandle 모달

부모 컴포넌트에서 자식의 동작을 제어.
경로: /hooks/useModalExample
상태 관리 라이브러리
MobX ToDo 리스트

MobX를 활용한 ToDo 리스트 구현.
경로: /hooks/useTodoWithMobx
MobX 상태 변경

A 컴포넌트에서 상태 변경 → B 컴포넌트 반응.
경로: /hooks/useMobxVisibility
커스텀 훅
Custom Button 예제

재사용 가능한 버튼 컴포넌트를 구현.
경로: /hooks/useCustomButtonExample
계산기

간단한 계산기를 React와 MobX로 구현.
경로: /hooks/useCalculator
useEffect와 MobX 상태

MobX 상태에 반응하는 useEffect 활용.
경로: /hooks/useEffectWithMobx
useEffect 데이터 페칭

서버 없이 가상 데이터 페칭 구현.
경로: /hooks/useFakeFetch
useCallback 데이터 필터링

useCallback으로 필터링 및 성능 최적화.
경로: /hooks/useCallbackExample
커스텀 훅: 창 크기 추적

브라우저 창 크기를 추적하는 커스텀 훅.
경로: /hooks/useCustomHookExample
커스텀 훅 사용법
커스텀 훅은 React에서 반복되는 로직을 추출하여 재사용성을 높이는 도구입니다. 예제:

useWindowSize: 브라우저 창 크기를 추적.
useMousePosition: 마우스 좌표를 추적.
프로젝트 라이선스
이 프로젝트는 MIT 라이선스 하에 배포됩니다.

© 2024 Dr_sil. All rights reserved.
yaml
코드 복사

---

### **사용 방법**
1. `README.md` 파일을 프로젝트 루트 디렉토리에 생성합니다.
2. 위 내용을 복사하여 붙여넣습니다.
3. 필요에 따라 수정하거나 추가 정보를 포함할 수 있습니다.

이 `README.md`는 프로젝트의 전체적인 구조와 사용법을 명확히 설명하며, 협업이나 학습 목적으로 적합합니다. 😊