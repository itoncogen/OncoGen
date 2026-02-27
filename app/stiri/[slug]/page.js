import { fetchArticleBySlug, fetchArticles } from '../../../lib/contentful';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const articles = await fetchArticles();
    return articles.map((item) => ({ slug: item.fields.slug }));
}

export default async function ArticlePage({ params }) {
    const article = await fetchArticleBySlug(params.slug);
    if (!article) {
        notFound();
    }
    const { title, date, category, body } = article.fields;

    return (
        <article className="container">
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/stiri">Știri</Link> / <span>{title}</span>
                </div>
            </div>
            <h1>{title}</h1>
            <div className="card-tag">{category} | {new Date(date).toLocaleDateString('ro-RO')}</div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </article>
    );
}