/* ==========================================================================
   AFNEA website – main.js
   --------------------------------------------------------------------------
   PART 1 (top of file): EDITABLE CONTENT.
     Non-developers: change the text between the quotes below, save the file,
     and re-upload it. Keep the commas and brackets exactly as they are.
   PART 2 (further down): site code. You should not need to change it.
   ========================================================================== */

/* ---------- 1A. Site settings ---------- */
const SITE = {
  name: "Attawapiskat First Nation Education Authority",
  shortName: "AFNEA",
  lastUpdated: "2026-11-12",            // shown in the footer – format YYYY-MM-DD
  address: ["P.O. Box 247", "Attawapiskat, ON  P0L 1A0", "Canada"],
  phone: "(705) 997-2232",
  phoneLink: "+17059972232",
  fax: "(705) 997-2419",
  email: "info@afnea.com",
  officeHours: "Monday to Friday, 9:00 a.m. – 5:00 p.m. (closed statutory holidays)", // PLACEHOLDER – confirm

  // Learning platform (LMS) sign-in pages. Paste the real address between the
  // quotes when each portal is ready, e.g. "https://learn.afnea.com/login".
  // While a value is empty, the sign-in form shows a "coming soon" message.
  lmsUrls: {
    vezina: "",
    kattawapiskak: "",
    ils: "",
    community: "",
  },
  passwordResetUrl: "",                  // "Forgot password?" link on the sign-in forms

  // Contact form service. Create a form at https://formspree.io (or similar)
  // and paste its endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
  // While empty, the form validates but does not send anything.
  contactFormEndpoint: "",
};

/* ---------- 1B. Main menu ---------- */
const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  {
    label: "Learning Portals",
    children: [
      { label: "Vezina Secondary School", note: "Grades 9–12", href: "vezina.html", page: "vezina" },
      { label: "Kattawapiskak Elementary School", note: "Elementary grades", href: "kattawapiskak.html", page: "kattawapiskak" },
      { label: "Independent Learning System", note: "Learn at your own pace", href: "independent-learning.html", page: "ils" },
      { label: "Community Learning", note: "Adult & community programs", href: "community-learning.html", page: "community" },
    ],
  },
  { label: "Beyond the School", href: "beyond-the-school.html", page: "beyond" },
  { label: "Newsletter", href: "newsletter.html", page: "newsletter" },
  { label: "Cree Language", href: "cree.html", page: "cree" },
  { label: "About Us", href: "about.html", page: "about" },
];

/* ---------- 1C. Newsletter / announcements ----------
   Newest items first is not required – the site sorts by date automatically.
   id:     short unique name with no spaces (used in the web address)
   date:   YYYY-MM-DD
   image:  file in /images (or /images/newsletter). Size 800 x 450 works best.
   body:   one string per paragraph.
   link:   optional – { label: "Download the PDF", href: "files/notice.pdf" }   */
const NEWSLETTER = [
  {
    id: "welcome-back-2026",
    title: "Welcome back to the 2026–27 school year",
    date: "2026-09-02",
    image: "images/news-fall.svg",
    imageAlt: "Illustration of autumn colours along the river",
    body: [
      "Welcome back, students and families! Our school teams are excited to start a new year of learning together.",
      "Please check with your child's school for start times, bus information and supply lists. Families are always welcome to visit and meet their child's teachers.",
      "PLACEHOLDER: replace this sample announcement with real news.",
    ],
  },
  {
    id: "cree-language-nights",
    title: "Cree language evenings for families",
    date: "2026-10-14",
    image: "images/news-summer.svg",
    imageAlt: "Illustration of geese flying over a summer lake",
    body: [
      "Families are invited to practise everyday Cree together with phrases, songs and stories. All ages and all levels are welcome.",
      "PLACEHOLDER: add dates, times and location.",
    ],
  },
  {
    id: "winter-weather-reminder",
    title: "Winter weather and school closure reminders",
    date: "2026-11-05",
    image: "images/news-winter.svg",
    imageAlt: "Illustration of a snowy treeline",
    body: [
      "As the weather turns cold, please make sure students are dressed warmly for the walk to school.",
      "Closure notices will be shared on this page, on local radio and on community social media.",
      "PLACEHOLDER: replace with the Board's actual closure process.",
    ],
  },
  {
    id: "spring-break-up",
    title: "Land-based learning planned for spring",
    date: "2026-08-20",
    image: "images/news-spring.svg",
    imageAlt: "Illustration of spring ice break-up on the river",
    body: [
      "Planning is under way for land-based learning activities next spring, guided by Elders and knowledge keepers.",
      "PLACEHOLDER: replace this sample announcement with real news.",
    ],
  },
];

/* ---------- 1D. Staff directory (About Us page) ----------
   PLACEHOLDER names and details – replace with real staff.                  */
const STAFF = [
  { name: "Alex Example", role: "Director of Education", phone: "(705) 997-2232 ext. 201", email: "director@afnea.com" },
  { name: "Jordan Example", role: "Principal, Vezina Secondary School", phone: "(705) 997-2232 ext. 202", email: "vezina@afnea.com" },
  { name: "Taylor Example", role: "Principal, Kattawapiskak Elementary School", phone: "(705) 997-2232 ext. 203", email: "kes@afnea.com" },
  { name: "Morgan Example", role: "Post-Secondary & Adult Learning Counsellor", phone: "(705) 997-2232 ext. 204", email: "postsecondary@afnea.com" },
  { name: "Casey Example", role: "Office Administrator", phone: "(705) 997-2232 ext. 200", email: "info@afnea.com" },
];

/* ---------- 1E. Beyond the School links ---------- */
const BEYOND_LINKS = {
  apply: [
    {
      title: "Ontario Colleges",
      text: "Apply online to Ontario's public colleges: one application for programs across the province.",
      href: "https://www.ontariocolleges.ca",
    },
    {
      title: "Ontario Universities (OUAC)",
      text: "The Ontario Universities' Application Centre: apply online to Ontario universities.",
      href: "https://www.ouac.on.ca",
    },
  ],
  interest: [
    {
      title: "Garfield Weston Merit Scholarships",
      text: "The Garfield Weston Foundation is looking to support prospective applicants for scholarships. Find out more on their website.",
      href: "https://www.gwmsc.ca",
    },
    {
      title: "Indspire (formerly the National Aboriginal Achievement Foundation)",
      text: "For more bursaries and scholarships for First Nations, Inuit and Métis students.",
      href: "https://indspire.ca",
    },
  ],
};

/* ---------- 1F. Cree resources (Cree Language page) ---------- */
const CREE_RESOURCES = [
  {
    title: "Eastern Swampy & Moose Cree Dictionary",
    text: "Nearly 9,000 words, searchable in Cree, English and syllabics.",
    source: "Algonquian Linguistic Atlas & Omushkego Education",
    href: "https://dictionary.mushkegowuk.atlas-ling.ca",
  },
  {
    title: "Cree Conversation Manual & Audio",
    text: "Everyday phrases with sound files, plus a Swampy Cree syllabic chart.",
    source: "Algonquian Linguistic Atlas",
    href: "https://resources.atlas-ling.ca",
  },
];

/* ---------- 1G. Everyday Cree phrases (Swampy Cree, n-dialect) ----------
   Source: "ililîmotâ! / ininîmotâ! Moose and Swampy Cree Conversation Manual"
   (© 2016 Algonquian Linguistic Atlas & Omushkego Education – Mushkegowuk Council).
   Please have a fluent speaker review before publishing.                   */
const CREE_PHRASES = [
  { en: "Hello / Goodbye", syl: "ᐗᒋᔦ᙮", ro: "wâciyê." },
  { en: "Thank you", syl: "ᒥᑴᐨ᙮", ro: "mîkwêc." },
  { en: "What's your name?", syl: "ᑕᐣ ᐁ ᐃᔑᓂᐦᑲᓱᔭᐣ?", ro: "tân ê išinihkâsoyan?" },
  { en: "I am from Attawapiskat", syl: "ᐊᑕᐗᐱᐡᑲᑐᐦᐠ ᓂᑐᐦᒋᐣ᙮", ro: "Âtawâpiskâtohk nitôhcin." },
  { en: "Yes", syl: "ᐁᐦᐁ", ro: "êhê" },
  { en: "No", syl: "ᒧᓇ", ro: "môna" },
  { en: "Come in!", syl: "ᐱᐦᑐᑴ!", ro: "pîhtokwê!" },
  { en: "Let's eat!", syl: "ᒥᒋᓱᑕ!", ro: "mîcisotâ!" },
  { en: "My grandmother", syl: "ᓄᐦᑯᒼ", ro: "nôhkom" },
  { en: "It's winter", syl: "ᐱᐳᐣ᙮", ro: "pipon." },
  { en: "It's summer", syl: "ᓂᐱᐣ᙮", ro: "nîpin." },
  { en: "Tomorrow", syl: "ᐗᐸᐦᑫ", ro: "wâpahkê" },
];

/* ==========================================================================
   PART 2 – SITE CODE (no editing needed below this line)
   ========================================================================== */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const currentPage = document.body.dataset.page || "";
  const desktopMQ = window.matchMedia("(min-width: 900px)");
  const reducedMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

  function parseDate(iso) {
    const [y, m, d] = String(iso).split("-").map(Number);
    return new Date(y, (m || 1) - 1, d || 1);
  }
  function formatDate(iso) {
    return parseDate(iso).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
  }

  /* ---------- Header ---------- */
  function renderHeader() {
    const mount = $("#site-header");
    if (!mount) return;

    const items = NAV.map((item, i) => {
      if (item.children) {
        const isCurrent = item.children.some((c) => c.page === currentPage);
        const subId = `subnav-${i}`;
        const links = item.children.map((c) =>
          `<li><a href="${esc(c.href)}"${c.page === currentPage ? ' aria-current="page"' : ""}>${esc(c.label)}${c.note ? `<small>${esc(c.note)}</small>` : ""}</a></li>`
        ).join("");
        return `<li class="has-sub">
          <button class="nav-sub-toggle${isCurrent ? " is-current" : ""}" type="button" aria-expanded="false" aria-controls="${subId}">
            ${esc(item.label)}<span class="chev" aria-hidden="true"></span>
          </button>
          <ul class="subnav" id="${subId}">${links}</ul>
        </li>`;
      }
      return `<li><a class="nav-link" href="${esc(item.href)}"${item.page === currentPage ? ' aria-current="page"' : ""}>${esc(item.label)}</a></li>`;
    }).join("");

    mount.outerHTML = `
      <div class="topbar">
        <div class="container">
          <span class="topbar__name">${esc(SITE.name)}</span>
          <div class="topbar__links">
            <a href="tel:${esc(SITE.phoneLink)}">${esc(SITE.phone)}</a>
            <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
          </div>
        </div>
      </div>
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="index.html" aria-label="${esc(SITE.name)} – home">
            <img src="images/logo.png" alt="" width="200" height="160">
            <span>
              <span class="brand__short">${esc(SITE.shortName)}</span>
              <span class="brand__long">${esc(SITE.name)}</span>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
            <span class="nav-toggle__bars" aria-hidden="true"></span> Menu
          </button>
          <nav class="main-nav" id="main-nav" aria-label="Main">
            <ul class="nav-list">
              ${items}
              <li class="nav-cta"><a class="btn btn--accent btn--block" href="contact.html"${currentPage === "contact" ? ' aria-current="page"' : ""}>Contact Us</a></li>
            </ul>
          </nav>
          <a class="btn btn--accent header-cta" href="contact.html"${currentPage === "contact" ? ' aria-current="page"' : ""}>Contact Us</a>
        </div>
      </header>`;
  }

  /* ---------- Navigation behaviour ---------- */
  function initNav() {
    const toggle = $(".nav-toggle");
    const nav = $("#main-nav");
    if (!toggle || !nav) return;

    const setPanel = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () => setPanel(toggle.getAttribute("aria-expanded") !== "true"));

    const subs = $$(".has-sub", nav);
    const setSub = (li, open) => {
      li.classList.toggle("is-open", open);
      $(".nav-sub-toggle", li).setAttribute("aria-expanded", String(open));
    };
    const closeAllSubs = (except) => subs.forEach((li) => li !== except && setSub(li, false));

    subs.forEach((li) => {
      const btn = $(".nav-sub-toggle", li);
      let hoverTimer;

      btn.addEventListener("click", () => {
        // On desktop, a click while the pointer is already hovering (menu
        // opened by hover) keeps it open instead of toggling it shut.
        const hovering = desktopMQ.matches && li.matches(":hover");
        const open = hovering ? true : !li.classList.contains("is-open");
        if (desktopMQ.matches) closeAllSubs(li);
        setSub(li, open);
      });

      // Desktop: open on hover
      li.addEventListener("mouseenter", () => {
        if (!desktopMQ.matches) return;
        clearTimeout(hoverTimer);
        closeAllSubs(li);
        setSub(li, true);
      });
      li.addEventListener("mouseleave", () => {
        if (!desktopMQ.matches) return;
        hoverTimer = setTimeout(() => setSub(li, false), 150);
      });

      // Close when keyboard focus leaves the menu item (desktop only)
      li.addEventListener("focusout", (e) => {
        if (desktopMQ.matches && !li.contains(e.relatedTarget)) setSub(li, false);
      });

      // Escape closes the sub-menu and returns focus to its button
      li.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && li.classList.contains("is-open")) {
          e.stopPropagation();
          setSub(li, false);
          btn.focus();
        }
      });
    });

    // Escape closes the mobile panel
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setPanel(false);
        toggle.focus();
      }
    });

    // Click outside closes open menus
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".site-header")) {
        closeAllSubs();
        if (!desktopMQ.matches) setPanel(false);
      }
    });

    // Reset when switching between mobile and desktop layouts
    desktopMQ.addEventListener("change", () => { setPanel(false); closeAllSubs(); });
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const mount = $("#site-footer");
    if (!mount) return;
    const quick = [
      ["Home", "index.html"],
      ["Vezina Secondary School", "vezina.html"],
      ["Kattawapiskak Elementary School", "kattawapiskak.html"],
      ["Beyond the School", "beyond-the-school.html"],
      ["Newsletter", "newsletter.html"],
      ["Cree Language", "cree.html"],
      ["About Us", "about.html"],
      ["Contact Us", "contact.html"],
    ].map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join("");

    mount.outerHTML = `
      <footer class="site-footer">
        <hr class="motif motif--thin" aria-hidden="true">
        <div class="container footer-grid">
          <section aria-labelledby="f-about">
            <div class="footer-brand">
              <img src="images/logo.png" alt="" width="200" height="160" loading="lazy">
              <strong>${esc(SITE.shortName)}</strong>
            </div>
            <h2 id="f-about" class="visually-hidden">About AFNEA</h2>
            <p>The ${esc(SITE.name)} supports learners of every age in Attawapiskat, from the elementary classroom to college, university and community programs, grounded in our Cree language, culture and land.</p>
          </section>
          <section aria-labelledby="f-links">
            <h2 id="f-links">Quick Links</h2>
            <ul class="footer-links">${quick}</ul>
          </section>
          <section aria-labelledby="f-contact">
            <h2 id="f-contact">Contact</h2>
            <address class="footer-contact">
              Board Office<br>
              ${SITE.address.map(esc).join("<br>")}<br>
              Phone: <a href="tel:${esc(SITE.phoneLink)}">${esc(SITE.phone)}</a><br>
              Fax: ${esc(SITE.fax)}<br>
              Email: <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
            </address>
          </section>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <span>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</span>
            <span>Last updated: ${esc(formatDate(SITE.lastUpdated))}</span>
          </div>
        </div>
      </footer>`;
  }

  /* ---------- Hero slider ---------- */
  function initSlider() {
    const root = $(".hero");
    if (!root) return;
    const slides = $$(".hero__slide", root);
    const dotsWrap = $(".hero__dots", root);
    if (slides.length < 2) return;

    let index = 0;
    let timer = null;
    let paused = false;
    const DELAY = 5000; // milliseconds between slides (5000 = 5 seconds)

    dotsWrap.innerHTML = slides.map((_, i) =>
      `<button class="hero__dot" type="button" aria-label="Show slide ${i + 1} of ${slides.length}"></button>`).join("");
    const dots = $$(".hero__dot", dotsWrap);

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => {
        const active = n === index;
        s.classList.toggle("is-active", active);
        s.setAttribute("aria-hidden", String(!active));
        s.inert = !active;
      });
      dots.forEach((d, n) => d.setAttribute("aria-current", String(n === index)));
    }
    function start() {
      stop();
      if (!paused && !reducedMotionMQ.matches) timer = setInterval(() => show(index + 1), DELAY);
    }
    function stop() { clearInterval(timer); timer = null; }

    $(".hero__btn--prev", root).addEventListener("click", () => { show(index - 1); start(); });
    $(".hero__btn--next", root).addEventListener("click", () => { show(index + 1); start(); });
    dots.forEach((d, n) => d.addEventListener("click", () => { show(n); start(); }));

    // Pause on hover / keyboard focus
    root.addEventListener("mouseenter", () => { paused = true; stop(); });
    root.addEventListener("mouseleave", () => { paused = false; start(); });
    root.addEventListener("focusin", () => { paused = true; stop(); });
    root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) { paused = false; start(); } });
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    reducedMotionMQ.addEventListener("change", start);

    // Arrow keys when focus is inside the slider
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { show(index - 1); }
      if (e.key === "ArrowRight") { show(index + 1); }
    });

    // Touch swipe
    let x0 = null, y0 = null;
    root.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    root.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { show(index + (dx < 0 ? 1 : -1)); start(); }
      x0 = y0 = null;
    }, { passive: true });

    show(0);
    start();
  }

  /* ---------- Newsletter ---------- */
  const sortedNews = () => [...NEWSLETTER].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  function renderNewsList() {
    $$("[data-render='newsletter']").forEach((mount) => {
      const limit = Number(mount.dataset.limit) || Infinity;
      const headingLevel = mount.dataset.heading || "h2";
      const items = sortedNews().slice(0, limit);
      if (!items.length) { mount.innerHTML = `<p class="muted">No announcements yet. Please check back soon.</p>`; return; }
      mount.innerHTML = items.map((n) => `
        <article class="card card--lift card--link news-card">
          <img class="card__img" src="${esc(n.image)}" alt="${esc(n.imageAlt || "")}" width="800" height="450" loading="lazy">
          <div class="card__body">
            <time class="news-date" datetime="${esc(n.date)}">${esc(formatDate(n.date))}</time>
            <${headingLevel} class="h3"><a href="newsletter-item.html?id=${encodeURIComponent(n.id)}">${esc(n.title)}</a></${headingLevel}>
          </div>
        </article>`).join("");
    });
  }

  function renderNewsItem() {
    const mount = $("[data-render='newsletter-item']");
    if (!mount) return;
    const id = new URLSearchParams(location.search).get("id");
    const item = NEWSLETTER.find((n) => n.id === id);
    if (!item) {
      mount.innerHTML = `<h1>Announcement not found</h1>
        <p>Sorry, we couldn't find that announcement. It may have been removed.</p>
        <p><a class="back-link" href="newsletter.html">&larr; Back to the Newsletter</a></p>`;
      return;
    }
    document.title = `${item.title} | ${SITE.shortName} Newsletter`;
    const desc = $('meta[name="description"]');
    if (desc && item.body[0]) desc.setAttribute("content", item.body[0].slice(0, 155));
    mount.innerHTML = `
      <p><a class="back-link" href="newsletter.html">&larr; All announcements</a></p>
      <time class="news-date" datetime="${esc(item.date)}">${esc(formatDate(item.date))}</time>
      <h1>${esc(item.title)}</h1>
      <img class="article__img" src="${esc(item.image)}" alt="${esc(item.imageAlt || "")}" width="800" height="450">
      <div class="article__body">
        ${item.body.map((p) => `<p>${esc(p)}</p>`).join("")}
        ${item.link ? `<p><a class="btn btn--primary" href="${esc(item.link.href)}">${esc(item.link.label)}</a></p>` : ""}
      </div>`;
  }

  /* ---------- Staff directory ---------- */
  function renderStaff() {
    const mount = $("[data-render='staff']");
    if (!mount) return;
    const initials = (name) => name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    mount.innerHTML = STAFF.map((s) => `
      <article class="card staff-card">
        <div class="avatar" aria-hidden="true">${esc(initials(s.name))}</div>
        <div>
          <h3>${esc(s.name)}</h3>
          <p class="staff-role">${esc(s.role)}</p>
          <ul class="staff-contact">
            ${s.phone ? `<li>Phone: <a href="tel:${esc(s.phone.replace(/[^\d+]/g, "").slice(0, 10))}">${esc(s.phone)}</a></li>` : ""}
            ${s.email ? `<li>Email: <a href="mailto:${esc(s.email)}">${esc(s.email)}</a></li>` : ""}
          </ul>
        </div>
      </article>`).join("");
  }

  /* ---------- External link cards (Beyond the School, Cree resources) ---------- */
  function linkCard({ title, text, href, source }) {
    const host = href.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `<a class="resource-card" href="${esc(href)}" target="_blank" rel="noopener">
      <h3>${esc(title)}</h3>
      <p>${esc(text)}</p>
      <span class="${source ? "source" : "url"}">${esc(source || host)}</span>
      <span class="visually-hidden">(opens in a new tab)</span>
    </a>`;
  }
  function renderLinkLists() {
    $$("[data-render='beyond-apply']").forEach((m) => (m.innerHTML = BEYOND_LINKS.apply.map(linkCard).join("")));
    $$("[data-render='beyond-interest']").forEach((m) => (m.innerHTML = BEYOND_LINKS.interest.map(linkCard).join("")));
    $$("[data-render='cree-resources']").forEach((m) => (m.innerHTML = CREE_RESOURCES.map(linkCard).join("")));
  }

  function renderPhrases() {
    const mount = $("[data-render='cree-phrases']");
    if (!mount) return;
    mount.innerHTML = CREE_PHRASES.map((p) => `
      <article class="phrase">
        <p class="phrase__en">${esc(p.en)}</p>
        <p class="phrase__syl" lang="crk-Cans">${esc(p.syl)}</p>
        <p class="phrase__ro" lang="crk">${esc(p.ro)}</p>
      </article>`).join("");
  }

  /* ---------- Contact details on pages ---------- */
  function renderContactBits() {
    $$("[data-site='address']").forEach((el) => (el.innerHTML = SITE.address.map(esc).join("<br>")));
    $$("[data-site='phone']").forEach((el) => (el.innerHTML = `<a href="tel:${esc(SITE.phoneLink)}">${esc(SITE.phone)}</a>`));
    $$("[data-site='fax']").forEach((el) => (el.textContent = SITE.fax));
    $$("[data-site='email']").forEach((el) => (el.innerHTML = `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`));
    $$("[data-site='hours']").forEach((el) => (el.textContent = SITE.officeHours));
  }

  /* ---------- Forms ---------- */
  function setFieldError(input, message) {
    const err = document.getElementById(`${input.id}-error`);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (err) err.textContent = message || "";
  }
  function showStatus(el, type, message) {
    el.className = `form-status form-status--${type} is-visible`;
    el.textContent = message;
  }

  // Learning-portal sign-in forms. Passwords are never stored or sent anywhere
  // by this site: once an LMS address is set in SITE.lmsUrls, the learner is
  // sent to the LMS's own secure sign-in page.
  function initLoginForms() {
    $$("form[data-portal]").forEach((form) => {
      const key = form.dataset.portal;
      const status = $(".form-status", form);
      const user = $("input[name='username']", form);
      const pass = $("input[name='password']", form);
      const reset = $("[data-reset-link]", form);
      if (reset && SITE.passwordResetUrl) reset.href = SITE.passwordResetUrl;

      const toggle = $(".password-toggle", form);
      if (toggle) toggle.addEventListener("click", () => {
        const show = pass.type === "password";
        pass.type = show ? "text" : "password";
        toggle.textContent = show ? "Hide" : "Show";
        toggle.setAttribute("aria-pressed", String(show));
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let ok = true;
        [[user, "Please enter your username."], [pass, "Please enter your password."]].forEach(([input, msg]) => {
          const bad = !input.value.trim();
          setFieldError(input, bad ? msg : "");
          if (bad && ok) { input.focus(); ok = false; }
        });
        if (!ok) return;

        const url = SITE.lmsUrls[key];
        if (url) {
          // TODO (LMS): if the LMS supports single sign-on or a login POST
          // endpoint, change this to submit the form to it instead.
          showStatus(status, "info", "Taking you to the learning platform…");
          window.location.href = url;
        } else {
          pass.value = "";
          showStatus(status, "info", "Online sign-in is coming soon. The learning platform for this portal is not connected yet. Please contact your school or the Board Office for help.");
        }
      });
    });
  }

  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    const status = $(".form-status", form);
    const fields = {
      name: { el: $("#c-name"), check: (v) => (v.trim().length >= 2 ? "" : "Please enter your name.") },
      email: { el: $("#c-email"), check: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address, like name@example.com.") },
      subject: { el: $("#c-subject"), check: (v) => (v.trim().length >= 3 ? "" : "Please enter a subject.") },
      message: { el: $("#c-message"), check: (v) => (v.trim().length >= 10 ? "" : "Please enter a message (at least 10 characters).") },
    };
    Object.values(fields).forEach(({ el, check }) =>
      el.addEventListener("blur", () => { if (el.value) setFieldError(el, check(el.value)); }));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let firstBad = null;
      Object.values(fields).forEach(({ el, check }) => {
        const msg = check(el.value);
        setFieldError(el, msg);
        if (msg && !firstBad) firstBad = el;
      });
      if (firstBad) { firstBad.focus(); showStatus(status, "error", "Please fix the highlighted fields."); return; }

      // ---- FORM SERVICE HOOK -------------------------------------------
      // Set SITE.contactFormEndpoint (top of this file) to a Formspree,
      // Basin, Getform or Netlify Forms endpoint to start receiving messages.
      if (!SITE.contactFormEndpoint) {
        showStatus(status, "info", "Thank you! This form is not connected yet, so your message was not sent. Please email " + SITE.email + " or call " + SITE.phone + ".");
        return;
      }
      try {
        const res = await fetch(SITE.contactFormEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        showStatus(status, "ok", "Thank you! Your message has been sent. We will reply as soon as we can.");
      } catch (err) {
        showStatus(status, "error", "Sorry, your message could not be sent. Please email " + SITE.email + " or call " + SITE.phone + ".");
      }
    });
  }

  /* ---------- Start ---------- */
  renderHeader();
  renderFooter();
  initNav();
  initSlider();
  renderNewsList();
  renderNewsItem();
  renderStaff();
  renderLinkLists();
  renderPhrases();
  renderContactBits();
  initLoginForms();
  initContactForm();
})();
