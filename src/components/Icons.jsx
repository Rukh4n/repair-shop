const P = {
  servis: <path className="fill-brand/15" d="M30 8a10 10 0 0 0-9 14L8 35a4 4 0 0 0 5.7 5.7L26 28a10 10 0 0 0 14-9l-6 6-6-2-2-6z" />,
  oli: (<><path className="fill-brand/15" d="M10 20h22v18a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" /><path d="M32 24l9-7M16 20v-5h10v5M41 28c0 3-3 4-3 6a3 3 0 0 0 6 0c0-2-3-3-3-6z" /></>),
  rem: (<><circle className="fill-brand/15" cx="24" cy="24" r="17" /><circle cx="24" cy="24" r="5" /><circle cx="24" cy="12" r="1.6" /><circle cx="24" cy="36" r="1.6" /><circle cx="12" cy="24" r="1.6" /><circle cx="36" cy="24" r="1.6" /></>),
  aki: (<><rect className="fill-brand/15" x="6" y="16" width="36" height="22" rx="3" /><path d="M13 16v-5h6v5M29 16v-5h6v5M14 27h8M32 23v8M28 27h8" /></>),
  ac: <path d="M24 5v38M7.5 14.5l33 19M7.5 33.5l33-19M19 8l5 4 5-4M19 40l5-4 5 4" />,
  ban: (<><circle className="fill-brand/15" cx="24" cy="24" r="18" /><circle cx="24" cy="24" r="6" /><path d="M24 6v12M24 30v12M6 24h12M30 24h12" /></>),
  telepon: (<><rect className="fill-brand/15" x="14" y="5" width="20" height="38" rx="4" /><path d="M21 38h6" /></>),
  diagnosa: (<><circle className="fill-brand/15" cx="21" cy="21" r="13" /><path d="m31 31 11 11" /></>),
  tag: (<><path className="fill-brand/15" d="M6 24 24 6h16v16L22 40a3 3 0 0 1-4 0L6 28a3 3 0 0 1 0-4z" /><circle cx="32" cy="14" r="2.5" /></>),
  perisai: (<><path className="fill-brand/15" d="M24 5 8 11v11c0 10 7 17 16 21 9-4 16-11 16-21V11z" /><path d="m16 24 6 6 11-12" /></>),
  kotak: (<><path className="fill-brand/15" d="M6 14 24 6l18 8v20l-18 8L6 34z" /><path d="M6 14l18 8 18-8M24 22v20" /></>),
  pin: (<><path className="fill-brand/15" d="M24 43s14-12 14-24a14 14 0 0 0-28 0c0 12 14 24 14 24z" /><circle cx="24" cy="19" r="5" /></>),
  jam: (<><circle className="fill-brand/15" cx="24" cy="24" r="18" /><path d="M24 14v10l7 4" /></>)
};

export const Icon = ({ name, className = "size-8" }) => (
  <svg viewBox="0 0 48 48" className={`fill-none stroke-brand ${className}`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {P[name] || P.servis}
  </svg>
);

export const Logo = () => (
  <svg viewBox="0 0 40 40" className="size-7" aria-hidden="true">
    <rect width="40" height="40" rx="11" className="fill-brand" />
    <circle cx="20" cy="20" r="10" fill="none" stroke="#fff" strokeWidth="5" strokeDasharray="3.9 3.9" />
    <circle cx="20" cy="20" r="7.5" fill="#fff" />
    <circle cx="20" cy="20" r="3.2" className="fill-brand" />
  </svg>
);

export const Person = ({ skin, cap, cloth }) => (
  <svg viewBox="0 0 120 120" role="img" aria-label="Ilustrasi montir" className="block size-full">
    <circle cx="60" cy="60" r="60" style={{ fill: `color-mix(in srgb, ${cap} 14%, #f2f2f4)` }} />
    <path d="M18 120c0-26 18-38 42-38s42 12 42 38z" fill={cloth} />
    <path d="M50 83l10 12 10-12" fill="#fff" opacity=".85" />
    <rect x="74" y="96" width="14" height="8" rx="2" fill={cap} />
    <circle cx="60" cy="54" r="20" fill={skin} />
    <circle cx="40.5" cy="56" r="3.5" fill={skin} />
    <circle cx="79.5" cy="56" r="3.5" fill={skin} />
    <path d="M38 50a22 20 0 0 1 44 0z" fill={cap} />
    <path d="M60 30h26a4 4 0 0 1 0 6H58z" fill={cap} />
    <circle cx="52" cy="57" r="2.2" fill="#1d1d1f" />
    <circle cx="68" cy="57" r="2.2" fill="#1d1d1f" />
    <path d="M53 65q7 6 14 0" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MapArt = () => (
  <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" className="block size-full" aria-hidden="true">
    <rect width="400" height="320" fill="#e8eef2" />
    <path d="M0 220 120 200 200 240 400 190V320H0z" fill="#cfe3d0" />
    <path d="M270 0 300 120 400 150V60z" fill="#bcd8ec" />
    <g stroke="#fff" strokeWidth="14" fill="none"><path d="M-10 90 410 130" /><path d="M130 -10 190 330" /><path d="M-10 260 410 280" /></g>
    <g stroke="#fff" strokeWidth="6" fill="none"><path d="M260 -10 330 330" /><path d="M-10 170 410 200" /></g>
    <circle cx="190" cy="125" r="16" className="origin-center animate-ping fill-brand/50 [transform-box:fill-box]" />
    <path d="M190 158s26-22 26-42a26 26 0 0 0-52 0c0 20 26 42 26 42z" className="fill-brand" />
    <circle cx="190" cy="116" r="9" fill="#fff" />
  </svg>
);

