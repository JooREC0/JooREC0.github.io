# 기본형 구성 상태

기준: 2026-11-24 (Asia/Seoul)

## 반영한 기본 설정

- GitHub 계정: `JooREC0`
- 프로필 저장소: `JooREC0/JooREC0`
- 사이트 저장소: `JooREC0/JooREC0.github.io`
- 사이트 URL: `https://joorec0.github.io/` (배포 후 사용)
- CMS 저장 대상: 사이트 저장소의 `main`
- 개인 소개·학력·연락처·프로젝트·연구 성과는 미입력
- 첫 글 파일은 미발행 초안

## 남은 작업

1. 기본형 PR 검토 및 main 병합
2. Settings → Pages → Source: GitHub Actions 설정
3. Deploy Portfolio 실행 및 실제 공개 URL 확인
4. 본인 PC의 CMS 로그인과 초안 저장 → 커밋 → 발행 → 공개 글 확인
5. About 등 개인 정보 작성, 첫 글 발행

## 이 작업 환경에서 수행한 검증

- `npm ci`: PASS
- `npm run build`: PASS
- `npm run verify`: PASS (페이지·CMS 저장소 연결·내부 링크/리소스 80개)
- 임시 Markdown·MDX 공개 글의 개별 URL 생성 및 홈·Blog·RSS·Sitemap 반영: PASS
- 임시 초안의 개별 URL·목록·RSS·Sitemap 제외: PASS
- CMS 선택 필드의 빈 값 처리: PASS
- 검증용 글 제거 후 기본형 재빌드: PASS
- 내부 미리보기 서버 시작 실패로 데스크톱·모바일 브라우저 화면 확인은 미검증

PR의 GitHub Actions 결과는 PR 화면에서 별도로 확인합니다.
실제 배포와 CMS 인증 저장을 수행하기 전에는 해당 항목을 PASS로 판정하지 않습니다.
