import { useEffect } from "react";
import cfg from "./config.json";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import * as S from "./components/Sections.jsx";

// Daftar bagian yang bisa dipakai. Urutan dan tampilnya diatur lewat "bagian" di src/config.json.
const REGISTRY = {
  hero: Hero, kategori: S.Kategori, layanan: S.Layanan, paket: S.Paket, alasan: S.Alasan, cara: S.Cara,
  galeri: S.Galeri, merek: S.Merek, tentang: S.Tentang, testimoni: S.Testimoni, faq: S.Faq,
  lokasi: S.Lokasi, cta: S.Cta, blog: S.Blog
};

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty("--color-brand", cfg.warna);
    document.documentElement.style.fontSize = `${cfg.ukuranTeks}px`;
    document.title = `${cfg.nama} – Demo Bengkel`;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {cfg.bagian.map((k) => {
          const Part = REGISTRY[k];
          return Part ? <Part key={k} /> : null;
        })}
      </main>
      <Footer />
    </>
  );
}
