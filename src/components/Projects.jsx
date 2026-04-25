import { projects } from '../data/projects';

function ProjectCard({ num, name, desc, tags, metric }) {
  return (
    <article className="project-card reveal">
      <span className="card-bracket-tl" aria-hidden="true" />
      <span className="card-bracket-br" aria-hidden="true" />
      <p className="project-num">{num}</p>
      <h3 className="project-name">{name}</h3>
      <p className="project-desc">{desc}</p>
      <ul className="project-tags">
        {tags.map(tag => (
          <li className="tag" key={tag}>{tag}</li>
        ))}
      </ul>
      <p className="project-metric">{metric}</p>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-divider reveal">
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">02 / PROJECTS</span>
          <span className="dim-tick" aria-hidden="true" />
        </div>
        <h2 className="section-title reveal">Selected <span>projects.</span></h2>

        <div className="projects-grid reveal-group">
          {projects.map(project => (
            <ProjectCard key={project.num} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
