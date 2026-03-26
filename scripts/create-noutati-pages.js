import fs from 'fs';
import path from 'path';

const base = '/vercel/share/v0-project/app/noutati';

const noutatiPage = `import Link from 'next/link';

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
`;

const anunturiPage = `import Link from 'next/link';

export const metadata = {
    title: 'Anunțuri | OncoGen',
    description: 'Comunicatele și anunțurile oficiale ale Centrului OncoGen.',
};

export default function AnunturiPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> /{' '}
                    <Link href="/noutati">Noutăți</Link> / <span>Anunțuri</span>
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
                    <p className="section-intro">
                        Această pagină va conține anunțurile și comunicatele oficiale ale
                        Centrului de Terapii Genice și Celulare OncoGen.
                    </p>
                    <div className="section-cta">
                        <Link href="/noutati" className="btn btn-primary">
                            Înapoi la Noutăți
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
`;

const articolePage = `import Link from 'next/link';

export const metadata = {
    title: 'Articole | OncoGen',
    description: 'Articole și materiale publicate de echipa OncoGen.',
};

export default function ArticolePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> /{' '}
                    <Link href="/noutati">Noutăți</Link> / <span>Articole</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Articole</h1>
                    <p>Articole și materiale publicate de echipa OncoGen.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <p className="section-intro">
                        Această pagină va conține articolele și materialele publicate de
                        cercetătorii și specialiștii Centrului OncoGen.
                    </p>
                    <div className="section-cta">
                        <Link href="/noutati" className="btn btn-primary">
                            Înapoi la Noutăți
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
`;

fs.mkdirSync(path.join(base, 'anunturi'), { recursive: true });
fs.mkdirSync(path.join(base, 'articole'), { recursive: true });

fs.writeFileSync(path.join(base, 'page.js'), noutatiPage, 'utf8');
fs.writeFileSync(path.join(base, 'anunturi', 'page.js'), anunturiPage, 'utf8');
fs.writeFileSync(path.join(base, 'articole', 'page.js'), articolePage, 'utf8');

console.log('Noutati pages created successfully.');
