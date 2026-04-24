import { experience } from '../data/experience';

function TimelineItem({ date, role, company, desc }) {
  return (
    <div className="timeline-item reveal">
      <span className="timeline-dot" aria-hidden="true" />
      <div className="timeline-connector" aria-hidden="true" />
      <p className="timeline-date">{date}</p>
      <h3 className="timeline-role">{role}</h3>
      <p className="timeline-company">{company}</p>
      <p className="timeline-desc">{desc}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-divider reveal">
          <span className="section-label">// SECTION_04 — EXPERIENCE</span>
        </div>
        <h2 className="section-title reveal">Work <span>history.</span></h2>

        <div className="timeline reveal-group">
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '0',
            bottom: '0',
            width: '1px',
            background: '#7EC8E3',
            opacity: 0.3,
          }} aria-hidden="true" />

          {experience.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
