'use client';

import Link from 'next/link';
import { useState } from 'react';

const doctoranziInCurs = [
    { id: 1, name: 'Petra CURESCU', email: 'petcurescu@gmail.com' },
    { id: 2, name: 'Flavia Anne-Elise SZEKELY', email: 'flavia_anelise@yahoo.com' },
    { id: 3, name: 'Alexandru TÎRZIU', email: 'alex.tirziu@gmail.com' },
    { id: 4, name: 'Cristian-Horia CONSTANTIN', email: 'cristian.constantin@oncogen.ro' },
    { id: 5, name: 'Alexandra IVAN', email: 'ivan.alexandra@umft.ro' },
    { id: 6, name: 'Leonard MADA', email: 'leo.mada@syonic.eu' },
    { id: 7, name: 'Daniela-Vasilica ȘERBAN', email: 'sdv.serban@gmail.com' },
];

const doctoranziAbsolventi = [
    {
        id: 8,
        name: 'Maria Cristiana MABDA',
        email: 'proks.maria@yahoo.ro',
        teza: 'BIOSINTEZA ȘI FORMULĂRILE PE BAZĂ DE EXTRACT DE THYMUS VULGARIS ÎN ABORDAREA CANCERULUI MAMAR: STUDII EXPERIMENTALE IN VITRO',
    },
    {
        id: 9,
        name: 'Lavinia Paula DRĂGHIA',
        email: 'draghia_lavinia@yahoo.com',
        teza: 'ROLUL FACTORILOR DE MEDIU IMPLICAȚI ÎN ETIOLOGIA MULTIFACTORIALĂ A BOLILOR CRONICE DE RINICHI',
    },
    {
        id: 10,
        name: 'Gheorghe Emilian OLTEANU',
        email: 'olteanugheorgheemilian@gmail.com',
        teza: 'DEVELOPMENT, ANALYSIS, AND EVOLUTION OF MULTISPECIFIC CAR-T LYMPHOCYTES IN THE IMMUNOTHERAPY OF CANCER',
    },
    {
        id: 11,
        name: 'Greta Ionela BĂRBULESCU',
        email: 'greta.barbulescu@gmail.com',
        teza: 'INNOVATIVE BIOTECHNOLOGY FOR GENERATION OF CARDIAC TISSUE USING ANIMAL MODEL',
    },
];

export default function SustinereCercetareDoctoralPage() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleAccordion = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> /{' '}
                    <span>Susținere Cercetare Doctorală</span>
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

                    <div className="patents-accordion">
                        {doctoranziInCurs.map((d) => (
                            <div key={d.id} className="accordion-item">
                                <button
                                    className={`accordion-header ${expandedId === d.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(d.id)}
                                    aria-expanded={expandedId === d.id}
                                >
                                    <span className="accordion-title">{d.name}</span>
                                    <span className="accordion-toggle-btn">
                                        {expandedId === d.id ? '−' : '+'}
                                    </span>
                                </button>
                                {expandedId === d.id && (
                                    <div className="accordion-content">
                                        <p>
                                            <strong>Email:</strong>{' '}
                                            <a href={`mailto:${d.email}`} className="doctoral-email">
                                                {d.email}
                                            </a>
                                        </p>
                                    </div>
                                )}
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

                    <div className="patents-accordion">
                        {doctoranziAbsolventi.map((d) => (
                            <div key={d.id} className="accordion-item">
                                <button
                                    className={`accordion-header ${expandedId === d.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(d.id)}
                                    aria-expanded={expandedId === d.id}
                                >
                                    <span className="accordion-title">{d.name}</span>
                                    <span className="accordion-toggle-btn">
                                        {expandedId === d.id ? '−' : '+'}
                                    </span>
                                </button>
                                {expandedId === d.id && (
                                    <div className="accordion-content">
                                        <p>
                                            <strong>Email:</strong>{' '}
                                            <a href={`mailto:${d.email}`} className="doctoral-email">
                                                {d.email}
                                            </a>
                                        </p>
                                        {d.teza && (
                                            <p style={{ marginTop: '10px' }}>
                                                <strong>Titlul tezei:</strong> {d.teza}
                                            </p>
                                        )}
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
