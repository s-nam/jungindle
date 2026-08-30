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

  /* ── 관련 사이트 셀렉트 ────────────────────────────── */
  var fam = document.querySelector('[data-family-site]');
  if (fam) {
    fam.addEventListener('change', function () {
      if (fam.value) window.open(fam.value, '_blank', 'noopener');
      fam.selectedIndex = 0;
    });
  }
})();
