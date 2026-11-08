import cfg from "../config.json";
import { wa } from "../utils.js";
import { Logo } from "./Icons.jsx";
import { Btn } from "./ui.jsx";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-lg">
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-brand"><Logo />{cfg.nama}</a>
        <div className="hidden gap-6 text-sm font-medium md:flex">
          {cfg.nav.map(([label, id]) => (<a key={id} href={`#${id}`} className="transition hover:text-brand">{label}</a>))}
        </div>
        <Btn small href={wa()} className="!py-2 !px-4.5">{cfg.tombolNav}</Btn>
      </div>
    </nav>
  );
}
