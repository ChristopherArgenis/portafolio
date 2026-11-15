// Portafolio: todo el contenido sale de assets/data/data.json.
// Cualquier texto puede ser un string simple o un objeto { "es": "...", "en": "..." }.
// Páginas: index.html (inicio), proyectos.html (lista), proyecto.html?id=<id> (detalle).

const UI = {
  es: {
    error: "No se pudo cargar data.json. Si abriste el archivo directamente, usa un servidor local (ver README).",
    home: "Inicio",
    nav: { about: "Sobre mí", tech: "Tecnologías", experience: "Experiencia", projects: "Proyectos", roadmap: "Planes", training: "Formación", achievements: "Logros", extras: "Extras" },
    titles: { about: "Sobre mí", tech: "Tecnologías", experience: "Experiencia", projects: "Proyectos", featured: "Proyectos destacados", roadmap: "Planes y metas", training: "Formación", achievements: "Logros y certificados", extras: "Extras" },
    status: { done: "Terminado", "in-progress": "En curso", planned: "Planeado" },
    filters: { all: "Todos", done: "Terminados", "in-progress": "En curso", planned: "Planeados" },
    projectsIntro: "Lo que he construido y lo que estoy construyendo: ciencia de datos, visión por computadora, bases de datos y desarrollo web.",
    allProjects: "Ver todos los proyectos",
    details: "Ver proyecto", back: "Todos los proyectos", notFound: "No encontré ese proyecto.",
    highlights: "Puntos clave", context: "Contexto", year: "Año", statusLabel: "Estado",
    prev: "Anterior", next: "Siguiente",
    email: "Email", cv: "CV", demo: "Demo", code: "Código", certificate: "Certificado", more: "Ver más",
    updated: "Actualizado", made: "Hecho con HTML, CSS y JS · Publicado en GitHub Pages",
    switchTo: "EN",
  },
  en: {
    error: "Could not load data.json. If you opened the file directly, use a local server (see README).",
    home: "Home",
    nav: { about: "About", tech: "Tech", experience: "Experience", projects: "Projects", roadmap: "Roadmap", training: "Education", achievements: "Achievements", extras: "Extras" },
    titles: { about: "About me", tech: "Technologies", experience: "Experience", projects: "Projects", featured: "Featured projects", roadmap: "Plans & goals", training: "Education", achievements: "Achievements & certificates", extras: "Extras" },
    status: { done: "Done", "in-progress": "In progress", planned: "Planned" },
    filters: { all: "All", done: "Done", "in-progress": "In progress", planned: "Planned" },
    projectsIntro: "What I've built and what I'm building: data science, computer vision, databases and web development.",
    allProjects: "See all projects",
    details: "View project", back: "All projects", notFound: "Project not found.",
    highlights: "Highlights", context: "Context", year: "Year", statusLabel: "Status",
    prev: "Previous", next: "Next",
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
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
};

const PAGE = document.body.dataset.page || "home";
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
const projectUrl = (p) => `proyecto.html?id=${encodeURIComponent(p.id)}`;

function chips(list) {
  if (!has(list)) return "";
  return `<div class="meta">${list.map((x) => `<span class="chip">${esc(t(x))}</span>`).join("")}</div>`;
}
function statusChip(status) {
  const label = UI[lang].status[status];
  return label ? `<span class="chip status ${status}">${esc(label)}</span>` : "";
}
function dateEl(d) { return d ? `<span class="date">${esc(t(d))}</span>` : ""; }
function section(id, inner, head) {
  return `<section id="${id}">${head || `<h2>${esc(UI[lang].titles[id])}</h2>`}${inner}</section>`;
}
function cover(p, big) {
  const inner = p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : `<span class="emoji" aria-hidden="true">${esc(p.emoji || "📁")}</span>`;
  return `<div class="cover${big ? " big" : ""}">${inner}</div>`;
}
function projectLinks(p, withDetail) {
  const ui = UI[lang], out = [];
  if (withDetail) out.push(`<a class="btn primary" href="${projectUrl(p)}">${ui.details} →</a>`);
  if (p.url) out.push(`<a class="btn" ${ext(p.url)}>${ICONS.link}${ui.demo}</a>`);
  if (p.github) out.push(`<a class="btn" ${ext(p.github)}>${ICONS.github}${ui.code}</a>`);
  return out.length ? `<div class="actions">${out.join("")}</div>` : "";
}

// ---------- Inicio ----------

function renderProfile(p, c) {
  const ui = UI[lang];
  const initials = t(p.fullName || p.name).split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  const avatar = p.avatar
    ? `<img class="avatar" src="${esc(p.avatar)}" alt="${esc(t(p.fullName || p.name))}">`
    : `<div class="avatar" aria-hidden="true">${esc(initials)}</div>`;
  const links = [];
  if (c.email) links.push(`<a class="btn primary" href="mailto:${esc(c.email)}">${ICONS.mail}${ui.email}</a>`);
  const cv = t(c.cv);
  if (cv) links.push(`<a class="btn" ${ext(cv)}>${ICONS.file}${ui.cv}</a>`);
  if (c.github) links.push(`<a class="btn" ${ext(c.github)}>${ICONS.github}GitHub</a>`);
  if (c.linkedin) links.push(`<a class="btn" ${ext(c.linkedin)}>${ICONS.linkedin}LinkedIn</a>`);
  (c.others || []).forEach((o) => {
    const icon = ICONS[o.icon] || (o.icon ? `<i class="${esc(o.icon)}" aria-hidden="true"></i>` : ICONS.link);
    links.push(`<a class="btn" ${ext(o.url)}>${icon}${esc(t(o.name))}</a>`);
  });
  return { avatar, links: links.join("") };
}

function renderHome(d) {
  const ui = UI[lang];
  const p = d.profile || {}, c = d.contact || {};
  const sections = [], nav = [];
  const add = (id, html) => { sections.push(html); nav.push(id); };

  if (d.about) add("about", section("about", `<p class="prose">${esc(t(d.about))}</p>`));
  if (has(d.technologies)) add("tech", section("tech", `<div class="tech-list">${d.technologies.map((i) =>
    `<span class="tech">${i.icon ? `<i class="${esc(i.icon)} colored" aria-hidden="true"></i>` : ""}${esc(t(i.name))}</span>`).join("")}</div>`));
  if (has(d.experience)) add("experience", section("experience", `<div class="timeline">${d.experience.map(timelineCard).join("")}</div>`));
  if (has(d.projects)) {
    const featured = d.projects.filter((x) => x.featured);
    const list = (featured.length ? featured : d.projects).slice(0, 3);
    const head = `<div class="section-head"><h2>${esc(ui.titles.featured)}</h2><a class="more" href="proyectos.html">${esc(ui.allProjects)} (${d.projects.length}) →</a></div>`;
    add("projects", section("projects", `<div class="grid featured">${list.map((x) => `
      <a class="card feature" href="${projectUrl(x)}">
        ${cover(x)}
        <div class="body">
          <div class="card-head"><h3>${esc(t(x.title))}</h3>${statusChip(x.status)}</div>
          ${x.description ? `<p class="desc">${esc(t(x.description))}</p>` : ""}
          ${chips(x.technologies)}
        </div>
      </a>`).join("")}</div>`, head));
  }
  if (has(d.roadmap)) add("roadmap", section("roadmap", `<div class="list roadmap">${d.roadmap.map((i) => `
    <article class="card">
      <span class="check ${i.done ? "on" : ""}" aria-hidden="true">${i.done ? "✓" : ""}</span>
      <div class="grow">
        <div class="card-head"><h3>${esc(t(i.title))}</h3>${dateEl(i.date)}</div>
        ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
      </div>
    </article>`).join("")}</div>`));
  if (has(d.training)) add("training", section("training", `<div class="timeline">${d.training.map(timelineCard).join("")}</div>`));
  if (has(d.achievements)) add("achievements", section("achievements", `<div class="grid">${d.achievements.map((i) => `
    <article class="card">
      <div class="card-head"><h3>${esc(t(i.title))}</h3>${dateEl(i.date)}</div>
      ${i.issuer ? `<p class="sub">${esc(t(i.issuer))}</p>` : ""}
      ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
      ${i.url ? `<div class="actions"><a class="btn" ${ext(i.url)}>${ui.certificate} ↗</a></div>` : ""}
    </article>`).join("")}</div>`));
  if (has(d.extras)) add("extras", section("extras", `<div class="grid">${d.extras.map((i) => `
    <article class="card">
      <h3>${i.url ? `<a ${ext(i.url)}>${esc(t(i.title))} ↗</a>` : esc(t(i.title))}</h3>
      ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
    </article>`).join("")}</div>`));

  const { avatar, links } = renderProfile(p, c);
  return `<div class="layout">
    <aside class="profile">
      ${avatar}
      <h1>${esc(t(p.name))}</h1>
      ${p.fullName ? `<p class="fullname">${esc(t(p.fullName))}</p>` : ""}
      ${p.role ? `<p class="role">${esc(t(p.role))}</p>` : ""}
      ${p.location ? `<p class="location">📍 ${esc(t(p.location))}</p>` : ""}
      ${p.summary ? `<p class="summary">${esc(t(p.summary))}</p>` : ""}
      <div class="links">${links}</div>
      <ul class="side-nav">${nav.map((id) => `<li><a href="${id === "projects" ? "proyectos.html" : "#" + id}">${esc(ui.nav[id])}</a></li>`).join("")}</ul>
    </aside>
    <div class="content">${sections.join("")}</div>
  </div>`;
}

function timelineCard(i) {
  const ui = UI[lang], links = [];
  if (i.url) links.push(`<a class="btn" ${ext(i.url)}>${ui.more} ↗</a>`);
  if (i.certificate) links.push(`<a class="btn" ${ext(i.certificate)}>${ui.certificate} ↗</a>`);
  return `<article class="card">
    <div class="card-head">
      <div><h3>${esc(t(i.title))}</h3>${i.subtitle ? `<p class="sub">${esc(t(i.subtitle))}</p>` : ""}</div>
      ${dateEl(i.date)}
    </div>
    ${i.description ? `<p class="desc">${esc(t(i.description))}</p>` : ""}
    ${chips(i.technologies)}
    ${links.length ? `<div class="actions">${links.join("")}</div>` : ""}
  </article>`;
}

// ---------- Página de proyectos ----------

function renderProjects(d) {
  const ui = UI[lang];
  const items = d.projects || [];
  const statuses = ["in-progress", "done", "planned"].filter((s) => items.some((i) => i.status === s));
  const counts = statuses.map((s) => `<span class="count">${items.filter((i) => i.status === s).length} · ${esc(ui.status[s])}</span>`).join("");
  const filters = statuses.length > 1
    ? `<div class="filters" role="group">${["all", ...statuses].map((s) =>
        `<button type="button" class="filter" data-filter="${s}" aria-pressed="${s === projectFilter}">${esc(ui.filters[s])}</button>`).join("")}</div>`
    : "";
  const visible = items.filter((i) => projectFilter === "all" || i.status === projectFilter);
  return `<div class="page-hero">
      <h1>${esc(ui.titles.projects)}</h1>
      <p>${esc(ui.projectsIntro)}</p>
      <div class="counts">${counts}</div>
    </div>
    ${filters}
    <div class="project-list">${visible.map((p) => `
      <article class="card project-row" id="${esc(p.id)}">
        <a href="${projectUrl(p)}" aria-label="${esc(t(p.title))}">${cover(p)}</a>
        <div>
          <div class="card-head"><h2><a href="${projectUrl(p)}" style="color:inherit">${esc(t(p.title))}</a></h2>${statusChip(p.status)}</div>
          ${p.context ? `<p class="context">${esc(t(p.context))}</p>` : ""}
          ${p.date ? `<p class="sub">${dateEl(p.date)}</p>` : ""}
          ${p.description ? `<p class="desc">${esc(t(p.description))}</p>` : ""}
          ${chips(p.technologies)}
          ${projectLinks(p, true)}
        </div>
      </article>`).join("")}</div>`;
}

// ---------- Detalle de proyecto ----------

function renderProject(d) {
  const ui = UI[lang];
  const items = d.projects || [];
  const id = new URLSearchParams(location.search).get("id");
  const idx = items.findIndex((p) => p.id === id);
  if (idx < 0) return `<div class="detail"><a class="back" href="proyectos.html">← ${esc(ui.back)}</a><p class="error">${esc(ui.notFound)}</p></div>`;
  const p = items[idx];
  const prev = items[(idx - 1 + items.length) % items.length];
  const next = items[(idx + 1) % items.length];
  const facts = [];
  if (p.context) facts.push([ui.context, t(p.context)]);
  if (p.date) facts.push([ui.year, t(p.date)]);
  facts.push([ui.statusLabel, ui.status[p.status] || ""]);
  return `<article class="detail">
    <a class="back" href="proyectos.html">← ${esc(ui.back)}</a>
    ${cover(p, true)}
    <div class="detail-head"><h1>${esc(t(p.title))}</h1>${statusChip(p.status)}</div>
    ${p.description ? `<p class="lead">${esc(t(p.description))}</p>` : ""}
    ${projectLinks(p, false)}
    <div class="detail-grid">
      ${has(p.highlights) ? `<div class="card"><h3>${esc(ui.highlights)}</h3><ul class="highlights">${p.highlights.map((h) => `<li>${esc(t(h))}</li>`).join("")}</ul></div>` : ""}
      <div class="card facts">
        ${facts.map(([k, v]) => `<div><div class="label">${esc(k)}</div><div class="value">${esc(v)}</div></div>`).join("")}
        ${has(p.technologies) ? `<div><div class="label">${esc(ui.titles.tech)}</div>${chips(p.technologies)}</div>` : ""}
      </div>
    </div>
    ${items.length > 1 ? `<nav class="pager">
      <a class="card" href="${projectUrl(prev)}"><div class="label">← ${esc(ui.prev)}</div><strong>${esc(t(prev.title))}</strong></a>
      <a class="card next" href="${projectUrl(next)}"><div class="label">${esc(ui.next)} →</div><strong>${esc(t(next.title))}</strong></a>
    </nav>` : ""}
  </article>`;
}

// ---------- Render principal ----------

function render() {
  const d = DATA, ui = UI[lang];
  const name = t(d.profile?.name);
  document.documentElement.lang = lang;
  document.querySelector('meta[name="description"]').content = t(d.meta?.description);
  document.getElementById("brand").innerHTML = `${esc(name)}<span>.</span>`;
  document.getElementById("lang-toggle").textContent = ui.switchTo;
  document.getElementById("nav-links").innerHTML =
    `<li><a href="index.html"${PAGE === "home" ? ' aria-current="page"' : ""}>${esc(ui.home)}</a></li>` +
    `<li><a href="proyectos.html"${PAGE !== "home" ? ' aria-current="page"' : ""}>${esc(ui.titles.projects)}</a></li>`;

  const app = document.getElementById("app");
  if (PAGE === "projects") {
    document.title = `${ui.titles.projects} · ${name}`;
    app.innerHTML = renderProjects(d);
  } else if (PAGE === "project") {
    const p = (d.projects || []).find((x) => x.id === new URLSearchParams(location.search).get("id"));
    document.title = p ? `${t(p.title)} · ${name}` : `${ui.titles.projects} · ${name}`;
    app.innerHTML = renderProject(d);
  } else {
    document.title = t(d.meta?.title) || name;
    app.innerHTML = renderHome(d);
  }

  document.getElementById("footer").innerHTML =
    `<span>© ${new Date().getFullYear()} ${esc(t(d.profile?.fullName || name))}</span>` +
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
