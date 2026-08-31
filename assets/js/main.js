/* 사회복지법인 가온 - 공통 스크립트 (외부 라이브러리 없음) */
(function () {
  'use strict';

  /* ── 메인 히어로 슬라이더 ─────────────────────────── */
  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = [].slice.call(hero.querySelectorAll('.hero-slide'));
    var dotsWrap = hero.querySelector('[data-hero-dots]');
    var idx = 0, timer = null, DELAY = 6000;

    var dots = slides.map(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', (i + 1) + '번 슬라이드');
      b.addEventListener('click', function () { go(i); restart(); });
      dotsWrap.appendChild(b);
      return b;
    });

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('on', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('on', i === idx); });
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, DELAY); }

    hero.querySelector('[data-hero-prev]').addEventListener('click', function () { go(idx - 1); restart(); });
    hero.querySelector('[data-hero-next]').addEventListener('click', function () { go(idx + 1); restart(); });
    hero.addEventListener('mouseenter', function () { clearInterval(timer); });
    hero.addEventListener('mouseleave', restart);

    go(0);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) restart();
  }

  /* ── 전체메뉴 패널 ─────────────────────────────────── */
  var panel = document.querySelector('[data-menu-panel]');
  var dim = document.querySelector('.menu-dim');
  var openBtn = document.querySelector('[data-menu-open]');

  function openMenu() {
    panel.hidden = false; dim.hidden = false;
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    panel.querySelector('[data-menu-close]').focus();
  }
  function closeMenu() {
    panel.hidden = true; dim.hidden = true;
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }
  if (openBtn && panel) {
    openBtn.addEventListener('click', openMenu);
    [].forEach.call(document.querySelectorAll('[data-menu-close]'), function (el) {
      el.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) closeMenu();
    });
  }

  /* ── TOP 버튼 ──────────────────────────────────────── */
  var top = document.querySelector('[data-scroll-top]');
  if (top) {
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () {
      top.classList.toggle('on', window.scrollY > 400);
    }, { passive: true });
  }

  /* ── 이메일 조립 (스팸봇 수집 방지) ────────────────────
     HTML 소스에는 아이디와 도메인이 따로 있고 '@' 는 SVG 그림뿐입니다.
     사람이 쓰는 브라우저에서만 여기서 mailto 링크와 복사 버튼을 붙입니다. */
  [].forEach.call(document.querySelectorAll('[data-email]'), function (el) {
    var addr = el.getAttribute('data-u') + String.fromCharCode(64) + el.getAttribute('data-d');

    // span → a 로 승격 (기존 자식과 클래스는 그대로 옮긴다)
    var a = document.createElement('a');
    a.className = el.className;
    a.href = 'mailto:' + addr;
    a.setAttribute('aria-label', '이메일 ' + addr + ' 으로 메일 보내기');
    a.title = addr;
    while (el.firstChild) a.appendChild(el.firstChild);
    el.parentNode.replaceChild(a, el);

    // 복사 버튼 — 화면의 '@' 가 그림이라 드래그 복사가 안 되므로 함께 제공
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'email-copy';
    btn.textContent = '복사';
    btn.setAttribute('aria-label', '이메일 주소 복사');
    btn.addEventListener('click', function () {
      var done = function () {
        btn.textContent = '복사됨';
        btn.classList.add('done');
        setTimeout(function () { btn.textContent = '복사'; btn.classList.remove('done'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(done, fallback);
      } else { fallback(); }

      function fallback() {
        var t = document.createElement('textarea');
        t.value = addr;
        t.setAttribute('readonly', '');
        t.style.cssText = 'position:absolute;left:-9999px';
        document.body.appendChild(t);
        t.select();
        try { document.execCommand('copy'); done(); } catch (e) { window.prompt('아래 주소를 복사하세요', addr); }
        document.body.removeChild(t);
      }
    });
    a.parentNode.insertBefore(btn, a.nextSibling);
  });

  /* ── 관련 사이트 셀렉트 ────────────────────────────── */
  var fam = document.querySelector('[data-family-site]');
  if (fam) {
    fam.addEventListener('change', function () {
      if (fam.value) window.open(fam.value, '_blank', 'noopener');
      fam.selectedIndex = 0;
    });
  }
})();
