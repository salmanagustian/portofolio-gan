import { blogPosts } from '../data/blog';

function BlogCard({ date, title, excerpt, tags, url }) {
  const isArticle = url && !url.match(/^https:\/\/medium\.com\/@[^/]+$/);
  return (
    <article
      className="blog-card reveal"
      style={isArticle ? undefined : { cursor: 'default' }}
      onClick={isArticle ? () => window.open(url, '_blank', 'noopener,noreferrer') : undefined}
    >
      <p className="blog-card__date">{date}</p>
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__excerpt">{excerpt}</p>
      <ul className="blog-card__tags">
        {tags.map(tag => (
          <li className="blog-tag" key={tag}>{tag}</li>
        ))}
      </ul>
      {isArticle && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-card__cta"
          onClick={e => e.stopPropagation()}
        >
          READ ON MEDIUM →
        </a>
      )}
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="section-bg-surface">
      <div className="container">
        <div className="section-divider reveal">
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">05 / BLOG</span>
          <span className="dim-tick" aria-hidden="true" />
        </div>

        <h2 className="section-title reveal">Field <span>Notes.</span></h2>

        <div className="blog-grid reveal-group">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
