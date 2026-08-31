import Link from 'next/link';

export const metadata = {
    title: 'Noutăți științifice | OncoGen',
    description: 'Cele mai recente noutăți științifice din domeniul oncologiei și terapiilor celulare.',
};

const noutati = [
    {
        id: 1,
        titlu: 'Prima terapie CAR-T pentru tumori solide, aprobată în China',
        descriere: 'Satricabtagene autoleucel, denumită și satri-cel, este o terapie CAR-T autologă îndreptată împotriva CLDN18.2, o proteină exprimată predominant de epiteliul gastric și prezentă pe suprafața celulelor tumorale în anumite cancere gastrointestinale. În iunie 2026, compania dezvoltatoare a anunțat aprobarea satri-cel în China pentru adenocarcinom gastric sau al joncțiunii gastroesofagiene avansat, HER2-negativ și CLDN18.2-pozitiv, după eșecul a cel puțin două linii de tratament. Aceasta a fost raportată ca prima autorizare a unei terapii CAR-T pentru o tumoră solidă. Studiul randomizat multicentric CT041-ST-01 a inclus 156 de pacienți. Mediana supraviețuirii fără progresie a fost de 3,25 luni cu satri-cel și 1,77 luni cu tratamentul ales de medic, iar rata de răspuns obiectiv a fost de 22%, comparativ cu 4% în grupul de control. Beneficiul clinic a rămas însă moderat, iar perioada de fabricație subliniază riscul progresiei bolii înainte de administrarea produsului celular.',
        linkuri: [
            { url: 'https://doi.org/10.1016/S0140-6736(25)00860-8', label: 'The Lancet' },
            { url: 'https://clinicaltrials.gov/study/NCT04581473', label: 'ClinicalTrials.gov' },
            { url: 'https://www.carsgen.com/en/news/20260622/', label: 'CARsgen Therapeutics' },
        ],
    },
    {
        id: 2,
        titlu: 'APRIL ar putea limita interferența produsă de BCMA solubil',
        descriere: 'Un alt studiu a investigat modul în care forma solubilă a antigenului BCMA poate afecta terapiile CAR-T utilizate în mielomul multiplu. BCMA solubil se poate lega de receptorii CAR fără a declanșa distrugerea celulei tumorale, funcționând ca o „momeală moleculară”. Cercetătorii au evaluat APRIL, o citokină produsă predominant de celule mieloide. Într-o cohortă de 46 de pacienți tratați cu terapii CAR-T anti-BCMA, răspunsul favorabil a fost asociat cu niveluri mai mari de APRIL și valori mai mici ale BCMA solubil. Experimentele au arătat că APRIL se poate lega de BCMA solubil și poate împiedica interacțiunea acestuia cu receptorul CAR. Rezultatele sunt preliminare, iar studiul nu susține administrarea sistemică a APRIL la pacienți, ci sugerează dezvoltarea unor molecule modificate sau a unor celule CAR-T capabile să neutralizeze local BCMA solubil.',
        linkuri: [
            { url: 'https://doi.org/10.1016/j.bbadis.2026.168342', label: 'BBA – Molecular Basis of Disease' },
        ],
    },
];

const competitii = [
    { id: 1, titlu: 'iGEM Competition 2026', url: 'https://competition.igem.org/' },
    { id: 2, titlu: 'BISC-E 2026 (Bio-based Innovation Student Challenge Europe)', url: 'https://biconsortium.eu/about-bisc-e' },
    { id: 3, titlu: 'EIT Health Innovation / Biotech Challenges', url: 'https://eithealth.eu/' },
    { id: 4, titlu: 'BioHackathon Europe', url: 'https://biohackathon-europe.org/' },
    { id: 5, titlu: 'SynBioBeta Global / Student Challenges', url: 'https://www.synbiobeta.com/' },
    { id: 6, titlu: 'European Congress on Biotechnology (ECB) – Student Competitions', url: 'https://www.efbiotechnology.org/' },
    { id: 7, titlu: 'EIC Pathfinder Challenges 2026', url: 'https://eic.ec.europa.eu/eic-funding-opportunities/eic-pathfinder_en' },
    { id: 8, titlu: 'EIC Transition 2026', url: 'https://eic.ec.europa.eu/eic-funding-opportunities/eic-transition_en' },
    { id: 9, titlu: 'EIC Accelerator 2026', url: 'https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en' },
    { id: 10, titlu: 'Horizon Europe Health Cluster', url: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/cluster-1-health_en' },
    { id: 11, titlu: 'EIT Health Programs & Challenges', url: 'https://eithealth.eu/what-we-do/education/' },
    { id: 12, titlu: 'Apel european 2026 pentru imunologie tumorală și imunoterapie.Pragmatic clinical trials to optimise immunotherapeutic interventions for patients with refractory cancers. Cod: HORIZON-MISS-2026-02-CANCER-03', url: 'https://www.euro-access.eu/en/calls/2674/Pragmatic-clinical-trials-to-optimise-immunotherapeutic-interventions-for-patients-with-refractory-cancers'},
    { id: 13, titlu: 'Virtual Human Twin (VHT) Models for Cancer Research. Cod: HORIZON-MISS-2026-02-CANCER-01', url: 'https://cordis.europa.eu/programme/id/HORIZON_HORIZON-MISS-2026-02-CANCER-01'},
    { id: 14, titlu: 'Microbiome for early cancer prediction before the onset of disease. Cod: HORIZON-MISS-2026-02-CANCER-02', url: 'https://www.horizon-europe.gouv.fr/microbiome-early-cancer-prediction-onset-disease-41628', url2: 'https://23ebfcf9.streak-link.com/C6juHPjZmfHAEAWIAAqnVf8G/https%3A%2F%2Fwww.horizon-europe.gouv.fr%2Fmicrobiome-early-cancer-prediction-onset-disease-41628'},
    { id: 15, titlu: 'PCE 2026 (Proiecte de Cercetare Exploratorie)', url: 'https://uefiscdi.gov.ro/'},
    { id: 16, titlu: 'TE 2026 (Proiecte de Cercetare pentru Stimularea Tinerelor Echipe Independente)', url: 'https://uefiscdi.gov.ro/'},
    { id: 17, titlu: 'CLS 2026 (Organizare și Dezvoltare Cluster Inovativ)', url: 'https://uefiscdi.gov.ro/'},
    { id: 18, titlu: 'UNITE Agile Piloting 2026 – European Digital Health Valleys', url: 'https://uefiscdi-direct.ro/'}
];

export default function ArticolePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/noutati">Noutăți</Link> /{' '}
                    <span>Noutăți științifice</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1 style={{ fontSize: '32px' }}>Progrese recente care extind domeniul terapiilor CAR-T</h1>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <div className="news-articles-list">
                        {noutati.map((item) => (
                            <article key={item.id} className="news-article-item">
                                <h2 className="news-article-title">
                                    <strong>{item.id}. {item.titlu}</strong>
                                </h2>
                                <p className="news-article-desc">{item.descriere}</p>
                                <div className="news-article-links">
                                    <p style={{ marginTop: '4px', fontSize: '13px', color: '#666' }}>
                                        Link:{' '}
                                        {item.linkuri.map((link, idx) => (
                                            <span key={idx}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#e91e8c' }}>
                                                    {link.url}
                                                </a>
                                                {idx < item.linkuri.length - 1 && ' | '}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <h2 className="news-section-heading">Competiții internaționale / europene importante în Biotehnologii</h2>
                    <ul className="competitions-list">
                        {competitii.map((item) => (
                            <li key={item.id} className="competition-item">
                                <div>
                                    <strong>{item.id}. {item.titlu}</strong>
                                    <p style={{ marginTop: '4px', fontSize: '13px', color: '#666' }}>
                                        Link:{' '}
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#e91e8c' }}>
                                            {item.url}
                                        </a>
                                        {item.url2 && (
                                            <>
                                                {' | '}
                                                <a href={item.url2} target="_blank" rel="noopener noreferrer" style={{ color: '#e91e8c' }}>
                                                    {item.url2}
                                                </a>
                                            </>
                                        )}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
