'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ─── CSS VARIABLES ──────────────────────────────────────────────────────────
const cssVars = `
  .asociatia-root {
    --accent: #E91E63;
    --accent-soft: #FCE4EC;
    --ink: #0F1115;
    --ink-2: #2A2D33;
    --muted: #6B6F76;
    --line: #E7E5E0;
    --bg: #FAF9F6;
    --bg-2: #FFFFFF;
    --bg-3: #F2F0EA;
    --pad-y: 96px;
    --gutter: clamp(20px, 4vw, 56px);
    --maxw: 1320px;
    font-family: ui-sans-serif, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .asociatia-root a { color: inherit; }
  .asociatia-root ::selection { background: var(--accent); color: #fff; }
  .asociatia-mono { font-family: ui-monospace, monospace; }
  .asociatia-serif { font-style: italic; }
`;

// ─── ICONS ──────────────────────────────────────────────────────────────────
const I = ({ children, size = 18, sw = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">{children}</svg>
);
const Icon = {
  Flask: (p) => <I {...p}><path d="M9 3h6"/><path d="M10 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7.5 14h9"/></I>,
  Spark: (p) => <I {...p}><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M5.6 5.6l2.8 2.8"/><path d="M15.6 15.6l2.8 2.8"/><path d="M5.6 18.4l2.8-2.8"/><path d="M15.6 8.4l2.8-2.8"/></I>,
  Cap: (p) => <I {...p}><path d="m22 9-10-5L2 9l10 5 10-5Z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></I>,
  Building: (p) => <I {...p}><rect x="4" y="3" width="16" height="18" rx="1.2"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/><path d="M10 21v-3h4v3"/></I>,
  Shield: (p) => <I {...p}><path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6Z"/><path d="m9 12 2 2 4-4"/></I>,
  File: (p) => <I {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></I>,
  Download: (p) => <I {...p}><path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/></I>,
  ArrowRight: (p) => <I {...p}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></I>,
  ArrowUpRight: (p) => <I {...p}><path d="M7 17 17 7"/><path d="M9 7h8v8"/></I>,
  Heart: (p) => <I {...p}><path d="M12 20s-7-4.4-7-10a4.5 4.5 0 0 1 7-3.5A4.5 4.5 0 0 1 19 10c0 5.6-7 10-7 10Z"/></I>,
  Briefcase: (p) => <I {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></I>,
  Network: (p) => <I {...p}><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.5 7.5 11 16.5"/><path d="M16.5 7.5 13 16.5"/><path d="M8 6h8"/></I>,
  Check: (p) => <I {...p}><path d="M5 12.5 10 17 19 7"/></I>,
  Plus: (p) => <I {...p}><path d="M12 5v14"/><path d="M5 12h14"/></I>,
  Minus: (p) => <I {...p}><path d="M5 12h14"/></I>,
  Mail: (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></I>,
  MapPin: (p) => <I {...p}><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></I>,
  Copy: (p) => <I {...p}><rect x="8" y="8" width="12" height="12" rx="1.5"/><path d="M16 8V5a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 5v9A1.5 1.5 0 0 0 5.5 15.5H8"/></I>,
};

// ─── PRIMITIVES ─────────────────────────────────────────────────────────────
const Ctr = ({ children, style, className = '' }) => (
  <div className={className} style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', ...style }}>
    {children}
  </div>
);

const Sec = ({ id, bg = 'default', children, topRule = false }) => {
  const bgMap = { default: 'var(--bg)', white: 'var(--bg-2)', sand: 'var(--bg-3)', ink: 'var(--ink)' };
  return (
    <section id={id} style={{ position: 'relative', backgroundColor: bgMap[bg], color: bg === 'ink' ? 'white' : undefined, paddingTop: 'var(--pad-y)', paddingBottom: 'var(--pad-y)' }}>
      {topRule && <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 1, background: 'var(--line)' }} />}
      {children}
    </section>
  );
};

const SecHeader = ({ eyebrow, title, intro, id, max }) => (
  <header>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
      {id && <span className="asociatia-mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)' }}>{id}</span>}
      {eyebrow && <>
        <span style={{ height: 1, width: 32, background: 'var(--ink)', opacity: 0.3 }} aria-hidden />
        <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--ink-2)' }}>{eyebrow}</span>
      </>}
    </div>
    <h2 style={{ marginTop: 20, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.02, fontSize: 'clamp(36px,5.2vw,68px)' }}>{title}</h2>
    {intro && <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: max || 700 }}>{intro}</p>}
  </header>
);

const Btn = ({ as: As = 'a', variant = 'primary', size = 'md', href, onClick, children, icon, iconRight, className = '' }) => {
  const sizes = { sm: { height: 36, padding: '0 14px', fontSize: 13 }, md: { height: 44, padding: '0 20px', fontSize: 14 }, lg: { height: 52, padding: '0 24px', fontSize: 15 } }[size];
  const variants = {
    primary: { background: 'var(--accent)', color: '#fff', border: 'none' },
    ink: { background: 'var(--ink)', color: '#fff', border: 'none' },
    outline: { background: 'transparent', color: 'var(--ink)', border: '1px solid rgba(15,17,21,0.15)' },
  }[variant] || { background: 'var(--accent)', color: '#fff', border: 'none' };
  const style = { display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, fontWeight: 500, cursor: 'pointer', textDecoration: 'none', transition: 'opacity .15s', ...sizes, ...variants };
  if (As === 'button') return <button onClick={onClick} style={style} className={className}>{icon}<span>{children}</span>{iconRight}</button>;
  return <a href={href} style={style} className={className}>{icon}<span>{children}</span>{iconRight}</a>;
};

const Card = ({ children, className = '', hoverable = true, padding }) => (
  <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 16, padding: padding || '28px 36px' }} className={className}>
    {children}
  </div>
);

const Pill = ({ children, accent = false }) => (
  <span className="asociatia-mono" style={{ display: 'inline-flex', alignItems: 'center', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.14em', padding: '4px 10px', borderRadius: 999, border: `1px solid ${accent ? 'rgba(233,30,99,.3)' : 'var(--line)'}`, color: accent ? 'var(--accent)' : 'var(--muted)', background: accent ? 'rgba(233,30,99,.05)' : 'var(--bg)' }}>
    {children}
  </span>
);

const Disclosure = ({ summary, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', textAlign: 'left', fontSize: 14, fontWeight: 500, background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
        <span>{summary}</span>
        <span style={{ opacity: 0.6 }}>{open ? <Icon.Minus size={16} /> : <Icon.Plus size={16} />}</span>
      </button>
      <div style={{ maxHeight: open ? 600 : 0, opacity: open ? 1 : 0, transition: 'max-height .35s ease, opacity .25s ease', overflow: 'hidden' }}>
        <div style={{ paddingBottom: 20 }}>{children}</div>
      </div>
    </div>
  );
};

const IBANRowDark = ({ label, value, currency }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (typeof navigator !== 'undefined') navigator.clipboard?.writeText(value.replaceAll(' ', ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
      <span className="asociatia-mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,.5)', width: 36 }}>{currency}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="asociatia-mono" style={{ fontSize: 12.5, letterSpacing: '0.04em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)' }}>{label}</div>
      </div>
      <button onClick={copy} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, background: 'none', border: 'none', color: 'rgba(255,255,255,.6)', cursor: 'pointer', padding: '4px 8px', borderRadius: 6 }} aria-label={`Copiaza IBAN ${currency}`}>
        {copied ? <Icon.Check size={13} /> : <Icon.Copy size={13} />}
        {copied ? 'Copiat' : 'Copy'}
      </button>
    </div>
  );
};

// ─── HERO ───────────────────────────────────────────────────────────────────
const Hero = () => {
  const stats = [
    { value: '2016', label: 'Anul infiintarii' },
    { value: '800', unit: 'mp', label: 'Suprafata CDI operata' },
    { value: '4', label: 'Domenii prioritare' },
    { value: 'EU', label: 'Proiecte europene active' },
  ];
  return (
    <header style={{ position: 'relative', paddingTop: 80, paddingBottom: 80, background: 'var(--bg)' }}>
      <Ctr>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32 }} className="asociatia-mono">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Acasa</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)' }}>Asociatia OncoGen</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
          <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-2)' }}>Entitate non-profit · Fondata 2016 · Timisoara</span>
        </div>

        <h1 style={{ fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1.18, fontSize: 'clamp(48px,7.4vw,96px)', margin: 0 }}>
          Asociatia <span className="asociatia-serif" style={{ color: 'var(--accent)' }}>OncoGen</span>
        </h1>

        <p style={{ marginTop: 32, fontSize: 'clamp(18px,2vw,24px)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--ink-2)', maxWidth: 700 }}>
          Cercetare, transfer tehnologic si sprijin pentru terapiile avansate ale cancerului.
        </p>
        <p style={{ marginTop: 24, maxWidth: 680, fontSize: 16, lineHeight: 1.65, color: 'var(--muted)' }}>
          Asociatia OncoGen este entitatea juridica de drept privat, non-profit, care sustine si operationalizeaza activitatea de cercetare-dezvoltare-inovare a Centrului OncoGen din cadrul Spitalului Clinic Judetean de Urgenta &ldquo;Pius Brinzeu&rdquo; din Timisoara.
        </p>

        <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Btn href="#implica-te" variant="primary" size="lg" iconRight={<Icon.ArrowRight size={16} />}>Sprijina cercetarea</Btn>
          <Btn href="#parteneri" variant="outline" size="lg" iconRight={<Icon.ArrowUpRight size={16} />}>Devino partener</Btn>
        </div>

        {/* Stats */}
        <div style={{ marginTop: 64, borderTop: '1px solid var(--line)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRight: i < 3 ? '1px solid var(--line)' : 'none', paddingLeft: i === 0 ? 0 : 24 }}>
                <div style={{ fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1, fontSize: 'clamp(36px,4.8vw,60px)' }}>
                  {s.value}
                  {s.unit && <span className="asociatia-mono" style={{ marginLeft: 4, fontSize: 14, color: 'var(--muted)', letterSpacing: '0.04em', verticalAlign: 'top' }}>{s.unit}</span>}
                </div>
                <div style={{ marginTop: 12, fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Ctr>
    </header>
  );
};

// ─── MISSION ────────────────────────────────────────────────────────────────
const Mission = () => {
  const cards = [
    {
      n: '01', icon: <Icon.Flask size={22} />,
      title: 'Cercetare-dezvoltare-inovare',
      sub: 'Stiinta de frontiera, aplicatii clinice',
      items: ['Terapii avansate in cancer si biologia celulelor tumorale', 'Imunoterapii si terapii celulare adoptive (CAR-T, CAR-NK)', 'Medicina regenerativa si biologia celulelor stem', 'Sanatate si factori de mediu'],
    },
    {
      n: '02', icon: <Icon.Spark size={22} />,
      title: 'Transfer tehnologic si valorificare',
      sub: 'De la laborator la pacient',
      items: ['Brevete, licentiere si protectia proprietatii intelectuale', 'Infiintarea si finantarea de startup-uri biotech', 'Productie de prototipuri, kituri si dispozitive inovative', 'Parteneriate cu industria farma-biotech'],
    },
    {
      n: '03', icon: <Icon.Cap size={22} />,
      title: 'Sprijin pentru ecosistem',
      sub: 'Investim in oameni',
      items: ['Burse individuale si finantari pentru proiecte de cercetare', 'Programe de formare si certificare profesionala', 'Participare la conferinte si simpozioane internationale', 'Programul Young Researchers — sprijin pentru tineri cercetatori'],
    },
    {
      n: '04', icon: <Icon.Building size={22} />,
      title: 'Infrastructura CDI',
      sub: 'Spatiu operational dedicat',
      items: ['Doua unitati modulare CDI (300 mp + 500 mp), corp C11, str. Wilhelm Tell nr. 1', 'Centru de cazare si servicii pentru cercetatori si colaboratori', 'Acces la echipamente si consumabile pentru echipele asociate'],
    },
  ];
  return (
    <Sec id="misiune" bg="white" topRule>
      <Ctr>
        <SecHeader id="§ 02" eyebrow="Ce facem" title={<>Patru axe complementare, <span style={{ color: 'var(--muted)' }}>un singur scop.</span></>} intro="Activitatea Asociatiei este structurata pe patru axe complementare, in jurul unui scop central: accelerarea cercetarii medicale aplicate in terapiile avansate ale cancerului si cresterea competitivitatii biotehnologiei romanesti in plan european." />
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {cards.map(c => (
            <Card key={c.n}>
              <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)' }}>{c.n}</span>
                  <span style={{ height: 1, width: 24, background: 'var(--line)' }} />
                </div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  {c.icon}
                </div>
              </div>
              <h3 style={{ marginTop: 28, fontWeight: 500, letterSpacing: '-0.018em', lineHeight: 1.1, fontSize: 'clamp(22px,2.2vw,28px)' }}>{c.title}</h3>
              <p className="asociatia-serif" style={{ fontSize: 17, color: 'var(--muted)', marginTop: 8 }}>{c.sub}</p>
              <ul style={{ marginTop: 28, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.items.map((it, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: 12, fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-2)' }}>
                    <span style={{ marginTop: 8, width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Ctr>
    </Sec>
  );
};

// ─── GOVERNANCE ─────────────────────────────────────────────────────────────
const Governance = () => {
  const founders = [
    { name: 'Prof. Dr. Virgil Paunescu', role: 'Fondator, Centrul OncoGen' },
    { name: 'Prof. Dr. Carmen Panaitescu', role: 'Co-fondator' },
    { name: 'Daniela-Elena Matesan', role: 'Co-fondator' },
  ];
  const board = [
    { name: 'Daniela-Elena Matesan', role: 'Presedinte' },
    { name: 'Elena-Alexandra Paunescu', role: 'Vicepresedinte si Director Executiv' },
    { name: 'Ana Matesan', role: 'Vicepresedinte' },
  ];
  const docs = [
    { title: 'Statutul actualizat al Asociatiei', date: '10.11.2025', size: 'PDF · 320 KB' },
    { title: 'Raport anual de activitate', date: '[ANUL]', size: 'PDF' },
    { title: 'Situatii financiare anuale', date: '[ANUL]', size: 'PDF' },
    { title: 'Certificat de inregistrare fiscala', date: '—', size: 'PDF' },
  ];
  const Person = ({ p, i }) => (
    <div style={{ borderTop: '1px solid var(--line)', padding: '24px 0', display: 'grid', gridTemplateColumns: '1fr 3fr 2fr', gap: 16, alignItems: 'center' }}>
      <span className="asociatia-mono" style={{ fontSize: 12, letterSpacing: '0.1em', color: 'var(--muted)' }}>0{i + 1}</span>
      <span style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.012em' }}>{p.name}</span>
      <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.4, textAlign: 'right' }}>{p.role}</span>
    </div>
  );
  return (
    <Sec id="guvernanta" bg="default" topRule>
      <Ctr>
        <SecHeader id="§ 03" eyebrow="Guvernanta" title="Cum este condusa Asociatia." intro="Asociatia este condusa de un Consiliu Director ales pentru un mandat de 10 ani si raspunde in fata Adunarii Generale formate din membrii fondatori. Toate documentele constitutive si financiare sunt accesibile public." />
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span className="asociatia-mono" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--ink-2)' }}>A · Membri fondatori</span>
              <span className="asociatia-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>2016</span>
            </div>
            <div style={{ borderBottom: '1px solid var(--line)' }}>{founders.map((p, i) => <Person p={p} i={i} key={i} />)}</div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, marginTop: 56 }}>
              <span className="asociatia-mono" style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--ink-2)' }}>B · Consiliul Director</span>
              <span className="asociatia-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>Mandat 2025 — 2035</span>
            </div>
            <div style={{ borderBottom: '1px solid var(--line)' }}>{board.map((p, i) => <Person p={p} i={i} key={i} />)}</div>
          </div>

          <div>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                <Icon.Shield size={18} />
                <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em' }}>C · Documente publice</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20, marginTop: 4 }}>Transparenta completa catre parteneri, donatori si institutii publice.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {docs.map((d, i) => (
                  <li key={i} style={{ borderTop: '1px solid var(--line)', padding: '14px 0' }}>
                    <a href="#" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
                      <span style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon.File size={16} />
                      </span>
                      <span style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ display: 'block', fontSize: 14, fontWeight: 500, letterSpacing: '-0.005em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.title}</span>
                        <span className="asociatia-mono" style={{ display: 'block', fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{d.date} · {d.size}</span>
                      </span>
                      <Icon.Download size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
            <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ border: '1px solid var(--line)', borderRadius: 12, padding: 16, background: 'var(--bg-2)' }}>
                <div className="asociatia-mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)' }}>Inregistrare</div>
                <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.4 }}>Judecatoria Timisoara, Reg. Special nr. 65 / 25.05.2016</div>
              </div>
              <div style={{ border: '1px solid var(--line)', borderRadius: 12, padding: 16, background: 'var(--bg-2)' }}>
                <div className="asociatia-mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)' }}>CIF</div>
                <div className="asociatia-mono" style={{ fontSize: 14, marginTop: 6 }}>36177950</div>
              </div>
            </div>
          </div>
        </div>
      </Ctr>
    </Sec>
  );
};

// ─── PROJECTS ───────────────────────────────────────────────────────────────
const Projects = () => {
  const projects = [
    { tag: 'DECODEX', code: 'SMIS 336873', title: 'Platforma programabila de CAR-T cu adaptori', desc: 'Sistem cu capacitate de bancare a celulelor imune si terapie celulara modulara, dezvoltat intr-un consortiu multi-partener cu finantare europeana.', status: 'In derulare', meta: ['Consortiu UE', 'CAR-T', 'Cell banking'] },
    { tag: 'TheraFast', code: '—', title: '[Titlu proiect — placeholder]', desc: 'Scurta descriere a proiectului TheraFast — obiective, parteneri si rezultatele tinta. Continutul va fi completat ulterior.', status: 'Activ', meta: ['Parteneriat EU', 'Manufacturing'] },
    { tag: '[N+1]', code: '—', title: 'Proiect viitor', desc: 'Spatiu rezervat pentru un proiect aditional in derulare prin Asociatia OncoGen. Va fi documentat la lansare.', status: 'Plan', meta: ['TBD'] },
  ];
  return (
    <Sec id="proiecte" bg="sand" topRule>
      <Ctr>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, alignItems: 'end', marginBottom: 48 }}>
          <SecHeader id="§ 04" eyebrow="Proiecte" title={<>Proiecte derulate<br />prin Asociatie.</>} />
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>Lista completa a cercetarii derulate la Centrul OncoGen este disponibila pe pagina de Proiecte. Mai jos, proiectele in care Asociatia este beneficiar direct sau partener consorțial.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {projects.map((p, i) => (
            <article key={i} style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 16, padding: '28px 36px', display: 'grid', gridTemplateColumns: '3fr 7fr 2fr', gap: 32, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Pill accent>{p.tag}</Pill>
                  <Pill>{p.status}</Pill>
                </div>
                <div className="asociatia-mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 12, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{p.code}</div>
              </div>
              <div>
                <h3 style={{ fontWeight: 500, letterSpacing: '-0.012em', fontSize: 'clamp(20px,2vw,26px)', lineHeight: 1.18, margin: 0 }}>{p.title}</h3>
                <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>{p.desc}</p>
                <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.meta.map((m, j) => (
                    <span key={j} className="asociatia-mono" style={{ fontSize: 12, color: 'var(--muted)', padding: '4px 8px', background: 'var(--bg)', borderRadius: 6, border: '1px solid var(--line)' }}>{m}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <a href="#" onClick={e => e.preventDefault()} className="asociatia-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)', textDecoration: 'none' }}>
                  Detalii <Icon.ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <Btn href="/proiecte" variant="ink" size="md" iconRight={<Icon.ArrowRight size={15} />}>Vezi toate proiectele Centrului OncoGen</Btn>
        </div>
      </Ctr>
    </Sec>
  );
};

// ─── GET INVOLVED ────────────────────────────────────────────────────────────
const GetInvolved = () => (
  <Sec id="implica-te" bg="white" topRule>
    <Ctr>
      <SecHeader id="§ 05" eyebrow="Implica-te" title={<>Sprijina cercetarea romaneasca<br /><span style={{ color: 'var(--muted)' }}>in terapii avansate.</span></>} intro="Asociatia OncoGen functioneaza prin sprijinul donatorilor individuali, sponsorilor corporativi si partenerilor institutionali. Fiecare contributie merge integral catre realizarea scopului non-patrimonial al Asociatiei — cercetare, formare si transfer tehnologic." max={780} />
      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 20 }}>
        {/* Card A */}
        <div style={{ background: 'var(--ink)', color: 'white', borderRadius: 16, padding: '32px 40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon.Heart size={20} />
            </div>
            <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', opacity: 0.5 }}>A · Persoane fizice</span>
          </div>
          <h3 style={{ marginTop: 32, fontWeight: 500, letterSpacing: '-0.018em', lineHeight: 1.05, fontSize: 'clamp(26px,3vw,36px)' }}>Donatie individuala</h3>
          <p className="asociatia-serif" style={{ fontSize: 18, color: 'rgba(255,255,255,.7)', marginTop: 8 }}>Pentru cercetatori, pentru pacienti, pentru viitor.</p>
          <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.85)' }}>Sustine direct cercetarea printr-o donatie unica sau recurenta. Orice suma conteaza.</p>
          <div style={{ marginTop: 28 }}>
            <Btn as="a" href="mailto:asociatiaoncogen@oncogen.ro" variant="primary" size="lg" iconRight={<Icon.ArrowRight size={16} />}>Contacteaza-ne pentru donatie</Btn>
          </div>
          <Disclosure summary="Transfer bancar — IBAN RON & EUR" defaultOpen>
            <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: 16 }}>
              <IBANRowDark currency="RON" value="RO88 RZBR 0000 0600 1871 7384" label="Cont in lei" />
              <IBANRowDark currency="EUR" value="RO33 RZBR 0000 0600 1916 7872" label="Cont in euro" />
              <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12.5 }}>
                <div>
                  <div className="asociatia-mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,.5)', marginBottom: 4 }}>Banca</div>
                  <div>Raiffeisen Bank · Ag. Aries</div>
                </div>
                <div>
                  <div className="asociatia-mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,.5)', marginBottom: 4 }}>Beneficiar</div>
                  <div>Asociatia OncoGen · CIF 36177950</div>
                </div>
              </div>
            </div>
          </Disclosure>
          <div style={{ marginTop: 8, border: '1px solid rgba(233,30,99,.4)', background: 'rgba(233,30,99,.1)', borderRadius: 12, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
              <div className="asociatia-mono" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1, color: 'var(--accent)' }}>3,5%</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 15, letterSpacing: '-0.005em' }}>Redirectioneaza din impozit</div>
                <p style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,.75)' }}>Daca esti angajat in Romania, poti redirectiona 3,5% din impozitul pe venit catre Asociatia OncoGen, fara niciun cost personal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards B + C */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Briefcase size={20} />
              </div>
              <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)' }}>B · Persoane juridice</span>
            </div>
            <h3 style={{ marginTop: 28, fontWeight: 500, letterSpacing: '-0.018em', lineHeight: 1.05, fontSize: 'clamp(24px,2.6vw,32px)' }}>Sponsorizare corporativa</h3>
            <p className="asociatia-serif" style={{ fontSize: 17, color: 'var(--muted)', marginTop: 8 }}>Pentru companii care contribuie la sanatate si inovatie.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '20px 0', margin: '20px 0' }}>
              {[['20%', 'din impozitul pe profit'], ['0,75%', 'din cifra de afaceri (limita)'], ['L. 32/1994', 'privind sponsorizarea']].map(([v, l], i) => (
                <div key={i}>
                  <div className="asociatia-mono" style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>{v}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 4, lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>Conform Legii 32/1994 si Codului fiscal, companiile pot directiona pana la 20% din impozitul pe profit (in limita a 0,75% din cifra de afaceri) catre Asociatia OncoGen.</p>
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Btn as="a" href="mailto:asociatiaoncogen@oncogen.ro" variant="ink" icon={<Icon.Download size={15} />}>Solicita contract-cadru</Btn>
              <Btn as="a" href="#contact" variant="outline">Discuta cu echipa</Btn>
            </div>
          </Card>

          <div id="parteneri">
            <Card style={{ background: 'var(--bg-3)' }}>
              <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-2)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon.Network size={20} />
                </div>
                <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--muted)' }}>C · Institutional</span>
              </div>
              <h3 style={{ marginTop: 28, fontWeight: 500, letterSpacing: '-0.018em', lineHeight: 1.05, fontSize: 'clamp(24px,2.6vw,32px)' }}>Parteneriat institutional</h3>
              <p className="asociatia-serif" style={{ fontSize: 17, color: 'var(--muted)', marginTop: 8 }}>Pentru organizatii, universitati si companii biotech-farma.</p>
              <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                {['Co-finantare si consortii pentru Horizon Europe, EIC, EIT Health, ERA-NET', 'Manufacturing, scale-up si transfer tehnologic pentru terapii celulare si genice', 'Studii clinice, colaborari preclinice si schimburi de expertiza', 'Acces la infrastructura CDI pentru proiecte comune'].map((it, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 14, lineHeight: 1.55 }}>
                    <span style={{ marginTop: 2, color: 'var(--accent)', flexShrink: 0 }}><Icon.Check size={15} /></span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Btn href="#contact" variant="primary" iconRight={<Icon.ArrowRight size={15} />}>Initiaza o discutie</Btn>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Ctr>
  </Sec>
);

// ─── MEMBERS ────────────────────────────────────────────────────────────────
const Members = () => {
  const types = [
    { letter: 'A', title: 'Membri activi', desc: 'Profesionisti care lucreaza efectiv in domeniul cercetarii medicale si contribuie la activitatea stiintifica.' },
    { letter: 'B', title: 'Membri asociati', desc: 'Persoane fizice si juridice cu rol semnificativ in activitatea Asociatiei. Pot primi drept de vot prin hotarare a Adunarii Generale, in functie de implicare.' },
    { letter: 'C', title: 'Membri sustinatori', desc: 'Persoane fizice si juridice care contribuie financiar sau material la misiunea Asociatiei.' },
    { letter: 'D', title: 'Membri de onoare', desc: 'Personalitati cu contributii deosebite la dezvoltarea cercetarii medicale si a terapiilor avansate, propuse de Consiliul Director.' },
  ];
  return (
    <Sec id="membri" bg="default" topRule>
      <Ctr>
        <SecHeader id="§ 06" eyebrow="Comunitate" title="Devino membru." intro="Asociatia functioneaza pe patru categorii de membri, in functie de gradul de implicare si expertiza. Calitatea de membru se obtine prin cerere de adeziune adresata Adunarii Generale." />
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {types.map((t, i) => (
            <Card key={i}>
              <div style={{ display: 'flex', alignItems: 'start', gap: 20 }}>
                <div className="asociatia-serif" style={{ fontSize: 'clamp(48px,5vw,64px)', lineHeight: 0.85, color: 'var(--accent)', userSelect: 'none', flexShrink: 0 }}>{t.letter}</div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.012em', margin: 0 }}>{t.title}</h3>
                  <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-2)' }}>{t.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <Btn as="a" href="mailto:asociatiaoncogen@oncogen.ro" variant="ink" icon={<Icon.Download size={15} />}>Solicita cererea de adeziune</Btn>
          <Btn as="a" href="mailto:asociatiaoncogen@oncogen.ro" variant="outline" iconRight={<Icon.ArrowRight size={15} />}>Aplica online</Btn>
        </div>
      </Ctr>
    </Sec>
  );
};

// ─── CONTACT ────────────────────────────────────────────────────────────────
const Contact = () => {
  const channels = [
    { label: 'General', email: 'asociatiaoncogen@oncogen.ro' },
    { label: 'Sponsorizari corporate', email: 'asociatiaoncogen@oncogen.ro' },
    { label: 'Parteneriate institutionale', email: 'asociatiaoncogen@oncogen.ro' },
    { label: 'Intrebari despre proiecte', email: 'office@oncogen.ro' },
  ];
  const fiscal = [
    ['Denumire', 'Asociatia OncoGen'],
    ['CIF', '36177950'],
    ['Inregistrare', 'Judecatoria Timisoara, Reg. Special Asociatii nr. 65 / 25.05.2016'],
    ['Sediu social', 'Str. Wilhelm Tell, Nr. 1, Timisoara, jud. Timis'],
    ['Puncte de lucru', 'Centru CDI si centru de cazare, aceeasi adresa'],
  ];
  return (
    <Sec id="contact" bg="ink" topRule>
      <Ctr>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span className="asociatia-mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'rgba(255,255,255,.4)' }}>§ 07</span>
              <span style={{ height: 1, width: 32, background: 'rgba(255,255,255,.3)' }} />
              <span className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,.7)' }}>Contact</span>
            </div>
            <h2 style={{ marginTop: 20, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.02, fontSize: 'clamp(36px,5.5vw,68px)' }}>Date de contact.</h2>
            <p style={{ marginTop: 24, maxWidth: 480, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.7)' }}>Pentru sponsorizari, parteneriate, propuneri de cercetare sau orice intrebare despre activitatea Asociatiei, scrie-ne la canalele de mai jos.</p>
            <div style={{ marginTop: 48 }}>
              <h3 className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>Canale de comunicare</h3>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                {channels.map((c, i) => (
                  <a key={i} href={`mailto:${c.email}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', color: 'rgba(255,255,255,.85)', textDecoration: 'none', borderTop: i > 0 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <Icon.Mail size={18} />
                      <div>
                        <div className="asociatia-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,.5)' }}>{c.label}</div>
                        <div style={{ fontSize: 16, marginTop: 4, letterSpacing: '-0.005em' }}>{c.email}</div>
                      </div>
                    </div>
                    <Icon.ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div style={{ border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, background: 'rgba(255,255,255,.03)', padding: '28px 32px' }}>
              <h3 className="asociatia-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,.5)', marginBottom: 20 }}>Date institutionale</h3>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {fiscal.map(([k, v], i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 12, paddingBottom: 16, borderBottom: i < fiscal.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
                    <dt className="asociatia-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,.5)' }}>{k}</dt>
                    <dd style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,.95)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'start', gap: 12 }}>
                <Icon.MapPin size={16} />
                <p style={{ fontSize: 12.5, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', fontStyle: 'italic', margin: 0 }}>
                  Asociatia OncoGen este inregistrata ca persoana juridica de drept privat, non-profit. Toate veniturile sunt utilizate exclusiv pentru realizarea scopului statutar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Ctr>
    </Sec>
  );
};

// ─── PAGE ───────────────────────────────────────────────────────────────────
export default function AsociatiaPage() {
  return (
    <div className="asociatia-root">
      <style>{cssVars}</style>
      <main>
        <Hero />
        <Mission />
        <Governance />
        <Projects />
        <GetInvolved />
        <Members />
        <Contact />
      </main>
    </div>
  );
}
