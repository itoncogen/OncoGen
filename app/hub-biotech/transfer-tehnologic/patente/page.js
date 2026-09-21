'use client';

import Link from 'next/link';
import { useState } from 'react';

const patents = [
    {
        id: 1,
        title: 'Product and method based on synthetic long peptides for preventing SARS-CoV-2 infection',
        patentId: 'RO-135709-A0',
        assignee: 'Spitalul Clinic Județean De Urgență "Pius Brînzeu" Timișoara',
        inventors: [
            'Maria Florina Bojin',
            'Oana-Isabella Gavriliuc',
            'Laurențiu Valentin Ordodi',
            'Andreas Ovidiu Sălagean',
            'Alexandru Țîrziu',
            'Carmen Panaitescu',
            'Virgil Păunescu',
        ],
        priorityDate: '20.01.2022',
        creationDate: '20.01.2022',
        publicationDate: '30.05.2022',
        resultsUrl: 'https://patents.google.com/patent/RO135709A0/en',
    },
    {
        id: 2,
        title: 'Device for reducing the microbiological load of the air exhaled by mechanically ventilated patients',
        patentId: 'RO-134883-B1',
        assignee: 'Universitatea Politehnica Din Timișoara, Universitatea De Medicină Și Farmacie "Victor Babeș" Timișoara, Asociația Pentru Ati "Aurel Mogosean", Spitalul Clinic Județean De Urgență "Pius Brînzeu"',
        inventors: [
            'Laurentiu Valentin Ordodi',
            'Gabriela Alina Dumitrel',
            'Ana-Maria Pană',
            'Anamaria Todea',
            'Liliana Mătiu-Iovan',
            'Raul Ciprian Ionel',
            'Dorel Săndesc',
            'Ovidiu Horea Bedreag',
            'Marius Păpurică',
            'Alexandru Florin Rogobete',
            'Ion Simion',
            'Alin Motica',
            'Dan Sergiu Groapă',
            'Virgil Păunescu',
            'Maria Florina Bojin',
            'Oana Isabela Gavriliuc',
        ],
        priorityDate: '22.05.2020',
        creationDate: '22.05.2020',
        publicationDate: '30.08.2022',
        resultsUrl: 'https://patents.google.com/patent/RO134883B1/en',
    },
    {
        id: 3,
        title: 'Cytotoxic cells carriers of universal chimeric antigen receptors targeting diverse and multiple antigens for adoptive therapy',
        patentId: 'RO-135043-A0',
        assignee: 'Spitalul Clinic Județean De Urgență "Pius Brînzeu" Timișoara',
        inventors: [
            'Cosmin-Eduard Nedea',
            'Virgil Păunescu',
            'Oana Isabela Gavriliuc',
            'Roxana Zogorean',
            'Alexandra Ivan',
            'Iustina-Mirabela Cristea',
            'Călin Adrian Tatu',
            'Maria Florina Bojin',
            'Simona-Sanda Anghel',
        ],
        priorityDate: '11.06.2020',
        creationDate: '11.06.2020',
        publicationDate: '30.06.2021',
        resultsUrl: 'https://patents.google.com/patent/RO135043A0/en',
    },
    {
        id: 4,
        title: 'Bispecific selective CAR-T cells for treating solid tumours and method for preparing the same',
        patentId: 'RO-135040-A0',
        assignee: 'Spitalul Clinic Județean De Urgență "Pius Brînzeu"',
        inventors: [
            'Maria Florina Bojin',
            'Oana-Isabella Gavriliuc',
            'Gabriela Tănasie',
            'Călin-Adrian Țațu',
            'Carmen Panaitescu',
            'Virgil Păunescu',
            'Cosmin-Eduard Nedea',
        ],
        priorityDate: '11.06.2020',
        creationDate: '11.06.2020',
        publicationDate: '30.06.2021',
        resultsUrl: 'https://patents.google.com/patent/RO135040A0/en',
    },
    {
        id: 5,
        title: 'Kit and method of use for the diagnosis of ragweed allergy',
        patentId: 'RO-134815-A0',
        assignee: 'Spitalul Clinic Județean De Urgență "Pius Brînzeu"',
        inventors: [
            'Carmen Panaitescu',
            'Chen Kuan-Wei',
            'Virgil Păunescu',
            'Maria Roxana Buzan',
        ],
        priorityDate: '30.09.2020',
        creationDate: '30.09.2020',
        publicationDate: '30.03.2021',
        resultsUrl: 'https://patents.google.com/patent/RO134815A0/en',
    },
    {
        id: 6,
        title: 'Microbiological box for providing the microclimate for bacterial films growth and development',
        patentId: 'RO-135526-A0',
        assignee: 'Universitatea De Științe Agricole Și Medicină Veterinară A Banatului "Regele Mihai I Al României" – Din Timișoara, Spitalul Clinic Județean De Urgență Pius Brînzeu Timișoara – Centrul Oncogen',
        inventors: [
            'Ioan Huțu',
            'Carmen Panaitescu',
            'Gabriela Tănasie',
            'Cristina Mirabela Gaspar',
            'Csilla Zambori',
            'Carmen Sofica Tatu',
            'Simona Sanda Anghel',
            'Oana-Isabella Gavriliuc',
            'Virgil Păunescu',
        ],
        priorityDate: '16.09.2021',
        creationDate: '16.09.2021',
        publicationDate: '28.02.2022',
        resultsUrl: 'https://patents.google.com/patent/RO135526A0/en',
    },
    {
        id: 7,
        title: 'Electrostatic device for measuring electrical voltage with optical indicator element',
        patentId: 'RO-137476-A0',
        assignee: 'Universitatea "Politehnica" Din Timișoara, Universitat E A "Politehnica" Din Timișoara, Asociația Oncogen, Asociația Oncohelp Timișoara, Biodim S.R.L.',
        inventors: [
            'Laurențiu Valentin Ordodi',
            'Doru Vatau',
            'Marin Salinschi',
            'Adrian Flavius Olariu',
            'Gabriela Alina Dumitrel',
            'Ana-Maria Pană',
            'Nicolae Vaszilcsin',
            'Mircea Laurențiu Dan',
            'Liliana Mătiu-Iovan',
            'Raul Ciprian Ionel',
            'Ioan Alexandru Udrea',
            'Daniel Dumitru Bonciog',
            'Denisa Alexandra Vereș',
            'Cristian Marcel Stănese',
            'Virgil Păunescu',
            'Maria Florina Bojin',
            'Oana Isabela Gavriliuc',
            'Alexandra Teodora Lukinich-Gruia',
            'Șerban Negru',
            'Daniela Crisnic',
            'Gigel Viorel Frunză',
        ],
        priorityDate: '14.10.2022',
        creationDate: '14.10.2022',
        publicationDate: '30.05.2023',
        resultsUrl: 'https://patents.google.com/patent/RO137476A0/en',
    },
    {
        id: 8,
        title: 'Isolation and purification of human insulin producing cells for the treatment of insulin dependent diabetes',
        patentId: 'US-2006148079-A1',
        assignee: 'Virgil Paunescu, Suciu Erika I., Tatu Calin A., Oprea Tudor I.',
        inventors: [
            'Virgil Paunescu',
            'Erika Suciu',
            'Călin Țațu',
            'Tudor Oprea',
        ],
        priorityDate: '03.01.2005',
        creationDate: '03.01.2005',
        publicationDate: '06.07.2006',
        resultsUrl: 'https://patents.google.com/patent/US2006148079A1/en',
        representativeFigure: 'https://patentimages.storage.googleapis.com/95/8f/5a/305e3202a8a864/US20060148079A1-20060706-D00001.png',
    },
];

export default function PatentePage() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleAccordion = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/hub-biotech">Hub Biotehnologii</Link> /{' '}
                    <Link href="/hub-biotech/transfer-tehnologic">Transfer Tehnologic</Link> / <span>Patente</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Patente</h1>
                    <p>Portofoliu de proprietate intelectuală al centrului OncoGen în aria de transfer tehnologic.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">

                    <div className="patents-accordion">
                        {patents.map((patent) => (
                            <div key={patent.id} className="accordion-item">
                                <button
                                    className={`accordion-header ${expandedId === patent.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(patent.id)}
                                >
                                    <span className="accordion-number">{patent.id}.</span>
                                    <span className="accordion-title">{patent.title}</span>
                                    <span className="accordion-toggle-btn">
                                        {expandedId === patent.id ? '−' : '+'}
                                    </span>
                                </button>
                                {expandedId === patent.id && (
                                    <div className="accordion-content">
                                        {patent.patentId && (
                                            <div className="patent-detail">
                                                <strong>ID:</strong> {patent.patentId}
                                            </div>
                                        )}
                                        {patent.assignee && (
                                            <div className="patent-detail">
                                                <strong>Asignare:</strong> {patent.assignee}
                                            </div>
                                        )}
                                        {patent.inventors.length > 0 && (
                                            <div className="patent-detail">
                                                <strong>Inventatori / Autori:</strong>
                                                <ul className="patent-inventors-list">
                                                    {patent.inventors.map((inventor, idx) => (
                                                        <li key={idx}>{inventor}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {patent.priorityDate && (
                                            <div className="patent-detail">
                                                <strong>Dată de prioritizare:</strong> {patent.priorityDate}
                                            </div>
                                        )}
                                        {patent.creationDate && (
                                            <div className="patent-detail">
                                                <strong>Data creării:</strong> {patent.creationDate}
                                            </div>
                                        )}
                                        {patent.publicationDate && (
                                            <div className="patent-detail">
                                                <strong>Data publicării:</strong> {patent.publicationDate}
                                            </div>
                                        )}
                                        {patent.resultsUrl && (
                                            <div className="patent-detail">
                                                <strong>Rezultate:</strong>{' '}
                                                <a href={patent.resultsUrl} target="_blank" rel="noopener noreferrer">
                                                    {patent.resultsUrl}
                                                </a>
                                            </div>
                                        )}
                                        {patent.representativeFigure && (
                                            <div className="patent-detail">
                                                <strong>Figură reprezentativă:</strong>{' '}
                                                <a href={patent.representativeFigure} target="_blank" rel="noopener noreferrer">
                                                    {patent.representativeFigure}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link href="/hub-biotech/transfer-tehnologic" className="btn btn-primary">
                            Înapoi la Transfer Tehnologic
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
