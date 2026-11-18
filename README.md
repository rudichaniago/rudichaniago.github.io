# Bahan Ajar Digital

Landing page etalase karya digital Rudi Nofindra. Daftar repositori dimuat otomatis dari GitHub API (`rudichaniago`), jadi repositori baru langsung tampil tanpa perlu mengedit halaman.

## Struktur
- `index.html` — halaman utama
- `assets/style.css` — gaya visual (aksen motif songket, mode terang/gelap)
- `assets/app.js` — pengambil data GitHub + **CONFIG** di bagian atas

## Kustomisasi (`assets/app.js` → `CONFIG`)
- `exclude` — repositori yang disembunyikan
- `featured` — repositori unggulan (tampil paling depan)
- `overrides` — judul/deskripsi kustom per repositori
- `collections` — repositori koleksi (mis. `karya`): setiap file `.html` di dalamnya tampil sebagai kartu karya sendiri, lengkap dengan tautan langsung ke halamannya. Kunci `overrides`-nya: `"karya/Nama File.html"`.

## Deskripsi & tag otomatis
Landing page membaca bagian `<head>` setiap file aplikasi di repositori koleksi:

```html
<title>Nama Aplikasi</title>
<meta name="description" content="Deskripsi singkat 1–2 kalimat.">
<meta name="keywords" content="vokasi, budaya, tefa">
<meta property="og:image" content="https://rudichaniago.github.io/karya/nama-aplikasi.jpg">
```

Letakkan tag ini di bagian paling atas `<head>` (sebelum `<style>`/`<script>`). Bila `keywords` kosong, tag dipasang otomatis dari kata kunci pada judul/deskripsi (`CONFIG.autoTags`). `overrides` tetap bisa dipakai untuk menimpa.

## Thumbnail kartu
- **Otomatis (repositori koleksi):** unggah gambar dengan nama sama seperti aplikasinya, mis. `Mengenal Ka Ga Nga.jpg` untuk `Mengenal Ka Ga Nga.html`. Format `.jpg`/`.png`/`.webp`, ukuran ideal **1200×630 px**, usahakan < 300 KB.
- **Manual (kartu mana pun):** tambahkan `image: "https://..."` di `overrides`.
- Tanpa gambar, kartu memakai sampul bermotif songket berisi judul karya.
- `fallback` — data cadangan jika GitHub API tidak dapat diakses

Tips: isi **Description**, **Topics**, dan **Website** di setiap repositori GitHub agar kartunya lebih informatif. Repositori dengan GitHub Pages aktif otomatis mendapat tombol "Buka situs".

## Publikasi di `https://rudichaniago.github.io`
1. Settings → Pages → Source: *Deploy from a branch* → branch `main`, folder `/ (root)` → Save.
2. Tunggu 1–5 menit, lalu buka `https://rudichaniago.github.io`.
