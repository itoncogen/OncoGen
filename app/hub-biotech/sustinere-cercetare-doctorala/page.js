import Link from 'next/link';

const doctoranziInCurs = [
    { name: 'Petra CURESCU', email: 'petcurescu@gmail.com' },
    { name: 'Flavia Anne-Elise SZEKELY', email: 'flavia_anelise@yahoo.com' },
    { name: 'Alexandru TÎRZIU', email: 'alex.tirziu@gmail.com' },
    { name: 'Cristian-Horia CONSTANTIN', email: 'cristian.constantin@oncogen.ro' },
    { name: 'Alexandra IVAN', email: 'ivan.alexandra@umft.ro' },
    { name: 'Leonard MADA', email: 'leo.mada@syonic.eu' },
    { name: 'Daniela-Vasilica ȘERBAN', email: 'sdv.serban@gmail.com' },
];

const doctoranziAbsolventi = [
    {
        name: 'Maria Cristiana MABDA',
        email: 'proks.maria@yahoo.ro',
        teza: 'BIOSINTEZA ȘI FORMULĂRILE PE BAZĂ DE EXTRACT DE THYMUS VULGARIS ÎN ABORDAREA CANCERULUI MAMAR: STUDII EXPERIMENTALE IN VITRO',
    },
    {
        name: 'Lavinia Paula DRĂGHIA',
        email: 'draghia_lavinia@yahoo.com',
        teza: 'ROLUL FACTORILOR DE MEDIU IMPLICAȚI ÎN ETIOLOGIA MULTIFACTORIALĂ A BOLILOR CRONICE DE RINICHI',
    },
    {
        name: 'Gheorghe Emilian OLTEANU',
        email: 'olteanugheorgheemilian@gmail.com',
        teza: 'DEVELOPMENT, ANALYSIS, AND EVOLUTION OF MULTISPECIFIC CAR-T LYMPHOCYTES IN THE IMMUNOTHERAPY OF CANCER',
    },
    {
        name: 'Greta Ionela BĂRBULESCU',
        email: 'greta.barbulescu@gmail.com',
        teza: 'INNOVATIVE BIOTECHNOLOGY FOR GENERATION OF CARDIAC TISSUE USING ANIMAL MODEL',
    },
];

export default function SustinereCercetareDoctoralPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> / <span>Susținere Cercetare Doctorală</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Susținere Cercetare Doctorală</h1>
                    <p>
                        Oncogen asigură mentorat, asistență și condiții de lucru performante pentru derularea de studii
                        doctorale în domeniul biotehnologiilor.
                    </p>
                </div>
            </section>

            {/* Doctoranzi în curs */}
            <section className="content-section">
                <div className="container">
                    <h2>Doctoranzi în curs</h2>
                    <p className="section-intro">
                        Coordonator: <strong>Prof. univ. dr. Păunescu Virgil</strong>
                    </p>
                    <div className="content-grid doctoral-grid">
                        {doctoranziInCurs.map((d) => (
                            <div key={d.email} className="content-card doctoral-card">
                                <h3>{d.name}</h3>
                                <p>
                                    <a href={`mailto:${d.email}`} className="doctoral-email">{d.email}</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctoranzii absolvenți */}
            <section className="content-section bg-light">
                <div className="container">
                    <h2>Doctoranzii absolvenți</h2>
                    <p className="section-intro">
                        Coordonator: <strong>Prof. univ. dr. Păunescu Virgil</strong>
                    </p>
                    <div className="content-grid doctoral-grid">
                        {doctoranziAbsolventi.map((d) => (
                            <div key={d.email} className="content-card doctoral-card doctoral-card-absolventi">
                                <h3>{d.name}</h3>
                                <p>
                                    <a href={`mailto:${d.email}`} className="doctoral-email">{d.email}</a>
                                </p>
                                <p className="doctoral-teza">
                                    <strong>Titlul tezei:</strong> {d.teza}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="section-cta">
                        <Link href="/hub-biotech" className="btn btn-primary">
                            Înapoi la Hub Biotehnologii
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
