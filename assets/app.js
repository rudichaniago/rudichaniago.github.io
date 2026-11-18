/* ================================================================
   KONFIGURASI — ubah bagian ini sesuai kebutuhan
   ================================================================ */
const CONFIG = {
  username: "rudichaniago",
  // Repositori yang tidak ingin ditampilkan
  exclude: ["desktop-tutorial", "bahanajardigital.github.io", "rudichaniago.github.io"],
  // Karya unggulan (tampil paling depan & bertanda ★). Contoh: "karya/lab-maya-simuset-studio.html"
  featured: ["karya/lab-maya-simuset-studio.html", "karya/Mengenal Ka Ga Nga.html"],
  // Topik fokus: selalu dicantumkan lebih dulu di filter topik.
  focusTopics: ["vokasi", "budaya", "tefa"],
  // Repositori koleksi: setiap file .html di dalamnya tampil sebagai kartu karya tersendiri.
  //   Thumbnail : gambar bernama sama (mis. "nama-aplikasi.jpg"), ideal 1200×630 px.
  //   Video demo: video bernama sama (mis. "nama-aplikasi.mp4"), ±10 detik, tanpa suara.
  //   Judul, deskripsi, tag, kategori, mapel, kelas dibaca dari <head> tiap file aplikasi:
  //     <title>, <meta name="description">, <meta name="keywords">,
  //     <meta name="kategori">, <meta name="mapel">, <meta name="kelas">, <meta property="og:image">
  collections: ["karya"],
  // Tag otomatis bila karya belum punya tag sama sekali.
  autoTags: {
    vokasi: /\b(smk|vokasi|kejuruan|kompetensi keahlian|broadcasting|perfilman|praktik)\b/i,
    budaya: /(budaya|aksara|tradisi|adat|warisan|kesenian|tradisional|leluhur)/i,
    tefa: /\b(tefa|teaching factory)\b/i
  },
  // Kategori otomatis (urutan menentukan prioritas). Bisa ditimpa dengan <meta name="kategori">.
  categories: [
    ["Lab Maya", /(simulator|simulasi|lab[ -]?maya|virtual lab|laboratorium)/i],
    ["Game Edukasi", /\b(game|gim|permainan)\b/i],
    ["Media Budaya", /(budaya|aksara|tradisi|adat|warisan|kesenian)/i]
  ],
  defaultCategory: "Media Pembelajaran",
  // Judul/deskripsi/tag/gambar kustom (opsional). Kunci: nama repositori, atau "karya/nama-file.html".
  overrides: {},
  // Cadangan bila GitHub API tidak dapat diakses.
  fallback: [
    { name: "karya/lab-maya-simuset-studio.html", label: "lab-maya-simuset-studio", collection: "karya", language: "HTML",
      title: "Lab Maya · SimuSet Studio", description: "Simulator set property, kamera, dan lighting studio untuk SMK Broadcasting & Perfilman: rancang set, atur kamera, bentuk cahaya, challenge praktik, K3LH, serta daftar alat & biaya sewa.",
      html_url: "https://github.com/rudichaniago/karya/blob/main/lab-maya-simuset-studio.html",
      homepage: "https://rudichaniago.github.io/karya/lab-maya-simuset-studio.html",
      image: "https://rudichaniago.github.io/karya/lab-maya-simuset-studio.jpg", topics: ["vokasi", "broadcasting", "simulator"],
      pushed_at: "2026-11-18T09:24:09Z", created_at: "2026-11-18T09:24:09Z" },
    { name: "karya/Mengenal Ka Ga Nga.html", label: "Mengenal Ka Ga Nga", collection: "karya", language: "HTML",
      title: "Mengenal Ka Ga Nga", description: "Mengenal Ka Ga Nga adalah media belajar digital interaktif tentang aksara warisan leluhur tanah Rejang. Pengguna menelusuri kisahnya, mengenal 27 huruf induknya, menguji diri lewat kuis, lalu menulis namanya sendiri dalam aksara Ka Ga Nga. Bisa dibuka langsung dari browser ponsel tanpa instalasi. Persembahan Yayasan Svara Bumei Betuah.",
      html_url: "https://github.com/rudichaniago/karya/blob/main/Mengenal%20Ka%20Ga%20Nga.html",
      homepage: "https://rudichaniago.github.io/karya/Mengenal%20Ka%20Ga%20Nga.html",
      image: "https://rudichaniago.github.io/karya/Mengenal%20Ka%20Ga%20Nga.jpg", topics: ["budaya", "aksara", "media-pembelajaran"],
      pushed_at: "2026-11-18T08:26:38Z", created_at: "2026-11-18T08:19:48Z" }
  ],
  // Periksa ulang GitHub tiap N menit selama halaman terbuka (berhenti saat tab disembunyikan).
  refreshMinutes: 5
};

/* ---------------- PROFIL PENYUSUN ----------------
   Baris yang dikosongkan ("") otomatis tidak ditampilkan.
   Foto: unggah assets/foto-profil.webp (rasio 4:5) lalu isi foto: "assets/foto-profil.webp". */
const PROFIL = {
  nama: "Dr. Rudi Nofindra",
  foto: "assets/foto-profil.webp",
  peran: "Guru SMK · Peneliti Teknologi Pendidikan · Penggerak Ekosistem Kebudayaan & Vokasi",
  bio: "Pendidik vokasi dan penggiat budaya yang berfokus pada teknologi pendidikan dan media digital: memberdayakan generasi muda sekaligus melestarikan warisan budaya. Setiap karya dirancang agar siswa dapat mencoba, salah, dan mengulang dengan aman, cukup dari browser.",
  biodata: [
    ["Nama", "Dr. Rudi Nofindra"],
    ["Profesi", "Guru SMK & Peneliti"],
    ["Pendidikan", "Doktor Teknologi Pendidikan"],
    ["Yayasan", "Pengelola Yayasan Svara Bumei Betuah"],
    ["Jejaring", "Pengurus Pusat Indonesia Creative Cities Network (ICCN)"]
  ],
  keahlian: [
    "Teknologi Pendidikan", "Desain Instruksional", "Pengembangan Kurikulum", "Pedagogi Vokasi",
    "Media Pembelajaran Interaktif Berbasis Web", "AI dalam Pendidikan", "Multimedia & Digital Learning",
    "Penelitian & Evaluasi Pembelajaran", "Desain Komunikasi Visual"
  ],
  kutipan: "Teknologi Pendidikan dan Inovasi Vokasi Harus Berakar Kuat pada Identitas Budaya untuk Melahirkan Transformasi Masyarakat yang Membebaskan dan Berkelanjutan.",
  sosial: {
    github: "https://github.com/rudichaniago",
    linkedin: "",
    instagram: "",
    youtube: ""
  }
};

/* ================================================================
   Utilitas
   ================================================================ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const prettify = (name) => name.replace(/[-_.]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const fmtDate = (iso) => new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const state = { items: [], view: [], kat: "Semua", topik: "", q: "", sort: "baru", synced: null };

const ICON = {
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
  gh: '<svg viewBox="0 0 24 24" class="gh"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/></svg>'
};

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.append(ta); ta.select();
    try { document.execCommand("copy"); } catch {}
    ta.remove();
  }
  toast("Tautan disalin. Tempel di grup kelas atau LMS.");
}

/* ================================================================
   Data: GitHub API + metadata tiap aplikasi
   ================================================================ */
const CACHE_KEY = "rn-karya-v6";
function cacheGet() {
  try {
    const { t, data } = JSON.parse(localStorage.getItem(CACHE_KEY) || "null") || {};
    return Array.isArray(data) ? { t, data } : null;
  } catch { return null; }
}
function cacheSet(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data })); } catch {}
}

async function fetchRepos() {
  const res = await fetch(`https://api.github.com/users/${CONFIG.username}/repos?per_page=100&sort=pushed`, {
    headers: { Accept: "application/vnd.github+json" }
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const data = (await res.json()).map((r) => ({
    name: r.name, description: r.description, language: r.language, html_url: r.html_url,
    homepage: r.homepage, has_pages: r.has_pages, topics: r.topics || [], fork: r.fork, archived: r.archived,
    size: r.size, pushed_at: r.pushed_at, created_at: r.created_at
  })).filter((r) => r.size > 0 || CONFIG.collections.includes(r.name));
  const expanded = (await Promise.all(data.map(expandCollection))).flat();
  cacheSet(expanded);
  return expanded;
}

// Repositori koleksi → satu entri per file .html; bila gagal, repositori tetap tampil apa adanya.
async function expandCollection(r) {
  if (!CONFIG.collections.includes(r.name)) return [r];
  try {
    const res = await fetch(`https://api.github.com/repos/${CONFIG.username}/${r.name}/contents/`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!res.ok) return [r];
    const all = await res.json();
    const pagesUrl = (f) => `https://${CONFIG.username}.github.io/${r.name}/${f.path.split("/").map(encodeURIComponent).join("/")}`;
    const fileUrl = (f) => (r.has_pages ? pagesUrl(f) : f.download_url);
    // Nama dasar untuk mencocokkan aplikasi ↔ thumbnail/video: huruf kecil, dan "-", "_", spasi dianggap sama.
    // Contoh: "teori-musik-dasar.html" cocok dengan "teori_musik_dasar.jpg" atau "Teori Musik Dasar.png".
    const base = (n) => n.replace(/\.[^.]+$/, "").toLowerCase().replace(/[\s_-]+/g, "-").replace(/^-|-$/g, "");
    const images = {}, videos = {};
    for (const f of all) {
      if (f.type !== "file") continue;
      if (/\.(jpe?g|png|webp)$/i.test(f.name)) images[base(f.name)] = fileUrl(f);
      if (/\.(mp4|webm)$/i.test(f.name)) videos[base(f.name)] = fileUrl(f);
    }
    const files = all.filter((f) => f.type === "file" && /\.html?$/i.test(f.name) && !/^(index|404)\.html?$/i.test(f.name));
    if (!files.length) return [r];
    // Metadata file baru/berubah dibaca dari commit terbaru (isi pasti sesuai versinya),
    // bukan dari GitHub Pages yang bisa masih menyajikan salinan lama beberapa menit.
    let commit = null;
    if (files.some((f) => !metaHas(f.sha))) {
      try {
        const c = await fetch(`https://api.github.com/repos/${CONFIG.username}/${r.name}/commits?per_page=1`, { headers: { Accept: "application/vnd.github+json" } });
        if (c.ok) commit = (await c.json())[0]?.sha || null;
      } catch {}
    }
    const encPath = (f) => f.path.split("/").map(encodeURIComponent).join("/");
    return Promise.all(files.map(async (f) => {
      const url = fileUrl(f);
      const meta = commit
        ? await readMetaCached(`https://raw.githubusercontent.com/${CONFIG.username}/${r.name}/${commit}/${encPath(f)}`, f.sha)
        : await readMetaCached(`${url}?v=${f.sha}`, metaHas(f.sha) ? f.sha : null);
      return {
        ...r,
        name: `${r.name}/${f.name}`,
        label: f.name.replace(/\.html?$/i, ""),
        collection: r.name,
        title: meta.title || null,
        description: meta.description || null,
        topics: meta.keywords || [],
        kategori: meta.kategori || null,
        mapel: meta.mapel || null,
        kelas: meta.kelas || null,
        seri: meta.seri || null,
        urutan: meta.urutan || null,
        language: "HTML",
        html_url: f.html_url,
        homepage: r.has_pages ? url : null,
        image: images[base(f.name)] || meta.image || null,
        video: videos[base(f.name)] || null,
        has_pages: false
      };
    }));
  } catch { return [r]; }
}

// Metadata disimpan per versi file (sha), jadi file besar hanya dibaca sekali per browser.
const META_KEY = "rn-meta-v2";
let metaStore = null;
function metaLoad() {
  if (!metaStore) {
    try { metaStore = JSON.parse(localStorage.getItem(META_KEY) || "{}"); } catch { metaStore = {}; }
  }
  return metaStore;
}
const metaHas = (sha) => !!(sha && metaLoad()[sha]);
async function readMetaCached(url, sha) {
  metaLoad();
  if (sha && metaStore[sha]) return metaStore[sha];
  const meta = await readMeta(url);
  if (sha && meta.ok) {
    metaStore[sha] = meta;
    try { localStorage.setItem(META_KEY, JSON.stringify(metaStore)); } catch {}
  }
  return meta;
}

// Baca metadata dari bagian <head> file aplikasi saja (berhenti di </head>; maks. 512 KB).
async function readMeta(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok || !res.body) return {};
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let html = "";
    while (html.length < 524288) {
      const { done, value } = await reader.read();
      if (done) break;
      html += dec.decode(value, { stream: true });
      if (/<\/head>/i.test(html)) break;
      // Metadata biasanya di awal <head>: berhenti bila sudah lewat 32 KB dan deskripsi sudah ditemukan.
      if (html.length > 32768 && /<meta[^>]+name=["']description["']/i.test(html)) break;
    }
    reader.cancel().catch(() => {});
    const doc = new DOMParser().parseFromString(html, "text/html");
    const get = (sel) => (doc.querySelector(sel)?.getAttribute("content") || "").trim();
    const image = get('meta[property="og:image"]');
    return {
      ok: true,
      title: get('meta[property="og:title"]') || (doc.querySelector("title")?.textContent || "").trim(),
      description: get('meta[name="description"]') || get('meta[property="og:description"]') || get('meta[name="twitter:description"]'),
      keywords: get('meta[name="keywords"]').split(",").map((k) => k.trim().toLowerCase().replace(/\s+/g, "-")).filter(Boolean),
      kategori: get('meta[name="kategori"]'),
      mapel: get('meta[name="mapel"]'),
      kelas: get('meta[name="kelas"]'),
      seri: get('meta[name="seri"]'),
      urutan: parseInt(get('meta[name="urutan"]'), 10) || 0,
      image: image ? new URL(image, url).href : ""
    };
  } catch { return {}; }
}

// Deskripsi cadangan bila aplikasi tidak punya <meta name="description">.
function autoDescription(title, r) {
  if (!r.collection && !r.homepage && !r.has_pages) return "";
  return `Media pembelajaran interaktif "${title}". Buka langsung di browser, tanpa instal.`;
}

function withAutoTags(topics, text) {
  if (topics.length) return topics;
  return Object.entries(CONFIG.autoTags).filter(([, re]) => re.test(text)).map(([t]) => t);
}

function categoryOf(text, topics) {
  const hay = `${text} ${topics.join(" ")}`;
  const hit = CONFIG.categories.find(([, re]) => re.test(hay));
  return hit ? hit[0] : CONFIG.defaultCategory;
}

function normalize(list) {
  return list
    .filter((r) => !CONFIG.exclude.includes(r.name) && !r.fork)
    .map((r) => {
      const o = CONFIG.overrides[r.name] || {};
      const title = o.title || r.title || prettify(r.label || r.name);
      const desc = o.description || r.description || autoDescription(title, r);
      const rawTopics = [...new Set([...(r.topics || []), ...(o.topics || [])].map((t) => t.toLowerCase()))];
      const topics = withAutoTags(rawTopics, `${title} ${desc}`);
      const live = r.homepage || (r.has_pages ? `https://${CONFIG.username}.github.io/${r.name}/` : null);
      const updated = r.pushed_at || r.created_at || new Date().toISOString();
      return {
        id: r.name,
        title, desc, topics,
        kategori: o.kategori || r.kategori || categoryOf(`${title} ${desc}`, topics),
        mapel: o.mapel || r.mapel || "",
        kelas: o.kelas || r.kelas || "",
        seri: o.seri || r.seri || "",
        urutan: +(o.urutan || r.urutan) || 0,
        image: o.image || r.image || null,
        video: o.video || r.video || null,
        live,
        code: r.html_url || `https://github.com/${CONFIG.username}/${r.name}`,
        updated,
        isNew: (Date.now() - new Date(r.created_at || updated)) / 86400000 < 7,
        featured: CONFIG.featured.includes(r.name)
      };
    })
    .map((i, _, all) => ({ ...i, seriTotal: i.seri ? all.filter((x) => x.seri === i.seri).length : 0 }));
}

// Kelompok seri (minimal 2 karya), diurutkan menurut <meta name="urutan">.
function seriesGroups() {
  const g = {};
  state.items.filter((i) => i.seri).forEach((i) => (g[i.seri] = g[i.seri] || []).push(i));
  return Object.entries(g)
    .filter(([, list]) => list.length > 1)
    .map(([name, list]) => [name, list.sort((a, b) => (a.urutan || 99) - (b.urutan || 99) || a.title.localeCompare(b.title, "id"))]);
}
const seriLabel = (i) => (i.seri ? `Seri ${i.seri}${i.urutan ? ` · ${i.urutan}/${i.seriTotal}` : ""}` : "");

function renderSeries() {
  const box = $("#series");
  const groups = seriesGroups();
  box.hidden = !groups.length;
  box.innerHTML = groups.map(([name, list]) => `
    <div class="series reveal">
      <div class="series__head">
        <div>
          <p class="eyebrow">Jalur Belajar</p>
          <h3>Seri ${esc(name)}</h3>
          <p>${list.length} karya · ikuti berurutan, dari dasar hingga mahir</p>
        </div>
        <button class="btn btn--ghost" type="button" data-series-filter="${esc(name)}">Tampilkan seri ini saja</button>
      </div>
      <ol class="series__steps">
        ${list.map((i, n) => `
        <li>
          <button type="button" data-series="${esc(name)}" data-n="${n}" aria-label="Bagian ${n + 1}: ${esc(i.title)}">
            <span class="series__img">${i.image ? `<img src="${esc(i.image)}" alt="" loading="lazy">` : ""}<span class="series__num">${n + 1}</span></span>
            <b>${esc(i.title)}</b>
            <small>${esc(i.kategori)}</small>
          </button>
        </li>`).join("")}
      </ol>
    </div>`).join("");
  observeReveal($$("#series .reveal"));
}

/* ================================================================
   Render: statistik, filter, kartu
   ================================================================ */
function countUp(el, n) {
  if (reduceMotion || !n) { el.textContent = n; return; }
  const start = performance.now(), dur = 900;
  const tick = (t) => {
    const p = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function renderStats() {
  const items = state.items;
  const topics = new Set(items.flatMap((i) => i.topics));
  const prev = renderStats._last || "";
  const key = `${items.length}|${topics.size}`;
  if (key === prev) return;
  renderStats._last = key;
  countUp($("#stTotal"), items.length);
  countUp($("#stLab"), items.filter((i) => i.kategori === "Lab Maya").length);
  countUp($("#stTopik"), topics.size);
}

function renderFilters() {
  const counts = {};
  state.items.forEach((i) => { counts[i.kategori] = (counts[i.kategori] || 0) + 1; });
  if (state.kat !== "Semua" && !counts[state.kat]) state.kat = "Semua";
  const kats = ["Semua", ...Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b, "id"))];
  $("#chips").innerHTML = kats.map((k) =>
    `<button class="chip" type="button" data-k="${esc(k)}" aria-pressed="${k === state.kat}">${esc(k)} <span>${k === "Semua" ? state.items.length : counts[k]}</span></button>`
  ).join("");

  const all = [...new Set(state.items.flatMap((i) => i.topics))];
  const ordered = [...CONFIG.focusTopics.filter((t) => all.includes(t)), ...all.filter((t) => !CONFIG.focusTopics.includes(t)).sort()];
  const seris = seriesGroups().map(([name]) => `seri:${name}`);
  if (state.topik && !ordered.includes(state.topik) && !seris.includes(state.topik)) state.topik = "";
  $("#topik").innerHTML = `<option value="">Semua topik</option>` +
    (seris.length ? `<optgroup label="Seri">${seris.map((v) => `<option value="${esc(v)}"${v === state.topik ? " selected" : ""}>Seri ${esc(v.slice(5))}</option>`).join("")}</optgroup>` : "") +
    `<optgroup label="Topik">${ordered.map((t) => `<option value="${esc(t)}"${t === state.topik ? " selected" : ""}>#${esc(t)}</option>`).join("")}</optgroup>`;
}

function thumbHTML(i, withVideo) {
  return `
    <span class="thumb__title">${esc(i.title)}</span>
    ${i.image ? `<img src="${esc(i.image)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
    ${withVideo && i.video ? `<video muted loop playsinline preload="none" data-src="${esc(i.video)}"></video>` : ""}`;
}

function card(i, idx) {
  const isLab = i.kategori === "Lab Maya";
  const openLabel = i.live ? (isLab ? "Buka Lab ↗" : i.kategori === "Alat Guru" ? "Buka Aplikasi ↗" : "Buka Karya ↗") : "Lihat Kode ↗";
  const flag = i.featured ? `<span class="badge badge--star">★ Unggulan</span>` : i.isNew ? `<span class="badge badge--new">Baru</span>` : "";
  return `
  <article class="card reveal" data-idx="${idx}">
    <button class="thumb" type="button" data-open="${idx}" aria-label="Lihat demo ${esc(i.title)}">
      ${thumbHTML(i, true)}
      <span class="thumb__hint">${i.video ? "▶ Lihat demo" : "⤢ Pratinjau"}</span>
    </button>
    <span class="badge badge--kat" data-k="${esc(i.kategori)}">${esc(i.kategori)}</span>
    ${flag}
    <div class="card__body">
      ${i.seri ? `<p class="card__seri">${esc(seriLabel(i))}</p>` : ""}
      <p class="card__meta">
        ${i.mapel ? `<span class="mapel">${esc(i.mapel)}</span>` : ""}
        ${i.kelas ? `<span>${esc(i.kelas)}</span>` : ""}
        <span>Diperbarui ${fmtDate(i.updated)}</span>
      </p>
      <h3>${esc(i.title)}</h3>
      <p class="card__desc${i.desc ? "" : " muted"}" title="${esc(i.desc)}">${esc(i.desc || "Deskripsi belum ditambahkan.")}</p>
      ${i.topics.length ? `<div class="tags">${i.topics.slice(0, 5).map((t) => `<span>#${esc(t)}</span>`).join("")}</div>` : ""}
      <div class="card__act">
        <a class="btn btn--primary" href="${esc(i.live || i.code)}" target="_blank" rel="noopener">${openLabel}</a>
        ${i.live ? `<button class="icon-btn" type="button" data-copy="${esc(i.live)}" aria-label="Salin tautan ${esc(i.title)}" title="Salin tautan">${ICON.copy}</button>` : ""}
        <a class="icon-btn" href="${esc(i.code)}" target="_blank" rel="noopener" aria-label="Kode sumber ${esc(i.title)}" title="Kode sumber">${ICON.gh}</a>
      </div>
    </div>
  </article>`;
}

function renderGrid() {
  const q = state.q.trim().toLowerCase();
  const list = state.items.filter((i) =>
    (state.kat === "Semua" || i.kategori === state.kat) &&
    (!state.topik || (state.topik.startsWith("seri:") ? i.seri === state.topik.slice(5) : i.topics.includes(state.topik))) &&
    (!q || [i.title, i.desc, i.kategori, i.mapel, i.kelas, i.seri, ...i.topics].join(" ").toLowerCase().includes(q))
  );
  const by = {
    baru: (a, b) => b.updated.localeCompare(a.updated),
    az: (a, b) => a.title.localeCompare(b.title, "id"),
    unggulan: (a, b) => (b.featured - a.featured) || b.updated.localeCompare(a.updated)
  }[state.sort];
  list.sort(state.topik.startsWith("seri:") ? (a, b) => (a.urutan || 99) - (b.urutan || 99) : by);
  state.view = list;
  $("#grid").innerHTML = list.map(card).join("");
  $("#empty").hidden = list.length > 0;
  $("#empty").textContent = state.items.length
    ? "Tidak ada karya yang cocok. Coba kata kunci lain."
    : "Karya sedang disiapkan. Karya baru akan tampil otomatis di sini.";
  observeReveal($$("#grid .reveal"));
}

function renderSync(ok) {
  const el = $("#syncInfo");
  el.classList.toggle("ok", ok);
  el.textContent = ok
    ? `Tersinkron dengan GitHub · diperbarui ${new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}`
    : state.items.length ? "Menampilkan daftar tersimpan (GitHub sedang tidak dapat diakses)" : "GitHub sedang tidak dapat diakses";
}

function render(raw) {
  const sig = JSON.stringify(raw);
  if (sig === render._sig) return;
  render._sig = sig;
  state.items = normalize(raw);
  renderStats();
  renderFilters();
  renderGrid();
  renderReel();
  renderTheater();
  renderProfileStats();
  renderSeries();
}

/* ================================================================
   Hero: cuplikan berganti (reel)
   ================================================================ */
const reel = { list: [], i: 0, timer: null, start: 0, dur: 6000 };
function reelItems() {
  const withImg = state.items.filter((i) => i.image || i.video);
  const src = withImg.length ? withImg : state.items;
  return [...src].sort((a, b) => (b.featured - a.featured) || b.updated.localeCompare(a.updated)).slice(0, 8);
}
function renderReel() {
  reel.list = reelItems();
  const screen = $("#reelScreen");
  $$(".slide", screen).forEach((s) => s.remove());
  reel.list.forEach((i, n) => {
    let el;
    if (i.video) {
      el = document.createElement("video");
      el.muted = true; el.playsInline = true; el.preload = "metadata"; el.src = i.video;
      if (i.image) el.poster = i.image;
    } else if (i.image) {
      el = document.createElement("img");
      el.src = i.image; el.alt = ""; el.decoding = "async";
    } else {
      el = document.createElement("div");
      el.className = "thumb";
      el.innerHTML = `<span class="thumb__title">${esc(i.title)}</span>`;
    }
    el.classList.add("slide");
    el.dataset.n = n;
    screen.prepend(el);
  });
  $("#reelDots").innerHTML = reel.list.map((i, n) =>
    `<button type="button" data-n="${n}" aria-label="Cuplikan ${n + 1}: ${esc(i.title)}"></button>`).join("");
  reelGo(Math.min(reel.i, Math.max(0, reel.list.length - 1)));
}
function reelGo(n) {
  if (!reel.list.length) { $("#reelJudul").textContent = "Belum ada karya"; return; }
  reel.i = (n + reel.list.length) % reel.list.length;
  const i = reel.list[reel.i];
  $$("#reelScreen .slide").forEach((s) => {
    const on = +s.dataset.n === reel.i;
    s.classList.toggle("on", on);
    if (s.tagName === "VIDEO") { if (on) { s.currentTime = 0; s.play().catch(() => {}); } else s.pause(); }
  });
  $$("#reelDots button").forEach((d) => d.setAttribute("aria-current", +d.dataset.n === reel.i));
  $("#reelKat").textContent = [i.kategori, i.mapel].filter(Boolean).join(" · ");
  $("#reelJudul").textContent = i.title;
  $("#reelUrl").textContent = (i.live || i.code).replace(/^https?:\/\//, "").replace(/%20/g, " ");
  reel.start = performance.now();
  clearTimeout(reel.timer);
  if (!reduceMotion && reel.list.length > 1) reel.timer = setTimeout(() => reelGo(reel.i + 1), reel.dur);
}
function reelProgress(t) {
  const p = reduceMotion ? 0 : Math.min(1, (t - reel.start) / reel.dur);
  $("#reelProg").style.width = `${p * 100}%`;
  requestAnimationFrame(reelProgress);
}

/* ================================================================
   Bagian Pratinjau (teater + daftar)
   ================================================================ */
const th = { i: 0, timer: null };
function renderTheater() {
  const list = [...state.items].sort((a, b) => (b.featured - a.featured) || b.updated.localeCompare(a.updated));
  th.list = list;
  $("#playlist").innerHTML = list.map((i, n) => `
    <li><button type="button" data-n="${n}">
      <span class="pl__img">${i.image ? `<img src="${esc(i.image)}" alt="" loading="lazy">` : ""}</span>
      <span><b>${esc(i.title)}</b><small>${esc(i.kategori)}</small></span>
    </button></li>`).join("");
  $("#pratinjau").hidden = !list.length;
  if (list.length) thGo(Math.min(th.i, list.length - 1), false);
}
function thGo(n, scroll = true) {
  const list = th.list;
  if (!list.length) return;
  th.i = (n + list.length) % list.length;
  const i = list[th.i];
  $("#thScreen").innerHTML = i.video
    ? `<video src="${esc(i.video)}" ${i.image ? `poster="${esc(i.image)}"` : ""} muted playsinline controls autoplay></video>`
    : `<span class="thumb__title">${esc(i.title)}</span>${i.image ? `<img src="${esc(i.image)}" alt="Tampilan ${esc(i.title)}">` : ""}`;
  $("#thMeta").textContent = [i.kategori, i.mapel, i.kelas].filter(Boolean).join(" · ");
  $("#thJudul").textContent = i.title;
  $("#thDesk").textContent = i.desc || "";
  $$("#playlist button").forEach((b) => b.setAttribute("aria-current", +b.dataset.n === th.i));
  if (scroll) $(`#playlist button[data-n="${th.i}"]`)?.scrollIntoView({ block: "nearest", inline: "nearest" });
  clearTimeout(th.timer);
  const v = $("#thScreen video");
  if ($("#thAuto").checked && !reduceMotion && list.length > 1) {
    if (v) v.onended = () => thGo(th.i + 1);
    else th.timer = setTimeout(() => thGo(th.i + 1), 7000);
  }
}

/* ================================================================
   Jendela demo (modal)
   ================================================================ */
const modal = { list: [], i: 0, tab: "pratinjau" };
function openModal(list, idx, tab = "pratinjau") {
  modal.list = list; modal.i = idx;
  const dlg = $("#modal");
  if (!dlg.open) dlg.showModal();
  showItem(tab);
}
function showItem(tab = modal.tab) {
  const i = modal.list[modal.i];
  if (!i) return;
  $("#mMeta").textContent = [seriLabel(i), i.kategori, i.mapel, i.kelas].filter(Boolean).join(" · ");
  $("#mJudul").textContent = i.title;
  $("#mDesk").textContent = i.desc || "";
  const url = i.live || i.code;
  $("#mOpen").href = url;
  $("#mOpen").textContent = i.live ? "Buka di tab baru ↗" : "Lihat kode ↗";
  $("#mCopy").dataset.url = url;
  $("#mUrl").textContent = url.replace(/%20/g, " ");
  $("#mPreview").innerHTML = i.video
    ? `<video src="${esc(i.video)}" ${i.image ? `poster="${esc(i.image)}"` : ""} muted loop playsinline controls autoplay></video>`
    : i.image ? `<img src="${esc(i.image)}" alt="Tampilan ${esc(i.title)}">` : `<div class="thumb__title">${esc(i.title)}</div>`;
  $("#mFrame").dataset.src = i.live || "";
  $("#mFrame").removeAttribute("src");
  $('.tabs [data-tab="live"]').disabled = !i.live;
  renderQr(url);
  setTab(tab === "live" && !i.live ? "pratinjau" : tab);
}
function setTab(tab) {
  modal.tab = tab;
  $(".modal__stage").dataset.tab = tab;
  $$(".tabs [data-tab]").forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === tab));
  $$(".modal__stage .pane").forEach((p) => { p.hidden = p.dataset.pane !== tab; });
  const f = $("#mFrame");
  if (tab === "live" && f.dataset.src && f.getAttribute("src") !== f.dataset.src) f.src = f.dataset.src;
  if (tab !== "live") f.removeAttribute("src");
  const v = $("#mPreview video");
  if (v) { if (tab === "pratinjau") v.play().catch(() => {}); else v.pause(); }
}
function renderQr(url) {
  const box = $("#mQr");
  if (typeof qrcode !== "function") { box.textContent = "QR tidak tersedia"; return; }
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  box.innerHTML = qr.createSvgTag({ cellSize: 5, margin: 0, scalable: true, alt: "QR Code tautan karya" });
}
function closeModal() {
  $("#mFrame").removeAttribute("src");
  $("#mPreview").innerHTML = "";
  $("#modal").close();
}

/* ================================================================
   Profil
   ================================================================ */
function renderProfile() {
  const p = PROFIL;
  $("#pfNama").textContent = p.nama;
  $("#heroNama").textContent = p.nama;
  $("#pfPeran").textContent = p.peran;
  $("#pfBio").textContent = p.bio;
  const initials = p.nama.replace(/^(dr|prof|ir)\.?\s+/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  $("#pfFoto").innerHTML = `<span>${esc(initials)}</span>`;
  $("#heroAva").textContent = initials;
  if (p.foto) {
    const img = new Image();
    img.onload = () => {
      $("#pfFoto").innerHTML = `<img src="${esc(p.foto)}" alt="Foto ${esc(p.nama)}" loading="lazy">`;
      $("#heroAva").innerHTML = `<img src="${esc(p.foto)}" alt="">`;
    };
    img.src = p.foto;
  }
  $("#pfBiodata").innerHTML = p.biodata.filter(([, v]) => v).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
  $("#pfKeahlian").innerHTML = p.keahlian.map((k) => `<li>${esc(k)}</li>`).join("");
  $("#pfQuote").textContent = `“${p.kutipan}”`;
  $("#pfQuote").hidden = !p.kutipan;
  const soc = Object.entries(p.sosial).filter(([, u]) => u);
  const label = { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram", youtube: "YouTube" };
  $("#pfSosial").innerHTML = soc.map(([k, u]) =>
    `<a class="icon-btn" href="${esc(u)}" target="_blank" rel="noopener" aria-label="${label[k]}" title="${label[k]}">${ICON[k === "github" ? "gh" : k]}</a>`).join("");
  $("#footLinks").innerHTML = soc.map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${label[k]}</a>`).join("");
}
function renderProfileStats() {
  const items = state.items;
  const topics = [...new Set(items.flatMap((i) => i.topics))];
  const kats = new Set(items.map((i) => i.kategori));
  const latest = items.map((i) => i.updated).sort().pop();
  $("#pfStats").innerHTML = [
    [items.length, "Karya interaktif"],
    [items.filter((i) => i.kategori === "Lab Maya").length, "Lab maya & simulator"],
    [kats.size, "Kategori media"],
    [latest ? fmtDate(latest).split(" ").slice(1).join(" ") : "–", "Pembaruan terakhir"]
  ].map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("");
  $("#pfBidang").innerHTML = topics.length
    ? topics.map((t) => `<li>#${esc(t)}</li>`).join("")
    : `<li>Segera hadir</li>`;
}

/* ================================================================
   Animasi muncul & interaksi
   ================================================================ */
const io = "IntersectionObserver" in window && !reduceMotion
  ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" })
  : null;
function observeReveal(els) {
  els.forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
}

function bind() {
  // Tema
  $("#themeBtn").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("rn-theme", root.dataset.theme); } catch {}
  });

  // Filter & pencarian
  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    state.kat = b.dataset.k;
    $$("#chips .chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
    renderGrid();
  });
  $("#q").addEventListener("input", (e) => { state.q = e.target.value; renderGrid(); });
  $("#topik").addEventListener("change", (e) => { state.topik = e.target.value; renderGrid(); });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });

  // Kartu: buka demo, salin tautan, pratinjau video saat kursor di atas
  $("#grid").addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) return openModal(state.view, +open.dataset.open);
    const cp = e.target.closest("[data-copy]");
    if (cp) copyText(cp.dataset.copy);
  });
  $("#grid").addEventListener("pointerover", (e) => {
    const c = e.target.closest(".card");
    const v = c && $(".thumb video", c);
    if (!v || c.classList.contains("playing")) return;
    if (!v.src) v.src = v.dataset.src;
    v.play().then(() => c.classList.add("playing")).catch(() => {});
    c.addEventListener("pointerleave", () => { v.pause(); c.classList.remove("playing"); }, { once: true });
  });

  // Seri
  $("#series").addEventListener("click", (e) => {
    const f = e.target.closest("[data-series-filter]");
    if (f) {
      state.topik = `seri:${f.dataset.seriesFilter}`;
      renderFilters();
      renderGrid();
      $("#grid").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      return;
    }
    const b = e.target.closest("[data-series]");
    if (b) {
      const g = seriesGroups().find(([name]) => name === b.dataset.series);
      if (g) openModal(g[1], +b.dataset.n);
    }
  });

  // Hero
  $("#btnAcak").addEventListener("click", () => {
    const pool = state.items.filter((i) => i.live);
    if (!pool.length) return toast("Belum ada karya yang bisa dibuka.");
    openModal(pool, Math.floor(Math.random() * pool.length), "live");
  });
  $("#reelOpen").addEventListener("click", () => { if (reel.list.length) openModal(reel.list, reel.i); });
  $("#reelDots").addEventListener("click", (e) => { const d = e.target.closest("[data-n]"); if (d) reelGo(+d.dataset.n); });

  // Pratinjau
  $("#playlist").addEventListener("click", (e) => { const b = e.target.closest("[data-n]"); if (b) thGo(+b.dataset.n); });
  $("#thCoba").addEventListener("click", () => openModal(th.list, th.i, "live"));
  $("#thAuto").addEventListener("change", () => thGo(th.i, false));

  // Modal
  const dlg = $("#modal");
  $$(".tabs [data-tab]").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));
  $("[data-close]", dlg).addEventListener("click", closeModal);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeModal(); });
  dlg.addEventListener("cancel", (e) => { e.preventDefault(); closeModal(); });
  $("#mPrev").addEventListener("click", () => { modal.i = (modal.i - 1 + modal.list.length) % modal.list.length; showItem(); });
  $("#mNext").addEventListener("click", () => { modal.i = (modal.i + 1) % modal.list.length; showItem(); });
  $("#mCopy").addEventListener("click", (e) => copyText(e.currentTarget.dataset.url));
  document.addEventListener("keydown", (e) => {
    if (!dlg.open || e.target.closest("input, textarea, select")) return;
    if (e.key === "ArrowLeft") $("#mPrev").click();
    if (e.key === "ArrowRight") $("#mNext").click();
  });
}

/* ================================================================
   Mulai
   ================================================================ */
async function sync() {
  try {
    render(await fetchRepos());
    renderSync(true);
  } catch {
    if (!state.items.length) render(CONFIG.fallback);
    renderSync(false);
  }
}

function init() {
  $("#yr").textContent = new Date().getFullYear();
  bind();
  renderProfile();
  observeReveal($$(".reveal"));
  requestAnimationFrame(reelProgress);
  const cached = cacheGet();
  if (cached) render(cached.data);
  sync();
  setInterval(() => { if (!document.hidden) sync(); }, CONFIG.refreshMinutes * 60000);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { clearTimeout(reel.timer); clearTimeout(th.timer); }
    else { reelGo(reel.i); thGo(th.i, false); }
  });
}

init();
