# 두근두근 비밀일기

## Firebase Authentication 프로젝트 개발 가이드

## 1. 프로젝트 초기 설정

### React 프로젝트 생성

```bash
npx my-react-vite-app [프로젝트 이름]
```

### 필수 패키지 설치

```bash
npm install react-router-dom
npm install normalize.css
npm install firebase
```

## 2. Firebase 프로젝트 설정

### Firebase 콘솔 설정

1. [Firebase 콘솔](https://firebase.google.com/products-build?hl=ko) 접속
2. 새 프로젝트 생성: `princessDiary`
3. 프로젝트 개요 → 프로젝트 설정 → 앱 → `princessDiary`

### Firebase SDK 설정

1. firebase 프로젝트 폴더 생성
2. `config.js` 파일 생성 후 SDK 추가
3. 환경 변수 설정: `.env` 파일 생성 후 config.js 설정 값 관리

### Authentication 설정

1. Firebase 프로젝트 개요 → 빌드 → Authentication
2. 이메일/비밀번호 사용 설정 활성화 → 저장
3. `config.js`에 `import { getAuth } from "firebase/auth";` 추가

## 3. 인증 기능 구현

### 폴더 구조 생성

- `hooks` 폴더 생성 → `useSignup.js` 생성
- `context` 폴더 생성 → `AuthContext.js` 파일 생성 (인증 관리)

hooks 폴더에 useLogin.js 생성
참고 자료 :(JavaScript를 사용하여 비밀번호 기반 계정으로 Firebase에 인증)
https://firebase.google.com/docs/auth/web/password-auth?hl=ko

firebase -> 빌드 -> firestore Database -> 데이터베이스 만들기 -> standard 버전 -> 위치: asia-northeast3(Seoul) -> 테스트 모드에서 시작
pig 속도 확인: https://gcping.com/

https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko

### 참고 자료

- [JavaScript를 사용하여 비밀번호 기반 계정으로 Firebase에 인증](https://firebase.google.com/docs/auth/web/password-auth?hl=ko)
- [Firebase에서 사용자 관리하기](https://firebase.google.com/docs/auth/web/manage-users?hl=ko)

## 4. 추가 학습 자료

- [Authentication 가이드](https://paullabworkspace.notion.site/1-Authentication-231ebf76ee8a81c9a0c2f851e76ad922)
