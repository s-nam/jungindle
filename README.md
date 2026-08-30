# 정인들 사회적협동조합 재가복지센터 홈페이지

Jekyll + GitHub Pages 로 만든 정적 홈페이지입니다. 호스팅·SSL 모두 무료입니다.

- 운영 주소: <https://jidcoop.com>  (구 주소 https://s-nam.github.io/jungindle/ 는 자동 이동)
- 기관: 정인들 사회적협동조합 재가복지센터 (세종특별자치시 재가노인복지시설)

---

## 1. 폴더 구조

```
_config.yml            기관 정보·연락처·관련사이트  ← 대부분의 수정은 여기서
_data/nav.yml          상단 메뉴 구조
_layouts/              페이지 틀 (default / home / page / board / post)
_includes/             머리말·꼬리말·로고(정人들 SVG)
index.html             메인 페이지
about/                 센터소개 (인사말·설립목적·CI소개·오시는 길)
service/               서비스안내 (방문요양·등급신청·이용절차·이용요금)
join/                  함께하기 (요양보호사 모집·조합원/후원)
community/             커뮤니티 (공지사항·자료실·포토게시판·상담문의)
_notice/ _dataroom/    게시물 1건 = 파일 1개
_gallery/
assets/css|js|img/     스타일·스크립트·이미지
.github/workflows/     GitHub Actions 자동 배포
```

## 2. 내용 수정하는 법

### 기관 정보 (전화·주소·운영시간 등)
[`_config.yml`](_config.yml) 의 `org:` 항목만 고치면 헤더·푸터·모든 페이지에 자동 반영됩니다.

### 메뉴
[`_data/nav.yml`](_data/nav.yml) 수정. 메뉴를 추가하면 해당 URL의 페이지 파일도 함께 만들어야 합니다.

### 게시물 작성
게시판 폴더에 `YYYY-MM-DD-영문이름.md` 파일을 추가합니다.

```markdown
---
title: "공지 제목"
date: 2026-09-01
pinned: true      # 목록 번호 대신 '공지' 배지 표시
hot: false        # '인기' 배지 표시
author: 센터
file: /assets/files/첨부.pdf   # 선택 - 첨부파일
---

본문을 마크다운으로 작성합니다.
```

포토게시판(`_gallery/`)은 `thumb: /assets/img/gallery/사진.jpg` 를 추가하면 썸네일이 표시됩니다.
비워두면 파란 그라데이션 배경이 대신 표시됩니다.

> 어르신·종사자의 얼굴이 나오는 사진은 반드시 본인 동의를 받고 올려주세요.

### 색상
[`assets/css/style.css`](assets/css/style.css) 맨 위 `:root` 의 `--blue`, `--gold` 두 줄만 바꾸면
사이트 전체 색이 한 번에 바뀝니다.

현재 값은 명함에 지정된 CMYK(블루 C85 M48 Y18 K5 / 골드 C12 M18 Y42 K0)를
화면용으로 환산한 **근사치**입니다. 디자이너에게 정확한 HEX 값을 받으면 교체해 주세요.

### 로고
[`_includes/logo.svg`](_includes/logo.svg) 에 '정人들' 워드마크를 SVG로 그려두었습니다.
원본 AI/PNG 파일이 있으면 이 파일 대신 이미지를 넣어도 됩니다.

### 지도

현재 오시는 길 페이지는 **주소 + '네이버 지도에서 보기' 버튼** 방식입니다. 의도한 설정입니다.

**네이버 지도는 홈페이지에 직접 삽입할 수 없습니다.** `map.naver.com` 과 `naver.me` 는
`X-Frame-Options: DENY` 로 외부 삽입을 차단합니다. `naver.me` 링크를 `map_embed` 에 넣으면
"연결이 거부됨" 오류가 납니다. (그 링크는 새 창으로 여는 용도이며 `org.naver_place` 에 쓰고 있습니다.)

선택지는 셋입니다.

| 방법 | 필요한 것 | 비고 |
| --- | --- | --- |
| 주소 + 네이버 지도 버튼 **(현재)** | 없음 | 클릭하면 네이버 지도 앱/웹으로 이동. 길찾기까지 자연스럽게 연결됨 |
| 네이버 지도 삽입 | 네이버클라우드플랫폼 가입 → Maps Client ID | 무료 한도 있으나 가입 시 결제수단 등록 필요. JS API 방식이라 코드 추가 필요 |
| 구글맵 삽입 | 없음 | `map_embed` 에 `https://www.google.com/maps?q=36.485444,127.30111&hl=ko&z=17&output=embed` 를 넣으면 바로 동작. 국내 이용자에겐 네이버·카카오보다 익숙하지 않음 |

좌표는 `_config.yml` 의 `org.lat` / `org.lng` 에 적어두었습니다.

## 3. 로컬에서 미리보기

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://127.0.0.1:4000
```

macOS 기본 Ruby(2.6)는 버전이 낮아 동작하지 않습니다.
`brew install ruby` 후 `export PATH="/opt/homebrew/opt/ruby/bin:$PATH"` 를 적용하세요.

## 4. 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다.
저장소 **Settings → Pages → Source** 는 **GitHub Actions** 로 설정되어 있습니다.

### 도메인 (jidcoop.com) — 설정 완료

가비아에서 등록한 `jidcoop.com` 이 연결되어 있습니다. 설정 내용은 다음과 같습니다.

| 위치 | 설정 |
| --- | --- |
| 가비아 DNS (A, 호스트 `@`) | `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153` |
| 가비아 DNS (CNAME, 호스트 `www`) | `s-nam.github.io.` |
| GitHub Settings → Pages → Custom domain | `jidcoop.com` |
| 저장소 루트 [`CNAME`](CNAME) | `jidcoop.com` (설정이 초기화되지 않도록 하는 안전장치) |
| `_config.yml` 의 `url` | `https://jidcoop.com` |

> **`baseurl` 은 항상 비워두세요.** 배포 워크플로가 `--baseurl "${{ steps.pages.outputs.base_path }}"` 로
> GitHub Pages 설정값을 자동 주입합니다. 커스텀 도메인이 켜져 있으면 `""`, 꺼지면 `"/jungindle"` 이 들어갑니다.
> 여기에 값을 직접 적으면 두 설정이 충돌해 CSS·이미지 경로가 깨집니다.

도메인을 바꾸실 때는 위 표의 다섯 곳을 함께 고치시면 됩니다.

## 5. 아직 채워야 할 내용

- [ ] **개인정보처리방침** — [`privacy.md`](privacy.md) 는 표준 문안 기반 초안입니다. 실제 처리 현황에 맞게 검토 후 시행일자를 명시하세요.
- [ ] **후원 계좌번호** — [`join/member.md`](join/member.md) 에 '전화 문의'로 표기해 두었습니다.
- [ ] **법인 설립 연혁·조직도** — 자료가 확보되면 `about/` 에 페이지를 추가할 수 있습니다.
- [ ] **게시판 예시 글** — `_notice/`, `_dataroom/`, `_gallery/` 의 글은 화면 확인용 예시입니다. 실제 내용으로 교체하세요.
- [ ] **사진** — 현재 사진이 없어 그라데이션 배경으로 표시됩니다.
- [ ] **지도** — 현재 '네이버 지도에서 보기' 버튼 방식. 지도를 직접 박고 싶으면 위 2절 '지도' 표 참고.

## 6. 정적 사이트의 한계와 대안

| 기능 | 현재 | 대안 (무료) |
| --- | --- | --- |
| 글쓰기 화면 | 없음 (파일 편집) | Decap CMS 연결 시 `/admin` 에서 작성 가능 |
| 온라인 신청 폼 | 없음 | 네이버 폼 · 구글 폼 삽입 |
| 방문자 통계 | 없음 | 네이버 애널리틱스 · Google Analytics 삽입 |

## 7. 라이선스

이 사이트 코드는 자유롭게 수정·사용하실 수 있습니다.
Pretendard 글꼴은 SIL Open Font License 1.1을 따릅니다.
