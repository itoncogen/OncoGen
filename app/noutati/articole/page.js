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
    {
        id: 3,
        titlu: 'Prima terapie CAR-T alogeneică primește Breakthrough Therapy de la FDA — AJMC',
        descriere: 'Soficabtagene geleucel (WU-CART-007), o terapie CAR-T off-the-shelf editată cu CRISPR, a obținut desemnarea Breakthrough Therapy de la FDA pentru leucemia și limfomul cu celule T recidivate/refractare. Studiul Phase 1/2 a arătat 91% rată de răspuns și 73% remisie completă. Spre deosebire de CAR-T-ul tradițional, nu necesită 4 săptămâni de producție personalizată.',
        linkuri: [{ url: 'https://www.ajmc.com/view/off-the-shelf-car-t-cell-therapy-granted-breakthrough-therapy-designation-for-aggressive-t-cell-cancers', label: 'AJMC' }],
    },
    {
        id: 4,
        titlu: 'CAR-T off-the-shelf pentru lupus — CRISPR Medicine News',
        descriere: 'Fate Therapeutics a raportat date Phase 1 promițătoare pentru FT819, un CAR-T off-the-shelf editat genetic, în lupusul eritematos sistemic (LES). Terapia a indus răspunsuri clinice semnificative fără chimioterapie de condiționare prealabilă — o premieră în domeniu.',
        linkuri: [
            { url: 'https://crisprmedicinenews.com/news/cmn-weekly-13-june-2025-your-weekly-crispr-medicine-news/', label: 'CRISPR Medicine News' },
            { url: 'https://crisprmedicinenews.com/clinical-trial/systemic-lupus-erythematosus-sle-nct06308978/', label: 'Clinical Trial NCT06308978' },
        ],
    },
    {
        id: 5,
        titlu: 'KIR-CAR / SynKIR-110 în cancer ovarian, mezoteliom, colangiocarcinom — eCancer / AACR 2026',
        descriere: 'SynKIR-110, o terapie inovatoare care utilizează receptori de tip NK (KIR) pe celulele T, arată rezultate promițătoare în Phase 1 pentru cancer ovarian avansat, mezoteliom și colangiocarcinom. Această abordare depășește epuizarea celulelor T — una dintre principalele bariere în tumorile solide.',
        linkuri: [{ url: 'https://ecancer.org/en/news/28100-aacr-2026-new-kir-car-t-cell-therapy-shows-promise-in-multiple-solid-cancers', label: 'eCancer' }],
    },
    {
        id: 6,
        titlu: 'MD Anderson: CAR-T anti-CD94 produs în 3 zile — FirstWord Pharma / MD Anderson',
        descriere: 'Cercetătorii de la MD Anderson și CTMC au dezvoltat un CAR-T targetând CD94+ pentru limfoame T/NK agresive. FDA a aprobat studiul Phase 1. Inovația: producția durează doar 3 zile, iar livrarea la pacient se face în 11 zile.',
        linkuri: [
            { url: 'https://firstwordpharma.com/story/7432627', label: 'FirstWord Pharma' },
            { url: 'https://www.mdanderson.org/newsroom/novel-car-t-cell-therapy-developed-by-ut-md-anderson-researchers-moves-into-clinical-studies.h00-159855345.html', label: 'MD Anderson' },
        ],
    },
    {
        id: 7,
        titlu: 'MIT: adjuvant mRNA care amplifică răspunsul imun antitumoral — MIT News',
        descriere: 'Ingineri de la MIT au dezvoltat un nou adjuvant pe bază de mRNA care amplifică semnificativ răspunsul celulelor T la vaccinurile anticancer. În modele murine, combinația a eradicat majoritatea tumorilor și a potențiat efectul inhibitorilor de checkpoint.',
        linkuri: [{ url: 'https://news.mit.edu/2026/new-approach-cancer-vaccination-yields-more-powerful-t-cells-0513', label: 'MIT News' }],
    },
    {
        id: 8,
        titlu: 'Vaccin personalizat ADN pentru glioblastom — Washington University / WashU Medicine',
        descriere: 'Un vaccin ADN personalizat pentru glioblastom a arătat siguranță și răspunsuri imune robuste în Phase 1. Un subset de pacienți a prezentat supraviețuire fără recidivă prelungită după chirurgie.',
        linkuri: [{ url: 'https://medicine.washu.edu/news/personalized-vaccine-shows-promise-against-aggressive-brain-cancer/', label: 'WashU Medicine' }],
    },
    {
        id: 9,
        titlu: 'NOUS-209: vaccin pentru sindrom Lynch — MD Anderson',
        descriere: 'Vaccinul investigațional NOUS-209 a demonstrat capacitatea de a stimula sistemul imunitar să targeteze celulele precanceroase la persoanele cu sindrom Lynch. Este un pas spre interceptarea cancerului înainte să apară.',
        linkuri: [{ url: 'https://www.mdanderson.org/newsroom/research-newsroom/immune-targeting-vaccine-shows-promise-intercepting-cancer-in-pa.h00-159852189.html', label: 'MD Anderson' }],
    },
    {
        id: 10,
        titlu: 'B7-H3: cea mai fierbinte țintă din oncologia 2026 — Investing News / INN',
        descriere: 'B7-H3, o proteină supraexprimată în multe tumori solide letale, a devenit ținta numărul 1 în dezvoltarea de terapii noi. În 2026, multiple programe anti-B7-H3 ating faze clinice.',
        linkuri: [{ url: 'https://investingnews.com/a-cancer-antigen-long-thought-untouchable-is-suddenly-the-hottest-target-in-oncology/', label: 'Investing News' }],
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
