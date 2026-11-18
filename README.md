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
- `fallback` — data cadangan jika GitHub API tidak dapat diakses

Tips: isi **Description**, **Topics**, dan **Website** di setiap repositori GitHub agar kartunya lebih informatif. Repositori dengan GitHub Pages aktif otomatis mendapat tombol "Buka situs".

## Publikasi
Settings → Pages → Source: *Deploy from a branch* → pilih branch dan folder `/ (root)`.
