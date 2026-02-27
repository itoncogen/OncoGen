import Link from 'next/link';

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

            <section id="association" className="association-page">
                <div className="container">
                    <div className="association-header">
                        <div className="association-logo">
                            <div className="logo-circle">❤️</div>
                        </div>
                        <div className="association-content">
                            <h2>ASOCIAȚIA ONCOGEN</h2>
                            <p className="association-tagline">FII ALĂTURI DE NOI!</p>
                        </div>
                    </div>

                    <div className="association-body">
                        <div className="association-text">
                            <p>
                                Asociația OncoGen sprijină cercetarea științifică românească și susține echipa OncoGen,
                                ale cărei proiecte au contribuit la plasarea cercetării medicale românești alături de cea
                                realizată de importante institute de cercetare și universități din Europa și din întreaga lume.
                            </p>

                            <p>
                                Datorăm o mare parte din ceea ce am realizat la dedicarea continuă a celor care au susținut
                                echipa OncoGen.
                            </p>

                            <p>
                                Vă mulțumim, așadar, fiecăruia dintre dumneavoastră și vă asigurăm de recunoștința noastră
                                de nezdruncinat pentru că sunteți alături de noi.
                            </p>

                            <p>
                                Dacă doriți în continuare să sprijiniți echipa OncoGen în eforturile sale de a tinde spre
                                excelență în cercetarea științifică medicală românească, puteți contribui la oricare dintre
                                proiectele OncoGen.
                            </p>
                        </div>

                        <div className="association-donation">
                            <h3>Cum Poti Contribui</h3>
                            <div className="donation-accounts">
                                <div className="account">
                                    <h4>Cont în RON:</h4>
                                    <p className="account-number">RO88 RZBR 0000 0600 1871 7384</p>
                                </div>
                                <div className="account">
                                    <h4>Cont în EURO:</h4>
                                    <p className="account-number">RO33 RZBR 0000 0600 1916 7872</p>
                                </div>
                            </div>
                            <div className="donation-info">
                                <p><strong>Banca:</strong> Raiffeisen Bank, Agenția Arieș</p>
                                <p><strong>Denumire:</strong> Asociația OncoGen</p>
                                <p><strong>C.U.I.:</strong> 36177950</p>
                                <p><strong>Înregistrare:</strong> Judecătoria Timișoara, Registrul Special Asociații nr. 65/25.05.2016</p>
                            </div>
                        </div>
                    </div>

                    <div className="association-footer">
                        <p>
                            Pentru a obține un formular de sponsorizare sau pentru orice alte detalii, nu ezitați să ne
                            contactați la:
                        </p>
                        <p>
                            <a href="mailto:asociatiaoncogen@oncogen.ro" className="contact-link">asociatiaoncogen@oncogen.ro</a>
                        </p>
                        <p style={{ marginTop: '20px', fontSize: '16px', fontWeight: '600' }}>
                            Vă mulțumim!
                        </p>
                    </div>

                    <div className="association-cta" style={{ marginTop: '50px' }}>
                        <a href="mailto:asociatiaoncogen@oncogen.ro" className="btn btn-white">Contactează-ne</a>
                        <Link href="/contact" className="btn btn-secondary">Alte Contacte</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
