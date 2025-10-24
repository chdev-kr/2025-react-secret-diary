https://paullabworkspace.notion.site/1-Authentication-231ebf76ee8a81c9a0c2f851e76ad922

npx my-react-vite-app [프로젝트 이름]

npm install react-router-dom

npm install normalize.css

https://firebase.google.com/products-build?hl=ko
-> 콘솔로 이동 -> 새 프로젝트 생성 -> princessDiary
프로젝트 개요 -> 프로젝트 설정 -> 앱 -> princessDiary

npm install firebase

firebase 프로젝트 폴더 생성 후 config.js 파일 생성 후 SDK 추가

환경 변수 설정
.env 파일 생성 후 config.js에 있는 설정 값 관리

Firebase 프로젝트 개요 -> 빌드 -> Authentication -> 이메일/비밀번호 사용 설정 활성화 -> 저장
-> config.js import { getAuth } from "firebase/auth"; 추가

[로그인 구현]
hooks 폴더 생성 -> useSignup.js 생성

참고링크(JavaScript를 사용하여 비밀번호 기반 계정으로 Firebase에 인증)
https://firebase.google.com/docs/auth/web/password-auth?hl=ko

참고링크(Firebase에서 사용자 관리하기)
https://firebase.google.com/docs/auth/web/manage-users?hl=ko

context 폴더 생성 -> AuthContext.js 파일 생성 => 인증 관리

참고링크(JavaScript를 사용하여 비밀번호 기반 계정으로 Firebase에 인증)
https://firebase.google.com/docs/auth/web/password-auth?hl=ko
