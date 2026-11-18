# Rudi Nofindra · Etalase Karya

Landing page media pembelajaran interaktif karya Dr. Rudi Nofindra, tayang di **https://rudichaniago.github.io**.

## Fitur
- **Hero** dengan bingkai browser yang memutar cuplikan karya unggulan, angka statistik berjalan, dan tombol *Jelajahi Karya*, *🎲 Coba Karya Acak*, GitHub.
- **Galeri**: filter kategori (Lab Maya, Media Budaya, Game Edukasi, Media Pembelajaran), filter topik, pencarian, urutan. Tiap kartu punya tombol **Buka**, **Salin tautan**, dan **Kode sumber**; arahkan kursor untuk memutar video demo (bila ada).
- **Jendela demo** (klik gambar kartu): tab *Pratinjau*, *Coba langsung* (aplikasi berjalan di dalam halaman), *QR Code*; navigasi ← →, Esc untuk menutup.
- **Pratinjau**: layar besar + daftar karya, berganti otomatis.
- **Cara Pakai** dan **Profil Penyusun**.
- Sinkron dengan GitHub saat dibuka dan tiap 5 menit; mode terang/gelap; responsif; menghormati *reduced motion*.

## Menambah karya baru (repositori `karya`)
1. Unggah `nama-aplikasi.html` (huruf kecil, tanda hubung, **bukan** `index.html`).
2. Opsional: `nama-aplikasi.jpg` (thumbnail 1200×630) dan `nama-aplikasi.mp4` (video demo ±10 detik, tanpa suara).
3. Isi `<head>` aplikasi (di bagian paling atas):

```html
<title>Nama Aplikasi</title>
<meta name="description" content="Deskripsi singkat 1–2 kalimat.">
<meta name="keywords" content="vokasi, budaya, tefa">
<meta name="kategori" content="Lab Maya">        <!-- opsional: Lab Maya / Media Budaya / Game Edukasi / Media Pembelajaran -->
<meta name="mapel" content="Broadcasting & Perfilman">  <!-- opsional -->
<meta name="kelas" content="Kelas XI · Fase F">  <!-- opsional -->
<meta property="og:image" content="https://rudichaniago.github.io/karya/nama-aplikasi.jpg">
```

Tanpa `keywords`, tag `#vokasi/#budaya/#tefa` dipasang otomatis dari judul & deskripsi; tanpa `kategori`, kategori ditebak dari kata kunci (`CONFIG.categories`).

## Pengaturan (`assets/app.js`)
- `CONFIG.featured` — karya unggulan (★, tampil di hero).
- `CONFIG.overrides` — menimpa judul/deskripsi/tag/gambar/kategori/mapel/kelas.
- `PROFIL` — biodata, keahlian, kutipan, tautan sosial. Foto: unggah `assets/foto-profil.webp` (rasio 4:5) lalu isi `foto`.

> Setelah mengubah `style.css` atau `app.js`, naikkan angka `?v=` di `index.html` agar browser tidak memakai file lama.

## Struktur
```
index.html              halaman
assets/style.css        tampilan (palet marun & emas songket)
assets/app.js           data, render, interaksi
assets/vendor/qrcode.js QR Code offline (MIT, Kazuhiko Arase)
```

## Publikasi
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
