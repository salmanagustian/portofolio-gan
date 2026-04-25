import meLineImg from '../assets/me-line.png';

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
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">02 / ABOUT</span>
          <span className="dim-tick" aria-hidden="true" />
        </div>
        <h2 className="section-title reveal">About <span>me.</span></h2>

        <div className="about-grid reveal-group">
          <div className="about-col-left reveal">
            <div className="about-portrait">
              <div className="about-portrait__frame">
                <span className="bracket bracket--tl" aria-hidden="true" />
                <span className="bracket bracket--tr" aria-hidden="true" />
                <span className="bracket bracket--bl" aria-hidden="true" />
                <span className="bracket bracket--br" aria-hidden="true" />
                <img src={meLineImg} alt="Portrait of Salman" className="about-portrait__img" />
                <span className="about-portrait__label">M SALMAN AGUSTIAN // BACKEND MAGANG</span>
              </div>
            </div>
          </div>

          <div className="about-col-right reveal">
            <div className="about-bio">
              <p className="about-text">
                I&apos;m a backend engineer with <strong>5+ years of experience</strong> building the
                distributed systems and APIs that modern platforms depend on.
              </p>
              <p className="about-text">
                Specialize in <strong>real-time and event-driven architectures</strong>, with a
                focus on systems that handle high concurrency without sacrificing data consistency.
                I&apos;ve shipped production systems across SaaS, logistics, and fintech — each with
                different constraints and trade-offs.
              </p>
            </div>

            <div className="section-divider about-divider" aria-hidden="true">
              <span className="dim-tick" />
              <span className="dim-tick" />
            </div>

            <div className="about-facts">
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
      </div>
    </section>
  );
}
