import Link from 'next/link';
import { fetchArticles } from '../../lib/contentful';

const ARTICLES_PER_PAGE = 9;

export default async function NewsPage({ searchParams }) {
    const articles = await fetchArticles();
    const requestedPage = Number(searchParams?.page || 1);
    const totalPages = Math.max(1, Math.ceil(articles.length / ARTICLES_PER_PAGE));
    const currentPage = Number.isFinite(requestedPage)
        ? Math.min(Math.max(requestedPage, 1), totalPages)
        : 1;

    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const visibleArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const pageHref = (page) => (page === 1 ? '/stiri' : `/stiri?page=${page}`);

    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <span>Știri și Evenimente</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Știri și Evenimente</h1>
                    <p>Rămâi la curent cu ultimele descoperiri și activități ale OncoGen</p>
                </div>
            </section>

            <section className="filters-section">
                <div className="container">
                    <div className="search-box">
                        <input type="text" placeholder="Caută articol..." />
                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="container">
                    <div className="news-grid">
                        {visibleArticles.map((item) => {
                            const { title, category, date, excerpt, slug } = item.fields;
                            return (
                                <article key={slug} className="news-card" data-category={category}>
                                    <div className="card-tag">{category} | {new Date(date).toLocaleDateString('ro-RO')}</div>
                                    <h3>{title}</h3>
                                    <p>{excerpt}</p>
                                    <Link href={`/stiri/${slug}`} className="read-more">Citește mai mult →</Link>
                                </article>
                            );
                        })}
                    </div>
                    {totalPages > 1 && (
                        <div className="pagination" aria-label="Paginare articole">
                            {currentPage > 1 && (
                                <Link href={pageHref(currentPage - 1)} className="page-btn">←</Link>
                            )}
                            {pageNumbers.map((page) => (
                                <Link
                                    key={page}
                                    href={pageHref(page)}
                                    className={`page-btn ${page === currentPage ? 'active' : ''}`}
                                >
                                    {page}
                                </Link>
                            ))}
                            {currentPage < totalPages && (
                                <Link href={pageHref(currentPage + 1)} className="page-btn">→</Link>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}