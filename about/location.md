---
layout: page
title: 오시는 길
visual: about
lead: 찾아오시는 길을 안내합니다.
permalink: /about/location/
---

## 찾아오시는 길

{% if site.org.map_embed != nil and site.org.map_embed != '' %}
<div class="map-embed" markdown="0">
  <iframe src="{{ site.org.map_embed }}" title="약도" loading="lazy" allowfullscreen></iframe>
</div>
{% else %}
<div class="map-placeholder" markdown="0">
  <p>지도 영역<br><span style="font-size:13px">_config.yml 의 <code>org.map_embed</code> 에 카카오맵/네이버지도 임베드 주소를 넣으면 표시됩니다.</span></p>
</div>
{% endif %}

| 구분 | 내용 |
| --- | --- |
| 주소 | (우){{ site.org.zipcode }} {{ site.org.address }} |
| 전화 | {{ site.org.tel }} |
| 팩스 | {{ site.org.fax }} |
| 이메일 | {{ site.org.email }} |
| 운영시간 | {{ site.org.hours }} |

## 대중교통 이용

### 버스
- OO터미널 정류장 하차 후 도보 5분
- 간선 000번, 지선 00번

### 자가용
- 내비게이션에 **{{ site.org.name }}** 또는 위 주소를 입력하세요.
- 건물 내 주차장 이용이 가능합니다.

<p style="color:#7b8794; font-size:14px;">※ 위 교통편 안내는 예시(더미) 데이터입니다.</p>
