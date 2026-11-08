import { useEffect, useRef, useState } from "react";
import cfg from "../config.json";
import { img, wa } from "../utils.js";
import { Btn } from "./ui.jsx";

export default function Hero() {
  const n = cfg.slide.length;
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);
  const startX = useRef(0);
  const go = (k) => { setI((k + n) % n); setTick((t) => t + 1); };

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % n), 5000);
    return () => clearInterval(t);
  }, [tick, n]);

  const onEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
  };
  const arrow = "absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition hover:bg-white/40";

  return (
    <div className="relative overflow-hidden bg-black" aria-roledescription="carousel">
      <div className="flex transition-transform duration-700 ease-[cubic-bezier(.65,0,.25,1)]" style={{ transform: `translateX(-${i * 100}%)` }}
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)} onTouchEnd={onEnd}>
        {cfg.slide.map((s) => (
          <div key={s.judul} className="flex h-[clamp(320px,40vw,500px)] min-w-full items-center bg-cover bg-center pr-6 pl-[max(1.5rem,calc((100vw_-_1200px)/2_+_1.5rem))] text-white"
            style={{ backgroundImage: `linear-gradient(90deg,rgba(15,23,42,.86) 20%,rgba(30,41,59,.1)),url(${img(s.foto)})` }}>
            <div className="max-w-[480px]">
              <h1 className="mb-3 text-[clamp(2.1rem,6vw,4rem)] leading-[1.02] font-bold tracking-tighter">{s.judul}</h1>
              <p className="mb-6 text-[clamp(1rem,2vw,1.4rem)] opacity-90">{s.sub}</p>
              <Btn small href={wa(s.judul)} className="!bg-white/20 backdrop-blur">{s.tombol} →</Btn>
            </div>
          </div>
        ))}
      </div>
      <button className={`${arrow} left-3`} onClick={() => go(i - 1)} aria-label="Sebelumnya">‹</button>
      <button className={`${arrow} right-3`} onClick={() => go(i + 1)} aria-label="Berikutnya">›</button>
      <div className="absolute inset-x-0 bottom-3.5 z-10 flex justify-center gap-2">
        {cfg.slide.map((s, j) => (
          <button key={s.judul} onClick={() => go(j)} aria-label={`Slide ${j + 1}`}
            className={`h-[7px] rounded-full transition-all duration-300 ${j === i ? "w-[22px] bg-white" : "w-[7px] bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}
