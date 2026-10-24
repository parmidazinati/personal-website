/* Static-export rescue for parmidazinati.ir — the original Next.js dev
   chunks were saved as HTML, so React never hydrates. This small vanilla
   script restores: (1) scroll-reveal visibility, (2) services carousel
   prev/next buttons, (3) FA/EN language toggle. */
(function () {
  'use strict';

  /* 1. Reveal fallback: show every .reveal section immediately. */
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('is-visible');
  });

  /* 2. Services carousel prev/next (native scroll container). */
  var prevBtn = document.querySelector('button[aria-label="Previous slide"]');
  var nextBtn = document.querySelector('button[aria-label="Next slide"]');
  var track = document.querySelector('#services .overflow-x-auto');
  function cardStep() {
    if (!track || !track.firstElementChild) return 320;
    var r = track.firstElementChild.getBoundingClientRect();
    return Math.round(r.width) + 20;
  }
  if (prevBtn && nextBtn && track) {
    function syncDisabled() {
      var max = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 0;
      nextBtn.disabled = track.scrollLeft >= max - 1;
    }
    prevBtn.addEventListener('click', function () {
      track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
      setTimeout(syncDisabled, 600);
    });
    nextBtn.addEventListener('click', function () {
      track.scrollBy({ left: cardStep(), behavior: 'smooth' });
      setTimeout(syncDisabled, 600);
    });
    track.addEventListener('scroll', syncDisabled, { passive: true });
    syncDisabled();
  }

  /* 3. FA/EN toggle. */
  var FA_EN = {
    'پارمیدا زینتی | طراح UI/UX و بنیان‌گذار Quantum': 'Parmida Zinati | UI/UX Designer & Founder of Quantum',
    'پارمیدا': 'Parmida',
    'خدمات': 'Services',
    'درباره من': 'About Me',
    'ارتباط با من': 'Contact',
    'فا': 'FA',
    'سلام بگو': 'Say Hello',
    'طراح UI/UX · بنیان‌گذار کوانتوم': 'UI/UX Designer · Founder of Quantum',
    'پارمیدا زینتی': 'Parmida Zinati',
    'ایده‌های بزرگ را به تجربه‌های ماندگار تبدیل می‌کنم': 'I turn big ideas into lasting experiences',
    'درخواست تماس با من': 'Request a Call',
    'کوانتوم': 'Quantum',
    'طراحی UI/UX': 'UI/UX Design',
    'طراحی رابط‌هایی ساده و شهودی که حول رفتار واقعی کاربر شکل می‌گیرند.': 'Designing simple, intuitive interfaces shaped around real user behavior.',
    'وایرفریم': 'Wireframing',
    'تفکر کاربردپذیری': 'Usability Thinking',
    'پروتوتایپ': 'Prototyping',
    'طراحی تعامل': 'Interaction Design',
    'محصول دیجیتال': 'Digital Product',
    'تبدیل ایده‌ها به محصولات دیجیتال واقعی — از ایده تا عرضه.': 'Turning ideas into real digital products — from idea to launch.',
    'تفکر محصول': 'Product Thinking',
    'طراحی محتوا': 'Content Design',
    'هویت برند': 'Brand Identity',
    'خلق سیستم‌های بصری قدرتمند که واضح حرف می‌زنند و در همه‌ی نقاط تماس یکدست می‌مانند.': 'Creating powerful visual systems that speak clearly and stay consistent at every touchpoint.',
    'طراحی لوگو': 'Logo Design',
    'سیستم بصری': 'Visual System',
    'گایدلاین': 'Guidelines',
    'طراحی دیجیتال': 'Digital Design',
    'خلق ویژوال‌هایی که توجه را جلب می‌کنند و در پلتفرم‌های دیجیتال واضح پیام می‌رسانند.': 'Creating visuals that grab attention and communicate clearly across digital platforms.',
    'پست شبکه‌های اجتماعی': 'Social Media Posts',
    'کریتیو تبلیغات': 'Ad Creatives',
    'ویژوال کمپین': 'Campaign Visuals',
    'فارغ‌التحصیل مهندسی کامپیوتر': 'B.Sc. in Computer Engineering',
    'من پارمیدا زینتی هستم؛ طراح UI/UX، فارغ‌التحصیل مهندسی کامپیوتر و بنیان‌گذار کوانتوم. اینجا جایی است که طراحی، فناوری و نگاه انسانی به یک مسیر مشترک می‌رسند.': "I'm Parmida Zinati — a UI/UX designer, computer engineering graduate, and founder of Quantum. This is where design, technology, and a human perspective meet on a shared path.",
    'ابزارهایی که باهاشون کار می‌کنم': 'Tools I work with',
    'تجربیات': 'Experience',
    'بنیان‌گذار': 'Founder',
    '۲۰۲۵ - اکنون': '2025 - Present',
    'طراح UI/UX': 'UI/UX Designer',
    '۲۰۲۳ - ۲۰۲۵': '2023 - 2025',
    'طراح گرافیک': 'Graphic Designer',
    '۲۰۲۱ - ۲۰۲۳': '2021 - 2023',
    'نظرات و پیشنهادات': 'Feedback',
    'نظرت درباره کارهای من یا این سایت چیه؟ هر نکته یا پیشنهادی داری برام بنویس — همه‌ی پیام‌ها مستقیم به دستم می‌رسن.': 'What do you think about my work or this site? Write me any note or suggestion — every message reaches me directly.',
    'نوع پیام': 'Message Type',
    'نظر': 'Comment',
    'پیشنهاد': 'Suggestion',
    'نام': 'Name',
    'ایمیل': 'Email',
    'پیام شما': 'Your Message',
    'ارسال': 'Send',
    'ارتباط': 'Contact',
    'بیایید با هم کار کنیم': "Let's Work Together",
    'اگر درباره طراحی، فناوری، هوش مصنوعی، آموزش یا توسعه محصولات دیجیتال علاقه‌مند به گفت‌وگو یا همکاری هستید، خوشحال می‌شوم در ارتباط باشیم.': "If you'd like to talk or collaborate on design, technology, AI, education, or digital product development, I'd love to hear from you.",
    'موقعیت': 'Location',
    'قائمشهر، ایران': 'Qaemshahr, Iran',
    '۲۰۲۶': '2026',
    'تمامی حقوق محفوظ است.': 'All rights reserved.',
    'نام شما (اختیاری)': 'Your name (optional)',
    'ایمیل شما (اختیاری)': 'Your email (optional)',
    'این‌جا بنویس…': 'Write here…'
  };
  var EN_FA = {};
  Object.keys(FA_EN).forEach(function (k) { EN_FA[FA_EN[k]] = k; });

  function applyDict(map) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var parent = node.parentElement;
      if (!parent) return;
      if (parent.closest('script, style, noscript, .animate-marquee')) return;
      var t = node.nodeValue.trim();
      if (t && map[t] !== undefined && node.nodeValue.indexOf(t) !== -1) {
        node.nodeValue = node.nodeValue.replace(t, map[t]);
      }
    });
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function (el) {
      var ph = el.getAttribute('placeholder');
      if (ph && map[ph] !== undefined) el.setAttribute('placeholder', map[ph]);
    });
    if (map[document.title] !== undefined) document.title = map[document.title];
  }

  var langGroup = document.querySelector('div[role="group"][aria-label="Language / زبان"]');
  if (langGroup) {
    var btns = langGroup.querySelectorAll('button');
    if (btns.length === 2) {
      var faBtn = btns[0];
      var enBtn = btns[1];
      function setActive(active, inactive) {
        active.classList.add('bg-brand', 'text-white');
        active.classList.remove('text-neutral-400');
        active.setAttribute('aria-pressed', 'true');
        inactive.classList.remove('bg-brand', 'text-white');
        inactive.classList.add('text-neutral-400');
        inactive.setAttribute('aria-pressed', 'false');
      }
      enBtn.addEventListener('click', function () {
        applyDict(FA_EN);
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        setActive(enBtn, faBtn);
      });
      faBtn.addEventListener('click', function () {
        applyDict(EN_FA);
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
        setActive(faBtn, enBtn);
      });
    }
  }
})();
