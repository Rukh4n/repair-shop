# Sigap Garage – Template Website Bengkel (React + Vite + Tailwind CSS)

## Menjalankan
    npm install
    npm run dev        # buka alamat yang muncul (biasanya http://localhost:5173)
    npm run build      # hasil jadi ada di folder dist

## Mengganti isi untuk bengkel lain
- Semua teks, harga, warna, nomor WhatsApp, dan daftar layanan ada di `src/config.json`.
- `bagian` menentukan section yang tampil dan urutannya. Hapus nama untuk menyembunyikan, ubah urutan untuk memindahkan.
  Pilihan: hero, kategori, layanan, paket, alasan, cara, galeri, merek, tentang, testimoni, faq, lokasi, cta, blog.
- Foto ada di `public/images/`. Ganti file dengan nama yang sama, atau tambah foto baru lalu tulis namanya di `config.json`.
- Warna utama: ubah `warna`. Ukuran teks dasar: ubah `ukuranTeks`.
- Warna dasar (ink, muted, soft) ada di bagian `@theme` pada `src/index.css`.

## Styling dan animasi
Semua styling dan animasi memakai Tailwind CSS (v4) lewat kelas utilitas di komponen. `src/index.css` hanya berisi
impor Tailwind, token warna dan font, satu animasi `animate-soft`, gaya fokus, dan aturan "kurangi gerakan".

## Hosting (Netlify, Vercel, GitHub Pages)
- Build command: `npm run build`
- Folder yang dipublikasikan: `dist`

Catatan: foto contoh berasal dari Pexels, Unsplash, Pixabay, dan Vecteezy. Cek lisensinya dan ganti dengan foto asli
bengkel sebelum dipakai untuk klien. Tim montir dan avatar testimoni adalah ilustrasi.
