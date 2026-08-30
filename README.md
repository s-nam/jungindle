# 사회복지법인 가온 (예시) — Jekyll + GitHub Pages

`galam.or.kr` 형태의 사회복지법인 홈페이지를 **정적 사이트**로 구현한 템플릿입니다.
GitHub Pages로 무료 호스팅되며, HTTPS도 무료로 적용됩니다.

> ⚠️ 현재 들어 있는 기관명·주소·전화번호·계좌번호·게시물은 전부 **예시(더미) 데이터**입니다.
> 공개 전에 반드시 실제 정보로 교체하세요.

---

## 1. 폴더 구조

```
_config.yml            사이트 전역 설정 (기관명, 주소, 전화, 관련사이트 …)
_data/nav.yml          상단 메뉴 구조  ← 메뉴는 여기만 고치면 전부 반영
_layouts/              페이지 틀 (default / home / page / board / post)
_includes/             머리말·꼬리말·로고 등 공통 조각
index.html             메인 페이지
about/                 법인소개 6개 페이지
business/              법인사업소개 5개 페이지
support/               나눔마당(후원안내)
community/             커뮤니티 게시판 목록 페이지
_notice/ _press/       게시물(글) 1건 = 파일 1개
_dataroom/ _gallery/
assets/css|js|img/     스타일·스크립트·이미지
.github/workflows/     GitHub Actions 자동 배포 설정
```

## 2. 로컬에서 미리보기

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://127.0.0.1:4000
```

macOS 기본 Ruby(2.6)는 버전이 낮아 동작하지 않습니다. `brew install ruby` 후
`export PATH="/opt/homebrew/opt/ruby/bin:$PATH"` 를 적용하세요.

## 3. GitHub Pages 배포

1. GitHub에 저장소를 만들고 이 폴더를 push 합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 지정합니다.
3. `main` 브랜치에 push할 때마다 자동으로 빌드·배포됩니다.

주소 형태에 따라 `_config.yml` 의 `url` / `baseurl` 을 맞춰주세요.

| 배포 형태 | url | baseurl |
| --- | --- | --- |
| `아이디.github.io` 저장소 | `https://아이디.github.io` | (비움) |
| 일반 저장소 | `https://아이디.github.io` | `/저장소이름` |
| 개인 도메인 | `https://example.or.kr` | (비움) |

### 개인 도메인(.or.kr) 연결

1. 저장소 루트에 `CNAME` 파일을 만들고 도메인만 한 줄 적습니다.
2. 도메인 등록기관 DNS에 A 레코드 4개를 추가합니다.
   `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`
3. Settings → Pages 에서 **Enforce HTTPS** 를 켭니다.

## 4. 내용 수정하는 법

### 기관 정보 (전화번호·주소 등)
`_config.yml` 의 `org:` 항목만 고치면 헤더·푸터·모든 페이지에 반영됩니다.

### 메뉴
`_data/nav.yml` 수정. 메뉴를 추가하면 해당 URL의 페이지 파일도 함께 만들어야 합니다.

### 게시물 작성
게시판 폴더에 `YYYY-MM-DD-영문이름.md` 파일을 추가합니다.

```markdown
---
title: "공지 제목"
date: 2026-08-30
pinned: true      # 목록 번호 대신 '공지' 배지 표시
hot: false        # '인기' 배지 표시
author: 사무국
file: /assets/files/첨부.pdf   # 선택
---

본문을 마크다운으로 작성합니다.
```

포토게시판(`_gallery/`)은 `thumb: /assets/img/gallery/사진.jpg` 를 추가하면
목록에 썸네일이 표시됩니다. 비워두면 그라데이션 배경이 대신 표시됩니다.

### 색상
`assets/css/style.css` 맨 위 `:root` 의 `--green`, `--blue`, `--navy` 값을 바꾸면
사이트 전체 색이 한 번에 바뀝니다.

## 5. 정적 사이트의 한계와 대안

| 기능 | 정적 사이트 | 대안 (무료) |
| --- | --- | --- |
| 글쓰기 화면 | 없음 (파일 편집) | Decap CMS 연결 시 `/admin` 에서 작성 가능 |
| 온라인 문의 폼 | 저장 불가 | Google Forms · Formspree 삽입 |
| 회원가입/로그인 | 불가 | 필요 시 별도 서비스 연동 |
| 방문자 통계 | 없음 | Google Analytics · Naver Analytics 삽입 |

## 6. 라이선스

이 템플릿 코드는 자유롭게 수정·사용하실 수 있습니다.
Pretendard 글꼴은 SIL Open Font License 1.1을 따릅니다.
