'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import projects from '../../lib/projects.json';

const projectCardImages = {
    'car-nk': '/images/imagini-proiecte/proiect-car-nk.jpg',
    rosecan: '/images/imagini-proiecte/proiect-rosecan.png',
    nanocel: '/images/imagini-proiecte/proiect-nanocel.jpg',
    delimit: '/images/imagini-proiecte/proiect-delimit.png',
    adipogeneza: '/images/imagini-proiecte/proiect-diferentierea_in_vitro-ADIPOGENEZA.jpg',
    'healthy-pregnancy': '/images/imagini-proiecte/proiect-healthy_pregnancy.jpg',
    fibroblastele: '/images/imagini-proiecte/proiect-fibroblastele.jpg',
    decode: '/images/imagini-proiecte/proiect-decode.jpg',
    biovea: '/images/imagini-proiecte/proiect-biovea.jpg',
    bioprintare: '/images/imagini-proiecte/proiect-bioprintare.jpg',
    biomarkeri: '/images/imagini-proiecte/proiect-biomarkeri.png',
    inspired: '/images/imagini-proiecte/proiect-inspired.jpg',
    'bio-amr': '/images/imagini-proiecte/proiect-bio-amr.jpg',
    mountadapt: '/images/imagini-proiecte/proiect-mountadapt.png'
};

export default function ProiectePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const normalizeText = (value) =>
    (value || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
    const filteredProjects = useMemo(() => {
        const query = normalizeText(searchTerm);
        if (!query) return projects.projects;

        return projects.projects.filter((project) => {
            const searchable = [
                project.shortTitle,
                project.title,
                project.category,
                project.description,
                project.overview
            ]
                .map(normalizeText)
                .join(' ');

            return searchable.includes(query);
        });
    }, [searchTerm]);
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Proiecte</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Proiectele noastre de cercetare</h1>
                    <p>Explorează selecția noastră de proiecte finanțate de Uniunea Europeană și instituții internaționale!</p>
                </div>
            </section>

            <section className="filters-section">
                <div className="container">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Caută proiect..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="container">
                    <div className="news-grid">
                        {filteredProjects.map((project) => {
                            const imagePath = projectCardImages[project.slug];
                            const hasImage = Boolean(imagePath);
                            const slugClassName = hasImage ? ` project-card-${project.slug}` : '';

                            return (
                                <article
                                    key={project.slug}
                                    className={`news-card project-card-listing${hasImage ? ' project-card-with-image' : ''}${slugClassName}`}
                                    style={hasImage ? { backgroundImage: `url(${imagePath})` } : undefined}
                                >
                                    <div className="card-tag">{project.category}</div>
                                    <h3>{project.shortTitle}</h3>
                                    <Link href={`/proiecte/${project.slug}`} className="read-more">
                                        Vezi detalii →
                                    </Link>
                                </article>
                            );
                        })}
                        {filteredProjects.length === 0 && (
                            <p className="no-results">Nu am găsit proiecte pentru această căutare.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
