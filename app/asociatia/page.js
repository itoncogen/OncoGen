import Link from 'next/link';
import Image from 'next/image';

export default function AsociatiaPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Asociația OncoGen</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Asociația OncoGen</h1>
                    <p>Sprijin pentru cercetarea științifică românească</p>
                </div>
            </section>

            {/* First Block - About Section */}
            <section className="content-section">
                <div className="container">
                    <div className="content-card description-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
                            <Image 
                                src="/images/logo-asociatia-oncogen.png" 
                                alt="Logo Asociația OncoGen" 
                                width={400}
                                height={160}
                                style={{ objectFit: 'contain', flexShrink: 0 }}
                            />
                            <div>
                                <p style={{ margin: 0, color: 'var(--magenta)', fontWeight: '700', fontSize: '24px' }}>FII ALĂTURI DE NOI!</p>
                            </div>
                        </div>

                        <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                            Asociația OncoGen sprijină cercetarea științifică românească și susține echipa OncoGen,
                            ale cărui proiecte au contribuit la plasarea cercetării medicale românești alături de cea
                            realizată de importante institute de cercetare și universități din Europa și din întreaga lume.
                        </p>

                        <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                            Datorăm o mare parte din ceea ce am realizat dedicării continue a celor care au susținut
                            echipa OncoGen.
                        </p>

                        <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                            Vă mulțumim, așadar, fiecăruia dintre dumneavoastră și vă asigurăm de recunoștința noastră
                            de nezdruncinat pentru că sunteți alături de noi.
                        </p>

                        <p style={{ lineHeight: '1.8' }}>
                            Dacă doriți în continuare să sprijiniți echipa OncoGen în eforturile sale de a tinde spre
                            excelență în cercetarea științifică medicală românească, puteți contribui la oricare dintre
                            proiectele OncoGen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Second Block - How to Contribute Section */}
            <section className="content-section" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="content-card description-card">
                        <h3 style={{ color: 'var(--magenta)', fontSize: '20px', marginBottom: '25px', fontWeight: '700' }}>CUM POȚI CONTRIBUI</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                            <div style={{ backgroundColor: 'var(--light-gray)', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--black)', marginBottom: '10px', fontSize: '16px' }}>Cont în RON:</h4>
                                <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--magenta)', fontWeight: '600', wordBreak: 'break-all' }}>
                                    RO88 RZBR 0000 0600 1871 7384
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'var(--light-gray)', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--black)', marginBottom: '10px', fontSize: '16px' }}>Cont în EURO:</h4>
                                <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--magenta)', fontWeight: '600', wordBreak: 'break-all' }}>
                                    RO33 RZBR 0000 0600 1916 7872
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <p style={{ marginBottom: '8px' }}><strong>Banca:</strong> Raiffeisen Bank, Agenția Arieș</p>
                            <p style={{ marginBottom: '8px' }}><strong>Denumire:</strong> Asociația OncoGen</p>
                            <p style={{ marginBottom: '8px' }}><strong>C.U.I.:</strong> 36177950</p>
                            <p><strong>Înregistrare:</strong> Judecătoria Timișoara, Registrul Special Asociații nr. 65/25.05.2016</p>
                        </div>

                        <div style={{ borderTop: '1px solid var(--light-gray)', paddingTop: '25px' }}>
                            <p style={{ marginBottom: '15px' }}>
                                Pentru a obține un formular de sponsorizare sau pentru orice alte detalii, nu ezitați să ne
                                contactați la:
                            </p>
                            <p style={{ marginBottom: '20px' }}>
                                <a href="mailto:asociatiaoncogen@oncogen.ro" style={{ color: 'var(--magenta)', fontWeight: '600', textDecoration: 'none' }}>
                                    asociatiaoncogen@oncogen.ro
                                </a>
                            </p>
                            <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--magenta)' }}>
                                Vă mulțumim!
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}>
                            <a href="mailto:asociatiaoncogen@oncogen.ro" className="btn btn-primary">Contactează-ne</a>
                            <Link href="/contact" className="btn btn-secondary">Alte Contacte</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
