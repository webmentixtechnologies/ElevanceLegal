/* Elevance Legal Services Ltd - site script. No third-party requests, no tracking. */
(function () {
  'use strict';
  var CONFIG = {
    EMAIL: 'info@elevancelegal.co.uk',
    // Set to the URL of a form-handling endpoint on your own server to send enquiries directly.
    // Left empty, the form opens the visitor's email app with the message pre-filled (nothing is sent automatically).
    FORM_ENDPOINT: '',
    CONSENT_KEY: 'elevance_consent_v1',
    CONSENT_MONTHS: 12
  };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- low-poly gold mesh behind the hero (decorative) ---- */
  (function mesh() {
    var svg = $('#mesh'); if (!svg) return;
    var W = 1600, H = 900, cols = 12, rows = 7, seed = 7, ns = 'http://www.w3.org/2000/svg';
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var pts = [];
    for (var r = 0; r <= rows; r++) { pts[r] = []; for (var c = 0; c <= cols; c++) {
      var x = c * W / cols + (c && c < cols ? (rnd() - .5) * 90 : 0), y = r * H / rows + (r && r < rows ? (rnd() - .5) * 90 : 0);
      pts[r][c] = [x, y]; } }
    var shades = ['#c9d6e8', '#b4c6de', '#9db4d3', '#86a1c7', '#d9e3f0', '#aebfd8', '#cbd8ea', '#7f99c0'];
    function tri(a, b, c) {
      var p = document.createElementNS(ns, 'polygon');
      p.setAttribute('points', a.join(',') + ' ' + b.join(',') + ' ' + c.join(','));
      var s = shades[Math.floor(rnd() * shades.length)];
      p.setAttribute('fill', s); p.setAttribute('stroke', s); p.setAttribute('stroke-width', '1');
      p.setAttribute('opacity', (.55 + rnd() * .45).toFixed(2)); svg.appendChild(p);
    }
    for (var r2 = 0; r2 < rows; r2++) for (var c2 = 0; c2 < cols; c2++) {
      var a = pts[r2][c2], b = pts[r2][c2 + 1], d = pts[r2 + 1][c2], e = pts[r2 + 1][c2 + 1];
      if (rnd() > .5) { tri(a, b, d); tri(b, e, d); } else { tri(a, b, e); tri(a, e, d); }
    }
  })();

  /* ---- mobile menu ---- */
  var mb = $('.menu-btn'), nav = $('#nav');
  if (mb && nav) {
    mb.addEventListener('click', function () {
      var open = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.focus(); } });
  }

  /* ---- reveal on scroll (respects reduced motion) ---- */
  var els = $$('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .12 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  /* ---- dialogs (privacy, cookies, terms, accessibility) ---- */
  var lastTrigger = null;
  $$('[data-dialog]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault(); var d = document.getElementById(b.getAttribute('data-dialog')); if (!d) return;
      lastTrigger = b; if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    });
  });
  $$('dialog').forEach(function (d) {
    $$('.dx', d).forEach(function (x) { x.addEventListener('click', function () { d.close(); }); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () { if (lastTrigger) lastTrigger.focus(); });
  });

  /* ---- cookie / storage consent (UK GDPR + PECR) ----
     Only strictly-necessary storage is used by default. Optional categories are OFF until the visitor opts in,
     and nothing optional is loaded unless consent is recorded. Rejecting is as easy as accepting. */
  var cc = $('#cc');
  function getConsent() { try { var c = JSON.parse(localStorage.getItem(CONFIG.CONSENT_KEY) || 'null'); if (c && c.exp > Date.now()) return c; } catch (e) {} return null; }
  function saveConsent(analytics, marketing) {
    var exp = Date.now() + CONFIG.CONSENT_MONTHS * 30 * 864e5;
    try { localStorage.setItem(CONFIG.CONSENT_KEY, JSON.stringify({ necessary: true, analytics: !!analytics, marketing: !!marketing, ts: new Date().toISOString(), exp: exp })); } catch (e) {}
    cc.classList.remove('show', 'custom'); applyConsent();
  }
  function applyConsent() {
    var c = getConsent(); if (!c) return;
    // Hook for optional scripts: load analytics / marketing tags here ONLY when c.analytics / c.marketing is true.
    // No optional scripts are used on this site at present.
    document.documentElement.setAttribute('data-consent-analytics', c.analytics ? '1' : '0');
  }
  function showBanner(custom) {
    var c = getConsent(); $('#cc-an').checked = !!(c && c.analytics); $('#cc-mk').checked = !!(c && c.marketing);
    cc.classList.add('show'); cc.classList.toggle('custom', !!custom); var f = $(custom ? '#cc-save' : '#cc-accept', cc); if (f) f.focus();
  }
  if (cc) {
    $('#cc-accept').addEventListener('click', function () { saveConsent(true, true); });
    $('#cc-reject').addEventListener('click', function () { saveConsent(false, false); });
    $('#cc-custom').addEventListener('click', function () { cc.classList.add('custom'); $('#cc-an').focus(); });
    $('#cc-save').addEventListener('click', function () { saveConsent($('#cc-an').checked, $('#cc-mk').checked); });
    $$('[data-cookie-settings]').forEach(function (b) { b.addEventListener('click', function () { var d = b.closest('dialog'); if (d) d.close(); showBanner(true); }); });
    if (!getConsent()) showBanner(false); else applyConsent();
  }

  /* ---- enquiry form ---- */
  var form = $('#enquiry'), msg = $('#formmsg');
  function say(t, cls) { msg.textContent = t; msg.className = 'msg ' + (cls || ''); }
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.website && form.website.value) return; // honeypot
    if (!form.checkValidity()) { form.reportValidity(); say('Please complete the highlighted fields.', 'err'); return; }
    if (!form.consent.checked) { say('Please tick the box to confirm you have read the privacy notice.', 'err'); form.consent.focus(); return; }
    var data = { name: form.name.value.trim(), email: form.email.value.trim(), phone: form.phone.value.trim(), matter: form.matter.value, language: form.language.value, dates: form.dates.value.trim(), message: form.message.value.trim() };
    var body = 'Name: ' + data.name + '\nEmail: ' + data.email + '\nPhone: ' + (data.phone || '-') + '\nType of matter: ' + data.matter + '\nPreferred language: ' + data.language + '\nImportant dates: ' + (data.dates || '-') + '\n\n' + data.message + '\n\n[Visitor confirmed the privacy notice before sending.]';
    if (CONFIG.FORM_ENDPOINT) {
      say('Sending...', '');
      fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(); say('Thank you. We have received your enquiry and will reply by email.', 'ok'); form.reset(); })
        .catch(function () { say('Sorry, that did not send. Please email ' + CONFIG.EMAIL + ' or call 020 8129 1035.', 'err'); });
    } else {
      window.location.href = 'mailto:' + CONFIG.EMAIL + '?subject=' + encodeURIComponent('Website enquiry: ' + data.matter) + '&body=' + encodeURIComponent(body);
      say('Your email app should open with your message ready to send. If it does not, email ' + CONFIG.EMAIL + '.', 'ok');
    }
  });

  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
