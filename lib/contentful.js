import { createClient } from 'contentful';

// expects CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in env
const hasContentfulConfig =
    Boolean(process.env.CONTENTFUL_SPACE_ID) &&
    Boolean(process.env.CONTENTFUL_ACCESS_TOKEN);

export const client = hasContentfulConfig
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
    : null;

const fallbackArticleSeed = [
    {
        slug: 'comunicat-de-presa-centrul-oncogen-participa-in-proiectul-therafast',
        title: 'COMUNICAT DE PRESĂ: Centrul OncoGen participă în proiectul TheraFast',
        category: 'Știri OncoGen',
        date: '2026-02-11',
        sourceUrl: 'https://oncogen.ro/ro/comunicat-de-presa-centrul-oncogen-participa-in-proiectul-therafast/',
    },
    {
        slug: 'centrul-de-terapii-genice-si-celulare-oncogen-anunta-inceperea-proiectului-decodex',
        title: 'Centrul de Terapii Genice și Celulare OncoGen anunță începerea proiectului DECODEX',
        category: 'Știri OncoGen',
        date: '2026-02-11',
        sourceUrl: 'https://oncogen.ro/ro/centrul-de-terapii-genice-si-celulare-oncogen-anunta-inceperea-proiectului-decodex/',
    },
    {
        slug: 'digipedia-ai-poate-schimba-vieti',
        title: 'Digipedia: AI poate schimba vieti',
        category: 'Evenimente științifice',
        date: '2024-11-15',
        sourceUrl: 'https://oncogen.ro/ro/digipedia-ai-poate-schimba-vieti/',
    },
    {
        slug: 'agenda-romania-4-0',
        title: 'Agenda România 4.0',
        category: 'Evenimente științifice',
        date: '2024-10-16',
        sourceUrl: 'https://oncogen.ro/ro/agenda-romania-4-0/',
    },
    {
        slug: 'jromedinf-01',
        title: 'Prima editie a conferintei jRoMedINF',
        category: 'Evenimente științifice',
        date: '2024-05-27',
        sourceUrl: 'https://oncogen.ro/ro/jromedinf-01/',
    },
    {
        slug: 'oyr-medis',
        title: 'OncoGen Young Researchers la Congresul Medis',
        category: 'Evenimente științifice',
        date: '2024-05-11',
        sourceUrl: 'https://oncogen.ro/ro/oyr-medis/',
    },
    {
        slug: 'conferinta-prof-tudor-oprea',
        title: 'Conferinta Profesorului Tudor Oprea',
        category: 'Evenimente științifice',
        date: '2024-04-24',
        sourceUrl: 'https://oncogen.ro/ro/conferinta-prof-tudor-oprea/',
    },
    {
        slug: 'acord-oncogen-cellcopedia',
        title: 'Centrul Oncogen semneaza un acord cu CellCopedia pentru a produce Terapii Celulare pentru Bolile oncologice',
        category: 'Știri OncoGen',
        date: '2024-04-17',
        sourceUrl: 'https://oncogen.ro/ro/acord-oncogen-cellcopedia/',
    },
    {
        slug: 'hackathon-synbio',
        title: 'Hackathon SynBio',
        category: 'Evenimente științifice',
        date: '2024-03-13',
        sourceUrl: 'https://oncogen.ro/ro/hackathon-synbio/',
    },
    {
        slug: 'cercetatorii-israelieni-realizeaza-un-pas-important-in-tratamentul-cancerului-un-nou-anticorp-bispecific-pentru-potentarea-imunitatii-antitumorale',
        title: 'Cercetătorii israelieni realizează un pas important în tratamentul cancerului: „Un nou anticorp bispecific pentru potențarea imunității antitumorale”',
        category: 'Știri OncoGen',
        date: '2024-01-30',
        sourceUrl: 'https://oncogen.ro/ro/cercetatorii-israelieni-realizeaza-un-pas-important-in-tratamentul-cancerului-un-nou-anticorp-bispecific-pentru-potentarea-imunitatii-antitumorale/',
    },
    {
        slug: 'interferente-arta-vietii',
        title: 'Interferențe. Arta vieții',
        category: 'Știri OncoGen',
        date: '2023-12-05',
        sourceUrl: 'https://oncogen.ro/ro/interferente-arta-vietii/',
    },
    {
        slug: 'conferinta-romedinf-2023',
        title: 'Conferința RoMedINF 2023',
        category: 'Evenimente științifice',
        date: '2023-10-12',
        sourceUrl: 'https://oncogen.ro/ro/conferinta-romedinf-2023/',
    },
    {
        slug: 'noaptea-cercetatorilor',
        title: 'Noaptea Cercetatorilor',
        category: 'Știri OncoGen',
        date: '2023-10-11',
        sourceUrl: 'https://oncogen.ro/ro/noaptea-cercetatorilor/',
    },
    {
        slug: 'schimb-de-experienta-cu-studenti-straini',
        title: 'Schimb de experiență cu studenți străini',
        category: 'Știri OncoGen',
        date: '2023-09-27',
        sourceUrl: 'https://oncogen.ro/ro/schimb-de-experienta-cu-studenti-straini/',
    },
    {
        slug: 'smart-diaspora-2023',
        title: 'Smart Diaspora 2023',
        category: 'Știri OncoGen',
        date: '2023-09-05',
        sourceUrl: 'https://oncogen.ro/ro/smart-diaspora-2023/',
    },
    {
        slug: 'concluzii-asthmathon-2022',
        title: 'Concluzii – Asthmathon 2022',
        category: 'Evenimente științifice',
        date: '2022-06-09',
        sourceUrl: 'https://oncogen.ro/ro/concluzii-asthmathon-2022/',
    },
    {
        slug: 'comunicat-de-presa-asthmathon-2022',
        title: 'Comunicat de presă – Asthmathon 2022',
        category: 'Evenimente științifice',
        date: '2022-05-13',
        sourceUrl: 'https://oncogen.ro/ro/comunicat-de-presa-asthmathon-2022/',
    },
    {
        slug: 'asthmathon-2022',
        title: 'Asthmathon 2022',
        category: 'Evenimente științifice',
        date: '2022-04-12',
        sourceUrl: 'https://oncogen.ro/ro/asthmathon-2022/',
    },
    {
        slug: 'rosecan-aliniat-la-politicile-ue-in-cancer',
        title: 'ROSECAN aliniat la politicile UE în Cancer',
        category: 'ROSECAN',
        date: '2021-02-04',
        sourceUrl: 'https://oncogen.ro/ro/rosecan-aliniat-la-politicile-ue-in-cancer/',
    },
    {
        slug: 'alergia-la-ambrozia',
        title: 'Alergia la ambrozia',
        category: 'INSPIRED',
        date: '2020-07-27',
        sourceUrl: 'https://oncogen.ro/ro/alergia-la-ambrozia/',
    },
    {
        slug: 'recunoastere-din-partea-organizatiei-mondiale-a-sanatatii-pentru-oncogen',
        title: 'Recunoaștere din partea Organizației Mondiale a Sănătății pentru OncoGen',
        category: 'DECODE',
        date: '2020-04-08',
        sourceUrl: 'https://oncogen.ro/ro/recunoastere-din-partea-organizatiei-mondiale-a-sanatatii-pentru-oncogen/',
    },
    {
        slug: 'vaccinul-pentru-covid-19-in-faza-de-testare-la-oncogen',
        title: 'Vaccinul pentru COVID-19 în faza de testare la OncoGen',
        category: 'Știri OncoGen',
        date: '2020-03-26',
        sourceUrl: 'https://oncogen.ro/ro/vaccinul-pentru-covid-19-in-faza-de-testare-la-oncogen/',
    },
    {
        slug: 'cercetatorii-oncogen-propun-o-strategie-de-vaccinomica-personalizata-pentru-coronavirusul-din-china',
        title: 'Cercetătorii OncoGen propun o strategie de vaccinomică personalizată pentru coronavirusul din China',
        category: 'Știri OncoGen',
        date: '2020-01-29',
        sourceUrl: 'https://oncogen.ro/ro/cercetatorii-oncogen-propun-o-strategie-de-vaccinomica-personalizata-pentru-coronavirusul-din-china/',
    },
    {
        slug: 'proiect-romania-serbia-diagnostic-si-tratament-personalizat-in-cancer',
        title: 'Proiect România-Serbia: diagnostic și tratament personalizat în cancer',
        category: 'ROSECAN',
        date: '2020-01-08',
        sourceUrl: 'https://oncogen.ro/ro/proiect-romania-serbia-diagnostic-si-tratament-personalizat-in-cancer/',
    },
    {
        slug: 'fiziologia-azi-inovare-integrare-translatare',
        title: 'Fiziologia azi: Inovare, Integrare, Translatare',
        category: 'Știri OncoGen',
        date: '2020-01-08',
        sourceUrl: 'https://oncogen.ro/ro/fiziologia-azi-inovare-integrare-translatare/',
    },
    {
        slug: 'progres-in-diagnosticul-molecular-personalizat-in-cancer-la-oncogen',
        title: 'Progres în diagnosticul molecular personalizat în cancer la OncoGen',
        category: 'Știri OncoGen',
        date: '2019-10-29',
        sourceUrl: 'https://oncogen.ro/ro/progres-in-diagnosticul-molecular-personalizat-in-cancer-la-oncogen/',
    },
    {
        slug: 'cercetator-oncogen-premiat-la-conferinta-din-malaga-a-societatii-europene-de-cardiologie',
        title: 'Cercetător OncoGen premiat la conferința din Malaga a Societății Europene de Cardiologie',
        category: 'Știri OncoGen',
        date: '2019-10-24',
        sourceUrl: 'https://oncogen.ro/ro/cercetator-oncogen-premiat-la-conferinta-din-malaga-a-societatii-europene-de-cardiologie/',
    },
    {
        slug: 'cercetatorii-oncogen-timisoara-pasi-decisivi-in-obtinerea-unui-vaccin-personalizat-impotriva-cancerului',
        title: 'Cercetătorii OncoGen Timișoara, pași decisivi în obținerea unui vaccin personalizat împotriva cancerului',
        category: 'CAR-NK',
        date: '2019-09-18',
        sourceUrl: 'https://oncogen.ro/ro/cercetatorii-oncogen-timisoara-pasi-decisivi-in-obtinerea-unui-vaccin-personalizat-impotriva-cancerului/',
    },
    {
        slug: 'vizita-premierului-mihai-tudose-la-oncogen',
        title: 'Vizita Premierului Mihai Tudose la OncoGen',
        category: 'Știri OncoGen',
        date: '2017-12-08',
        sourceUrl: 'https://oncogen.ro/ro/vizita-premierului-mihai-tudose-la-oncogen/',
    },
    {
        slug: 'vizita-presedintelui-romaniei-domnul-klaus-iohannis-la-timisoara',
        title: 'Vizita președintelui României, domnul Klaus Iohannis, la Timișoara',
        category: 'Știri OncoGen',
        date: '2016-10-03',
        sourceUrl: 'https://oncogen.ro/ro/vizita-presedintelui-romaniei-domnul-klaus-iohannis-la-timisoara/',
    },
    {
        slug: 'conferinta-diaspora-in-cercetarea-stiintifica-si-invatamantul-superior-din-romania-diaspora-si-prietenii-sai',
        title: 'Conferinţa „Diaspora în Cercetarea Ştiinţifică şi Învăţământul Superior din România – Diaspora şi prietenii săi”',
        category: 'Știri OncoGen',
        date: '2016-04-29',
        sourceUrl: 'https://oncogen.ro/ro/conferinta-diaspora-in-cercetarea-stiintifica-si-invatamantul-superior-din-romania-diaspora-si-prietenii-sai/',
    },
];

const fallbackArticles = fallbackArticleSeed
    .map((item) => ({
        fields: {
            slug: item.slug,
            title: item.title,
            category: item.category,
            date: item.date,
            excerpt: 'Detalii complete disponibile în articolul original publicat pe oncogen.ro.',
            sourceUrl: item.sourceUrl,
            body: `<p>Acesta este un articol din arhiva OncoGen.</p><p><a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">Citește articolul original</a></p>`,
        },
    }))
    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));

export async function fetchArticles() {
    if (!client) {
        return fallbackArticles;
    }

    try {
        const entries = await client.getEntries({ content_type: 'article', order: '-fields.date' });
        return entries.items;
    } catch {
        return fallbackArticles;
    }
}

export async function fetchArticleBySlug(slug) {
    if (!client) {
        return fallbackArticles.find((item) => item.fields.slug === slug);
    }

    try {
        const entries = await client.getEntries({ content_type: 'article', 'fields.slug': slug, limit: 1 });
        return entries.items[0] || fallbackArticles.find((item) => item.fields.slug === slug);
    } catch {
        return fallbackArticles.find((item) => item.fields.slug === slug);
    }
}