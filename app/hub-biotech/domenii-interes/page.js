'use client';

import Link from 'next/link';
import { useState } from 'react';

const domenii = [
    {
        id: 1,
        title: 'Metode și algoritmi de diagnostic de precizie',
        content:
            'În Oncogen a fost optimizată metodologia de analiză a probelor biologice în vederea realizării unui diagnostic molecular de precizie care să permită recomandări terapeutice personalizate. Metodele pot fi aplicabile atât în boala canceroasă cât și în alte boli netransmisibile, de exemplu alergiile.',
    },
    {
        id: 2,
        title: 'Tratamente inovative',
        content:
            'Considerăm că există potențial local de dezvoltare a unor tratamente inovative atât pentru unele boli degenerative, dar de asemenea și pentru cancer, boli alergice, boli infecțioase. Cele mai accesibile variante terapeutice ar fi reprezentate de terapiile celulare, inclusiv bazate pe generarea unor celule modificate genetic, precum și imunoterapiile bazate pe administrarea de peptide sintetice.',
    },
    {
        id: 3,
        title: 'Tehnologii emergente în IT medical',
        content:
            'În cadrul Hub-ului pentru Biotehnologii medicale avansate și Medicină translațională se va sprijini dezvoltarea sectorului de bioinformatică pentru designul in silico de peptide sintetice și ulterior producția acestor peptide care să fie utilizate pentru dezvoltarea de imunoterapii cu aplicabilitate în tratamentul bolilor non-comunicabile (cancer, boli alergice) și al bolilor infecțioase.',
    },
];

export default function DomeniiInteresPage() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleAccordion = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> /{' '}
                    <span>Domenii de Interes / Nișe Potențiale</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Domenii de Interes / Nișe Potențiale</h1>
                    <p>
                        Hub-ul pentru Biotehnologii medicale avansate și Medicină translațională OncoGen —
                        nișe potențiale de cercetare și inovare.
                    </p>
                </div>
            </section>

            {/* Domenii principale */}
            <section className="content-section">
                <div className="container">
                    <div className="patents-accordion">
                        {domenii.map((d) => (
                            <div key={d.id} className="accordion-item">
                                <button
                                    className={`accordion-header ${expandedId === d.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(d.id)}
                                    aria-expanded={expandedId === d.id}
                                >
                                    <span className="accordion-title">{d.title}</span>
                                    <span className="accordion-toggle-btn">
                                        {expandedId === d.id ? '−' : '+'}
                                    </span>
                                </button>
                                {expandedId === d.id && (
                                    <div className="accordion-content">
                                        <p>{d.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Știri relevante */}
            <section className="content-section bg-light">
                <div className="container">
                    <h2>Știri și anunțuri</h2>
                    <div className="patents-accordion">
                        {stiri.map((s) => (
                            <div key={s.id} className="accordion-item">
                                <button
                                    className={`accordion-header ${expandedId === s.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(s.id)}
                                    aria-expanded={expandedId === s.id}
                                >
                                    <span className="accordion-title">{s.title}</span>
                                    <span className="accordion-toggle-btn">
                                        {expandedId === s.id ? '−' : '+'}
                                    </span>
                                </button>
                                {expandedId === s.id && (
                                    <div className="accordion-content">
                                        <p>{s.content}</p>
                                    </div>
                                )}
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
