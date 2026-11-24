# JooREC0.github.io

JooREC0의 개인 포트폴리오와 기술 블로그 기본형입니다.
개인 소개·이력·프로젝트·연구 성과는 비워 두었습니다.

## 구성

- Home / About / Projects / Research / Blog
- Astro, Markdown / MDX, RSS, Sitemap
- Sveltia CMS (`/admin/`): 글과 About·Projects·Research 본문 편집
- GitHub Actions: PR 빌드 확인, main 반영 후 GitHub Pages 배포
- 반응형 레이아웃, 공개 글 검색, 초안 숨김

예정 사이트 주소: https://joorec0.github.io/

## 로컬 실행 (WSL Ubuntu)

```bash
cd ~/Projects/JooREC0.github.io
npm ci
npm run build
npm run verify
npm run dev
```

Windows 브라우저에서 http://localhost:4321/ 을 엽니다.
Node.js `>=22.23.4`가 필요하며 Node 24를 권장합니다. `.nvmrc`는 24입니다.

## 최초 배포

1. 코드 변경 PR을 검토하고 main에 병합합니다.
2. GitHub 저장소 → Settings → Pages → Build and deployment → Source에서 **GitHub Actions**를 선택합니다.
3. Actions → **Deploy Portfolio** → **Run workflow**에서 main으로 실행합니다.
4. Actions 성공과 실제 사이트 접속을 모두 확인합니다.

로컬 빌드 성공과 공개 배포 성공은 서로 다른 확인입니다.

## 내용을 채우는 위치

| 내용 | 파일 |
| --- | --- |
| 사이트 이름·설명 | `src/consts.ts` |
| Home 인사 | `src/pages/index.astro` |
| About 소개 | `src/content/pages/about.md` |
| Projects 프로젝트 | `src/content/pages/projects.md` |
| Research 탐구 | `src/content/pages/research.md` |
| 블로그 글 | `src/content/blog/*.md`, `*.mdx` |
| CMS 저장소 연결 | `public/admin/config.yml` |

About·Projects·Research와 블로그 글은 CMS에서도 편집할 수 있습니다.
준비된 `first-note.md`는 **초안**입니다. 자신의 글을 작성한 뒤 `draft: false`로 바꿔 발행하세요.
초안은 홈·목록·개별 URL·RSS·사이트맵에 포함되지 않습니다. 공개 저장소의 원문은 공개됩니다.
날짜는 표시용이며 미래 날짜로 예약 발행하지 않습니다. 공개 여부는 `draft`로 결정됩니다.

웹 글쓰기 절차는 [WRITING_GUIDE.md](WRITING_GUIDE.md)를 확인하세요.
이 기본형의 검증 범위와 남은 작업은 [SETUP_STATUS.md](SETUP_STATUS.md)에 기록합니다.

## 참고 및 라이선스

코드 의존성과 참고 자료는 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)에 정리했습니다.
레퍼런스의 개인 이력과 콘텐츠를 사용하지 않았습니다.
