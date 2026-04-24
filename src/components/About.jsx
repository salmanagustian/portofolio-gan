export default function About() {
  const facts = [
    { label: 'Location',      value: 'Indonesia' },
    { label: 'Primary Stack', value: 'Node.js / NestJS' },
    { label: 'Databases',     value: 'PostgreSQL / Redis' },
    { label: 'Messaging',     value: 'Kafka' },
    { label: 'Users Served',  value: '500K+' },
    { label: 'Experience',    value: '5+ Years' },
    { label: 'Status',        value: 'Open to Roles', accent: true },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-divider reveal">
          <span className="section-label">// SECTION_01 — ABOUT</span>
        </div>
        <h2 className="section-title reveal">About <span>the system.</span></h2>

        <div className="about-grid">
          <div className="about-box reveal">
            <p className="about-text">
              I&apos;m a backend engineer with <strong>5+ years of experience</strong> building the
              distributed systems and APIs that modern platforms depend on. My work lives in the
              layer most users never see — but feel immediately when something goes wrong.
            </p>
            <p className="about-text">
              I specialize in <strong>real-time and event-driven architectures</strong>, with a
              focus on systems that handle high concurrency without sacrificing data consistency.
              I&apos;ve shipped production systems across SaaS, logistics, and fintech — each with
              different constraints and trade-offs.
            </p>
            <p className="about-text">
              I think carefully about <strong>scalability and business fit</strong>: when a
              monolith is the right call, and when microservices earn their complexity. I prefer
              systems that are boring at 3am and fast at 3pm.
            </p>
          </div>

          <div className="about-facts reveal">
            {facts.map(({ label, value, accent }) => (
              <div className="fact-row" key={label}>
                <span className="fact-label">{label}</span>
                <span className={accent ? 'fact-value fact-value--accent' : 'fact-value'}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
