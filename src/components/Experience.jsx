import { experience } from '../data/experience';

function TimelineItem({ date, role, company, bullets, tech }) {
  return (
    <div className="timeline-item reveal">
      <span className="timeline-dot" aria-hidden="true" />
      <div className="timeline-connector" aria-hidden="true" />
      <p className="timeline-date">{date}</p>
      <h3 className="timeline-role">{role}</h3>
      <p className="timeline-company">{company}</p>
      <ul className="timeline-bullets">
        {bullets.map((b, i) => (
          <li key={i} className="timeline-bullet">{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-divider reveal">
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">04 / EXPERIENCE</span>
          <span className="dim-tick" aria-hidden="true" />
        </div>
        <h2 className="section-title reveal">Work <span>experiences.</span></h2>

        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
