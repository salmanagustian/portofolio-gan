import { useState, useMemo } from 'react';
import { projects } from '../data/projects';

function ProjectCard({ num, name, desc, tags, metric, github, live, caseStudy, featured, noReveal }) {
  const [expanded, setExpanded] = useState(false);

  const articleClass = [
    'project-card',
    noReveal ? 'reveal visible' : 'reveal',
    featured ? 'project-card--featured' : '',
  ].filter(Boolean).join(' ');

  return (
    <article className={articleClass}>
      <span className="card-bracket-tl" aria-hidden="true" />
      <span className="card-bracket-br" aria-hidden="true" />
      <div className="project-card-header">
        <p className="project-num">{num}</p>
        {featured && <span className="project-featured-badge">PINNED</span>}
      </div>
      <h3 className="project-name">{name}</h3>
      <p className="project-desc">{desc}</p>
      <ul className="project-tags">
        {tags.map(tag => (
          <li className="tag" key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-card-footer">
        <p className="project-metric">{metric}</p>
        <div className="project-actions">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">↗ GitHub</a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="project-link">↗ Live</a>
          )}
          {caseStudy?.length > 0 && (
            <button
              className="project-expand-btn"
              onClick={() => setExpanded(e => !e)}
              aria-expanded={expanded}
            >
              {expanded ? '↑ COLLAPSE' : '↓ DETAILS'}
            </button>
          )}
        </div>
      </div>
      {expanded && (
        <ul className="case-study-list">
          {caseStudy.map((item, i) => (
            <li key={i} className="case-study-item">{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState('ALL');
  const [hasFiltered, setHasFiltered] = useState(false);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    projects.forEach(p => p.tags.forEach(t => tagSet.add(t)));
    return ['ALL', ...Array.from(tagSet)];
  }, []);

  const handleTagClick = (tag) => {
    if (tag !== 'ALL') setHasFiltered(true);
    setActiveTag(tag);
  };

  const featured = projects.filter(p => p.featured);
  const regular = projects.filter(p => !p.featured);
  const filtered = activeTag === 'ALL' ? [] : projects.filter(p => p.tags.includes(activeTag));

  return (
    <section id="projects" className="section-bg-surface">
      <div className="container">
        <div className="section-divider reveal">
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">01 / PROJECTS</span>
          <span className="dim-tick" aria-hidden="true" />
        </div>
        <h2 className="section-title reveal">Selected <span>projects.</span></h2>

        <div className="filter-bar reveal">
          {allTags.map(tag => (
            <button
              key={tag}
              className={['filter-btn', activeTag === tag ? 'filter-btn--active' : ''].filter(Boolean).join(' ')}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {activeTag === 'ALL' ? (
          <>
            {featured.length > 0 && (
              <div className="projects-featured reveal-group">
                {featured.map(project => (
                  <ProjectCard key={project.num} {...project} noReveal={hasFiltered} />
                ))}
              </div>
            )}
            <div className="projects-grid reveal-group">
              {regular.map(project => (
                <ProjectCard key={project.num} {...project} noReveal={hasFiltered} />
              ))}
            </div>
          </>
        ) : (
          <div key={activeTag} className="projects-filter-grid">
            {filtered.length > 0
              ? filtered.map(project => (
                  <ProjectCard key={project.num} {...project} noReveal />
                ))
              : <p className="filter-empty">// NO_RESULTS — try a different filter</p>
            }
          </div>
        )}
      </div>
    </section>
  );
}
