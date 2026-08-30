---
layout: page
title: 오시는 길
visual: about
lead: 세종특별자치시 한누리대로 2003, 펠리체타워3 702호
permalink: /about/location/
---

## 찾아오시는 길

{% if site.org.map_embed != nil and site.org.map_embed != '' %}
<div class="map-embed" markdown="0">
  <iframe src="{{ site.org.map_embed }}" title="{{ site.org.name }} 약도" loading="lazy" allowfullscreen></iframe>
</div>
{% else %}
<div class="map-placeholder" markdown="0">
  <p><strong>{{ site.org.address_short }}</strong><br>
  <span>{{ site.org.address_hint }}</span><br>
  <a class="btn" style="margin-top:18px" href="{{ site.org.naver_place }}" target="_blank" rel="noopener">네이버 지도에서 보기</a></p>
</div>
{% endif %}

| 구분 | 내용 |
| --- | --- |
| 주소 | (우){{ site.org.zipcode }} {{ site.org.address }} |
| 찾아가는 길 | {{ site.org.address_hint }} |
| 전화 | {{ site.org.tel }} |
| 휴대전화 | {{ site.org.mobile }} |
| 팩스 | {{ site.org.fax }} |
| 이메일 | {{ site.org.email }} |
| 운영시간 | {{ site.org.hours }} |

## 주차 안내

- 건물 내 주차장을 이용하실 수 있습니다.
- **최초 30분 무료**, 이후 30분당 1,000원 (1일 최대 10,000원)
- **센터이용시 3시간 무료**
- 장애인 전용 주차구역이 마련되어 있습니다.

## 편의시설

- 출입구 및 화장실 휠체어 이용 가능
- 남/녀 화장실 구분
- 상담 대기공간 마련
- 방문 접수 및 출장 상담 가능 (사전 예약)
- 반려동물 동반은 어렵습니다.

<blockquote>
<p>거동이 불편하시면 <strong>방문 상담</strong>을 신청해 주세요.
직접 댁으로 찾아뵙고 안내해 드립니다. — {{ site.org.tel }}</p>
</blockquote>
