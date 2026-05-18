import Link from 'next/link';

export const metadata = {
    title: 'Articole | OncoGen',
    description: 'Articole și materiale publicate de echipa OncoGen.',
};

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
                    <p className="section-intro">Conținutul va fi adăugat în curând.</p>
                </div>
            </section>
        </>
    );
}
