import Link from 'next/link';
import projects from '../../../lib/projects.json';

export function generateStaticParams() {
    return projects.projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectDetail({ params }) {
    const project = projects.projects.find((p) => p.slug === params.slug);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '60px', textAlign: 'center' }}>
                <h1>Proiectul nu a fost găsit</h1>
                <p>Proiectul pe care îl cauți nu există în baza noastră de date.</p>
                <Link href="/proiecte" className="btn btn-primary">
                    Înapoi la proiecte
                </Link>
            </div>
        );
    }

    const { title, shortTitle, description, category, duration, budget, coordinator, coordinatorLabel, call, callLabel, overview, role, objectives, results, keywords, externalLinks, relatedProjects } = project;

    const redesignedSlugs = new Set(projects.projects.map((item) => item.slug));

    if (redesignedSlugs.has(project.slug)) {
        return (
            <>
                <div className="breadcrumbs">
                    <div className="container">
                        <Link href="/">Acasă</Link> / <Link href="/proiecte">Proiecte</Link> / <span>{shortTitle}</span>
                    </div>
                </div>

                <section className="mountadapt-hero">
                    <div className="container">
                        <span className="mountadapt-badge">{category}</span>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </section>

                <section className="mountadapt-facts">
                    <div className="container">
                        <div className="mountadapt-facts-grid">
                            {duration && (
                                <div className="mountadapt-fact-card">
                                    <h3>Durată</h3>
                                    <p>{duration}</p>
                                </div>
                            )}
                            {budget && (
                                <div className="mountadapt-fact-card">
                                    <h3>Buget</h3>
                                    <p>{budget}</p>
                                </div>
                            )}
                            {coordinator && (
                                <div className="mountadapt-fact-card">
                                    <h3>Coordonator</h3>
                                    <p>{coordinator}</p>
                                </div>
                            )}
                            {call && (
                                <div className="mountadapt-fact-card">
                                    <h3>Apel</h3>
                                    <p>{call}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="mountadapt-main">
                    <div className="container mountadapt-layout">
                        <article className="mountadapt-content">
                            {overview && (
                                <section className="mountadapt-panel">
                                    <h2>Prezentare Generală</h2>
                                    <p>{overview}</p>
                                </section>
                            )}

                            {role && (
                                <section className="mountadapt-panel">
                                    <h2>Rolul OncoGen</h2>
                                    <p>{role}</p>
                                </section>
                            )}

                            {objectives && objectives.length > 0 && (
                                <section className="mountadapt-panel">
                                    <h2>Obiective</h2>
                                    <ul>
                                        {objectives.map((obj, idx) => (
                                            <li key={idx}>{obj}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {results && results.length > 0 && (
                                <section className="mountadapt-panel">
                                    <h2>Rezultate Anticipate</h2>
                                    <ul>
                                        {results.map((res, idx) => (
                                            <li key={idx}>{res}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            <div className="mountadapt-actions">
                                <Link href="/proiecte" className="btn btn-primary">
                                    Înapoi la proiecte
                                </Link>
                                <Link href="/contact" className="btn btn-secondary">
                                    Contactează-ne
                                </Link>
                            </div>
                        </article>

                        <aside className="mountadapt-sidebar">
                            <div className="mountadapt-sidecard">
                                <h4>Informații proiect</h4>
                                <p><strong>Titlu complet:</strong><br />{title}</p>
                                <p><strong>Tip finanțare:</strong><br />{category}</p>
                                {duration && <p><strong>Perioadă:</strong><br />{duration}</p>}
                                {budget && <p><strong>Buget total:</strong><br />{budget}</p>}
                                {coordinator && <p><strong>{coordinatorLabel || 'Coordonator'}:</strong><br />{coordinator}</p>}
                                {call && <p><strong>{callLabel || 'Cod apel'}:</strong><br />{call}</p>}
                            </div>

                            {externalLinks && externalLinks.length > 0 && (
                                <div className="mountadapt-sidecard">
                                    <h4>Resurse proiect</h4>
                                    <ul>
                                        {externalLinks.map((resource, idx) => (
                                            <li key={idx}>
                                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                                    {resource.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {keywords && keywords.length > 0 && (
                                <div className="mountadapt-sidecard">
                                    <h4>Domenii cheie</h4>
                                    <ul>
                                        {keywords.map((keyword, idx) => (
                                            <li key={idx}>{keyword}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {relatedProjects && relatedProjects.length > 0 && (
                                <div className="mountadapt-sidecard">
                                    <h4>Proiecte conexe</h4>
                                    <ul>
                                        {relatedProjects.map((relatedSlug, idx) => {
                                            const relatedProject = projects.projects.find((p) => p.slug === relatedSlug);
                                            return relatedProject ? (
                                                <li key={idx}>
                                                    <Link href={`/proiecte/${relatedProject.slug}`}>
                                                        {relatedProject.shortTitle}
                                                    </Link>
                                                </li>
                                            ) : null;
                                        })}
                                    </ul>
                                </div>
                            )}
                        </aside>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/proiecte">Proiecte</Link> / <span>{shortTitle}</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </section>

            <section className="container">
                {(duration || budget || coordinator || call) && (
                    <div className="project-meta-info">
                        {duration && (
                            <div className="meta-item">
                                <strong>DURATĂ</strong>
                                <span>{duration}</span>
                            </div>
                        )}
                        {budget && (
                            <div className="meta-item">
                                <strong>BUGET</strong>
                                <span>{budget}</span>
                            </div>
                        )}
                        {coordinator && (
                            <div className="meta-item">
                                <strong>COORDONATOR</strong>
                                <span>{coordinator}</span>
                            </div>
                        )}
                        {call && (
                            <div className="meta-item">
                                <strong>APEL</strong>
                                <span>{call}</span>
                            </div>
                        )}
                    </div>
                )}

                <div className="content-grid">
                    <article>
                        {overview && (
                            <section className="overview">
                                <h2>Prezentare Generală</h2>
                                <p>{overview}</p>
                            </section>
                        )}

                        {role && (
                            <section className="objectives">
                                <h2>Rolul OncoGen</h2>
                                <p>{role}</p>
                            </section>
                        )}

                        {objectives && objectives.length > 0 && (
                            <section className="objectives">
                                <h2>Obiective</h2>
                                <ul>
                                    {objectives.map((obj, idx) => (
                                        <li key={idx}>{obj}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {results && results.length > 0 && (
                            <section className="results">
                                <h2>Rezultate Anticipate</h2>
                                <ul>
                                    {results.map((res, idx) => (
                                        <li key={idx}>{res}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <div className="cta-buttons">
                            <Link href="/proiecte" className="btn btn-primary">
                                Înapoi la proiecte
                            </Link>
                            <Link href="/contact" className="btn btn-secondary">
                                Contactează-ne
                            </Link>
                        </div>
                    </article>

                    <aside className="sidebar">
                        <h4>📋 Informații Proiect</h4>
                        <p>
                            <strong>Titlu Complet:</strong>
                            <br />
                            {title}
                        </p>

                        <p>
                            <strong>Tip Finanțare:</strong>
                            <br />
                            {category}
                        </p>

                        {duration && (
                            <p>
                                <strong>Perioada Derulării:</strong>
                                <br />
                                {duration}
                            </p>
                        )}

                        {budget && (
                            <p>
                                <strong>Buget Total:</strong>
                                <br />
                                {budget}
                            </p>
                        )}

                        {coordinator && (
                            <p>
                                <strong>Coordonator:</strong>
                                <br />
                                {coordinator}
                            </p>
                        )}

                        {keywords && keywords.length > 0 && (
                            <>
                                <h4 style={{ marginTop: '30px' }}>🎯 Domenii Conexe</h4>
                                <ul>
                                    {keywords.map((keyword, idx) => (
                                        <li key={idx}>{keyword}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {relatedProjects && relatedProjects.length > 0 && (
                            <>
                                <h4 style={{ marginTop: '30px' }}>🔗 Vezi și</h4>
                                <ul>
                                    {relatedProjects.map((relatedSlug, idx) => {
                                        const relatedProject = projects.projects.find((p) => p.slug === relatedSlug);
                                        return relatedProject ? (
                                            <li key={idx}>
                                                <Link href={`/proiecte/${relatedProject.slug}`}>
                                                    {relatedProject.shortTitle}
                                                </Link>
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            </>
                        )}
                    </aside>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Interesat în colaborare?</h2>
                    <p>OncoGen este deschis pentru noi parteneriate și colaborări în domenii de cercetare avansată.</p>
                    <Link href="/contact" className="btn btn-primary">
                        Contactează-ne
                    </Link>
                </div>
            </section>
        </>
    );
}
