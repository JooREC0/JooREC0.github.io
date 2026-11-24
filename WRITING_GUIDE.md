# 웹 글쓰기와 사이트 편집

## 처음 한 번 설정

사이트를 배포한 뒤 https://joorec0.github.io/admin/ 을 엽니다.
관리자 페이지의 연결 대상은 `JooREC0/JooREC0.github.io`, 저장 브랜치는 `main`입니다.

GitHub 개인 Settings → Developer settings → Personal access tokens → Fine-grained tokens에서 토큰을 만듭니다.

- Resource owner: `JooREC0`
- Repository access: Only select repositories → `JooREC0.github.io`만 선택
- Repository permissions: Contents = Read and write (Metadata Read는 자동 포함)
- 만료 기간을 정하고 필요한 기간만 사용

토큰은 본인 사이트 `/admin/`의 **Sign In with Token**에만 입력합니다.
AI 대화·소스코드·스크린샷에는 넣지 않습니다. 이 CMS는 토큰을 브라우저 localStorage에 보관하므로 본인 PC에서 사용하세요.
다른 PC에서 사용했다면 로그아웃하고 사이트 데이터를 삭제하세요. 유출이 의심되면 GitHub에서 토큰을 폐기하세요.

## 첫 글 발행

1. 블로그 → `첫 번째 기록` 초안을 열거나 새 글을 만듭니다.
2. 제목, 요약, 작성 날짜, 분류, 태그, 본문을 자신의 내용으로 작성합니다.
3. 우선 **초안으로 보관**을 켠 채 저장합니다.
4. 공개할 내용을 확인한 뒤 **초안으로 보관**을 끄고 저장합니다.
5. GitHub의 `src/content/blog/`에 커밋됐는지 확인합니다.
6. Actions의 Deploy Portfolio 성공 후 실제 글 URL·Blog·Home·RSS에 반영되는지 확인합니다.

초안은 사이트에서 숨겨지지만 Public GitHub 저장소의 Markdown 원문은 공개입니다.
날짜는 표시용이고 예약 발행 기능은 없습니다. 초안을 끄면 다음 배포 때 공개됩니다.

일반 글은 Markdown으로 저장됩니다. 개발자가 직접 MDX 파일을 작성할 수도 있습니다.
MDX는 코드 실행 기능이 있으므로 신뢰할 수 없는 원문을 그대로 붙여 넣지 마세요.

## 소개·프로젝트·연구 페이지 편집

관리자의 **소개·프로젝트·연구**에서 원하는 페이지를 선택합니다.
페이지 제목·요약·본문을 저장하면 main에 커밋되고 다음 배포에 반영됩니다.
내비게이션의 About / Projects / Research 이름과 URL은 고정입니다.

## 이미지

본문 편집기에서 이미지를 올리면 `public/uploads/`에 저장됩니다.
사이트 URL은 `/uploads/파일명`입니다. 공개해도 되는 파일만 올리세요.

## main 정책과 저장 충돌

CMS는 기본적으로 main에 직접 커밋합니다. 사이트 코드 변경은 별도 브랜치와 PR로 검토하세요.
나중에 main에 PR 필수 정책을 적용하면 CMS 직접 저장이 거부될 수 있으므로, 정책에 맞춰 CMS 게시 방식을 조정해야 합니다.
같은 글을 WSL과 CMS에서 동시에 수정하지 말고, WSL 작업 전에 `git pull --ff-only`로 최신 상태를 받으세요.

## 저장이 안 될 때

- `backend.repo`가 `JooREC0/JooREC0.github.io`인지 확인
- 토큰의 저장소 선택, Contents 쓰기 권한, 만료일 확인
- main 보호 정책 확인
- 브라우저의 네트워크 차단·외부 CMS 스크립트 차단 확인

토큰값을 전달할 필요는 없습니다. 오류 문구만 확인하세요.
