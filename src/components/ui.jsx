import { useEffect, useRef, useState } from "react";

// Animasi muncul saat di-scroll, memakai utilitas Tailwind.
export function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          timer = setTimeout(() => setDone(true), 800 + delay * 1000);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer); };
  }, [delay]);

  const motion = done ? "duration-300" : "duration-700 delay-(--d)";
  const state = show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
  return (
    <Tag ref={ref} className={`transition ease-out ${motion} ${state} ${className}`} style={{ "--d": `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

export function Btn({ href, children, small, className = "" }) {
  const size = small ? "inline-block px-6 py-2.5" : "block px-5 py-3";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`rounded-full bg-ink text-center text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-brand ${size} ${className}`}>
      {children}
    </a>
  );
}

export function Section({ id, grey, className = "", children }) {
  return (
    <section id={id} className={`py-10 md:py-14 ${grey ? "bg-soft" : "bg-white"} ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

export const Head = ({ judul, sub = "" }) => (
  <>
    <Reveal as="h2" className="mb-1.5 text-[clamp(1.5rem,3.4vw,2.125rem)] font-bold tracking-tight">{judul}</Reveal>
    <p className="mb-7 min-h-4 text-muted">{sub}</p>
  </>
);

export const card = (onGrey) =>
  `rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${onGrey ? "bg-white" : "bg-soft"}`;
