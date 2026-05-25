import Image from 'next/image';
import Link from 'next/link';

export default function AsociatiaPage() {
  return (
    <main className="asoc-page">

      {/* ── BREADCRUMB ── */}
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Acasă</Link> / <span>Asociația OncoGen</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="asoc-hero">
        <Image
          src="/images/centruoncogen.jpeg"
          alt="Clădirea OncoGen"
          fill
          className="asoc-hero-img"
          priority
        />
        <div className="asoc-hero-overlay" />
        <div className="asoc-hero-content">
          <span className="asoc-arrow">&#9658;</span>
          <h1 className="asoc-hero-title">Fiți alături de noi!</h1>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="asoc-body">
        <div className="asoc-container">

          {/* Logo */}
          <div className="asoc-logo-wrap">
            <Image
              src="/images/logo-asociatia-oncogen.svg"
              alt="Logo Asociația OncoGen"
              width={280}
              height={200}
              className="asoc-logo"
            />
          </div>

          {/* Titlu sectiune */}
          <div className="asoc-section-title">
            <span className="asoc-arrow asoc-arrow-pink">&#9658;</span>
            <h2 className="asoc-subtitle">Fiți alături de noi!</h2>
          </div>

          {/* Text descriptiv */}
          <div className="asoc-text">
            <p>
              Asociația OncoGen sprijină cercetarea științifică românească și susține echipa OncoGen, ale cărei proiecte au contribuit la plasarea cercetării medicale românești alături de cea realizată de importante institute de cercetare și universități din Europa și din întreaga lume.
            </p>
            <p>
              Datorăm o mare parte din ceea ce am realizat la dedicarea continuă a celor care au susținut echipa OncoGen.
            </p>
            <p>
              Vă mulțumim, așadar, fiecăruia dintre dumneavoastră și vă asigurăm de recunoștința noastră pentru că sunteți alături de noi.
            </p>
            <p>
              Dacă doriți în continuare să sprijiniți echipa OncoGen în eforturile sale de a tinde spre excelență în cercetarea științifică medicală românească, puteți contribui la oricare dintre proiectele OncoGen aici:
            </p>
          </div>

          <hr className="asoc-divider" />

          {/* Date bancare */}
          <div className="asoc-bank">
            <p><span>Cont Ron:</span> <strong>RO88 RZBR 0000 0600 1871 7384</strong></p>
            <p><span>Cont Euro:</span> <strong>RO33 RZBR 0000 0600 1916 7872</strong></p>
            <p>Banca: Raiffeisen Bank, Agenția Arieș</p>
            <p>Asociația OncoGen</p>
            <p>Judecătoria Timișoara, Registrul Special Asociații nr.<strong>65/25.05.2016</strong></p>
            <p>C.U.I.: <strong>36177950</strong></p>
          </div>

          <hr className="asoc-divider" />

          {/* Contact */}
          <div className="asoc-text">
            <p>
              Pentru a obține un formular de sponsorizare sau pentru orice alte detalii, nu ezitați să ne contactați la{' '}
              <a href="mailto:asociatiaoncogen@oncogen.ro" className="asoc-link">
                asociatiaoncogen@oncogen.ro
              </a>
              .
            </p>
            <p>Vă mulțumim!</p>
          </div>

        </div>
      </section>

      <style>{`
        .asoc-page {
          font-family: inherit;
          color: #333;
        }

        /* HERO */
        .asoc-hero {
          position: relative;
          height: 340px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .asoc-hero-img {
          object-fit: cover;
          object-position: bottom;
        }
        .asoc-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%);
        }
        .asoc-hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 60px 48px;
        }
        .asoc-hero-title {
          font-size: 38px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .asoc-arrow {
          color: #d60080;
          font-size: 28px;
          line-height: 1;
          flex-shrink: 0;
        }

        /* BODY */
        .asoc-body {
          background: #fff;
          padding: 48px 0 80px;
        }
        .asoc-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* LOGO */
        .asoc-logo-wrap {
          margin-bottom: 32px;
        }
        .asoc-logo {
          max-width: 260px;
          height: auto;
        }

        /* SECTION TITLE */
        .asoc-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .asoc-arrow-pink {
          font-size: 20px;
        }
        .asoc-subtitle {
          font-size: 18px;
          font-weight: 700;
          color: #d60080;
          margin: 0;
        }

        /* TEXT */
        .asoc-text p {
          font-size: 14px;
          line-height: 1.75;
          color: #444;
          margin: 0 0 14px 0;
        }
        .asoc-text p:last-child {
          margin-bottom: 0;
        }

        /* DIVIDER */
        .asoc-divider {
          border: none;
          border-top: 1px solid #ddd;
          margin: 28px 0;
        }

        /* BANK */
        .asoc-bank p {
          font-size: 14px;
          line-height: 1.9;
          color: #444;
          margin: 0;
        }
        .asoc-bank span {
          color: #444;
        }

        /* LINK */
        .asoc-link {
          color: #d60080;
          text-decoration: underline;
        }
        .asoc-link:hover {
          color: #a8005f;
        }

        @media (max-width: 768px) {
          .asoc-hero {
            height: 240px;
          }
          .asoc-hero-content {
            padding: 0 24px 32px;
          }
          .asoc-hero-title {
            font-size: 26px;
          }
          .asoc-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </main>
  );
}
