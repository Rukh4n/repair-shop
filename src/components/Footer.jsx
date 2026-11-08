import cfg from "../config.json";
import { Logo, Icon } from "./Icons.jsx";
import { wa } from "../utils.js";

export default function Footer() {
  return (
    <>
      <footer className="bg-white pt-12 pb-[calc(2rem+env(safe-area-inset-bottom))] text-sm text-muted">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-brand"><Logo />{cfg.nama}</div>
          <p className="mt-3 max-w-md">{cfg.alamat}<br />Buka {cfg.jam[0][0]}, {cfg.jam[0][1]}</p>
          <div className="my-10 grid grid-cols-2 gap-6 md:grid-cols-5">
            {cfg.footer.map(([judul, tautan]) => (
              <div key={judul}>
                <h4 className="mb-3 font-semibold text-ink">{judul}</h4>
                {tautan.map((l) => (<a key={l} href="#" className="mb-2 block transition hover:text-brand">{l}</a>))}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between gap-2 border-t border-slate-200 pt-5">
            <span>© 2026 {cfg.nama}. Website contoh. Foto dari Pexels, Unsplash, Pixabay, dan Vecteezy.</span>
            <span>{cfg.instagram}</span>
          </div>
        </div>
      </footer>
      <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label={`Chat WhatsApp ${cfg.nama}`}
        className="fixed right-4.5 bottom-[calc(1.125rem+env(safe-area-inset-bottom))] z-50 grid size-14 animate-soft place-items-center rounded-full bg-brand shadow-xl">
        <svg viewBox="0 0 24 24" className="size-6 fill-white"><path d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-5 4V4a1 1 0 0 1 1-1z" /></svg>
      </a>
    </>
  );
}
