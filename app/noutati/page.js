import Link from 'next/link';

export const metadata = {
    title: 'Noutăți | OncoGen',
    description: 'Anunțuri și articole din activitatea Centrului OncoGen.',
};

export default function NoutatiPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Noutăți</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Noutăți</h1>
                    <p>Anunțuri și articole din activitatea Centrului OncoGen.</p>
                </div>
            </section>

            <section className="hub-section">
                <div className="container">
                    <div className="hub-grid">
                        <Link href="/noutati/anunturi" className="hub-card">
                            <h3>Anunțuri</h3>
                            <p>Comunicatele și anunțurile oficiale ale Centrului OncoGen.</p>
                        </Link>
                        <Link href="/noutati/articole" className="hub-card">
                            <h3>Articole</h3>
                            <p>Articole și materiale publicate de echipa OncoGen.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
