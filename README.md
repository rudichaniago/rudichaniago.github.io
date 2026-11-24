# Rudi Nofindra · Etalase Karya

Landing page media pembelajaran interaktif karya Rudi Nofindra, tayang di **https://rudichaniago.github.io**.

## Fitur
- **Hero** dengan bingkai browser yang memutar cuplikan karya unggulan, angka statistik berjalan, dan tombol *Jelajahi Karya*, *🎲 Coba Karya Acak*, GitHub.
- **Galeri**: filter kategori (Lab Maya, Media Budaya, Game Edukasi, Media Pembelajaran), filter topik, pencarian, urutan. Tiap kartu punya tombol **Buka**, **Salin tautan**, dan **Kode sumber**; arahkan kursor untuk memutar video demo (bila ada).
- **Jendela demo** (klik gambar kartu): tab *Pratinjau*, *Coba langsung* (aplikasi berjalan di dalam halaman), *QR Code*; navigasi ← →, Esc untuk menutup.
- **Pratinjau**: layar besar + daftar karya, berganti otomatis.
- **Cara Pakai** dan **Profil Penyusun**.
- Sinkron dengan GitHub saat dibuka dan tiap 5 menit; mode terang/gelap; responsif; menghormati *reduced motion*.

## Mengunci karya yang sedang ditinjau

- Di `assets/app.js`, tambahkan ID karya ke daftar `CONFIG.reviewLocked` agar karya tidak tampil di galeri publik, pratinjau, atau statistik.
- Untuk file dalam repositori `karya`, gunakan ID seperti `karya/nama-file.html`. Untuk repositori yang tampil sebagai satu karya, gunakan nama repositorinya.
- Membuka kembali karya: hapus ID tersebut dari daftar `reviewLocked`.
- Contoh: `reviewLocked: ["karya/nama-media.html"]`.
- Pengaturan ini menyembunyikan kartu di situs portofolio, tetapi tidak mengubah akses repositori sumber atau URL GitHub Pages langsung.

## Menambah karya baru
Unggah ke repositori `karya`, **atau** buat repositori baru dengan GitHub Pages aktif (tanpa `index.html`): setiap file `.html` di dalamnya otomatis tampil sebagai kartu. Repositori yang memakai `index.html` atau kolom *Website* tampil sebagai satu kartu situs.

### Langkah di repositori `karya`
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
<meta name="seri" content="Produksi Video">       <!-- opsional: nama seri/jalur belajar -->
<meta name="urutan" content="1">                  <!-- opsional: urutan dalam seri -->
<meta property="og:image" content="https://rudichaniago.github.io/karya/nama-aplikasi.jpg">
```

Karya dengan `seri` yang sama (minimal 2) tampil sebagai **Jalur Belajar** berurutan di atas galeri, dan bisa difilter lewat menu topik.

Tanpa `keywords`, tag `#vokasi/#budaya/#tefa` dipasang otomatis dari judul & deskripsi; tanpa `kategori`, kategori ditebak dari kata kunci (`CONFIG.categories`).

## Pengaturan (`assets/app.js`)
- `CONFIG.featured` — karya unggulan (★, tampil di hero).
- `CONFIG.overrides` — menimpa judul/deskripsi/tag/gambar/kategori/mapel/kelas.
- `CONFIG.palette` — warna (aktif: `pantai`): `pastel` (Pastel Songket), `sage` (Sage & Terakota), `pantai` (Biru Pantai Panjang), `kopi` (Kopi & Emas).
- `CONFIG.layout` — model hero (aktif: `sinematik`): `etalase`, `sinematik`, `bento`. Coba tanpa mengubah kode: `https://rudichaniago.github.io/?palette=kopi&layout=sinematik`.
- `CONFIG.showSource` — `false` (bawaan) menyembunyikan tombol kode sumber/GitHub di kartu & jendela demo.
- `PROFIL` — biodata, keahlian, kutipan, tautan sosial (ikon tampil di bawah foto & footer). Foto: unggah `assets/foto-profil.webp` (rasio 4:5) lalu isi `foto`.

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

## Tulisan & CV Digital
- `data/tulisan.json` memuat 61 publikasi terverifikasi dari Kumparan, Kompasiana, Minang Connect, Medium, jurnal, prosiding, dan YouTube.
- `data/cv.json` memuat pendidikan, pengalaman, organisasi, kontribusi, penghargaan, dan publikasi berdasarkan CV pembaruan September 2026.
- `tulisan.html` menampilkan arsip publikasi dari `data/tulisan.json`.
- Arsip saat ini berisi 61 publikasi, termasuk artikel, jurnal, prosiding, dan video.
- `kelola.html` adalah editor draf lokal; draf tersimpan di browser perangkat ini, bukan terkirim ke situs.
- `cv.html` mengambil isi dari `data/cv.json`; kontak pribadi sensitif dari PDF tidak ditampilkan.
