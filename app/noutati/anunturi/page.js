import Link from 'next/link';

export const metadata = {
    title: 'Anunțuri | OncoGen',
    description: 'Anunțurile și comunicatele oficiale ale Centrului OncoGen.',
};

export default function AnunturiPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/noutati">Noutăți</Link> /{' '}
                    <span>Anunțuri</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Anunțuri</h1>
                    <p>Comunicatele și anunțurile oficiale ale Centrului OncoGen.</p>
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
