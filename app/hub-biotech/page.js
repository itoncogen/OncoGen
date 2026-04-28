import Link from 'next/link';

const hubSections = [
    {
        slug: 'transfer-tehnologic',
        title: 'TRANSFER TEHNOLOGIC',
        image: '/images/hub-transfer-tehnologic.png',
        alt: 'Transfer Tehnologic icon',
    },
    {
        slug: 'business-development',
        title: 'BUSINESS DEVELOPMENT',
        image: '/images/hub-business-development.png',
        alt: 'Business Development icon',
    },
    {
        slug: 'sustinere-cercetare-doctorala',
        title: 'SUSȚINERE CERCETARE DOCTORALĂ',
        image: '/images/hub-sustinere-cercetare-doctorala.png',
        alt: 'Susținere Cercetare Doctorală icon',
    },
    {
        slug: 'domenii-interes',
        title: 'DOMENII DE INTERES / NIȘE POTENȚIALE',
        image: '/images/hub-domenii-de-interes.png',
        alt: 'Domenii de Interes icon',
    },
];

export default function HubBiotechPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Hub Biotehnologii</span>
                </div>
            </div>

            <section className="hub-nav-section">
                <div className="container">
                    <div className="hub-nav-grid">
                        {hubSections.map((section) => (
                            <Link
                                key={section.slug}
                                href={`/hub-biotech/${section.slug}`}
                                className="hub-nav-card"
                            >
                                <div className="hub-nav-card-icon">
                                    <img
                                        src={section.image}
                                        alt={section.alt}
                                        style={{ maxWidth: '120px', maxHeight: '120px', width: '100%', height: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                                <h2 className="hub-nav-card-title">{section.title}</h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
