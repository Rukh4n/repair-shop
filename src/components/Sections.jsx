import { useEffect, useRef, useState } from "react";
import cfg from "../config.json";
import { img, wa, maps } from "../utils.js";
import { Reveal, Btn, Section, Head, card } from "./ui.jsx";
import { Icon, Person, MapArt } from "./Icons.jsx";

const d = (i) => (i % 4) * 0.08;
const photo = "size-full object-cover transition-transform duration-500 group-hover:scale-110";

export const Kategori = () => (
  <Section>
    <Head judul={cfg.kategoriJudul} />
    <div className="-mx-6 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {cfg.kategori.map(([nama, ikon]) => (
        <a key={nama} href="#layanan" className="w-[150px] flex-none snap-start rounded-2xl bg-soft px-2.5 pt-4 pb-3.5 text-center text-[.92rem] font-medium transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
          <Icon name={ikon} className="mx-auto mb-2 size-14" />{nama}
        </a>
      ))}
    </div>
  </Section>
);

export const Layanan = () => (
  <Section id="layanan" grey>
    <Head judul={cfg.layananJudul} sub={cfg.layananSub} />
    <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
      {cfg.layanan.map((p, i) => (
        <Reveal key={p.nama} delay={d(i)} className="group flex flex-col rounded-3xl bg-white p-5 transition hover:-translate-y-1.5 hover:shadow-xl">
          <div className="mb-3.5 aspect-[4/3] overflow-hidden rounded-2xl"><img className={photo} src={img(p.foto)} alt={p.nama} loading="lazy" /></div>
          <h3 className="text-lg font-semibold tracking-tight">{p.nama}</h3>
          <div className="mt-0.5 mb-1.5 text-sm text-brand font-medium">{p.harga}</div>
          <p className="mb-4 text-sm text-muted">{p.deskripsi}</p>
          <Btn href={wa(p.nama)} className="mt-auto">{cfg.tombolLayanan} →</Btn>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Paket = () => (
  <Section id="paket">
    <Head judul={cfg.paketJudul} sub={cfg.paketSub} />
    <div className="grid gap-4.5 pt-3 md:grid-cols-3">
      {cfg.paket.map((p, i) => (
        <Reveal key={p.nama} delay={d(i)} className={`relative flex flex-col rounded-[26px] border bg-white p-7 pt-9 ${p.hot ? "border-2 border-brand shadow-xl" : "border-slate-200"}`}>
          {p.hot && <span className="absolute -top-3 left-6 rounded-full bg-brand px-3.5 py-0.5 text-xs font-semibold text-white">{p.hot}</span>}
          <h3 className="text-xl font-semibold">{p.nama}</h3>
          <div className="mt-1.5 mb-4.5 text-4xl font-bold tracking-tight">{p.harga}</div>
          <ul className="mb-6 grid gap-2.5 text-muted">
            {p.isi.map((x) => (<li key={x} className="before:mr-2.5 before:font-bold before:text-brand before:content-['✓']">{x}</li>))}
          </ul>
          <Btn href={wa(`Paket ${p.nama}`)} className="mt-auto">{cfg.tombolPaket}</Btn>
        </Reveal>
      ))}
    </div>
  </Section>
);

const IconBox = ({ name }) => (
  <div className="mb-4 grid size-[52px] place-items-center rounded-2xl bg-brand/10"><Icon name={name} className="size-[30px]" /></div>
);

export const Alasan = () => (
  <Section grey>
    <Head judul={cfg.alasanJudul} />
    <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
      {cfg.alasan.map(([ikon, judul, teks], i) => (
        <Reveal key={judul} delay={d(i)} className={card(true)}>
          <IconBox name={ikon} /><h3 className="mb-1.5 text-lg font-semibold">{judul}</h3><p className="text-sm text-muted">{teks}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Cara = () => (
  <Section id="cara">
    <Head judul={cfg.caraJudul} />
    <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
      {cfg.cara.map(([ikon, judul, teks], i) => (
        <Reveal key={judul} delay={d(i)} className={card(false)}>
          <IconBox name={ikon} />
          <span className="mb-1 block text-[.82rem] font-semibold text-brand">Langkah {i + 1}</span>
          <h3 className="mb-1.5 text-lg font-semibold">{judul}</h3><p className="text-sm text-muted">{teks}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

const galPos = ["col-span-2 row-span-2", "", "", "", "", "col-span-2", "col-span-2"];
export const Galeri = () => (
  <Section id="galeri" grey>
    <Head judul={cfg.galeriJudul} />
    <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4">
      {cfg.galeri.map(([foto, cap], i) => (
        <Reveal as="figure" key={cap} delay={d(i)} className={`group relative m-0 overflow-hidden rounded-[20px] ${galPos[i] || ""}`}>
          <img className="size-full object-cover transition-transform duration-500 group-hover:scale-105" src={img(foto)} alt={cap} loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/75 to-transparent px-4 pt-7 pb-3 text-sm font-medium text-white">{cap}</figcaption>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Merek = () => (
  <Section>
    <Head judul={cfg.merekJudul} />
    <Reveal className="flex flex-wrap justify-center gap-3">
      {cfg.merek.map((m) => (<span key={m} className="rounded-full bg-soft px-5.5 py-2.5 font-semibold">{m}</span>))}
    </Reveal>
  </Section>
);

function Counter({ n, s }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        setV(n * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [n]);
  const f = n % 1 ? 1 : 0;
  return <b ref={ref} className="block text-[clamp(2rem,4.5vw,2.9rem)] tracking-tight">{v.toLocaleString("id-ID", { minimumFractionDigits: f, maximumFractionDigits: f })}{s}</b>;
}

export function Tentang() {
  const t = cfg.tentang;
  return (
    <Section id="tentang" grey>
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <h2 className="text-[clamp(1.5rem,3.4vw,2.125rem)] font-bold tracking-tight">{t.judul}</h2>
          <p className="mt-3.5 text-muted">{t.teks}</p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3.5">
          {t.statistik.map(([n, s, label]) => (
            <div key={label} className="rounded-[22px] bg-white px-5 py-6"><Counter n={n} s={s} /><span className="text-sm text-muted">{label}</span></div>
          ))}
        </Reveal>
      </div>
      <Reveal as="h3" className="mt-14 mb-6 text-center text-2xl font-semibold tracking-tight">{t.timJudul}</Reveal>
      <div className="grid gap-4.5 md:grid-cols-3">
        {t.tim.map(([nama, peran, skin, cap, cloth], i) => (
          <Reveal key={nama} delay={d(i)} className={`${card(true)} text-center`}>
            <div className="mx-auto mb-3 size-24"><Person skin={skin} cap={cap} cloth={cloth} /></div>
            <h3 className="text-lg font-semibold">{nama}</h3><p className="text-sm text-muted">{peran}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export const Testimoni = () => (
  <Section>
    <Head judul={cfg.testimoniJudul} />
    <div className="grid gap-4.5 md:grid-cols-3">
      {cfg.testimoni.map((t, i) => (
        <Reveal key={t.nama} delay={d(i)} className={card(false)}>
          <div className="mb-2.5 tracking-widest text-amber-500" aria-label="Bintang 5">★★★★★</div>
          <p className="text-muted">“{t.teks}”</p>
          <div className="mt-4.5 flex items-center gap-3">
            <div className="size-[46px] flex-none"><Person skin={t.warna[0]} cap={t.warna[1]} cloth={t.warna[2]} /></div>
            <div><b>{t.nama}</b><small className="block text-muted">{t.peran}</small></div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Faq = () => (
  <Section grey>
    <div className="mx-auto max-w-[760px]">
      <Head judul={cfg.faqJudul} />
      {cfg.faq.map(([q, a], i) => (
        <Reveal as="details" key={q} delay={d(i)} className="group mb-2.5 rounded-[18px] bg-white px-5.5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3.5 py-4.5 font-semibold [&::-webkit-details-marker]:hidden">
            {q}<span className="text-2xl leading-none text-brand transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="pb-4.5 text-muted">{a}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Lokasi = () => (
  <Section id="lokasi">
    <Head judul={cfg.lokasiJudul} sub={cfg.alamat} />
    <div className="grid gap-4.5 md:grid-cols-2">
      <Reveal as="a" href={maps} target="_blank" rel="noopener noreferrer" aria-label="Buka di Google Maps" className="block min-h-80 overflow-hidden rounded-[26px] bg-slate-200"><MapArt /></Reveal>
      <Reveal className="flex flex-col gap-5.5 rounded-[26px] bg-soft p-7">
        <div>
          <h3 className="mb-1.5 flex items-center gap-2 font-semibold"><Icon name="pin" className="size-6" />Alamat</h3>
          <p className="text-muted">{cfg.alamat}</p>
          <a href={maps} target="_blank" rel="noopener noreferrer" className="inline-block pt-1.5 font-medium text-brand hover:underline">Buka di Google Maps ›</a>
        </div>
        <div>
          <h3 className="mb-1.5 flex items-center gap-2 font-semibold"><Icon name="jam" className="size-6" />Jam buka</h3>
          {cfg.jam.map(([hari, jam]) => (<div key={hari} className="flex justify-between border-b border-slate-200 py-1.5 text-muted"><span>{hari}</span><span>{jam}</span></div>))}
        </div>
        <div>
          <h3 className="mb-1.5 flex items-center gap-2 font-semibold"><Icon name="telepon" className="size-6" />Kontak</h3>
          <p className="text-muted">WhatsApp +{cfg.whatsapp}<br />Instagram {cfg.instagram}</p>
        </div>
      </Reveal>
    </div>
  </Section>
);

export const Cta = () => (
  <section className="bg-linear-to-br from-ink to-brand py-14 text-center text-white">
    <div className="mx-auto w-full max-w-[1200px] px-6">
      <Reveal as="h2" className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight">{cfg.cta.judul}</Reveal>
      <Reveal as="p" className="mx-auto mt-3.5 mb-6 max-w-xl text-lg opacity-90">{cfg.cta.teks}</Reveal>
      <Reveal><Btn small href={wa()} className="!bg-white !text-brand">{cfg.cta.tombol}</Btn></Reveal>
    </div>
  </section>
);

export const Blog = () => (
  <Section>
    <Head judul={cfg.blogJudul} />
    <div className="grid gap-4.5 md:grid-cols-3">
      {cfg.blog.map((n, i) => (
        <Reveal as="a" href="#" key={n.judul} delay={d(i)} className="group overflow-hidden rounded-[20px] bg-soft transition hover:-translate-y-1.5 hover:shadow-xl">
          <div className="aspect-video overflow-hidden"><img className={photo} src={img(n.foto)} alt={n.judul} loading="lazy" /></div>
          <div className="px-5 pt-4.5 pb-5.5"><h3 className="mb-3 leading-snug font-semibold">{n.judul}</h3><small className="text-muted">● {n.tanggal}</small></div>
        </Reveal>
      ))}
    </div>
  </Section>
);
