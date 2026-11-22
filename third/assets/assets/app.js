/* Elevance Legal Services - site script. No cookies, no storage, no third-party requests. */
(function () {
  'use strict';
  var CONFIG = { EMAIL: 'info@elevancelegal.co.uk', FORM_ENDPOINT: '' };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* original hero artwork: a skyline of outlined pillars that rise, with a few lit windows */
  (function sky() {
    var svg = $('#sky'); if (!svg) return; var ns = 'http://www.w3.org/2000/svg', seed = 11;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    function el(n, a) { var e = document.createElementNS(ns, n); for (var k in a) e.setAttribute(k, a[k]); svg.appendChild(e); return e; }
    var x = 20, i = 0, W = 1600, H = 700;
    while (x < W - 30) {
      var w = 40 + rnd() * 90, h = 120 + rnd() * 420, cls = i % 5 === 0 ? 'col c' : (i % 2 ? 'col b' : 'col');
      var r = el('rect', { x: x, y: H - h, width: w, height: h, class: cls });
      r.style.animationDelay = (i * 0.09) + 's';
      var rows = Math.floor(h / 34), cols = Math.max(1, Math.floor(w / 22));
      for (var a = 1; a < rows; a++) for (var b = 0; b < cols; b++) if (rnd() > .93) {
        var wn = el('rect', { x: x + 8 + b * 20, y: H - h + a * 34, width: 8, height: 14, class: 'win' }); wn.style.animationDelay = (rnd() * 6) + 's';
      }
      x += w + 6 + rnd() * 22; i++;
    }
    el('path', { d: 'M0 ' + (H - 1) + ' H' + W, class: 'ln', pathLength: 1 });
  })();

  /* flowing light ribbons between rows: original canvas code. A few sine strands whose phase drifts;
     drawn only while visible, one static frame when reduced motion is requested. */
  (function ribbons() {
    var stages = $$('#goals .stage'); if (!stages.length) return;
    var rs = [];
    stages.forEach(function (st, i) {
      if (i === stages.length - 1) return;
      var wrap = document.createElement('div'); wrap.className = 'ribbon'; wrap.setAttribute('aria-hidden', 'true');
      var cv = document.createElement('canvas'); wrap.appendChild(cv); st.parentNode.insertBefore(wrap, st.nextSibling);
      rs.push({ wrap: wrap, cv: cv, ctx: cv.getContext('2d'), seed: i * 1.7 + 0.6, vis: false });
    });
    function size(r) {
      var d = Math.min(window.devicePixelRatio || 1, 2), w = r.wrap.clientWidth, h = r.wrap.clientHeight;
      r.cv.width = w * d; r.cv.height = h * d; r.w = w; r.h = h; r.d = d;
    }
    function draw(r, t) {
      var c = r.ctx; if (!c) return; c.setTransform(r.d, 0, 0, r.d, 0, 0); c.clearRect(0, 0, r.w, r.h);
      var strands = 9, mid = r.h / 2;
      for (var s = 0; s < strands; s++) {
        var k = s / (strands - 1), a = 14 + 34 * Math.sin(k * Math.PI), off = (k - .5) * 34;
        c.beginPath();
        for (var x = 0; x <= r.w; x += 8) {
          var u = x / r.w;
          var y = mid + off + Math.sin(u * 5.2 + t * .00035 + r.seed + k * 1.3) * a * .55 + Math.sin(u * 2.1 - t * .00022 + r.seed * 2 + k) * a * .6;
          if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.strokeStyle = 'rgba(255,255,255,' + (.07 + .22 * Math.sin(k * Math.PI)) + ')'; c.lineWidth = s === 4 ? 1.4 : 1; c.stroke();
      }
    }
    var reduceNow = window.matchMedia('(prefers-reduced-motion: reduce)').matches, raf = 0;
    function loop(t) { var any = false; rs.forEach(function (r) { if (r.vis) { draw(r, t); any = true; } }); raf = any ? requestAnimationFrame(loop) : 0; }
    function start() { if (!raf && !reduceNow) raf = requestAnimationFrame(loop); }
    rs.forEach(function (r) { size(r); draw(r, 0); });
    window.addEventListener('resize', function () { rs.forEach(function (r) { size(r); draw(r, performance.now()); }); });
    if ('IntersectionObserver' in window && !reduceNow) {
      var o = new IntersectionObserver(function (en) { en.forEach(function (e) { rs.forEach(function (r) { if (r.wrap === e.target) r.vis = e.isIntersecting; }); }); start(); }, { rootMargin: '100px' });
      rs.forEach(function (r) { o.observe(r.wrap); });
    }
  })();

  var mb = $('.menu-btn'), nav = $('#nav');
  if (mb && nav) {
    mb.addEventListener('click', function () { var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.focus(); } });
  }

  var items = $$('.reveal,.stage');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  /* every call to action leads to Contact, pre-filling what the visitor typed or chose */
  var msg = $('#c-msg'), topic = $('#c-topic');
  function toContact(text, tp) {
    if (msg && text) msg.value = text;
    if (topic && tp) for (var i = 0; i < topic.options.length; i++) if (topic.options[i].text === tp) topic.selectedIndex = i;
    var c = $('#contact'); if (c) c.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    setTimeout(function () { var f = msg && !msg.value ? msg : $('#c-name'); if (f) f.focus({ preventScroll: true }); }, 650);
  }
  $$('[data-go]').forEach(function (el) { el.addEventListener('click', function (e) { e.preventDefault(); toContact(el.getAttribute('data-go'), el.getAttribute('data-topic')); }); });
  var ask = $('#ask'); if (ask) ask.addEventListener('submit', function (e) { e.preventDefault(); toContact($('#ask-q').value.trim(), null); });

  var last = null;
  $$('[data-dialog]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); var d = document.getElementById(b.getAttribute('data-dialog')); if (!d) return; last = b; if (d.showModal) d.showModal(); else d.setAttribute('open', ''); }); });
  $$('dialog').forEach(function (d) {
    $$('.dx', d).forEach(function (x) { x.addEventListener('click', function () { d.close(); }); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () { if (last) last.focus(); });
  });
  var note = $('#note'); if (note) $('button', note).addEventListener('click', function () { note.classList.add('hide'); });

  var form = $('#contact-form'), out = $('#formmsg');
  function say(t, c) { out.textContent = t; out.className = 'msg ' + (c || ''); }
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.website.value) return;
    if (!form.checkValidity()) { form.reportValidity(); say('Please complete the highlighted fields.', 'err'); return; }
    if (!form.consent.checked) { say('Please tick the box to confirm you have read the privacy notice.', 'err'); form.consent.focus(); return; }
    var d = { name: form.name.value.trim(), email: form.email.value.trim(), phone: form.phone.value.trim(), topic: form.topic.value, language: form.language.value, message: form.message.value.trim() };
    var body = 'Name: ' + d.name + '\nEmail: ' + d.email + '\nPhone: ' + (d.phone || '-') + '\nType of matter: ' + d.topic + '\nPreferred language: ' + d.language + '\n\n' + d.message + '\n\n[Visitor confirmed the privacy notice before sending.]';
    if (CONFIG.FORM_ENDPOINT) {
      say('Sending...', '');
      fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
        .then(function (r) { if (!r.ok) throw new Error(); say('Thank you. We have your message and will reply by email.', 'ok'); form.reset(); })
        .catch(function () { say('Sorry, that did not send. Please email ' + CONFIG.EMAIL + ' or call 020 8129 1035.', 'err'); });
    } else {
      window.location.href = 'mailto:' + CONFIG.EMAIL + '?subject=' + encodeURIComponent('Website enquiry: ' + d.topic) + '&body=' + encodeURIComponent(body);
      say('Your email app should open with your message ready. If it does not, email ' + CONFIG.EMAIL + '.', 'ok');
    }
  });
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
