/* ================================================================
   KONFIGURASI — ubah bagian ini sesuai kebutuhan
   ================================================================ */
const CONFIG = {
  username: "rudichaniago",
  // Repositori yang tidak ingin ditampilkan
  exclude: ["desktop-tutorial", "bahanajardigital.github.io", "rudichaniago.github.io"],
  // Repositori unggulan: tampil paling depan
  featured: [],
  // Topik fokus: tampil sebagai filter (#vokasi, #budaya, #tefa) bila dipakai minimal 1 repositori.
  // Topik diambil dari Topics di GitHub + "topics" di overrides di bawah.
  focusTopics: ["vokasi", "budaya", "tefa"],
  // Repositori koleksi: setiap file .html di dalamnya tampil sebagai kartu karya tersendiri.
  // Tambahkan file HTML baru ke repositori ini, kartunya muncul otomatis.
  // Thumbnail otomatis: unggah gambar bernama sama (mis. "Nama Karya.jpg" untuk "Nama Karya.html").
  // Format: .jpg/.jpeg/.png/.webp, ukuran ideal 1200×630 px.
  // Judul, deskripsi, tag, dan gambar dibaca otomatis dari <head> tiap file aplikasi:
  //   <title>, <meta name="description">, <meta name="keywords">, <meta property="og:image">
  collections: ["karya"],
  // Tag otomatis bila karya belum punya tag sama sekali: tag dipasang jika judul/deskripsi memuat kata kuncinya.
  autoTags: {
    vokasi: /\b(smk|vokasi|kejuruan|kompetensi keahlian|broadcasting|perfilman|praktik)\b/i,
    budaya: /(budaya|aksara|tradisi|adat|warisan|kesenian|tradisional|leluhur)/i,
    tefa: /\b(tefa|teaching factory)\b/i
  },
  // Judul & deskripsi kustom (opsional), menimpa data otomatis. Tidak wajib diisi.
  // Untuk karya di repositori koleksi, kuncinya "namarepo/nama file.html".
  // Tambahkan image: "https://..." untuk memasang thumbnail manual pada kartu mana pun.
  overrides: {
    "pendidikanmusikunp": { title: "Pendidikan Musik UNP", description: "Bank data pendidikan musik.", topics: ["budaya"] },
    "pendidikanmusik": { title: "Pendidikan Musik", description: "Bank data pendidikan musik.", topics: ["budaya"] },
    "rudino": { title: "Rudino", description: "Media pembelajaran vokasi, seni budaya, dan Teaching Factory (TEFA).", topics: ["vokasi", "budaya", "tefa"] }
  },
  // Cadangan bila GitHub API tidak dapat diakses (batas akses tercapai, offline, dll.)
  fallback: [
    { name: "karya/lab-maya-simuset-studio.html", label: "lab-maya-simuset-studio", collection: "karya", language: "HTML",
      title: "Lab Maya · SimuSet Studio", description: "Simulator set property, kamera, dan lighting studio untuk SMK Broadcasting & Perfilman: rancang set, atur kamera, bentuk cahaya, challenge praktik, K3LH, serta daftar alat & biaya sewa.",
      html_url: "https://github.com/rudichaniago/karya/blob/main/lab-maya-simuset-studio.html",
      homepage: "https://rudichaniago.github.io/karya/lab-maya-simuset-studio.html", has_pages: false,
      image: "https://rudichaniago.github.io/karya/lab-maya-simuset-studio.jpg", topics: ["vokasi", "broadcasting", "simulator"], fork: false,
      stargazers_count: 0, forks_count: 0, pushed_at: "2026-11-18T09:24:09Z", created_at: "2026-11-18T09:24:09Z" },
    { name: "karya/Mengenal Ka Ga Nga.html", label: "Mengenal Ka Ga Nga", collection: "karya", language: "HTML",
      title: "Mengenal Ka Ga Nga", description: "Media pembelajaran interaktif aksara Ka Ga Nga (surat ulu) Sumatra bagian selatan: kisah, peta persebaran, kartu 27 huruf, kuis, dan alih aksara nama.",
      html_url: "https://github.com/rudichaniago/karya/blob/main/Mengenal%20Ka%20Ga%20Nga.html",
      homepage: "https://rudichaniago.github.io/karya/Mengenal%20Ka%20Ga%20Nga.html", has_pages: false,
      image: "https://rudichaniago.github.io/karya/Mengenal%20Ka%20Ga%20Nga.jpg", topics: ["budaya", "aksara", "media-pembelajaran"], fork: false,
      stargazers_count: 0, forks_count: 0, pushed_at: "2026-11-18T08:26:38Z", created_at: "2026-11-18T08:19:48Z" }
  ]
};

const LANG_COLORS = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", HTML: "#e34c26", CSS: "#563d7c", Python: "#3572A5",
  PHP: "#4F5D95", Java: "#b07219", Dart: "#00B4AB", Kotlin: "#A97BFF", Vue: "#41b883",
  "Jupyter Notebook": "#DA5B0B", Shell: "#89e051", Svelte: "#ff3e00", Go: "#00ADD8"
};

const $ = (s) => document.querySelector(s);
const state = { repos: [], filter: "Semua", q: "", sort: "pushed" };

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const prettify = (name) => name.replace(/[-_.]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const fmtDate = (iso) => new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });

function relTime(iso) {
  const d = (Date.now() - new Date(iso)) / 86400000;
  if (d < 1) return "hari ini";
  if (d < 30) return `${Math.floor(d)} hari lalu`;
  if (d < 365) return `${Math.floor(d / 30)} bulan lalu`;
  return `${Math.floor(d / 365)} tahun lalu`;
}

const CACHE_KEY = "bad-repos-v5";
function cacheGet() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { t, data } = JSON.parse(raw);
    return Array.isArray(data) ? { t, data } : null;
  } catch { return null; }
}
function cacheSet(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data })); } catch {}
}

// Selalu ambil data terbaru dari GitHub; salinan di browser hanya dipakai agar halaman tampil seketika.
async function fetchRepos() {
  const res = await fetch(`https://api.github.com/users/${CONFIG.username}/repos?per_page=100&sort=pushed`, {
    headers: { Accept: "application/vnd.github+json" }
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const data = (await res.json()).map((r) => ({
    name: r.name, description: r.description, language: r.language, html_url: r.html_url,
    homepage: r.homepage, has_pages: r.has_pages, topics: r.topics || [], fork: r.fork, archived: r.archived,
    stargazers_count: r.stargazers_count, forks_count: r.forks_count, pushed_at: r.pushed_at, created_at: r.created_at
  }));
  const expanded = (await Promise.all(data.map(expandCollection))).flat();
  cacheSet(expanded);
  return expanded;
}

// Ubah repositori koleksi menjadi satu entri per file .html; bila gagal, repositori tetap tampil apa adanya.
async function expandCollection(r) {
  if (!CONFIG.collections.includes(r.name)) return [r];
  try {
    const res = await fetch(`https://api.github.com/repos/${CONFIG.username}/${r.name}/contents/`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!res.ok) return [r];
    const all = await res.json();
    const pagesUrl = (f) => `https://${CONFIG.username}.github.io/${r.name}/${f.path.split("/").map(encodeURIComponent).join("/")}`;
    const images = {};
    all.filter((f) => f.type === "file" && /\.(jpe?g|png|webp)$/i.test(f.name))
      .forEach((f) => { images[f.name.replace(/\.[^.]+$/, "").toLowerCase()] = r.has_pages ? pagesUrl(f) : f.download_url; });
    const files = all.filter((f) => f.type === "file" && /\.html?$/i.test(f.name) && !/^(index|404)\.html?$/i.test(f.name));
    if (!files.length) return [r];
    return Promise.all(files.map(async (f) => {
      const url = r.has_pages ? pagesUrl(f) : f.download_url;
      const meta = await readMeta(url);
      return {
        ...r,
        name: `${r.name}/${f.name}`,
        label: f.name.replace(/\.html?$/i, ""),
        collection: r.name,
        title: meta.title || null,
        description: meta.description || null,
        topics: meta.keywords || [],
        language: "HTML",
        html_url: f.html_url,
        homepage: r.has_pages ? url : null,
        image: images[f.name.replace(/\.html?$/i, "").toLowerCase()] || meta.image || null,
        has_pages: false
      };
    }));
  } catch { return [r]; }
}

// Baca metadata dari awal file aplikasi saja (maks. 32 KB), tanpa mengunduh seluruh file.
async function readMeta(url) {
  try {
    const res = await fetch(url);
    if (!res.ok || !res.body) return {};
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let html = "";
    while (html.length < 32768) {
      const { done, value } = await reader.read();
      if (done) break;
      html += dec.decode(value, { stream: true });
      if (/<\/head>/i.test(html)) break;
    }
    reader.cancel().catch(() => {});
    const doc = new DOMParser().parseFromString(html, "text/html");
    const get = (sel) => (doc.querySelector(sel)?.getAttribute("content") || "").trim();
    const image = get('meta[property="og:image"]');
    return {
      title: get('meta[property="og:title"]') || (doc.querySelector("title")?.textContent || "").trim(),
      description: get('meta[name="description"]') || get('meta[property="og:description"]'),
      keywords: get('meta[name="keywords"]').split(",").map((k) => k.trim().toLowerCase().replace(/\s+/g, "-")).filter(Boolean),
      image: image ? new URL(image, url).href : ""
    };
  } catch { return {}; }
}

function withAutoTags(topics, title, desc) {
  if (topics.length) return topics;
  const text = `${title || ""} ${desc || ""}`;
  return Object.entries(CONFIG.autoTags).filter(([, re]) => re.test(text)).map(([t]) => t);
}

function normalize(list) {
  return list
    .filter((r) => !CONFIG.exclude.includes(r.name) && !r.fork)
    .map((r) => {
      const o = CONFIG.overrides[r.name] || {};
      const live = r.homepage || (r.has_pages ? `https://${CONFIG.username}.github.io/${r.name}/` : null);
      return {
        ...r,
        title: o.title || r.title || prettify(r.label || r.name),
        desc: o.description || r.description || "",
        image: o.image || r.image || null,
        topics: withAutoTags([...new Set([...(r.topics || []), ...(o.topics || [])].map((t) => t.toLowerCase()))], o.title || r.title || r.label || r.name, o.description || r.description),
        html_url: r.html_url || `https://github.com/${CONFIG.username}/${r.name}`,
        live,
        featured: CONFIG.featured.includes(r.name)
      };
    });
}

function renderStats(repos) {
  $("#stat-repos").textContent = repos.length;
  $("#stat-pages").textContent = repos.filter((r) => r.live).length;
  $("#stat-langs").textContent = new Set(repos.map((r) => r.language).filter(Boolean)).size || "–";
  const latest = repos.map((r) => r.pushed_at).sort().pop();
  const el = $("#stat-updated");
  el.textContent = latest ? relTime(latest) : "–";
  el.classList.add("small");
}

function renderFilters(repos) {
  const langs = [...new Set(repos.map((r) => r.language || "Lainnya"))].sort();
  const topics = CONFIG.focusTopics.filter((t) => repos.some((r) => r.topics.includes(t))).map((t) => `#${t}`);
  const opts = ["Semua", ...topics, ...(repos.some((r) => r.live) ? ["Situs Aktif"] : []), ...langs];
  $("#filters").innerHTML = opts.map((l) =>
    `<button class="chip" type="button" data-f="${esc(l)}" aria-pressed="${l === state.filter}">${esc(l)}</button>`
  ).join("");
}

function card(r) {
  const color = LANG_COLORS[r.language] || "var(--gold)";
  const badge = r.live ? `<span class="badge badge--live">Live</span>` : r.featured ? `<span class="badge">Unggulan</span>` : r.archived ? `<span class="badge">Arsip</span>` : "";
  return `
  <article class="card">
    <div class="card__thumb" aria-hidden="true">
      <span>${esc(r.title)}</span>
      ${r.image ? `<img src="${esc(r.image)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
    </div>
    ${r.collection ? `<p class="card__kicker">Koleksi ${esc(prettify(r.collection))}</p>` : ""}
    <div class="card__top">
      <h3><a href="${esc(r.live || r.html_url)}" target="_blank" rel="noopener">${esc(r.title)}</a></h3>
      ${badge}
    </div>
    <p class="${r.desc ? "" : "muted"}">${esc(r.desc || "Deskripsi belum ditambahkan.")}</p>
    ${r.topics.length ? `<div class="topics">${r.topics.slice(0, 5).map((t) => `<span>#${esc(t)}</span>`).join("")}</div>` : ""}
    <div class="meta">
      <span><i class="dot" style="background:${color}"></i>${esc(r.language || "Lainnya")}</span>
      ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}
      <span title="${esc(fmtDate(r.pushed_at))}">Diperbarui ${relTime(r.pushed_at)}</span>
    </div>
    <div class="card__links">
      <a href="${esc(r.html_url)}" target="_blank" rel="noopener">Kode sumber ↗</a>
      ${r.live ? `<a href="${esc(r.live)}" target="_blank" rel="noopener">Buka situs ↗</a>` : ""}
    </div>
  </article>`;
}

function renderGrid() {
  const q = state.q.trim().toLowerCase();
  let list = state.repos.filter((r) => {
    if (state.filter === "Situs Aktif" && !r.live) return false;
    if (state.filter.startsWith("#")) { if (!r.topics.includes(state.filter.slice(1))) return false; }
    else if (!["Semua", "Situs Aktif"].includes(state.filter) && (r.language || "Lainnya") !== state.filter) return false;
    if (!q) return true;
    return [r.title, r.name, r.desc, ...r.topics].join(" ").toLowerCase().includes(q);
  });
  const by = {
    pushed: (a, b) => b.pushed_at.localeCompare(a.pushed_at),
    created: (a, b) => b.created_at.localeCompare(a.created_at),
    name: (a, b) => a.title.localeCompare(b.title, "id"),
    stars: (a, b) => b.stargazers_count - a.stargazers_count
  }[state.sort];
  list.sort((a, b) => (b.featured - a.featured) || by(a, b));
  $("#grid").innerHTML = list.map(card).join("");
  $("#empty").hidden = list.length > 0;
}

function bind() {
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    state.filter = b.dataset.f;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
    renderGrid();
  });
  $("#q").addEventListener("input", (e) => { state.q = e.target.value; renderGrid(); });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
}

async function init() {
  $("#year").textContent = new Date().getFullYear();
  bind();
  const cached = cacheGet();
  if (cached) render(cached.data);
  try {
    render(await fetchRepos());
    $("#note").hidden = true;
  } catch (err) {
    if (cached) return; // tetap tampilkan salinan terakhir
    render(CONFIG.fallback);
    const note = $("#note");
    note.hidden = false;
    note.textContent = "Data langsung dari GitHub sedang tidak tersedia; menampilkan data cadangan.";
  }
}

function render(raw) {
  state.repos = normalize(raw);
  if (!["Semua", "Situs Aktif"].includes(state.filter) && !state.repos.some((r) =>
    state.filter.startsWith("#") ? r.topics.includes(state.filter.slice(1)) : (r.language || "Lainnya") === state.filter)) {
    state.filter = "Semua";
  }
  renderStats(state.repos);
  renderFilters(state.repos);
  renderGrid();
  $("#empty").textContent = state.repos.length
    ? "Tidak ada karya yang cocok dengan pencarian."
    : "Karya sedang disiapkan — repositori baru akan tampil otomatis di sini.";
}

init();
