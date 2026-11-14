// Portafolio: todo el contenido sale de assets/data/data.json.
// Cualquier texto puede ser un string simple o un objeto { "es": "...", "en": "..." }.

const UI = {
  es: {
    loading: "Cargando…",
    error: "No se pudo cargar data.json. Si abriste el archivo directamente, usa un servidor local (ver README).",
    nav: { about: "Sobre mí", now: "Ahora", tech: "Tecnologías", experience: "Experiencia", projects: "Proyectos", roadmap: "Planes", training: "Formación", achievements: "Logros", extras: "Extras" },
    titles: { about: "Sobre mí", now: "En qué estoy ahora", tech: "Tecnologías", experience: "Experiencia", projects: "Proyectos", roadmap: "Planes y metas", training: "Formación", achievements: "Logros y certificados", extras: "Extras" },
    status: { all: "Todos", done: "Terminado", "in-progress": "En curso", planned: "Planeado" },
    filters: { all: "Todos", done: "Terminados", "in-progress": "En curso", planned: "Planeados" },
    email: "Email", cv: "CV", demo: "Demo", code: "Código", certificate: "Certificado", more: "Ver más",
    updated: "Actualizado", made: "Hecho con HTML, CSS y JS · Publicado en GitHub Pages",
    switchTo: "EN",
  },
  en: {
    loading: "Loading…",
    error: "Could not load data.json. If you opened the file directly, use a local server (see README).",
    nav: { about: "About", now: "Now", tech: "Tech", experience: "Experience", projects: "Projects", roadmap: "Roadmap", training: "Education", achievements: "Achievements", extras: "Extras" },
    titles: { about: "About me", now: "What I'm doing now", tech: "Technologies", experience: "Experience", projects: "Projects", roadmap: "Plans & goals", training: "Education", achievements: "Achievements & certificates", extras: "Extras" },
    status: { all: "All", done: "Done", "in-progress": "In progress", planned: "Planned" },
    filters: { all: "All", done: "Done", "in-progress": "In progress", planned: "Planned" },
    email: "Email", cv: "Résumé", demo: "Demo", code: "Code", certificate: "Certificate", more: "See more",
    updated: "Updated", made: "Built with HTML, CSS & JS · Hosted on GitHub Pages",
    switchTo: "ES",
  },
};

const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
};

let DATA = null;
let lang = pickLang();
let projectFilter = "all";

function pickLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (_) {}
  return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

// Traduce un valor: string o { es, en }.
function t(v) {
  if (v == null) return "";
  if (typeof v === "string") return v;
  return v[lang] ?? v.es ?? v.en ?? "";
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const has = (arr) => Array.isArray(arr) && arr.length > 0;
const ext = (url) => `href="${esc(url)}" target="_blank" rel="noopener"`;

function section(id, emoji, inner) {
  return `<section id="${id}"><h2><span class="emoji">${emoji}</span>${esc(UI[lang].titles[id])}</h2>${inner}</section>`;
}

function chips(list) {
  if (!has(list)) return "";
  return `<div class="meta">${list.map((x) => `<span class="chip">${esc(t(x))}</span>`).join("")}</div>`;
}

function statusChip(status) {
  if (!status || !UI[lang].status[status]) return "";
  return `<span class="chip status ${status}">${esc(UI[lang].status[status])}</span>`;
}

// ---------- Secciones ----------

function renderHero(p, c) {
  const initials = t(p.name).split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  const avatar = p.avatar
    ? `<img class="avatar" src="${esc(p.avatar)}" alt="${esc(t(p.name))}">`
    : `<div class="avatar" aria-hidden="true">${esc(initials)}</div>`;
  const links = [];
  if (c.email) links.push(`<a class="btn primary" href="mailto:${esc(c.email)}">${ICONS.mail}${UI[lang].email}</a>`);
  const cv = t(c.cv);
  if (cv) links.push(`<a class="btn" ${ext(cv)}>${ICONS.file}${UI[lang].cv}</a>`);
  if (c.github) links.push(`<a class="btn" ${ext(c.github)}>${ICONS.github}GitHub</a>`);
  if (c.linkedin) links.push(`<a class="btn" ${ext(c.linkedin)}>${ICONS.linkedin}LinkedIn</a>`);
  (c.others || []).forEach((o) => links.push(`<a class="btn" ${ext(o.url)}>${ICONS.link}${esc(t(o.name))}</a>`));

  return `<div class="hero" id="inicio">
    ${avatar}
    <div>
      <h1>${esc(t(p.name))}</h1>
      ${p.role ? `<p class="role">${esc(t(p.role))}</p>` : ""}
      ${p.location ? `<p class="location">📍 ${esc(t(p.location))}</p>` : ""}
      ${p.summary ? `<p class="summary">${esc(t(p.summary))}</p>` : ""}
      <div class="links">${links.join("")}</div>
    </div>
  </div>`;
}

function renderNow(items) {
  return section("now", "🚀", `<div class="grid">${items.map((i) => `
    <article class="card">
      <h3>${esc(t(i.title))}</h3>
      ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
      ${chips(i.tags)}
    </article>`).join("")}</div>`);
}

function renderTech(items) {
  return section("tech", "🛠️", `<div class="tech-list">${items.map((i) => `
    <span class="tech">${i.icon ? `<i class="${esc(i.icon)} colored" aria-hidden="true"></i>` : ""}${esc(t(i.name))}</span>`).join("")}</div>`);
}

function timelineCard(i) {
  const links = [];
  if (i.url) links.push(`<a ${ext(i.url)}>${UI[lang].more} ↗</a>`);
  if (i.certificate) links.push(`<a ${ext(i.certificate)}>${UI[lang].certificate} ↗</a>`);
  return `<article class="card">
    <div class="card-head">
      <div><h3>${esc(t(i.title))}</h3>${i.subtitle ? `<p class="sub">${esc(t(i.subtitle))}</p>` : ""}</div>
      ${i.date ? `<span class="date">${esc(t(i.date))}</span>` : ""}
    </div>
    ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
    ${chips(i.technologies)}
    ${links.length ? `<div class="card-links">${links.join("")}</div>` : ""}
  </article>`;
}

function renderProjects(items) {
  const statuses = ["done", "in-progress", "planned"].filter((s) => items.some((i) => i.status === s));
  const filters = statuses.length > 1
    ? `<div class="filters" role="group">${["all", ...statuses].map((s) =>
        `<button type="button" class="filter" data-filter="${s}" aria-pressed="${s === projectFilter}">${esc(UI[lang].filters[s])}</button>`).join("")}</div>`
    : "";
  const visible = items.filter((i) => projectFilter === "all" || i.status === projectFilter);
  const cards = visible.map((i) => {
    const links = [];
    if (i.url) links.push(`<a ${ext(i.url)}>${UI[lang].demo} ↗</a>`);
    if (i.github) links.push(`<a ${ext(i.github)}>${UI[lang].code} ↗</a>`);
    return `<article class="card project">
      ${i.image ? `<img src="${esc(i.image)}" alt="" loading="lazy">` : ""}
      <div class="body">
        <div class="card-head"><h3>${esc(t(i.title))}</h3>${statusChip(i.status)}</div>
        ${i.date ? `<p class="sub">${esc(t(i.date))}</p>` : ""}
        ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
        ${chips(i.technologies)}
        ${links.length ? `<div class="card-links">${links.join("")}</div>` : ""}
      </div>
    </article>`;
  }).join("");
  return section("projects", "📂", `${filters}<div class="grid">${cards}</div>`);
}

function renderRoadmap(items) {
  return section("roadmap", "🎯", `<div class="list roadmap">${items.map((i) => `
    <article class="card">
      <span class="check ${i.done ? "on" : ""}" aria-hidden="true">${i.done ? "✓" : ""}</span>
      <div class="grow">
        <div class="card-head"><h3>${esc(t(i.title))}</h3>${i.date ? `<span class="date">${esc(t(i.date))}</span>` : ""}</div>
        ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
      </div>
    </article>`).join("")}</div>`);
}

function renderAchievements(items) {
  return section("achievements", "🏆", `<div class="grid">${items.map((i) => `
    <article class="card">
      <div class="card-head"><h3>${esc(t(i.title))}</h3>${i.date ? `<span class="date">${esc(t(i.date))}</span>` : ""}</div>
      ${i.issuer ? `<p class="sub">${esc(t(i.issuer))}</p>` : ""}
      ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
      ${i.url ? `<div class="card-links"><a ${ext(i.url)}>${UI[lang].certificate} ↗</a></div>` : ""}
    </article>`).join("")}</div>`);
}

function renderExtras(items) {
  return section("extras", "✨", `<div class="grid">${items.map((i) => `
    <article class="card">
      <h3>${i.url ? `<a ${ext(i.url)}>${esc(t(i.title))} ↗</a>` : esc(t(i.title))}</h3>
      ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
    </article>`).join("")}</div>`);
}

// ---------- Render principal ----------

function render() {
  const d = DATA;
  const ui = UI[lang];
  document.documentElement.lang = lang;
  document.title = t(d.meta?.title) || t(d.profile?.name) || "Portafolio";
  document.querySelector('meta[name="description"]').content = t(d.meta?.description);
  document.getElementById("brand").textContent = t(d.profile?.name);
  document.getElementById("lang-toggle").textContent = ui.switchTo;

  const parts = [renderHero(d.profile || {}, d.contact || {})];
  const nav = [];
  const add = (id, html) => { parts.push(html); nav.push(id); };

  if (d.about) add("about", section("about", "👋", `<p class="prose">${esc(t(d.about))}</p>`));
  if (has(d.now)) add("now", renderNow(d.now));
  if (has(d.technologies)) add("tech", renderTech(d.technologies));
  if (has(d.experience)) add("experience", section("experience", "💼", `<div class="timeline">${d.experience.map(timelineCard).join("")}</div>`));
  if (has(d.projects)) add("projects", renderProjects(d.projects));
  if (has(d.roadmap)) add("roadmap", renderRoadmap(d.roadmap));
  if (has(d.training)) add("training", section("training", "🎓", `<div class="timeline">${d.training.map(timelineCard).join("")}</div>`));
  if (has(d.achievements)) add("achievements", renderAchievements(d.achievements));
  if (has(d.extras)) add("extras", renderExtras(d.extras));

  document.getElementById("app").innerHTML = parts.join("");
  document.getElementById("nav-links").innerHTML = nav.map((id) => `<li><a href="#${id}">${esc(ui.nav[id])}</a></li>`).join("");
  document.getElementById("footer").innerHTML =
    `<span>© ${new Date().getFullYear()} ${esc(t(d.profile?.name))}</span>` +
    `<span>${d.meta?.updated ? `${ui.updated}: ${esc(d.meta.updated)} · ` : ""}${ui.made}</span>`;

  document.querySelectorAll(".filter").forEach((b) => b.addEventListener("click", () => {
    projectFilter = b.dataset.filter;
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
  }));
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch (_) {}
  if (DATA) render();
});

fetch("assets/data/data.json", { cache: "no-cache" })
  .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then((json) => { DATA = json; render(); })
  .catch(() => { document.getElementById("app").innerHTML = `<p class="error">${esc(UI[lang].error)}</p>`; });
