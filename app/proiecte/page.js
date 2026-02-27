import Link from 'next/link';
import projects from '../../lib/projects.json';

export default function ProiectePage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Proiecte</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Proiectele Noastre de Cercetare</h1>
                    <p>Explorează selecta noastră de proiecte finanțate de Uniunea Europeană și instituții internaționale</p>
                </div>
            </section>

            <section className="filters-section">
                <div className="container">
                    <div className="search-box">
                        <input type="text" placeholder="Caută proiect..." />
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="container">
                    <div className="news-grid">
                        {projects.projects.map((project) => (
                            <article key={project.slug} className="news-card project-card-listing">
                                <div className="card-tag">{project.category}</div>
                                <h3>{project.shortTitle}</h3>
                                <p>{project.description}</p>
                                {project.duration && (
                                    <div className="project-meta">
                                        <span>⏱️ {project.duration}</span>
                                        {project.budget && <span>💰 {project.budget}</span>}
                                    </div>
                                )}
                                <Link href={`/proiecte/${project.slug}`} className="read-more">
                                    Vezi detalii →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
