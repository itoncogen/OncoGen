import Link from 'next/link';

export const metadata = {
    title: 'Noutăți științifice | OncoGen',
    description: 'Cele mai recente noutăți științifice din domeniul oncologiei și terapiilor celulare.',
};

const noutati = [
    {
        id: 1,
        titlu: 'Prima terapie CAR-T alogeneică primește Breakthrough Therapy de la FDA — AJMC',
        descriere: 'Soficabtagene geleucel (WU-CART-007), o terapie CAR-T "off-the-shelf" editată cu CRISPR, a obținut desemnarea Breakthrough Therapy de la FDA pentru leucemia și limfomul cu celule T recidivate/refractare. Studiul Phase 1/2 a arătat 91% rată de răspuns și 73% remisie completă. Spre deosebire de CAR-T-ul tradițional, nu necesită 4 săptămâni de producție personalizată.',
        linkuri: [
            { url: 'https://www.ajmc.com/view/off-the-shelf-car-t-cell-therapy-granted-breakthrough-therapy-designation-for-aggressive-t-cell-cancers', label: 'AJMC' },
        ],
    },
    {
        id: 2,
        titlu: 'CAR-T off-the-shelf pentru lupus — CRISPR Medicine News',
        descriere: 'Fate Therapeutics a raportat date Phase 1 promițătoare pentru FT819, un CAR-T off-the-shelf editat genetic, în lupusul eritematos sistemic (LES). Terapia a indus răspunsuri clinice semnificative fără chimioterapie de condiționare prealabilă — o premieră în domeniu.',
        linkuri: [
            { url: 'https://crisprmedicinenews.com/news/cmn-weekly-13-june-2025-your-weekly-crispr-medicine-news/', label: 'CRISPR Medicine News' },
            { url: 'https://crisprmedicinenews.com/clinical-trial/systemic-lupus-erythematosus-sle-nct06308978/', label: 'Clinical Trial NCT06308978' },
        ],
    },
    {
        id: 3,
        titlu: 'KIR-CAR / SynKIR-110 în cancer ovarian, mezoteliom, colangiocarcinom — eCancer / AACR 2026',
        descriere: 'SynKIR-110, o terapie inovatoare care utilizează receptori de tip NK (KIR) pe celulele T, arată rezultate promițătoare în Phase 1 pentru cancer ovarian avansat, mezoteliom și colangiocarcinom. Această abordare depășește epuizarea celulelor T — una dintre principalele bariere în tumorile solide.',
        linkuri: [
            { url: 'https://ecancer.org/en/news/28100-aacr-2026-new-kir-car-t-cell-therapy-shows-promise-in-multiple-solid-cancers', label: 'eCancer' },
        ],
    },
    {
        id: 4,
        titlu: 'MD Anderson: CAR-T anti-CD94 produs în 3 zile — FirstWord Pharma / MD Anderson',
        descriere: 'Cercetătorii de la MD Anderson și CTMC au dezvoltat un CAR-T targetând CD94+ pentru limfoame T/NK agresive. FDA a aprobat studiul Phase 1. Inovația: producția durează doar 3 zile, iar livrarea la pacient se face în 11 zile.',
        linkuri: [
            { url: 'https://firstwordpharma.com/story/7432627', label: 'FirstWord Pharma' },
            { url: 'https://www.mdanderson.org/newsroom/novel-car-t-cell-therapy-developed-by-ut-md-anderson-researchers-moves-into-clinical-studies.h00-159855345.html', label: 'MD Anderson' },
        ],
    },
    {
        id: 5,
        titlu: 'MIT: adjuvant mRNA care amplifică răspunsul imun antitumoral — MIT News',
        descriere: 'Ingineri de la MIT au dezvoltat un nou adjuvant pe bază de mRNA care amplifică semnificativ răspunsul celulelor T la vaccinurile anticancer. În modele murine, combinația a eradicat majoritatea tumorilor și a potențiat efectul inhibitorilor de checkpoint.',
        linkuri: [
            { url: 'https://news.mit.edu/2026/new-approach-cancer-vaccination-yields-more-powerful-t-cells-0513', label: 'MIT News' },
        ],
    },
    {
        id: 6,
        titlu: 'Vaccin personalizat ADN pentru glioblastom — Washington University / WashU Medicine',
        descriere: 'Un vaccin ADN personalizat pentru glioblastom (cel mai agresiv cancer cerebral) a arătat siguranță și răspunsuri imune robuste în Phase 1. Un subset de pacienți a prezentat supraviețuire fără recidivă prelungită după chirurgie.',
        linkuri: [
            { url: 'https://medicine.washu.edu/news/personalized-vaccine-shows-promise-against-aggressive-brain-cancer/', label: 'WashU Medicine' },
        ],
    },
    {
        id: 7,
        titlu: 'NOUS-209: vaccin pentru sindrom Lynch — MD Anderson',
        descriere: 'Vaccinul investigațional NOUS-209 a demonstrat capacitatea de a stimula sistemul imunitar să targeteze celulele precanceroase la persoanele cu sindrom Lynch (risc genetic ridicat de cancer). Este un pas spre interceptarea cancerului înainte să apară.',
        linkuri: [
            { url: 'https://www.mdanderson.org/newsroom/research-newsroom/immune-targeting-vaccine-shows-promise-intercepting-cancer-in-pa.h00-159852189.html', label: 'MD Anderson' },
        ],
    },
    {
        id: 8,
        titlu: 'B7-H3: cea mai fierbinte țintă din oncologia 2026 — Investing News / INN',
        descriere: 'B7-H3, o proteină supraexprimată în multe tumori solide letale, a devenit ținta numărul 1 în dezvoltarea de terapii noi. În 2026, multiple programe anti-B7-H3 ating faze clinice: anticorpi bispecifici, ADC-uri, radiofarmaceutice și NK cell engagers.',
        linkuri: [
            { url: 'https://investingnews.com/a-cancer-antigen-long-thought-untouchable-is-suddenly-the-hottest-target-in-oncology/', label: 'Investing News' },
        ],
    },
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
                    <h1>Noutăți științifice</h1>
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
                                    {item.linkuri.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="news-article-link"
                                        >
                                            Link &rarr;
                                        </a>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
